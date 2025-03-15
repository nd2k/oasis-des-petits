<script lang="ts">
    let bubbles = [
        { size: 80, color: 'hsl(var(--dark-green-1))', left: '90%', top: '40px' },
        { size: 150, color: 'hsl(var(--light-green-1))', left: '10%', top: '350px' },
        { size: 150, color: 'hsl(var(--light-pink-1))', left: '40%', top: '650px' },
        { size: 80, color: 'hsl(var(--dark-green-1))', left: '25%', top: '780px' },
        { size: 150, color: 'hsl(var(--light-green-1))', left: '10%', top: '1500px' },
        { size: 150, color: 'hsl(var(--light-pink-1))', left: '40%', top: '1600' },
    ]
</script>

<div class="text">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam alias temporibus molestiae quisquam nostrum aliquam velit, eius architecto quaerat veniam ipsam placeat expedita, cupiditate vitae odio reprehenderit, id eos?</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam alias temporibus molestiae quisquam nostrum aliquam velit, eius architecto quaerat veniam ipsam placeat expedita, cupiditate vitae odio reprehenderit, id eos?</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam alias temporibus molestiae quisquam nostrum aliquam velit, eius architecto quaerat veniam ipsam placeat expedita, cupiditate vitae odio reprehenderit, id eos?</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam alias temporibus molestiae quisquam nostrum aliquam velit, eius architecto quaerat veniam ipsam placeat expedita, cupiditate vitae odio reprehenderit, id eos?</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam alias temporibus molestiae quisquam nostrum aliquam velit, eius architecto quaerat veniam ipsam placeat expedita, cupiditate vitae odio reprehenderit, id eos?</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam alias temporibus molestiae quisquam nostrum aliquam velit, eius architecto quaerat veniam ipsam placeat expedita, cupiditate vitae odio reprehenderit, id eos?</p>
</div>

<div class="container">
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

<style>
    .container {
        height: 2000px;
        width: 100vw;
        position: absolute;
        aspect-ratio: 103/250;
    }
    .bubble {
        border-radius: 50%;
        z-index: -1000;
        position: absolute;
        will-change: transform;
      }
    
    .text {
      display: flex;
      flex-direction: column;
      gap: 15rem;
    }
</style>