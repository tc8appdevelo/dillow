class Listing < ApplicationRecord
    validates :user_id, presence: true
    validates :price, presence: true
    validates :state, presence: true
    validates :city, presence: true
    validates :zip_code, presence: true
    validates :address, presence: true
    validates :property_type, presence: true
    validates :bedrooms, presence: true
    validates :bathrooms, presence: true
    validates :year_built, presence: true
    validates :description, presence: true

    
end
