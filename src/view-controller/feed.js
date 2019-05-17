// Agregar documentos
export const saveFeed = (text, visuality, user) => {
    
    let db = firebase.firestore();
    db.collection("feeds").add({
        description: text,
        state: visuality,
        likes: 0,
        uid: user.uid,
        
        
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

// Borrar documentos

export const eliminar = (id) => {
    let db = firebase.firestore();
    db.collection("feeds").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
      }).catch(function(error) {
        console.error("Error removing document: ", error);
      });
    
      };

// Editar documentos  
 export const editar = (id,text) => {
    let db = firebase.firestore();
    document.getElementById('text-coment  ').value=text-coment ;
    var boton=document.getElementById('btn-publicar');
    boton.innerHTML='Editar';
    boton.onclick=function(){
      var washingtonRef = db.collection("feeds").doc(id);
      var text= document.getElementById('text').value;
      // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        description: text
    })
    .then(function() {
        console.log("Document successfully updated!");
        boton.innerHTML='Guardar';
        document.getElementById("text").value='';
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    // test.firestore.js
    }
};

