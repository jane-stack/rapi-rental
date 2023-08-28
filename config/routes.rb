Rails.application.routes.draw do
  resources :reviews
  resources :cars
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Users
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # Sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  # Defines the root path route ("/")
  # root "articles#index"
end
