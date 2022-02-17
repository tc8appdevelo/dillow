# README

# Background

Dillow is a web application influenced by Zillow, the United States' most visited real estate website. Users can browse real estate, see an overhead view of locations with Google's Maps Javascript API, save their favorites, and post their own listings for sale.

# Technologies
* React/Redux
* Ruby on Rails
* PostgreSQL
* JSX
* Webpack
* Amazon Web Services S3
* Maps Javascript API

Dillow utilizes React to create a single page application with reusable components. Redux is used to maintain a global state that keeps track of the current user, listings, filters, errors, the listings a user has saved, and listings a user has posted themselves. Rails takes care of the backend with PostgreSQL. Active Record simplifies querying with associations and data entry with validations. When users post homes for sale, Dillow uses AWS for storage so that each listing can have multiple photos attached. Google Maps Javascript API is used to show the location of each listing. Markers are placed on the correct long/lat with geocoding.

# Features

## Listings:

The listings are displayed in a scrolling view with their pictures and their price, city, state, zip code, and so on. When a logged in user creates a new listing, it is added to the listings shown.  Clicking on a listing brings up a modal that shows more details about that listing along with its expanded pictures. If a user posts a listing, the full CRUD lifecycle is available for that listing.

![image](https://user-images.githubusercontent.com/91623374/154586211-0334b129-e0bf-4a79-a38d-d86e3cbdfd20.png)

## Saves

A logged in user can click to save/unsave listings. When you go to your user page, you can view all of your saved listings.

![image](https://user-images.githubusercontent.com/91623374/154586525-a80090d2-1bc7-410a-9766-8fa13f837b8c.png)


## Search:

Users can search for homes based on price range, city, state, and zip code entered into the map search bar.

## Map:

Google maps renders on the page next to the listings scrolling view. The map renders pins representing the locations of the listings in the scrolling view
