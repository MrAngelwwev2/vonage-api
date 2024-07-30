import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ContactCenterModule } from './application/contact-center/contact-center.module';
import { PersistenceModule } from './infra/persistence/persistence.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    PersistenceModule.register({
      type: 'mongoose',
      global: true,
    }),
    ContactCenterModule
  ],
})
export class AppModule { }