class Api::SessionsController < ApplicationController
    # def new
    #     render :new
    # end

    

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user.nil?
            flash.now[:errors] = ["invalid credentials"]
            redirect_to new_session_url
        else
            login!(@user)
            render "/api/users/show"
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render json: ["log out/destroy in sessions_controller.rb"]
        else
            render json: ["Not signed in"], status: 404
        end
    end
end