require "tl_ember_edit/engine"

module TlEmberEdit

  # Override these settings in an initializer or your application.rb

  # The editor command. 'FILENAME' will be replaced by the actual file name.
  # EDIT_CMD = "vim FILENAME"
  # EDIT_CMD = "emacs FILENAME"
  # EDIT_CMD = "mate FILENAME"
  EDIT_CMD      = "subl FILENAME"

  EMBER_ROOT    = "app/assets/javascripts"
  VIEWS_DIR     = "views"

end
