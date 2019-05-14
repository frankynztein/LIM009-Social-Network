// aqui exportaras las funciones que necesites
import {viewFeed} from '../view/viewFeed.js';


//Cerrar sesión
export const exit = () => {
  return firebase.auth().signOut()
};

//Crear usuario
export const createUser = (emailSignIn, passwordSignIn) => {
  return firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
};

//acceder con gmail y contraseña
export const signInUser = (emailLogIn, passwordLogIn) => {
  return firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};
//usuario con sesion activa - muestra info del usuario registrado
export const userSesionActive = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      viewFeed(user)
    } else {
      console.log("no logeado")
    }
  });
};

//iniciar con google
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};
//iniciar confabcebook
export const facebookLogin = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};

export const addNote = () => {  
  // var config ={
  //     apiKey: "AIzaSyDhPzlMom9mAEcuyk_Dw05NY2awAH_zYAU",
  //     authDomain: "red-social-58567.firebaseapp.com",
  //     databaseURL: "https://red-social-58567.firebaseio.com",
  //     projectId: "red-social-58567",
  //     storageBucket: "red-social-58567.appspot.com",
  //     messagingSenderId: "305974368757",
  //     appId: "1:305974368757:web:1024756010c9ad41"
  //   };
  
  //   firebase.initializeApp(config);

  console.log('firebase: ', firebase)
  var db = firebase.firestore()

  db.collection("users").add({
      first: "Juanito",
      last: "Lovelace",
      born: 1815
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

  // firebase.firestore().collection("user").add({
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   })
  //   .then(function(docRef) {
  //     console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch(function(error) {
  //     console.error("Error adding document: ", error);
  // });
  // return addNote;
};

addNote();


// export const addNote = (textNewNote) =>
//   firebase.firestore().collection('notes').add({
//     title: textNewNote,
//     state: false
//   })
//borrar notas
// export const deleteNote = (idNote) =>
//   firebase.firestore().collection('notes').doc(idNote).delete()
//agregar notas
// export const getNotes = (callback) =>
//   firebase.firestore().collection('notes')
//     .onSnapshot((querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() })
//       });
//       callback(data);
//     }); 





// export const addNote = (userName,userPhoto,textPost,privacy) => {
//   return firebase.firestore().collection('posts').add({
//     name : userName,
//     photo :  userPhoto,
//     textPost : textPost,
//     privacy : privacy,
//     date : Date(),
//     likes :0,
//   });
// }

// export const getPost =(callback)=>{
//   firebase.firestore().collection('posts').onSnapshot((querySnapshot)=>{
//       const posts =[];
//       querySnapshot.forEach((doc) => {
//          // console.log(`${doc.id} => ${doc.data().name}`);
//           posts.push({id: doc.id,...doc.data()});
//       });
//      // console.log(posts)
//       callback(posts);
//   })
// }
// export const deleteNote = (idNote)=>{
// return firebase.firestore().collection('posts').doc(idNote).delete();
// }

// export const updateNote = (idNote , note ) =>{
// return firebase.firestore().collection('posts').doc(idNote).update(note);
// }


//funcion que nos recomendo Mariano
// const getUserWhenReady=(callback)=>{
//   if (firebase.auth.currentUser){ callback(currentUser)}
//   else{
//    const unSucribe = firebase.auth().onAuthStateChanged((user)=>{
//      if (user){
//        callback (user)
//      }else{
//        callback(null)
//      }
//    })
//    unSucribe(); 
//   }
// }