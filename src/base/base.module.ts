import { Module } from '@nestjs/common';
import { BaseUpdate } from './base.update';
import { BaseService } from './base.service';
import { UserRepository } from 'src/users/repository/user.repository';
import { DatabaseModule } from 'src/database/database.module';
import { ProxyService } from 'src/proxy/proxy.service';

@Module({
    imports: [DatabaseModule],
    providers: [BaseUpdate, BaseService, UserRepository, ProxyService],
    exports: [BaseService]
})
export class BaseModule {}
