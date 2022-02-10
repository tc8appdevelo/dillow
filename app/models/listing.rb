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

    # validate :ensure_photo

    # validate :photo_type

    has_one_attached :large_photo
    has_many_attached :photos

    has_many :saved_houses,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :SavedHouse

    has_many :users,
    through: :saved_houses

    def thumbnail input
        return self.photos[input].variant(resize: '386.5x286.5!').processed
    end


    def self.is_price_range(price_range)
        self.where("price < :max", { max: price_range[:max] })
            .where("price > :min", { min: price_range[:min] })
    end

    
    # def ensure_photos
    #     unless self.photos[0].attached?
    #         errors[:photos] << "must be attached"
    #     end
    # end
    
    # private
    # def photo_type
    #     if photos.attached? == false
    #         errors.add(:images, "are missing!")
    #     end
    #     images.each do |image|
    #         if !image.content_type.in?(%('image/jpeg image/png'))
    #             errors.add(:photo, "must be jpeg or png format")
    #     end
    # end

end
