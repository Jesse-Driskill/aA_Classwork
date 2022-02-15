class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token # this is to avoid csrf verification - will cover tomorrow
    
    helper_method :current_user, :logged_in? # need to do this to use these methods in views!

    # CRLLL

    def verify_ownership
        @cat = Cat.find(params[:id])
        if @cat.user_id != current_user.id
            require_logged_in 
        # else
            
        end
    end

    def current_user
        # if someone is logged in we will find them by their session token
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        redirect_to new_user_url unless current_user
    end

    def require_logged_out
        redirect_to cats_url if current_user
    end

    def login_user!(user)
        # session is an object that can be accessed from browser and from rails
        session[:session_token] = user.reset_session_token!
        # session[:banana] = "banana"
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil # no more token in the session object
        @current_user = nil 
    end

    def logged_in?
        !!current_user # !current_user gives us opposite boolean -> !! gives us boolean
    end

end
