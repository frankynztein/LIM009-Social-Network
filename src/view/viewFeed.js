import { exit } from "../view-controller/index.js";
import { saveFeed, viewFeedDb } from "../view-controller/feed.js";

// export const viewFeed = (user) => {
//     const content = document.getElementById('content');
//     const feedPage = `
//         <div id="feed-container">
//             <div class="topnav" id="myTopnav">
//                 <a href="#/profile" class="active">Home</a>
//                 <a href="#news">News</a>
//                 <a href="#contact">Contact</a>
//                 <a href="#/login" id="exit">Cerrar sesión</a>
//                 <a href="javascript:void(0);" class="icon" onclick="myFunction()">
//                     <i class="fa fa-bars"></i>
//                 </a>
//             </div>
//             <div class="feed-container">
//                 <div class="feed-profile">
//                     <figure class="circular-landscape">
//                         <img src="${user.photoURL}" alt="Imagen de perfil." class="profile-img">
//                     </figure>
//                     <small class="profile-name">${user.displayName}</small>
//                 </div>
//                 <div class="feed-comment">
//                     <input type="text" class="input-comment" size="50" placeholder="¿Qué quieres compartir?">
//                     <button class="d-block btn-share-feed">Compartir</button>
//                 </div>
//             </div>
//         </div>
//         <script>
//             function myFunction() {
//                 var x = document.getElementById("myTopnav");
//                 if (x.className === "topnav") {
//                 x.className += " responsive";
//                 } else {
//                 x.className = "topnav";
//                 }
//             }
//         </script>`;
//         content.innerHTML = feedPage;
    
//         const btnExit = document.getElementById('exit');
//         btnExit.addEventListener('click', () => {
//             console.log("salir");    
//              exit()
//             // .then(changeHash('#/login'))
//             //.catch((error) => console.log(error));
        
//         });

       
export const viewFeed = (user) => {
    const root = document.getElementById('content');
    const feedPage = `
        <header>
            <p>Bienvenidx ${user.displayName}</p>
            <img src= 'https://i.postimg.cc/rpPnvrL1/fbook.png' width= 200px height=50px>
            <p id="exit"><a href="#/login">Cerrar sesión</a></p>        
        </header>
        <div class="info-profile">
            <p>Email: ${user.email}<p>
            <figure><img src="${user.photoURL}" width= 100px  height=100px alt="foto"></figure>
        </div>
        <div class="form-post" id ='form-post'>
            <select class="select">
                <option>Visualización</option>    
                <option value="private">Privado</option>
                <option value="public">Público</option>
            </select>
            <label>¿Que quieres compartir?</label>
            <textarea id="text-coment"></textarea>
            <div>
                <button id="btn-image">subir Foto</button>
                <button id="btn-publicar">publicar</button>
            </div>
        </div>
        <section id="post-container">
        </section>
        `;
        root.innerHTML = feedPage;

    const btnExit = root.querySelector('#exit');
    btnExit.addEventListener('click', () => {
        console.log("salir");    
        exit() 
    });
    //crear post
    const btnComent= root.querySelector("#btn-publicar");
    btnComent.addEventListener('click', () => {        
        let textcoment = root.querySelector("#text-coment").value;
        let visuality = 'public';
        saveFeed(textcoment, visuality, user);
    })
    //leer post
    listFeed(root)

    return root;
}
  
export const listFeed = (root) => {    
    viewFeedDb((posts) => {        
        let html = "";
        posts.forEach(element => {
            let child = `<div class='feed'><p>${element.description}</p>
            <p> ${element.id}</p><p> ${element.user}</p></div>`
                            
             
            html += child;
        });
        root.querySelector('#post-container').innerHTML = html;
        
        // root.innerHTML = "";
        // root.appendChild(showActUser({
        //     ...user,
        //     name,
        // }, posts))
    })

}

