class Api::UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        render json: User.find(params[:id])
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "/api/users/show"
        else
            render json: ['Invalid email or password'], status: 401
        end
    end

    def user_params
        params.require(:user).permit(:email, :password)
    end
end