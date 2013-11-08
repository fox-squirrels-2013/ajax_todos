
get '/' do
  @todos = Todo.all
  erb :index
end

post '/todos' do
  @todo = Todo.create(params[:todo])
  if request.xhr?
    # This is how to tell if a request came in over AJAX or not
    todo_info = {id: @todo.id, task: @todo.task}
    content_type :json
    todo_info.to_json
  else
    redirect '/'
  end
end

post "/todos/:id/complete" do
  @todo = Todo.find(params[:id])
  @todo.complete!
  if request.xhr?
    todo_info = {id: @todo.id, task: @todo.task}
    content_type :json
    todo_info.to_json
  else
    redirect '/'
  end
end


