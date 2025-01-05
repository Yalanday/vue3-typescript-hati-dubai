<script setup lang="ts">

defineProps(
    {
      bedroom: {
        type: String,
        default: ''
      },
      square: {
        type: String,
        default: ''
      },
    }
)

</script>

<template>
  <div class="card-options">
    <span class="card-options__item card-bedroom">{{ bedroom }}</span>
    <span class="card-options__item card-square">{{ square }} м&#178;</span>
  </div>
</template>

<style scoped lang="scss">
.card-options {
  opacity: 0.5;
  margin-bottom: 15px;
  display: flex;
  gap: 20px;
  @media (max-width: 1279px) {
    margin-bottom: 10px;
  }

  .card-options__item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .card-options__item::before {
    content: '';
    width: 20px;
    height: 20px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .card-bedroom::before {
    background-image: url("/icons/betroom.svg");
  }

  .card-square::before {
    background-image: url("/icons/square.svg");
  }
}
</style>