export class PriceService {
	constructor() {}

	calcTotalPrice(basePrice: number, state: string): number {
		const tax: number = Math.random();

		return basePrice + tax;
	}
}