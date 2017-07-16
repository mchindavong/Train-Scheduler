
var config = {
    apiKey: "AIzaSyAMGYt6hycyWHNre-68qrYlGvxKjUXcagA",
    authDomain: "clicking-things-6eb1e.firebaseapp.com",
    databaseURL: "https://clicking-things-6eb1e.firebaseio.com",
    projectId: "clicking-things-6eb1e",
    storageBucket: "clicking-things-6eb1e.appspot.com",
    messagingSenderId: "743416215612"
  };
  firebase.initializeApp(config);

var database = firebase.database();


$("#add-train-btn").on("click", function(event) {
  event.preventDefault();


  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var trainTime = moment($("#time-input").val().trim(), ("HH:MM").format("X"));
  var frequency = $("#frequency-input").val().trim();

  var newTrain = {
    name: trainName,
    destination: destination,
    time: trainTime,
    frequency: frequency
  };


  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);


  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");

});


database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().role;
  var trainTime = childSnapshot.val().start;
  var frequency = childSnapshot.val().rate;

  console.log(trainName);
  console.log(destination);
  console.log(trainTime);
  console.log(frequency);


  var nextArr = moment.unix(trainTime).format("HH:MM");

  var min = moment().diff(moment.unix(trainTime, "X"), "minutes");
  console.log(min);


  var minAway = min * frequency;
  console.log(minAway);


  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
  trainTime + "</td><td>" + min + "</td><td>" + frequency + "</td><td>" + minAway + "</td></tr>");
});


