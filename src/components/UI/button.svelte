<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let variant = "primary";
    export let customClass = "px-5 py-3 rounded-lg";

    function clickHandler() {
        dispatch("click");
    }
</script>

<button
    class={customClass}
    class:btn-primary={variant === "primary"}
    class:btn-error={variant === "error"}
    on:click={clickHandler}
>
    <slot />
</button>

<style>
.btn-primary {
    @apply bg-gradient-to-r from-[#582FFB] via-[#FF4DCD] to-[#FC974E] text-white;
}

.btn-error {
    @apply bg-red-500 text-white;
}
</style>