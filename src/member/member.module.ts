import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberSchema } from './member';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'member', schema: MemberSchema,
    }])],
  controllers: [MemberController],
  providers: [MemberService]
})
export class MemberModule { }
