

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA8uGTDA6PwPkG8a-0pQ7TP6Ga3eSw6DJ4",
    authDomain: "login-register-532ff.firebaseapp.com",
    projectId: "login-register-532ff",
    storageBucket: "login-register-532ff.appspot.com",
    messagingSenderId: "338451647588",
    appId: "1:338451647588:web:052b5c2381fd12ac3ea371"
  };

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//initialize variables
const auth = firebase.auth();
const database = firebase.database();

//register function
function registerUser()
{
    //get input values
    email = document.getElementById('email').value;
    username = document.getElementById('full_name').value;
    password = document.getElementById('password').value;
    number = document.getElementById('favourite').value;
    birthmonth = document.getElementById('birthmonth').value;

    //now if email or password is invalid stop running the function
    if(validateEmail(email) == false || validatePassword(password) == false)
    {
        alert("Enter Correct Password / Email")
        return;
    }

    if(validateUsername(username) == false || validateUsername(number)==false || validateUsername(birthmonth) ==false)
    {
        alert("No Value in Input Fields Entered")
        return;
    }

    //move on to auth to register the USER
    auth.createUserWithEmailAndPassword(email, password)
    .then(function()
    {

    var user = auth.currentUser

    //ADDing this to firebase database
    var database_ref = database.ref()

    //CREATE user data using object
    var user_data = {
        email : email,
        number : number,
        username : username,
        birthmonth : birthmonth,
        lastlogin : Date.now()      //to get current logintime
    }

    //saving it to subclass users
    database_ref.child('users/' + user.uid).set(user_data);
    //user.uid created unique ID comes with firebase, we set this object to that UID

    alert("User Created")
    })
    .catch(function(err)
    {
    
    var errorcode = err.code;
    var errormessage = err.message
    alert(errormessage);
})
}

//LOGIN FUNCTION 
function loginUser()
{
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if(validateEmail(email) == false || validatePassword(password) == false)
    {
        alert("Invalid Password/ Email")
        return;
    }

    //move on to sign in and authentication
    auth.signInWithEmailAndPassword(email, password)
    .then(function()
    {
        var user = auth.currentUser

        //ADDing this to firebase database
        var database_ref = database.ref();

            //CREATE user data using object
        var user_data = {
        lastlogin : Date.now()      //to get current logintime
        }

        //saving it to subclass users
        database_ref.child('users/' + user.uid).update(user_data);

        alert("User Logged In")
        
    })
    .catch(function(err)
    {
        var errormessage = err.message;
        alert(errormessage);

    })
}

//VALIDATE FUNCTIONS
function validateEmail(email)
{
    expression = /^[^@]+@\w+(\.\w+)+\w$/;
    //email is valid
    if(expression.test(email) == false)
    {
        return false;
    }
    return true;
}

function validatePassword(password)
{

    if(password < 6)
    {
        return false;
    }
    return true;
}

function validateUsername(username)
{
    if (username == null)
    {
        return false;
    }
    return true;
}




//firebase rules
// "users": {
//     "$uid": {
//       ".read": "$uid === auth.uid",
//       ".write": "$uid === auth.uid"
//     }
//   }
//this ensures other users can't edit or change others users parameters or credentials