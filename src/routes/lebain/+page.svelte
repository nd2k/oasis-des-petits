<script lang="ts">
	import Seo from "$lib/components/Seo.svelte";
    import { state } from "$lib/state.svelte";
    import photo_9 from '$lib/gallery/photo_9.webp?enhanced';

</script>
<Seo 
    title="Oasis-des-petits | Le bain des merveilles" 
    description="Description détaillée du bain des merveilles/bain sensoriel" 
    keywords="oasis-des-petits, oasisdespetits, oasis des petits, oasis-des-petits Belgique, oasis des petits Belgique, oasis des petits be, oasis-des-petits.be, oasis des petits be, Laura van eeckhoudt, Laura Van Eeckhoudt, bain des merveilles, Ath, Bruxelles, Hainaut, Tournai, Mons, renaissance, Bain thérapeutique bébé, Bain emmailloté, Bain sensoriel, Bain bien-être nouveau-né, Bain relaxant pour bébé, Bain post-natal, Bain apaisant bébé, relaxation, Détente, émotions intra-utérines, rituel post-natal, position fœtale, soins à domicile, Belgique, Belgium, Wallonie"
    type="Website" />

<section class="section-bath">
    <h1 class="title-h1">Le bain</h1>
    {#if state.isMobile}
        <div class="section-content-bath">
            <p>La séance commence par un moment d’échange avec vous. Cet entretien permet d’exprimer vos ressentis autour de la grossesse et 
                de l’accouchement, dans un cadre bienveillant et à l’écoute. Ce moment est essentiel pour instaurer un climat de confiance 
                entre vous, votre bébé et moi-même.</p>
            <p>Ensuite, place au bain, qui se déroule dans une ambiance calme et apaisante. Une musique douce, choisie par les parents ou la 
                baigneuse, accompagne ce moment. Le bain débute par une phase de détente où le bébé est délicatement baigné emmailloté dans une
                eau à 38°C, recréant la sécurité et le confort de sa vie intra-utérine.</p>
            <p>Au fil du bain, vous êtes invités à participer activement si vous le souhaitez, renforçant le lien avec votre bébé. Dans cet 
                espace de sérénité, votre bébé se sentira suffisamment en confiance pour exprimer ses émotions, raconter son histoire à travers
                ses mouvements et retrouver sa position fœtale. Ce moment d’échange et d’écoute se conclut par le désemmaillotage, symbolisant
                une « renaissance » pleine de douceur.</p>
            <p>La séance se termine par un peau à peau, un instant précieux pour prolonger cette connexion intime et renforcer le lien familial.</p>    
        </div>
    {/if}
    {#if state.isDesktop}
        <div class="section-content-bath-desktop">
            <div class="bath-text">
                <p>La séance commence par un moment d’échange avec vous. Cet entretien permet d’exprimer vos ressentis autour de la grossesse et 
                    de l’accouchement, dans un cadre bienveillant et à l’écoute. Ce moment est essentiel pour instaurer un climat de confiance 
                    entre vous, votre bébé et moi-même.</p>
                <p>Ensuite, place au bain, qui se déroule dans une ambiance calme et apaisante. Une musique douce, choisie par les parents ou la 
                    baigneuse, accompagne ce moment. Le bain débute par une phase de détente où le bébé est délicatement baigné emmailloté dans une
                    eau à 38°C, recréant la sécurité et le confort de sa vie intra-utérine.</p>
                <p>Au fil du bain, vous êtes invités à participer activement si vous le souhaitez, renforçant le lien avec votre bébé. Dans cet 
                    espace de sérénité, votre bébé se sentira suffisamment en confiance pour exprimer ses émotions, raconter son histoire à travers
                    ses mouvements et retrouver sa position fœtale. Ce moment d’échange et d’écoute se conclut par le désemmaillotage, symbolisant
                    une « renaissance » pleine de douceur.</p>
                <p>La séance se termine par un peau à peau, un instant précieux pour prolonger cette connexion intime et renforcer le lien familial.</p>
            </div>
            <div class="bath-img">
                <enhanced:img
                    src={photo_9}
                    width=600
                    height=400
                    alt="Bain des merveilles" 
                    class="bath-img" />
            </div>
        </div>
    {/if}
</section>

<style>
    .section-bath {
        height: auto;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-size: clamp(0.5rem, 10vw, 1rem);
        & .section-content-bath-desktop {
            margin: var(--size-fluid-4);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            & .bath-text {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            & .bath-img {
                flex: 1;
                object-fit: cover;
                object-position: center top;
                border-radius: var(--radius-3);
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        & .section-content-bath {
            margin: 0 var(--size-fluid-4);
        }
    }
</style>