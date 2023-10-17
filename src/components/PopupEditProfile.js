import PopupWithForm from "./PopupWithForm";

function PopupEditProfile(props){
    return(
        <>
            {/* <div className='popup__avatar' id='profile-avatar'>
                <h2 className="popup__info" id="form-title">Ubah foto profil</h2>
                <form className="popup__input-form" name="avatar">
                    <input type="text" className="popup__input popup__input-name" id="name-input" name="name" placeholder="Nama" minLength="2" maxLength="40" required />
                    <span className="popup__input-form-error name-input-error"></span>
                    <input type="text" className="popup__input popup__input-about" id="about-input" name="about" placeholder="Tentang saya" minLength="2" maxLength="200" required />
                    <span className="popup__input-form-error about-input-error"></span>
                </form>
            </div> */}
            
            <PopupWithForm
                name="edit"
                id="edit"
                title="Edit Profil"
                popupopen={props.popupopen}
                closePopup={props.closePopup}
            >
                <input type="text" className="popup__input popup__input-name" id="name-input" name="name" placeholder="Nama" minLength="2" maxLength="40" required />
                <span className="popup__input-form-error name-input-error"></span>
                <input type="text" className="popup__input popup__input-about" id="about-input" name="about" placeholder="Tentang saya" minLength="2" maxLength="200" required />
                <span className="popup__input-form-error about-input-error"></span>
            </PopupWithForm>
        </>
    )

}

export default PopupEditProfile;