<script lang="ts">  
    let {children} = $props();
    import { state } from '$lib/state/state.svelte';
  
    function closeModal(): void {
      state.modalIsOpened = false;
    }
  
    function handleOutsideClick(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (target !== null && target.classList.contains('modal-overlay')) {
            closeModal();
        }
    }

    function closeKeyAction(event: KeyboardEvent): void {
        if (event.key === 'Escape') {
            state.modalIsOpened = false;
        }
    }

    function handleKeyAction(event: KeyboardEvent): void {
        if (event.key === 'Space') {
            state.modalIsOpened = true;
        }
    }
  </script>
  
  {#if state.modalIsOpened}
    <div class="modal-overlay" onclick={handleOutsideClick} role="button" tabindex="-1" onkeydown={handleKeyAction}>
      <div class="modal-content">
        <button class="close-button" onclick={closeModal} onkeydown={closeKeyAction}>✖</button>
        {@render children()}
      </div>
    </div>
  {/if}
  
  <style>
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
  
    .modal-content {
      background: hsl(var(--white-0));
      border-radius: var(--radius-2);
      padding: var(--size-fluid-3);
      box-shadow: var(--shadow-3);
      width: 80%;
      animation: fadeIn 0.3s ease-out;
    }
  
    .close-button {
      background: none;
      border: none;
      font-size: 1.5rem;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  </style>
  