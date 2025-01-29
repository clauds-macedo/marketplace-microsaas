import { Module } from '@nestjs/common';
import { Services/employeeServiceController } from './services/employee-service.controller';
import { Services/employeeServiceService } from './services/employee-service.service';

@Module({
  imports: [],
  controllers: [Services/employeeServiceController],
  providers: [Services/employeeServiceService],
})
export class Services/employeeServiceModule {}
