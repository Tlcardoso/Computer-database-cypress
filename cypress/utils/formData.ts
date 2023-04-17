import { formDataProps, searchDataProps } from "cypress/interface/formData";

export const searchData: searchDataProps = {
    correctSearch: 'CM-1',
    incorrectSearch: 'Nothing'
}


export const formData: formDataProps = {
    computerName: 'Test New Computer',
    introduced: '2020-11-06',
    discontinued: '2022-12-12',
    company: {
        label: 'RCA',
        value: 3,
    }
}