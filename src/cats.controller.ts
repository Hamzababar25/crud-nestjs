import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import {CatsService} from "./cats.service";
import { Cat } from './/cat.schema';




export class CreateCatDto {
    name: string;
    age: number;
    breed: string;
   
  
  }

  @Controller('cats')
export class CatController {
    constructor(private readonly catsService: CatsService) {}
     @Post()
async create(@Body() createCatDto: CreateCatDto) {
   return this.catsService.createCat(createCatDto)

}

@Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
}
@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}