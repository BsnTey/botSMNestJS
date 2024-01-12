import { Module } from '@nestjs/common';
import { ProfileUpdate } from './profile.update';
import { ProfileService } from './profile.service';
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [UserModule],
  providers: [ProfileUpdate, ProfileService]
})
export class ProfileModule {}
