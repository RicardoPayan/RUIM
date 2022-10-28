import  Sequelize  from "sequelize";

const db = new Sequelize({
    database : process.env.DB_NAME,
    username : 'root',
    password : 'root',
    host:'localhost',
    port: '3306',
    dialect: 'mysql',
    define:{
        timestamps: false,
        freezeTableName: true
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases: false
});

export default db;