
//firebase credentials
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
var auth = firebase.auth();
var database = firebase.database();


function signIn()
{
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    username = document.getElementById('username').value
    todo = document.getElementById('todos').value;//input value


    auth.createUserWithEmailAndPassword(email, password)
    .then(function()
    {
        var user = auth.currentUser
        var database_ref = database.ref()
        var arr = []
        arr.push(todo)

        var user_data = {
            email:email,
            password:password,
            username:username,
            arr:arr
        }

        database_ref.child('users/' + username).set(user_data);
        alert("User Created")

    })
    .catch(function(err)
    {
        alert(err.message)
    })
}

function logIn()
{
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    username = document.getElementById('username').value

    auth.signInWithEmailAndPassword(email, password)
    .then(function()
    {
        var user = auth.currentUser
        alert("User Logged In")
    })
    .catch(function(err)
    {

        alert(err.message);

    })

}

function get()
{
    //to list all items
            //getting data from firebase
            username = document.getElementById('username').value;

            var database_ref = database.ref('users/' + username) 

            var arr = []
            database_ref.on('value',function(snapshot)
            {
                var data = snapshot.val();
                arr = data.arr;
            })
            
            console.log(arr)
            todoList = document.getElementById('todoList')      //ul id

            for(let i=0;i<arr.length;i++)
            {
            var li = document.createElement("li");
            text = document.createTextNode(arr[i]);
    
            li.appendChild(text);
            todoList.appendChild(li);
            
            //to add close buttons
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("X");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);
            }

    // when close button is clicked
    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";

             //we remove the element from database as well
             username = document.getElementById('username').value;

             //if user is already created then use exisiting array from database to store todos
             //lets get the exisint data from database
                 var database_ref = database.ref('users/' + username);
                 let arr1 = []
                 var user_data = 
                 {
                     email:email,
                     password:password,
                     arr:arr1
                 }
     
                 database_ref.update(user_data);
                      
                 //loop through ul - li elements
                 arr1 = []
                 var li_items = document.getElementById('todoList').getElementsByTagName('li');
                 for(let i=0;i<li_items.length;i++)
                 {
                     arr1.push(li_items[i].innerText);
                 }
                 console.log("GET UDATE : ",arr1)

                 var user_data = 
                 {
                     email:email,
                     password:password,
                     arr:arr1
                 }
     
                 database_ref.update(user_data);
        }
      }

      alert("CLICK THE BUTTON TWICE")
}


function add()
{
    todo = document.getElementById('todos').value;      //input value
    
    var li = document.createElement("li");
    text = document.createTextNode(todo);

    if(todo == '')
    {
        alert("No Entries Given")
    }
    else
    {
        li.appendChild(text);
        todoList = document.getElementById('todoList')      //ul id

        todoList.appendChild(li);

        //adding it to database
        //lets check if any entry already exist
        var li_list_length = document.getElementById("todoList").getElementsByTagName("li").length;
        
        email = document.getElementById('email').value
        password = document.getElementById('password').value
        username = document.getElementById('username').value

        if(username)
        {
            email = document.getElementById('email').value;
            password = document.getElementById('password').value;
            username = document.getElementById('username').value;

            //if user is already created then use exisiting array from database to store todos
             //lets get the exisint data from database
            var database_ref = database.ref('users/' + username);
            var arr = []
            database_ref.on('value',function(snapshot)
            {
                arr = snapshot.val().arr;
                console.log(arr)
            })
            
            //add new entry to array
            todo = document.getElementById('todos').value;      //input value
            console.log(todo)
            arr.push(todo)

            var user_data = 
            {
                email:email,
                password:password,
                arr:arr
            }

            database_ref.update(user_data);

        }
    }

    document.getElementById('todos').value  = "";//input value

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);


    //when close button is clicked
    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");


    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";

          //we remove the element from database as well
          username = document.getElementById('username').value;

          //if user is already created then use exisiting array from database to store todos
          //lets get the exisint data from database
              var database_ref = database.ref('users/' + username);
              let arr1 = []
            
              //first update with NULL Values of ARR
              var user_data = 
              {
                  email:email,
                  password:password,
                  arr:arr1
              }
  
              database_ref.update(user_data);
              
              //loop through ul - li elements
              arr1 = []
              var li_items = document.getElementById('todoList').getElementsByTagName('li');
              for(let i=0;i<li_items.length;i++)
              {
                  arr1.push(li_items[i].innerText);
              }
  
              var user_data = 
              {
                  email:email,
                  password:password,
                  arr:arr1
              }
  
              database_ref.update(user_data);
        }
      }
}



