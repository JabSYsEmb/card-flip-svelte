<script>
  import ButtonCard from "./ButtonCard.svelte";
</script>

<div class="upper--class">
  <div class="inner--class">
    <ButtonCard />
  </div>
</div>

<style>
  div.inner--class {
    justify-content: center;
    display: flex;
    width: 100wh;
  }

  div.upper--class::before {
    content: "Header Group";
    justify-content: center;
    font-size: x-large;
    display: flex;
    max-height: 200px;
  }
</style>
