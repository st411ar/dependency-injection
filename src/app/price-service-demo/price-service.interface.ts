export interface IPriceService {
	calcTotalPrice(basePrice: number, state: string): number;
}