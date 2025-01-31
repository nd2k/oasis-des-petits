<script lang="ts">
    let bubbles = [
        { size: 200, color: 'hsl(var(--light-pink-1))', left: '60%', top: '7%' },
        { size: 80, color: 'hsl(var(--dark-green-1))', left: '90%', top: '16.2%' },
        { size: 150, color: 'hsl(var(--light-green-1))', left: '-10%', top: '23%' },
        { size: 300, color: 'hsl(var(--dark-green-1))', left: '40%', top: '33%' },
        { size: 200, color: 'hsl(var(--beige-1))', left: '0%', top: '45%' },
        { size: 400, color: 'hsl(var(--light-green-1))', left: '45%', top: '52%' },
        { size: 150, color: 'hsl(var(--light-pink-1))', left: '-10%', top: '67%' },
        { size: 250, color: 'hsl(var(--dark-green-1))', left: '45%', top: '75.5%' },
        { size: 300, color: 'hsl(var(--light-green-1))', left: '10%', top: '87%' },
    ];
</script>

<div class="background">
    {#each bubbles as bubble}
      <div
        class="bubble"
        style="
          width: {bubble.size}px;
          height: {bubble.size}px;
          background-color: {bubble.color};
          left: {bubble.left};
          top: {bubble.top};
          position: fixed;
        "
      ></div>
    {/each}
  </div>
  
  <style>
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 400vh;
      z-index: -1; 
      pointer-events: none;
      overflow-x: hidden;
    & .bubble {
        border-radius: 50%;
        box-shadow: var(--shadow-3);
        position: absolute;
      }
    }
    
  </style>