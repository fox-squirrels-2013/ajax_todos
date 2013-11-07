
get '/' do
  @todos = Todo.all
  erb :index
end

post '/todos' do
  @todo = Todo.create(params[:todo])
  if request.xhr?
  # This is how to tell if a request came in over AJAX or not
    puts params
    "hi"
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


