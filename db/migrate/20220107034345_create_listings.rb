class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.integer :user_id, null: false
      t.integer :price, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.integer :zip_code, null: false
      t.string :address, null: false
      t.string :type, null: false
      t.integer :bedrooms, null: false
      t.integer :bathrooms, null: false
      t.integer :year_built, null: false
      t.string :description, null: false
      t.string :lot_size
      t.string :parking
      t.string :heating
      t.integer :time_on_dillow
      t.integer :views
      t.integer :saves
      t.integer :est_payment

      t.timestamps
    end
  end
end
