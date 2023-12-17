import { Api } from '../utils/api';
import deleteIcon from '../images/elements/delete.png';
import likeIcon from '../images/elements/like.png';
import { useState, useEffect } from 'react';
import React from 'react';
import { currentUserContext } from '../contexts/CurrentUserContext';

function Card(props){

    // Memeriksa apakah pengguna saat ini adalah pemilik kartu saat ini
    // const isOwn = card.owner._id === currentUser._id;

    // // Membuat variabel yang kemudian akan kamu atur di `className` untuk tombol hapus
    // const cardDeleteButtonClassName = (
    //   `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
    // );
    const currentUser = React.useContext(currentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    return(
        <>
            <article className="elements__card">
                    <img src={props.card.link} alt="elements" className="elements__image" name={props.card.name} id="photo" onClick={props.onCardClick}/>
                    <img src={deleteIcon} alt="delete" className={isOwn ? "elements__delete-show" : "elements__delete"} id="delete" onClick={props.onCardDelete}/>
                    <div className="elements__item">
                        <p className="elements__id" id="id">{props.card.id}</p>
                        <h2 className="elements__place-name" id="placename">{props.card.name}</h2>
                        <button className="elements__like" id="like">
                            <img src={likeIcon} alt="like" className={isLiked ? "elements__like-black" :"elements__like-image"} name={props.card._id} id="like-image" onClick={props.onCardLike}/>
                            <p className="elements__like-count" id="like-count">{props.card.likes.length}</p>
                        </button>
                    </div>
            </article>
        </>
    )
}

export default Card;