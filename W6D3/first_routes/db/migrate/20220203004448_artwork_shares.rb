class ArtworkShares < ActiveRecord::Migration[5.2]
  def change
    create_table :artwork_shares, :id => false do |t|
      t.integer :artwork_id, null: false
      t.integer :viewer_id, null: false
    end
    #add_index :artworks, [:artist_id, :title], unique: true
  end
    
end
