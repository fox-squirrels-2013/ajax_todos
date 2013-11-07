class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :task
      t.string :status, default: "available"
      t.timestamps
    end
  end
end
