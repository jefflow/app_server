import { Sequelize }  from "sequelize";

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/sachacks2020', 
{
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });
  
export default sequelize;