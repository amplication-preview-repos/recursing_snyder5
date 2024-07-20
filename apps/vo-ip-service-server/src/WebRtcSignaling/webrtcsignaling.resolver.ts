import * as graphql from "@nestjs/graphql";
import { RsaKeyPairDto } from "../keyManagement/RsaKeyPairDto";
import { WebRtcSignalingService } from "./webrtcsignaling.service";

export class WebRtcSignalingResolver {
  constructor(protected readonly service: WebRtcSignalingService) {}

  @graphql.Mutation(() => RsaKeyPairDto)
  async HandleIceCandidate(
    @graphql.Args()
    args: RsaKeyPairDto
  ): Promise<RsaKeyPairDto> {
    return this.service.HandleIceCandidate(args);
  }

  @graphql.Mutation(() => RsaKeyPairDto)
  async HandleWebRtcAnswer(
    @graphql.Args()
    args: RsaKeyPairDto
  ): Promise<RsaKeyPairDto> {
    return this.service.HandleWebRtcAnswer(args);
  }

  @graphql.Mutation(() => RsaKeyPairDto)
  async HandleWebRtcOffer(
    @graphql.Args()
    args: RsaKeyPairDto
  ): Promise<RsaKeyPairDto> {
    return this.service.HandleWebRtcOffer(args);
  }
}
