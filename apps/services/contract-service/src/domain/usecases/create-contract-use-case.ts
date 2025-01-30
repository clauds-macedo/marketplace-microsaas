import { Contract } from '../../domain/entities/contract';
import { IContractRepository } from '../repositories/contract-repository';

export class CreateContractUseCase {
  constructor(private contractRepository: IContractRepository) {}

  async execute(
    employeeId: string,
    employeeName: string,
    employeePosition: string,
  ): Promise<Contract> {
    const contract = Contract.create(
      employeeId,
      employeeName,
      employeePosition,
    );
    return this.contractRepository.create(contract);
  }
}
