// aqui exportaras las funciones que necesites
import {viewFeed} from '../view/viewFeed.js';
import { viewLogin } from '../view/viewLogIn.js';

//Cerrar sesión
export const exit = () => {
  firebase.auth().signOut()
};
// .then(()=> {
//   // Sign-out successful.
//   //viewLogin();
// }).catch((error) =>{
//   // An error happened.
// });

//Crear usuario
export const createUser = (emailSignIn, passwordSignIn) => {
  firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((error)=>{
    //   alert("no se realizado la autenticacion");
    //   console.log(error);
    // })
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
// export const userSesionActive = (changeRoute) => {
//   return firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       viewFeed(user);
//       changeRoute('#/profile');
      
//     } else {
//       changeRoute('#/login');
//     }
//   });
// };
//iniciar con google
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
//   .then(result => {
//     alert ('exito');
//     console.log(result);
// 	})
// 	.catch(error => {
//     alert('error')
// 		console.log(error);
// 	});
};
//iniciar confabcebook
export const facebookLogin = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  // .then(result => {
  //   alert ('exito');
  //   console.log(result);
	// })
	// .catch(error => {
  //   alert(error)
	// 	console.log(error);
	// });
};