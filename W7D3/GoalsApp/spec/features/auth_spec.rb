require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  scenario 'has a new user page' do
    visit new_user_url
    expect(page).to have_content "New User"
  end

  feature 'signing up a user' do
    before(:each) do
      visit new_user_url
      fill_in "Username", with: 'JohnSmith11'
      fill_in "Password", with: 'password11'
      click_on "Create User"
    end
    scenario 'shows username on the homepage after signup' do
      expect(page).to have_content "User List"
      expect(page).to have_content "JohnSmith11"
    end

  end
end

feature 'logging in' do
  scenario 'shows username on the homepage after login' do
    visit new_session_url
    fill_in "Username", with: 'JohnSmith11'
    fill_in "Password", with: 'password11'
    click_on "Login"
    expect(page).to have_content "JohnSmith11"
  end

end

feature 'logging out' do
  scenario 'begins with a logged out state'

  scenario 'doesn\'t show username on the homepage after logout'

end