export const numberFormatterCompact = (value: number, locale = 'pt-BR') => {
    return new Intl.NumberFormat(locale, {
        notation: 'compact',
    }).format(value);
};

export const currencyFormatter = (currency: number, locale = 'pt-BR') => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'BRL',
    }).format(currency);
};

export const dateFormatter = (date: Date, locale = 'pt-BR') => {
    return new Intl.DateTimeFormat(locale, {
        dateStyle: 'short',
    }).format(new Date(date));
};

export const dateFormatterLong = (date: Date, locale = 'pt-BR') => {
    return new Intl.DateTimeFormat(locale, {
        dateStyle: 'long',
    }).format(new Date(date));
};

export const dateFormatterMonth = (date: Date, locale = 'pt-BR') => {
    return new Intl.DateTimeFormat(locale, {
        month: 'long',
    }).format(new Date(date));
};

