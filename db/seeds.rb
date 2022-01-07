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
        user_id: user1.id, price: 1000000, state: "TX", city: "Dallas", 
        zip_code: 78728, address: "2222 Road Drive", 
        property_type: "House", bedrooms: 4, bathrooms: 3, 
        year_built: 1994, description: "Test listing description."
)

