import User from '../models/User';

class UserController {
  async store(req, res) {
    const emailCheck = await User.findOne({ where: { email: req.body.email } });

    if (emailCheck) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    console.log(req.userId);
    return res.json({ status: 'OK' });
  }
}

export default new UserController();
