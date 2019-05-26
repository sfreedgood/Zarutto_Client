class CreateMenu < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.string :course_type
      t.string :item_name
      t.float :price
      t.text :ingredients
      t.text :details
      t.string :style_type
      t.int :pieces
    end
  end
end
