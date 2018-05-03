$(document).ready(function(){

   // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDftgXeGXeW2BOuG79UBG2G8fwP7QSTyQs",
        authDomain: "morethanamenu-358e8.firebaseapp.com",
        databaseURL: "https://morethanamenu-358e8.firebaseio.com",
        projectId: "morethanamenu-358e8",
        storageBucket: "morethanamenu-358e8.appspot.com",
        messagingSenderId: "14307437642"
    };
    firebase.initializeApp(config);

    $("#registerBtn").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(){

                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(function(){
                        window.location.href = "hmpg.html";
                    })
				
            }).catch(function(error){
                alert(error.message);
        })

    })

    $("#loginBtn").click(function(){

        var email = $("#email1").val();
        var password = $("#password1").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(){
                window.location.href = "hmpg.html";
            }).catch(function(error){
                alert(error.message);
        })


    })



})