import { PriceService } from './price.service.1';

export class Product {
	service: PriceService;
	basePrice: number;

	constructor(basePrice: number) {
		this.service = new PriceService();
		this.basePrice = basePrice;
	}


	totalPrice(state: string): number {
		return this.service.calcTotalPrice(this.basePrice, state);
	}
}