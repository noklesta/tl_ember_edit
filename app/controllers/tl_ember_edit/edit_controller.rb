module TlEmberEdit
  class EditController < ApplicationController
    def view
      # Change from CamelCase to under_score
      cls = params[:cls].underscore

      # Remove the app namespace
      cls.sub!(/^.+?\./, '')

      @filename = "#{Rails.root}/#{EMBER_ROOT}/#{VIEWS_DIR}/#{cls}"

      try_extensions(['js', 'js.coffee', 'coffee'])

      system(EDIT_CMD.sub('FILENAME', @filename))

      head :ok
    end


    def template
      has_ember_rails = Module.const_defined?('Ember') && Ember.const_defined?('Rails')

      if has_ember_rails
        ember_config = Ember::Rails::Engine.config.handlebars
        templates_root = ember_config.templates_root || ''
        templates_path_separator = ember_config.templates_path_separator || '/'
      else
        templates_root = ''
        templates_path_separator = '/'
      end

      templates_root = templates_root.present? ? templates_root + '/' : ''
      template_path = templates_root + params[:tpl].gsub(templates_path_separator, '/')

      @filename = "#{Rails.root}/#{EMBER_ROOT}/#{params[:tpl]}"

      try_extensions(['handlebars', 'js.hjs', 'hbs'])

      system(EDIT_CMD.sub('FILENAME', @filename))

      head :ok
    end

    ########
    private
    ########

    def try_extensions(extensions)
      extensions.each do |extension|
        candidate = @filename + '.' + extension
        if File.exists?(candidate)
          @filename = candidate
          break
        end
      end
    end
  end
end
