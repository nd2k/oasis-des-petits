import { ValidationState } from "./interface";

export let state = $state({
    width: 0,
    isNavExpanded: false,
    modalIsOpened: false,
    bookingForm: {
        firstName: '',
        name: '',
        email: '',
        phone: '',
        hp: ''
    },
    emailValidationState: {
        validationState: ValidationState.NOTVALIDATED,
        errorMessage: ''
    },
    nameValidationState: {
        validationState: ValidationState.NOTVALIDATED,
        errorMessage: ''
    },
    firstNameValidationState: {
        validationState: ValidationState.NOTVALIDATED,
        errorMessage: ''
    },
    phoneValidationState: {
        validationState: ValidationState.NOTVALIDATED,
        errorMessage: ''
    }
});

