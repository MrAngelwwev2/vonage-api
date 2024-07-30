
import { EnvService } from '@app/infra/env';
import { Injectable } from '@nestjs/common';
import twilio from 'twilio';
@Injectable()
export class TwilioService {
    constructor(
        private envService: EnvService
    ) { }

    getInstance()  {
        const TWILIO_ACCOUNT_SID = this.envService.get("TWILIO_ACCOUNT_SID");
        const TWILIO_AUTH_TOKEN = this.envService.get("TWILIO_AUTH_TOKEN");

        const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

        return client
    }
}
