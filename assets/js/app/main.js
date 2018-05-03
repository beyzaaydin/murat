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
    var current_user = "";
  //  var selectedFile = event.target.files[0];  
    
    
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
            // add new deceased yönlendirme yapar //
            //                                    //
            $("#addnewdeceased").click(function(){
                window.location.href = "createnewdecased.html"
            })
            
            //grave care kısmında şu şehri seçer ise //
            //                                      //
            $("#ccity").change(function(){
                if ($("#ccity option:selected").val() == 'Adana')
                {
                    $("#cnameofthegraveyard").append("<option value='Akkapı Mezarlığı'>Akkapı Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Asri Mezarlığı'>Asri Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Kabasakal Mezarlığı'>Kabasakal Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Buruk Mezarlığı'>Buruk Mezarlığı</option>");
                }
                if ($("#ccity option:selected").val() == 'Ankara')
                {
                    $("#cnameofthegraveyard").append("<option value='Cebeci Asri Mezarlığı'>Cebeci Asri Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Cimşit Mezarlığı'>Cimşit Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Devlet Mezarlığı'>Devlet Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Karşıyaka Mezarlığı'>Karşıyaka Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Ortaköy Mezarlığı'>Ortaköy Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value=''></option>");
                }
                if ($("#ccity option:selected").val() == 'Aydın')
                {
                    $("#cnameofthegraveyard").append("<option value='Kadıköy Mezarlığı'>Kadıköy Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Tellidede Mezarlığı'>Tellidede Mezarlığı</option>");
                 
                }
                if ($("#ccity option:selected").val() == 'Bitlis')
                {
                    $("#cnameofthegraveyard").append("<option value='Ahlat Selçuklu Mezarlığı'>Ahlat Selçuklu Mezarlığı</option>");
                
                }
                if ($("#ccity option:selected").val() == 'Bursa')
                {
                    $("#cnameofthegraveyard").append("<option value='Alacahırka Mezarlığı'>Alacahırka Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Ahmetpaşa Mezarlığı>Ahmetpaşa Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Arabayatağı Mezarlığı'>Arabayatağı Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Baruthane Mezarlığı'>Baruthane Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Çekirge Mezarlığı'>Çekirge Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Değirmenönü Mezarlığı'>Değirmenönü Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Değirmenlikızık Mezarlığı'>Değirmenlikızık Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Emirsultan Mezarlığı'>Emirsultan Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Küçükbalıklı Mezarlığı'>Küçükbalıklı Mezarlığı</option>");
                    $("#cnameofthegraveyard").append("<option value='Pınarbaşı Mezarlığı'>Pınarbaşı Mezarlığı</option>");
                }

            })

                //add new deceased kısmı // 
                //                       //
            $(".firebaseforadd").click(function(){

                var deceased_name = $("#deceased_name").val();
                var deceased_surname = $("#deceased_surname").val();
                var deceased_job= $("#deceased_job").val();
                var deceased_birth_date = $("#deceased_birth_date").val();
                var deceased_death_date = $("#deceased_death_date").val();
                var deceased_location = $("#deceased_location").val();
                var deceased_gender = $("#deceased_gender").val();
                 var Biography   = $("#Biography").val();
              
            //  var filename = selectedFile.name;
            //   var storageRef = firebase.storage().ref('/images/'+filename);
            //   var uploadTask = storageRef.put(selectedFile);
           //    uploadTask.on('state_changed',function(snapshot){

             //  }, function(error){

            //   },
            //   function(){
            //       var postKey = firebase.database().ref('Deceaceds/').push().key;
            //       var downloadURL = uploadTask.snapshot.downloadURL;
           //        var updates = {};
            //       var postData = {}
            //       updates['Deceaceds/'+postKey] = firebase.database().ref('Deceaceds/'+postKey)

            //   }  ) ;

              

                 firebase.database().ref().child("Deceaceds").push(
                     { 
                         deceased_name : deceased_name ,
                         deceased_surname : deceased_surname,
                         deceased_job : deceased_job,
                         deceased_location : deceased_location,
                         deceased_gender : deceased_gender,
                         deceased_birth_date : deceased_birth_date,
                         deceased_death_date : deceased_death_date,
                         UserID : current_user,
                         Biography : Biography,
                     }
                 );
                 alert('successfully Deceased added');
             })




             //caregiver ekleme//
            $(".sendToFireBase").click(function(){

               var cname = $("#cname").val();
               var csurname = $("#csurname").val();
               var ccity= $("#ccity").val();
               var cphoneNumber = $("#cphoneNumber").val();
              var cnameofthegraveyard = $("#cnameofthegraveyard").val()

                firebase.database().ref().child("Caregivers").push(
                    { 
                        cname : cname ,
                        csurname : csurname,
                        ccity : ccity,
                        cphoneNumber : cphoneNumber,
                        cnameofthegraveyard : cnameofthegraveyard, 
                        UserID : current_user,
                    }
                );
                alert('successfully Caregiver added');
            })



            // mezarcı çağırma codu//
            //                      //
            $("#citySearch").click (function() { 
                
              var todoRef = firebase.database().ref().child("Caregivers");
            todoRef.on("value", function(snapshot){

                $("#mezarcilar tbody").html('');
                $("#mezarcilar tbody").append( "<tr><th>Name</th><th>Surname</th><th>Phone Number</th><th>Name Of The Graveyard</th></tr>")
                
                snapshot.forEach(function(item){

                    if(item.val().ccity == $("#cityInput").val()){
                    $("#mezarcilar tbody").append( "<tr><td>" + item.val().cname + "</td><td> " + item.val().csurname + "</td><td> "  + item.val().cphoneNumber + "</td><td>"+item.val().cnameofthegraveyard+"</td></tr>");}

                })})

                $(".switchery-plugin").each(function(){
                    new Switchery(this);
                })
            });


       

           // ölü çağırma kodu //
           //                 //
            $("#oluarama").click (function() { 
                console.log("oluler basıldı");

                var todoRef = firebase.database().ref().child("Deceaceds");
            todoRef.on("value", function(snapshot){

                $("#oluler tbody").html('');
                $("#oluler tbody").append( "<tr><th>Name</th><th>Surname</th><th>job</th><th>location</th><th>gender</th><th>Birth</th><th>Death</th><th>Biography</th></tr>")
                
                snapshot.forEach(function(item){
                    if(item.val().deceased_name == $("#fsearch").val()){
                    $("#oluler tbody").append( "<tr><td>" + item.val().deceased_name +" </td><td> " + item.val().deceased_surname + "</td><td>" +
                     item.val().deceased_job + "</td><td>"+item.val().deceased_location+ "</td><td> " + item.val().deceased_gender + "</td><td>"+
                      item.val().deceased_birth_date +"</td><td>" + item.val().deceased_death_date +"</td><td>"+item.val().Biography+"</td><tr>");}
                    })})

            $(".switchery-plugin").each(function(){
                    new Switchery(this);
                })
            });
            

            //geçici ölü cağırma//
            $("#wsx").click (function() { 
                console.log("oluler basıldı");

                var todoRef = firebase.database().ref().child("Deceaceds");
            todoRef.on("value", function(snapshot){

                $("#dsa tbody").html('');
                $("#dsa tbody").append( "<tr><th>Name</th><th>Surname</th><th>job</th><th>location</th><th>gender</th><th>Birth</th><th>Death</th><th>Biography</th></tr>")
                
                snapshot.forEach(function(item){
                   
                    $("#dsa tbody").append( "<tr><td>" + item.val().deceased_name +" </td><td> " + item.val().deceased_surname + "</td><td>" +
                     item.val().deceased_job + "</td><td>"+item.val().deceased_location+ "</td><td> " + item.val().deceased_gender + "</td><td>"+
                      item.val().deceased_birth_date +"</td><td>" + item.val().deceased_death_date +"</td><td>"+item.val().Biography+"</td><tr>");}
                    )})

            $(".switchery-plugin").each(function(){
                    new Switchery(this);
                })
            });



            //kendi ölülerini gör
            $("#showmydeceased").click (function() { 
                window.location.href = "showmydeceased.html";
            
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