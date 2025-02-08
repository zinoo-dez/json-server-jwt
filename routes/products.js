const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const auth = require("../middleware/auth");

router.get("/", productController.getAllProducts); // /api/Products
router.get("/:id", productController.getProductById); // /api/Products/:id
router.post("/", productController.createProduct); // /api/Products
router.put("/:id", productController.updateProduct); // /api/Products/:id
router.delete("/:id", productController.deleteProduct); // /api/Products/:id

module.exports = router;
