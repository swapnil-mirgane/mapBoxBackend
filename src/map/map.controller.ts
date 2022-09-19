import { Controller, Get, Post, Body, UseInterceptors, UploadedFile} from '@nestjs/common';
import { MapService } from './map.service';
import { CreateMapDto } from './dto/create-map.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import path from 'path';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Post()
  create(@Body() createMapDto: CreateMapDto) {
    return this.mapService.create(createMapDto);
  }

  @Get()
  findAll() {
    return this.mapService.findAll();
  }

  @Post('upload')
@UseInterceptors(FileInterceptor('file',{storage:diskStorage({
  destination:'./uploads',filename:(req,file,cd)=>{
    const fileName:string=path.parse(file.originalname).name
  }
})}))


uploadFile(@UploadedFile() file: Express.Multer.File) {
  
}

}
