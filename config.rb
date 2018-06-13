activate :aria_current
activate :autoprefixer
activate :syntax

require 'slim'

set :css_dir, "assets/stylesheets"
set :fonts_dir, "assets/fonts"
set :images_dir, "assets/images"
set :js_dir, "assets/javascripts"
set :markdown,
  autolink: true,
  fenced_code_blocks: true,
  footnotes: true,
  highlight: true,
  smartypants: true,
  strikethrough: true,
  tables: true,
  with_toc_data: true
set :markdown_engine, :redcarpet

page "/*.json", layout: false
page "/*.txt", layout: false
page "/*.xml", layout: false

configure :development do
  activate :livereload do |reload|
    reload.no_swf = true
  end
end

configure :production do
  activate :asset_hash
  activate :gzip
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
end

activate :blog do |blog|
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.layout = :blog
  blog.permalink = "{title}"
  blog.taglink = ":tag.html"
  blog.tag_template = "tag.html"
end

activate :directory_indexes
