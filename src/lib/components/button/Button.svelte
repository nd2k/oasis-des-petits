<script lang="ts">
    let { label = "button", variant = "accent-1" } = $props();
</script>

<button class={variant}>
    {label}
</button>

<style>
    button {
        box-shadow: var(--shadow-3);
        border-radius: var(--radius-2);
        border: none;
        height: var(--size-7);
        padding: var(--size-5);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        cursor: pointer;
    }
    .accent-1 {
        background-color: hsl(var(--dark-green-1));
        color: hsl(var(--white-0));
    }
    .accent-2 {
        background-color: hsl(var(--pink-1));
        color: hsl(var(--white-0));
    }
    .accent-3 {
        background-color: hsl(var(--beige-1));
        color: hsl(var(--white-0));
    }
    .accent-3 {
        background-color: hsl(var(--beige-2));
        color: hsl(var(--black-0));
    }
</style>