
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type ConversationDocument = HydratedDocument<Conversation>;

@Schema()
export class Conversation {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  idCaller: ObjectId;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  idAgent: ObjectId;

  @Prop()
  messages: {
    author: ObjectId
    audioUrl: string
    src_text: string
    src_lang: string
    tgt_text: string
    tgt_lang: string
    createdAt: Date
  }[];

  @Prop()
  startedAt: Date;

  @Prop()
  endedAt: Date


}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
