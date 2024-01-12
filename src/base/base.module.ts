import { Module } from '@nestjs/common';
import { BaseUpdate, StartUpdate } from './base.update';
import { BaseService } from './base.service';
import { UserModule } from 'src/users/user.module';

@Module({
    imports: [UserModule],
    providers: [BaseUpdate, BaseService, StartUpdate]
})
export class BaseModule {}
