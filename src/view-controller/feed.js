//Cerrar sesión
export const saveFeed = (text, visuality, user) => {
    
    let db = firebase.firestore();
    db.collection("feeds").add({
        description: text,
        state: visuality,
        likes: 0,
        uid: user.uid
    })
    .then(() => {
    document.getElementById('form-post').reset();
    console.log("Document written succesfully");        
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
};

export const viewFeedDb = (callback) => {
    let db = firebase.firestore();
	db.collection("feeds").onSnapshot((querySnapshot) => {
		const data = [];
		querySnapshot.forEach((doc) => {
			data.push({
				id: doc.id,
				...doc.data()
			});
			console.log(data);
		});
		callback(data);
	});
}

