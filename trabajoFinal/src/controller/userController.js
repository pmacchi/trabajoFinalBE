const UsuarioModel = require("../models/usuarios.models");

const addUserController = async (req, res) => {

    try {
        const { username, password, rol, createChar } = req.body;
        const newUser = new UsuarioModel({ username, password, rol, createChar });
        await newUser.save();
        res.json({ message: 'Usuario creado con exito!' })
    }
    catch (error) {
        console.log(error)
        throw new Error('Error al crear el usuario')
    }
};

    module.exports = { addUserController };