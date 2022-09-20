import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { Point } from 'geojson';
@Entity('geographyData')
export class geographyData {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type: 'double precision'})
    Lat:string;
    @Column({type: 'double precision'})
    Long:string;
    @Column()
    Name:string;
    @Column()
    City_Name:string
    @Index({ spatial: true })
    @Column({
        type: 'geography',
        spatialFeatureType: 'Point',
        srid: 4326,
        nullable: true,
      })
      location: Point;
}
