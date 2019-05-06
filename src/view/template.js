import {facebookLogin,googleLogin,createUser,userSesionActive,signInUser,exit} from '../view-controller/index.js'
'../view/index.js'

export const activeUserPage = (user) => {
  const content = document.getElementById('content');
  if (user != null) {
    let bienvenida = `
      <div id="feed-container">
        <div class="topnav" id="myTopnav">
          <a href="#home" class="active">Hola, ${user.displayName}</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#" id="exit">Cerrar sesión</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i>
          </a>
        </div>
        <div class="feed-container">
          <div class="feed-profile">
            <figure class="circular-landscape">
                <img src="${user.photoURL}" alt="Imagen de perfil." class="profile-img">
            </figure>
            <small class="profile-name">${user.displayName}</small>
          </div>
          <div class="feed-comment">
            <input type="text" class="input-comment" size="50" placeholder="¿Qué quieres compartir?">
            <button class="d-block btn-share-feed">Compartir</button>
          </div>
        </div>
      </div>
      <script>
          function myFunction() {
              var x = document.getElementById("myTopnav");
              if (x.className === "topnav") {
              x.className += " responsive";
              } else {
              x.className = "topnav";
              }
          }
      </script>`;
    content.innerHTML = bienvenida;

    const btnExit = document.getElementById('exit');
    btnExit.addEventListener('click', () => {
      exit();
    });
  }
}


export const page1 = () => {
  /*
  const content = document.getElementById('content');
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
        <p class="m-auto">¿No tienes una cuenta? <a id="myBtn" class="register" href="#">Regístrate.</a></p>
      </div>
    </div>`;
  content.innerHTML = loginPage;

  */
  /*
  const registerPage = () => {
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
  };
      */

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
    registerPage();
    registerUserOk();
  });

  const btnLogInEmail = document.getElementById('login-btn');
  const emailLogInEmail = document.getElementById('email-login');
  const passwordLogInEmail = document.getElementById('password-login');
  btnLogInEmail.addEventListener('click', (event) => {
    event.preventDefault();
    signInUser(emailLogInEmail.value, passwordLogInEmail.value);
  });
  userSesionActive();

  const loginFacebook = document.getElementById('fbBtn');
  loginFacebook.addEventListener('click', e => {
    e.preventDefault();
    facebookLogin();
  })

  const loginGoogle = document.getElementById('googleBtn');
  loginGoogle.addEventListener('click', e => {
    e.preventDefault();
    googleLogin();
  });
};
//no se por que no se suben mis cambios a la rama de la dueña de repositorio