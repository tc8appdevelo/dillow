class ChangeZipCodeToString < ActiveRecord::Migration[6.1]
  def change
    change_column :listings, :zip_code, :string
  end
end
