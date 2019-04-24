class authentication {
    createUserWithEmailAndPass (username, email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
            result.user.updateProfile({
                displayName: username
            })
            const emailVerificationSettings = {
                url: 'https://blogeekplatzi-4836b.firebaseapp.com/'
            }
            result.user.sendEmailVerification(emailVerificationSettings).catch(error => {
                console.log(error);
            })
            .catch(error => {
                console.log(error);
            })
            firebase.auth().signOut()
        })
        .catch(error => {
            console.log(error);
        })
    }

    authEmailAndPass (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
    }
}