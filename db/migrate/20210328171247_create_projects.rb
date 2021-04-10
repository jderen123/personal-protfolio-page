class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :photo_key
      t.string :github_link
      t.string :live_link

      t.timestamps
    end
  end
end
