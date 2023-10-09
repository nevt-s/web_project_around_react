function PopupWithForm(props){

    return(
        <>
            <div className={`popup__${props.name}`} id={props.name}>
                <h2 className="popup__info" id="form-title">{props.title}</h2>
                
                <form className="popup__input-form">
                    <input type="text" className="popup__input popup__input-name" id="name-input" name="name" placeholder="Nama" minLength="2" maxLength="40" required />
                    <span className="popup__input-form-error name-input-error"></span>
                    <input type="text" className="popup__input popup__input-about" id="about-input" name="about" placeholder="Tentang saya" minLength="2" maxLength="200" required />
                    <span className="popup__input-form-error about-input-error"></span>
                    <button type="submit" className="popup__submit popup__submit_inactive" disabled>Save</button>
                </form>
            </div>
            {/* <div className='popup__add' id="add">
                <h2 className="popup__info" id="form-title">Tempat baru</h2>
                <form className="popup__input-form" name="add">
                    <input type="text" className="popup__input popup__input-title" id="title-input" name="title" placeholder="Judul" minLength="2" maxLength="30" required />
                    <span className="popup__input-form-error title-input-error"></span>
                    <input type="url" className="popup__input popup__input-url" id="url-input" name="url" placeholder="Url Gambar" required />
                    <span className="popup__input-form-error url-input-error"></span>
                    <button type="submit" className="popup__submit popup__submit_inactive" disabled>Save</button>
                </form>                
            </div>
            <div className='popup__avatar' id='profile-avatar'>
                <h2 className="popup__info" id="form-title">Ubah foto profil</h2>
                <form className="popup__input-form" name="avatar">
                    <input type="url" className="popup__input popup__input-url" id="avatar-url" name="avatar-url" placeholder="Url Gambar" required />
                    <span className="popup__input-form-error avatar-url-error"></span>
                    <button type="submit" className="popup__submit popup__submit_inactive" disabled>Save</button>
                </form>
            </div>
            <div className="popup__confirmation" id="confirm">
                <h2 className="popup__info" id="form-title">Apakah anda yakin?</h2>
                <button className="popup__submit" id="confirm-submit">Ya</button>
            </div> */}
        </>
    )
}

export default PopupWithForm;