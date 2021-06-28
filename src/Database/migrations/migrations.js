module.exports = {
  up: (QueryInterface, Sequelize) => {
    return QueryInterface.createTable("Products", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      categories: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,

        allowNull: false,
      },
      brand: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    });
  },
  down: (QueryInterface) => {
    return QueryInterface.dropTable("Products");
  },
};
