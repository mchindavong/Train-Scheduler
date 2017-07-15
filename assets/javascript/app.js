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

var name = "";
var destination = "";
var trainTime = "";
var frequency = "";

$("#add-train").on("click", function() {

	event.preventDefault();

	name = $("#trainName").val().trim();
	destination = $("#destination").val().trim();
	trainTime = $("#trainTime").val().trim();
	frequency = $("#frequency").val().trim();

	database.ref().set({

		Name: name,
		Destination: destination,
		TrainTime: TrainTime,
		Frequency: frequency,
	});


});


database.ref().on("value", function(snapshot) {

	console.log(snapshot.val());
	console.log(snapshot.val().name);
	console.log(snapshot.val().role);
	console.log(snapshot.val().startDate);
	console.log(snapshot.val().rate);




})