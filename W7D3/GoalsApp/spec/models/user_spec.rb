require 'rails_helper'


#validations, associations, class scoping methods

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  describe 'validations' do
    #username, password_digest, session_token, password
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    let(:user) {User.create(username: 'JohnSmith', password: 'password')}
    it { should validate_uniqueness_of(:username) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe 'associations' do

  end

  describe 'class_scoping_methods' do

  end
end
