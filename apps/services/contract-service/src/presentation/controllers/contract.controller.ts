import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateContractUseCase } from '../../domain/usecases/create-contract-use-case';
import { GetContractUseCase } from '../../domain/usecases/get-contract-use-case';

@Controller()
export class ContractController {
  private readonly logger = new Logger(ContractController.name);

  constructor(
    private readonly createContractUseCase: CreateContractUseCase,
    private readonly getContractUseCase: GetContractUseCase,
  ) {}

  @MessagePattern('create_employee')
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

  @MessagePattern('get_contract')
  async getContract(@Payload() payload: string) {
    this.logger.log(
      `📩 Pedido de contrato recebido: ${JSON.stringify(payload)}`,
    );
    const contract = await this.getContractUseCase.execute(
      payload,
    );
    console.log(contract, 'contract')
    return contract ? { status: 'found', contract } : { status: 'not_found' };
  }
}
