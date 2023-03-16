<script>
    function goTop() {
        const main = document.querySelector("main");
        main?.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
</script>

<button class="fixed right-8 bottom-8 rounded bg-gray-800 p-4" on:click={goTop}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
</button>