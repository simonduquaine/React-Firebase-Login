import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyDOwxbzE3Wogg0ue2kfCvP5feYpKKpcpY0",
  authDomain: "login-c3789.firebaseapp.com",
  databaseURL: "https://login-c3789.firebaseio.com",
  projectId: "login-c3789",
  storageBucket: "login-c3789.appspot.com",
  messagingSenderId: "5153412664",
  appId: "1:5153412664:web:d942ab19a3b057300678cd",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
