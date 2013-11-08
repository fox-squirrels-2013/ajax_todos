## AJAX Todo
1. [Learning Objectives](#learning-objectives)
1. [Summary](#summary)
1. [Releases](#releases)
1. [Helpful Resources](#helpful-resources)

#### ** DO NOT MERGE SOLUTION PULL REQUESTS INTO THIS REPOSITORY **

## Learning Objectives
1. 1. Making an AJAX request from form input
1. Rendering HTML partials in response to an AJAX request
1. Altering the DOM with the response from an AJAX request
1. Rendering JSON in response to an AJAX request
1. Altering the DOM based upon JSON data.
1. Using client side templates to alter the DOM

## Summary
In this challenge you will take a working todo app and add modify the requests to work with AJAX

## Releases

### Release 1
* Modify the existing requests to submit a new todo so it uses AJAX to submit the request and jQuery to render the response on the page if the request is successful.  Use a string for the response.

### Release 2
* Implement complete with AJAX.  
* Change the DOM complete form to a simple link or button.

### Release 3
* Add delete functionality so a user can delete any completed or non completed todo.

### Release 4
* Redo Release 1 with a partial in the response.
* Redo Release 1 with JSON in the response.

### Release 5
* Wow there cowboys... have you REALLY been doing this all without tests?  This would be a great time to add some it.  Cabybara and rspec first, then try some Jasmine.  

Submit a Pull Request after each Release.

**DO NOT MERGE SOLUTION PULL REQUESTS INTO THIS REPOSITORY**

## Helpful Resources

1. [jQuery.post](http://api.jquery.com/jQuery.post/)
1. [jQuery.ajax](http://api.jquery.com/jQuery.ajax/)
1. [jqXHR](http://api.jquery.com/jQuery.ajax/#jqXHR)
1. [jqXHR.done](http://api.jquery.com/deferred.done/)
1. [jqXHR.fail](http://api.jquery.com/deferred.fail/)
1. [`$('form').serialize`](http://api.jquery.com/serialize/)
1. [xhr?](http://apidock.com/rails/ActionDispatch/Request/xhr%3F)
1. [How not to include layout in sinatra app](http://stackoverflow.com/questions/17100942/how-to-not-include-layout-haml-in-sinatra-app)
1. [Sinatra Local vs Instance variables](http://stackoverflow.com/questions/17019027/sinatra-locals-vs-instance-variables)
1. [Rendering json in Sinatra](http://apidock.com/rails/ActionDispatch/Request/xhr%3F)
1. [UnderscoreJS Template](http://underscorejs.org/#template)
1. [MustacheJS](https://github.com/janl/mustache.js#mustachejs---logic-less-mustache-templates-with-javascript)
1. [Testing Javascript Apps with Capybara](https://github.com/jnicklas/capybara#selecting-the-driver)
1. [Capybara and Selenium](https://github.com/jnicklas/capybara#selenium)
