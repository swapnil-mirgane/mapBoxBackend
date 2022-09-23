export class CreateMapDto {
    id:number
    Lat:string;
    Long:string;
    Name:string;
    City_Name:string
}
// import { IsOptional } from "class-validator";
// import { Polygon, Position } from "geojson";

// export class CreateParcelPointDto { 
//     @IsOptional()
//     position?:number[][]
//     polygon?: Polygon;
//     //createParcelPointDto: Position[];

    
// }
