import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KeyManagementService } from "./keymanagement.service";
import { RsaKeyPairDto } from "../keyManagement/RsaKeyPairDto";

@swagger.ApiTags("keyManagements")
@common.Controller("keyManagements")
export class KeyManagementController {
  constructor(protected readonly service: KeyManagementService) {}

  @common.Post("/generate-key-pair")
  @swagger.ApiOkResponse({
    type: RsaKeyPairDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateRsaKeyPair(
    @common.Body()
    body: RsaKeyPairDto
  ): Promise<RsaKeyPairDto> {
        return this.service.GenerateRsaKeyPair(body);
      }

  @common.Get("/public-key/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetPublicKey(
    @common.Body()
    body: RsaKeyPairDto
  ): Promise<string> {
        return this.service.GetPublicKey(body);
      }

  @common.Get("/user-public-key/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveUserPublicKey(
    @common.Body()
    body: RsaKeyPairDto
  ): Promise<string> {
        return this.service.RetrieveUserPublicKey(body);
      }

  @common.Post("/store-public-key")
  @swagger.ApiOkResponse({
    type: RsaKeyPairDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StorePublicKey(
    @common.Body()
    body: RsaKeyPairDto
  ): Promise<RsaKeyPairDto> {
        return this.service.StorePublicKey(body);
      }
}
