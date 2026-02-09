import { Product } from "../models/product.model.js";

export const listProductsService = async (page, limit) => {
  // 1. Calculate Skip Logic
  const skip = (page - 1) * limit;

  // 2. Fetch the specific chunk of products
  const products = await Product.find()
      .skip(skip)
      .limit(limit);

  // 3. Get total count (so frontend knows how many pages exist)
  const total = await Product.countDocuments();

  // 4. Return data + metadata
  return {
    products,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit)
  };
};

export const createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};