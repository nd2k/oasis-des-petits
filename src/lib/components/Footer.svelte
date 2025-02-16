<script lang="ts">
    let year = new Date().getFullYear();
</script>

<footer>Laura Van Eeckhoudt &copy;{year}</footer>

<style>
    footer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: hsl(var(--beige-1));
        color: hsl(var(--dark-green-1));
        padding: 0;
        margin: 0;
        height: var(--size-fluid-4);
    }
</style>