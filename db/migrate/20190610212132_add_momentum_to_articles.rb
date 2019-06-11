class AddMomentumToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :momentum, :string
  end
end
