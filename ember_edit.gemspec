$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "ember_edit/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "ember_edit"
  s.version     = EmberEdit::VERSION
  s.authors     = ["Anders Nøklestad"]
  s.summary     = "Rails 3 engine for inspecting and editing Ember.js views and templates."
  s.description = "Rails 3 engine that helps developing Rails applications with an Ember.js front-end. " +
    "Inspect your Ember views and templates in your browser and click to open them in your favourite editor."

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 3.2.1"
  s.add_dependency "ember-rails", "~> 0.2.4"
  s.add_development_dependency "sqlite3"
end
