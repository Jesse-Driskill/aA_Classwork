# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: 'sdijfhwerui')
User.create(username: 'sdijfhweruiasdas')
User.create(username: 'sdijfhweruieee')

Artwork.create(title: 'a', image_url: 'a@google.com', artist_id: 1)
Artwork.create(title: 'b', image_url: 'b@google.com', artist_id: 1)
Artwork.create(title: 'c', image_url: 'c@google.com', artist_id: 2)

ArtworkShare.create(artwork_id: 1, viewer_id: 1)
ArtworkShare.create(artwork_id: 4, viewer_id: 7)
ArtworkShare.create(artwork_id: 2, viewer_id: 3)
ArtworkShare.create(artwork_id: 1000, viewer_id: 65)
ArtworkShare.create(artwork_id: 2, viewer_id: 2)

Comment.create(body: 'Nice art, bro', artwork_id: 1, user_id: 1)
Comment.create(body: 'Ugly art, bro', artwork_id: 1, user_id: 2)
Comment.create(body: 'Sad art, bro', artwork_id: 2, user_id: 3)

Like.create(user_id: 1, likeable_type: 'Artwork', likeable_id: 1)