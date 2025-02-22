<script lang="ts">
	import Seo from "$lib/components/Seo.svelte";
    import { state } from "$lib/state.svelte";
</script>

<Seo 
    title="Oasis-des-petits | À propos de Laura Van Eeckhoudt" 
    description="À propos de Laura Van Eeckhoudt - Certifiée baigneuse « Bain des Merveilles »" 
    keywords="oasis-des-petits, oasisdespetits, oasis des petits, oasis-des-petits Belgique, oasis des petits Belgique, oasis des petits be, oasis-des-petits.be, oasis des petits be, Laura van eeckhoudt, Laura Van Eeckhoudt, bain des merveilles, Ath, Bruxelles, Hainaut, Tournai, Mons, renaissance, Bain thérapeutique bébé, Bain emmailloté, Bain sensoriel, Bain bien-être nouveau-né, Bain relaxant pour bébé, Bain post-natal, Bain apaisant bébé, relaxation, Détente, émotions intra-utérines, rituel post-natal, position fœtale, soins à domicile, Belgique, Belgium, Wallonie"
    type="Website" />

<section class="section-about">
    <h1 class="title-h1">À propos</h1>
    {#if state.isMobile}
        <div class="section-content-about">
            <p>Laura Van Eeckhoudt - Certifiée baigneuse « Bain des Merveilles »</p>
            <span>
                <h2 class="title-h2">Mon parcours</h2>
            </span>
            <p>Après avoir obtenu mon diplôme d’infirmière spécialisée  en pédiatrie et néonatalogie, j’ai commencé à travailler dans un centre néonatal à Bruxelles où j’exerce encore actuellement.</p>
            <p>J’ai toujours eu une certaine sensibilité au bien être du nouveau né et à prendre soin des plus petits.</p>
            <p>Avec une grande envie de développer mes compétences, j’ai eu la chance de me former au Bain des Merveilles a Bordeaux par 
                la talentueuse infirmière puéricultrice Aurélie Cachen.</p>
            <span>
                <h2 class="title-h2">Mon approche</h2>
            </span>
            <p>Dans mon quotidien auprès des nouveaux nés prématurés, je leur propose des soins individualisés en respectant leur physiologie, plus précisément en leur offrant des sensations proches de celles vécues in utéro dans le but de leur apporter une certaine sécurité.</p> 
            <p>Dans cette discipline de bain emmailloté, l’approche est assez similaire car au cours de ce bain, je permets au bébé de retrouver des sensations semblables à celles qui l’avait dans le ventre de sa maman.</p> 
            <p>De plus au cours de ce moment intime entre le bébé et ses parents, ce bain a pour vertu de renforcer les liens d’attachement et de recréer le cocon intra-utérin.</p>
        </div>
    {/if}

    {#if state.isDesktop}
        <div class="section-content-about-desktop">
            <div class="about-img">
                <enhanced:img
                            src="/static/photo_5.webp?w=1280;640;400"
                            sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
                            alt="Bain des merveilles" 
                            class="bath-img" />
            </div>
            <div class="about-text">
                <p>Laura Van Eeckhoudt - Certifiée baigneuse « Bain des Merveilles »</p>
                <span>
                    <h2 class="title-h2">Mon parcours</h2>
                </span>
                <p>Après avoir obtenu mon diplôme d’infirmière spécialisée  en pédiatrie et néonatalogie, j’ai commencé à travailler dans un centre néonatal à Bruxelles où j’exerce encore actuellement.</p>
                <p>J’ai toujours eu une certaine sensibilité au bien être du nouveau né et à prendre soin des plus petits.</p>
                <p>Avec une grande envie de développer mes compétences, j’ai eu la chance de me former au Bain des Merveilles a Bordeaux par 
                    la talentueuse infirmière puéricultrice Aurélie Cachen.</p>
                <span>
                    <h2 class="title-h2">Mon approche</h2>
                </span>
                <p>Dans mon quotidien auprès des nouveaux nés prématurés, je leur propose des soins individualisés en respectant leur physiologie, plus précisément en leur offrant des sensations proches de celles vécues in utéro dans le but de leur apporter une certaine sécurité.</p> 
                <p>Dans cette discipline de bain emmailloté, l’approche est assez similaire car au cours de ce bain, je permets au bébé de retrouver des sensations semblables à celles qui l’avait dans le ventre de sa maman.</p> 
                <p>De plus au cours de ce moment intime entre le bébé et ses parents, ce bain a pour vertu de renforcer les liens d’attachement et de recréer le cocon intra-utérin.</p>
            </div>
        </div>
    {/if}
</section>

<style>
    .section-about {
        height: auto;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: clamp(0.5rem, 10vw, 1rem);
        & .section-content-about-desktop {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: var(--size-fluid-4);
            & .about-img {
                flex: 1;
                object-fit: cover;
                object-position: center top;
                border-radius: var(--radius-3);
                display: flex;
                justify-content: center;
                align-items: center;
            }
            & .about-text {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
            }
        }
        & .section-content-about {
            margin: var(--size-fluid-4);
        }
    }
</style>