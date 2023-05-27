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
  const [state, setState] = useState(initialState);

  // const state = {
  //   modalShown,
  //   photoData,
  //   likedPhotos,
  //   photos,
  //   topics,
  //   filteredPhotos,
  //   filterID,
  // };

  // fetches photos and topics from the database, only runs once after first load
  useEffect(() => {
    fetch("/api/photos", {
      method: "GET",
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        // setPhotos(json);
        setState({ ...state, photos: json });
      })
      .catch(e => console.log(e));

    fetch("/api/topics", {
      method: "GET",
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        // setTopics(json);
        setState({ ...state, topics: json });
      })
      .catch(e => console.log(e));
  }, []);

  // gets the id of the category that the user clicked
  const filterPhotos = id => {
    // setFilterID(id);
    setState({ ...state, filterID: id });
  };

  // fetches photos of a certain category from the database
  useEffect(() => {
    if (filterID) {
      fetch(`/api/topics/photos/${filterID}`)
        .then(response => {
          return response.json();
        })
        .then(json => {
          // setFilteredPhotos(json);
          setState({ ...state, filteredPhotos: json });
        })
        .catch(e => console.log(e));
    }
  }, [filterID]);

  // toggles the modal to be displayed or removed when the user clicks an image, or the X icon in the modal
  function toggleShowModal(id) {
    const photo = state.photos.find(photo => photo.id === id);
    // setModalShown(state.modalShown ? false : true);
    // setPhotoData(photo);
    setState({
      ...state,
      modalShown: id ? true : false,
      photoData: photo,
    });
  }

  // adds/clears image id from the likedPhotos state
  function setLikedPhotos(id) {
    // setLikedPhoto(prev => {
    //   const newLiked = { ...prev };
    //   if (newLiked[id] === true) {
    //     newLiked[id] = null;
    //   } else {
    //     newLiked[id] = true;
    //   }
    //   return newLiked;
    // });
    setState({
      ...state,
      likedPhotos: {
        ...state.likedPhotos,
        id: state.likedPhotos[id] ? null : true,
      },
    });
  }

  return { state, toggleShowModal, setLikedPhotos, filterPhotos };
};

export default useApplicationData;
