<script lang="ts">
    import * as Icon from 'svelte-awesome-icons';
    import photo_1 from '$lib/gallery/photo_1.webp?enhanced'
    import photo_2 from '$lib/gallery/photo_2.webp?enhanced'
    import photo_3 from '$lib/gallery/photo_3.webp?enhanced'
    import photo_4 from '$lib/gallery/photo_4.webp?enhanced'
    import photo_6 from '$lib/gallery/photo_6.webp?enhanced'
    import photo_7 from '$lib/gallery/photo_7.webp?enhanced'
    import photo_8 from '$lib/gallery/photo_8.webp?enhanced'
    import photo_9 from '$lib/gallery/photo_9.webp?enhanced'
	import { setScreenSize } from '$lib/utils';
	import { onMount } from 'svelte';

    const imgGalleryName = [
        {
            src: photo_1,
            alt: "bain renaissance & bain naissance",
        },
        {
            src: photo_2,
            alt: "bain des merveilles avec tétra - position foetale"
        },
        {
            src: photo_3,
            alt: "bain des merveilles avec tétra - oasis des petits"
        },
        {
            src: photo_4,
            alt: "oasis-des-petits bain bien être - mémoire prénatales"
        },
        {
            src: photo_6,
            alt: "bain relaxant oasis des petits Belgique et détente"
        },
        {
            src: photo_7,
            alt: "bain post-natal - bain thérapeutique et sérénité"
        },
        {
            src: photo_8,
            alt: "bain agréable et relaxant - Connexion"
        },
        {
            src: photo_9,
            alt: "expérience extra utérine - Famille"
        }        
    ];
    
    let { isMobile } = $props();
    let currentIndex = $state(0);
    let isVisible = $state(false);
    let portfolio: HTMLElement;
    let images:HTMLImageElement[] = [];
    let lightbox: HTMLElement|null = $state(null);
    let lightboxImg: HTMLImageElement|null = $state(null);
    let closeBtn: HTMLElement|null = $state(null);

    onMount(() => {
        setScreenSize();
    })

    $effect(() => {
        images = Array.from(portfolio.querySelectorAll('img'));
        lightbox = document.querySelector('.lightbox');
        if (lightbox !== null && lightboxImg !== null) {
            let imgSrc = images[currentIndex].src;
            lightboxImg.src = imgSrc;
            lightboxImg.alt = images[currentIndex].alt;
        }
    })

    function showLightbox(e:Event) {
        isVisible = true;
        const target = e.target as HTMLElement;
        currentIndex = target.dataset.index !== undefined ? parseInt(target.dataset.index) : 1;
    }

    function previousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
    }

    function closeLightbox(e: Event) {
        const target = e.target as HTMLElement;
        if (target === closeBtn || target === lightbox || target.parentElement === closeBtn || target.parentElement?.parentElement === closeBtn) {
            isVisible = false;
        }
    }

    function closeKeyAction(event: KeyboardEvent): void {
        if (event.key === 'Escape') {
            isVisible = false;
        }
    }
    
</script>

<div class="portfolio" bind:this={portfolio}>
    <div class="{isMobile ? "grid-container" : "grid-container desktop"}">
        {#each imgGalleryName as img, index}
            <button onclick={showLightbox} aria-label="zoom photo" class="btn grid-item-{index}">
                <enhanced:img 
                    src="{img.src}?w=1280;640;400"
                    sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" 
                    alt="{img.alt}" 
                    data-index={index} 
                    class="thumbnail" />
            </button>
        {/each}
    </div>
</div>

{#if isVisible}
    <div class="lightbox" bind:this={lightbox} onclick={closeLightbox} onkeydown={closeKeyAction} role="button" tabindex="-1">
        <button class="close" onclick={closeLightbox} bind:this={closeBtn}><Icon.CircleXmarkSolid /></button>
        <button class="prev" onclick={previousImage}><Icon.CircleArrowLeftSolid/></button>
        <img src="/" alt="ligthbox"  bind:this={lightboxImg}/>
        <button class="next" onclick={nextImage}><Icon.CircleArrowRightSolid /></button>
    </div>
{/if}

<style>
    .portfolio {
        padding-bottom: var(--size-fluid-3);
        & .grid-container {
            display: grid;
            grid-template-columns: auto auto;
            gap: var(--size-fluid-1);
            margin: auto;
            width: 90%;
            & button {
                margin: 0;
                padding: 0;
                border: none;
                & .thumbnail {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: var(--radius-2);
                }
            }
        }
        & .desktop {
            grid-template-columns: auto auto auto auto;
        }
    }

    .lightbox {
            display: flex;
            position: fixed;
            top: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
            z-index: 1000;
            & img {
                max-width: 90%;
                max-height: 90%;
                border-radius:  var(--radius-3);
                animation: fadeIn 2s;
            }
            & .prev,
            & .next {
                height: 3rem;
                width: 3rem;
                position: absolute;
                transform: translateY(-50%);
                font-size: var(--size-fluid-4);
                background-color: transparent;
                color: hsl(var(--white-0));
                padding: var(--size-px-1);
                cursor: pointer;
                z-index: 1001;
                border: none;
            }
            & .prev {
                left: var(--size-fluid-2);
            }
            & .next {
                right: var(--size-fluid-2);
            }
            & .close {
                position: absolute;
                top: var(--size-fluid-4);
                right: var(--size-fluid-3);
                font-size: var(--size-fluid-4);
                color: hsl(var(--white-0));
                background: none;
                cursor: pointer;
                border: none;
                z-index: 1001;
            }
        }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>