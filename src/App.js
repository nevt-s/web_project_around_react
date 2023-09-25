import logo from './logo.svg';
import './App.css';
import HeaderLogo from './images/header/logo/logo.png';
import avatarEditIcon from './images/profile/avatar/profile__avatar-edit.png';
import profileEditIcon from './images/profile/edit-btn/profile__edit-btn.png';
import profileAddIcon from './images/profile/add-btn/profile__add-btn.png';
import deleteIcon from './images/elements/delete.png';
import likeIcon from './images/elements/like.png';
import closeIcon from './images/popup/close-icon.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={HeaderLogo} alt="header logo" className="header__logo" />
      </header>

      <main className="container">
        <section className="profile">
            <div className="profile__avatar">
                <div className="profile__avatar-edit-button" id="avatar-edit" >
                    <div className="profile__avatar-edit-bg"></div>
                    <img alt="edit" className="profile__avatar-edit"src={avatarEditIcon} />                       
                </div>
                <img alt="avatar" className="profile__avatar" id="avatar-image" />  
            </div>
            <div className="profile__info">
                <div className="profile__info-detail">
                    <h1 className="profile__name" id="name-content"></h1>
                    <button className="profile__edit-btn" type="button" id="edit-btn">
                        <img src={profileEditIcon} alt="edit-image" className="profile__edit-btn-image" />
                    </button>
                </div>
                
                <p className="profile__about-me" id="about-content"></p>
            </div>
            <button className="profile__add-btn" type="button" id="add-btn">
                <img src={profileAddIcon} alt="add-image" className="profile__add-btn-image" />
            </button>
        </section>
        
        <template className="elements__template" id="template">
            <article className="elements__card">
                <img src="./" alt="images" className="elements__image" id="photo" />
                <img src={deleteIcon} alt="delete" className="elements__delete" id="delete" />
                <div className="elements__item">
                    <p className="elements__id" id="id"></p>
                    <h2 className="elements__place-name" id="placename"></h2>
                    <button className="elements__like" id="like">
                        <img src={likeIcon} alt="like" className="elements__like-image" id="like-image" />
                        <p className="elements__like-count" id="like-count">0</p>
                    </button>
                </div>
            </article>
        </template>

        <section className="elements" id="holder"></section>
        <div className="popup" id="popup">
            <div className="popup__container" id="popup-form">
                <button type="button" className="popup__close-btn" id="close-form">
                    <img src={closeIcon} alt="close-icon" className="popup__close-btn-image" />
                </button>
                <h2 className="popup__info" id="form-title">Edit profile</h2>
                <form className="popup__input-form" name="edit" id="edit">
                    <input type="text" className="popup__input popup__input-name" id="name-input" name="name" placeholder="Nama" minlength="2" maxlength="40" required />
                    <span className="popup__input-form-error name-input-error"></span>
                    <input type="text" className="popup__input popup__input-about" id="about-input" name="about" placeholder="Tentang saya" minlength="2" maxlength="200" required />
                    <span className="popup__input-form-error about-input-error"></span>
                    <button type="submit" className="popup__submit popup__submit_inactive" disabled>Save</button>
                </form>
                <form className="popup__input-form" name="add" id="add">
                    <input type="text" className="popup__input popup__input-title" id="title-input" name="title" placeholder="Judul" minlength="2" maxlength="30" required />
                    <span className="popup__input-form-error title-input-error"></span>
                    <input type="url" className="popup__input popup__input-url" id="url-input" name="url" placeholder="Url Gambar" required />
                    <span className="popup__input-form-error url-input-error"></span>
                    <button type="submit" className="popup__submit popup__submit_inactive" disabled>Save</button>
                </form>                
                <form className="popup__input-form" name="avatar" id="profile-avatar">
                    <input type="url" className="popup__input popup__input-url" id="avatar-url" name="avatar-url" placeholder="Url Gambar" required />
                    <span className="popup__input-form-error avatar-url-error"></span>
                    <button type="submit" className="popup__submit popup__submit_inactive" disabled>Save</button>
                </form>
                <div className="popup__confirmation" id="confirm">
                    <button className="popup__submit" id="confirm-submit">Ya</button>
                </div>
            </div>
            <div className="popup__image" id="popup-image">
                <button type="button" className="popup__close-btn" id="close-image">
                    <img src={closeIcon} alt="close-icon" className="popup__close-btn-image" />
                </button>
                <img src="./" className="popup__place-image" id="place-image" />
                <p className="popup__placename" id="place-name"></p>
            </div>
        </div>
    </main>

      <footer className="footer">
        <p className="footer__text">© 2021 Around The U.S.</p>
      </footer>
    </div>
  );
}

export default App;
