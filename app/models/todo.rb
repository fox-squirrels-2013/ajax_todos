class Todo < ActiveRecord::Base

  scope :available, -> { where(status: "available") }
  scope :completed, -> { where(status: "completed") }
  def complete!
    update_attributes(status: "completed")
  end

  def complete?
    status == "completed"
  end

end