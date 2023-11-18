import { Api } from '../utils/api';
import deleteIcon from '../images/elements/delete.png';
import likeIcon from '../images/elements/like.png';
import { useState, useEffect } from 'react';
import React from 'react';
import { currentUserContext } from '../contexts/CurrentUserContext';

function Card(props){

    const [Place, setPlace] = useState([]); 

    const api = new Api({
        baseUrl: "https://around.nomoreparties.co/v1/web_id_03/",
        headers: {
          authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
          "Content-Type": "application/json"
        }
    });   

    const currentUser = React.useContext(currentUserContext);

    useEffect(() => {
        const placeInformation = api.getInitialCards()
        .then(res => setPlace(res))
    }, [])

    // Memeriksa apakah pengguna saat ini adalah pemilik kartu saat ini
    // const isOwn = card.owner._id === currentUser._id;

    // // Membuat variabel yang kemudian akan kamu atur di `className` untuk tombol hapus
    // const cardDeleteButtonClassName = (
    //   `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
    // );

    return(
        <>
            <section className="elements" id="holder">
                {
                    Place.map((card) => //const isOwn = card.owner._id === currentUser._id;
                        <article className="elements__card">
                            <img src={card.link} alt="elements" className="elements__image" name={card.name} id="photo" onClick={props.onCardClick}/>
                            <img src={deleteIcon} alt="delete" className="elements__delete" id="delete" />
                            <div className="elements__item">
                                <p className="elements__id" id="id">{card.id}</p>
                                <h2 className="elements__place-name" id="placename">{card.name}</h2>
                                <button className="elements__like" id="like">
                                    <img src={likeIcon} alt="like" className="elements__like-image" id="like-image" />
                                    <p className="elements__like-count" id="like-count">{card.likes.length}</p>
                                </button>
                            </div>
                        </article>
                    )
                }
            </section>
        </>
    )
}

export default Card;