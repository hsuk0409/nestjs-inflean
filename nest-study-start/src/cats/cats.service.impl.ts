import { Injectable } from '@nestjs/common';
import { CatsService } from './cats.service';

@Injectable()
export class CatsServiceImpl implements CatsService {
  getCats() {
    return 'cats';
  }
}
