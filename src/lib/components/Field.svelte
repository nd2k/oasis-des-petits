<script lang="ts">
    let { value = $bindable(), ...props} = $props();
    let isEmpty = $state(true);

    $effect(() => {        
        isEmpty = value.length === 0 ? true : false;
    })
</script>

<div class="field-input">
    {#if props.icon !== null}
        <div class="icon">
            <props.icon />
        </div>
    {/if}
    <div class="input-container">
        <input id={props.id} type="text" bind:value={value} class={isEmpty ? 'empty' :  ''}/>
        <label for={props.id}>{props.label}</label>
    </div>
</div>


<style>
    .field-input {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--size-fluid-2);
        padding: var(--size-fluid-2) 0;
        & .input-container {
            position: relative;
            flex: 1;
            display: flex;
            flex-direction: column;
            & input {
                border: none;
                outline: none;
            }
            & input:focus {
                border-bottom: 1px solid hsl(var(--light-pink-1));
            }
            & label {
                position: absolute;
                top: 100%;
                left: 0;
                transform: translateY(-100%);
                font-size: 1rem;
                transition: all 0.2s ease;
                pointer-events: none;
            }
            & input:focus +label,
            input:not(.empty) +label{
                color: hsl(var(--light-pink-1));
                top: 0;
            }
        }
    }
</style>