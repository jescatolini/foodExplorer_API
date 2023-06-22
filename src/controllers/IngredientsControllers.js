const IngredientsRepository = require("../repositories/ingredients/IngredientRepository");
const IngredientCreateService = require("../services/ingredient/IngredientCreateService");

class IngredientsControllers {
  async create(req, res) {
    const { name } = req.body;

    const ingredientsRepository = new IngredientsRepository();
    const ingredientCreateService = new IngredientCreateService(
      ingredientsRepository
    );

    const ingredientInfos = await ingredientCreateService.execute({ name });

    return res.status(201).json(ingredientInfos);
  }

  async index(req, res) {
    const ingredientsRepository = new IngredientsRepository();

    const result = await ingredientsRepository.index();

    return res.json(result);
  }
}

module.exports = IngredientsControllers;