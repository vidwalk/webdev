export interface Temperature {
    value: number;
    type: string;
    unit: string;
    time: Date;
    place: string;
}
export interface Precipitation {
    value: number;
    precipitation_type: string;
    type: string;
    unit: string;
    time: Date;
    place: string;
}
export interface CloudCoverage {
    value: number;
    type: string;
    unit: string;
    time: Date;
    place: string;
}
export interface WindSpeed {
    value: number;
    direction: string;
    type: string;
    unit: string;
    time: Date;
    place: string;
}
export interface Weather {
    value: number;
    type: string;
    unit: string;
    time: Date;
    place: string;
    precipitation_type: string;
    direction: string;
}