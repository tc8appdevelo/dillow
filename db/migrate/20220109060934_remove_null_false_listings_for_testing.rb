class RemoveNullFalseListingsForTesting < ActiveRecord::Migration[6.1]
  def change
    change_column_null :listings, :price, true
    change_column_null :listings, :state, true
    change_column_null :listings, :city, true
    change_column_null :listings, :zip_code, true
    change_column_null :listings, :address, true
    change_column_null :listings, :bedrooms, true
    change_column_null :listings, :bathrooms, true
    change_column_null :listings, :year_built, true
    change_column_null :listings, :description, true
  end
end
