import Sequelize from 'sequelize';

const sequelize = new Sequelize('teste', 'root', 'teste123', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    await sequelize.authenticate();
    console.log('Conexão realizada com sucesso!');
} catch(err) {
    console.log('Falha na conexão');
}

sequelize.close();