<script>
  import ButtonList from "$lib/components/ButtonList.svelte";
  import ButtonCard from "$lib/components/ButtonCard.svelte";
</script>

<div class="upper--main">
  <div class="button--list">
    <ButtonList />
  </div>
  <div class="inner--main">
    <div class="flex">
      <ButtonCard />
      <ButtonCard />
    </div>
  </div>
</div>

<style>
  div.upper--main {
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  div.button--list::before {
    justify-content: center;
    content: "First Group";
    font-size: x-large;
    display: flex;
  }

  div.flex {
    display: flex;
  }

  div.inner--main::before {
    justify-content: center;
    content: "Second Group";
    font-size: x-large;
    display: flex;
  }

  div.inner--main {
    width: fit-content;
  }
</style>
