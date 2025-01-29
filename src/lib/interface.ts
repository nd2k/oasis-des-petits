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

export type EmailMessage = {
    from: string,
    to: string,
    subject: string,
    html: string,
    // attachments: [{
        
    // }]
}