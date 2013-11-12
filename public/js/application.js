$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    // console.log("Inside bindEvents function!")
    // $('#add_todo').submit(function(e){
    //   buildTodo($('#text_field').val());
    //   console.log("After buildTodo inside bindEvents!")
    // })
$('.available-todos').on('click', '.complete', function(e){
  e.preventDefault()
  console.log($(this).parent())
  var completedTodo = $(this).parent()
  $.ajax({
    url: $(this).attr('action'),
    type: "post"
  }).done(function(response){
    completedTodo.remove()
    console.log(response)
    $('.completed-todos').append('<li id="todo-' + response.todo_id + '">' + response.todo_task + '</li>')
  })
})
}

  //Create functions to add, remove and complete todos
  $('#add_todo').submit(function(e){
    e.preventDefault();
    console.log("After preventDefault!")
    $.ajax({
      url: "/todos", //this.action,
      type: "post", //this.method,
      data: $(this).serialize()
    }).done(function(response){
      console.log(response)
      $('.available-todos').append('<div id="todo-' + response.todo_id + '"><h2>' + response.todo_task + '</h2><form class="complete" method="POST" action="/todos/' + response.todo_id + '/complete"><button>Complete!</button></form></div>');
      console.log("Inside done function.");
      $("#new_todo_task").val('')
    })
    // return false
  })

  function complete(e){
    e.preventDefault()
    console.log("Inside complete function!")
  }


  function buildTodo(todoName) {
    console.log(todoName)
    // Creates a jQueryDOMelement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  bindEvents();
});
