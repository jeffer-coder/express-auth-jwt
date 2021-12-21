import { getRepository } from "typeorm"
import { CreateUserDto } from "../dto/user/create-user.dto"
import { User } from "../entity/user.entity"
import { hash, compare } from 'bcrypt'
import { UpdateUserDto } from "../dto/user/update-user-dto"
import { sign } from "../utils/jwt.util"

export default {

    create: async function (createDto: CreateUserDto) {
        const repository = getRepository(User)

        const alreadyUsername = await this.findByUsername(createDto.username)
        if (alreadyUsername) throw new Error('username is already in use')

        const alreadyEmail = await this.findByEmail(createDto.email)
        if (alreadyEmail) throw new Error('email is already registered')

        createDto.password = await hash(createDto.password, 10)
        return await repository.save(createDto)
    },

    find: async function () {
        const repository = getRepository(User)
        return await repository.find({ select: ['id', 'username', 'email'] })
    },

    update: async function (id: string, updateDto: UpdateUserDto) {
        const repository = getRepository(User)
        const user = await this.findById(id)
        return await repository.update({ id: user.id }, updateDto)
    },

    findById: async function (id: string) {
        const repository = getRepository(User)

        const user = await repository.findOne({ where: { id }, select: ['id', 'username', 'email'] })

        if (!user) throw new Error('user not found')

        return user
    },

    delete: async function (id: string) {
        const repository = getRepository(User)
        const user = await this.findById(id)
        return await repository.delete({ id: user.id })
    },

    findByEmail: function (email: string) {
        const repository = getRepository(User)
        return repository.findOne({ email })
    },

    findAndAuthenticate: async function (email: string, password: string) {
        const user = await this.findByEmail(email)

        if (!user || !await compare(password, user.password)) {
            throw new Error("email or password is incorrect")
        }

        const token = sign({ user: user.id })

        return {
            id: user.id,
            username: user.username,
            email: user.email,
            token
        }
    },

    findByUsername: async function (username: string) {
        const repository = getRepository(User)
        return await repository.findOne({ username })
    }

}