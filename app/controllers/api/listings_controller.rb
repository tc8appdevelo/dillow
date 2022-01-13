class Api::ListingsController < ApplicationController
    def index
        @listings = Listing.all
    end

    def show
        @listing = Listing.find(params[:id])
    end

    def create
        @listing = Listing.new(listing_params)
        if @listing.save
            render json: {message: "you are selling a house!"}
        else
            render json: @listing.errors.full_messages
        end
    end

    private

    def listing_params
        params.require(:listing).permit(:user_id, :price, :state, :city, 
                                        :zip_code, :address, :bedrooms,
                                        :bathrooms, :year_built, :description,
                                        :photo, :long, :lat)
    end
end