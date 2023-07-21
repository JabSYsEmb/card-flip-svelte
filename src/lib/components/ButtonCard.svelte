<script context="module" lang="ts">
  import { writable } from "svelte/store";

  const activeId = writable<number | null>(null);
  let id = 0;
</script>

<script>
  const componentId = id++;

  $: active = $activeId === componentId;

  function toggle() {
    if (active) {
      $activeId = null;
      return;
    }
    $activeId = componentId;
  }
  $: console.log(active);
</script>

<button on:click={toggle} class:active>
  {!active ? "✅" : "❌"}
</button>

<style>
  button {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    font-size: xx-large;
    transition: all 0.5s ease-in;
  }

  button:hover {
    cursor: pointer;
  }

  .active {
    transform: rotateY(180deg);
  }
</style>
