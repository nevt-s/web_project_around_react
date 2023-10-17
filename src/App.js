import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import PopupEditAvatar from './components/PopupEditAvatar';
import PopupEditProfile from './components/PopupEditProfile';
import PopupAddPlace from './components/PopupAddPlace';

function App() {
  const [isPopupOpen, setisPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);

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
  }

  return (
    <div className="App">
      <Header />

      <Main 
        handleEditAvatarClick={handleEditAvatarClick} 
        handleEditProfileClick={handleEditProfileClick}
        handleAddPlaceClick={handleAddPlaceClick}
      />

      
      <div className={`popup ${isPopupOpen ? 'popup_opened' : ''}`} id="popup">
                <PopupEditAvatar 
                  popupopen={isEditAvatarPopupOpen}  
                  closePopup={closePopup}
                />

                <PopupEditProfile
                  popupopen={isEditProfilePopupOpen}
                  closePopup={closePopup}
                />
                
                <PopupAddPlace
                  popupopen={isAddPlacePopupOpen}
                  closePopup={closePopup}
                />

            {/* <div className="popup__image" id="popup-image">
                <button type="button" className="popup__close-btn" id="close-image">
                    <img src={closeIcon} alt="close-icon" className="popup__close-btn-image" />
                </button>
                <img src="./" alt="place" className="popup__place-image" id="place-image" />
                <p className="popup__placename" id="place-name"></p>
            </div> */}
        </div>


      <Footer />
    </div>
  );
}



export default App;
