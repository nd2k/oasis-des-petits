<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import Card from "$lib/components/Card.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import { Topics } from "$lib/interface";
	import { openModal } from "$lib/utils";

    let image = "./serviette_2.webp";
    let flippedCard1 = false;
    let flippedCard2 = false;
    let flippedCard3 = false;

    function flipCard(topic: Topics) {
        if (Topics.FORMULE1 === topic) {
            flippedCard1 = !flippedCard1;
        }
        if (Topics.FORMULE2 === topic) {
            flippedCard2 = !flippedCard2;
        }
        if (Topics.FORMULE3 === topic) {
            flippedCard3 = !flippedCard3;
        }
    }

</script>

<Seo 
    title="Nos formules | Descriptions de nos services" 
    description="Vous trouverez toutes les informations concernant nos trois formules tarifaires comme la durée de la prestation, ce qu'elle comprend et son prix." 
    type="Website"/>
    
<section class="formules">
    <h1 class="title-h1">Les Formules</h1>
    <Card flipped={flippedCard1}>
        {#snippet front()}
            <div class="card-image">
                <img src={image} alt="serviette" />
            </div>
            <div class="card-body">
                <div class="title">Formule bain</div>
                <h2>1h30</h2>
                <h2>100€</h2>
            </div>
            <div class="card-footer">
                <Button label="En savoir plus" variant="accent-3" onclick={() => flipCard(Topics.FORMULE1)} />
                <Button label="Reservez" onclick={() => openModal(Topics.FORMULE1)} />
            </div>
        {/snippet}
        {#snippet back()}
        <div class="card-body">
            <div class="title">Description</div>
            <p>Notre formule comprend ...</p>
        </div>
        <div class="card-footer">
            <Button label="Retour" onclick={() => flipCard(Topics.FORMULE1)} />
        </div>
        {/snippet}
    </Card>
    <Card flipped={flippedCard2}>
        {#snippet front()}
            <div class="card-image">
                <img src={image} alt="serviette" />
            </div>
            <div class="card-body">
                <div class="title">Formule bain & reportage photos</div>
                <h2>1h30</h2>
                <h2>270€</h2>
            </div>
            <div class="card-footer">
                <Button label="En savoir plus" variant="accent-3" onclick={() => flipCard(Topics.FORMULE2)} />
                <Button label="Reservez" onclick={() => openModal(Topics.FORMULE1)} />
            </div>
        {/snippet}
        {#snippet back()}
        <div class="card-body">
            <div class="title">Description</div>
            <p>Notre formule comprend ...</p>
        </div>
        <div class="card-footer">
            <Button label="Retour" onclick={() => flipCard(Topics.FORMULE2)} />
        </div>
        {/snippet}
    </Card>
    <Card flipped={flippedCard3}>
        {#snippet front()}
            <div class="card-image">
                <img src={image} alt="serviette" />
            </div>
            <div class="card-body">
                <div class="title">Formule bain & reportage photos</div>
                <h2>1h30</h2>
                <h2>270€</h2>
            </div>
            <div class="card-footer">
                <Button label="En savoir plus" variant="accent-3" onclick={() => flipCard(Topics.FORMULE3)} />
                <Button label="Reservez" onclick={() => openModal(Topics.FORMULE1)} />
            </div>
        {/snippet}
        {#snippet back()}
        <div class="card-body">
            <div class="title">Description</div>
            <p>Notre formule comprend ...</p>
        </div>
        <div class="card-footer">
            <Button label="Retour" onclick={() => flipCard(Topics.FORMULE3)} />
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
        img {
            border-radius: var(--radius-3);
            max-width: 100%;
        }
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