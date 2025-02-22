<script lang="ts">
	import Portfolio from "$lib/components/Portfolio.svelte";
	import Seo from "$lib/components/Seo.svelte";
    import { state } from "$lib/state.svelte";
</script>

<Seo 
    title="Oasis-des-petits | Gallerie photos du bain des merveilles" 
    description="Une sélection de photos concernant le bain des merveilles, bain post-natal" 
    keywords="oasis-des-petits, oasisdespetits, oasis des petits, oasis-des-petits Belgique, oasis des petits Belgique, oasis des petits be, oasis-des-petits.be, oasis des petits be, Laura van eeckhoudt, Laura Van Eeckhoudt, bain des merveilles, Ath, Bruxelles, Hainaut, Tournai, Mons, renaissance, Bain thérapeutique bébé, Bain emmailloté, Bain sensoriel, Bain bien-être nouveau-né, Bain relaxant pour bébé, Bain post-natal, Bain apaisant bébé, relaxation, Détente, émotions intra-utérines, rituel post-natal, position fœtale, soins à domicile, Belgique, Belgium, Wallonie"
    type="Website" />

<section class="section-portfolio">
    <h1 class="title-h1">Galerie</h1>
    <Portfolio isMobile={state.isMobile}/>
</section>

<style>
     .section-portfolio {
        height: auto;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>