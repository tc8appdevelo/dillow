# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Listing.destroy_all
User.destroy_all

user1 = User.create(
        email: "demo_user",
        password: "password"
)
user2 = User.create(
        email: "demo_user@gmail.com",
        password: "password"
)
user3 = User.create(
        email: "demo_user@facebook.com",
        password: "password"
)
user4 = User.create(
        email: "demo_user@apple.com",
        password: "password"
)



listing1 = Listing.new(
        user_id: user1.id, price: 1324233, state: "TX", city: "Dallas", 
        zip_code: "75206", address: "5530 Martel Ave", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1994, description: "Test listing description.",
        lot_size: 3245, saves: 0, views: 0, 
        heating: "Central Heat-Gas", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
)
file1 = URI.open('https://dillow-seeds.s3.amazonaws.com/house1.png')
small1 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow2.png')
small2 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow3.png')
small3 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardback.png')
small4 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardhalf.png')
listing1.large_photo.attach(io: file1, filename: 'house1.png')
listing1.photos.attach(io: small1, filename: 'small2_1.png')
listing1.photos.attach(io: small2, filename: 'small2_2.png')
listing1.photos.attach(io: small3, filename: 'small2_3.png')
listing1.photos.attach(io: small4, filename: 'small2_4.png')
listing1.save!

listing2 = Listing.new(
        user_id: user1.id, price: 2222222, state: "TX", city: "Dallas", 
        zip_code: "75216", address: "1415 Glen Ave", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 2002, description: "Test listing description.",
        lot_size: 1253, saves: 0, views: 0,
        heating: "Central Heat-Gas", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
)

house2 = URI.open('https://dillow-seeds.s3.amazonaws.com/dock.png')
small2_1 = URI.open('https://dillow-seeds.s3.amazonaws.com/lakeback1.png')
small2_2 = URI.open('https://dillow-seeds.s3.amazonaws.com/lakehouseback2.png')
small2_3 = URI.open('https://dillow-seeds.s3.amazonaws.com/lakekitchen.png')
small2_4 = URI.open('https://dillow-seeds.s3.amazonaws.com/lakesmall3.png')
listing2.large_photo.attach(io: house2, filename: 'house2.png')
listing2.photos.attach(io: small2_1, filename: 'small2_1.png')
listing2.photos.attach(io: small2_2, filename: 'small2_2.png')
listing2.photos.attach(io: small2_3, filename: 'small2_3.png')
listing2.photos.attach(io: small2_4, filename: 'small2_4.png')
listing2.save!

listing3 = Listing.new(
        user_id: user1.id, price: 343255, state: "TX", city: "Dallas", 
        zip_code: "75226", address: "215 N Walton St", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1999, description: "Test listing description.",
        lot_size: 4223, saves: 0, views: 0,
        heating: "Needs replacing", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
)
house3 = URI.open('https://dillow-seeds.s3.amazonaws.com/house3.png')
small21 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
small22 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
small23 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
small24 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
listing3.large_photo.attach(io: house3, filename: 'house3.png')
listing3.photos.attach(io: small21, filename: 'small2_1.png')
listing3.photos.attach(io: small22, filename: 'small2_2.png')
listing3.photos.attach(io: small23, filename: 'small2_3.png')
listing3.photos.attach(io: small24, filename: 'small2_4.png')
listing3.save!

listing4 = Listing.new(
        user_id: user1.id, price: 443246, state: "TX", city: "Dallas", 
        zip_code: "75216", address: "915 E Woodin Blvd", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1998, description: "Test listing description.",
        lot_size: 4323, saves: 0, views: 0,
        heating: "Central Heat-Gas", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
)
house4 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow1.png')
small14 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow2.png')
small24 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow3.png')
small34 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardback.png')
small44 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardhalf.png')
listing4.large_photo.attach(io: house4, filename: 'house4.png')
listing4.photos.attach(io: small14, filename: 'small2_1.png')
listing4.photos.attach(io: small24, filename: 'small2_2.png')
listing4.photos.attach(io: small34, filename: 'small2_3.png')
listing4.photos.attach(io: small44, filename: 'small2_4.png')
listing4.save!

listing5 = Listing.new(
        user_id: user4.id, price: 5443666, state: "TX", city: "Dallas", 
        zip_code: "75204", address: "1717 Annex Ave", 
        property_type: "Condo", bedrooms: 4, bathrooms: 3, 
        year_built: 1294, description: "Test listing description.",
        lot_size: 1324, saves: 0, views: 0,
        heating: "Fireplace fire-wood", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
)
file5 = URI.open('https://dillow-seeds.s3.amazonaws.com/house5.png')
small15 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow2.png')
small25 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow3.png')
small35 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardback.png')
small45 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardhalf.png')
listing5.large_photo.attach(io: file5, filename: 'house5.png')
listing5.photos.attach(io: small15, filename: 'small2_1.png')
listing5.photos.attach(io: small25, filename: 'small2_2.png')
listing5.photos.attach(io: small35, filename: 'small2_3.png')
listing5.photos.attach(io: small45, filename: 'small2_4.png')
listing5.save!

listing6 = Listing.new(
        user_id: user3.id, price: 6666666, state: "TX", city: "Dallas", 
        zip_code: "75203", address: "1014 N Beckley Ave", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1954, description: "Test listing description.",
        lot_size: 6753, saves: 0, views: 0,
        heating: "Central Heat-Gas", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
)
small16 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow2.png')
small26 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow3.png')
small36 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardback.png')
small46 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardhalf.png')
file6 = URI.open('https://dillow-seeds.s3.amazonaws.com/house6.png')
listing6.large_photo.attach(io: file6, filename: 'house6.png')
listing6.photos.attach(io: small16, filename: 'small2_1.png')
listing6.photos.attach(io: small26, filename: 'small2_2.png')
listing6.photos.attach(io: small36, filename: 'small2_3.png')
listing6.photos.attach(io: small46, filename: 'small2_4.png')
listing6.save!

listing7 = Listing.new(
        user_id: user2.id, price: 7777777, state: "TX", city: "Dallas", 
        zip_code: "75235", address: "2832 Hedgerow Dr", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1917, description: "Test listing description.",
        lot_size: 221, saves: 0, views: 0,
        heating: "Geothermal", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
)
small17 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow2.png')
small27 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow3.png')
small37 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardback.png')
small47 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardhalf.png')
file7 = URI.open('https://dillow-seeds.s3.amazonaws.com/house7.png')
listing7.large_photo.attach(io: file7, filename: 'house7.png')
listing7.photos.attach(io: small17, filename: 'small2_1.png')
listing7.photos.attach(io: small27, filename: 'small2_2.png')
listing7.photos.attach(io: small37, filename: 'small2_3.png')
listing7.photos.attach(io: small47, filename: 'small2_4.png')
listing7.save!

