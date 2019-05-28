// aqui exportaras las funciones que necesites
//import {viewFeed,listFeed} from '../../view/feed.js';


// Cerrar sesión
export const exit = () => {
  return firebase.auth().signOut()
};

//Crear usuario
export const createUser = (emailSignIn, passwordSignIn, nameSignIn) => {
  return firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
  .then(user => {
    user.user.updateProfile({
        displayName: nameSignIn
    });
    console.log(user);
  });
};

//acceder con gmail y contraseña
export const signInUser = (emailLogIn, passwordLogIn) => {
  return firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};


export const userSesionActive = (callback) => {
  let userCurrent = firebase.auth().currentUser;
  if (userCurrent) {
      return callback(userCurrent)
  } else {
      const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
              return callback(user)
              // User is signed in.
          } else {
              // No user is signed in.
              return callback(null);
          }
          unsubscribe()
      });
  }
}

//iniciar con google
export const googleLogin = () => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(providerGoogle)
};
//iniciar con facebook
export const facebookLogin = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};

// Agregar documentos
export const saveFeed = (uid, text, visuality, userName) => {
  let db = firebase.firestore();
  return db.collection("feeds").add({
      userId: uid,
      user: userName,
      description: text,
      state: visuality,
      likes: 0,
      date: new Date(),
  })
};

//LEER DOCUMENTOS
export const viewFeedDb = (callback) => {
  let user = firebase.auth().currentUser;
  let db = firebase.firestore();
 db.collection("feeds")
 .orderBy('date', 'desc')
 .onSnapshot((querySnapshot) => {
   let data = [];
  querySnapshot.forEach((doc) => {
    const infoDelDocumento = {
      id: doc.id,
      data: doc.data()
    };
      data.push(infoDelDocumento);
      if (doc.data().userId === user.uid || doc.data().state === "Público") {
      }
  })
  callback(data);
})
};

// POST PÚBLICOS
// export const publicPostsOnly = (callback) => {
//   let db = firebase.firestore();
//  db.collection("feeds")
//  .where("state", "==", "Público")
//  .onSnapshot((querySnapshot) => {
//    let data = [];
//   querySnapshot.forEach((doc) => {
//     const infoDelDocumento = {
//       id: doc.id,
//       data: doc.data()
//     };
//       data.push(infoDelDocumento);
//   })
//   callback(data);
// })
// }

// BORRAR POSTS
export const deleteFeeds = (id) => {
  let db = firebase.firestore(); 
 return db.collection("feeds").doc(id).delete()
};

// EDITAR POSTS
export const updatePost = (id, text, visuality) => {
  let db = firebase.firestore();
  return db.collection("feeds").doc(id).update({
    description: text,
    state: visuality,
  })
};

// LIKES
export const likePost = (id, like) => {
  let db = firebase.firestore();
  return db.collection("feeds").doc(id).update({
    likes:like
  })
}