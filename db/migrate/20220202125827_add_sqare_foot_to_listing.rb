class AddSqareFootToListing < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :sqft, :integer
  end
end
