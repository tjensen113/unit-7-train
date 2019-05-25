$(document).ready(function(){

 // Initialize Firebase
 
/* <script src="https://www.gstatic.com/firebasejs/6.0.3/firebase-app.js"></script> */




   var firebaseConfig = {
    apiKey: "AIzaSyBVJOfGfOxDvl65Y9ULYnqwB5VfLO517_I",
    authDomain: "train-week7.firebaseapp.com",
    databaseURL: "https://train-week7.firebaseio.com",
    projectId: "train-week7",
    storageBucket: "train-week7.appspot.com",
    messagingSenderId: "694263318596",
    appId: "1:694263318596:web:8614cbeef99837c1"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





//Initializing the variables .....................

var database = firebase.database().


var trainName = "",
var train
//Capturing the add train button click.................




 //Declarethe variables that will hold the user input values..............................


  //Creating a local temporary object for holding train info


  //Upload the train data to the database.....



   //Clearing all the values from the input area when the submit button is clicked.







   //Creating a firebase event for adding train to the database and a row to the html..........







     //Store to a variable.......




      //Use moment.js to convert the first train arrival time to .......







       //Use moment.js to show current time......




       //Declaring a variable that will hold the dynamically created rows and table data elements with its values....



        //Appending the row to the table body..




});