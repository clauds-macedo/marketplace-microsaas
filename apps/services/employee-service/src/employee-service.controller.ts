import { Controller, Get } from '@nestjs/common';
import { Services/employeeServiceService } from './services/employee-service.service';

@Controller()
export class Services/employeeServiceController {
  constructor(private readonly services/employeeServiceService: Services/employeeServiceService) {}

  @Get()
  getHello(): string {
    return this.services/employeeServiceService.getHello();
  }
}
