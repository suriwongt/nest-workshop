import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Member {
    @Prop()
    name: string;

    @Prop()
    gender: string;

    @Prop()
    birth_date: Date;
}

export type MemberDocument = Member & Document;

export const MemberSchema = SchemaFactory.createForClass(Member);