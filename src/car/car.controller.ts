import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('api/car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async search(
    @Query('searchTerm') searchTerm: string,
    @Query('orderField') orderField: string = 'name',
    @Query('orderDirection') orderDirection: 'ASC' | 'DESC' = 'ASC',
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    try {
      const result = await this.carService.search(
        searchTerm,
        orderField,
        orderDirection,
        page,
        limit,
      );
      return result;
    } catch (error) {
      return {
        message: 'Error occurred during search',
        error: error.message,
      };
    }
  }
}