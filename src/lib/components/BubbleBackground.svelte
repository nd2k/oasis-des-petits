<script lang="ts">
    let bubbles = [
        { size: 200, color: 'hsl(var(--light-pink-1))', left: '-10%', top: '20%' },
        { size: 150, color: 'hsl(var(--dark-green-1))', left: '75%', top: '23%' },
        { size: 300, color: 'hsl(var(--light-green-1))', left: '50%', top: '48%' },
        { size: 200, color: 'hsl(var(--beige-1))', left: '-20%', top: '70%' },
        { size: 400, color: 'hsl(var(--light-green-1))', left: '55%', top: '90%' },
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
          position: absolute;
        "
      ></div>
    {/each}
  </div>
  
  <style>
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1; 
      pointer-events: none;
      overflow-x: hidden;
      .bubble {
        border-radius: 50%;
        box-shadow: var(--shadow-3);
      }
    }
  </style>
  