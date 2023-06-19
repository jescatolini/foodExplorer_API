const FavoriteRepository = require("../repositories/favorite/FavoriteRepository");
const FavoriteCreateService = require("../services/favorite/FavoriteCreateService");
const FavoriteIndexService = require("../services/favorite/FavoriteIndexService");
const FavoriteDeleteService = require("../services/favorite/FavoriteDeleteService");

class FavoritesControllers {
  async create(req, res) {
    const user_id = req.user.id;
    const { meal_id } = req.params;

    const favoriteRepository = new FavoriteRepository();
    const favoriteCreateService = new FavoriteCreateService(favoriteRepository);

    await favoriteCreateService.execute({ user_id, meal_id });

    return res.status(201).json();
  }

  async index(req, res) {
    const user_id = req.user.id;

    const favoriteRepository = new FavoriteRepository();
    const favoriteIndexService = new FavoriteIndexService(favoriteRepository);

    const result = await favoriteIndexService.execute(user_id);

    return res.json(result);
  }

  async delete(req, res) {
    const user_id = req.user.id;
    const { meal_id } = req.params;

    const favoriteRepository = new FavoriteRepository();
    const favoriteDeleteService = new FavoriteDeleteService(favoriteRepository);

    await favoriteDeleteService.execute({ user_id, meal_id });

    return res.status(201).json();
  }
}

module.exports = FavoritesControllers;