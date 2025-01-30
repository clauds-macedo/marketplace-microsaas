import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateContractUseCase } from '../../domain/usecases/create-contract-use-case';

@Controller()
export class ContractController {
  private readonly logger = new Logger(ContractController.name);

  constructor(private readonly createContractUseCase: CreateContractUseCase) {}

  @EventPattern('employee_created')
  async createContract(
    @Payload()
    payload: {
      data: { id: string; name: string; position: string };
    },
  ) {
    this.logger.log(
      `📩 Evento recebido no Contract Service: ${JSON.stringify(payload)}`,
    );

    const contract = await this.createContractUseCase.execute(
      payload.data.id,
      payload.data.name,
      payload.data.position,
    );

    this.logger.log(`✅ Contrato gerado: ${JSON.stringify(contract)}`);
    return { status: 'created', contract };
  }
}
