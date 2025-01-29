import { Controller, Get } from '@nestjs/common';
import { Services/contractServiceService } from './services/contract-service.service';

@Controller()
export class Services/contractServiceController {
  constructor(private readonly services/contractServiceService: Services/contractServiceService) {}

  @Get()
  getHello(): string {
    return this.services/contractServiceService.getHello();
  }
}
