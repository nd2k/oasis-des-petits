<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import Card from '$lib/components/Card.svelte';
    import Button from '$lib/components/Button.svelte';
    import { state } from '$lib/state/state.svelte';

    function openModal() {
        state.modalIsOpened = true;
    }
    
</script>

<Hero />

<section class="services">
    <h1>Nos Services</h1>
    <Card>
        <div class="card-body">
            <div class="title">Formule bain</div>
            <h2>1h30</h2>
            <h2>100€</h2>
        </div>
        <div class="card-footer">
            <Button onclick={openModal} />
        </div>
    </Card>
    <Card>
        <div class="card-body">
            <div class="title">Formule bain & Tétra</div>
            <h2>1h30</h2>
            <h2>120€</h2>
        </div>
        <div class="card-footer">
            <Button onclick={openModal} />
        </div>
    </Card>
    <Card>
        <div class="card-body">
            <div class="title">Formule bain & reportage photos</div>
            <h2>1h30</h2>
            <h2>270€</h2>
        </div>
        <div class="card-footer">
            <Button onclick={openModal} />
        </div>
    </Card>
</section>

<style>
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