class UsersController < ApplicationController
    def index

        render json: User.all
    end
    def create
        user = User.new(params.require(:user).permit(:email, :username))
        # replace the `user_attributes_here` with the actual attribute keys
        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
        
    end
    def show
        #User.find(params[:id])
            render json: User.find(params[:id])
        #else
            #render json: user.errors.full_messages, status: :unprocessable_entity
        
    end

    def destroy
        if User.find(params[:id])
            User.delete(params[:id])
        end
    end

    def update
        eee = (params.require(:user).permit(:email, :username))
        user = User.find(params[:id])
        if user
            user.update(eee)
        end
    end
end