
get '/' do
  @todos = Todo.all
  erb :index
end

post '/todos' do
  puts "PARAMS: #{params}"
  @todo = Todo.create!(params[:todo])

  # @todo = Todo.create(params[:todo])
  if request.xhr?
    content_type :json
    {:todo_task => @todo.task, :todo_id => @todo.id}.to_json
  else
    redirect '/'
  end
end

post "/todos/:id/complete" do
  @todo = Todo.find(params[:id])
  @todo.complete!
  if request.xhr?
    content_type :json
    {:todo_id => @todo.id, :todo_task => @todo.task}.to_json
  else
    redirect '/'
  end
end



