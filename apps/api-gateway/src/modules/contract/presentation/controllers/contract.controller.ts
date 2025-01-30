import { Controller, Get, Inject, Logger, Param, Patch } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';

@Controller('contracts')
export class ContractController {
  private readonly logger = new Logger(ContractController.name);

  constructor(
    @Inject('CONTRACT_SERVICE') private readonly contractService: ClientProxy,
  ) {}

  @Get(':employeeId')
  @MessagePattern('create_employee')
  async getContract(@Param('employeeId') employeeId: string) {
    this.logger.log(`📩 Buscando contrato do funcionário: ${employeeId}`);
    return this.contractService.emit('get_contract', employeeId);
  }

  @Patch(':contractId/sign')
  async signContract(@Param('contractId') contractId: string) {
    this.logger.log(`🖊️ Assinando contrato: ${contractId}`);
    return this.contractService.emit('sign_contract', contractId);
  }
}
