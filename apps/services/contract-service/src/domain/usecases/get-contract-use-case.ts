import { Contract } from "../entities/contract";
import { IContractRepository } from "../repositories/contract-repository";

export class GetContractUseCase {
  constructor(private contractRepository: IContractRepository) {}

  async execute(employeeId: string): Promise<Contract | null> {
    return this.contractRepository.findByEmployeeId(employeeId);
  }
}
