# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

config[:js_dir] = 'javascripts'
config[:css_dir] = 'stylesheets'

activate :external_pipeline,
         name: :webpack,
         command: build? ? 'npm run build' : 'npm run start',
         source: '.tmp/dist',
         latency: 1

activate :livereload

activate :blog do |blog|
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.layout = :blog
  blog.permalink = "{post_type}/{title}"

  blog.paginate = true
  blog.page_link = "p{num}"
  blog.per_page = 10

  blog.taglink = ":tag.html"
  blog.tag_template = "tag.html"

  blog.custom_collections = {
    category: {
      link: "/{category}s",
      template: "/category.html"
    }
  }
end

activate :directory_indexes
activate :syntax

set :markdown,
  autolink: true,
  fenced_code_blocks: true,
  footnotes: true,
  highlight: true,
  input: "GFM",
  smartypants: true,
  strikethrough: true,
  tables: true,
  with_toc_data: true
set :markdown_engine, :redcarpet

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end
