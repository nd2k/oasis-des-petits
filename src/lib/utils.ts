import { Topics, ValidationState, type Bubble } from './interface';
import { state } from '$lib/state.svelte';
import type { SubmitFunction } from '@sveltejs/kit';

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
    console.log("call function");
    
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

export function setBackgroundHeight() {
    if (state.isMobile) {
        state.backgroundHeight = "595vh";
    } else {
        state.backgroundHeight = "540vh";
    }
}

export function setBubbles(isMobile: boolean) {
    if (isMobile) {
      state.bubbles = [
        // { size: 200, color: 'hsl(var(--light-pink-1))', left: '-5%', top: '46vh' },
        { size: 80, color: 'hsl(var(--dark-green-1))', left: '90%', top: '97vh' },
        { size: 140, color: 'hsl(var(--light-pink-1))', left: '-5%', top: '131vh' },
        { size: 300, color: 'hsl(var(--dark-green-1))', left: '40%', top: '200vh' },
        { size: 200, color: 'hsl(var(--beige-1))', left: '0%', top: '270vh' },
        { size: 400, color: 'hsl(var(--light-green-1))', left: '35%', top: '317vh' },
        { size: 110, color: 'hsl(var(--light-pink-1))', left: '-10%', top: '407vh' },
        { size: 250, color: 'hsl(var(--dark-green-1))', left: '45%', top: '455vh' },
        { size: 300, color: 'hsl(var(--light-green-1))', left: '5%', top: '570vh' },
    ];
    } else {
      state.bubbles = [
        { size: 500, color: 'hsl(var(--light-pink-1))', left: '80%', top: '0vh' },
        { size: 300, color: 'hsl(var(--dark-green-1))', left: '50%', top: '70vh' },
        { size: 600, color: 'hsl(var(--light-green-1))', left: '85%', top: '160vh' },
        { size: 450, color: 'hsl(var(--beige-1))', left: '0%', top: '260vh' },
        { size: 100, color: 'hsl(var(--light-pink-1))', left: '-10%', top: '300vh' },
        { size: 600, color: 'hsl(var(--dark-green-1))', left: '50%', top: '305vh' },
        { size: 600, color: 'hsl(var(--light-green-1))', left: '70%', top: '515vh' },
    ];
    }
  }