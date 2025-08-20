import { Controller } from '@nestjs/common';
import { SalonService } from './salon.service';

@Controller('salon')
export class SalonController {
  constructor(private readonly salonService: SalonService) {}
}
