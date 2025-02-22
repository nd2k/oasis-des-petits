<script lang="ts">
    import { state } from '$lib/state.svelte';
    import * as Icon from 'svelte-awesome-icons';
</script>

<div class="top-header">
    <div class="{state.isDesktop ? "name-desktop" : "name-mobile"}">
        Laura Van Eeckhoudt<br>
        <small>Certifiée baigneuse « Bain des Merveilles »</small>
    </div>
    <div class="social-media">
        <div class="top-header-icons">
            <a href="tel:+32479411112">
                <Icon.PhoneSolid />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61571857000153" target="_blank" rel="noopener noreferrer">
                <Icon.FacebookBrands />
            </a>
            <a href="https://www.instagram.com/oasis_des_petits/" target="_blank" rel="noopener noreferrer">
                <Icon.InstagramBrands />
            </a>
        </div>
    </div>
</div>

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
        & .name-mobile {
            font-size: var(--size-px-3);
            & small {
                font-size: var(--size-px-2);
            }
        }
        & .name-desktop {
            font-size: var(--size-px-4);
            & small {
                font-size: var(--size-px-3);
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
                a:hover {
                    color: hsl(var(--dark-green-1));
                }
            }
        }
    }
</style>