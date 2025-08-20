import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { SalonService } from './salon.service';
import { CreateSalonDto, UpdateSalonDto } from './crud-salon.dto';

@Controller('salones')
export class SalonController {
  constructor(private readonly salonService: SalonService) {}

  @Get()
  findAll() {
    return this.salonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.salonService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateSalonDto) {
    return this.salonService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateSalonDto,
  ) {
    return this.salonService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.salonService.remove(id);
  }
}
