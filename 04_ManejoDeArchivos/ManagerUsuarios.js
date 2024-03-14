const fs = require('fs').promises;

class UserManager {
    static users = [];

    create(data) {
        const user = {
            id:
                UserManager.users.length === 0
                    ? 1
                    : UserManager.users[UserManager.users.length - 1].id +1,
            nombre: data.nombre,
            apellido: data.apellido,
            edad: data.edad,
            curso: data.curso
        };
        UserManager.users.push(user);
        console.log("Se ha creado un usuario");
    }
    read() {
        return UserManager.users
    }

    async managerUsuarios() {
        try {
            const contenido = JSON.stringify(UserManager.users, null, 2);
            await fs.writeFile('./Usuarios.json', 'user');
            console.log('Usuarios guardados con éxito');
        } catch (error) {
            console.log('Error al guardar los usuarios en el archivo', error);
        }
    }
}

const usuarios = new UserManager()

usuarios.create({
    nombre: "Sayuri",
    apellido: "Akino",
    edad: 17,
    curso: "BackEnd"
})

usuarios.create({
    nombre : "Fuyuki",
    apellido: "Minami",
    edad: 17,
    curso: "BackEnd"
})

UserManager.managerUsuarios('./Usuarios.json');

