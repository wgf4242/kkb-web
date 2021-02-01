// const Sequelize = require("sequelize");
// module.exports.initModel = async sequelize => {
//   var Product = sequelize.define("Product", { title: Sequelize.STRING(100) }, { timestamps: false });
//   var User = sequelize.define("User", { name: Sequelize.STRING(100) }, { timestamps: false });

//   User.hasMany(Product, { as: "products" });
//   Product.belongsTo(User);

//   await sequelize.sync();

//   return { User, Product };
// };


const Sequelize = require("sequelize");
module.exports.initModel = async sequelize => {
  // ##BEGIN##
  User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: Sequelize.STRING,
  });

  Product = sequelize.define("product", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  Product.belongsTo(User, {
    constraints: true,
    onDelete: "CASCADE",
  });
  User.hasMany(Product);
  await sequelize.sync(true); // ##END##
  return { User, Product };
}; 

// const sequelize = new Sequelize("test", "root", "root", {
//   host: "localhost",
//   dialect: "mysql",
// });
// (async () => {
//   const { initModel } = module.exports;
//   const { Product, User } = await initModel(sequelize);

//   // 设置数据
//   user = await User.create({
//     name: "Tom",
//   });
//   await user.createProduct({
//     title: "商品一",
//   });
//   await user.createProduct({
//     title: "商品二",
//   });
//   const ret = await Product.findAll({
//     attributes: ["title"],
//   });

//   console.log(ret);
// })();
