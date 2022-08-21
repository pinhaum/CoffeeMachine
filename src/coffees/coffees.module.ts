import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { CoffeeCreateService } from './services/coffeeCreate.service';
import { CoffeeFinderService } from './services/coffeeFinder.service';
import { CoffeeDeleterService } from './services/coffeeDeleter.service';
import { CoffeeUpdaterService } from './services/coffeeUpdater.service';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
  controllers: [CoffeesController],
  providers: [
    CoffeeCreateService,
    CoffeeFinderService,
    CoffeeDeleterService,
    CoffeeUpdaterService,
  ],
})
export class CoffeesModule {}
