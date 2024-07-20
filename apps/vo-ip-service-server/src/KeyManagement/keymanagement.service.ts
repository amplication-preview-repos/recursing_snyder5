import { Injectable } from "@nestjs/common";
import { RsaKeyPairDto } from "../keyManagement/RsaKeyPairDto";

@Injectable()
export class KeyManagementService {
  constructor() {}
  async GenerateRsaKeyPair(args: RsaKeyPairDto): Promise<RsaKeyPairDto> {
    throw new Error("Not implemented");
  }
  async GetPublicKey(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RetrieveUserPublicKey(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async StorePublicKey(args: RsaKeyPairDto): Promise<RsaKeyPairDto> {
    throw new Error("Not implemented");
  }
}
