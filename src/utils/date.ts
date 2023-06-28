import { capitalizeFirstLetter } from "./string";

export function formatDateStringBr(date: Date) {
    return capitalizeFirstLetter(
        date.toLocaleDateString('pt-BR', {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
        })
    );
}