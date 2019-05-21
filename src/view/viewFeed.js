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

    //crear post
    const btnComent= root.querySelector("#btn-publicar");
    btnComent.addEventListener('click', () => {        
        let textcoment = root.querySelector("#text-coment").value;
        let visuality = 'public';
  
        saveFeed(textcoment, visuality, user);
    })


    //leer post
    listFeed()

    return root;
}
  /**
   * 
//   .onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().first}`);
    });
})
   */
export const listFeed = () => { 
    // var tabla=document.getElementById("tabla");
    const t = document.querySelector('#post-container')
    const tabalaPintar = document.createElement('div')

    viewFeedDb().onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc)
            // console.log(`${doc.id} => ${doc.data().first}`);
           const tabla =`
            <table>
                  <thead>
                  <tr>
                    <th scope="col">${doc.id}</th>
                    <th> <a><img src="imagen/eliminar.svg" alt="Eliminar" style="width:10px;" onclick="eliminar('${doc.id}')"></img></a></th>
                  </tr>
                </thead>
                <tbody >
                <tr>
                <td>${doc.data().first}</td>
            
              </tr>
              <tr>
            
              <td> <a><img src="imagen/like.svg" alt="Like" style="width:30px;" onclick="like()"('${doc.id}','${doc.data().first}')"></img></a></td>
            
              <td><a><img src="imagen/editar.svg" alt="Editar" style="width:30px;"onclick="editar('${doc.id}','${doc.data().first}')"></img></a></td>
            
              </tr>
              </table>
                </tbody>
            
                  `
                  tabalaPintar.innerHTML += tabla
                  t.appendChild(tabalaPintar)
          })
        })
         
     }
