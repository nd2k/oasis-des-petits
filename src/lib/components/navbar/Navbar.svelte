<script lang="ts">
    import * as Icon from 'svelte-awesome-icons';
    import { slide } from 'svelte/transition';

    const links = [ 
        { 
            label: "Acceuil",
            href: "/"
        },
        {
            label: "À propos",
            href: "#"
        },
        {
            label: "Services",
            href: "#"
        }
    ]

    export let isMobile: boolean;
    let isExpanded: boolean = false;

</script>

<nav>
    <div class="menu-wrapper">
        <div class="logo-container">
            <a href="/" aria-label="logo btn">
                <img src="./logo.png" alt="logo" class="logo"/>
            </a>
        </div>
        
        <div class="menu-container">
            {#if !isMobile}
            <ul>
                {#each links as link}
                    <li>
                        <a href={link.href} class="nav-link">{link.label}</a>
                    </li>
                {/each}
            </ul>
            {:else}
                <button class="bar-menu" onclick={() => isExpanded = !isExpanded}>
                    <Icon.BarsSolid />
                </button>
            {/if}
        </div>
    </div>
    {#if isMobile && isExpanded}
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
        position: fixed;
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
            }
            & a:hover {
                color: hsl(var(--dark-green-2));
                font-weight: 700;
            }
        }
    }
</style>