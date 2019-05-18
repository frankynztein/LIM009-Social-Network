import { exit } from "../view-controller/index.js";
import { saveFeed, viewFeedDb } from "../view-controller/feed.js";

export const viewFeed = (user) => {
    const root = document.getElementById('content');
    const feedPage = `
        <header>
            <p>Bienvenidx ${user.displayName || user.name}</p>
            <img src= '../images/fob-color.png' width= 200px height=50px>
            <p id="exit"><a href="#/login">Cerrar sesión</a></p>        
        </header>
        <section class="info-user">
            <div class="div-img">
                <figure><img class="img-user" src="${user.photoURL}" alt="foto"></figure>
             </div>
             <div>
                <p>${user.displayName || user.name}</p>
                <p>Email: ${user.email}<p>
            </div>
        </section>
        <div id ='form-post'>
            <select>
                <option>Visualización</option>    
                <option value="private">Privado</option>
                <option value="public">Público</option>
            </select>    
            <input type="text" id="text-coment" class="input-comment" placeholder="Que quieres compartir">
            <div class="btns-coment>
                <a type="file" value="upload" id="fileButton"> <img src="../images/image.png" width="30px" ></a>
                <a id="btn-publicar"><img src="../images/more.png" width="30px"> </a>
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
    viewFeedDb((posts) => {        
        let html = ""
        posts.forEach(element => {
       let child = `<table class='feed'>
     <thead class= "nombre">
      <tr>
        <th >${element.uid}</th>
        <th> <a><img src="../images/error.png" style="width:25px" alt="Eliminar" onclick="eliminar('${element.uid}')"></img></a></th>
     </tr>
    </thead>
    <tbody >
     <tr>
       <td>${element.description}</td>
     </tr>
     <tr>
       <td> <a><img src="../images/like.png" alt="Like" style="width:25px;" onclick="like('${element.uid}','${element.description}')"></img></a></td>
       <td><a><img src="../images/edit.png" alt="Editar" style="width:25px;"onclick="editar('${element.uid}','${element.description}')"></img></a></td>
    </tr>
    </tbody>
  </table>
`;
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


    