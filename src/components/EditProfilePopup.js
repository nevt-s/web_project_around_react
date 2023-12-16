import React, { useEffect } from "react";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { currentUserContext } from "../contexts/CurrentUserContext";

function PopupEditProfile(props){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const currentUser = React.useContext(currentUserContext);

    useEffect(() => {
        setName(currentUser.name || "");
        setDescription(currentUser.about || "");
    }, [currentUser]);

    function handleChange(e) {
        e.preventDefault();
        e.target.name === "name"
          ? setName(e.target.value)
          : setDescription(e.target.value);
    }

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
                onSubmit={function handleSubmit(e) {
                                // Mencegah browser menavigasi ke alamat formulir
                                e.preventDefault();
                            
                                // Meneruskan nilai komponen terkelola ke handler eksternal
                                props.onUpdateUser({
                                  name,
                                  about: description,
                                });
                            }
                        }
            >
                <input type="text" className="popup__input popup__input-name" value={name} onChange={handleChange} id="name-input" name="name" placeholder="Nama" minLength="2" maxLength="40" required />
                <span className="popup__input-form-error name-input-error"></span>
                <input type="text" className="popup__input popup__input-about" value={description} onChange={handleChange} id="about-input" name="about" placeholder="Tentang saya" minLength="2" maxLength="200" required />
                <span className="popup__input-form-error about-input-error"></span>
            </PopupWithForm>
        </>
    )

}

export default PopupEditProfile;