const firebaseConfig = {
    apiKey: "AIzaSyDEfC3-FbfTw5YYNWo1hEn4vsKLWe2T-wk",
    authDomain: "nedilya10macular-periphery.firebaseapp.com",
    projectId: "nedilya10macular-periphery",
    storageBucket: "nedilya10macular-periphery.appspot.com",
    messagingSenderId: "305824248903",
    appId: "1:305824248903:web:48fed5fc0d7de267fdad62",
    measurementId: "G-9BQ8YK7E4X"
}

const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore()

var db = firebase.firestore();