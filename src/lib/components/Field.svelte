<script lang="ts">
	import { onMount } from "svelte";
    import * as Icon from 'svelte-awesome-icons';

    let props = $props();
</script>

<div class="field-input">
    <input />
    {#if props.icon != null}
    <div class="icon-label">
        <div class="icon-icon">
            <props.icon />
        </div>
        <div class="icon-label">{props.label}</div>
    </div>    
    {:else}
    <div class="label">{props.label}</div>
    {/if}
</div>


<style>
    .field-input {
        position: relative;
        cursor: pointer;
        padding: var(--size-fluid-2) 0;
        & .icon-label {
            position: absolute;
            top: 20%;
            left: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--size-fluid-2);
            pointer-events: none;
            & .icon-label {
                position: relative;
            }
        }
        & .label {
            position: absolute;
            top: 40%;
            left: 0;
        }
        & input {
            position: relative;
            border: none;
            outline: none;
            width: 100%;
            margin: var(--size-fluid-2) 0;
        }
        & input:focus {
            border-bottom: 1px solid hsl(var(--light-pink-1));
        }

        & input:focus +.label,
          input:focus +.icon-label {
            color: hsl(var(--light-pink-1));
            top: 0;
            transition: 0.2s;
        }
    }
</style>