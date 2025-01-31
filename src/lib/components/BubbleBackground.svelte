<script lang="ts">
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;

  onMount(() => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight * 4;
          drawBubbles(ctx);
      };

      const drawBubbles = (ctx: CanvasRenderingContext2D) => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const bubbles = [
              { x: 50, y: 500, radius: 100, color: "rgba(255, 179, 171, 1)" },
              { x: 300, y: 600, radius: 80, color: "rgba(245, 234, 208, 1)" },
              { x: 300, y: 1410, radius: 120, color: "rgba(5, 74, 87, 1)" },
              // { x: 700, y: 700, radius: 90, color: "rgba(100, 255, 100, 0.6)" },
              // { x: 200, y: 900, radius: 50, color: "rgba(255, 100, 50, 0.6)" }
          ];

          bubbles.forEach(({ x, y, radius, color }) => {
              ctx.beginPath();
              ctx.arc(x, y, radius, 0, Math.PI * 2);
              ctx.fillStyle = color;
              ctx.fill();
              ctx.closePath();
          });
      };

      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();

      return () => {
          window.removeEventListener("resize", resizeCanvas);
      };
  });
</script>

<canvas bind:this={canvas} class="bubbles-canvas"></canvas>

<style>
  .bubbles-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 400vh;
      pointer-events: none; 
      z-index: -1000;
  }
</style>
