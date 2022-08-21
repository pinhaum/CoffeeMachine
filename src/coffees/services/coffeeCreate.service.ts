/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from '../dto/create-coffee.dto';
import { Coffee } from '../entities/coffee.entity';

@Injectable()
export class CoffeeCreateService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  execute(createCoffeDto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(createCoffeDto);
    return this.coffeeRepository.save(coffee);
  }
}
