import { Topics, ValidationState, type Bubble } from './interface';
import { state } from '$lib/state.svelte';
import type { SubmitFunction } from '@sveltejs/kit';

const colors = ['hsl(var(--light-pink-1))', 'hsl(var(--dark-green-1))', 'hsl(var(--light-green-1))', 'hsl(var(--light-green-1))'];
const bubbleLevels = [
    {
        min: -20,
        max: 0
    },
    {
        min: 0,
        max: 10
    },
    {
        min: 10,
        max: 20
    },
    {
        min: 20,
        max: 30
    },
    {
        min: 30,
        max: 40
    },
    {
        min: 30,
        max: 40
    },
    {
        min: 40,
        max: 50
    },
    {
        min: 50,
        max: 60
    },
    {
        min: 60,
        max: 70
    },
    {
        min: 70,
        max: 80
    },
    {
        min: 80,
        max: 90
    },
    {
        min: 90,
        max: 100
    },
    {
        min: 100,
        max: 110
    },

]
let nbOfBubbles = 11;
let maxSizeBubble = 500;

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
        state.firstNameValidationState = stringValidation(firstName, 2, 100) ?
            { validationState: ValidationState.VALID, errorMessage: '' } : 
            { validationState: ValidationState.INVALID, errorMessage: "Le prénom doit être compris entre 2 et 100 caractères" };
    } else {
        state.firstNameValidationState = response;
    }
}

export function nameValidation(name: string) {
    let response = { validationState: ValidationState.NOTVALIDATED, errorMessage: '' };
    if (name.length > 0) {
        state.nameValidationState = stringValidation(name, 2, 100) ?
            { validationState: ValidationState.VALID, errorMessage: '' } : 
            { validationState: ValidationState.INVALID, errorMessage: "Le nom doit être compris entre 2 et 100 caractères" };
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
    return !(state.nameValidationState.validationState === ValidationState.VALID &&
        state.firstNameValidationState.validationState === ValidationState.VALID &&
        state.emailValidationState.validationState === ValidationState.VALID &&
        state.phoneValidationState.validationState === ValidationState.VALID) && state.bookingForm.hp.length === 0;
}

export function openModal(topic: Topics) {        
    state.modalIsOpened = true;
    state.bookingForm.topic = topic;
    state.bookingForm.firstName = '';
    state.bookingForm.name = '';
    state.bookingForm.email = '';
    state.bookingForm.phone = '';
    state.bookingForm.hp = '';
}


export function flipCard(topic: Topics) {
    if (Topics.FORMULE1 === topic) {
        state.flippedCard1 = !state.flippedCard1;
    }
    if (Topics.FORMULE2 === topic) {
        state.flippedCard2 = !state.flippedCard2;
    }
    if (Topics.FORMULE3 === topic) {
        state.flippedCard3 = !state.flippedCard3;
    }
}

export const handleSubmit: SubmitFunction = () => {
    state.isLoading = true;
    return async({ update }) => {
        await update()
        state.isLoading = false;
        resetFields();
        state.modalIsOpened = false;
    }
}

function resetFields() {
    state.emailValidationState = {
        validationState: ValidationState.NOTVALIDATED,
        errorMessage: ''
    };
    state.nameValidationState = {
        validationState: ValidationState.NOTVALIDATED,
        errorMessage: ''
    };
    state.firstNameValidationState = {
        validationState: ValidationState.NOTVALIDATED,
        errorMessage: ''
    };
    state.phoneValidationState = {
        validationState: ValidationState.NOTVALIDATED,
        errorMessage: ''
    };
}

export function setScreenSize() {
    state.isDesktop = state.width > 1024;
    state.isMobile = state.width <= 1024; 
}