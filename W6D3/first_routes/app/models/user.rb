class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true

    has_many :artworks,
    class_name: :Artwork,
    foreign_key: :artist_id,
    primary_key: :id

    has_many :artwork_shares,
    class_name: :ArtworkShare,
    foreign_key: :viewer_id,
    primary_key: :id

    has_many :shared_artworks,
    through: :artwork_shares,
    source: :artwork

    has_many :comments,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :Comment,
    dependent: :destroy

    def favorite_artworks
        artworks.where(favorite: true)
    end

    def favorite_shared_artworks
        artwork_shares.where(favorite: true)
    end

    # def favorite_own(title)
    #     artworks.where(title: title).update_attribute(:favorite, true)
    # end


end