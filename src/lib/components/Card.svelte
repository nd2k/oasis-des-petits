<script lang="ts">
    import { state } from "$lib/state.svelte";
    let { flipped = false, front, back } = $props();

</script>

<div class="card-container">
    <div class="card" class:flipped={flipped}>
        <div class="card-front">
            {@render front()}
        </div>
        <div class="card-back">
            {@render back()}
        </div>
    </div>
</div>

<style>
    .card-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        perspective: 1000px;
        & .card {
            width: var(--size-fluid-10);
            height: var(--size-fluid-20);
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s;
        }
    }
/*     
    .card-container-desktop {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex: 1;
        perspective: 1000px;
        margin: var(--size-fluid-3);
        & .card {
            width: clamp(17rem, 30vw, 25rem);
            height: var(--size-fluid-20);
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s;
        }
    } */

    .flipped {
        transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .card-front {
        background: hsl(var(--white-0));
    }

    .card-back {
        background: hsl(var(--white-0));
        transform: rotateY(180deg);
    }
</style>