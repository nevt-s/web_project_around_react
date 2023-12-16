import closeIcon from '../images/popup/close-icon.png';


function PopupWithForm(props){
    return(
        <>
            <div className={`popup__container ${props.isOpen ? 'popup__container_opened' : ''}`} id="popup-form">
                <button type="button" className="popup__close-btn" id="close-form" onClick={props.onClose}>
                    <img src={closeIcon} alt="close-icon" className="popup__close-btn-image" />
                </button>
                <div className={`popup__${props.name}`} id={props.id}>
                    <h2 className="popup__info" id="form-title">{props.title}</h2>
                    
                    <form className="popup__input-form" onSubmit={props.onSubmit}>
                        {props.children}
                        <button type="submit" className="popup__submit">Save</button>
                    </form>
                </div> 
            </div>

        </>
    )
}

export default PopupWithForm;