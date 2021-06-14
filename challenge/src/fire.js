import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBa96Obj9Man4AHT3727KP43RrEc5r5ZBw",
    authDomain: "calendar-1a68c.firebaseapp.com",
    projectId: "calendar-1a68c",
    storageBucket: "calendar-1a68c.appspot.com",
    messagingSenderId: "972409778133",
    appId: "1:972409778133:web:aa1d9ac22384736fa6d75c"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;