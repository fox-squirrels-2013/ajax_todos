$(document).ready(function() {
  var newElement = function(id, task) {
    return '<div class="full-todo" id="todo-' + id + '">' + task + ' <form class="active-todo" method="POST" action="/todos/' + id + '/complete"><button>Complete!</button></form></div>'
  }

  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
    $('#whatever').on('submit', function(e) {
      e.preventDefault()
      var newTodo = $('#new_todo_task').val()
      $.ajax({
        type: "POST",
        url: "/todos",
        data: { todo: {task: newTodo}},
        success: function(data) {
          $('.available-todos').append(newElement(data.id, data.task))
          $('#new_todo_task').val('')
        }
      })
    })
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  // the element that has on called upon it has to exist at page load. 
  $('body').on('submit', '.active-todo', function(e) {
    e.preventDefault()
    var completedForm = $(this).parent()
    var route = $(this).attr('action')
    $.ajax({
      type: "POST",
      url: route,
      success: function(data) {
        $(completedForm).remove()
        $('.completed-todos').append('<li id="todo-' + data.id + '">' + data.task + '</li>')
      }
    })
  })
});

