import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateMapDto } from './dto/create-map.dto';
import { geographyData } from './entities/map.entity';
import { Parcel } from './entities/Polygoan.entity';
import { Polygon } from 'geojson';

@Injectable()
export class MapService {
  constructor(@InjectRepository(geographyData)
  private readonly geographyReposatory:Repository<geographyData>,
  @InjectRepository(Parcel)
  private readonly parcel: Repository<any>  
  
  ){}


   create(createMapDto: CreateMapDto):Promise<geographyData> {
  
  
       return this.geographyReposatory.save(createMapDto);
  }



  findAll():Observable<geographyData[]> {
    return from (this.geographyReposatory.find());
  }






  async createParcelPoint(createParcelPointDto:Parcel): Promise<any> {

//  const { polygon} = createParcelPointDto;

// console.log(createParcelPointDto,"DTO")

    const polygon = {
        type: 'Polygon',
        coordinates: [createParcelPointDto.position] //Need one more dimension here.
    }

  console.log(polygon)

 const parcel = this.parcel.create({City_Name:createParcelPointDto.City_Name, polygon})

  await this.parcel.save(parcel)
 return parcel
}

 
}
