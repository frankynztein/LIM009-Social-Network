// Este es el punto de entrada de tu aplicacion
import {page1} from './view/template.js';
import { viewLogin } from './view/viewLogIn.js';

var config ={
    apiKey: "AIzaSyDhPzlMom9mAEcuyk_Dw05NY2awAH_zYAU",
    authDomain: "red-social-58567.firebaseapp.com",
    databaseURL: "https://red-social-58567.firebaseio.com",
    projectId: "red-social-58567",
    storageBucket: "red-social-58567.appspot.com",
    messagingSenderId: "305974368757"
  }
firebase.initializeApp(config);

window.onload = viewLogin();

const init = () => {
  window.addEventListener('hashchange', () => console.log(window.location.hash))
}

window.addEventListener('load', init);