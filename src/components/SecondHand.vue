<script setup lang="ts">
import type { DateTime } from 'luxon';
import { computed } from 'vue';
import { calculateSwatch } from '@/util';

const props = defineProps<{
  time: DateTime;
}>();

const rotation = computed(() => (calculateSwatch(props.time) % 1) * 360);
</script>

<template>
  <use xlink:href="#second-hand" :transform="'rotate(' + rotation + ')'" />
</template>

<style scoped></style>
