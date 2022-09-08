<script setup lang="ts">
const emits = defineEmits(["update:model", "update:texture"]);

function getFile(event: Event) {
    return (event.target as HTMLInputElement).files?.item(0) ?? null;
}
</script>

<template>
    <div class="settings">
        <div>
            <label for="model">Model</label>
            <input type="file" name="model" id="model" accept=".fbx" @change="$emit('update:model', getFile($event))" />
        </div>
        <div>
            <label for="texture">Texture</label>
            <input type="file" name="texture" id="texture" accept="image/*"
                @change="$emit('update:texture', getFile($event))" />
        </div>
    </div>
</template>

<style>
.settings {
    min-width: 10rem;
}
</style>