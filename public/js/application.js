$(document).ready(function() {
  console.log("hi fans")
  $("#todo_form").on('click', function(e) {
    console.log("im heeeeeere")
    e.preventDefault()
    var todo = $(this).serialize()
    console.log(todo)
  })

});
