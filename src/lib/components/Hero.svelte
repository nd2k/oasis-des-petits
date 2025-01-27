<script lang="ts">
    import { state } from '$lib/state.svelte';
</script>

{#if state.width < 930}
<section class="hero-mobile">
    <div class="img-hero">
            <div class="keywords">
                <div class="keyword keyword-1">
                    Renaissance
                </div>
                <div class="keyword keyword-2">
                    Libération
                </div>
                <div class="keyword keyword-3">
                    des mémoires
                </div>
                <div class="keyword keyword-4">
                    prénatales
                </div>
            </div>    
        
    </div>
    <div class="slogan">
    </div>
</section>
{:else}
<section class="hero">
    <div class="img-hero">
        <div class="keyword-1">
            Renaissance
        </div>
        <div class="keyword-2">
            Libération
        </div>
        <div class="keyword-3">
            des mémoires
        </div>
        <div class="keyword-4">
            prénatales
        </div>
    </div>
    <div class="slogan">
        Test
    </div>
</section>
{/if}

<style>
    .hero-mobile {
        & .img-hero {
            background-image: url('/photo_1.webp');
            background-repeat: no-repeat;
            background-size: contain;
            background-size: 100% 100%;
            height: var(--size-fluid-18);
            & .keywords {
                animation: fadeIn 3s cubic-bezier(0.39, -1.05, 0.58, 1.95);
                transform-origin: center;
            }
            & .keyword {
                color: hsl(var(--white-0));
                font-size: var(--size-fluid-3);
                position: relative;
                padding: var(--size-fluid-3);
                overflow: hidden;
                white-space: nowrap;
                letter-spacing: .15em;
            }
            & .keyword-1 {
                padding-left: 50%;
            }
            & .keyword-2 {
                padding-top: 55%;
                padding-bottom: 0;
            }
            & .keyword-3 {
                padding-left: 10%;
                padding-bottom: 0;
            }
            & .keyword-4 {
                padding-left: 20%;
            }
        }
    }
    .hero {
        display: flex;
        flex-direction: row;
        & .img-hero {
            background-image: url('/photo_2.webp');
            background-repeat: no-repeat;
            background-size: contain;
            background-size: 100% 100%;
            height: var(--size-fluid-15);
            width: 100%;
        }
        & .slogan {
            margin-top: var(--size-fluid-3);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeInAndScale {
        0% {
            opacity: 0;
            transform: scale3d(0.75, 0.75, 1);
        }
        70% {
            opacity: 0;
            transform: scale3d(0.75, 0.75, 1);
        }
        100% {
            opacity: 1;
            transform: scale3d(1, 1, 1);
        }
    }
</style>