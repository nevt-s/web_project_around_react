function PopupConfirmation(){
    return(
        <>
            <div className="popup__confirmation" id="confirm">
                <h2 className="popup__info" id="form-title">Apakah anda yakin?</h2>
                <button className="popup__submit" id="confirm-submit">Ya</button>
            </div>
        </>
    )
}

export default PopupConfirmation;