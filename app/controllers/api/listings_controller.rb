class Api::ListingsController < ApplicationController
    def index
        render json: Listing.all
    end

    def show
        render josn: Listing.find(params[:id])
    end

    def create
        @listing = Listing.new(listing_params)
        if @listing.save
            return show
        else
            render json: @listing.errors.full_messages
        end
    end

    def listing_params
        params.require(:listing).permit(:user_id, :price, :state, :city,
            :zip_code, :address, :type, :bedrooms, :bathrooms, :year_built,
            :description, :lot_size, :parking, :heating, :time_on_dillow, 
            :views, :saves, :est_payment)
    end


end