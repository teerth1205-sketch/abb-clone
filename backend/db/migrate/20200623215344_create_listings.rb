class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :location
      t.text :summary
      t.integer :price
      t.integer :user_id

      t.timestamps
    end
  end
end
