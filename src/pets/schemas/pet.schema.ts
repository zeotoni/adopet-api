import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: false,
})
export class Pet {
  @Prop()
  name: string;

  @Prop()
  age: string;

  @Prop()
  port: string;

  @Prop()
  characteristics: string;

  @Prop()
  adress: string;

  @Prop()
  imageDescription: string;

  @Prop()
  image: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
