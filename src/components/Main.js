import avatarEditIcon from '../images/profile/avatar/profile__avatar-edit.png';
import profileEditIcon from '../images/profile/edit-btn/profile__edit-btn.png';
import profileAddIcon from '../images/profile/add-btn/profile__add-btn.png';
import { Api } from '../utils/api';
import { useState, useEffect } from 'react';
import React from 'react';
import Card from './Card';
import { currentUserContext } from '../contexts/CurrentUserContext';

function Main(props){
    const api = new Api({
        baseUrl: "https://around.nomoreparties.co/v1/web_id_03/",
        headers: {
          authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
          "Content-Type": "application/json"
        }
    });

    const [Place, setPlace] = useState([]);

    useEffect(() => {
        const placeInformation = api.getInitialCards()
        .then(res => setPlace(res))
    }, [])

    const currentUser = React.useContext(currentUserContext);

    return(
        <>
        <main className="container">
        <section className="profile">
            <div className="profile__avatar">
                <button className="profile__avatar-edit-button" id="avatar-edit" onClick={props.handleEditAvatarClick}>
                    <div className="profile__avatar-edit-bg"></div>
                    <img alt="edit" className="profile__avatar-edit"src={avatarEditIcon} />
                </button>
                <img alt="avatar" className="profile__avatar" id="avatar" src={currentUser.avatar} />
            </div>
            <div className="profile__info">
                <div className="profile__info-detail">
                    <h1 className="profile__name" id="name-content">{currentUser.name}</h1>
                    <button className="profile__edit-btn" type="button" id="edit-btn" onClick={props.handleEditProfileClick}>
                        <img src={profileEditIcon} alt="edit" className="profile__edit-btn-image" />
                    </button>
                </div>

                <p className="profile__about-me" id="about-content">{currentUser.about}</p>
            </div>
            <button className="profile__add-btn" type="button" id="add-btn" onClick={props.handleAddPlaceClick}>
                <img src={profileAddIcon} alt="add" className="profile__add-btn-image" />
            </button>
        </section>
        <section className="elements" id="holder">
                {
                    Place.map((card) => 
                        <Card
                            key={card.id}
                            onCardClick={props.onCardClick}
                            onCardLike={function handleCardLike() {
                                // Periksa sekali lagi apakah kartu ini sudah disukai
                                const isLiked = card.likes.some(i => i._id === currentUser._id);
                                
                                // Kirim permintaan ke API dan dapatkan data kartu yang diperbarui
                                api.changeLikeCardStatus(card._id, !isLiked);
                            }
                            }
                            card={card}
                        />
                    )
                }
        </section>
      </main>
        </>
    )
}


export default Main;