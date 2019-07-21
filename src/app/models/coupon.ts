export class Coupon {
    public constructor(
    private couponId: number=0,
    private title?: string,
    private startDate?: Date,
    private endDate?: Date,
    private amount?: number,
    private type?: CouponType,
    private message?: string,
    private price?: number,
    private image?: string)
    {}
}

    