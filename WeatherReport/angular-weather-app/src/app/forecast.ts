export interface ForecastTemperature {
    from: number;
    to: number;
    type: string;
    unit: string;
    time: Date;
    place: string;
}
export interface ForecastPrecipitation {
    from: number;
    to: number;
    precipitation_types: Array<string>;
    type: string;
    unit: string;
    time: Date;
    place: string;
}
export interface ForecastCloudCoverage {
    from: number;
    to: number;
    type: string;
    unit: string;
    time: Date;
    place: string;
}
export interface ForecastWindSpeed {
    from: number;
    to: number;
    directions: Array<string>;
    type: string;
    unit: string;
    time: Date;
    place: string;
}
export interface Forecast {
    from: number;
    to: number;
    type: string;
    unit: string;
    time: Date;
    place: string;
    precipitation_types: Array<string>;
    directions: Array<string>;
}