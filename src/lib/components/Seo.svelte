<script lang="ts">
    import { page } from "$app/state";
    let { title, description, type } = $props();
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {@html `<script type="application/ld+json">{
        "@content": "http://schema.org",
        "@type": "${type}",
        "name": "${title}",
        "url": "${page.url.href}"
    }
    </script>`}
</svelte:head>