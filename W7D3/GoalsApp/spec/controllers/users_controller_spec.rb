require 'rails_helper'


RSpec.describe UsersController, type: :controller do
  before(:each) do 
    User.create!(username: 'JohnSmith3', password: 'password')
  end

    describe 'Get #index' do
        it 'should render the index template' do
            get :index

            expect(response).to render_template(:index)
            expect(response).to have_http_status(200)
        end
    end

    describe 'Get #show' do
      context 'with valid params' do
        it 'renders the selected users page' do
          get :show, params: {id: User.last.id}

          expect(response).to render_template(:show)
          expect(response).to have_http_status(200)
        end
      end

      context 'with invalid params' do
        it 'renders the selected users page' do
          get :show, params: {id: (User.last.id+1) }

          expect(response).to redirect_to(:index)
          expect(response).to have_http_status(302)
        end
      end
    end

    describe 'Get #new' do
      it 'renders the new user page' do
        get :new

        expect(response).to render_template("new")
        expect(response).to have_http_status(200)
      end
    end

    describe 'Get #edit' do
      it 'renders the selected user page' do
        get :edit, params: {id: User.last.id }

        expect(response).to render_template("edit")
        expect(response).to have_http_status(200)
      end
    end

    describe 'Post #create' do
      it "redirects to the newly created user's page" do
        post :create, params: { user: { username: 'JohnSmith2', password: 'password' }}
        
        expect(response).to redirect_to(user_url(User.last))
        expect(response).to have_http_status(302)
      end
    end

    describe 'Patch #update' do
      it "redirects to the newly updated user's page" do
        patch :update, params: { user: { username: 'JohnSmith3', password: 'password' }}
        
        expect(response).to redirect_to(user_url(User.find_by(username: "JohnSmith3")))
        expect(response).to have_http_status(302)
      end
    end

    describe 'Delete #destroy' do
      it "redirects to the user index page" do
        # User.create!(username: 'JohnSmith3', password: 'password')
        delete :destroy, params: { id: User.find_by(username: "JohnSmith3") }
        
        expect(response).to redirect_to(users_url)
        expect(response).to have_http_status(302)
      end
    end
end

