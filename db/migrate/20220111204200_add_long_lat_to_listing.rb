class AddLongLatToListing < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :long, :float
    add_column :listings, :lat, :float
  end
end
