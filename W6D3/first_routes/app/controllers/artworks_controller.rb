class ArtworksController < ApplicationController
    def index
        user = User.find(params[:user_id])
        render json: [user.artworks, user.shared_artworks]
    end
    def create
        artwork = Artwork.new(artwork_params)
        # replace the `user_attributes_here` with the actual attribute keys
        if artwork.save
            render json: artwork
        else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
        
    end
    def show
        #User.find(params[:id])
            render json: Artwork.find(params[:id])
        #else
            #render json: user.errors.full_messages, status: :unprocessable_entity
        
    end

    def destroy
        if artwork.find(params[:id])
            artwork.delete(params[:id])
        end
    end

    def update
        artwork = Artwork.find(params[:id])
        if artwork
            artwork.update(artwork_params)
        end
    end

    def favorite
        artwork = Artwork.find(params[:id])
        if artwork
            artwork.favorited_by_owner = true
            artwork.save
            render json: artwork
        end
    end

    def unfavorite
        # debugger
        artwork = Artwork.find(params[:id])
        if artwork
            artwork.favorited_by_owner = false
            artwork.save
            render json: artwork
        end
    end

    def like
        like = Like.new( user_id: params[:user_id], likeable_id: params[:id], likeable_type: 'Artwork')
        render json: params
    end


    private

    def artwork_params
        params.require(:artwork).permit(:image_url, :artist_id, :title, :favorited_by_owner)
    end
end
