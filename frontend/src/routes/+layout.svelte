<script lang="ts">
    import "./layout.css";

    const { children } = $props();
</script>

<!-- Invisible drag region over the transparent titlebar zone.
     Must use a <style> block — Wails reads --wails-draggable from
     computed styles, not from inline style attributes. -->
<div class="titlebar-drag-region"></div>

<div class="pt-7">
    {@render children()}
</div>

<style>
    .titlebar-drag-region {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 28px;
        z-index: 9999;
        --wails-draggable: drag;
    }
</style>
