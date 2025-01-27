<script lang="ts">
    import * as Icon from 'svelte-awesome-icons';
    import { slide } from 'svelte/transition';
    import { base } from '$app/paths';
    import { state } from '$lib/state.svelte';

    const links = [ 
        { 
            label: "Acceuil",
            href: "/"
        },
        {
            label: "Formules",
            href: "#"
        },
        {
            label: "Le bain",
            href: "#"
        },
        {
            label: "À propos",
            href: "#"
        },
        
        {
            label: "Galerie",
            href: "#"
        },
        {
            label: "Contact",
            href:"#"
        }
    ]

    export let isMobile: boolean = false;

</script>

<nav>
    <div class="menu-wrapper">
        <div class="logo-container">
            <a href="{base}/" aria-label="logo btn">
                <img src="./logo.webp" alt="Logo" class="logo"/>
            </a>
        </div>
        
        <div class="menu-container">
            {#if !isMobile}
            <ul>
                {#each links as link}
                    <li>
                        <a href={base + "/" + link.href} class="nav-link">{link.label}</a>
                    </li>
                {/each}
            </ul>
            {:else}
                <button class="bar-menu" onclick={() => state.isNavExpanded = !state.isNavExpanded}>
                    <Icon.BarsSolid />
                </button>
            {/if}
        </div>
    </div>
    {#if isMobile && state.isNavExpanded}
    <ul class="menu-container mobile" transition:slide={{ duration: 300 }}>
        {#each links as link }
            <li>
                <a href={link.href} class="nav-link">{link.label}</a>
            </li>
        {/each}
    </ul>
    {/if}
</nav>

<style>
    nav {
        position: sticky;
        z-index: 100;
        top: 0;
        width: 100%;
        box-shadow: var(--shadow-4);
        & .menu-wrapper {
            background-color: hsl(var(--beige-1));
            display: flex;
            justify-content: space-between;
            padding: 0 var(--size-5);
        }
    }

    .logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        & a {
            display: flex;
            align-items: center;
            .logo {
                width: var(--size-9);
            }
        }
    }

    .menu-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & ul {
            display: flex;
            flex-direction: row;
            & li {
            padding: 0 var(--size-3);
            & a {
                text-decoration: none;
                color: hsl(var(--dark-green-1));
            }
            & a:hover {
                color: hsl(var(--dark-green-2));
                font-weight: 700;
            }
        }
        }
        
        & .bar-menu {
            cursor: pointer;
            color: hsl(var(--dark-green-1));
            background-color: transparent;
            border: none;
            -webkit-tap-highlight-color: transparent;
        }

        & .bar-menu:hover {
            color: hsl(var(--dark-green-2));
        }
    }

    .mobile {
        flex-direction: column;
        background-color: hsl(var(--beige-1));
        & li {
            padding: var(--size-3) 0;
            & a {
                text-decoration: none;
                color: hsl(var(--dark-green-1));
                font-size: var(--size-5);
            }
            & a:hover {
                color: hsl(var(--dark-green-2));
                font-weight: 700;
            }
        }
    }
</style>