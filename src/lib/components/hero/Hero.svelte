<script lang="ts">
    let isKeyword1Visible = false;
    let isKeyword2Visible = false;
</script>

<section class="hero">
    <div class="img-hero"></div>
    <div class="slogan">
        <!-- <span class="keyword-1">Renaissance</span>
        <span class="keyword-2">Libération des mémoires préntales</span>
    </div> -->
        <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="circle-path"
                fill= "none"
                d="
                M 20, 50
                a 40,40 0 1,1 80,0
                40,40 0 1,1 -80,0
                "
            />
            <text>
                <textPath href="#circle-path">
                Renaissance - Libération des mémoires prénatales
                </textPath>
            </text>
        </svg>
    </div>
</section>

<style>
    .hero {
        & .img-hero {
            background-image: url('/photo_1.webp');
            background-repeat: no-repeat;
            background-size: contain;
            background-size: 100% 100%;
            height: var(--size-fluid-15);
            width: 100%;
        }
        & .slogan {
            margin-top: var(--size-fluid-3);
            & svg {
                width: 100vmin;
                overflow: visible;
                & path {
                    opacity: var(--show, 0);
                    transition: opacity 1s;
                }
                & text {
                    font-size: var(--size-px-2);
                }
            }
        }
    }
</style>