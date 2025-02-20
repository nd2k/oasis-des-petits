<script lang="ts">
  import { state } from "$lib/state.svelte";
	import { onMount } from "svelte";

  let background: HTMLElement|null = null;

  onMount(() => {
     // Set event listener for window resize
    window?.addEventListener('resize', () => {
      checkViewportSize();
    });
    // Set event listener for device orientation change
    window?.addEventListener('orientationchange', () => {
      checkViewportSize();
    });
    window?.addEventListener('scroll', () => {
      var elements = document.querySelectorAll('.bubble');
      elements.forEach((element) => {
        checkTargetPosition(element);
        isInViewport(element);
      })
    })
    
    
  })

  // Function to check target element's position
var checkTargetPosition = (element: Element) => {
    // get bounding client rect from element
    var rect = element.getBoundingClientRect();
    // grab measurements and percentage conversion
    var fromTop = rect.top;
    var fraction = rect.top/state.height;
    var percentage = fraction * 100;
    console.log('target scroll:', fromTop, 'px from top.', fraction, '/', percentage, '%');
  }

  var isInViewport = (element: Element) => {
    var rect = element.getBoundingClientRect();
    var position = rect.top/state.height;
    if (position >= 0 && position <= 1) {
      console.log('isVisible');
      
      return true;
    }
    else {
      console.log('isNotVisible');
      return false;
    }
}

  var checkViewportSize = () => {
  console.log(state.height, 'h x', state.width, 'w');
}

  let bubbles = [
      { size: 200, color: 'hsl(var(--light-pink-1))', left: 'min(-1vw, -10px)', top: 'min(-8vh, -80px)' },
      { size: 80, color: 'hsl(var(--dark-green-1))', left: 'min(90vw, 350px)', top: 'min(90vh, 210px)' },
      // { size: 150, color: 'hsl(var(--light-green-1))', left: '-10%', top: '23%' },
      // { size: 300, color: 'hsl(var(--dark-green-1))', left: '40%', top: '33%' },
      // { size: 200, color: 'hsl(var(--beige-1))', left: '0%', top: '45%' },
      // { size: 400, color: 'hsl(var(--light-green-1))', left: '45%', top: '52%' },
      // { size: 150, color: 'hsl(var(--light-pink-1))', left: '-10%', top: '67%' },
      // { size: 250, color: 'hsl(var(--dark-green-1))', left: '45%', top: '75.5%' },
      // { size: 300, color: 'hsl(var(--light-green-1))', left: '10%', top: '87%' },
  ];
</script> 

<svelte:window />
<div class="bubble-container" style="max-width: {state.width}px;" bind:this={background} >
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
    height: 700vh;
    min-width: 100%;
    overflow: hidden;
  }

  .bubble {
    border-radius: 50%;
    z-index: -1000;
    position: absolute;
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