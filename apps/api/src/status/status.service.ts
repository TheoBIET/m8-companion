import { Injectable } from "@nestjs/common";
import { Status, formatUptime } from "@/common";

@Injectable()
export class StatusService {
  constructor() {}

  async getStatus() {
    const uptime = formatUptime(process.uptime());
    const services: { name: string; status: Status }[] = await Promise.all([]);

    const allKO = services.every((service) => service.status === Status.KO);
    const allOK = services.every((service) => service.status === Status.OK);

    return {
      status: allKO ? Status.KO : allOK ? Status.OK : Status.DEGRADED,
      version: process.env.npm_package_version || "Unknown",
      uptime,
      services,
    };
  }
}
