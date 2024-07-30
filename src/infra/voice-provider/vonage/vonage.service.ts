
import { EnvService } from '@app/infra/env';
import { Injectable } from '@nestjs/common';
import { Vonage } from '@vonage/server-sdk';

type AuthInterface = {
    apiKey: string;
    apiSecret: string;
}

@Injectable()
export class VonageService {
    constructor(
        private envService: EnvService
    ) { }

    getInstance()  {
        const VONAGE_API_KEY= this.envService.get("VONAGE_API_KEY");
        const VONAGE_API_SECRET = this.envService.get("VONAGE_API_SECRET");
        const credentials: AuthInterface = {apiKey: VONAGE_API_KEY, apiSecret: VONAGE_API_SECRET}
        const client = new Vonage(credentials);

        return client
    }

    getPhoneAgent(){
        return this.envService.get("VONAGE_PHONE_NUMBER");
    }
}
