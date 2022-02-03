class Api::ListingsController < ApplicationController
    def index
        @listings = selling_houses ? current_user.selling_houses : Listing.all
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
                                        :lot_size, :property_type, :photo, 
                                        :saves, :views, :long, :lat,
                                        :parking, :heating, :cooling, :sqft)
    end

    def selling_houses
        params[:selling]
    end
end