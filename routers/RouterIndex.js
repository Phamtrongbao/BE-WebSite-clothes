const cors = require("cors");
const BrandRouter = require("../routers/Brand.router");
const AdminRouter = require("../routers/AdminRouter/Admin.router");
const Product = require("../routers/productRouter/ProductsRouter");
const Orders = require("../routers/OrderRouter/OrderRouter");
const Customers = require("../routers/customerRouter/CustomerRouter");
const reviews = require("../routers/Reviews/ReviewsRouter");
function routers(app) {
  app.use("/reviews", cors(), reviews);
  app.use("/customer", cors(), Customers);
  app.use("/Orders", cors(), Orders);
  app.use("/product", cors(), Product);
  app.use("/admin", cors(), AdminRouter);
  app.use("/", cors(), BrandRouter);
}

module.exports = routers;
