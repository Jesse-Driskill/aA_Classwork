class ChangeArtworks < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :favorited_by_owner, :boolean, default: false
    add_column :artwork_shares, :favorited_by_user, :boolean, default: false
  end
end
