import Firebase from 'firebase';
// import 'firebase/database'
// import 'firebase/firestore'

let config = {
   apiKey: "AIzaSyDIhCxcO1cQ1fRYjdrNZRW3kzYnBvGaGfQ",
    authDomain: "sbwa-a2454.firebaseapp.com",
    projectId: "sbwa-a2454",
    storageBucket: "sbwa-a2454.appspot.com",
    messagingSenderId: "1054349587179",
    appId: "1:1054349587179:web:3fe07cd8e4808a742344ae"
};

// class Firebase{
//      constructor() {
//         firebase.initializeApp(config)
//         this.db = firebase.firestore()
//          this.data = firebase.database()
//     }
// }

Firebase.initializeApp(config);
// export const firebaseData = firebase.database();
// export const firestore = firebase.firestore()
export default Firebase;