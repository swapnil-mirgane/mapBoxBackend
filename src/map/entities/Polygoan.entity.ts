import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { Polygon } from "geojson";
import { IsOptional } from "class-validator";

@Entity({ name: 'parcels' })
export class Parcel {

    @PrimaryGeneratedColumn('uuid')
    id: string

@Column()
City_Name:String;
    @Index({ spatial: true })
    @Column({
        type: 'geography',
        spatialFeatureType: 'Polygon',
        srid:4326,
        nullable: true
    })

    polygon:Polygon;

    @IsOptional()
    position?:number[][]

}