import { Injectable } from '@nestjs/common';

@Injectable()
export class Services/contractServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
