import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, EditUserDto } from './dtos';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async getMany() : Promise<User[]> {
        return await this.userRepository.find();
    }

    async getOne(id: number) {
        const user = await this.userRepository.findOne({
            where: {
                id,
            },
        });

        if(!user) throw new NotFoundException('Usuario no encontrado');

        return user;
    }

    async createOne(dto: CreateUserDto){
        const user = this.userRepository.create(dto as any);
        return await this.userRepository.save(user);
    }

    async editOne(id: number, dto: EditUserDto) {
        const user = await this.userRepository.findOne({
            where: {
                id,
            },
        });

        if(!user) throw new NotFoundException('Usuario no encontrado');

        const editedUser = Object.assign(user, dto);
        return await this.userRepository.save(editedUser);
    }

    async deleteOne(id: number) {
        return await this.userRepository.delete(id);
    }
}
