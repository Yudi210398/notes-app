import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaDataService extends PrismaClient implements OnModuleInit {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    });

    super({ adapter });
  }
  async onModuleInit() {
    await this.$connect().then(async () => {});
    console.log(`konek database`, process.env.DATABASE_URL);
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on(`warn`, async () => {
      await app.close();
    });
  }
}
