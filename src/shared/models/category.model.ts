import { Timestamps } from "../types/timestamp";

export interface Category extends Timestamps {
    id: number;
    title: string;
}