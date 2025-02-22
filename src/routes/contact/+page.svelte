<script lang="ts">
	import Field from "$lib/components/Field.svelte";
    import * as Icon from 'svelte-awesome-icons';
    import { disabledButton, emailValidation, firstNameValidation, handleSubmit, nameValidation, phoneValidation } from '$lib/utils';
    import { state } from "$lib/state.svelte";
    import { enhance } from '$app/forms';
	import Textarea from "$lib/components/Textarea.svelte";
	import Button from "$lib/components/Button.svelte";
	import { ButtonType } from "$lib/interface";
	import Seo from "$lib/components/Seo.svelte";

</script>

<Seo 
    title="Oasis-des-petits | Contacter-nous" 
    description="ÀContacter nous pour avoir plus de renseignements à propos du bain des merveilles" 
    keywords="oasis-des-petits, oasisdespetits, oasis des petits, oasis-des-petits Belgique, oasis des petits Belgique, oasis des petits be, oasis-des-petits.be, oasis des petits be, Laura van eeckhoudt, Laura Van Eeckhoudt, bain des merveilles, Ath, Bruxelles, Hainaut, Tournai, Mons, renaissance, Bain thérapeutique bébé, Bain emmailloté, Bain sensoriel, Bain bien-être nouveau-né, Bain relaxant pour bébé, Bain post-natal, Bain apaisant bébé, relaxation, Détente, émotions intra-utérines, rituel post-natal, position fœtale, soins à domicile, Belgique, Belgium, Wallonie"
    type="Website" />

<section>
    <div class="contact-container">
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
</section>

<style>
    section {
        padding: var(--size-fluid-3);
        display: flex;
        align-items: center;
        justify-content: center;
        & .contact-container {
            padding: var(--size-fluid-4);
            border: 1px solid hsl(var(--dark-green-1));
            border-radius: var(--radius-3);
            box-shadow: var(--shadow-4);
                & p {
                    border-left: 2px solid hsl(var(--dark-green-1));
                    padding-left: var(--size-fluid-2);
                    margin-bottom: var(--size-fluid-3);
                    font-size: clamp(0.5rem, 10vw, 1rem);
                }
                & form {
                    display: flex;
                    flex-direction: column;
                    gap: var(--size-fluid-2);
                }
            }
        }
    
</style>