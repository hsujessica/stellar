const pg = require('pg');
const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/todos', {
  logging: false
});

const User = db.define('users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Feature = db.define('features', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  votes: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  siteURL: {
    type: Sequelize.STRING
  },
  imgURL: {
    type: Sequelize.STRING
  }
});

module.exports = {db, User, Feature};
