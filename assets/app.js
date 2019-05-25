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

var database = firebase.database();


var trainName = "";
var trainDestination ="";
var trainFrequency =0;
var trainTime = "";
var clickCounter = 1;
//Capturing the add train button click.................


$("#add-train").on("click",function(event){
  event.preventDefault();
  if ($('#train-input').val(),$("#destination-input").val(),$("#time-input").val(),$("#frequency-input").val() === ""){
    alert("all fields required. SUCKA.");
  } else{
    //Declarethe variables that will hold the user input values..............................
    trainName = $("#train-input").val().trim();
    trainDestination = $("#destination-input").val().trim();
    trainTime = $("#time-input").trim().val();
    trainFrequency = $("#frequency-input").val().trim();

    console.log("input values");
    console.log(trainName);
    console.log(trainTime);
    console.log(trainDestination);
    console.log(trainFrequency);


     //Creating a local temporary object for holding train info

     var trainDetail = {
       name: trainName,
       destination: trainDestination,
       frequency: trainFrequency,
       time: trainTime
     };
     //Upload the train data to the database.....
     database.ref().push(trainDetail);

        //Clearing all the values from the input area when the submit button is clicked.
        $("#train-input").val("");
        $("#destination-input").val("");
        $("#time-input").val("");
        $("#frequency-input").val("");

  }
});
   //Creating a firebase event for adding train to the database and a row to the html..........
   database.ref().on("child_added",function(childSnapshot,prevChildKey){

    //Store to a variable.......

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;

    //Use moment.js to convert the first train arrival time to .......
    var trainTimeConvert = moment(trainTime,"HH:mm"). subtract(1,"years");


    var currentTime = moment();

    var diffTime = moment().diff(trainTimeConvert, "minutes");
    var remainder = diffTime % trainFrequency;


    var timeRemain = trainFrequency - remainder;

    var newTrainTime = moment().add(timeRemain, "minutes");
    newTrainFormat = moment(newTrainTime).format("HH:mm");


  //dynamicly creting rows in the table
  var row = $(("tr class = 'tableRow'><td>" + trainNumber + "</td><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainTime + "</td><td>" + trainFrequency + "</td><td>" + newTrainFormat + "</td><td>" + timeRemain + "</td><td>"));

    $(".tableBody").append(row);

    } );


   });




 


 





















     




      






       




