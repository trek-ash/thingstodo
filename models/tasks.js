module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      category:{
        type: Sequelize.STRING
      },
      username:{
        type: Sequelize.STRING,
        required: true
      },
      done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  
    return Task;
  };