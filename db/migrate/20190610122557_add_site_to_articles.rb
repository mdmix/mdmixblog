class AddSiteToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :site, :string
  end
end
