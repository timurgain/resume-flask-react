import './index.css'; // webpack needs it

import { menuBtn, savePdfBtn } from '../components/constants.js';
import { PopupMenu } from '../components/PopupMenu.js';
import { Api } from '../components/Api.js';


// main

// instances

const menuPopup = new PopupMenu('.popup-menu', menuBtn);
menuPopup.setEventListeners();

const api = new Api();


// listeners

menuBtn.addEventListener('click', () => {
  if (document.querySelector('.popup_opened')) {
    menuPopup.close()
  } else {
    menuPopup.open()
  }
});

savePdfBtn.addEventListener('click', () => {
  api.saveAsPdf()
    .then((response) => {
      if (!response.ok) {throw new Error(response.status)};
      return response.json()
    })
    .then((data) => alert(data.text))
    .catch((err) => reportError(`Error in connection to server: ${err}`))
})