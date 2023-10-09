import avatarEditIcon from '../images/profile/avatar/profile__avatar-edit.png';
import profileEditIcon from '../images/profile/edit-btn/profile__edit-btn.png';
import profileAddIcon from '../images/profile/add-btn/profile__add-btn.png';
import deleteIcon from '../images/elements/delete.png';
import likeIcon from '../images/elements/like.png';
import closeIcon from '../images/popup/close-icon.png';
import PopupWithForm from './PopupWithForm';

function Main(){
    return(
        <>
        <main className="container">
        <section className="profile">
            <div className="profile__avatar">
                <button className="profile__avatar-edit-button" id="avatar-edit" onClick={handleEditAvatarClick}>
                    <div className="profile__avatar-edit-bg"></div>
                    <img alt="edit" className="profile__avatar-edit"src={avatarEditIcon} />                       
                </button>
                <img alt="avatar" className="profile__avatar" id="avatar" />  
            </div>
            <div className="profile__info">
                <div className="profile__info-detail">
                    <h1 className="profile__name" id="name-content">STEVEN</h1>
                    <button className="profile__edit-btn" type="button" id="edit-btn" onClick={handleEditProfileClick}>
                        <img src={profileEditIcon} alt="edit" className="profile__edit-btn-image" />
                    </button>
                </div>
                
                <p className="profile__about-me" id="about-content"></p>
            </div>
            <button className="profile__add-btn" type="button" id="add-btn" onClick={handleAddPlaceClick}>
                <img src={profileAddIcon} alt="add" className="profile__add-btn-image" />
            </button>
        </section>
        
        <template className="elements__template" id="template">
            <article className="elements__card">
                <img src="./" alt="elements" className="elements__image" id="photo" />
                <img src={deleteIcon} alt="delete" className="elements__delete" id="delete" />
                <div className="elements__item">
                    <p className="elements__id" id="id"></p>
                    <h2 className="elements__place-name" id="placename">Batam</h2>
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

                <PopupWithForm name="edit" title="Edit Profile" />
                <PopupWithForm name="add" title="Tempat Baru" />
                <PopupWithForm name="profile-avatar" title="Ubah foto profil" />
            </div>


            <div className="popup__image" id="popup-image">
                <button type="button" className="popup__close-btn" id="close-image">
                    <img src={closeIcon} alt="close-icon" className="popup__close-btn-image" />
                </button>
                <img src="./" alt="place" className="popup__place-image" id="place-image" />
                <p className="popup__placename" id="place-name"></p>
            </div>
        </div>
      </main>
        </>
    )
}

function handleEditAvatarClick(e){
    const popup = document.getElementById('popup');
    const popupform = document.getElementById('popup-form');
    const editform = document.getElementById('edit');
    const addform = document.getElementById('add');
    const avatarform = document.getElementById('profile-avatar');

    popup.classList.add('popup_opened');
    popupform.classList.add('popup__container_opened');
    editform.style.display = "none";
    addform.style.display = "none";
    avatarform.style.display = " grid";
}

function handleEditProfileClick(e){
    const popup = document.getElementById('popup');
    const popupform = document.getElementById('popup-form');
    const editform = document.getElementById('edit');
    const addform = document.getElementById('add');
    const avatarform = document.getElementById('profile-avatar');

    popup.classList.add('popup_opened');
    popupform.classList.add('popup__container_opened');
    editform.style.display = "grid";
    addform.style.display = "none";
    avatarform.style.display = " none";
}

function handleAddPlaceClick (e){
    const popup = document.getElementById('popup');
    const popupform = document.getElementById('popup-form');
    const editform = document.getElementById('edit');
    const addform = document.getElementById('add');
    const avatarform = document.getElementById('profile-avatar');

    popup.classList.add('popup_opened');
    popupform.classList.add('popup__container_opened');
    editform.style.display = "none";
    addform.style.display = "grid";
    avatarform.style.display = " none";
}
export default Main;