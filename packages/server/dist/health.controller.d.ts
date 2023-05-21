import { Response } from 'express';
export declare class HealthController {
    constructor();
    healthCheck(response: Response): Response<any, Record<string, any>>;
}
