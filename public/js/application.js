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
      var todo_form_item = '<div id="todo-' + server_data.id + '">' + server_data.task + '<form method="POST" action="/todos/' + server_data.id + '/complete"><button>Complete!</button></form></div>'
      $('.available-todos').append(todo_form_item)
    })
  })

  $(".available-todos").on('submit', '.active-todo', function(e) {
     e.preventDefault()
     var new_route = $(this).attr('action')
     var clicked_item = $(this).parent()
     $.ajax({
        type: 'post',
        url: new_route
     }).done(function(server_data){
        console.log(server_data.task)
        completed_item = '<li id="todo-' + server_data.id + '">' + server_data.task + '</li>'
        $('.completed-todos').append(completed_item)
        clicked_item.remove()
     })

  })

});
