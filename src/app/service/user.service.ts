import { getRepository } from "typeorm"
import { validationResult } from 'express-validator'
import { CreateUserDto } from "../dto/user/create-user.dto"
import { User } from "../entity/user.entity"
import { hash } from 'bcrypt'
import { UpdateUserDto } from "../dto/user/update-user-dto"
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
        return await repository.update({id:user.id}, updateDto)
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
        return await repository.delete({id:user.id})
    },

    findByEmail: async function (email: string) {
        const repository = getRepository(User)
        return await repository.findOne({ email })
    },

    findByUsername: async function(username: string) {
        const repository = getRepository(User)
        return await repository.findOne({username})
    }

}