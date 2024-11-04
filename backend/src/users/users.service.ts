import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({ email, password: hashedPassword });
    return this.usersRepository.save(user);
  }

  async findOne(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email }) ?? undefined;
  }
}

