export type searchDataProps = {
    correctSearch: string;
    incorrectSearch: string
}

export type formDataProps = {
    computerName: string;
    introduced: string;
    discontinued: string;
    company: {
        label: string;
        value: number;
    }
}