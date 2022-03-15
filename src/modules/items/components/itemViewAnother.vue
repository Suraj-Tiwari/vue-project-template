<template>
  <b-card
      :title="title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-bottom
      tag="article"
      class="mb-2"
  >
    <b-card-text>
      {{ description }}
    </b-card-text>
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
      default: "asdf kahjsdlfk ahjsdfl kasjhdfl kjashdf Some quick example text to build on the card title and make up the bulk of the card's content.",
    }
  }
}
</script>
