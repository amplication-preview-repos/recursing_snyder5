import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { WebRtcSignalingService } from "./webrtcsignaling.service";
import { RsaKeyPairDto } from "../keyManagement/RsaKeyPairDto";

@swagger.ApiTags("webRtcSignalings")
@common.Controller("webRtcSignalings")
export class WebRtcSignalingController {
  constructor(protected readonly service: WebRtcSignalingService) {}

  @common.Post("/ice-candidate")
  @swagger.ApiOkResponse({
    type: RsaKeyPairDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandleIceCandidate(
    @common.Body()
    body: RsaKeyPairDto
  ): Promise<RsaKeyPairDto> {
        return this.service.HandleIceCandidate(body);
      }

  @common.Post("/webrtc-answer")
  @swagger.ApiOkResponse({
    type: RsaKeyPairDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandleWebRtcAnswer(
    @common.Body()
    body: RsaKeyPairDto
  ): Promise<RsaKeyPairDto> {
        return this.service.HandleWebRtcAnswer(body);
      }

  @common.Post("/webrtc-offer")
  @swagger.ApiOkResponse({
    type: RsaKeyPairDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandleWebRtcOffer(
    @common.Body()
    body: RsaKeyPairDto
  ): Promise<RsaKeyPairDto> {
        return this.service.HandleWebRtcOffer(body);
      }
}
