import { ClassProvider, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsServiceImpl } from './cats.service.impl';

const catsService: ClassProvider = {
  provide: 'catsService',
  useClass: CatsServiceImpl,
};

@Module({
  controllers: [CatsController],
  providers: [catsService],
})
export class CatsModule {}
