class UsersController < ApplicationController
    def index
        # if params[:query]
        #     user = User.where('username LIKE ?', 'params[:query]')
        #     render json: user
        # else
        #     render json: User.all #User.all
        # end
        if params.has_key?('username')
            #render json: User.where(users: {username: '77777777'})
            render json: User.where('username LIKE ?', params['username'])
        else
            # render json: ['weyufgwegyhudujed', User.all]
            render json: ['eydgdfgywe', params, User.all]
        end
    end
    def create
        user = User.new(user_params)
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
        user = User.find(params[:id])
        if user
            user.update(user_params)
        end
    end

    private

    def user_params
        params.require(:user).permit(:username)
    end
end