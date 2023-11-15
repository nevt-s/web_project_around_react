import { Api } from '../utils/api';
import deleteIcon from '../images/elements/delete.png';
import likeIcon from '../images/elements/like.png';
import { useState, useEffect } from 'react';

function Card(props){

    const [Place, setPlace] = useState([]);

    const api = new Api({
        baseUrl: "https://around.nomoreparties.co/v1/web_id_03/",
        headers: {
          authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
          "Content-Type": "application/json"
        }
    });   

    useEffect(() => {
        const placeInformation = api.getInitialCards()
        .then(res => setPlace(res))
    }, [])

    return(
        <>
            <section className="elements" id="holder">
                {
                    Place.map((card) =>
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