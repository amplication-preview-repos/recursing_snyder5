/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { Type } from "class-transformer";
import { CatalogCreateNestedManyWithoutStoresInput } from "./CatalogCreateNestedManyWithoutStoresInput";

@InputType()
class StoreCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => SellerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SellerWhereUniqueInput)
  @IsOptional()
  @Field(() => SellerWhereUniqueInput, {
    nullable: true,
  })
  seller?: SellerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CatalogCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => CatalogCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => CatalogCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  catalogs?: CatalogCreateNestedManyWithoutStoresInput;
}

export { StoreCreateInput as StoreCreateInput };