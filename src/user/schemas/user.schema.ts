import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: false,
})
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  phone: string;

  @Prop()
  city: string;

  @Prop()
  about: string;

  @Prop()
  image: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
