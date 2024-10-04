export enum BundleDuration {
    DAY = 'jour',
    WEEK = 'semaine',
    MONTH = 'mois',
}

export type BundleModel = {
    id: string;
    name: string;
    operator: string;
    description: string;
    price: string;
    duration: BundleDuration;
}