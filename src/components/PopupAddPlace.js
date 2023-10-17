import PopupWithForm from "./PopupWithForm";

function PopupAddPlace(props){
    return(
        <>
            {/* <div className='popup__add' id="add">
                <h2 className="popup__info" id="form-title">Tempat baru</h2>
                <form className="popup__input-form" name="add">
                </form>                
            </div>
 */}
            <PopupWithForm
                name="add"
                id="add"
                title="Tempat baru"
                popupopen={props.popupopen}
                closePopup={props.closePopup}
            >
                    <input type="text" className="popup__input popup__input-title" id="title-input" name="title" placeholder="Judul" minLength="2" maxLength="30" required />
                    <span className="popup__input-form-error title-input-error"></span>
                    <input type="url" className="popup__input popup__input-url" id="url-input" name="url" placeholder="Url Gambar" required />
                    <span className="popup__input-form-error url-input-error"></span>
            </PopupWithForm>
        </>
    )
}

export default PopupAddPlace;