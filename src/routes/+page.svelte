<script lang="ts">
    import Hero from '$lib/components/hero/Hero.svelte';
    import BubbleBackground from '$lib/components/background/BubbleBackground.svelte';
    import Card from '$lib/components/card/Card.svelte';
    
</script>

<Hero />

<section class="services">
    <h1>Nos Services</h1>
    <Card title="Formule bain" timing="1h30" price="90€"/>
    <Card title="Formule bain + tétra" timing="1h30" price="120€"/>
    <Card title="Formule bain + reportage photos" timing="1h30" price="270€"/>
</section>

<style>
    .services {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        z-index: 100;
    }
    h1 {
        font-size: var(--size-fluid-4);
        padding: var(--size-fluid-4);
        color: hsl(var(--dark-green-1));
        display: inline-block;
    }
    h1::after {
        content: "";
        display: block;
        width: 75%;
        height: 2px; 
        background-color: hsl(var(--dark-green-1));
        margin-top: var(--size-fluid-2);
    }

</style>