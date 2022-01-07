Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy]
    resources :listings
  end

  root to: 'static_pages#root'
end
