// importamos la funcion que vamos a testear
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

import { exit, createUser, signInUser, googleLogin, facebookLogin  } from "../view-controller/index.js";

describe('cerrar sesion', () => {
  it('debería ser una función', () => {
    expect(typeof exit).toBe('function');
  });
});

describe('crear usuarios', () => {
	it('createUser deberia ser una funcion', () => {
		expect(typeof (createUser)).toBe('function')
	});
	it('Deberia registrar un nuevo usuario', () => {
		return registerUser('abcdef@gmail.com', 'abcdef')
			.then((user) => {
				expect(user.email).toEqual('abcdef@gmail.com')
			})
	})
});

describe('Login de Usuarios', () => {
	it('signInUser deberia ser una funcion', () => {
		expect(typeof (signInUser)).toBe('function')
	});
	it('Deberia iniciar sesion', () => {
		return signInUser('front@end.la', '123456')
			.then((user) => {
				expect(user.email).toEqual('front@end.la')
			})
	})
});


describe('Login de Usuarios con Google', () => {
	it('deberia ser una funcion', () => {
		expect(typeof googleLogin).toBe('function');
	});
	it('Deberia poder iniciar sesion con Google', () => {
		firebase.auth().onAuthStateChanged((user) => {
			expect(user.isAnonymous).toBe(false)
		})
		return googleLogin();
	})
});