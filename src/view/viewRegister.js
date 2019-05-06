import { createUser } from "../view-controller/index.js";

export const viewRegister = () => {
    const login = document.getElementById('login')
    login.innerHTML = '';
    const register =`
      <form>
        <input type="text" id="name-signup" placeholder="Nombre">
        <input type="text" id="lastName-signup" placeholder="Apellido">
        <input type="email" id="email-signup" placeholder="Email">
        <input type="password" id="password-signup" placeholder="Password">
        <button id="register-btn">Registrarse</button>
        <button id="regresarHome"><img src="">Regresar</button>
      </form> `;
    const div = document.createElement('div')
    div.innerHTML = register;
    login.appendChild(div);

    const registerUserOk = () => {
        const btnRegisterEmail = document.getElementById('register-btn');
        const emailSignIn = document.getElementById('email-signup');
        const passwordSignIn = document.getElementById('password-signup');
    
        btnRegisterEmail.addEventListener('click', (event) => {
          event.preventDefault();
          createUser(emailSignIn.value, passwordSignIn.value);
        });
      }
    
      const btnRegister = document.getElementById('register-btn');
      btnRegister.addEventListener('click', (e) => {
        e.preventDefault();
        registerUserOk();
      });
  };