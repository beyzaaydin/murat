$(document).ready(function(){

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDZEhXwHLlZiGTMjENkQ8nV870JvvekaqU",
      authDomain: "findgraveyard.firebaseapp.com",
      databaseURL: "https://findgraveyard.firebaseio.com",
      projectId: "findgraveyard",
      storageBucket: "findgraveyard.appspot.com",
      messagingSenderId: "1008854481499"
    };
    firebase.initializeApp(config);
  
      var current_user = "";
  
      firebase.auth().onAuthStateChanged(function(user){
  
          if(user){
  
              current_user = user.uid;
  
              $(".user-text").text(user.email);
  
              $("#logout").click(function(){
  
                  firebase.auth().signOut()
                      .then(function(){
                          window.location.href = "index.html";
                      })
              })
        
  
             
             // Kendi ölülerini getirme //
              $("#showmydeceased").click (function() { 
                window.location.href = "showmydeceased.html";
              
                  
                  
                  var todoRef = firebase.database().ref().child("Deceaceds").child(current_user);
              todoRef.on("value", function(snapshot){
  
                 // var $parent = $(".todoList").children("tbody");
  
                  $("#oluler tbody").html('');
                  $("#oluler tbody").append( "<tr><th>Name</th><th>Surname</th><th>job</th><th>lokasyon</th><th>gender</th><th>dogum</th><th>olum</th></tr>")
                  
                  snapshot.forEach(function(item){
  
                      
  
                      //var completed = item.val().completed == true ? "checked" : "";
  
                  // geri getirilcek if(item.val().city==$("#cityInput").val()){
  
                      //var completed_elem = "<td class='text-center'><input data-key='" + item.key + "' type='checkbox' class='switchery-plugin' " + completed + "/></td>";
                      //var removeBtn_elem = "<td class='text-center'><button data-key='" + item.key + "' class='btn btn-danger btn-block removeBtn'>Sil</button></td>";
  
                      $("#oluler tbody").append( "<tr><td>" + item.val().deceased_name + "</td><td> " + item.val().deceased_surname + "</td><td> " +
                       item.val().deceased_job + "</td><td>"+item.val().deceased_location+ "</td><td> " + item.val().deceased_gender + "</td><td> "+"</td><td> " +
                        item.val().deceased_birth_date +"</td><td> " + item.val().deceased_death_date +"</td></tr>");}
                   
              )})

  
             
  
                  $(".switchery-plugin").each(function(){
                      new Switchery(this);
                  })
              });
  
  
  
  
              $("body").on("click", ".removeBtn", function(){
  
                  var $key = $(this).data("key");
  
                  firebase.database().ref("users/" + current_user).child("caregiver").child($key).remove();
  
              });
  
  
              $("body").on("change", ".switchery-plugin", function(){
  
                  var $completed = $(this).prop("checked");
  
                  var $key = $(this).data("key");
  
                  firebase.database().ref("users/" + current_user).child("caregiver").child($key).child("completed").set($completed);
  
  
  
  
  
  
  
              })
  
  
          }
  
      })
  
  })