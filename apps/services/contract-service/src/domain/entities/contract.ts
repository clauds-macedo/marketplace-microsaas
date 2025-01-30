export interface IContract {
  id: string;
  employeeId: string;
  employeeName: string;
  employeePosition: string;
  signed: boolean;
}

export class Contract implements IContract {
  id: string;
  employeeId: string;
  employeeName: string;
  employeePosition: string;
  signed: boolean;

  constructor(params: IContract) {
    Object.assign(this, params);
  }

  static create(
    employeeId: string,
    employeeName: string,
    employeePosition: string,
  ): Contract {
    return new Contract({
      id: Date.now().toString(),
      employeeId,
      employeeName,
      employeePosition,
      signed: false,
    });
  }
}
