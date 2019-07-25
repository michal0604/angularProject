// export class Coupon {
//     public constructor(
//     public couponId?: number,
//     public title?: string,
//     public start_date?: Date,
//     public end_date?: Date,
//     public amount?: number,
//     public type?: CouponType,
//     public message?: string,
//     public price?: number,
//     public image?: string)
//     {}
// }

export class Coupon {
    private couponId: number;
    private title: string;
    private start_date: Date;
    private end_date: Date;
    private amount: number;
    private type: CouponType;
    private message: string;
    private price: number;
    private image: string;

    constructor(private coupon?: Coupon) {
        if (this.coupon != null) {
            this.couponId = coupon.couponId;
            this.title = coupon.title;
            this.start_date = coupon.start_date;
            this.end_date = coupon.end_date;
            this.amount = coupon.amount;
            this.type = coupon.type;
            this.message = coupon.message;
            this.price = coupon.price;
            this.image = coupon.image;
        }
    }
    public get getId(): number {
        return this.couponId;
    }
    public set setId(id: number) {
        this.couponId = this.couponId;
    }
    public get getTitle(): string {
        return this.title;
    }
    public set setTitle(title: string) {
        this.title = title;
    }
    public get getStart_date(): Date {
        return this.start_date;
    }
    public set setStart_date(start_date: Date) {
        this.start_date = start_date;
    }
    public get getEnd_date(): Date {
        return this.end_date;
    }
    public set setEnd_date(end_date: Date) {
        this.end_date = end_date;
    }

    public get getAmount(): number {
        return this.amount;
    }
    public set setAmount(amount: number) {
        this.amount = amount;
    }

    public get getType(): CouponType {
        return this.type;
    }
    public set setType(type: CouponType) {
        this.type = type;
    }

    public get getMessage(): string {
        return this.message;
    }
    public set setMessage(message: string) {
        this.message = message;
    }

    public get getPrice(): number {
        return this.price;
    }
    public set setPrice(price: number) {
        this.price = price;
    }

    public get getImage(): string {
        return this.image;
    }
    public set setImage(image: string) {
        this.image = image;
    }

}

    