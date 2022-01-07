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
            render :show
        else
            render json: @listing.errors.full_messages
        end
    end

    def listing_params
        params.require(:listing).permit(:user_id, :price, :state, :city)
    end
end