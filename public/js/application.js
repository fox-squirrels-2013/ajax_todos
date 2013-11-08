$(document).ready(function() {
  // using todo_form here binds the on click to the whole add a todo form rather than just the Add Todo click button, but changing it to the id new_todo_task of the button breaks the console.log(todo)

  $("#todo_form").on('click', function(e) {
    e.preventDefault()
    var todo = $(this).serialize()
    console.log("hello" + todo)
    $.ajax({
      type: 'post',
      url: '/todos',
      data: todo
    }).done(function(server_data){
      console.log(server_data)
    })
  })

});
