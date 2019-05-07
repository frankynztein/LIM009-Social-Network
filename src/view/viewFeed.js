import { exit } from "../view-controller/index.js";
import { userSesionActive } from "../view-controller/index.js";

export const viewFeed = (user) => {
    const content = document.getElementById('content');
    const feedPage = `
        <div id="feed-container">
            <div class="topnav" id="myTopnav">
                <a href="#/profile" class="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#/login" id="exit">Cerrar sesión</a>
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
        content.innerHTML = feedPage;
    
        const btnExit = document.getElementById('exit');
        btnExit.addEventListener('click', () => {
            console.log("salir");    
             exit()
            // .then(changeHash('#/login'))
            //.catch((error) => console.log(error));
        
        });
       
    // export const viewFeed = (user) => {
    //     const div = document.createElement('div');
    //     const feedPage = `
    //     <button id="exit"><a href="#/login">Cerrar sesión</a></button>
    //     <p>Bienvenidx ${user.displayName}</p>
    //     <p>Email: ${user.email}<p>
    //     <figure><img src="${user.photoURL}" alt="foto"></figure>`;
    //     div.innerHTML = feedPage;
    //     // if (user != null) {
    //     //   let bienvenida = `
    //     //   <button id="exit"><a href="#/login">Cerrar sesión</a></button>
    //     //   <p>Bienvenidx ${user.displayName}</p>
    //     //   <p>Email: ${user.email}<p>
    //     //   <figure><img src="${user.photoURL}" alt="foto"></figure>
    //     //   `;
    
    };
    
