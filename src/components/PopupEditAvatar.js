import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar(props){
    // const [avatar, setAvatar] = useState("");
    
    // const currentUser = React.useContext(currentUserContext);

    // useEffect(() => {
    //     setAvatar(currentUser.avatar || "");
    // }, [currentUser]);

    // function handleChange(e) {
    //     e.preventDefault();
    //     setAvatar(e.target.value)
    // }

    const avatar = useRef(null);

    return(
        <>
            <PopupWithForm 
                name="avatar" 
                id="profile-avatar"
                title="Ubah foto profil"
                isOpen={props.isOpen}
                onClose={props.onClose}
                onSubmit={function handleSubmit(e) {
                    e.preventDefault();
                    props.onUpdateAvatar(
                        avatar.current.value
                    );

                    avatar.current.value="";
                  }}
            >
                <input ref={avatar} type="url" className="popup__input popup__input-url" id="avatar-url" name="avatar-url" placeholder="Url Gambar" required />
                <span className="popup__input-form-error avatar-url-error"></span>
            </PopupWithForm>
        </>
    )
}

export default PopupEditAvatar;