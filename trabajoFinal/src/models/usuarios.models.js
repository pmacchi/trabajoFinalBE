const { Schema, Mongoose, default: mongoose } = require("mongoose");

const UsuarioSchema = new Schema({

    username: {
        type: String,
        required: [true, "El username es obligatorio"],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"],
    },

    rol: {
        type: String,
        default: 'PLAYER',
        enum: ['GAME_MASTER', 'PLAYER']
    },

    createChar: {
        type: Date,
        default: Date.now

    }

})


const UsuarioModel = mongoose.model('usuario', UsuarioSchema);

module.exports = UsuarioModel;


