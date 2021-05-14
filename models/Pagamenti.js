module.exports = (sequelize,DataTypes) =>{
    const Pagamenti = sequelize.define("Pagamenti",{
        nome: {
            type: DataTypes.STRING
        },
        valore: {
            type: DataTypes.STRING 
        }
    })

    Pagamenti.associate = models =>{
        Pagamenti.belongsTo(models.Utenti,{
            foreignKey:{
                allowNull: false,
            },
            onDelete: 'CASCADE',


        })
    }

    return Pagamenti;
}