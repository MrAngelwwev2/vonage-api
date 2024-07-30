import { Module } from '@nestjs/common';

// Non exported
import { EnvModule } from '@app/infra/env';
import { SpeechService } from './speech.service';

@Module({
    imports: [
        EnvModule
    ],
    providers: [
        SpeechService,
    ],
    exports: [],
})
export class AzureModule { }