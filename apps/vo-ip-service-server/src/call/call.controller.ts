import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CallService } from "./call.service";
import { CallControllerBase } from "./base/call.controller.base";

@swagger.ApiTags("calls")
@common.Controller("calls")
export class CallController extends CallControllerBase {
  constructor(
    protected readonly service: CallService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
