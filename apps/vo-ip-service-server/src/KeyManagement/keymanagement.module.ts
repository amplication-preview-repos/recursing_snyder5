import { Module } from "@nestjs/common";
import { KeyManagementService } from "./keymanagement.service";
import { KeyManagementController } from "./keymanagement.controller";
import { KeyManagementResolver } from "./keymanagement.resolver";

@Module({
  controllers: [KeyManagementController],
  providers: [KeyManagementService, KeyManagementResolver],
  exports: [KeyManagementService],
})
export class KeyManagementModule {}
