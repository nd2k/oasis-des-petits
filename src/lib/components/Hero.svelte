<script lang="ts">
    import { state } from "$lib/state.svelte";

    $effect(() => console.log(state.width));
</script>

<div class="hero-container" style={`max-width: ${state.width}px`}>
    <enhanced:img 
        src="/static/photo_1_modified.jpg" 
        alt="Bébé dans son bain"
        style={`width: ${state.width}px`}
        class="img-hero" 
        fetchpriority="high" />
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
  

<!-- {#if state.width < 930}
<section class="hero-mobile">
    <enhanced:img src="/static/photo_1_modified.webp" alt="Bébé dans son bain" height="500" class="img-hero" fetchpriority="high" />
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
{/if} -->

<style>
.hero-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 6fr 1fr 1fr 1fr;
    grid-template-areas: 
        "word1"
        "."
        "word2"
        "word3"
        "word4";
    position: relative;
    height: 100%;
}

picture {
    grid-area: 1 / 1 / -1 / -1;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.img-hero {
    height: auto;
    display: block;
    object-fit: cover;
}

.keyword {
    color: hsl(var(--white-0));
    font-size: var(--size-fluid-3);
    white-space: nowrap;
    letter-spacing: .15em;
    animation: fadeIn 3s cubic-bezier(0.39, -1.05, 0.58, 1.95);
}

.keyword-1 { 
    grid-area: word1; 
    justify-self: end; 
    align-self: center; 
    padding-top: var(--size-fluid-3);
    padding-right: var(--size-fluid-3);
}

.keyword-2 { 
    grid-area: word2; 
    justify-self: start; 
    align-self: center; 
    padding-left: var(--size-fluid-3);
}

.keyword-3 { 
    grid-area: word3; 
    justify-self: start; 
    align-self: center; 
    padding-left: var(--size-fluid-4);
}

.keyword-4 { 
    grid-area: word4; 
    justify-self: start; 
    align-self: center; 
    padding-left: var(--size-fluid-5);
}


/* .hero-mobile {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    & .img-hero {
        object-fit: cover;
        width: 100%;
    }
    & .keywords {
        animation: fadeIn 3s cubic-bezier(0.39, -1.05, 0.58, 1.95);
        transform-origin: center;
        position: absolute;
        top: 0%;
        width: 100%;
        height: 100%;
        & .keyword {
            color: hsl(var(--white-0));
            font-size: var(--size-fluid-3);
            position: relative;
            overflow: hidden;
            white-space: nowrap;
            letter-spacing: .15em;
        }
        & .keyword-1 {
            padding-top: 20px;
            padding-left: 210px;
            padding-right: var(--size-fluid-3);
        }
        & .keyword-2 {
            padding-top: 340px;
            padding-left: 20px;
            padding-bottom: 15px;
            
        }
        & .keyword-3 {
            padding-left: 40px;
            padding-bottom: 15px;
        }
        & .keyword-4 {
            padding-left: 60px;
        }
    }

}
.hero {
display: flex;
flex-direction: row;
& .img-hero {
background-image: url('/photo_1.webp');
background-repeat: no-repeat;
background-size: contain;
background-size: 100% 100%;
height: var(--size-fluid-20);
width: 100%;
}
& .slogan {
margin-top: var(--size-fluid-3);
}
} */

@keyframes fadeIn {
from {
opacity: 0;
}
to {
opacity: 1;
}
}
</style>