<script lang="ts">
    let { value = $bindable(), rows = 5, children = null, ...props } = $props(); 

    let fieldState = $state({
        isFocus: false,
        isEmpty: true
    })
    
    function onFocus() {
        fieldState.isEmpty = value.length === 0 ? true : false;
        fieldState.isFocus = true;
    }

    function outFocus() {
        fieldState.isEmpty = value.length === 0 ? true : false;
        fieldState.isFocus = value.length === 0 ? false : true;
    }
</script>

<div class="label-container">
    {#if children !== null}
    <div class="icon" class:active={fieldState.isFocus}>
        {@render children()}
    </div>
    {/if}
    <label for={props.id} class:active={fieldState.isFocus}>{props.label}</label>
</div>
<textarea id={props.id} name={props.id} {rows} bind:value={value} onfocus={onFocus} onfocusout={outFocus}>
</textarea>

<style>
    .label-container {
        display: flex;
        align-items: center;
        gap: var(--size-fluid-2);
        & .active {
            color: hsl(var(--light-pink-1));
        }
        & label {
            font-size: 1rem;
            pointer-events: none;
            font-size: var(--size-fluid-2);
        }
    }
    textarea {
        border-radius: var(--radius-3);
        padding: var(--size-fluid-2);
        font-size: 1rem;
    }
</style>