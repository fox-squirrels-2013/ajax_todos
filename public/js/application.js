$(document).ready(function() {
  // using todo_form here binds the on click to the whole add a todo form rather than just the Add Todo click button, but changing it to the id new_todo_task of the button breaks the console.log(todo)

  $("#todo_form").on('submit', function(e) {
    e.preventDefault()
    var todo = $(this).serialize()
    $.ajax({
      type: 'post',
      url: '/todos',
      data: todo
    }).done(function(server_data){
      $("#todo_listing").append(server_data)
    })
  })

});
