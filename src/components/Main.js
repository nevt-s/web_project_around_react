import avatarEditIcon from '../images/profile/avatar/profile__avatar-edit.png';
import profileEditIcon from '../images/profile/edit-btn/profile__edit-btn.png';
import profileAddIcon from '../images/profile/add-btn/profile__add-btn.png';
import deleteIcon from '../images/elements/delete.png';
import likeIcon from '../images/elements/like.png';
import { Api } from '../utils/api';
import { useEffect, useState } from 'react';

function Main(props){
    const [Profile, setProfile] = useState({
        name : '',
        about : '',
        avatar : ''
    });

    useEffect(() => {
        const userInformation = api.getUserInformation()
        .then(r => {
            setProfile({
                name: r.name,
                about: r.about,
                avatar: r.avatar
            })
        });    
    })

    const api = new Api({
        baseUrl: "https://around.nomoreparties.co/v1/web_id_03/",
        headers: {
          authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
          "Content-Type": "application/json"
        }
    });   
  
    return(
        <>
        <main className="container">
        <section className="profile">
            <div className="profile__avatar">
                <button className="profile__avatar-edit-button" id="avatar-edit" onClick={props.handleEditAvatarClick}>
                    <div className="profile__avatar-edit-bg"></div>
                    <img alt="edit" className="profile__avatar-edit"src={avatarEditIcon} />                       
                </button>
                <img alt="avatar" className="profile__avatar" id="avatar" src={Profile.avatar} />  
            </div>
            <div className="profile__info">
                <div className="profile__info-detail">
                    <h1 className="profile__name" id="name-content">{Profile.name}</h1>
                    <button className="profile__edit-btn" type="button" id="edit-btn" onClick={props.handleEditProfileClick}>
                        <img src={profileEditIcon} alt="edit" className="profile__edit-btn-image" />
                    </button>
                </div>
                
                <p className="profile__about-me" id="about-content">{Profile.about}</p>
            </div>
            <button className="profile__add-btn" type="button" id="add-btn" onClick={props.handleAddPlaceClick}>
                <img src={profileAddIcon} alt="add" className="profile__add-btn-image" />
            </button>
        </section>
        
        <template className="elements__template" id="template">
            <article className="elements__card">
                <img src="./" alt="elements" className="elements__image" id="photo" />
                <img src={deleteIcon} alt="delete" className="elements__delete" id="delete" />
                <div className="elements__item">
                    <p className="elements__id" id="id"></p>
                    <h2 className="elements__place-name" id="placename">Batam</h2>
                    <button className="elements__like" id="like">
                        <img src={likeIcon} alt="like" className="elements__like-image" id="like-image" />
                        <p className="elements__like-count" id="like-count">0</p>
                    </button>
                </div>
            </article>
        </template>

        <section className="elements" id="holder"></section>
      </main>
        </>
    )
}


export default Main;