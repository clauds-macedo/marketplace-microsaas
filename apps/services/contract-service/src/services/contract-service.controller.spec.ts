import { Test, TestingModule } from '@nestjs/testing';
import { Services/contractServiceController } from './services/contract-service.controller';
import { Services/contractServiceService } from './services/contract-service.service';

describe('Services/contractServiceController', () => {
  let services/contractServiceController: Services/contractServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Services/contractServiceController],
      providers: [Services/contractServiceService],
    }).compile();

    services/contractServiceController = app.get<Services/contractServiceController>(Services/contractServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(services/contractServiceController.getHello()).toBe('Hello World!');
    });
  });
});
