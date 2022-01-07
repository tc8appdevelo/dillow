class AddCoolingToListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :cooling, :string
  end
end
