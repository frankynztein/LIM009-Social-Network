import { exit } from "../view-controller/index.js";
import { saveFeed, viewFeedDb } from "../view-controller/feed.js";

export const viewFeed = (user) => {    
    const root = document.getElementById('content');
    const feedPage = `
        <header>
            <p class="text-header">¡Bienvenidx, ${user.displayName || user.name}!</p>
            <img src= '../images/fob-color.png' class="logo-img">
            <a id="exit" class="text-header btn-signout" href="#/login">Cerrar sesión</a>     
        </header>
        <div class="info-user col-6 margin-left">
            <div class="div-img">
                <figure>
                    ${user.photoURL === null ? `<img class="img-user" src="../images/user.png"/>` : `<img class="img-user" src="${user.photoURL}"/>`}
                </figure>
            </div>
            <div>
                <p class="font-weight-bold">${user.displayName || user.name}</p>
                <p class="font-weight-bold">Email: ${user.email}<p>
            </div>
        </div>
        <div class="form-post col-6 margin-left" >
            <select class="privacy">
                <option>Privacidad</option>    
                <option value="private">Privado</option>
                <option value="public">Público</option>
            </select>    
            <input type="text" id="text-coment" class="input-comment" placeholder="¿Qué quieres compartir?">
            <div class="btns-coment>
                <a type="file" value="upload" id="fileButton"> <img src="../images/image.png" width="30px" ></a>
                <button id="btn-publicar" class="d-block btn-login btn-width">Compartir</button>
            </div>
        </div>
        <section id="post-container">
        </section>`;
        root.innerHTML = feedPage;
    const btnExit = root.querySelector('#exit');
    btnExit.addEventListener('click', () => {
        console.log("salir");    
        exit() 
    });
    //crear feed
    const btnComent= root.querySelector("#btn-publicar");
    btnComent.addEventListener('click', () => {        
        let textcoment = root.querySelector("#text-coment").value;
        let visuality = 'public';
        saveFeed(textcoment, visuality, user);
    })
    listFeed(root)
    return root;
}
  
export const listFeed = (root) => {    
    console.log(root);
    
    viewFeedDb((posts) => {  
        console.log(posts);              
        let html = ""
        posts.forEach(element => {            
        let child = `
        <div class="feed col-6">
            <table>
                <thead class="nombre">
                    <tr>
                        <th>${element.uid}</th>
                        <th> <a><img src="../images/error.png" style="width:25px" alt="Eliminar" onclick="eliminar('${element.uid}')"></img></a></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${element.description}</td>
                    </tr>
                    <tr>
                        <td><a><img src="../images/like.png" alt="Like" style="width:25px;" onclick="like('${element.uid}','${element.description}')"></img></a></td>
                        <td><a><img src="../images/edit.png" alt="Editar" style="width:25px;"onclick="editar('${element.uid}','${element.description}')"></img></a></td>
                    </tr>
                </tbody>
            </table>
        </di>`;
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