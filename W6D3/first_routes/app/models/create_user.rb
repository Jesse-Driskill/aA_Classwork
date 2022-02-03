class CreateUser < ApplicationRecord
    validates :username, :email, presence: true
end
