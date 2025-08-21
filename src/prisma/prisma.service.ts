import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma'; 

//conexión con prisma
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try{
      await this.$connect();
      console.log('Conectado a la base de datos');
    }catch(error){
      if(error instanceof Error) console.error('Error al conectar a la base de datos:', error.message);
    }
  }
}