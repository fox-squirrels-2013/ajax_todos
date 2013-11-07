helpers do
  def available_todos
    Todo.available
  end

  def completed_todos
    Todo.completed
  end
end