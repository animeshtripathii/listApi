
import mongoose from "mongoose";
import { Product } from "./models/product.model.js";
import dotenv from "dotenv";

export const products = [
  { name: "iPhone 15", category: "Electronics", price: 79999, inStock: true },
  { name: "Samsung Galaxy S23", category: "Electronics", price: 74999, inStock: true },
  { name: "OnePlus 12", category: "Electronics", price: 69999, inStock: true },
  { name: "Sony WH-1000XM5 Headphones", category: "Electronics", price: 29999, inStock: true },
  { name: "Boat Rockerz 550", category: "Electronics", price: 1999, inStock: false },

  { name: "Nike Air Max Shoes", category: "Footwear", price: 8999, inStock: true },
  { name: "Adidas Running Shoes", category: "Footwear", price: 6999, inStock: true },
  { name: "Puma Casual Sneakers", category: "Footwear", price: 4999, inStock: true },
  { name: "Woodland Leather Boots", category: "Footwear", price: 7999, inStock: false },

  { name: "HP Pavilion Laptop", category: "Computers", price: 64999, inStock: true },
  { name: "MacBook Air M2", category: "Computers", price: 114999, inStock: true },
  { name: "Dell Wireless Mouse", category: "Accessories", price: 1499, inStock: true },
  { name: "Logitech Mechanical Keyboard", category: "Accessories", price: 6999, inStock: true },

  { name: "Backpack 45L", category: "Bags", price: 2999, inStock: true },
  { name: "Laptop Sleeve 15 inch", category: "Bags", price: 999, inStock: true },

  { name: "Smart Watch Series 8", category: "Wearables", price: 24999, inStock: true },
  { name: "Mi Band 8", category: "Wearables", price: 3999, inStock: true },

  { name: "Philips Air Fryer", category: "Home Appliances", price: 10999, inStock: true },
  { name: "Prestige Induction Cooktop", category: "Home Appliances", price: 3499, inStock: false },

  { name: "Office Chair Ergonomic", category: "Furniture", price: 12999, inStock: true },
  { name: "Study Table Wooden", category: "Furniture", price: 8999, inStock: true },

  { name: "Men Casual Shirt", category: "Clothing", price: 1999, inStock: true },
  { name: "Women Denim Jacket", category: "Clothing", price: 3499, inStock: true },

  { name: "Bluetooth Speaker JBL", category: "Electronics", price: 5999, inStock: true },
  { name: "Noise Smart Earbuds", category: "Electronics", price: 2999, inStock: false }
];


dotenv.config();

const seedProducts = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Product.deleteMany();
  await Product.insertMany(products);

  console.log("25+ Products seeded successfully");
  process.exit();
};

seedProducts();
