class CreateCreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :create_users do |t|

      t.string :username, null: false
      t.string :email, null: false
      t.timestamps
    end
  end
end
