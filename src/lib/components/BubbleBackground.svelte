<script lang="ts">
  import { state } from "$lib/state.svelte";
</script> 

<!-- <div class="bubble-container" style="width: {state.width}px; height: {state.backgroundHeight}px" > -->
  <div class="bubbles" style="width: 100vw; height: {state.backgroundHeight}">
    {#each state.bubbles as bubble, index}
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