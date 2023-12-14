import PopupWithForm from "./PopupWithForm";
import React from "react";
import { useState, useEffect } from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";

function PopupEditProfile(props){
    const [Name, setName] = useState('');
    const [About, setAbout] = useState('');

    const currentUser = React.useContext(currentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }, [currentUser])

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
                isOpen={props.isOpen}
                onClose={props.onClose}                
            >
                <input type="text" className="popup__input popup__input-name" value={Name} id="name-input" name="name" placeholder="Nama" minLength="2" maxLength="40" required />
                <span className="popup__input-form-error name-input-error"></span>
                <input type="text" className="popup__input popup__input-about" value={About} id="about-input" name="about" placeholder="Tentang saya" minLength="2" maxLength="200" required />
                <span className="popup__input-form-error about-input-error"></span>
            </PopupWithForm>
        </>
    )

}

export default PopupEditProfile;