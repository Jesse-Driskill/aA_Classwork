class UsersController < ApplicationController

    before_action :require_logged_out, only: [:create]

    def index
        @users = User.all
        render json: @users
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login_user!(@user)
            redirect_to users_url(@user)
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def new
        @user = User.new
        render :new
    end


    private

    def user_params
        params.require(:user).permit(:user_name, :password)
    end
end
