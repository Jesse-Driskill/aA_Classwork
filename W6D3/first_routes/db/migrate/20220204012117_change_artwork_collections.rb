class ChangeArtworkCollections < ActiveRecord::Migration[5.2]
  def change
    add_column :artwork_collections, :name, :string 
  end
end
