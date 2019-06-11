class ChangePreviewToBeTextInArticles < ActiveRecord::Migration[5.2]
  def change
    change_column :articles, :preview, :text
  end
end
