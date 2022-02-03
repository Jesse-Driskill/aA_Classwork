class Comment < ApplicationRecord
    validates :body, presence: true
    
    belongs_to :author,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :User

    belongs_to :artwork,
    foreign_key: :artwork_id,
    primary_key: :id,
    class_name: :Artwork

    has_many :likes, as: :likeable
end
