<script setup lang="ts">
import { Renderer, Camera, Scene, Box, PhongMaterial, PointLight, Texture } from 'troisjs';
import { computed, onMounted, ref } from 'vue';

const props = defineProps(["textureFile"]);

const renderer = ref();
const box = ref();

const textureName = computed(() => URL.createObjectURL(props.textureFile));

onMounted(() => {
    renderer.value.onBeforeRender(() => {
        box.value.mesh.rotation.x += 0.01;
    });
})
</script>

<template>
    <div>
        <Renderer ref="renderer" resize orbit-ctrl>
            <Camera :position="{ z: 10 }" />
            <Scene>
                <PointLight :position="{ y: 50, z: 50 }" />
                <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
                    <PhongMaterial>
                        <Texture v-if="textureFile" :src="textureName" />
                    </PhongMaterial>
                </Box>
            </Scene>
        </Renderer>
    </div>
</template>

<style>
canvas {
    position: absolute;
}
</style>