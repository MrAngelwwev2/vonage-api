
import { Module } from '@nestjs/common';
import { TwilioModule } from './twilio/twilio.module';
import { VonageModule } from './vonage/vonage.module';

@Module({
    imports: [TwilioModule, VonageModule],
    exports: [TwilioModule, VonageModule],
})
export class VoiceProviderModule { }
