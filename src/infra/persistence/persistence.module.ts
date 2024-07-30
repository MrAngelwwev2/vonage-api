import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from './mongoose/mongoose.module';

interface DatabaseOptions {
    type: 'prisma' | 'mongoose';
    global?: boolean;
}

@Module({})
export class PersistenceModule {
    static async register({ global = false, type }: DatabaseOptions): Promise<DynamicModule> {
        return {
            global,
            module: PersistenceModule,
            imports: [ MongooseModule],
            exports: [MongooseModule],
        };
    };
}