<script lang="ts">
    import '@fontsource-variable/noto-sans';
    import '../styles/global.css';
    import TopHeader from '$lib/components/TopHeader.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
    import { state } from '$lib/state.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import Analytics from '$lib/components/Analytics.svelte';
	import Footer from '$lib/components/Footer.svelte';

    let { children } = $props();

    function closeNavbar() {
        state.isNavExpanded = false;
    }

    function handleKeyAction(event: KeyboardEvent): void {
        if (event.key === 'Space') {
            state.modalIsOpened = true;
        }
    }
</script>

<Analytics />

<svelte:window bind:outerWidth={state.width} bind:outerHeight={state.height} />
<div class="root" style={`max-width: ${state.width}px;`}>
    <TopHeader />
    <Navbar isMobile={ state.width < 930}/>
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
    .wrapper {
        min-height: calc(100vh - 9rem);
    }
</style>