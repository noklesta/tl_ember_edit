Rails.application.routes.draw do

  mount EmberEdit::Engine => "/ember_edit"

  root to: 'gui#index'
end
