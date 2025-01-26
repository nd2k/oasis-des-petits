import { ValidationState } from './interface';
import { state } from '$lib/state.svelte'

export function emailValidation(email: string): void {
    let response = { validationState: ValidationState.NOTVALIDATED, errorMessage: '' };
    if (email.length > 0) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        state.emailValidationState = emailRegex.test(email) ? 
            { validationState: ValidationState.VALID, errorMessage: '' } : 
            { validationState: ValidationState.INVALID, errorMessage: "L'adresse email est incorrect" };
        
    } else {
        state.emailValidationState = response; 
    }
}

export function firstNameValidation(firstName: string) {
    let response = { validationState: ValidationState.NOTVALIDATED, errorMessage: '' };
    if (firstName.length > 0) {
        state.firstNameValidationState = stringValidation(firstName, 4, 100) ?
            { validationState: ValidationState.VALID, errorMessage: '' } : 
            { validationState: ValidationState.INVALID, errorMessage: "Le prénom doit être compris entre 4 et 100 caractères" };
    } else {
        state.firstNameValidationState = response;
    }
}

export function nameValidation(name: string) {
    let response = { validationState: ValidationState.NOTVALIDATED, errorMessage: '' };
    if (name.length > 0) {
        state.nameValidationState = stringValidation(name, 4, 100) ?
            { validationState: ValidationState.VALID, errorMessage: '' } : 
            { validationState: ValidationState.INVALID, errorMessage: "Le nom doit être compris entre 4 et 100 caractères" };
    } else {
        state.nameValidationState = response;
    }
}

function stringValidation(string: string, minChar: number, maxChar: number): boolean {
    return string.length > minChar && string.length < maxChar;
}

export function phoneValidation(phone: string) {
    let response = { validationState: ValidationState.NOTVALIDATED, errorMessage: '' };
    if (phone.length > 0) {
        state.phoneValidationState = { validationState: ValidationState.VALID, errorMessage: '' };
    } else {
        state.phoneValidationState = response;
    }
    
}

export function disabledButton(): boolean {
    console.log(state.nameValidationState.validationState !== ValidationState.VALID &&
        state.firstNameValidationState.validationState !== ValidationState.VALID &&
        state.emailValidationState.validationState !== ValidationState.VALID &&
        state.phoneValidationState.validationState !== ValidationState.VALID);
    
    return !(state.nameValidationState.validationState === ValidationState.VALID &&
        state.firstNameValidationState.validationState === ValidationState.VALID &&
        state.emailValidationState.validationState === ValidationState.VALID &&
        state.phoneValidationState.validationState === ValidationState.VALID);
}