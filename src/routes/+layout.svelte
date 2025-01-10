<script lang="ts">
    import '../styles/global.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';

    let width = $state(0);
    let isMobile = $derived(width < 990);
    let { children } = $props();
    

</script>

<svelte:window bind:innerWidth={width} />

<Navbar isMobile={isMobile} />
<div class="wrapper">
    <main>
        {@render children()}
    </main>
</div>
<footer>Footer</footer>

<style>
    .wrapper {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }

    main {
        display: grid;
        gap: var(--size-fluid-10);
        padding: var(--size-fluid-5) var(--size-fluid-2);
    }
</style>