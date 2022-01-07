class RemoveTypeColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :type
    add_column :listings, :property_type, :string
  end
end
