import { Module } from '@nestjs/common';

// Non exported
import { EnvModule } from '@app/infra/env';
import { VonageService } from './vonage.service';

@Module({
    imports: [
        EnvModule
    ],
    providers: [
        VonageService,
    ],
    exports: [],
})
export class VonageModule { }