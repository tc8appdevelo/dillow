class SavedHouse < ApplicationRecord
  # validates :user_id, presence: true
  # validates :listing_id, presence: true
  validates :user_id, uniqueness: { scope: :listing_id }
  
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing

  
end