const ImageUpdateService = require("../services/image/ImageUpdateService");
const MealRepository = require("../repositories/meal/MealRepository");
const uploadConfigs = require("../configs/upload");

class MealImageController {
  async update(req, res) {
    const { meal_id } = req.params;
    const imageFilename = req.file.filename;

    const mealRepository = new MealRepository();
    const imageUpdateService = new ImageUpdateService(mealRepository);

    await imageUpdateService.execute({
      id: meal_id,
      imageFilename,
      folder: uploadConfigs.MEALS_FOLDER,
    });

    return res.json();
  }
}

module.exports = MealImageController;