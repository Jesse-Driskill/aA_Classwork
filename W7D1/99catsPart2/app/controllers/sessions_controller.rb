class SessionsController < ApplicationController

    before_action :require_logged_out, only: [:create]

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.find_by_credentials(params[:user][:user_name], params[:user][:password])
        if @user
            login_user!(@user)
            redirect_to cats_url
        else
            render json: ["invalid credentials"], status: 401
        end
    end

    def destroy
        if logged_in?()
            logout!()
            redirect_to new_session_url
        else
            render json: ["Must be logged in to logout"], status: 422
        end
    end
end
