class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |t|
      t.string :address
      t.text :references
      t.text :description
      t.integer :price

      t.timestamps null: false
    end
  end
end
