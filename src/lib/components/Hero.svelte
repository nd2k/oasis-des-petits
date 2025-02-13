<script lang="ts">
    import { state } from '$lib/state.svelte';
</script>

{#if state.width < 930}
<section class="hero-mobile">
    <enhanced:img src="/static/photo_1_modified.webp" alt="Bébé dans son bain" height="500" width="420" class="img-hero" fetchpriority="high" />
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
{/if}

<style>
   
.keywords {
    animation: fadeIn 3s cubic-bezier(0.39, -1.05, 0.58, 1.95);
    transform-origin: center;
    position: absolute;
    top: 15%;
    width: 100%;
    height: 55%;

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
    padding-top: 15%;
    padding-left: 50%;
}
& .keyword-2 {
    padding-top: 65%;
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