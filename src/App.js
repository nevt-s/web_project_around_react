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


  function onCardClick(props) {
    console.log(props.target.src)
    setisPlaceImagePopupOpen(true);
    setisPopupOpen(true);
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
                />
        </div>


      <Footer />
    </div>
  );
}



export default App;
