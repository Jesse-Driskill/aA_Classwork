class CommentsController < ApplicationController
    def create
        comment = Comment.new(comment_params)
        if comment.save
            render json: comment
        else
            render json: comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        comment = Comment.find(params[:id])
        if comment
            Comment.delete(params[:id])
            render json: comment
        end
    end

    def index
        if params['comments'][:user_id]
            user = User.find(params['comments'][:user_id]).comments
        elsif params['comments'][:artwork_id]
            comments = Artwork.find(params['comments'][:artwork_id]).comments
        else
            comments = Comment.all
        end
        render json: comments
    end

    def like
        like = Like.new( user_id: params[:user_id], likeable_id: params[:id], likeable_type: 'Comment')
        render json: params
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :artwork_id)
    end
end