import { exit, saveFeed, viewFeedDb, deleteFeeds } from "../lib/controller-firebase/index.js";

export const viewFeed = (user) => {
    const root = document.getElementById('content');
    const feedPage =
    `<header>
        <p class="text-header">¡Bienvenidx, ${user.displayName || user.name}!</p>
        <img src= 'assets/fob-white.png' class="logo-img">
        <a id="exit" class="text-header btn-signout" href="#/login">Cerrar sesión</a>     
    </header>
        <div class="feed-container">
            <div class="user-container">
                <div class="info-user margin-left">
                    <div class="div-img">
                        <figure>
                            ${user.photoURL === null ? `<img class="img-user" src="assets/user.png"/>` : `<img class="img-user" src="${user.photoURL}"/>`}
                        </figure>
                    </div>
                    <div>
                        <p class="font-weight-bold">${user.displayName || user.name}</p>
                        <p class="font-weight-bold">Email: ${user.email}<p>
                    </div>
                </div>
            </div>
            <div class="wall-feed margin-left" >
                <div class="form-post">
                    <input type="text" id="text-coment" class="input-comment" placeholder="¿Qué quieres compartir?">
                    <div class="btn-comment">
                        <div class="btn-comment-right">
                            <img src="assets/picture.png" class="upload-icon">
                            <select id ="privacy" class="privacy">   
                                <option value="private" class="font-weight-privacy">Privado</option>
                                <option value="public" class="font-weight-privacy">Público</option>
                            </select>
                            <button id="btn-publicar" class="btn-login btn-compartir">Compartir</button>
                        </div>
                    </div>
                </div>
                <div id="post-container"></div>
            </div>
        </div>`;
    root.innerHTML = feedPage;
    const btnExit = root.querySelector('#exit');
    btnExit.addEventListener('click', () => {
        exit();
    });
    const btnPublicar = root.querySelector("#btn-publicar");
    const rootList = document.querySelector("#post-container");
    btnPublicar.addEventListener('click', () => {
        let text = root.querySelector("#text-coment").value;
        let visuality = root.querySelector("#privacy").value;
        saveFeed(user.uid, text, visuality, user.displayName);
    });

    
  
    const pintar = (data) => {
        rootList.innerHTML = ''; 
        data.forEach(objInfoPost => { 
            const article = document.createElement("article");
            article.innerHTML =
                `<article class="post">
                    <div class="post-user-info">
                        <div class="post-user-info-left">
                            <p class="post-user-name font-weight-bold">${objInfoPost.data.user}</p>
                        </div>
                        <div class="post-user-info-right">
                            <img src="assets/delete-button.png" id="btn-delete-${objInfoPost.id}" class="btn-delete">
                        </div>
                    </div>
                    <div class="post-user-message">
                        <p class="post-user-text">${objInfoPost.data.description}</p>
                        <img src="" alt="" class="post-user-img">
                    </div>
                    <div class="post-icons">
                        <div class="post-icons-img">
                            <img src="assets/comment-white-oval-bubble.png" alt="" class="post-icon-comment comment-icon">
                            <img src="assets/like.png" alt="Like" id="btn-like-${objInfoPost.id}" class="post-icon-like like-icon">
                            <img src="assets/picture24px.png" alt="" class="post-icon-upload upload-icon">
                            <img src="assets/edit.png" alt="Edit" id="btn-edit-${objInfoPost.id}" class="post-icon-edit edit-icon">
                        </div>
                        <div class="post-icons-btn-save">
                            <button class="btn-login btn-save">Guardar</button>
                        </div>
                    </div>
                </article>`;
           //console.log(templates);
        const btnDelete = article.querySelector(`#btn-delete-${objInfoPost.id}`);        
        btnDelete.addEventListener("click", () => {
            // console.log(btnDelete);
            deleteFeeds(objInfoPost.id);
        })

        rootList.appendChild(article);
        });
        
    }
    viewFeedDb(pintar);
    return root;
}


