import React, { useState, useEffect, useReducer } from "react";

const useApplicationData = () => {
  // const [modalShown, setModalShown] = useState(false);
  // const [photoData, setPhotoData] = useState();
  // const [likedPhotos, setLikedPhoto] = useState({});
  // const [photos, setPhotos] = useState([]);
  // const [topics, setTopics] = useState([]);
  // const [filteredPhotos, setFilteredPhotos] = useState([]);
  // const [filterID, setFilterID] = useState("");

  const initialState = {
    photos: [],
    topics: [],
    likedPhotos: {},
    modalShown: false,
    photoData: undefined,
    filteredPhotos: [],
    filterID: "",
  };

  const labsReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_PHOTOS_AND_TOPICS":
        const loadState = { ...state };
        loadState.photos = action.payload.photos;
        loadState.topics = action.payload.topics;
        return loadState;

      case "FILTER_ID":
        const filterState = { ...state };
        filterState.filterID = action.payload;
        return filterState;

      case "LOAD_FILTERED_PHOTOS":
        const loadFilteredPhotos = { ...state };
        loadFilteredPhotos.filteredPhotos = action.payload;
        return loadFilteredPhotos;

      case "SHOW_MODAL":
        const showModal = { ...state };
        const photo = showModal.photos.find(
          photo => photo.id === action.payload.id
        );
        showModal.modalShown = true;
        showModal.photoData = photo;
        return showModal;

      case "CLOSE_MODAL":
        const closeModal = { ...state };
        closeModal.modalShown = false;
        closeModal.photoData = undefined;
        return closeModal;

      case "LIKE_PHOTO":
        const likePhoto = { ...state };
        console.log(likePhoto.likedPhotos[action.payload] ? true : false);

        let like;
        if (likePhoto.likedPhotos[action.payload]) {
          like = null;
        } else {
          like = true;
        }
        console.log(like);
        likePhoto.likedPhotos[action.payload] = like;
        return likePhoto;
    }
  };

  const [state, dispatch] = useReducer(labsReducer, initialState);

  // fetches photos and topics from the database, only runs once after first load
  useEffect(() => {
    let loadState = {};
    fetch("/api/photos", {
      method: "GET",
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        loadState.photos = json;
      })
      .then(() => {
        return fetch("/api/topics", {
          method: "GET",
        });
      })
      .then(response => {
        return response.json();
      })
      .then(json => {
        loadState.topics = json;
        dispatch({ type: "LOAD_PHOTOS_AND_TOPICS", payload: loadState });
      })

      .catch(e => console.log(e));
  }, []);

  // fetches photos of a certain category from the database
  useEffect(() => {
    if (state.filterID) {
      fetch(`/api/topics/photos/${state.filterID}`)
        .then(response => {
          return response.json();
        })
        .then(json => {
          dispatch({ type: "LOAD_FILTERED_PHOTOS", payload: json });
        })
        .catch(e => console.log(e));
    }
  }, [state.filterID]);

  return { state, dispatch };
};

export default useApplicationData;
