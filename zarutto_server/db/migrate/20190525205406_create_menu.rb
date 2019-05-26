class CreateMenu < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.string :course_type
      t.string :item_name
      t.string :price #converted to string to allow for multiple values where needed
      t.text :ingredients
      t.text :details
      t.string :style_type
      t.string :pieces #converted to string to allow for multiple values where needed
      t.timestamps
    end
  end
end
