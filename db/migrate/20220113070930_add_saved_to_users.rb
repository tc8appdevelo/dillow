class AddSavedToUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_houses do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.timestamps
    end
  end
end
