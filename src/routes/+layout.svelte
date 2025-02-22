<script lang="ts">
    import '@fontsource-variable/noto-sans';
    import '../styles/global.css';
    import TopHeader from '$lib/components/TopHeader.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
    import { state } from '$lib/state.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import Analytics from '$lib/components/Analytics.svelte';
	import Footer from '$lib/components/Footer.svelte';
    import Modal from '$lib/components/Modal.svelte';
	import Field from '$lib/components/Field.svelte';
    import Button from '$lib/components/Button.svelte';
    import * as Icon from 'svelte-awesome-icons';
    import { disabledButton, emailValidation, firstNameValidation, handleSubmit, nameValidation, phoneValidation, setScreenSize } from '$lib/utils';
	import { ButtonType } from '$lib/interface';
	import Textarea from '$lib/components/Textarea.svelte';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

    let { children } = $props();

    function closeNavbar() {
        state.isNavExpanded = false;
    }

    function handleKeyAction(event: KeyboardEvent): void {
        if (event.key === 'Space') {
            state.modalIsOpened = true;
        }
    }

    function detectScreenSize() {
         setScreenSize();
         console.log(state.isMobile); 
    }

    onMount(() => detectScreenSize());
</script>

<svelte:window bind:innerWidth={state.width} bind:innerHeight={state.height} on:resize={detectScreenSize} />

<Analytics />
<Modal>
    <div class="modal">
        <p>Pour réserver votre formule préférée, veuillez remplir le formulaire de réservation ci-dessous.<br>
        Je prendrai soin de vous recontacter pour fixer ensemble un rendez-vous</p>
        <form method="POST" use:enhance={handleSubmit}>
            <Field id="name" label="Nom" bind:value={state.bookingForm.name} onblur={() => nameValidation(state.bookingForm.name)} validation={state.nameValidationState}>
                <Icon.IdCardSolid />
            </Field>
            <Field id="firstName" label="Prénom"  bind:value={state.bookingForm.firstName} onblur={() => firstNameValidation(state.bookingForm.firstName)} validation={state.firstNameValidationState}>
                <Icon.IdCardSolid />
            </Field>
            <Field id="email" label="Email" bind:value={state.bookingForm.email} onblur={() => emailValidation(state.bookingForm.email)} validation={state.emailValidationState}>
                <Icon.EnvelopeSolid />
            </Field>
            <Field id="phone" label="Téléphone" bind:value={state.bookingForm.phone} onblur={() => phoneValidation(state.bookingForm.phone)} validation={state.phoneValidationState}>
                <Icon.PhoneSolid />
            </Field>
            <Field id="topic" label="topic" bind:value={state.bookingForm.topic} invisible={true}>
            </Field>
            <Field id="hp" label="hp" bind:value={state.bookingForm.hp} invisible={true}>
            </Field>
            <Textarea id="message" label="Posez votre question" bind:value={state.bookingForm.message}>
                <Icon.CircleQuestionSolid />
            </Textarea>
            <Button disabled={disabledButton()} type={ButtonType.SUBMIT} label="Envoyer"/>
        </form>
    </div>
</Modal>

<div class="root" style={`max-width: ${state.width}px;`}>
    <TopHeader />
    <Navbar />
    <div class="wrapper" onclick={closeNavbar} role="button" tabindex="-1" onkeydown={handleKeyAction}>     
        <Loader />
        <main>
            {@render children()}
        </main>
    </div>
    <Footer />
</div>

<style>
    :global(.title-h1) {
        font-size: var(--size-fluid-4);
        padding: var(--size-fluid-4);
        color: hsl(var(--dark-green-1));
        display: inline-block;
        align-self: flex-start;
    }
    :global(.title-h1::after) {
        content: "";
        display: block;
        width: 75%;
        height: 2px; 
        background-color: hsl(var(--dark-green-1));
        margin-top: var(--size-fluid-2);
    }
    :global(.title-h2) {
        font-size: var(--size-fluid-3);
        padding: var(--size-fluid-2) 0;
        color: hsl(var(--light-green-2));
        display: inline-block;
    }
    :global(.title-h2::after) {
        content: "";
        display: block;
        width: 75%;
        height: 2px; 
        background-color: hsl(var(--light-green-2));
        margin-top: var(--size-fluid-2);
    }
    :global(.section-content) {
        padding: 0 var(--size-fluid-4);
    }
    :global(p) {
        padding: var(--size-fluid-2) 0;
        text-align: justify;
    }
    .modal {
       form {
        display: flex;
        flex-direction: column;
        gap: var(--size-fluid-2);
       }
       & p {
        border-left: 2px solid hsl(var(--dark-green-1));
        padding-left: var(--size-fluid-2);
        margin-bottom: var(--size-fluid-3);
        font-size: var(--size-fluid-2);
       }
    }
    .root {
        display: flex;
        flex-direction: column;
    }
    .wrapper {
        min-height: calc(100vh - 9rem);
        display: block;
    }

    main {
        display: flex;
        flex-direction: column;
    }
</style>