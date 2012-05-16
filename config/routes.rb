TlEmberEdit::Engine.routes.draw do
  match 'view' => 'edit#view'
  match 'template' => 'edit#template'
end
