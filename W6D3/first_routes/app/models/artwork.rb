class Artwork < ApplicationRecord
    validates :artist_id, :title, :image_url, presence: true
    validates :title, uniqueness: {scope: :artist_id}

    belongs_to :artist,
    class_name: :User,
    foreign_key: :artist_id,
    primary_key: :id

    has_many :artwork_shares,
    foreign_key: :artwork_id,
    primary_key: :id,
    class_name: :ArtworkShare

    has_many :shared_viewers,
    through: :artwork_shares,
    source: :viewer

    has_many :comments,
    foreign_key: :artwork_id,
    primary_key: :id,
    class_name: :Comment,
    dependent: :destroy

    has_many :likes, as: :likeable

    
end
