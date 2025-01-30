import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateEmployeeDTO } from '../../../employee/infra/validators/dtos/create-employee-dto';
import { RequestContractUseCase } from '../../application/usecases/request-contract-use-case';

@Controller('contracts')
export class ContractController {
  constructor(
    private readonly requestContractUseCase: RequestContractUseCase,
  ) {}

  @Post()
  @EventPattern('create_contract')
  async createContract(@Body() employeeData: CreateEmployeeDTO) {
    console.log('🚀 Enviando solicitação de contrato:', employeeData);
    return this.requestContractUseCase.createContract(employeeData);
  }

  @Get(':employeeId')
  async getContract(@Param('employeeId') employeeId: string) {
    console.log('📩 Solicitando contrato para funcionário:', employeeId);
    return this.requestContractUseCase.getContract(employeeId);
  }
}
