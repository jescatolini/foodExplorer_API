const IngredientsRepository = require("../repositories/ingredients/IngredientRepository");

const MealRepository = require("../repositories/meal/MealRepository");
const MealCreateService = require("../services/meal/MealCreateService");
const MealUpdateService = require("../services/meal/MealUpdateService");
const MealIndexBySearchService = require("../services/meal/MealIndexBySearchService");
const MealShowService = require("../services/meal/MealShowService");
const MealDeleteService = require("../services/meal/MealDeleteService");

const Meal_IngredientRepository = require("../repositories/meal_ingredient/Meal_IngredientRepository");
const MealIngredientCreateService = require("../services/meal_ingredient/MealIngredientCreateService");
const MealIngredientUpdateService = require("../services/meal_ingredient/MealIngredientUpdateService");

class MealsControllers {
  async create(req, res) {
    const { title, category, description, price, ingredients } = req.body;

    const mealRepository = new MealRepository();
    const mealCreateService = new MealCreateService(mealRepository);

    const meal_IngredientRepository = new Meal_IngredientRepository();
    const mealIngredientCreateService = new MealIngredientCreateService(
      meal_IngredientRepository
    );

    const mealId = await mealCreateService.execute({
      title,
      category,
      description,
      price,
    });

    await mealIngredientCreateService.execute({ ingredients, mealId });

    return res
      .status(201)
      .json({ id: mealId, title, category, description, price, ingredients });
  }

  async index(req, res) {
    const { search } = req.query;

    const mealRepository = new MealRepository();
    const mealIndexBySearchService = new MealIndexBySearchService(
      mealRepository
    );

    const result = await mealIndexBySearchService.execute(search);
    return res.status(201).json(result);
  }

  async show(req, res) {
    const { meal_id } = req.params;

    const mealRepository = new MealRepository();
    const ingredientsRepository = new IngredientsRepository();
    const mealShowService = new MealShowService(
      mealRepository,
      ingredientsRepository
    );

    const result = await mealShowService.execute(meal_id);

    return res.status(201).json(result);
  }

  async update(req, res) {
    const { title, description, price, ingredients } = req.body;
    const { meal_id } = req.params;

    const mealRepository = new MealRepository();
    const mealUpdateService = new MealUpdateService(mealRepository);

    const meal_IngredientRepository = new Meal_IngredientRepository();
    const mealIngredientUpdateService = new MealIngredientUpdateService(
      meal_IngredientRepository
    );

    await mealUpdateService.execute({
      meal_id,
      title,
      description,
      price,
      ingredients,
    });

    await mealIngredientUpdateService.execute({ meal_id, ingredients });

    return res.status(201).json();
  }

  async delete(req, res) {
    const { meal_id } = req.params;

    const mealRepository = new MealRepository();
    const mealDeleteService = new MealDeleteService(mealRepository);

    await mealDeleteService.execute(meal_id);

    return res.status(201).json();
  }
}

module.exports = MealsControllers;