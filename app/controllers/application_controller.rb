class ApplicationController < ActionController::Base
    helper_method :current_user, :current_user_id, :logged_in?

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logged_in?
        !!current_user
    end

    def logout!
        @current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def current_user
        if !session[:session_token]
            return nil
        end
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def current_user_id
        current_user ? current_user_id : nil
    end

    def require_user!
        redirect_to new_session_url if current_user.nil?
    end
end
