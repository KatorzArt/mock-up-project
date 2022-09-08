<template>
    <div class="settings">
        <div>
            <label for="model">Model</label>
            <input type="file" name="model" id="model" accept=".fbx" />
        </div>
        <div>
            <label for="texture">Texture</label>
            <input type="file" name="texture" id="texture" accept=".png" />
        </div>
    </div>
</template>

<style>
.settings {
    min-width: 10rem;
}
</style>