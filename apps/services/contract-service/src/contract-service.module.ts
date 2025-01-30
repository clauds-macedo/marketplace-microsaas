import { Module } from '@nestjs/common';
import { CreateContractUseCase } from './domain/usecases/create-contract-use-case';
import { ContractRepository } from './infra/repositories/contract-repository';
import { ContractController } from './presentation/controllers/contract.controller';

@Module({
  providers: [
    ContractRepository,
    {
      provide: CreateContractUseCase,
      useFactory: (repo: ContractRepository) => new CreateContractUseCase(repo),
      inject: [ContractRepository],
    },
  ],
  controllers: [ContractController],
})
export class ContractServiceModule {}
