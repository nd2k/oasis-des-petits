<script lang="ts">
    import '../styles/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
    import Field from '$lib/components/Field.svelte';
    import * as Icon from 'svelte-awesome-icons';
    import { state } from '$lib/state/state.svelte';
	import BubbleBackground from '$lib/components/BubbleBackground.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';

    let { children } = $props();

    function submitData() {
        console.log(state.bookingFrom);
        
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
        <Field label="Nom" icon={Icon.IdCardSolid} bind:value={state.bookingFrom.firstName} />
        <Field label="Prénom" icon={Icon.IdCardSolid} bind:value={state.bookingFrom.name} />
        <Field label="Email" icon={Icon.EnvelopeSolid} bind:value={state.bookingFrom.email} />
        <Field label="Téléphone" icon={Icon.PhoneSolid} bind:value={state.bookingFrom.phone} />
        <Button onclick={submitData} />
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
       display: flex;
       flex-direction: column;
       gap: var(--size-fluid-2);
       & p {
        border-left: 2px solid hsl(var(--dark-green-1));
        padding-left: var(--size-fluid-2);
       }
    }
    .wrapper {
        height: 100%;
        width: 100%;
        position: relative;
    }
</style>