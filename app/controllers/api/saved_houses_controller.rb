class Api::SavedHousesController < ApplicationController

  def index
    if current_user
      @saved_houses = current_user.listings
    end
  end

  def show
    @listing = Listing.with_attached_photos.find(@saved_house.listing_id)
  end
  
  def create
    
    @saved_house = SavedHouse.new(user_id: current_user.id, listing_id: params[:id])
  
    if @saved_house.save
      
        @listing = Listing.with_attached_photos.find(@saved_house.listing_id)
        
        render :show

    else
        render json: @saved_house.errors.full_messages
    end
  end

  def destroy
    @saved_house = SavedHouse.find_by(user_id: current_user.id, listing_id: params[:id])
    if @saved_house.destroy
      render json: @saved_house
    else
      render json: @saved_house.errors.full_messages
    end
  end


end