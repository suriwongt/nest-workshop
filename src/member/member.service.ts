import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member, MemberDocument } from './member';

@Injectable()
export class MemberService {


    constructor(@InjectModel('member') private memberModel: Model<MemberDocument>) { }

    async findOne(id: string): Promise<Member> {
        return await this.memberModel.findById(id);
    }

    async findAll(): Promise<Member[] | PromiseLike<Member[]>> {
        return await this.memberModel.find();
    }

    async delete(id: string): Promise<Member> {
        return await this.memberModel.findByIdAndDelete(id);
    }
    async update(id: string, member: Member): Promise<Member> {
        return await this.memberModel.findByIdAndUpdate(id, member);
    }

    async save(member: Member): Promise<Member> {
        return await this.memberModel.create(member);
    }


}
