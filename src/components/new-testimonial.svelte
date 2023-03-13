<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    let text = '';

    function addNewTestimonial() {
        console.log(text)
        dispatch("add", { quote: text });
    }
</script>

<div class="flex flex-col items-end w-2/3 mx-auto pb-10 gap-10">
    <textarea 
        class="w-full h-40 p-4 rounded-lg bg-gray-800 resize-none outline-none focus:ring-1" 
        placeholder="Write your testimonial here..." 
        bind:value={text}></textarea>
    <button 
        class="bg-gradient-to-r from-[#582FFB] via-[#FF4DCD] to-[#FC974E] text-white px-8 py-4 rounded-lg"
        on:click={addNewTestimonial}
    >
        Submit
    </button>
</div>