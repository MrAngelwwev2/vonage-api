import { Module } from '@nestjs/common';

// Non exported
import { EnvModule } from '@app/infra/env';
import { TwilioService } from './twilio.service';

@Module({
    imports: [
        EnvModule
    ],
    providers: [
        TwilioService,
    ],
    exports: [],
})
export class TwilioModule { }