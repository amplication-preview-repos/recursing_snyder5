import { Injectable } from "@nestjs/common";
import { RsaKeyPairDto } from "../keyManagement/RsaKeyPairDto";

@Injectable()
export class WebRtcSignalingService {
  constructor() {}
  async HandleIceCandidate(args: RsaKeyPairDto): Promise<RsaKeyPairDto> {
    throw new Error("Not implemented");
  }
  async HandleWebRtcAnswer(args: RsaKeyPairDto): Promise<RsaKeyPairDto> {
    throw new Error("Not implemented");
  }
  async HandleWebRtcOffer(args: RsaKeyPairDto): Promise<RsaKeyPairDto> {
    throw new Error("Not implemented");
  }
}
