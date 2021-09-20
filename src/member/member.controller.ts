import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Member } from './member';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {

    constructor(private memberService: MemberService) { }

    @Get()
    async findAll(): Promise<Array<any>> {
        return this.memberService.findAll();
    }

    @Get(':id')
    async findOne(
        @Param("id") id: string
    ): Promise<any> {
        return this.memberService.findOne(id);
    }

    @Post()
    async save(@Body() member: Member): Promise<Member> {
        return await this.memberService.save(member);
    }

    @Patch(':id')
    async update(
        @Param("id") id: string,
        @Body() member: Member
    ): Promise<Member> {
        return await this.memberService.update(id, member);
    }

    @Delete(':id')
    async delete(
        @Param("id") id: string
    ): Promise<any> {
        return await this.memberService.delete(id);
    }

}
