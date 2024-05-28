import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { }

@Module({
  imports: [CarModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
