<template>
  <b-card
      :title="title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
  >
    <b-card-text>
      {{ description }}
    </b-card-text>


    <b-button :to="{name:'Item'}" variant="primary">Go somewhere</b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Default Title",
    },
    description: {
      type: String,
      default: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    }
  }
}
</script>
