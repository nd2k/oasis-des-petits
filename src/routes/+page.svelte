<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import Card from '$lib/components/Card.svelte';
    import Button from '$lib/components/Button.svelte';
    import { state } from '$lib/state.svelte';
    import { flipCard, openModal } from '$lib/utils';
	import { Topics } from '$lib/interface';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Seo from '$lib/components/Seo.svelte';    
    import photo_9 from '$lib/gallery/photo_9.webp?enhanced';
    import photo_5 from '$lib/gallery/photo_5.webp?enhanced';
</script>

<Seo 
    title="Laura Van Eeckhoudt | Certifiée baigneuse « Bain des Merveilles »" 
    description="Le bain des merveilles est un bain enveloppé qui a pour but de libérer les mémoires prénatales." 
    keywords="oasis-des-petits, oasisdespetits, oasis des petits, oasis-des-petits Belgique, oasis des petits Belgique, oasis des petits be, oasis-des-petits.be, oasis des petits be, Laura van eeckhoudt, Laura Van Eeckhoudt, bain des merveilles, Ath, Bruxelles, Hainaut, Tournai, Mons, renaissance, Bain thérapeutique bébé, Bain emmailloté, Bain sensoriel, Bain bien-être nouveau-né, Bain relaxant pour bébé, Bain post-natal, Bain apaisant bébé, relaxation, Détente, émotions intra-utérines, rituel post-natal, position fœtale, soins à domicile"
    type="Website" />


<section class="section-hero">
    <Hero />
</section>
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
<section class="section-prices">
    <span>
        <h1 class="title-h1">Les Formules</h1>
    </span>
    <p>Le bain se réalise dans les 3 premières semaines de vie du bébé. Si votre bébé est né prématurément, pas de soucis, c’est la date du terme qui compte.</p>
    <div class={state.isMobile ? "section-content" : "section-content-desktop"}> 
        <Card flipped={state.flippedCard1}>
            {#snippet front()}
                <div class="card-image">
                    <enhanced:img src="/static/serviette_2.webp" width="275" height="275" alt="serviette" class="card-img" />
                </div>
                <div class="card-body">
                    <div class="title">Formule bain</div>
                    <h2>1h30</h2>
                    <h2>90€</h2>
                </div>
                <div class="card-footer">
                    <Button label="En savoir plus" variant="accent-3" onclick={() => flipCard(Topics.FORMULE1)} />
                    <Button label="Réserver" onclick={() => openModal(Topics.FORMULE1)} />
                </div>
            {/snippet}
            {#snippet back()}
            <div class="card-body card-body-back">
                <div class="title">Description</div>
                <p>Cette formule comprend l’entretien avec les parents, le bain, ainsi qu’un moment de peau à peau. 
                    Celle-ci dure environ 1h30.</p>
            </div>
            <div class="card-footer">
                <Button label="Retour" variant="accent-3" onclick={() => flipCard(Topics.FORMULE1)} />
                <Button label="Réserver" onclick={() => openModal(Topics.FORMULE1)} />
            </div>
            {/snippet}
        </Card>
        <Card flipped={state.flippedCard2}>
            {#snippet front()}
                <div class="card-image">
                    <enhanced:img src="/static/serviette_2.webp" width="275" height="275" alt="serviette" class="card-img" />
                </div>
                <div class="card-body">
                    <div class="title">Formule bain & Tétra</div>
                    <h2>1h30</h2>
                    <h2>115€</h2>
                </div>
                <div class="card-footer">
                    <Button label="En savoir plus" variant="accent-3" onclick={() => flipCard(Topics.FORMULE2)} />
                    <Button label="Réserver" onclick={() => openModal(Topics.FORMULE1)} />
                </div>
            {/snippet}
            {#snippet back()}
            <div class="card-body card-body-back">
                <div class="title">Description</div>
                <p>Cette formule comprend l’entretien avec les parents, le choix du tetra pour l’emmaillotement (que vous garderez en 
                    souvenir à la fin de la séance), le bain ainsi qu’un moment de peau à peau. Celle-ci dure environ 1h30. </p>
            </div>
            <div class="card-footer">
                <Button label="Retour" variant="accent-3" onclick={() => flipCard(Topics.FORMULE2)} />
                <Button label="Réserver" onclick={() => openModal(Topics.FORMULE1)} />
            </div>
            {/snippet}
        </Card>
        <Card flipped={state.flippedCard3}>
            {#snippet front()}
                <div class="card-image">
                    <enhanced:img src="/static/serviette_2.webp" width="275" height="275" alt="serviette" class="card-img" />
                </div>
                <div class="card-body">
                    <div class="title">Formule bain & reportage photos</div>
                    <h2>1h30</h2>
                    <h2>265€</h2>
                </div>
                <div class="card-footer">
                    <Button label="En savoir plus" variant="accent-3" onclick={() => flipCard(Topics.FORMULE3)} />
                    <Button label="Réserver" onclick={() => openModal(Topics.FORMULE1)} />
                </div>
            {/snippet}
            {#snippet back()}
            <div class="card-body card-body-back">
                <div class="title">Description</div>
                <p>Cette formule comprend l’entretien avec les parents, le bain, un moment de peau à peau ainsi qu’un reportage photos du bain (10 photos comprises). 
                    Celle-ci dure environ 1h30</p>
            </div>
            <div class="card-footer">
                <Button label="Retour" variant="accent-3" onclick={() => flipCard(Topics.FORMULE3)} />
                <Button label="Réserver" onclick={() => openModal(Topics.FORMULE1)} />
            </div>
            {/snippet}
        </Card>
    </div>
</section>
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
                            alt="Laura Van Eeckhoudt - Certifiée baigneuse Bain des Merveilles"
                            class="img-about" />
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
<section class="section-portfolio">
    <h1 class="title-h1">Galerie</h1>
    <Portfolio isMobile={state.isMobile}/>
</section>

<style>
    .section-hero {
        height: auto;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
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
    .section-prices {
        height: auto;
        width: auto;
        display: flex;
        flex-direction: column;
        & p {
            margin: 0 var(--size-fluid-4);
        }
        & .section-content {
            display: flex;
            flex-direction: column;
            gap: var(--size-fluid-4);
            margin-top: var(--size-fluid-4);
        }
        & .section-content-desktop {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
        }
        & .card-image {
            margin: var(--size-fluid-2);
            & .card-img {
                max-width: 100%;
                border-radius: var(--radius-3);
            }
        }
        & .card-body {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: var(--size-fluid-3);
            & .title {
                font-size: var(--size-fluid-3);
                text-align: center;
                color: hsl(var(--dark-green-1));
            }
            & h2 {
                font-size: var(--size-fluid-2);
            }
        }
        & .card-body-back {
            padding: var(--size-fluid-3);
            display: flex;
            height: 100%;
            & p {
                flex: 1 auto;
            }
        }
        & .card-footer {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--size-fluid-2);
            padding: var(--size-fluid-2);
        }
    }
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
                display: flex;
                justify-content: center;
                align-items: center;
                & .img-about {
                    border-radius: var(--radius-3);
                }
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
            margin: 0 var(--size-fluid-4);
        }
    }
    .section-portfolio {
        height: auto;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>