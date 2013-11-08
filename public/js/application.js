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
    var id = this.id
    var button_selected = 'button#' + id
    $.ajax({
      url: '/todos/' + id + '/complete',
      type: 'post',
      data: {submit: true}
    }).done(function(server_data) {
      $(button_selected).closest('div').remove()
      $('.completed-todos').html(server_data)
    })
  })
});
