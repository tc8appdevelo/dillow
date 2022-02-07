class Api::SavedHousesController < ApplicationController

  def index
    @saved_houses = current_user.listings
  end

  def show
    @saved_house = SavedHouse.find_by(user_id: current_user.id, listing_id: params[:id])
  end
  
  def create
    
    @saved_house = SavedHouse.new
    @saved_house.user_id = current_user.id
    @saved_house.listing_id = params[:id]
    if @saved_house.save
        @listing = Listing.find_by(id: @saved_house.listing_id)
        render json: @listing
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