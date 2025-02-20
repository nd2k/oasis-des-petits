<script lang="ts">
    import { page } from "$app/state";
    let { title, description, type, keywords } = $props();
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content={type} />
    <meta property="og:URL" content="${page.url.href}" />
    <meta property="og:image" content="https://www.oasis-des-petits.be/logo.png" />
    <meta property="og:description" content={description} />
    {@html `<script type="application/ld+json">{
        "@content": "http://schema.org",
        "@type": "${type}",
        "name": "${title}",
        "url": "${page.url.href}"
    }
    </script>`}
</svelte:head>