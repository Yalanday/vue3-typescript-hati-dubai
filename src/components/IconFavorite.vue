<script setup lang="ts">
import {ref} from "vue";

const props = defineProps(
    {
      isFavorite: {
        type: Boolean,
        default: false
      },
      id: Number
    }
)

const isActive = ref(props.isFavorite)

</script>

<template>

  <div :class="{active: isActive}" class="icon-favorite">
    <span class="icon"></span>
  </div>
</template>

<style scoped lang="scss">

.icon-favorite {
  border: 1px solid #000000;
  border-radius: 50%;

  .icon {
    display: block;
    width: 50px;
    height: 50px;
    mask: url('/public/icons/favorites.svg') no-repeat center;
    background: #000000;
  }

  &:hover,
  &.active {
    background-color: #208B95;
    border-color: #208B95;
  }

  &:hover .icon,
  &.active .icon{
    background: #ffffff;
  }
}


</style>