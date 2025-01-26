<script lang="ts">
    import '../styles/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
    import Field from '$lib/components/Field.svelte';
    import * as Icon from 'svelte-awesome-icons';
    import { state } from '$lib/state.svelte';
	import BubbleBackground from '$lib/components/BubbleBackground.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';
	import { disabledButton, emailValidation, firstNameValidation, nameValidation, phoneValidation } from '$lib/utils';
	import { ButtonType } from '$lib/interface';

    let { children } = $props();

    $effect(() => {
        $inspect(state)
    })

    function submitData() {
       console.log(state.bookingForm)
    }

</script>

<svelte:window bind:innerWidth={state.width} />
<div class="top-header">
    <div class="name">
        Laura Van Eeckhoudt<br>
        <small>Certifiée baigneuse « Bain des Merveilles »</small>
    </div>
    <div class="social-media">
        <div class="top-header-icons">
            <a href="https://www.facebook.com/laura.vaneeckhoudt" target="_blank" rel="noopener noreferrer">
                <Icon.FacebookBrands />
            </a>
            <a href="https://www.instagram.com/oasis_des_petits/" target="_blank" rel="noopener noreferrer">
                <Icon.InstagramBrands />
            </a>
        </div>
    </div>
</div>
<Navbar isMobile={ state.width < 930}/>
<Modal>
    <div class="modal">
        <p>Pour réserver votre formule préférée, veuillez remplir le formulaire de réservation ci-dessous.<br>
        Je prendrai soin de vous recontacter pour fixer ensemble un rendez-vous</p>
        <form method="POST" action="/">
            <Field id="name" label="Nom" icon={Icon.IdCardSolid} bind:value={state.bookingForm.name} onblur={() => nameValidation(state.bookingForm.name)} validation={state.nameValidationState} />
            <Field id="firstName" label="Prénom" icon={Icon.IdCardSolid} bind:value={state.bookingForm.firstName} onblur={() => firstNameValidation(state.bookingForm.firstName)} validation={state.firstNameValidationState} />
            <Field id="email" label="Email" icon={Icon.EnvelopeSolid} bind:value={state.bookingForm.email} onblur={() => emailValidation(state.bookingForm.email)} validation={state.emailValidationState}/>
            <Field id="phone" label="Téléphone" icon={Icon.PhoneSolid} bind:value={state.bookingForm.phone} onblur={() => phoneValidation(state.bookingForm.phone)} validation={state.phoneValidationState} />
            <Field id="hp" label="hp" bind:value={state.bookingForm.hp} invisible={true}/>
            <Button disabled={disabledButton()} type={ButtonType.SUBMIT} />
        </form>
    </div>
</Modal>
<div class="wrapper">
    <BubbleBackground />
    <main>
        {@render children()}
    </main>
</div>
<footer>Footer</footer>

<style>
    .top-header {
        background-color: hsl(var(--light-green-1));
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        color: hsl(var(--white-0));
        font-size: var(--size-fluid-2);
        padding: var(--size-fluid-1);
        & .name {
            font-size: var(--size-px-3);
            & small {
                font-size: var(--size-px-2);
            }
        }
        & .social-media {
            & .top-header-icons {
                display: flex;
                flex-direction: row;
                gap: var(--size-fluid-2);
                a {
                    color: hsl(var(--white-0));
                }
            }
        }
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
        font-size: var(--size-fluid-3);
       }
    }
    .wrapper {
        height: 100%;
        width: 100%;
        position: relative;
    }
</style>