module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    department: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.BOOLEAN,
    cashforceAdm: DataTypes.BOOLEAN,
  },
  {
    tableName: 'users',
  });

  return User;
};