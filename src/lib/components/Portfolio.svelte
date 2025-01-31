<script lang="ts">
    import * as Icon from 'svelte-awesome-icons';

    const imgGalleryName = [
        {
            src: "photo_1.webp",
            alt: "bain me"
        },
        {
            src: "photo_2.webp",
            alt: "photo 2"
        },
        {
            src: "photo_3.webp",
            alt: "photo 3"
        },
        {
            src: "photo_4.webp",
            alt: "photo 4"
        },
        {
            src: "photo_5.webp",
            alt: "photo 5"
        },
        {
            src: "photo_6.webp",
            alt: "photo 6"
        },
        {
            src: "photo_7.webp",
            alt: "photo 7"
        },
        {
            src: "photo_8.webp",
            alt: "photo 8"
        },
        {
            src: "photo_9.webp",
            alt: "photo 9"
        },
        {
            src: "photo_10.webp",
            alt: "photo 10"
        },
        
    ];
    
    let currentIndex = $state(0);
    let isVisible = $state(false);
    let portfolio: HTMLElement;
    let images:HTMLImageElement[] = [];
    let lightbox: HTMLElement|null = $state(null);
    let lightboxImg: HTMLImageElement|null = $state(null);
    let closeBtn: HTMLElement|null = $state(null);
    let xmark: HTMLElement|null = $state(null);

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
        if (target === closeBtn || target === lightbox || target.parentElement === closeBtn) {
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
    <div class="grid">
        {#each imgGalleryName as img, index}
            <div class="grid-item">
                <button onclick={showLightbox} class="btn">
                    <img src="./gallery/{img.src}" alt="{img.alt}" data-index={index} class="thumbnail" />
                </button>
            </div>
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
    .grid {
        position: relative;
        column-count: 2;
        gap: var(--size-px-2);
        & .grid-item {
            margin: 0;
            margin-bottom: var(--size-px-1);
            & .btn {
                margin: 0;
                padding: 0;
                border: none;
            }
            & img {
                width: 100%;
            }
        }
    }
    .lightbox {
        display: flex;
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
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
            top: var(--size-fluid-3);
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