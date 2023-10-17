import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar(props){
    return(
        <>
            <PopupWithForm 
                name="avatar" 
                id="profile-avatar"
                title="Ubah foto profil"
                popupopen={props.popupopen}
                closePopup={props.closePopup}
            >
                <input type="url" className="popup__input popup__input-url" id="avatar-url" name="avatar-url" placeholder="Url Gambar" required />
                <span className="popup__input-form-error avatar-url-error"></span>
            </PopupWithForm>
        </>
    )
}

export default PopupEditAvatar;