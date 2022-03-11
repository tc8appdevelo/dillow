require 'open-uri'
class Api::ListingsController < ApplicationController

    def index
        #@listings = selling_houses ? current_user.selling_houses : Listing.all

        
    if selling_houses && current_user
            @listings = current_user.selling_houses
            render :index
    else

        if params[:bounds] && params[:bounds][:northEast]
            @bounds_listings = Listing.in_bounds(params[:bounds])
        else
            @bounds_listings = Listing.all
        end
        
            if params[:price_range] && (params[:price_range][:max] && params[:price_range][:min])
                @price_listings = @bounds_listings.is_price_range(params[:price_range])
            else
                @price_listings = @bounds_listings.all
            end

            if params[:home_types] && params[:home_types] != "none"
                @home_types_listings = @price_listings.is_property_type(params[:home_types])
            else
                @home_types_listings = @price_listings.all
            end

            if params[:beds_baths] && params[:beds_baths][:bedrooms]
 
                @beds_baths_listings = @home_types_listings.has_bedrooms(params[:beds_baths][:bedrooms].to_i)
                @beds_baths_listings = @beds_baths_listings.has_bathrooms(params[:beds_baths][:bathrooms].to_f)
            else
                @beds_baths_listings = @home_types_listings
            end

            
            
            @listings = @beds_baths_listings

            # if params[:state] && (params[:state] != "none")
            #     @state_listings = @price_listings.is_in_state(params[:state])
            # else
            #     @state_listings = @price_listings
            # end

            # if params[:city] && (params[:city] != "none")
            #     @city_listings = @state_listings.is_in_city(params[:city])
            # else
            #     @city_listings = @state_listings
            # end

            # if params[:zip_code] && (params[:zip_code] != "none")
            #     @listings = @city_listings.is_zip_code(params[:zip_code])
            # else
            #     @listings = @city_listings
            # end
        end
    end

    def show
        
        @listing = Listing.with_attached_photos.find(params[:id])
    end

    def create
       
        @listing = Listing.new(listing_params)
        
        if !listing_params[:large_photo]
            house = URI.open('https://dillow-seeds.s3.amazonaws.com/default1.png')
     
            
            @listing.large_photo.attach(io: house, filename: 'default1.png')
            
            # small1 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_1.png')
            # small2 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_2.png')
            # small3 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_3.png')
            # small4 = URI.open('https://dillow-seeds.s3.amazonaws.com/small2_4.png')
            
            # if !listing_params[:photos][0]
            #     @listing.photos.attach(io: small1, filename: 'small2_1.png')
            #     @listing.photos.attach(io: small2, filename: 'small2_2.png')
            #     @listing.photos.attach(io: small3, filename: 'small2_3.png')
            #     @listing.photos.attach(io: small4, filename: 'small2_4.png')
            # end
        end

        if @listing.save
            @listings = Listing.all
            render :index
        else
            render json: @listing.errors.full_messages
        end
    end

    def update

        @listing = Listing.find(params[:id])
        # @listing.photos.each do |photo|
        #     photo.purge
        # end
        # if listing_params[:photos]
        #     @listing.photos.attach(listing_params[:photos])
        # end
        # if @listing.update(listing_params.reject { |k| k["photos"] })
        #     render :show
        # else
        #     render json: @listing.errors.full_messages
        # end
        if @listing.update(listing_params)
            render :show
        else
            render json: @listing.errors.full_messages
        end
    end

    def destroy
        @listing = current_user.selling_houses.find(params[:id])
        if @listing.destroy
            render json: @listing
        else
            render json: @listing.errors.full_messages
        end
    end



    private

    def listing_params
        params.require(:listing).permit(:user_id, :price, :state, :city, 
                                        :zip_code, :address, :bedrooms,
                                        :bathrooms, :year_built, :description,
                                        :lot_size, :property_type, 
                                        :saves, :views, :long, :lat,
                                        :parking, :heating, :cooling, :sqft,
                                        :large_photo, photos: [])
    end

    def selling_houses
        params[:selling]
    end

    def filter
        params[:filter]
    end


end