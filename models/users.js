module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        password:   {
            type: Sequelize.STRING,
            required: true
        }
    })

    return User;
};