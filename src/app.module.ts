import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [CarsModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
