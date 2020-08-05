// // import firebase from 'firebase';

// //     const firebaseConfig = ()=> {
// //         FirebaseSvc =()=>{
// //             if (!firebase.apps.length) { //avoid re-initializing
// //                 firebase.initializeApp({
// //                     apiKey: "AIzaSyBkaEkoYdJa5LM3rqtfHjyg9s0V1hyGJtU",
// //                     authDomain: "chat-app-1256c.firebaseapp.com",
// //                     databaseURL: "https://chat-app-1256c.firebaseio.com",
// //                     projectId: "chat-app-1256c",
// //                     storageBucket: "chat-app-1256c.appspot.com",
// //                     messagingSenderId: "774120114112",
// //                     appId: "1:774120114112:web:9c5604359158b5285cea25",
// //                     measurementId: "G-GXXD9Z1B4F"
// //                     });
// //                 }
// //             }

// //             login = async(user, success_callback, failed_callback) => {
// //                 await firebase.auth()
// //                   .signInWithEmailAndPassword(user.email, user.password)
// //                 .then(success_callback, failed_callback);
// //              }
// //            }

// //             checkAuth =()=>{
// //                 firebase.auth().onAuthStateChanged(user =>{
// //                     if(!user){
// //                         firebase.auth().signInAnonymously();

// //                     }

// //                 });
// //             };

// //                 send = messages =>{
// //                     messages.forEach(item =>{
// //                         const message = {
// //                             text : item.text,
// //                             timestamp : firebase.database.ServerValue.TIMESTAMP,
// //                             user :item.user
// //                         };
// //                         this.db.push(message);
// //                     });
// //                 };

// //                 parse = message => {
// //                     const {user , text, timestamp}= message.val()
// //                     const {key :_id} =message
// //                     const createdAt = new Data(timestamp)

// //                     return{
// //                         _id,
// //                         createdAt,
// //                         text,
// //                     };
// //                 };
// //                 get =callback =>{

// //                 }
// //                 // get db(){
// //                 //     return firebase.database().ref("messages");
// //                 // }
// //             }

// //    // export default firebase.initializeApp (firebaseConfig) ;

export const firebaseConfig = {
  apiKey: "AIzaSyBkaEkoYdJa5LM3rqtfHjyg9s0V1hyGJtU",
  authDomain: "chat-app-1256c.firebaseapp.com",
  databaseURL: "https://chat-app-1256c.firebaseio.com",
  projectId: "chat-app-1256c",
  storageBucket: "chat-app-1256c.appspot.com",
  messagingSenderId: "774120114112",
  appId: "1:774120114112:web:9c5604359158b5285cea25",
  measurementId: "G-GXXD9Z1B4F",
};
