class SessionsController < ApplicationController
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.find_by_credentials(params[:user][:user_name], params[:user][:password])
        if @user
            login!(@user)
        redirect_to cats_url
        else
        render json: ["invalid credentials"], status: 401
        end
    end
end
