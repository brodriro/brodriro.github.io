source "https://rubygems.org"
# This site is built and served by GitHub Pages, so the `github-pages` gem is
# used to get the same Jekyll version and plugins locally as in production.
# Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# To upgrade, run `bundle update github-pages`.
gem "github-pages", group: :jekyll_plugins

# Jekyll 3 needs erb, which some distros (e.g. Arch) ship outside the Ruby package.
gem "erb"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
