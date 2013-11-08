
get '/' do
  @todos = Todo.all
  erb :index
end

post '/todos' do
  @todo = Todo.create(params[:todo])
  if request.xhr?
  # # This is how to tell if a request came in over AJAX or not
  # "<li id='todo-<%=@todo.id%>'><%=@todo.task%></li>"
  # erb :_todo, layout: false - need to create this


  # Return JSON
  @todo.task
  else
    redirect '/'
  end
end

post "/todos/:id/complete" do
  Todo.find(params[:id]).complete!
  if request.xhr?

  else
    redirect '/'
  end
end


