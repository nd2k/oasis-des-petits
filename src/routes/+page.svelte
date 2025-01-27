<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import Card from '$lib/components/Card.svelte';
    import Button from '$lib/components/Button.svelte';
    import { state } from '$lib/state.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Field from '$lib/components/Field.svelte';
    import * as Icon from 'svelte-awesome-icons';
    import { disabledButton, emailValidation, firstNameValidation, nameValidation, phoneValidation } from '$lib/utils';
	import { ButtonType } from '$lib/interface';

    function openModal() {
        state.modalIsOpened = true;
    }
    
</script>

<Modal>
    <div class="modal">
        <p>Pour réserver votre formule préférée, veuillez remplir le formulaire de réservation ci-dessous.<br>
        Je prendrai soin de vous recontacter pour fixer ensemble un rendez-vous</p>
        <form method="POST" action="/contact">
            <Field id="name" label="Nom" icon={Icon.IdCardSolid} bind:value={state.bookingForm.name} onblur={() => nameValidation(state.bookingForm.name)} validation={state.nameValidationState} />
            <Field id="firstName" label="Prénom" icon={Icon.IdCardSolid} bind:value={state.bookingForm.firstName} onblur={() => firstNameValidation(state.bookingForm.firstName)} validation={state.firstNameValidationState} />
            <Field id="email" label="Email" icon={Icon.EnvelopeSolid} bind:value={state.bookingForm.email} onblur={() => emailValidation(state.bookingForm.email)} validation={state.emailValidationState}/>
            <Field id="phone" label="Téléphone" icon={Icon.PhoneSolid} bind:value={state.bookingForm.phone} onblur={() => phoneValidation(state.bookingForm.phone)} validation={state.phoneValidationState} />
            <Field id="hp" label="hp" bind:value={state.bookingForm.hp} invisible={true}/>
            <Button disabled={disabledButton()} type={ButtonType.SUBMIT} />
        </form>
    </div>
</Modal>

<Hero />

<section class="services">
    <h1>Nos Formules</h1>
    <Card>
        <div class="card-body">
            <div class="title">Formule bain</div>
            <h2>1h30</h2>
            <h2>100€</h2>
        </div>
        <div class="card-footer">
            <Button label="Reservez" onclick={openModal} />
        </div>
    </Card>
    <Card>
        <div class="card-body">
            <div class="title">Formule bain & Tétra</div>
            <h2>1h30</h2>
            <h2>120€</h2>
        </div>
        <div class="card-footer">
            <Button label="Reservez" onclick={openModal} />
        </div>
    </Card>
    <Card>
        <div class="card-body">
            <div class="title">Formule bain & reportage photos</div>
            <h2>1h30</h2>
            <h2>270€</h2>
        </div>
        <div class="card-footer">
            <Button label="Reservez" onclick={openModal} />
        </div>
    </Card>
</section>

<style>
     .modal {
       form {
        display: flex;
        flex-direction: column;
        gap: var(--size-fluid-2);
       }
       & p {
        border-left: 2px solid hsl(var(--dark-green-1));
        padding-left: var(--size-fluid-2);
        margin-bottom: var(--size-fluid-4);
        font-size: var(--size-fluid-3);
       }
    }
    .services {
        display: flex;
        flex-wrap: wrap;
    & h1 {
        font-size: var(--size-fluid-4);
        padding: var(--size-fluid-4);
        color: hsl(var(--dark-green-1));
        display: inline-block;
    }
    & h1::after {
        content: "";
        display: block;
        width: 75%;
        height: 2px; 
        background-color: hsl(var(--dark-green-1));
        margin-top: var(--size-fluid-2);
    }
    .card-body {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: var(--size-fluid-3);
            min-height: 10rem;
            & .title {
                font-size: var(--size-fluid-3);
            }
            & h2 {
                font-size: var(--size-fluid-2);
            }
        }
        & .card-footer {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: var(--size-fluid-2);
        }
    }
</style>