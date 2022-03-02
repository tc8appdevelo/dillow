class Api::ListingsController < ApplicationController
    def index
        #@listings = selling_houses ? current_user.selling_houses : Listing.all

        
    if selling_houses && current_user
            @listings = current_user.selling_houses
            render :index
    else
            if params[:price_range] != "none"
                @price_listings = Listing.is_price_range(params[:price_range])
            else
                @price_listings = Listing.all
            end

            if params[:state] != "none"
                @state_listings = @price_listings.is_in_state(params[:state])
            else
                @state_listings = @price_listings
            end

            if params[:city] != "none"
                @city_listings = @state_listings.is_in_city(params[:city])
            else
                @city_listings = @state_listings
            end

            if params[:zip_code] != "none"
                @listings = @city_listings.is_zip_code(params[:zip_code])
            else
                @listings = @city_listings
            end
        end
    end

    def show
        
        @listing = Listing.with_attached_photos.find(params[:id])
    end

    def create
       
        @listing = Listing.new(listing_params)
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