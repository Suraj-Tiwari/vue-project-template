<template>
  <div class="home">
    <div class="row">
      <div class="col-3"
           v-for="i in 10"
           :key="i">
        <items-layout-view
            title="test"

        >
        </items-layout-view>
      </div>
    </div>
  </div>
</template>
