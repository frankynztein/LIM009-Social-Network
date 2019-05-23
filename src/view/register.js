import { createUser, userSesionActive } from "../lib/controller-firebase/index.js";

const changeHash = (hash) =>  {
  location.hash = hash;
}
export const viewRegister = () => {
  const root= document.getElementById('content');
  root.innerHTML = '';
  const register =`
    <div class="register-container">
      <div class="logo-container">
        <header>
        <a href="http://localhost:5501/src/index.html#/login"><img src='../images/fob-color.png' class="logo-img"> </a>      
        </header>
      </div>
      <form>
        <input class="d-block input-w" type="text" id="name-signup" placeholder="Usuario">
        <input class="d-block input-w" type="email" id="email-signup" placeholder="Email">
        <input class="d-block input-w" type="password" id="password-signup" placeholder="Password">
        <button id="register-btn" class="d-block btn-login btn-width">Registrarse</button>
        <a href="#/login" class="d-block btn-login btn-width back-register">Regresar</a>
      </form>
    </div>`;
      root.innerHTML = register;

        const btnRegisterEmail = root.querySelector('#register-btn');
        const emailSignUp = root.querySelector('#email-signup');
        const passwordSignUp = root.querySelector('#password-signup');
        const nameSignUp = root.querySelector('#name-signup');
        
        
        btnRegisterEmail.addEventListener('click', (event) => {
          event.preventDefault();
          console.log(nameSignUp.value);
          createUser(emailSignUp.value, passwordSignUp.value, nameSignUp.value)
          changeHash('#/profile');
        });
        userSesionActive();
 
      return root;
  };
