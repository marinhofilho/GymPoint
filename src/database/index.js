import Sequelize from 'sequelize';

import User from '../app/models/User';

import Student from '../app/models/Student';

import databaseConfig from '../config/database';

const models = [User, Student];

/* const modelsStudent = [Student]; */

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));

    /* modelsStudent.map(model => model.init(this.connection)); */
  }
}

export default new Database();
