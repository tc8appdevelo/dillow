class Api::ListingsController < ApplicationController
    def index
        #@listings = selling_houses ? current_user.selling_houses : Listing.all
        
        
        
        if filter
            
            if filter[:price_range] != "none"
                @listings = Listing.is_price_range(filter[:price_range])
            else
                @listings = Listing.all
            end
            
            if filter[:zip_code]
                @listings.where("zip_code LIKE :zip_code", {zip_code: filter[:zip_code]})
                render :index
            elsif filter[:city]
                @listings.where("city LIKE :city", {city: filter[:city]})
            elsif filter[:state]
                @listings = Listing.where("state LIKE :state", {state: filter[:state]})
                render :index
            elsif selling_houses
                @listings = current_user.selling_houses
                render :index
            end
        else
            
            @listings = Listing.all
            render :index
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