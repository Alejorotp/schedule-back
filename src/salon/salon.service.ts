import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSalonDto, UpdateSalonDto } from './crud-salon.dto';

@Injectable()
export class SalonService {
	constructor(private PrismaService: PrismaService) {}

	async create(data: CreateSalonDto) {
		return this.PrismaService.salon.create({
			data,
		});
	}

	async findAll() {
		return this.PrismaService.salon.findMany();
	}

	async findOne(id: number) {
		const salon = await this.PrismaService.salon.findUnique({
			where: { id },
		});
		if (!salon) {
			throw new NotFoundException(`Salón con id ${id} no encontrado`);
		}
		return salon;
	}

	async update(id: number, data: UpdateSalonDto) {
		const salon = await this.PrismaService.salon.findUnique({
			where: { id },
		});
		if (!salon) {
			throw new NotFoundException(`Salón con id ${id} no encontrado`);
		}
		return this.PrismaService.salon.update({
			where: { id },
			data,
		});
	}

	async remove(id: number) {
		const salon = await this.PrismaService.salon.findUnique({
			where: { id },
		});
		if (!salon) {
			throw new NotFoundException(`Salón con id ${id} no encontrado`);
		}
		return this.PrismaService.salon.delete({
			where: { id },
		});
	}
}