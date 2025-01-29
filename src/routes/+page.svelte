<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import Card from '$lib/components/Card.svelte';
    import Button from '$lib/components/Button.svelte';
    import { state } from '$lib/state.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Field from '$lib/components/Field.svelte';
    import * as Icon from 'svelte-awesome-icons';
    import { disabledButton, emailValidation, firstNameValidation, nameValidation, phoneValidation } from '$lib/utils';
	import { ButtonType } from '$lib/interface';
	import { enhance } from '$app/forms';
	import Textarea from '$lib/components/Textarea.svelte';

    function openModal() {
        state.modalIsOpened = true;
    }

    function closeModal() {
        state.modalIsOpened = false;
    }
    
</script>

<Modal>
    <div class="modal">
        <p>Pour réserver votre formule préférée, veuillez remplir le formulaire de réservation ci-dessous.<br>
        Je prendrai soin de vous recontacter pour fixer ensemble un rendez-vous</p>
        <form on:submit|preventDefault method="POST" use:enhance>
            <Field id="name" label="Nom" icon={Icon.IdCardSolid} bind:value={state.bookingForm.name} onblur={() => nameValidation(state.bookingForm.name)} validation={state.nameValidationState} />
            <Field id="firstName" label="Prénom" icon={Icon.IdCardSolid} bind:value={state.bookingForm.firstName} onblur={() => firstNameValidation(state.bookingForm.firstName)} validation={state.firstNameValidationState} />
            <Field id="email" label="Email" icon={Icon.EnvelopeSolid} bind:value={state.bookingForm.email} onblur={() => emailValidation(state.bookingForm.email)} validation={state.emailValidationState}/>
            <Field id="phone" label="Téléphone" icon={Icon.PhoneSolid} bind:value={state.bookingForm.phone} onblur={() => phoneValidation(state.bookingForm.phone)} validation={state.phoneValidationState} />
            <Field id="hp" label="hp" bind:value={state.bookingForm.hp} invisible={true}/>
            <Textarea id="request" label="Posez votre question" icon={Icon.CircleQuestionSolid} bind:value={state.bookingForm.message}/>
            <Button disabled={disabledButton()} type={ButtonType.SUBMIT}/>
        </form>
    </div>
</Modal>

<Hero />

<section class="formules">
    <h1 class="title-h1">Nos Formules</h1>
    <Card>
        <div class="card-body">
            <div class="title">Formule bain</div>
            <h2>1h30</h2>
            <h2>100€</h2>
        </div>
        <div class="card-footer">
            <Button label="Reservez" onclick={openModal} />
        </div>
    </Card>
    <Card>
        <div class="card-body">
            <div class="title">Formule bain & Tétra</div>
            <h2>1h30</h2>
            <h2>120€</h2>
        </div>
        <div class="card-footer">
            <Button label="Reservez" onclick={openModal} />
        </div>
    </Card>
    <Card>
        <div class="card-body">
            <div class="title">Formule bain & reportage photos</div>
            <h2>1h30</h2>
            <h2>270€</h2>
        </div>
        <div class="card-footer">
            <Button label="Reservez" onclick={openModal} />
        </div>
    </Card>
</section>

<section class="bath section">
    <h1 class="title-h1">Le bain</h1>
    <div class="section-content">
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
</section>

<section class="about section">
    <h1 class="title-h1">À propos</h1>
    <div class="section-content">
        <p>Laura Van Eeckhoudt - Certifiée baigneuse « bain des Merveilles »</p>
        <h2 class="title-h2">Mon parcours</h2>
        <p>Après avoir obtenu mon diplôme d’infirmière spécialisée  en pédiatrie et néonatalogie, j’ai commencé à travailler dans un centre néonatal à Bruxelles où j’exerce encore actuellement.</p>
        <p>J’ai toujours eu une certaine sensibilité au bien être du nouveau né et à prendre soin des plus petits.</p>
        <p>Avec une grande envie de développer mes compétences, j’ai eu la chance de me former au Bain des Merveilles a Bordeaux par 
            la talentueuse infirmière puéricultrice Aurélien Cachen.</p>
        <h2 class="title-h2">Mon approche</h2>
        <p>Dans mon quotidien auprès des nouveaux nés prématurés, je leur propose des soins individualisés en respectant leur physiologie, c’est à dire en leur offrant des sensations proches de celles vécues in utéro dans le but de leur apporter une certaine sécurité.</p> 
        <p>Dans cette discipline de bain emmailloté, l’approche est assez similaire car au cours de ce bain, je permet au bébé de retrouver des sensations semblables à celles qui l’avait dans le ventre de sa maman.</p> 
        <p>De plus au cours de ce moment intime entre le bébé et ses parents, ce bain a pour vertu de renforcer les liens d’attachement et de recréer le cocon intra-utérin.</p>
    </div>
</section>

<style>
     .modal {
       form {
        display: flex;
        flex-direction: column;
        gap: var(--size-fluid-2);
       }
       & p {
        border-left: 2px solid hsl(var(--dark-green-1));
        padding-left: var(--size-fluid-2);
        margin-bottom: var(--size-fluid-4);
        font-size: var(--size-fluid-3);
       }
    }
    .title-h1 {
        font-size: var(--size-fluid-4);
        padding: var(--size-fluid-4);
        color: hsl(var(--dark-green-1));
        display: inline-block;
    }
    .title-h1::after {
        content: "";
        display: block;
        width: 75%;
        height: 2px; 
        background-color: hsl(var(--dark-green-1));
        margin-top: var(--size-fluid-2);
    }
    .title-h2 {
        font-size: var(--size-fluid-3);
        padding: var(--size-fluid-2) 0;
        color: hsl(var(--light-green-1));
        display: inline-block;
    }
    .title-h2::after {
        content: "";
        display: block;
        width: 75%;
        height: 2px; 
        background-color: hsl(var(--light-green-1));
        margin-top: var(--size-fluid-2);
    }
    .formules {
        display: flex;
        flex-wrap: wrap;
    & .card-body {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: var(--size-fluid-3);
            min-height: 10rem;
            & .title {
                font-size: var(--size-fluid-3);
            }
            & h2 {
                font-size: var(--size-fluid-2);
            }
        }
        & .card-footer {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: var(--size-fluid-2);
        }
    }
    .section-content {
        padding: 0 var(--size-fluid-4);
    }
    p {
        padding: var(--size-fluid-2) 0;
        text-align: justify;
    }
</style>