<script lang="ts">
    import Button from '$lib/components/button/Button.svelte';
    let {title="Formule bain", timing="1h", price="100€"} = $props();
</script>

<div class="card">
    <div class="card-image">
        <img src="./serviette.webp" alt="serviette" />
    </div>
    <div class="card-body">
        <h1>{title}</h1>
        <h2>{timing}</h2>
        <h2>{price}</h2>
    </div>
    <div class="card-footer">
        <Button label="Réservez"/>
    </div>
</div>

<style>
    .card {
        box-shadow: var(--shadow-3);
        border-radius: var(--radius-3);
        margin: var(--size-fluid-3) auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--size-fluid-2);
        width: var(--size-fluid-10);
        position: relative;
        z-index: 10;
        background-color: hsl(var(--white-0));
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
            h1 {
                font-size: var(--size-fluid-3);
            }
            h2 {
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
</style>