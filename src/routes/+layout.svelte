<script>
    import "../app.css";
	import GoTop from "../components/UI/go-top.svelte";
</script>
  
<main class="bg-main text-white h-screen overflow-auto pb-10 relative">
    <slot />
    <GoTop />
</main>