require 'rails_helper'


RSpec.describe UsersController, type: :controller do
    describe 'Get #index' do
        it 'should render the index template' do
            get :index

            expect(response).to render_template(:index)
            expect(response).to have_http_status(200)
        end
    end

    describe 'Get #show' do
    end

    describe 'Get #new' do
    end

    describe 'Get #edit' do
    end

    describe 'Post #create' do
    end

    describe 'Patch #update' do
    end

    describe 'Delete #destroy' do
    end
end

