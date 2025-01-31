export enum ValidationState {
    VALID,
    INVALID,
    NOTVALIDATED
}

export enum ButtonType {
    BUTTON = "button",
    SUBMIT = "submit",
    RESET = "reset"
}

export enum Topics {
    FORMULE1 = "Formule bain",
    FORMULE2 = "Formule bain & Tétra",
    FORMULE3 = "Formule bain & reportage photos",
}

export type EmailMessage = {
    from: string,
    to: string,
    subject: string,
    html: string,
}

export type DataContact = { 
    [k: string]: FormDataEntryValue; 
}

export type Bubble = {
    size: number,
    color: string,
    top: string,
    left: string
}