import { Module } from '@nestjs/common';
import { Services/contractServiceController } from './services/contract-service.controller';
import { Services/contractServiceService } from './services/contract-service.service';

@Module({
  imports: [],
  controllers: [Services/contractServiceController],
  providers: [Services/contractServiceService],
})
export class Services/contractServiceModule {}
