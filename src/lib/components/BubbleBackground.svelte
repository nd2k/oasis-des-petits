<script lang="ts">
  import { state } from "$lib/state.svelte";

  let bubbles = [];
  if (state.isMobile) {
    bubbles = [
      { size: 200, color: 'hsl(var(--light-pink-1))', left: '-10%', top: '7%' },
      { size: 80, color: 'hsl(var(--dark-green-1))', left: '90%', top: '16.3%' },
      { size: 150, color: 'hsl(var(--light-green-1))', left: '65%', top: '22.2%' },
      { size: 300, color: 'hsl(var(--dark-green-1))', left: '40%', top: '33%' },
      { size: 200, color: 'hsl(var(--beige-1))', left: '0%', top: '45%' },
      { size: 400, color: 'hsl(var(--light-green-1))', left: '40%', top: '54%' },
      { size: 100, color: 'hsl(var(--light-pink-1))', left: '-10%', top: '69%' },
      { size: 250, color: 'hsl(var(--dark-green-1))', left: '45%', top: '77%' },
      { size: 300, color: 'hsl(var(--light-green-1))', left: '10%', top: '87%' },
  ];
  } else {
    bubbles = [
      { size: 500, color: 'hsl(var(--light-pink-1))', left: '70%', top: '-3%' },
      { size: 300, color: 'hsl(var(--dark-green-1))', left: '50%', top: '12%' },
      { size: 250, color: 'hsl(var(--light-green-1))', left: '80%', top: '28%' },
      { size: 450, color: 'hsl(var(--beige-1))', left: '0%', top: '45%' },
      { size: 100, color: 'hsl(var(--light-pink-1))', left: '-10%', top: '69%' },
      { size: 600, color: 'hsl(var(--dark-green-1))', left: '65%', top: '73%' },
      { size: 600, color: 'hsl(var(--light-green-1))', left: '0%', top: '88%' },
  ];
  }
  
</script> 

<svelte:window />
<div class="bubble-container" style="width: {state.width}px; height: {state.backgroundHeight}px" >
    {#each bubbles as bubble, index}
      <div
        class="bubble bubble-{index}"
        style="
          width: {bubble.size}px;
          height: {bubble.size}px;
          background-color: {bubble.color};
          left: {bubble.left};
          top: {bubble.top};
        "
      ></div>
    {/each}
  </div>
  
<style>
  .bubble-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow: hidden;
    & .bubble {
      border-radius: 50%;
      z-index: -1000;
      position: absolute;
    }
  }

  /* .bubble-0 {
    margin-top: -20%;
    margin-left: -10%;
  }
  .bubble-1 {
    margin-top: 59%;
    margin-left: 90%;
  } */
    
</style>