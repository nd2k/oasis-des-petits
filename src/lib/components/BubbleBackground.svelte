<script lang="ts">
  import { state } from "$lib/state.svelte";

  let bubbles = [];
  if (state.isMobile) {
    bubbles = [
      // { size: 200, color: 'hsl(var(--light-pink-1))', left: '-5%', top: '46vh' },
      { size: 80, color: 'hsl(var(--dark-green-1))', left: '90%', top: '97vh' },
      { size: 140, color: 'hsl(var(--light-pink-1))', left: '-5%', top: '131vh' },
      { size: 300, color: 'hsl(var(--dark-green-1))', left: '40%', top: '200vh' },
      { size: 200, color: 'hsl(var(--beige-1))', left: '0%', top: '270vh' },
      { size: 400, color: 'hsl(var(--light-green-1))', left: '35%', top: '317vh' },
      { size: 110, color: 'hsl(var(--light-pink-1))', left: '-10%', top: '407vh' },
      { size: 250, color: 'hsl(var(--dark-green-1))', left: '45%', top: '455vh' },
      { size: 300, color: 'hsl(var(--light-green-1))', left: '5%', top: '570vh' },
  ];
  } else {
    bubbles = [
      { size: 500, color: 'hsl(var(--light-pink-1))', left: '80%', top: '0vh' },
      { size: 300, color: 'hsl(var(--dark-green-1))', left: '50%', top: '70vh' },
      { size: 600, color: 'hsl(var(--light-green-1))', left: '85%', top: '160vh' },
      { size: 450, color: 'hsl(var(--beige-1))', left: '0%', top: '260vh' },
      { size: 100, color: 'hsl(var(--light-pink-1))', left: '-10%', top: '300vh' },
      { size: 600, color: 'hsl(var(--dark-green-1))', left: '50%', top: '305vh' },
      { size: 600, color: 'hsl(var(--light-green-1))', left: '70%', top: '515vh' },
  ];
  }
  
</script> 

<!-- <div class="bubble-container" style="width: {state.width}px; height: {state.backgroundHeight}px" > -->
  <div class="bubbles" style="width: 100vw; height: {state.backgroundHeight}">
    {#each bubbles as bubble, index}
      <div
        class="bubble bubble-{index}"
        style="
          width: {bubble.size}px;
          height: {bubble.size}px;
          background-color: {bubble.color};
          left: {bubble.left};
          top: {bubble.top};
          transform: translate(-50%, -50%);
        "
      ></div>
    {/each}
  </div>
<!-- </div> -->
  
<style>
    .bubbles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      pointer-events: none;
      & .bubble {
        border-radius: 50%;
        z-index: -1000;
        position: absolute;
        will-change: transform;
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