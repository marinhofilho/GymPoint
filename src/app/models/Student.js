import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        altura: Sequelize.INTEGER,
        peso: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    /* this.addHook('beforeSave', async user => {
      if (user.password_hash) {
        user.password_hash = await bcrypt.hash(user.password_hash, 8);
      }
    }); */

    return this;
  }
}

export default Student;
