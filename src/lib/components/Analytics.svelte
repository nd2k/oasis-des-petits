<script lang="ts">
	import { browser } from "$app/environment";
	import { PUBLIC_GOOGLE_ANALYTICS_ID } from "$env/static/public";
	import { onMount } from "svelte";

  onMount(() => {
    if (typeof window !== 'undefined' && window) {
      const GA_MEASUREMENT_ID = PUBLIC_GOOGLE_ANALYTICS_ID;
      setTimeout(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag(key: string, arg: any) {
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);
      }, 1000);
    }
  });
  
</script>