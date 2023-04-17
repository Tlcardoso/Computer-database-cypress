import { formDataProps, formFieldsProps, searchDataProps } from "cypress/interface/formData";

export const searchData: searchDataProps = {
    correctSearch: 'CM-1',
    incorrectSearch: 'Nothing'
}


export const formData: formDataProps = {
    computerName: 'Test New Computer',
    introduced: {
        day: '06',
        month: '11',
        year: '2020'
    },
    discontinued: {
        day: '12',
        month: '12',
        year: '2022'
    },
    company: {
        label: 'RCA',
        value: 3,
    }
}
export const formFields: formFieldsProps = ['#name', '#introduced', '#discontinued', '#company'];
