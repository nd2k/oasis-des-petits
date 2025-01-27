<script lang="ts">
    let {image = "./serviette_2.webp", children} = $props();
</script>

<div class="card">
    <div class="card-image">
        <img src={image} alt="serviette" />
    </div>
    {@render children()}
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
    }
</style>