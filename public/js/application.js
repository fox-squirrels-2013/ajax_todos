$(document).ready(function() {
 $('form').on('submit', function(e) {
  e.preventDefault();
  var form_data= $(this).serialize();
  $.ajax({                    //5-9 is sending data
    url: this.action,
    type: this.method,
    data: $(this).serialize()
  }).done(function(server_data){      // need this to process data
    console.log("hi", server_data)
    $( ".completed-todos" ).after(server_data)

  });
 });
});

//index is server app.js is client (sinatra is server)

// $('form').on('submit', function(e){
// //   e.preventDefault();
//    $( ".completed-todos" ).after("<li id="todo-<%=todo.id%>"><%=todo.task%></li>" );
//   $.ajax({
//     url: "/todos/:id/complete",
//     type: "post"
   
//   })
// })


 // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

