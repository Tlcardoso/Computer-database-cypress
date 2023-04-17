export type searchDataProps = {
    correctSearch: string;
    incorrectSearch: string
}

export type DateObjectProps = {
    day: string;
    month: string;
    year: string;
}

export type formFieldsProps = string[]

export type formDataProps = {
    computerName: string;
    introduced: DateObjectProps;
    discontinued: DateObjectProps;
    company: {
        label: string;
        value: number;
    }
}