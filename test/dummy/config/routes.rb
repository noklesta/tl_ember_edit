Rails.application.routes.draw do

  mount TlEmberEdit::Engine => "/tl_ember_edit"

  root to: 'gui#index'
end
