class ArtworkSharesController < ApplicationController
    def index
        render json: ArtworkShare.all
    end
    def create
        artwork_share = ArtworkShare.new(artwork_share_params)
        # replace the `user_attributes_here` with the actual attribute keys
        if artwork_share.save
            render json: artwork_share
        else
            render json: artwork_share.errors.full_messages, status: :unprocessable_entity
        end
        
    end


    def destroy
        artwork_share = ArtworkShare.find(params[:id])
        if artwork_share
            ArtworkShare.delete(params[:id])
            render json: artwork_share
        end
    end

    def favorite
        artwork_share = ArtworkShare.find(params[:id])
        if artwork_share
            artwork_share.favorited_by_user = true
            artwork_share.save
            render json: [artwork_share]
        end
    end

    def unfavorite
        artwork_share = ArtworkShare.find(params[:id])
        if artwork_share
            artwork_share.favorited_by_user = false
            artwork_share.save
            render json: [artwork_share]
        end
    end


    private

    def artwork_share_params
        params.require(:artwork_shares).permit(:artwork_id, :viewer_id)
    end
end
