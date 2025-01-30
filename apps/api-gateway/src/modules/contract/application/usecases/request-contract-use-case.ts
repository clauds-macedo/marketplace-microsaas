import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateEmployeeDTO } from '../../../employee/infra/validators/dtos/create-employee-dto';

@Injectable()
export class RequestContractUseCase {
  constructor(
    @Inject('CONTRACT_SERVICE') private contractService: ClientProxy,
  ) {}

  async createContract(employee: CreateEmployeeDTO) {
    console.log(
      '🚀 Enviando evento de criação de contrato para Contract Service:',
      employee,
    );
    try {
      return this.contractService.send('create_employee', employee);
    } catch (e) {
      console.error('❌ Erro ao enviar mensagem para Contract Service:', e);
      return { status: 'error', message: e.message };
    }
  }

  async getContract(employeeId: string) {
    console.log('📩 Solicitando contrato para funcionário:', employeeId);
    try {
      return this.contractService.send('get_contract', employeeId);
    } catch (e) {
      console.error('❌ Erro ao buscar contrato no Contract Service:', e);
      return { status: 'error', message: e.message };
    }
  }
}
