# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

menus = Menu.create([
  {
    course_type: "Appetizers", item_name: "Regular", price: 6, ingredients: nil, details: nil, style_type: "Gyoza", pieces: 6 
  },
  {
    course_type: "Appetizers", item_name: "Cheese", price: 7, ingredients: nil, details: nil, style_type: "Gyoza", pieces: 6 
  },
  {
    course_type: "Appetizers", item_name: "Radish", price: 7, ingredients: nil, details: nil, style_type: "Gyoza", pieces: 6 
  },
  {
    course_type: "Appetizers", item_name: "Edamame", price: 4, ingredients: nil, details: nil, style_type: nil, pieces: nil
  },
  {
    course_type: "Appetizers", item_name: "Edamame", price: 5, ingredients: nil, details: "w/ garlic butter", style_type: nil, pieces: nil
  },
  {
    course_type: "Appetizers", item_name: "Kimchi", price:4, ingredients: nil, details: nil, style_type: nil, pieces: nil
  },
  {
    course_type: "Appetizers", item_name: "Sesame Cucumber", price: 6, ingredients: nil, details: nil, style_type: nil, pieces: nil
  },
  {
    course_type: "Appetizers", item_name: "Karaage", price: [4, 7], ingredients: nil, details: "fried chicken", style_type: nil, pieces: [3, 6]
  },
  {
    course_type: "Appetizers", item_name: "Roast Pork Buns", price: 7, ingredients: nil, details: nil, style_type: nil, pieces: 2
  },
  {
    course_type: "Appetizers", item_name: "Takoyoki", price: 7, ingredients: nil, details: nil, style_type: nil, pieces: 8
  },
  {
    course_type: "Appetizers", item_name: "French Fries, Okonomiyaki Style", price: 6, ingredients: nil, details: nil, style_type: nil, pieces: nil
  },
  {
    course_type: "Appetizers", item_name: "Zurutto Salad", price: 8, ingredients: nil, details: nil, style_type: nil, pieces: nil
  },
  {
    course_type: "Appetizers", item_name: "Tofu Salad", price: 8, ingredients: nil, details: nil, style_type: nil, pieces: nil
  },
  {
    course_type: "Mains", item_name: "Zurutto Ramen", price: 12, ingredients: "Miso, corn, bean, sprouts, cabbage, onion, scallion, ground pork, roasted pork, noodle", details: "Chicken broth", style_type: "ramen", pieces: nil,
  },
  {
    course_type: "Mains", item_name: "Spicy Zurutto Ramen", price: 13, ingredients: "Spicy oil, miso, corn, bean sprouts, cabbage, onion, scallion, ground pork, roasted pork", details: "Chicken broth", style_type: "ramen", pieces: nil,
  },
  {
    course_type: "Mains", item_name: "Vegetable Soy Milk Miso Ramen", price: 15, ingredients: "Miso, kimchi, onion, bean sprouts, cabbage, scallion, corn, seaweed, bamboo, noodle", details: "Vegetable broth and soy milk", style_type: "ramen", pieces: nil,
  },
  {
    course_type: "Mains", item_name: "Truffle Dan Dan Ramen", price: 15, ingredients: "Sesame paste, white truffle oil, parmesan cheese, ground pork, seasoned boiled egg, crunchy onions, scallion, chili oil", details: "Vegetable broth; less soup & spicy", style_type: "ramen", pieces: nil,
  },
  {
    course_type: "Mains", item_name: "Kaedama", price: 2, ingredients: nil, details: "Extra Noodles", style_type: "ramen topping", pieces: nil,
  },
  {
    course_type: "Mains", item_name: "Roasted pork", price: 3, ingredients: nil, details: nil, style_type: "ramen topping", pieces: 2,
  },
  {
    course_type: "Mains", item_name: "Bamboo shoot", price: 2, ingredients: nil, details: nil, style_type: "ramen topping", pieces: nil,
  },
  {
    course_type: "Mains", item_name: "Spicy chili oil", price: 2, ingredients: nil, details: nil, style_type: "ramen topping", pieces: nil,
  },
  {
    course_type: "Mains", item_name: "Seasoned boiled egg", price: 2, ingredients: nil, details: nil, style_type: "ramen topping", pieces: nil,
  },
  {
    course_type: "Mains", item_name: "Poached egg", price: 2, ingredients: nil, details: nil, style_type: "ramen topping", pieces: nil,
  },
  {
    course_type: "Mains", item_name: "Crunchy onion", price: 2, ingredients: nil, details: nil, style_type: "ramen topping", pieces: nil,
  },
  {
    course_type: "Mains", item_name: "Okonomiyaki", price: 12, ingredients: "Bacon, cabbage, crunchy tempura flake, egg, scallion, original teriyaki sauce, mayonnaise, dry seaweed, bonito flake, flour", details: "Japanese Style Pancake", style_type: nil, pieces: nil,
  },
  {
    course_type: "Mains", item_name: "Kobe Beef Burger", price: 12, ingredients: "Kobe ground beef, romaine lettuce, cheese, tomato, scallion, original bbq sauce, spicy mayonnaise", details: nil, style_type: nil, pieces: nil,
  },
  {
    course_type: "Desserts", item_name: "Almond Tofu Pudding", price: 7, ingredients: nil, details: nil, style_type: nil, pieces: nil,
  },
  {
    course_type: "Desserts", item_name: "Mochi Green Tea or Vanilla", price: 5, ingredients: nil, details: nil, style_type: nil, pieces: nil,
  },
  {
    course_type: "Desserts", item_name: "Yuzu Sherbert", price: 5, ingredients: nil, details: nil, style_type: nil, pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Sapporo", price: 6, ingredients: nil, details: nil, style_type: "draft beer", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Sapporo", price: 7, ingredients: nil, details: nil, style_type: "draft beer", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Kagua Rouge", price: 10, ingredients: nil, details: nil, style_type: "bottled beer", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Kagua Blanc", price: 10, ingredients: nil, details: nil, style_type: "bottled beer", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Ozeno Yukidoke Ipa", price: 10, ingredients: nil, details: nil, style_type: "bottled beer", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Ozeno White Weizen", price: 10, ingredients: nil, details: nil, style_type: "bottled beer", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Ginga Koge", price: 9, ingredients: nil, details: nil, style_type: "bottled beer", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Daissai", price: [50, 10], ingredients: nil, details: %w[bottle glass], style_type: "sake", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Nigori", price: 10, ingredients: nil, details: nil, style_type: "sake", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Kikusui", price: 12, ingredients: nil, details: nil, style_type: "sake", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Hakkaisan", price: 11, ingredients: nil, details: nil, style_type: "sake", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Hot Sake", price: 10, ingredients: nil, details: nil, style_type: "sake", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "House Chardonnay", price: 6, ingredients: nil, details: nil, style_type: "white wine", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Sauvignon Blanc", price: 8, ingredients: nil, details: "New Zealand", style_type: "white wine", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Pinot Grigio", price: 8, ingredients: nil, details: "Italy", style_type: "white wine", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Chowa Plum Wine", price: 8, ingredients: nil, details: "Japanese Green Plum", style_type: "white wine", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "House Merlot", price: 6, ingredients: nil, details: nil, style_type: "red wine", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Cabernet", price: 8, ingredients: nil, details: "California", style_type: "red wine", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Pinot Noir", price: 8, ingredients: nil, details: "France", style_type: "red wine", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Coke", price: 3.5, ingredients: nil, details: nil, style_type: "soft drink", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Diet Coke", price: 3.5, ingredients: nil, details: nil, style_type: "soft drink", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Ginger Ale", price: 3.5, ingredients: nil, details: nil, style_type: "soft drink", pieces: nil,
  },
  {
    course_type: "Drinks", item_name: "Sparkling Water", price: 3.5, ingredients: nil, details: nil, style_type: "soft drink", pieces: nil,
  }
])