<script lang="ts">
    import { state } from '$lib/state.svelte';
</script>

{#if state.isLoading}
    <div class="container">
        <div class="loader"></div>
    </div>
{/if}

<style>
.container {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}

.loader {
  animation: spinningColor 1.5s ease-in-out infinite;
  margin: 50px auto;
  border: 5px double #f0eff5;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

@keyframes spinningColor {
  0% {
    transform: rotate(360deg);
    border-top:5px dashed hsl(var(--beige-1));
    border-bottom:5px dashed hsl(var(--dark-green-1));
  }
  25% {
    border-top:5px dashed hsl(var(--beige-1));
    border-bottom:5px dashed hsl(var(--dark-green-1));
  }
  50% {
    border-top:5px dashed hsl(var(--beige-1));
    border-bottom:5px dashed hsl(var(--dark-green-1));
  }
  75% {
    border-top:5px dashed hsl(var(--beige-1));
    border-bottom:5px dashed hsl(var(--dark-green-1));
  }
  100% {
    border-top:5px dashed hsl(var(--beige-1));
    border-bottom:5px dashed hsl(var(--dark-green-1));
  }
}
</style>