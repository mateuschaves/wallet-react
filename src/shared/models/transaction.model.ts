import { Timestamps } from "../types/timestamp";
import { Card } from "./card.model";
import { Category } from "./category.model";

export enum OperationType {
    Income = 'income',
    Outcome = 'outcome',
}

export interface Transaction extends Timestamps {
    id: number;
    title: string;
    priceUsd?: number;
    priceBrl: number;
    quotationBrl?: number;
    operationType: OperationType;
    releaseDate: Date;
    cardId?: number;
    categoryId?: number;
    card?: Card;
    category?: Category;
}