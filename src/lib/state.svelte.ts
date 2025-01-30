import { Topics, ValidationState } from "./interface";

export let state = $state({
    width: 0,
    isNavExpanded: false,
    modalIsOpened: false,
    isLoading: false,
    bookingForm: {
        topic: Topics.FORMULE1,
        firstName: '',
        name: '',
        email: '',
        phone: '',
        hp: '',
        message: ''
    },
    cardStatus: {
        isCard1Flipped: false,
        isCard2Flipped: false,
        isCard3Flipped: false,
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

