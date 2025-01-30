import { Contract } from '../entities/contract';

export interface IContractRepository {
  create(contract: Contract): Promise<Contract>;
  findByEmployeeId(employeeId: string): Promise<Contract | null>;
}
