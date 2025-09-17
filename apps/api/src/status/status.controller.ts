import { Controller, Get } from "@nestjs/common";
import { StatusService } from "./status.service";
import { Response } from "@/common";

@Controller("status")
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  async getStatus() {
    const data = await this.statusService.getStatus();
    return Response.success({
      message: "API is running",
      status: data.status,
      data,
    });
  }
}
