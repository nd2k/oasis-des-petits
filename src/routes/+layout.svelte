<script lang="ts">
    import '../styles/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
    import * as Icon from 'svelte-awesome-icons';
    import { state } from '$lib/state.svelte';
	import Loader from '$lib/components/Loader.svelte';

    let { children } = $props();
    let year = new Date().getFullYear();

    function closeNavbar() {
        state.isNavExpanded = false;
    }

    function handleKeyAction(event: KeyboardEvent): void {
        if (event.key === 'Space') {
            state.modalIsOpened = true;
        }
    }

    $effect(() => {
        console.log(state.height);
        
    })

</script>

<svelte:window bind:innerWidth={state.width} bind:innerHeight={state.height} />
<div class="top-header">
    <div class="name">
        Laura Van Eeckhoudt<br>
        <small>Certifiée baigneuse « Bain des Merveilles »</small>
    </div>
    <div class="social-media">
        <div class="top-header-icons">
            <a href="tel:+32499602548">
                <Icon.PhoneSolid />
            </a>
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
<div class="wrapper" onclick={closeNavbar} role="button" tabindex="-1" onkeydown={handleKeyAction}>     
    <Loader />
    <main>
        {@render children()}
    </main>
</div>
<footer>Laura Van Eeckhoudt &copy;{year}</footer>

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
        color: hsl(var(--light-green-1));
        display: inline-block;
    }
    :global(.title-h2::after) {
        content: "";
        display: block;
        width: 75%;
        height: 2px; 
        background-color: hsl(var(--light-green-1));
        margin-top: var(--size-fluid-2);
    }
    :global(.section-content) {
        padding: 0 var(--size-fluid-4);
    }
    :global(p) {
        padding: var(--size-fluid-2) 0;
        text-align: justify;
    }
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
    .wrapper {
        min-height: calc(100vh - 9rem);
        & svg {
            position: absolute;
            z-index: -1000;
            width: 100vw;
            height: 600vh;
        }
    }
    footer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: hsl(var(--beige-1));
        color: hsl(var(--dark-green-1));
        padding: 0;
        margin: 0;
        height: var(--size-fluid-4);
    }
</style>