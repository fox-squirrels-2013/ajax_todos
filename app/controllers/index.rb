
get '/' do
  @todos = Todo.all
  erb :index
end

post '/todos' do
  @todo = Todo.create(params[:todo])
  if request.xhr?
  # This is how to tell if a request came in over AJAX or not
  content_type :json
    {id: @todo.id, task: @todo.task}.to_json
  else
    redirect '/'
  end
end

post "/todos/:id/complete" do
  @todo = Todo.find(params[:id])
  @todo.complete!
  if request.xhr?
    content_type :json
    {id: @todo.id, task: @todo.task}.to_json
  else
    redirect '/'
  end
end


