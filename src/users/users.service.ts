import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, EditUserDto } from './dtos';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getMany(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  async createOne(data: CreateUserDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(data.password, saltOrRounds);
    data.password = hash;
    const user = this.userRepository.create(data as any);
    return await this.userRepository.save(user);
  }

  async editOne(id: number, dto: EditUserDto) {
    const user = await this.getOne(id);
    const editedUser = Object.assign(user, dto);
    return await this.userRepository.save(editedUser);
  }

  async deleteOne(id: number) {
    await this.getOne(id);
    return await this.userRepository.delete(id);
  }

  async findEmail(mail: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: {
        email: mail,
      },
    });
  }
}
