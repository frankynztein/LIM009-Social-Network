import { createUser, userSesionActive } from "../view-controller/index.js";

const changeHash = (hash) =>  {
  location.hash = hash;
}
export const viewRegister = () => {
  const div= document.createElement('div')
  div.innerHTML = '';
  const register =`
      <form>
        <input type="text" id="name-signup" placeholder="Nombre">
        <input type="text" id="lastName-signup" placeholder="Apellido">
        <input type="email" id="email-signup" placeholder="Email">
        <input type="password" id="password-signup" placeholder="Password">
        <button id="register-btn">Registrarse</button>
        <button id="regresarLogin"><a href="#/login">Regresar</a></button>
        
      </form> `;
    div.innerHTML = register;

        const btnRegisterEmail = div.querySelector('#register-btn');
        const emailSignUp = div.querySelector('#email-signup');
        const passwordSignUp = div.querySelector('#password-signup');
    
        btnRegisterEmail.addEventListener('click', (event) => {
          event.preventDefault();
          createUser(emailSignUp.value, passwordSignUp.value)
          changeHash('#/profile');
        });
        userSesionActive();
      
    
  //     const btnRegister = div.querySelector('#register-btn');
  //     btnRegister.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       registerUserOk()
  //     //   .then(()=> {
  //     //     // registerUserinFirestore(nameToSave,email)
  //     //     alert('Verifica tu correo e ingresa')
  //     // })
  //     // .then(() => exit())
  // });
    
      return div;
  };