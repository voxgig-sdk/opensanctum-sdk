export interface Place {
    description?: string;
    id?: string;
    imageUrl?: string;
    location?: Record<string, any>;
    name?: string;
    religion?: string;
    significance?: string;
    type?: string;
    website?: string;
    yearEstablished?: number;
}
export interface PlaceListMatch {
    country?: string;
    limit?: number;
    offset?: number;
    religion?: string;
    type?: string;
}
export interface Tradition {
    culturalSignificance?: string;
    description?: string;
    id?: string;
    name?: string;
    observances?: any[];
    origin?: Record<string, any>;
    practices?: any[];
    religion?: string;
}
export interface TraditionListMatch {
    limit?: number;
    offset?: number;
    region?: string;
    religion?: string;
    search?: string;
}
