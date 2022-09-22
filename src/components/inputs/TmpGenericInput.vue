<script lang="ts">
export default { inheritAttrs: false };
</script>

<script setup lang="ts">
import { computed, StyleValue, useAttrs } from 'vue';

const attrs = useAttrs();
const inputAttrs = computed(() => ({ ...attrs, class: undefined, style: undefined }));

defineProps({
    label: { type: String, required: false },
    identifier: { type: String, required: false }
});
</script>

<template>
    <div :id="(attrs.id as string | undefined)" :class="attrs.class" :style="(attrs.style as StyleValue | undefined)">
        <label v-if="label" :for="identifier">{{ label }}</label>
        <input v-bind="inputAttrs" :id="identifier" />
    </div>
</template>