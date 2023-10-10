import { Module } from '@nestjs/common';
import { BaseUpdate } from './base.update';
import { BaseService } from './base.service';
import { UserRepository } from 'src/users/repository/user.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [BaseUpdate, BaseService, UserRepository],
})
export class BaseModule {}
