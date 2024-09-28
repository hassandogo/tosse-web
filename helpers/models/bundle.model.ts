export enum BundleDuration {
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'month',
}

export type BundleModel = {
    id: string;
    name: string;
    operator: string;
    description: string;
    price: string;
    duration: BundleDuration;
}