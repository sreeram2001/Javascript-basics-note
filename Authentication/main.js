//setting firebase with website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4lX8Rc6o3bkHHB86pv2SMe6H19oerhKk",
    authDomain: "authorization-57efb.firebaseapp.com",
    projectId: "authorization-57efb",
    storageBucket: "authorization-57efb.appspot.com",
    messagingSenderId: "570852852076",
    appId: "1:570852852076:web:0d0f0b6a878adcff20b349"
 });

 //the above code constains config from firebase
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//signup function
const signup = ()=>{

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);

    //firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    document.write("WELCOME TO THE PAGE, YOU ARE SIGNED IN")
    console.log("userCredential",userCredential);

  })

  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log("Error : ", error);
    console.log("Error Message: ", error.message);
    alert(error.message);   //show the error i.e. email format incorrect, password length insufficient
  });

}


//signin function - for already regisitered users
const signin = ()=>
{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //firebase code
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    document.write("You are Successfully Signed In");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error.message);
  });
}