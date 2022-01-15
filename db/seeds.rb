# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)





user1 = User.create(
        email: "demo_user",
        password: "password"
)



listing1 = Listing.new(
        user_id: user1.id, price: 1324233, state: "TX", city: "Dallas", 
        zip_code: 78728, address: "1111 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1994, description: "Test listing description.",
        lot_size: 3245, saves: 0, views: 0,
)
listing1.photo.attach(io: File.open("app/assets/images/house1.png"), filename: "house1.png")
listing1.save!

listing2 = Listing.new(
        user_id: user1.id, price: 2222222, state: "TX", city: "Austin", 
        zip_code: 78728, address: "2222 Road Drive", 
        property_type: "Condo", bedrooms: 4, bathrooms: 3, 
        year_built: 2002, description: "Test listing description.",
        lot_size: 1253, saves: 0, views: 0
)
listing2.photo.attach(io: File.open("app/assets/images/house2.png"), filename: "house2.png")
listing2.save!

listing3 = Listing.new(
        user_id: user1.id, price: 343255, state: "GA", city: "Atlanta", 
        zip_code: 78728, address: "3333 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1999, description: "Test listing description.",
        lot_size: 4223, saves: 0, views: 0
)
listing3.photo.attach(io: File.open("app/assets/images/house3.png"), filename: "house3.png")
listing3.save!

listing4 = Listing.new(
        user_id: user1.id, price: 443246, state: "CA", city: "San Diego", 
        zip_code: 78728, address: "4444 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1998, description: "Test listing description.",
        lot_size: 4323, saves: 0, views: 0
)
listing4.photo.attach(io: File.open("app/assets/images/house4.png"), filename: "house4.png")
listing4.save!

listing5 = Listing.new(
        user_id: user1.id, price: 5443666, state: "TX", city: "San Marcos", 
        zip_code: 78728, address: "5555 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1294, description: "Test listing description.",
        lot_size: 1324, saves: 0, views: 0
)
listing5.photo.attach(io: File.open("app/assets/images/house5.png"), filename: "house5.png")
listing5.save!

listing6 = Listing.new(
        user_id: user1.id, price: 6666666, state: "CA", city: "Bakersfield", 
        zip_code: 78728, address: "6666 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1954, description: "Test listing description.",
        lot_size: 6753, saves: 0, views: 0
)
listing6.photo.attach(io: File.open("app/assets/images/house6.png"), filename: "house6.png")
listing6.save!

listing7 = Listing.new(
        user_id: user1.id, price: 7777777, state: "SC", city: "Charleston", 
        zip_code: 78728, address: "7777 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1917, description: "Test listing description.",
        lot_size: 221, saves: 0, views: 0
)
listing7.photo.attach(io: File.open("app/assets/images/house7.png"), filename: "house7.png")
listing7.save!

