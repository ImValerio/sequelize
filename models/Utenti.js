module.exports = (sequelize,DataTypes) =>{
    const Utenti = sequelize.define("Utenti",{
        nome: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING 
        },
        password: {
            type: DataTypes.STRING
        },
        citta: {
            type: DataTypes.STRING
        },
    })

    Utenti.associate = models =>{
        Utenti.hasMany(models.Pagamenti,{
            foreignKey:{
                allowNull: false,
            },
        })
    }

    return Utenti;
}