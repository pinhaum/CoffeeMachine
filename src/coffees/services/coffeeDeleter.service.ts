/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from '../entities/coffee.entity';
import { CoffeeFinderService } from './coffeeFinder.service';

@Injectable()
export class CoffeeDeleterService {
  private readonly coffeeFinderService: CoffeeFinderService;

  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async remove(id: string) {
    console.log(id);

    const coffee = await this.coffeeFinderService.findOne(id);
    console.log(coffee);

    return this.coffeeRepository.remove(coffee);
  }
}
