import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateEmployeeDTO } from '../../../employee/infra/validators/dtos/create-employee-dto';

@Injectable()
export class RequestContractUseCase {
  constructor(
    @Inject('CONTRACT_SERVICE') private contractService: ClientProxy,
  ) {}

  async createContract(employee: CreateEmployeeDTO) {
    try {
      console.log(
        '🚀 Enviando evento de criação de contrato para Contract Service:',
        employee,
      );
      this.contractService.emit('create_contract', employee);
    } catch (e) {
      console.error('❌ Erro ao enviar mensagem para Contract Service:', e);
      return { status: 'error', message: e.message };
    }
  }

  async getContract(employeeId: string) {
    console.log('📩 Solicitando contrato para funcionário:', employeeId);
    try {
      return this.contractService.emit('get_contract', employeeId);
    } catch (e) {
      console.error('❌ Erro ao buscar contrato no Contract Service:', e);
      return { status: 'error', message: e.message };
    }
  }
}
