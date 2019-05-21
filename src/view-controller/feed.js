

// Agregar documentos
export const saveFeed = (nombre) => {
    
    let db = firebase.firestore();
    db.collection("feeds").add({
        first: nombre  
        
    })
    .then(() => {
    document.getElementById('form-post').reset();
    console.log("Document written succesfully");        
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
};




//Leer documentos
export const viewFeedDb = () => {
    let db = firebase.firestore();
	return db.collection("feeds");
}
