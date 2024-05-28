import { Injectable } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CarFavoriteEntity } from './entities/car.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarFavoriteEntity)
    private carFavoriteRepository: Repository<CarFavoriteEntity>,
  ) {}

  async search(
    searchTerm: string,
    orderField: string,
    orderDirection: 'ASC' | 'DESC',
    page: number,
    limit: number,
  ) {
    const [results, total] = await this.carFavoriteRepository.findAndCount({
      where: { brand: ILike(`%${searchTerm}%`) },
      order: { [orderField]: orderDirection },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      results,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalRecords: total,
    };
  }
}