<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import Card from "$lib/components/Card.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import { Topics } from "$lib/interface";
	import { flipCard, openModal } from "$lib/utils";
    import { state } from "$lib/state.svelte";

</script>

<Seo 
    title="Oasis-des-petits | Nos formules" 
    description="Présentation de nos formules disponibles" 
    keywords="oasis-des-petits, oasisdespetits, oasis des petits, oasis-des-petits Belgique, oasis des petits Belgique, oasis des petits be, oasis-des-petits.be, oasis des petits be, Laura van eeckhoudt, Laura Van Eeckhoudt, bain des merveilles, Ath, Bruxelles, Hainaut, Tournai, Mons, renaissance, Bain thérapeutique bébé, Bain emmailloté, Bain sensoriel, Bain bien-être nouveau-né, Bain relaxant pour bébé, Bain post-natal, Bain apaisant bébé, relaxation, Détente, émotions intra-utérines, rituel post-natal, position fœtale, soins à domicile"
    type="Website" />
    
<section class="formules">
    <h1 class="title-h1">Les Formules</h1>
    <p class="section-content"> Le bain se réalise dans les 3 premières semaines de vie du bébé. Si votre bébé est né prématurément, pas de soucis, c’est la date du terme qui compte</p>
    <Card flipped={state.flippedCard1}>
        {#snippet front()}
            <div class="card-image">
                <enhanced:img src="/static/serviette_2.webp" width="275" height="275" alt="serviette" />
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
                <enhanced:img src="/static/serviette_2.webp" width="275" height="275" alt="serviette" />
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
                <enhanced:img src="/static/serviette_2.webp" width="275" height="275" alt="serviette" class="img-card" />
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
</section>

<style>
    section {
        padding-bottom: var(--size-fluid-5);
    }
    .formules {
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-fluid-4);
    & .card-image {
        padding: var(--size-fluid-2);
    }
    & .card-body {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: var(--size-fluid-3);
            min-height: 10rem;
            & .title {
                font-size: var(--size-fluid-3);
                text-align: center;
            }
            & h2 {
                font-size: var(--size-fluid-2);
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
</style>