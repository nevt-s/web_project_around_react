import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import PopupEditAvatar from './components/PopupEditAvatar';
import PopupEditProfile from './components/PopupEditProfile';
import PopupAddPlace from './components/PopupAddPlace';
import PopupPlaceImage from './components/PopupPlaceImage';

function App() {
  const [isPopupOpen, setisPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isPlaceImagePopupOpen, setisPlaceImagePopupOpen] = useState(false);
  const [isPlaceImage, setisPlaceImage] = useState(false);
  const [isPlaceName, setisPlaceName] = useState(false);


  function onCardClick(props) {
    setisPlaceImagePopupOpen(true);
    setisPopupOpen(true);
    setisPlaceImage(props.target.src);
    setisPlaceName(props.target.name);
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

                <PopupPlaceImage
                  popupopen={isPlaceImagePopupOpen}
                  closePopup={closePopup}
                  card={isPlaceImage}
                  name={isPlaceName}
                />
        </div>


      <Footer />
    </div>
  );
}



export default App;
