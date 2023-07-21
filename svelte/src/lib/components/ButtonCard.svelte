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
</script>

<div class:active>
  <button on:click={toggle} class:active>
    {!active ? "✅" : "❌"}
  </button>
</div>

<style>
  div {
    border: 1px solid black;
    border-radius: 15px;
  }

  div:hover {
    background: hsla(0, 100%, 40%, 0.01);
  }

  div.active {
    background: hsla(0, 100%, 10%, 0.1);
  }

  button {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    font-size: xx-large;
    margin: 10px;
    transition: transform 0.5s ease-in, background 0.2s ease-in-out;
  }

  button:hover {
    cursor: pointer;
    background: hsla(0, 100%, 1%, 0.2);
  }

  .active {
    transform: rotateY(180deg);
  }
</style>
