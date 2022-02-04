module.exports = (sequelize, dataTypes) => {
    let alias = 'Operation';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        //created_at: dataTypes.TIMESTAMP,
        //updated_at: dataTypes.TIMESTAMP,
        user_id: {
            type: dataTypes.INTEGER(100),
            allowNull: false
        },
        type: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        concept: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(100),
            allowNull: false
        },
        amount: dataTypes.DECIMAL(10,2)
    };
    let config = {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }
    const Operation = sequelize.define(alias, cols, config); 

    Operation.associate = function (models) {
        Operation.belongsTo(models.User, { 
            as: "users",
            foreignKey: "user_id"
        })
    }

    return Operation
};