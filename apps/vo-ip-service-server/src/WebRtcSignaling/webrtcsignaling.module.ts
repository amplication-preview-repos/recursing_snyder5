import { Module } from "@nestjs/common";
import { WebRtcSignalingService } from "./webrtcsignaling.service";
import { WebRtcSignalingController } from "./webrtcsignaling.controller";
import { WebRtcSignalingResolver } from "./webrtcsignaling.resolver";

@Module({
  controllers: [WebRtcSignalingController],
  providers: [WebRtcSignalingService, WebRtcSignalingResolver],
  exports: [WebRtcSignalingService],
})
export class WebRtcSignalingModule {}
