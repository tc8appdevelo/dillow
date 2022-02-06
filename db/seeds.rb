# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'



user1 = User.create(
        email: "demo_user",
        password: "password"
)



# listing1 = Listing.new(
#         user_id: user1.id, price: 1324233, state: "TX", city: "Dallas", 
#         zip_code: "75206", address: "5530 Martel Ave", 
#         property_type: "House", bedrooms: 4, bathrooms: 3, 
#         year_built: 1994, description: "Test listing description.",
#         lot_size: 3245, saves: 0, views: 0, 
#         heating: "Central Heat-Gas", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# file1 = open('https://dillow-seeds.s3.amazonaws.com/house1.png')
# listing1.photos.attach(io: file1, filename: 'house1.png')
# listing1.photos.attach(io: file2, filename: 'house2.png')
# listing1.save!

listing2 = Listing.new(
        user_id: user1.id, price: 2222222, state: "TX", city: "Dallas", 
        zip_code: "75216", address: "1415 Glen Ave", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 2002, description: "Test listing description.",
        lot_size: 1253, saves: 0, views: 0,
        heating: "Central Heat-Gas", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
)

house2 = open('https://dillow-seeds.s3.amazonaws.com/house2.png')
small2_1 = open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
small2_2 = open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
small2_3 = open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
small2_4 = open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
listing2.large_photo.attach(io: house2, filename: 'house2.png')
listing2.photos.attach(io: small2_1, filename: 'small2_1.png')
listing2.photos.attach(io: small2_2, filename: 'small2_2.png')
listing2.photos.attach(io: small2_3, filename: 'small2_3.png')
listing2.photos.attach(io: small2_4, filename: 'small2_4.png')
listing2.save!

# listing3 = Listing.new(
#         user_id: user1.id, price: 343255, state: "TX", city: "Dallas", 
#         zip_code: "75226", address: "215 N Walton St", 
#         property_type: "House", bedrooms: 4, bathrooms: 3, 
#         year_built: 1999, description: "Test listing description.",
#         lot_size: 4223, saves: 0, views: 0,
#         heating: "Needs replacing", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# #listing3.photo.attach(io: File.open("app/assets/images/house3.png"), filename: "house3.png")
# file3 = open('https://dillow-seeds.s3.amazonaws.com/house3.png')
# listing3.photo.attach(io: file3, filename: 'house3.png')
# listing3.save!

# listing4 = Listing.new(
#         user_id: user1.id, price: 443246, state: "TX", city: "Dallas", 
#         zip_code: "75216", address: "915 E Woodin Blvd", 
#         property_type: "House", bedrooms: 4, bathrooms: 3, 
#         year_built: 1998, description: "Test listing description.",
#         lot_size: 4323, saves: 0, views: 0,
#         heating: "Central Heat-Gas", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# file4 = open('https://dillow-seeds.s3.amazonaws.com/house4.png')
# listing4.photo.attach(io: file4, filename: 'house4.png')
# listing4.save!

# listing5 = Listing.new(
#         user_id: user1.id, price: 5443666, state: "TX", city: "Dallas", 
#         zip_code: "75204", address: "1717 Annex Ave", 
#         property_type: "Condo", bedrooms: 4, bathrooms: 3, 
#         year_built: 1294, description: "Test listing description.",
#         lot_size: 1324, saves: 0, views: 0,
#         heating: "Fireplace fire-wood", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# file5 = open('https://dillow-seeds.s3.amazonaws.com/house5.png')
# listing5.photo.attach(io: file5, filename: 'house5.png')
# listing5.save!

# listing6 = Listing.new(
#         user_id: user1.id, price: 6666666, state: "TX", city: "Dallas", 
#         zip_code: "75203", address: "1014 N Beckley Ave", 
#         property_type: "House", bedrooms: 4, bathrooms: 3, 
#         year_built: 1954, description: "Test listing description.",
#         lot_size: 6753, saves: 0, views: 0,
#         heating: "Central Heat-Gas", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# file6 = open('https://dillow-seeds.s3.amazonaws.com/house6.png')
# listing6.photo.attach(io: file6, filename: 'house6.png')
# listing6.save!

# listing7 = Listing.new(
#         user_id: user1.id, price: 7777777, state: "TX", city: "Dallas", 
#         zip_code: "75235", address: "2832 Hedgerow Dr", 
#         property_type: "House", bedrooms: 4, bathrooms: 3, 
#         year_built: 1917, description: "Test listing description.",
#         lot_size: 221, saves: 0, views: 0,
#         heating: "Geothermal", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# file7 = open('https://dillow-seeds.s3.amazonaws.com/house7.png')
# listing7.photo.attach(io: file7, filename: 'house7.png')
# listing7.save!

