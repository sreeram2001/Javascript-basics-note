var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  // Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
var auth = firebase.auth()
var database = firebase.database()

function save()
{
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    username = document.getElementById('username').value;
    bmi = document.getElementById('bmi').value;

    //move on to auth to register the USER
    auth.createUserWithEmailAndPassword(email, password)
    .then(function()
    {
        var user = auth.currentUser
        var database_ref = database.ref()

        var user_data = {
            email:email,
            password:password,
            username:username,
            bmi:bmi,
            lastlogin : Date.now()
        }
        
        //saving it to subclass users
        database_ref.child('users/' + username).set(user_data);
        //user.uid created unique ID comes with firebase, we set this object to that UID

        alert("User Logged In Successfully")
    })
    .catch(function(err){

        var errm = err.message;
        alert(errm);
    })

}

function get()
{
    var username = document.getElementById('username').value;

    //firebase functions
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot)
    {
        var data = snapshot.val();
        alert(data.email);
    })

}


function update()
{
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    username = document.getElementById('username').value;
    bmi = document.getElementById('bmi').value;

    var user_data = {
        email:email,
        password:password,
        username:username,
        bmi:bmi,
        lastlogin : Date.now()
    }
        
    //saving it to subclass users
    database.ref('users/' + username).update(user_data);
    //user.uid created unique ID comes with firebase, we set this object to that UID

    alert("User Updated Details")
}

function remove()
{
    username = document.getElementById('username').value

    //firebase keywords refers to database current data
    database.ref('users/' + username).remove();

    alert("User Deleted")
}



