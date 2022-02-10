class UsersController < ApplicationController
    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user.nil?
            redirect_to users_url
        else
            render :show
        end
    end

    def new
        @user = User.new
        render :new
    end

    def edit
        @user = User.find_by(id: params[:id])
        render :edit
    end

    def create
        @user = User.new(user_params)
        if @user.save
            redirect_to users_url
        else
            flash[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            redirect_to user_url(@user)
        else
            flash[:errors] = @user.errors.full_messages
            render :edit
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user.destroy
            redirect_to users_url
        else
            flash[:errors] = @user.errors.full_messages
            render :index
        end
    end


    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
