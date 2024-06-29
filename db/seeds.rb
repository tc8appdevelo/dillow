
# require 'open-uri'

# Listing.destroy_all
# User.destroy_all

# user1 = User.create(
#         email: "demo_user",
#         password: "password"
# )
# user2 = User.create(
#         email: "demo_user@gmail.com",
#         password: "password"
# )
# user3 = User.create(
#         email: "demo_user@facebook.com",
#         password: "password"
# )
# user4 = User.create(
#         email: "demo_user@apple.com",
#         password: "password"
# )



# listing1 = Listing.new(
#         user_id: user1.id, price: 1324233, state: "TX", city: "Dallas", 
#         zip_code: "75206", address: "5530 Martel Ave", 
#         property_type: "House", bedrooms: 4, bathrooms: 3, 
#         year_built: 1994, description: "Test listing description.",
#         lot_size: 3245, saves: 0, views: 0, 
#         heating: "Central Heat-Gas", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# file1 = URI.open('https://dillow-seeds.s3.amazonaws.com/house1.png')
# small1 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow2.png')
# small2 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow3.png')
# small3 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardback.png')
# small4 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardhalf.png')
# listing1.large_photo.attach(io: file1, filename: 'house1.png')
# listing1.photos.attach(io: small1, filename: 'small2_1.png')
# listing1.photos.attach(io: small2, filename: 'small2_2.png')
# listing1.photos.attach(io: small3, filename: 'small2_3.png')
# listing1.photos.attach(io: small4, filename: 'small2_4.png')
# listing1.save!

# listing2 = Listing.new(
#         user_id: user1.id, price: 2222222, state: "TX", city: "Dallas", 
#         zip_code: "75216", address: "1415 Glen Ave", 
#         property_type: "Land", bedrooms: 4, bathrooms: 3, 
#         year_built: 2002, description: "Test listing description.",
#         lot_size: 1253, saves: 0, views: 0,
#         heating: "Central Heat-Gas", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )

# house2 = URI.open('https://dillow-seeds.s3.amazonaws.com/dock.png')
# small2_1 = URI.open('https://dillow-seeds.s3.amazonaws.com/lakeback1.png')
# small2_2 = URI.open('https://dillow-seeds.s3.amazonaws.com/lakehouseback2.png')
# small2_3 = URI.open('https://dillow-seeds.s3.amazonaws.com/lakekitchen.png')
# small2_4 = URI.open('https://dillow-seeds.s3.amazonaws.com/lakesmall3.png')
# listing2.large_photo.attach(io: house2, filename: 'house2.png')
# listing2.photos.attach(io: small2_1, filename: 'small2_1.png')
# listing2.photos.attach(io: small2_2, filename: 'small2_2.png')
# listing2.photos.attach(io: small2_3, filename: 'small2_3.png')
# listing2.photos.attach(io: small2_4, filename: 'small2_4.png')
# listing2.save!

# listing3 = Listing.new(
#         user_id: user1.id, price: 343255, state: "TX", city: "Dallas", 
#         zip_code: "75226", address: "215 N Walton St", 
#         property_type: "House", bedrooms: 3, bathrooms: 2, 
#         year_built: 1999, description: "Test listing description.",
#         lot_size: 4223, saves: 0, views: 0,
#         heating: "Needs replacing", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# house3 = URI.open('https://dillow-seeds.s3.amazonaws.com/house3.png')
# small21 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
# small22 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
# small23 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
# small24 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
# listing3.large_photo.attach(io: house3, filename: 'house3.png')
# listing3.photos.attach(io: small21, filename: 'small2_1.png')
# listing3.photos.attach(io: small22, filename: 'small2_2.png')
# listing3.photos.attach(io: small23, filename: 'small2_3.png')
# listing3.photos.attach(io: small24, filename: 'small2_4.png')
# listing3.save!

# listing4 = Listing.new(
#         user_id: user1.id, price: 443246, state: "TX", city: "Dallas", 
#         zip_code: "75216", address: "915 E Woodin Blvd", 
#         property_type: "House", bedrooms: 5, bathrooms: 3, 
#         year_built: 1998, description: "Test listing description.",
#         lot_size: 4323, saves: 0, views: 0,
#         heating: "Central Heat-Gas", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# house4 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow1.png')
# small14 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow2.png')
# small24 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow3.png')
# small34 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardback.png')
# small44 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardhalf.png')
# listing4.large_photo.attach(io: house4, filename: 'house4.png')
# listing4.photos.attach(io: small14, filename: 'small2_1.png')
# listing4.photos.attach(io: small24, filename: 'small2_2.png')
# listing4.photos.attach(io: small34, filename: 'small2_3.png')
# listing4.photos.attach(io: small44, filename: 'small2_4.png')
# listing4.save!

# listing5 = Listing.new(
#         user_id: user4.id, price: 5443666, state: "TX", city: "Dallas", 
#         zip_code: "75204", address: "1717 Annex Ave", 
#         property_type: "Condo", bedrooms: 4, bathrooms: 3, 
#         year_built: 1294, description: "Test listing description.",
#         lot_size: 1324, saves: 0, views: 0,
#         heating: "Fireplace fire-wood", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )

# file5 = URI.open('https://dillow-seeds.s3.amazonaws.com/house5.png')s3://dillow-app-dev/1agv6yi4x1xua48qa4qvk0xk3zu2
# small15 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow2.png')
# small25 = URI.open('https://dillow-seeds.s3.amazonaws.com/mow3.png')
# small35 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardback.png')
# small45 = URI.open('https://dillow-seeds.s3.amazonaws.com/yardhalf.png')
# listing5.large_photo.attach(io: file5, filename: 'house5.png')
# listing5.photos.attach(io: small15, filename: 'small2_1.png')
# listing5.photos.attach(io: small25, filename: 'small2_2.png')
# listing5.photos.attach(io: small35, filename: 'small2_3.png')
# listing5.photos.attach(io: small45, filename: 'small2_4.png')
# listing5.save!

# # listing6 = Listing.new(
# #         user_id: user3.id, price: 6666666, state: "TX", city: "Dallas", 
# #         zip_code: "75203", address: "1014 N Beckley Ave", 
# #         property_type: "House", bedrooms: 4, bathrooms: 3, 
# #         year_built: 1954, description: "Test listing description.",
# #         lot_size: 6753, saves: 0, views: 0,
# #         heating: "Central Heat-Gas", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# # )

# ny_listing6 = Listing.new(
#         user_id: user1.id, price: 399000, state: "NY", city: "Astoria",
#         zip_code: "11106", address: "21-80 33rd Rd",
#         property_type: "Condo", bedrooms: 2, bathrooms: 1,
#         year_built: 1903, description: "Condo in Astoria.",
#         lot_size: 100, saves: 0, views: 0,
#         heating: "Central Heat-Gas", cooling: "Central Air-Elec",
#         parking: "No parking", sqft: 100
# )

# small16 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
# small26 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
# small36 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
# small46 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
# building1 = URI.open('https://dillow-seeds.s3.amazonaws.com/building1.png')
# ny_listing6.large_photo.attach(io: building1, filename: 'building1.png')
# ny_listing6.photos.attach(io: small16, filename: 'small2_1.png')
# ny_listing6.photos.attach(io: small26, filename: 'small2_2.png')
# ny_listing6.photos.attach(io: small36, filename: 'small2_3.png')
# ny_listing6.photos.attach(io: small46, filename: 'small2_4.png')
# ny_listing6.save!

# # listing7 = Listing.new(
# #         user_id: user2.id, price: 7777777, state: "TX", city: "Dallas", 
# #         zip_code: "75235", address: "2832 Hedgerow Dr", 
# #         property_type: "House", bedrooms: 4, bathrooms: 3, 
# #         year_built: 1917, description: "Test listing description.",
# #         lot_size: 221, saves: 0, views: 0,
# #         heating: "Geothermal", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# # )

# ny_listing7 = Listing.new(
#         user_id: user1.id, price: 800000, state: "NY", city: "Rego Park",
#         zip_code: "11374", address: "99-32 66th Rd",
#         property_type: "Condo", bedrooms: 1, bathrooms: 1,
#         year_built: 1903, description: "Condo in Rego Park.",
#         lot_size: 100, saves: 0, views: 0,
#         heating: "Central Heat-Gas", cooling: "Central Air-Elec",
#         parking: "No parking", sqft: 100
# )

# small17 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
# small27 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
# small37 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
# small47 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
# building2 = URI.open('https://dillow-seeds.s3.amazonaws.com/building2.png')
# ny_listing7.large_photo.attach(io: building2, filename: 'building2.png')
# ny_listing7.photos.attach(io: small17, filename: 'small2_1.png')
# ny_listing7.photos.attach(io: small27, filename: 'small2_2.png')
# ny_listing7.photos.attach(io: small37, filename: 'small2_3.png')
# ny_listing7.photos.attach(io: small47, filename: 'small2_4.png')
# ny_listing7.save!

# ny_listing8 = Listing.new(
#         user_id: user1.id, price: 300000, state: "NY", city: "Bronx",
#         zip_code: "10468", address: "2685 Creston Avenue",
#         property_type: "Apartment", bedrooms: 1, bathrooms: 1,
#         year_built: 1903, description: "Condo in the Bronx.",
#         lot_size: 100, saves: 0, views: 0,
#         heating: "Central Heat-Gas", cooling: "Central Air-Elec",
#         parking: "No parking", sqft: 100
# )

# small18 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
# small28 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
# small38 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
# small48 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
# building3 = URI.open('https://dillow-seeds.s3.amazonaws.com/building3.png')
# ny_listing8.large_photo.attach(io: building3, filename: 'building3.png')
# ny_listing8.photos.attach(io: small18, filename: 'small2_1.png')
# ny_listing8.photos.attach(io: small28, filename: 'small2_2.png')
# ny_listing8.photos.attach(io: small38, filename: 'small2_3.png')
# ny_listing8.photos.attach(io: small48, filename: 'small2_4.png')
# ny_listing8.save!

# ny_listing9 = Listing.new(
#         user_id: user1.id, price: 99000, state: "NY", city: "Corona",
#         zip_code: "11368", address: "11250 Northern Blvd",
#         property_type: "Apartment", bedrooms: 1, bathrooms: 1,
#         year_built: 1903, description: "Condo in Corona, NY.",
#         lot_size: 100, saves: 0, views: 0,
#         heating: "Central Heat-Gas", cooling: "Central Air-Elec",
#         parking: "No parking", sqft: 100
# )

# small19 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
# small29 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
# small39 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
# small49 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
# building4 = URI.open('https://dillow-seeds.s3.amazonaws.com/building4.png')
# ny_listing8.large_photo.attach(io: building4, filename: 'building4.png')
# ny_listing8.photos.attach(io: small19, filename: 'small2_1.png')
# ny_listing8.photos.attach(io: small29, filename: 'small2_2.png')
# ny_listing8.photos.attach(io: small39, filename: 'small2_3.png')
# ny_listing8.photos.attach(io: small49, filename: 'small2_4.png')
# ny_listing8.save!

# l1 = Listing.new(
#         user_id: user2.id, price: 343255, state: "TX", city: "Dallas", 
#         zip_code: "75216", address: "4019 Biglow St", 
#         property_type: "House", bedrooms: 3, bathrooms: 2, 
#         year_built: 1999, description: "Test listing description.",
#         lot_size: 4223, saves: 0, views: 0,
#         heating: "Central, electric", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# h1 = URI.open('https://dillow-seeds.s3.amazonaws.com/houseNew1.png')
# s1 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
# s2 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
# s3 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
# s4 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
# l1.large_photo.attach(io: h1, filename: 'houseNew1.png')
# l1.photos.attach(io: s1, filename: 'small2_1.png')
# l1.photos.attach(io: s2, filename: 'small2_2.png')
# l1.photos.attach(io: s3, filename: 'small2_3.png')
# l1.photos.attach(io: s4, filename: 'small2_4.png')
# l1.save!

# l2 = Listing.new(
#         user_id: user2.id, price: 343255, state: "TX", city: "Dallas", 
#         zip_code: "75211", address: "2818 Remond Dr", 
#         property_type: "House", bedrooms: 5, bathrooms: 4, 
#         year_built: 1999, description: "Test listing description.",
#         lot_size: 4223, saves: 0, views: 0,
#         heating: "Central, electric", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# h2 = URI.open('https://dillow-seeds.s3.amazonaws.com/houseNew2.png')
# s11 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
# s22 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
# s33 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
# s44 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
# l2.large_photo.attach(io: h2, filename: 'houseNew2.png')
# l2.photos.attach(io: s11, filename: 'small2_1.png')
# l2.photos.attach(io: s22, filename: 'small2_2.png')
# l2.photos.attach(io: s33, filename: 'small2_3.png')
# l2.photos.attach(io: s44, filename: 'small2_4.png')
# l2.save!

# l3 = Listing.new(
#         user_id: user2.id, price: 790000, state: "TX", city: "Dallas", 
#         zip_code: "75238", address: "9518 Estate Ln", 
#         property_type: "House", bedrooms: 4, bathrooms: 3, 
#         year_built: 1999, description: "Test listing description.",
#         lot_size: 4223, saves: 0, views: 0,
#         heating: "Central, electric", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# h3 = URI.open('https://dillow-seeds.s3.amazonaws.com/houseNew3.png')
# s111 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
# s222 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
# s333 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
# s444 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
# l3.large_photo.attach(io: h3, filename: 'houseNew3.png')
# l3.photos.attach(io: s111, filename: 'small2_1.png')
# l3.photos.attach(io: s222, filename: 'small2_2.png')
# l3.photos.attach(io: s333, filename: 'small2_3.png')
# l3.photos.attach(io: s444, filename: 'small2_4.png')
# l3.save!

# l4 = Listing.new(
#         user_id: user2.id, price: 589000, state: "TX", city: "Dallas", 
#         zip_code: "75229", address: "3259 Norcross Ln", 
#         property_type: "House", bedrooms: 5, bathrooms: 4, 
#         year_built: 1999, description: "Test listing description.",
#         lot_size: 4223, saves: 0, views: 0,
#         heating: "Central, electric", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# h4 = URI.open('https://dillow-seeds.s3.amazonaws.com/houseNew4.png')
# s1111 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
# s2222= URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
# s3333 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
# s4444 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
# l4.large_photo.attach(io: h4, filename: 'houseNew4.png')
# l4.photos.attach(io: s1111, filename: 'small2_1.png')
# l4.photos.attach(io: s2222, filename: 'small2_2.png')
# l4.photos.attach(io: s3333, filename: 'small2_3.png')
# l4.photos.attach(io: s4444, filename: 'small2_4.png')
# l4.save!

# l5 = Listing.new(
#         user_id: user2.id, price: 444000, state: "TX", city: "Dallas", 
#         zip_code: "75231", address: "6949 Winchester St", 
#         property_type: "House", bedrooms: 3, bathrooms: 2, 
#         year_built: 1999, description: "Test listing description.",
#         lot_size: 4223, saves: 0, views: 0,
#         heating: "Central, electric", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# h5 = URI.open('https://dillow-seeds.s3.amazonaws.com/houseNew5.png')
# s11111 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
# s22222 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
# s33333 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
# s44444 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
# l5.large_photo.attach(io: h5, filename: 'houseNew5.png')
# l5.photos.attach(io: s11111, filename: 'small2_1.png')
# l5.photos.attach(io: s22222, filename: 'small2_2.png')
# l5.photos.attach(io: s33333, filename: 'small2_3.png')
# l5.photos.attach(io: s44444, filename: 'small2_4.png')
# l5.save!

# l6 = Listing.new(
#         user_id: user2.id, price: 898000, state: "NY", city: "South Richmond Hill", 
#         zip_code: "11419", address: "104-49 115th St", 
#         property_type: "House", bedrooms: 3, bathrooms: 2, 
#         year_built: 1999, description: "Test listing description.",
#         lot_size: 4223, saves: 0, views: 0,
#         heating: "Central, electric", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# h6 = URI.open('https://dillow-seeds.s3.amazonaws.com/houseNew6.png')
# s111111 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
# s222222 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
# s333333 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
# s444444 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
# l6.large_photo.attach(io: h6, filename: 'houseNew6.png')
# l6.photos.attach(io: s111111, filename: 'small2_1.png')
# l6.photos.attach(io: s222222, filename: 'small2_2.png')
# l6.photos.attach(io: s333333, filename: 'small2_3.png')
# l6.photos.attach(io: s444444, filename: 'small2_4.png')
# l6.save!

# l7 = Listing.new(
#         user_id: user2.id, price: 699999, state: "NY", city: "Bronx", 
#         zip_code: "10473", address: "227 Newman Ave", 
#         property_type: "House", bedrooms: 3, bathrooms: 2, 
#         year_built: 1999, description: "Test listing description.",
#         lot_size: 4223, saves: 0, views: 0,
#         heating: "Central, electric", cooling: "Central Air-Elec", parking: "2 Garage spaces", sqft: 2500
# )
# h7 = URI.open('https://dillow-seeds.s3.amazonaws.com/houseNew7.png')
# s1111111 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
# s2222222 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
# s3333333 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
# s4444444 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
# l7.large_photo.attach(io: h7, filename: 'houseNew7.png')
# l7.photos.attach(io: s1111111, filename: 'small2_1.png')
# l7.photos.attach(io: s2222222, filename: 'small2_2.png')
# l7.photos.attach(io: s3333333, filename: 'small2_3.png')
# l7.photos.attach(io: s4444444, filename: 'small2_4.png')
# l7.save!


# # ny_listing5 = Listing.new(
# #         user_id: user1.id, price: 599000, state: "NY", city: "Staten Island",
# #         zip_code: "10305", address: "223 Quintard St",
# #         property_type: "House", bedrooms: 3, bathrooms: 3,
# #         year_built: 1965, description: "House for sale on Staten Island.",
# #         lot_size: 1813, saves: 0, views: 0,
# #         heating: "Forced air, natural gas", cooling: "Central air",
# #         parking: "Carport", sqft: 1344
# # )