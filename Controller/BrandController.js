const Brand = require("../models/Brand");
const { mongooseObject } = require("../util/moongose/moongoose");

class BrandControllers {
  //[GET] /Brand
  GetBrand = async (req, res, next) => {
    Brand.find({})
      .then((course) => {
        console.log("cour", course);
        res.status(200).json(course);
      })
      .catch(() => {
        console.log(error);
        res.status(500).send({
          message: "Lỗi khi tìm kiếm các brand",
          error: error.message,
        });
      });
  };

  //[Get] /Brand/:id/Details
  GetBrandDetails = async (req, res, next) => {
    Brand.findById(req.params.id)
      .then((brand) => {
        res.status(200).send({
          message: "success",
          data: brand,
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
}

module.exports = new BrandControllers();
