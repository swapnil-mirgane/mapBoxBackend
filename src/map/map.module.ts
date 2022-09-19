import { Module } from '@nestjs/common';
import { MapService } from './map.service';
import { MapController } from './map.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { geographyData } from './entities/map.entity';

@Module({
  controllers: [MapController],
  providers: [MapService],
  imports:[TypeOrmModule.forFeature([geographyData])]
})
export class MapModule {}
