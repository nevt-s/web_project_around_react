import './App.css';
import { React, useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import PopupEditAvatar from './components/PopupEditAvatar';
import PopupEditProfile from './components/PopupEditProfile';
import PopupAddPlace from './components/PopupAddPlace';
import ImagePopup from './components/ImagePopup';
import { Api } from './utils/api';
import { currentUserContext } from './contexts/CurrentUserContext';

function App() {
  const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/web_id_03/",
    headers: {
      authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
      "Content-Type": "application/json"
    }
  });   

  const [isPopupOpen, setisPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isPlaceImagePopupOpen, setisPlaceImagePopupOpen] = useState(false);
  const [isPlaceImage, setisPlaceImage] = useState(false);
  const [isPlaceName, setisPlaceName] = useState(false);
  const [currentUser, setcurrentUser] = useState(false);

  useEffect(() => {
    const currentUser = api.getUserInformation()
    .then((res) => setcurrentUser(res)) 
  }, [])

  function onCardClick(e) {
    setisPlaceImagePopupOpen(true);
    setisPopupOpen(true);
    setisPlaceImage(e.target.src);
    setisPlaceName(e.target.name);
  } 

  function handleEditAvatarClick(e){
    setisEditAvatarPopupOpen(true);
    setisPopupOpen(true);
  }

  function handleEditProfileClick(e){
    setisEditProfilePopupOpen(true);
    setisPopupOpen(true);
  }

  function handleAddPlaceClick (e){
    setisAddPlacePopupOpen(true);    
    setisPopupOpen(true);
  }

  function closePopup (e){
    setisPopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisPlaceImagePopupOpen(false);
  }

  return (
    <currentUserContext.Provider value={currentUser}>

      <div className="App">
        <Header />

        <Main 
          handleEditAvatarClick={handleEditAvatarClick} 
          handleEditProfileClick={handleEditProfileClick}
          handleAddPlaceClick={handleAddPlaceClick}
          onCardClick={onCardClick}
        />
        
        <div className={`popup ${isPopupOpen ? 'popup_opened' : ''}`} id="popup">
                  <PopupEditAvatar 
                    isOpen={isEditAvatarPopupOpen}  
                    onClose={closePopup}
                  />

                  <PopupEditProfile
                    isOpen={isEditProfilePopupOpen}
                    onClose={closePopup}
                  />
                  
                  <PopupAddPlace
                    isOpen={isAddPlacePopupOpen}
                    onClose={closePopup}
                  />

                  <ImagePopup
                    isOpen={isPlaceImagePopupOpen}
                    onClose={closePopup}
                    card={isPlaceImage}
                    name={isPlaceName}
                  />
          </div>


        <Footer />
      </div>

    </currentUserContext.Provider>

  );
}



export default App;
