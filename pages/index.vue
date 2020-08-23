<template>
  <div class="bg-black flex">
    <div class="container flex flex-col text-white">
      <div>
        <div style="flex-basis: 140px;">
          <p class="text-center text-3xl font-light opacity-75">Tesla</p>
          <div class="glide flex justify-between items-center">
            <div class="glide__track" data-glide-el="track">
              <ul class="flex items-center glide__slides text-center">
                <li class="glide__slide">Model X</li>
                <li class="glide__slide">Model Y</li>
                <li class="glide__slide">Roadster</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <img src="@/assets/images/model-y.png" />
      </div>
      <div class="flex-1 flex flex-col items-center justify-center w-full">
        <div class="mb-8 flex justify-between">
          <div class="flex flex-col items-center">
            <p class="text-4xl font-medium">300 mi</p>
            <p class="text-sm">Range (EPA est.)</p>
          </div>
          <div class="mx-4 border-r border-red"></div>
          <div class="flex flex-col items-center">
            <p class="text-4xl font-medium">AWD</p>
            <p class="text-sm">Dual Motor</p>
          </div>
        </div>
        <p class="text-lg text-grey mb-3">
          Acceleration:
          <span class="text-white">0-60 mph in 3.5s</span>
        </p>
        <p class="text-lg text-grey">
          Top speed:
          <span class="text-white">up to 150 mph</span>
        </p>
      </div>
      <div class="flex justify-center items-center" style="flex-basis: 140px;">
        <button class="rounded-full border border-red w-10/12 h-16 uppercase text-xl font-medium focus:outline-none">ORDER NOW</button>
      </div>
    </div>
  </div>
</template>

<script>
import "~/node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import "~/node_modules/@glidejs/glide/dist/css/glide.theme.min.css";
import Glide from "@glidejs/glide";

export default {
  mounted() {
    const glide = new Glide(".glide", {
      type: "carousel",
      peek: { before: 60, after: 60 }
    });

    glide.on("move.after", () => {
      console.log(glide.index);
    });

    glide.mount();
  }
};
</script>

<style lang="scss" scoped>
.glide__slide {
  @apply text-4xl text-grey transition duration-500;

  &--active {
    @apply text-5xl text-white;
  }
}
</style>
