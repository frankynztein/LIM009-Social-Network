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
    })
    console.log(user);
  })
};

//acceder con gmail y contraseña
export const signInUser = (emailLogIn, passwordLogIn) => {
  return firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};


export const userSesionActive = (callback) => {
  var userCurrent = firebase.auth().currentUser;
  if (userCurrent) {
      return callback(userCurrent)
  } else {
      const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
              return callback(user)
              // User is signed in.
          } else {
              // No user is signed in.
              return callback(null)

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
export const saveFeed = (uid,text, visuality, userName) => {
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

//Leer documentos
export const viewFeedDb = (callback) => {
  let db = firebase.firestore();
 db.collection("feeds")
 .orderBy('date', 'desc')
 .onSnapshot((querySnapshot) => {
   let data =[];
  querySnapshot.forEach((doc) => {
      const infoDelDocumento = {
        id: doc.id,
        data: doc.data()
      };
      data.push(infoDelDocumento)
  })
  callback(data);
})
};

// Ordernar publicaciones
// export const orderFeedByDate = () => {
//   let db = firebase.firestore();
//   let orderFeed = db.collection("feeds");
//   return orderFeed.orderBy('date')
// };

// Borrar publicaciones
export const deleteFeeds = (id) => {
  let db = firebase.firestore(); 
 return db.collection("feeds").doc(id).delete()
};

