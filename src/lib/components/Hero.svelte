<script lang="ts">
    import { state } from '$lib/state.svelte';
</script>

{#if state.width < 930}
<section class="hero-mobile">
    <div class="img-hero">

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
            & .keyword {
                color: hsl(var(--white-0));
                font-size: var(--size-fluid-3);
                position: relative;
                padding: var(--size-fluid-3);
                overflow: hidden; /* Ensures the content is not revealed until the animation */
                white-space: nowrap; /* Keeps the content on a single line */
                letter-spacing: .15em; /* Adjust as needed */
                animation: 
                    typing 2.5s steps(40, end),
                    blink-caret .75s step-end infinite;
            }
            & .keyword-1 {
                padding-left: 50%;
            }
            & .keyword-2 {
                padding-top: 45%;
            }
            & .keyword-3 {
                padding-left: 10%;
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

    @keyframes typing {
  from { width: 0 }
  to { width: 40% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: hsl(var(--white-0))}
}
</style>