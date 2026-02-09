import { listProductsService, createProductService } from "../services/product.service.js";

export const listProductsController = async (req, res, next) => {
  try {
    // 1. Extract query params (Default to Page 1, Limit 10)
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // 2. Pass them to the service
    const result = await listProductsService(page, limit);

    // 3. Send response with full pagination details
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: result.products,      // The actual array of products
      pagination: {
          totalDocs: result.total, // Total products in DB
          limit: result.limit,     // Products per page
          page: result.page,       // Current page
          totalPages: result.totalPages
      }
    });
  } catch (error) {
    next(error);
  }
};

export const createProductController = async (req, res, next) => {
  try {
    const product = await createProductService(req.body);

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};