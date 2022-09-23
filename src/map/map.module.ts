import { Module } from '@nestjs/common';
import { MapService } from './map.service';
import { MapController } from './map.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { geographyData } from './entities/map.entity';
import { MulterModule } from '@nestjs/platform-express';
import { map } from 'rxjs';
import { CsvModule } from 'nest-csv-parser';
import { Parcel } from './entities/Polygoan.entity';

@Module({
  controllers: [MapController],
  providers: [MapService],
 
    imports: [TypeOrmModule.forFeature([geographyData,Parcel]),CsvModule,MulterModule.register({
      dest: './map-database',
    }),
  ],
})
export class MapModule {}
