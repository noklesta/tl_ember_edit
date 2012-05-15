module TlEmberEdit

  # Override this in an initializer or your application.rb to customize your
  # editor command. 'FILENAME' will be replaced by the actual file name.
  TlEmberEdit::EDIT_CMD = "subl FILENAME"

  class EditController < ApplicationController
    def view
      # Change from SnakeCase to under_score
      filename = params[:cls].underscore

      # Remove the app namespace
      filename.sub!(/^.+?\./, '')

      filename = "#{Rails.root}/app/assets/javascripts/views/#{filename}"

      ['js', 'js.coffee', 'coffee'].each do |extension|
        candidate = filename + '.' + extension
        if File.exists?(candidate)
          filename = candidate
          break
        end
      end

      system(EDIT_CMD.sub('FILENAME', filename))

      head :ok
    end
  end
end
