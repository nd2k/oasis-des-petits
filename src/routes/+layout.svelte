<script lang="ts">
    import '../styles/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
    import * as Icon from 'svelte-awesome-icons';
    import { state } from '$lib/state.svelte';
	import BubbleBackground from '$lib/components/BubbleBackground.svelte';

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

<svelte:window bind:innerWidth={state.width} />
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
    .wrapper {
        height: 100%;
        width: 100%;
        position: relative;
    }
</style>