import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "ep-lively-cell-a4y72868-pooler.us-east-1.aws.neon.tech",
      port: 5432,
      username: "default",
      password: "k6KwDiI0dPOV",
      database: "verceldb",
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        ssl: true,
      },
    }),
  
    CarModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
