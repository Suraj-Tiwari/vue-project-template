<template>
  <b-container>
    <b-card-group columns>
      <b-skeleton-wrapper :loading="!dogimageData || !dogimageData.length">
        <template #loading>
          <b-card v-for="i in 20" :key="i">
            <b-skeleton-img></b-skeleton-img>
            <b-card-body>
              <b-row>
                <b-skeleton width="85%"></b-skeleton>
              </b-row>
            </b-card-body>
          </b-card>
        </template>
        <b-card
          :key="i"
          img-top
          img-height="250"
          v-for="(dogs, i) in dogimageData"
          :title="`Dog image`"
          :img-src="dogs"
          :img-alt="`dog_image-${i}`"
        >
        </b-card>
      </b-skeleton-wrapper>
    </b-card-group>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //   dogimageData: [],
    };
  },
  computed: {
    ...mapState({
      dogimageData: (state) => state["dogs"].dogsData,
    }),
  },
  async mounted() {
    await this.$store.dispatch("dogs/getDogsData", true);
  },
};
</script>
