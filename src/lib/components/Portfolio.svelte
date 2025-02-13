<script lang="ts">
    import * as Icon from 'svelte-awesome-icons';
    import photo_1 from '../../../static/gallery/photo_1.webp?enhanced'
    import photo_2 from '../../../static/gallery/photo_2.webp?enhanced'
    import photo_3 from '../../../static/gallery/photo_3.webp?enhanced'
    import photo_4 from '../../../static/gallery/photo_4.webp?enhanced'
    import photo_5 from '../../../static/gallery/photo_5.webp?enhanced'
    import photo_6 from '../../../static/gallery/photo_6.webp?enhanced'
    import photo_7 from '../../../static/gallery/photo_7.webp?enhanced'
    import photo_8 from '../../../static/gallery/photo_8.webp?enhanced'
    import photo_9 from '../../../static/gallery/photo_9.webp?enhanced'

    const imgGalleryName = [
        {
            src: photo_1,
            alt: "bain me",
        },
        {
            src: photo_2,
            alt: "photo 2"
        },
        {
            src: photo_3,
            alt: "photo 3"
        },
        {
            src: photo_4,
            alt: "photo 4"
        },
        {
            src: photo_5,
            alt: "photo 5"
        },
        {
            src: photo_6,
            alt: "photo 6"
        },
        {
            src: photo_7,
            alt: "photo 7"
        },
        {
            src: photo_8,
            alt: "photo 8"
        },
        {
            src: photo_9,
            alt: "photo 9"
        }        
    ];
    
    let currentIndex = $state(0);
    let isVisible = $state(false);
    let portfolio: HTMLElement;
    let images:HTMLImageElement[] = [];
    let lightbox: HTMLElement|null = $state(null);
    let lightboxImg: HTMLImageElement|null = $state(null);
    let closeBtn: HTMLElement|null = $state(null);

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
    <div class="grid">
        {#each imgGalleryName as img, index}
            <div class="grid-item">
                <button onclick={showLightbox} class="btn" aria-label="zoom photo">
                    <enhanced:img src="{img.src}" alt="{img.alt}" data-index={index} class="thumbnail" />
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
                & img {
                    width: 200px;
                    height: auto;
                }
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