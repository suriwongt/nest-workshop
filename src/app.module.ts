import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberModule } from './member/member.module';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb://root:rYkrfElouSZeIy1w@workshop0-shard-00-00.8m7tl.mongodb.net:27017,workshop0-shard-00-01.8m7tl.mongodb.net:27017,workshop0-shard-00-02.8m7tl.mongodb.net:27017/dev?authSource=admin&replicaSet=atlas-qdwbul-shard-0&ssl=true&retryWrites=true&w=majority"
  ),
    MemberModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
