import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'cars_alexanderhernandez'})
export class CarFavoriteEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    color: string;

    @Column()
    combustion_type: string;
}
