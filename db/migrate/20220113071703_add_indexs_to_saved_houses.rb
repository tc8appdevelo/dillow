class AddIndexsToSavedHouses < ActiveRecord::Migration[6.1]
  def change
    add_index :saved_houses, :user_id
    add_index :saved_houses, :listing_id
    add_index :saved_houses, [:listing_id, :user_id], unique: true
  end
end
