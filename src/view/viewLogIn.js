import {facebookLogin,googleLogin,createUser,userSesionActive,signInUser, exit} from '../view-controller/index.js'
import { viewRegister } from "../view/viewRegister.js";

const changeHash = (hash) =>  {
  location.hash = hash;
}

export const viewLogin = () => {
    const div= document.createElement('div')
    const loginPage = `  
      <div id="login-container">
        <figure>
            <img class="s-size b-size" src="../images/undraw_chef_lbjx.svg" alt="">
        </figure>
        <div id='login'>
          <h1 class="center">FoodBook</h1>
          <h3 class="center">¡Bienvenido, comensal!</h3>
            <form id="login-user">
                <input class="d-block input-w" type="email" id="email-login" placeholder="Email">
                <input class="d-block input-w" type="password" id="password-login" placeholder="Password">
                <button class="d-block btn-login btn-width" id="login-btn">Log in</button>
                <p class="m-auto">O bien ingresa con...</p>
                <a id="googleBtn"><img src="../images/search.svg" alt="Google" style="width:30px;"></img></a>
                <a id="fbBtn"><img src="../images/facebook-logo-in-circular-button-outlined-social-symbol.svg" alt="Facebook" style="width:30px;"></img></a>
            </form>
          <p class="m-auto">¿No tienes una cuenta? <a id="myBtn" class="register" href="#/register">Regístrate.</a></p>
        </div>
      </div>`;
    div.innerHTML = loginPage;

    // const register = div.querySelector('#myBtn');
    // register.addEventListener('click',  () => {
    //   viewRegister();
    // });
      /*
    const registerUserOk = () => {
      const btnRegisterEmail = document.getElementById('register-btn');
      const emailSignIn = document.getElementById('email-signup');
      const passwordSignIn = document.getElementById('password-signup');
  
      btnRegisterEmail.addEventListener('click', (event) => {
        event.preventDefault();
        createUser(emailSignIn.value, passwordSignIn.value);
      });
    }
  
    const btnRegister = document.getElementById('myBtn');
    btnRegister.addEventListener('click', e => {
      e.preventDefault();
      viewRegister();
      registerUserOk();
    });

    */
  
    const btnLogInEmail = div.querySelector('#login-btn');
    const emailLogInEmail = div.querySelector('#email-login');
    const passwordLogInEmail = div.querySelector('#password-login');
    btnLogInEmail.addEventListener('click', (event) => {
      event.preventDefault();
      signInUser(emailLogInEmail.value, passwordLogInEmail.value)
      .then(() => changeHash('#/profile'))
      .catch((error) => console.log(error));

    });
     userSesionActive()
     
  
    const loginFacebook = div.querySelector('#fbBtn');
    loginFacebook.addEventListener('click', e => {
      e.preventDefault();
      facebookLogin()
      .then(() => changeHash('#/profile'))
      .catch((error) => console.log(error));

    })
  
    const loginGoogle = div.querySelector('#googleBtn');
    loginGoogle.addEventListener('click', e => {
      e.preventDefault();
      googleLogin()
        .then(() => changeHash('#/profile'))
        .catch((error) => console.log(error));
    });
    return div;
}