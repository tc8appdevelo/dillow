class Api::SavedHousesController < ApplicationController

  def index
    @saved_houses = current_user.saved_houses

  end

  def create
    puts params
    @saved_house = SavedHouse.new
    @saved_house.user_id = current_user.id
    @saved_house.listing_id = params[:id]
    if @saved_house.save
        render json: {message: "saved house!"}
    else
        render json: @saved_house.errors.full_messages
    end

  end

  def destroy
    @saved_house = SavedHouse.find(params[:id])
    @saved_house.destroy
    render json: {message: "removed house from saves!"}
  end


end