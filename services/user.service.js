const { models } = require('../libs/sequelize');
const boob = require('@hapi/boom')

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const response = await models.User.findAll();

    return response;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user){
        throw boob.notFound('user not found')
    }
    return user;
  }
  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
