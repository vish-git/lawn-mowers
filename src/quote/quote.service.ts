import { Injectable } from '@nestjs/common';

@Injectable()
export class QuoteService {
  getQuote(area): any {
    const quote: any = { priceDetails: {} };
    quote.priceDetails = this.calculatePrice(area);
    return JSON.parse(JSON.stringify(quote));
  }

  calculatePrice(area) {
    const pricePerSquareMetres = 1;
    const regularPrice = area * 1;
    let priceDetails: any = { price: 0, discountApplied: '' };

    switch (true) {
      case area >= 15 && area < 25:
        priceDetails.price = regularPrice - (regularPrice * 10) / 100;
        priceDetails.discountApplied = '10%';
        break;

      case area >= 25:
        priceDetails.price = regularPrice - (regularPrice * 15) / 100;
        priceDetails.discountApplied = '15%';
        break;

      default:
        priceDetails.price = regularPrice;
        priceDetails.discountApplied = 'No';
    }

    return priceDetails;
  }
}
