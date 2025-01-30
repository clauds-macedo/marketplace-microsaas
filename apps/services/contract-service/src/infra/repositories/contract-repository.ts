import { Injectable } from '@nestjs/common';
import { Contract } from '../../domain/entities/Contract';
import { IContractRepository } from '../../domain/repositories/contract-repository';

@Injectable()
export class ContractRepository implements IContractRepository {
  private contracts: Contract[] = [];

  async create(contract: Contract): Promise<Contract> {
    this.contracts.push(contract);
    return contract;
  }

  async findByEmployeeId(employeeId: string): Promise<Contract | null> {
    return (
      this.contracts.find((contract) => contract.employeeId === employeeId) ||
      null
    );
  }
}
