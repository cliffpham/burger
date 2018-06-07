$(function(){
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#burg").val().trim(),
        };
    
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("added new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


      ///////update/////////

      $(function() {
        $(".eat-burger").on("click", function(event) {
          event.preventDefault();
          var id = $(this).data("id");
      
          var newState = {
            devoured: true
          };
          console.log(id);
          console.log(newState);
          // Send the PUT request.
          $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
          }).then(
            function() {
              console.log("burger has been eaten");
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });

});

});


// $(function() {
//   $(".eat-burger").on("click", function(event) {
//     event.preventDefault();
//     var id = ($('.id').val().trim());
//     if (id == "") {
//       event.preventDefault();
//       alert("no burger was selected");
//     } else {
//       var newState = {
//         devoured: true
//       };
//       console.log(id);
//       console.log(newState);
//       // Send the PUT request
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: newState
//       }).then(
//         function() {
//           console.log("burger has been eaten");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     }  
//   });

// });