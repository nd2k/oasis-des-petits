<script lang="ts">
	import { browser } from "$app/environment";
	import { PUBLIC_GOOGLE_ANALYTICS_ID } from "$env/static/public";
	import { onMount } from "svelte";

  onMount(() => {
    if (browser && import.meta.env.MODE === "production") {
      const GA_MEASUREMENT_ID = PUBLIC_GOOGLE_ANALYTICS_ID;
      setTimeout(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) { window.dataLayer.push(args); }
        gtag("js", new Date());
        gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
      }, 1000);
    }
  });
  
</script>