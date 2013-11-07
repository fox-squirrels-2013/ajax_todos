$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  // console.log("ready!") ;
  $('#form_id').on('submit', function(e) {
    e.preventDefault();
    var form_data = $(this).serialize();
    console.log(form_data);
    $.ajax({
      url: '/todos',
      type: 'post',
      data: form_data
      // when the ajax function returns successfully
      // then run the function with the data returned
      // by the server
    }).done(function(data){
      $('#shittyidea').append(data)
    })
  })
});
