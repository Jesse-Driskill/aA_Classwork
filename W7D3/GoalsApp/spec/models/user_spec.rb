# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'rails_helper'


#validations, associations, class scoping methods

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  describe 'validations' do
    #username, password_digest, session_token, password
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    subject(:user) {User.create!(username: 'JohnSmith', password: 'password')}
    it { should validate_uniqueness_of(:username) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe 'associations' do

  end

  describe 'class_scoping_methods' do
    describe '::find_by_credentials' do
      before(:each) { User.create!(username: 'JohnSmith', password: 'password') }
      it 'should return user object given valid parameters' do
        expect(User.find_by_credentials('JohnSmith', 'password')).to eq(User.last)
      end

      it 'should return nil if given invalid parameters' do
        expect(User.find_by_credentials('JohnSmith1', 'password2')).to eq(nil)
      end
    end
  end

  
end
