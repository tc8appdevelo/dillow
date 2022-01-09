# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# users = User.create([
#     {
#         email: "demo_user",
#         password: "password"
#     }
# ])

user1 = User.create(
    email: "demo_user",
    password: "password"
)

listing1 = Listing.create(
        user_id: user1.id, price: 1111111, state: "TX", city: "Dallas", 
        zip_code: 78728, address: "1111 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1994, description: "Test listing description."
)

listing2 = Listing.create(
        user_id: user1.id, price: 2222222, state: "TX", city: "Austin", 
        zip_code: 78728, address: "2222 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 2002, description: "Test listing description."
)

listing3 = Listing.create(
        user_id: user1.id, price: 3333333, state: "GA", city: "Atlanta", 
        zip_code: 78728, address: "3333 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1999, description: "Test listing description."
)

listing4 = Listing.create(
        user_id: user1.id, price: 4444444, state: "CA", city: "San Diego", 
        zip_code: 78728, address: "4444 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1998, description: "Test listing description."
)

listing5 = Listing.create(
        user_id: user1.id, price: 5555555, state: "TX", city: "San Marcos", 
        zip_code: 78728, address: "5555 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1294, description: "Test listing description."
)

listing6 = Listing.create(
        user_id: user1.id, price: 6666666, state: "CA", city: "Bakersfield", 
        zip_code: 78728, address: "6666 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1954, description: "Test listing description."
)

listing7 = Listing.create(
        user_id: user1.id, price: 7777777, state: "SC", city: "Charleston", 
        zip_code: 78728, address: "7777 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1917, description: "Test listing description."
)

