$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault()
    var form_data = $(this).serialize()
    console.log(form_data)
    $.ajax({
      url: '/todos',
      type: 'post',
      data: form_data
    }).done(function(server_data) {
      $('.available-todos').html(server_data)
    }).fail(function() {
      console.log('fail!')
    })
  })

  $('.submit_completed').on('click', function(e) {
    e.preventDefault()
    // var form_data = $(this.serialize)
    // console.log(form_data)
    console.log($('.available-todos').find('button').attr('id'))
    $.ajax({
      url: '/todos/???/complete',
      type: 'post',
      data: {submit: true}
    }).done(function(server_data) {
      console.log(server_data)
    })
  })
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
