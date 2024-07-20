import * as graphql from "@nestjs/graphql";
import { RsaKeyPairDto } from "../keyManagement/RsaKeyPairDto";
import { KeyManagementService } from "./keymanagement.service";

export class KeyManagementResolver {
  constructor(protected readonly service: KeyManagementService) {}

  @graphql.Mutation(() => RsaKeyPairDto)
  async GenerateRsaKeyPair(
    @graphql.Args()
    args: RsaKeyPairDto
  ): Promise<RsaKeyPairDto> {
    return this.service.GenerateRsaKeyPair(args);
  }

  @graphql.Query(() => String)
  async GetPublicKey(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetPublicKey(args);
  }

  @graphql.Query(() => String)
  async RetrieveUserPublicKey(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RetrieveUserPublicKey(args);
  }

  @graphql.Mutation(() => RsaKeyPairDto)
  async StorePublicKey(
    @graphql.Args()
    args: RsaKeyPairDto
  ): Promise<RsaKeyPairDto> {
    return this.service.StorePublicKey(args);
  }
}
