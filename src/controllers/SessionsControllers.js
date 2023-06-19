const UserRepository = require("../repositories/user/UserRepository");
const SessionCreateService = require("../services/session/SessionCreateService");

class SessionsControllers {
  async create(req, res) {
    const { email, password } = req.body;

    const userRepository = new UserRepository();
    const sessionCreateService = new SessionCreateService(userRepository);

    const result = await sessionCreateService.execute({ email, password });

    return res.json(result);
  }
}

module.exports = SessionsControllers;