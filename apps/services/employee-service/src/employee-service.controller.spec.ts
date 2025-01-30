import { Test, TestingModule } from '@nestjs/testing';
import { Services/employeeServiceController } from './services/employee-service.controller';
import { Services/employeeServiceService } from './services/employee-service.service';

describe('Services/employeeServiceController', () => {
  let services/employeeServiceController: Services/employeeServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Services/employeeServiceController],
      providers: [Services/employeeServiceService],
    }).compile();

    services/employeeServiceController = app.get<Services/employeeServiceController>(Services/employeeServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(services/employeeServiceController.getHello()).toBe('Hello World!');
    });
  });
});
