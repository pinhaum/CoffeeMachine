import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeeCreateService } from './services/coffeeCreate.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CoffeeFinderService } from './services/coffeeFinder.service';
import { CoffeeUpdaterService } from './services/coffeeUpdater.service';
import { CoffeeDeleterService } from './services/coffeeDeleter.service';

@Controller('coffees')
export class CoffeesController {
  constructor(
    private readonly coffeeCreateService: CoffeeCreateService,
    private readonly coffeeFinderService: CoffeeFinderService,
    private readonly coffeUpdaterService: CoffeeUpdaterService,
    private readonly coffeeDeleterService: CoffeeDeleterService,
  ) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeeFinderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeFinderService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeCreateService.execute(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeUpdaterService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeDeleterService.remove(id);
  }
}
