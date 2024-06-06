import { Controller, Get, Inject } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(
    @Inject('catsService') private readonly catsService: CatsService,
  ) {}

  @Get()
  getAllCats() {
    return this.catsService.getCats();
  }
}
