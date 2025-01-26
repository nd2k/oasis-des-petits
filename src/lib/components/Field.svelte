<script lang="ts">
    import * as Icon from 'svelte-awesome-icons';
    import { ValidationState } from '$lib/interface';

    let { value = $bindable(), ...props} = $props();
    // let isEmpty = $state(true);
    // let isActive = $state(false);
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

    // $effect(() => {        
    //     isEmpty = value.length === 0 ? true : false;
    //     if (!isEmpty) {
    //         isActive = true;
    //     }
    // })
</script>

<div class="field-input">
    {#if props.icon !== null}
        <div class="icon" class:active={fieldState.isFocus}>
            <props.icon />
        </div>
    {/if}
    <div class="input-container">
        <input id={props.id} type="text" bind:value={value} class={fieldState.isEmpty ? 'empty' :  ''} onblur={props.onblur} onfocus={onFocus} onfocusout={outFocus}/>
        <label for={props.id}>{props.label}</label>
        {#if props.validation.validationState === ValidationState.VALID}
            <div class="validation-icon">
                <Icon.CircleCheckSolid />
            </div>
        {/if}
    </div>
</div>
{#if props.validation.validationState === ValidationState.INVALID}
    <div class="error-container">
        <Icon.CircleXmarkSolid />
        {props.validation.errorMessage}
    </div>
{/if}


<style>
    .field-input {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--size-fluid-2);
        padding: var(--size-fluid-2) 0;
        & .icon {
            display: flex;
            align-items: center;
            margin: auto;
        }
        & .active {
            color: hsl(var(--light-pink-1));
        }
        & .input-container {
            position: relative;
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            gap: var(--size-fluid-2);
            & input {
                border: none;
                outline: none;
                flex: 1;
                font-size: var(--size-fluid-3);
                border-radius: 0;
                width: 80%;
            }
            & input:focus {
                border-bottom: 1px solid hsl(var(--light-pink-1));
            }
            & label {
                position: absolute;
                top: 80%;
                left: 0;
                transform: translateY(-90%);
                font-size: 1rem;
                transition: all 0.2s ease;
                pointer-events: none;
                font-size: var(--size-fluid-3);
            }
            & input:focus +label,
            input:not(.empty) +label {
                color: hsl(var(--light-pink-1));
                top: 0;
            }
            & .validation-icon {
                color: var(--green-9);
            }
        }
    }
    .error-container {
        display: flex;
        align-items: center;
        gap: var(--size-fluid-2);
        font-size: var(--size-fluid-2);
        color: var(--red-9);
        padding: 0;
        margin-left: var(--size-fluid-4);
    }
</style>