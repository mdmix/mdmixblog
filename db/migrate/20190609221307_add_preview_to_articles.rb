class AddPreviewToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :preview, :string
  end
end
