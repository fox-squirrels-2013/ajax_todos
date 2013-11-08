
get '/' do
  @todos = Todo.all
  erb :index
end

post '/todos' do
  @todo = Todo.create(params[:todo])
  if request.xhr?
    erb :_available
  else
    redirect '/'
  end
end

post "/todos/:id/complete" do
  Todo.find(params[:id]).complete!
  if request.xhr?
    erb :_completed
  else
    redirect '/'
  end
end


