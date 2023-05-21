import { Controller, Get, Response as InjectReponse } from '@nestjs/common';
import { Response } from 'express';

@Controller('health')
export class HealthController {
  constructor() {}

  @Get()
  healthCheck(@InjectReponse() response: Response) {
    try {
      /**
       * We need to check whether all services that are being used are UP or DOWN.
       * Return 200 if and only if all services are UP else 500.
       */
      return response.status(200).json({
        message: 'SERVER UP',
      });
    } catch (exception) {
      return response.status(500).json({
        message: 'SERVER DOWN',
      });
    }
  }
}
