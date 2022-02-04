class ArtworkCollection < ApplicationRecord
    belongs_to :owner,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id

    has_many :artworks, through: :owner, source: :artwork_collections

end
