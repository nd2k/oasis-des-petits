<script lang="ts">
    import { state } from "$lib/state.svelte";
	import { setScreenSize } from "$lib/utils";
	import { onMount } from "svelte";

    onMount(() => {
        setScreenSize();
    })
</script>

{#if state.isMobile}
<div class="hero-container-mobile">
    <enhanced:img 
        src="/static/photo_1_modified.jpg?w=1280;640;400"
        sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
        alt="Bébé dans son bain des merveilles"
        class="img-hero" 
        fetchpriority="high" />
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
{/if}

{#if state.isDesktop}
<div class="hero-container-desktop">
    <div class="hero-placeholder">
        <enhanced:img 
            src="/static/photo_1_modified.jpg?w=1280;640;400"
            sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
            alt="Bébé dans son bain des merveilles"
            class="img-hero-desktop" 
            fetchpriority="high" />
    </div>
    <div class="intro-text">
        <span class="word-1">Libération des mémoires prénatales</span>
        <span class="word-2">Renaissance</span>
    </div>
  </div>
  {/if}


  <!-- svelte-ignore css_unused_selector -->
<style>
.hero-container-mobile {
    position: relative;
    max-width: 100%;
    z-index: -1;
        & picture {
            grid-area: 1 / 1 / -1 / -1;
            max-width: 100%;
            z-index: -1;
            & .img-hero {
                display: block;
                object-fit: cover;
                width: var(--size);
                height: auto;
            }
        }
        & .keywords {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: hsl(var(--white-0));
            font-size: var(--size-fluid-4);
            font-family:  'AdamScript', serif !important;
            line-height: 1.4;
            white-space: nowrap;
            letter-spacing: .15em;
            animation: fadeIn 3s cubic-bezier(0.39, -1.05, 0.58, 1.95);
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 6fr 1fr 1fr 1fr;
            grid-template-areas: 
            "keyword1"
            "."
            "keyword2"
            "keyword3"
            "keyword4";
            & .keyword-1 { 
                grid-area: keyword1; 
                justify-self: end; 
                align-self: center; 
                padding-top: var(--size-fluid-2);
                padding-right: var(--size-fluid-2);
            }

            & .keyword-2 { 
                grid-area: keyword2; 
                justify-self: start; 
                align-self: center; 
                padding-left: var(--size-fluid-2);
            }
            & .keyword-3 { 
                grid-area: keyword3; 
                justify-self: start; 
                align-self: center; 
                padding-left: var(--size-fluid-4);
            }

            & .keyword-4 { 
                grid-area: keyword4; 
                justify-self: start; 
                align-self: center; 
                padding-left: var(--size-fluid-5);
            }
        }
    }

.hero-container-desktop {
    display: flex;
    position: relative;
    max-width: 100%;
    & .hero-placeholder {
        padding: var(--size-fluid-2);
        & .img-hero-desktop {
            max-height: 70dvh;
            object-fit: cover;
            border-radius: var(--radius-3);
        }
    }
    & .intro-text {
        padding: var(--size-fluid-6);
        display: grid;
        font-family:  'AdamScript', serif !important;
        line-height: 1.4;
        unicode-bidi: isolate;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
        "word1"
        "word2";
        & .word-1 {
            grid-area: word1;
            font-size: var(--size-fluid-4);
            color: hsl(var(--dark-green-1));
            align-self: center;
            animation: 2s var(--animation-slide-in-down);
        }

        & .word-2 {
            grid-area: word2;
            font-size: var(--size-fluid-4);
            justify-self: flex-end;
            color: hsl(var(--dark-green-1));
            align-self: center;
            animation: 2s var(--animation-slide-in-up);
        }
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
</style>