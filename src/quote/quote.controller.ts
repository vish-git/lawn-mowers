import { QuoteService } from './quote.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('quote')
export class QuoteController {
  constructor(private quoteService: QuoteService) {}

  @Get()
  getQuote(@Query('area') area): any {
    return this.quoteService.getQuote(area);
  }
}
