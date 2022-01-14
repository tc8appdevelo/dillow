class Listing < ApplicationRecord
    validates :user_id, presence: true
    # validates :price, presence: true
    # validates :state, presence: true
    # validates :city, presence: true
    # validates :zip_code, presence: true
    # validates :address, presence: true
    # validates :property_type, presence: true
    # validates :bedrooms, presence: true
    # validates :bathrooms, presence: true
    # validates :year_built, presence: true
    # validates :description, presence: true

    validate :ensure_photo

    has_one_attached :photo

    # def ensure_photo
    #     unless self.photo.attached?
    #         errors[:photo] << "must be attached"
    #     end
    # end
    
end
