export class Coupon {
    public constructor(
    public couponId?: number,
    public title?: string,
    public start_date?: Date,
    public end_date?: Date,
    public amount?: number,
    public type?: CouponType,
    public message?: string,
    public price?: number,
    public image?: string)
    {}
}

    