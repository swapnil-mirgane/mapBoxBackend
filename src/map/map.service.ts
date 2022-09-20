import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateMapDto } from './dto/create-map.dto';
import { geographyData } from './entities/map.entity';


@Injectable()
export class MapService {
  constructor(@InjectRepository(geographyData)
  private readonly geographyReposatory:Repository<geographyData>
  ){}
  

   create(createMapDto: CreateMapDto):Promise<geographyData> {
       return this.geographyReposatory.save(createMapDto);
  }



  findAll():Observable<geographyData[]> {
    return from (this.geographyReposatory.find());
  }

 
}
