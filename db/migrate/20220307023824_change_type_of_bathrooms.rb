class ChangeTypeOfBathrooms < ActiveRecord::Migration[6.1]
  def change
    change_column :listings, :bathrooms, :float
  end
end
