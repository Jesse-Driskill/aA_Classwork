Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do
    resources :artworks, only: [:index]
  end

  # get 'users/:id', to: 'users#show', as: 'user'
  # get 'users', to: 'users#index', as: 'users'
  # post 'users', to: 'users#create'
  # get 'users/new', to: 'users#new', as: 'new_user'
  # get 'users/:id/edit', to: 'users#edit', as: 'edit_user'
  # patch 'users/:id', to: 'users#update'
  # put 'users/:id', to: 'users#update'
  # delete 'users/:id', to: 'users#destroy'
  resources :artworks, only: [:show, :update, :create, :destroy] do
    member do
      post 'artworks/favorite', to: 'artworks#favorite', as: 'favorite'
      post 'artworks/unfavorite', to: 'artworks#unfavorite', as: 'unfavorite'
      post 'artworks/like', to: 'artworks#like', as: 'like'
      post 'artworks/unlike', to: 'artworks#unlike', as: 'unlike'
    end
  end
  
  resources :artwork_shares, only: [:create, :destroy] do
    member do
      post 'artwork_shares/favorite', to: 'artwork_shares#favorite', as: 'favorite'
      post 'artwork_shares/unfavorite', to: 'artwork_shares#unfavorite', as: 'unfavorite'
    end
  end
  
  resources :comments, only: [:create, :destroy, :index] do 
    member do
      post 'comments/like', to: 'comments#like', as: 'like'
      post 'comments/unlike', to: 'comments#unlike', as: 'unlike'
    end
  end


end
