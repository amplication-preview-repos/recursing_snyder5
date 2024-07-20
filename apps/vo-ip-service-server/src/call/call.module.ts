import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CallModuleBase } from "./base/call.module.base";
import { CallService } from "./call.service";
import { CallController } from "./call.controller";
import { CallResolver } from "./call.resolver";

@Module({
  imports: [CallModuleBase, forwardRef(() => AuthModule)],
  controllers: [CallController],
  providers: [CallService, CallResolver],
  exports: [CallService],
})
export class CallModule {}
