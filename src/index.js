import './pages/index.css';
// import { editButton, addButton, editAvatarButton,formAvatar, avatarElement, formEdit, formAdd, title, url, nameContent, aboutContent, avatarImage, popupform, popup } from './Constants.js'; 
// import { Api } from './components/Api.js';
// import { Popup } from "./components/Popup.js";
// import { enableValidation } from './components/FormValidator';
// import { UserInfo } from "./components/UserInfo.js";
// import { Section } from './components/Section';
// import Card from './components/Card';

// const testpopup = new Popup(popupform);
// const userinfo = new UserInfo();

// formEdit.addEventListener("submit", function (evt) {
// evt.preventDefault();
// saveProfile();
// })

// function saveProfile(){
// userinfo.setUserInfo();
// }


// formAdd.addEventListener("submit", function(evt){
// evt.preventDefault();
// saveAdd();
// })

// formAvatar.addEventListener("submit", function(evt){
// evt.preventDefault();
// ChangeProfileAvatar(avatarElement.value);
// formAvatar.reset();
// })

// function saveAdd(){
// addCard(title.value, url.value)
// }

// editButton.addEventListener('click',() => testpopup.Open("edit"));
// addButton.addEventListener('click',() => testpopup.Open("add"));
// editAvatarButton.addEventListener('click', () => testpopup.Open("editAvatar"));

// enableValidation();

// //API Function
// const api = new Api({
//     baseUrl: "https://around.nomoreparties.co/v1/web_id_03/",
//     headers: {
//       authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
//       "Content-Type": "application/json"
//     }
//   });

// export function callCard(){
// api.getInitialCards()
//     .then((result) => {
//         const section = new Section({items : result , renderer : Card}, holder);
//         section.Clear();
//         section.Renderer()
//     })
//     .catch((err) => {
//         console.log(err); // log kesalahan ke konsol
//     });

// }

// callCard();

// export function callUser(){
//     nameContent.textContent = 'Loading...';
//     aboutContent.textContent = 'Loading...';

//     api.getUserInformation()
//     .then((result) => {
//         nameContent.textContent = result.name;
//         aboutContent.textContent = result.about;
//         avatarImage.src = result.avatar;
//     })
//         .catch((err) => {
//         console.log(err); // log kesalahan ke konsol
//     });
// }

// callUser();

// function saveLoading(isLoading){
//     const allsubmit = document.querySelectorAll('.popup__submit')
//     allsubmit.forEach(element => {
//         if(isLoading){
//             element.textContent = 'Menyimpan...'
//         }
//         else{
//             element.textContent = 'Save'
//         }
//     });
// }

// export function editUser(name, about){
//     saveLoading(true);

//     api.editUserInformation(name, about)
//     .finally(() => {
//         saveLoading(false)
        
//         nameContent.textContent = name;
//         aboutContent.textContent = about;
//         const testpopup = new Popup(popupform);
//         testpopup.Close();
//     })
// }

// export function deleteCard(item){
//     api.deleteSelectedCard(item)
//     .then(() => {
//         callCard();
//         popup.classList.remove('popup_opened');
//     })
//     .catch((err) => {
//         console.log(err); 
//     });
    
// }

// export function addCard(name, link){
//     saveLoading(true);
//     api.addNewCard(name, link)
//     .then (() => {
//         callCard();
//     })
//     .finally(() => {
//         saveLoading(false)
        
//         const testpopup = new Popup(popupform);
//         testpopup.Close();
//     });
// }

// export function LikeCard(id){
//     api.likeCard(id);
// }

// export function UnlikeCard(id){
//     api.unlikeCard(id);
// }

// export function ChangeProfileAvatar(url){
//     saveLoading(true);
//     api.changeProfileAvatar(url)
//     .then (() => {
//         callUser();
//     })
//     .finally(() => {
//         saveLoading(false)
        
//         const testpopup = new Popup(popupform);
//         testpopup.Close();
//     });
// }