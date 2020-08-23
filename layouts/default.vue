<template>
  <div class="flex flex-col min-h-screen">
    <my-header style="flex-basis: 75px;"></my-header>
    <Nuxt class="flex-1" />
  </div>
</template>

<script>
import MyHeader from "@/components/my-header";

export default {};
</script>

<style>
@import url("//db.onlinewebfonts.com/c/07a38bbad54db72a40b406bed1c72f53?family=Gotham+Pro");

* {
  font-family: Gotham Pro;
}
</style>
