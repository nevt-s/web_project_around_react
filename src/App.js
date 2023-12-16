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
import Card from './components/Card';

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
  const [Place, setPlace] = useState([]);

  useEffect(() => {
    const currentUser = api.getUserInformation()
    .then((res) => setcurrentUser(res)) 
  }, [])

  useEffect(() => {
    const placeInformation = api.getInitialCards()
    .then(res => setPlace(res));
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

  function handleUpdateUser(newUserData){
    const editUser = api.editUserInformation(newUserData).then((r) => {
      setcurrentUser(r)
      closePopup()
    })
  }

  function handleUpdateAvatar(newAvatar){
    const changeAvatar = api.changeProfileAvatar(newAvatar).then((r) => {
      setcurrentUser(r)
      closePopup()
    })
  }

  function handleAddPlaceSubmit(newCard){
    const addCard = api.addNewCard(newCard).then(res=>{
      setPlace(res);
      closePopup()
    })
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
          getCard={
              Place.map((card) => 
              <Card
                  key={card.id}
                  onCardClick={onCardClick}
        
                  onCardLike={function handleCardLike() {
                      const isLiked = card.likes.some(i => i._id === currentUser._id);
                      api.changeLikeCardStatus(card._id, !isLiked)
                          .then(res => setPlace(res));
                      }
                  }
        
                  onCardDelete={function handleCardDelete() {
                      api.deleteSelectedCard(card._id)
                          .then(res => setPlace(res));
                      }
                  }
        
                  card={card}
              />
            )
          }
        />
        
        <div className={`popup ${isPopupOpen ? 'popup_opened' : ''}`} id="popup">
                  <PopupEditAvatar 
                    isOpen={isEditAvatarPopupOpen}  
                    onClose={closePopup}
                    onUpdateAvatar={handleUpdateAvatar}
                  />

                  <PopupEditProfile
                    isOpen={isEditProfilePopupOpen}
                    onClose={closePopup}
                    onUpdateUser={handleUpdateUser}
                  />
                  
                  <PopupAddPlace
                    isOpen={isAddPlacePopupOpen}
                    onClose={closePopup}
                    onAddNewCard={handleAddPlaceSubmit}
                  />

                  <ImagePopup
                    isOpen={isPlaceImagePopupOpen}
                    onClose={closePopup}
                    PlaceImage={isPlaceImage}
                    PlaceName={isPlaceName}
                  />
          </div>


        <Footer />
      </div>

    </currentUserContext.Provider>

  );
}



export default App;
