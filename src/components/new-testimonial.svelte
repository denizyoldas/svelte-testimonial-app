<script>
    import { createEventDispatcher } from "svelte";
	import Button from "./UI/button.svelte";

    const dispatch = createEventDispatcher();
    let text = '';

    function addNewTestimonial() {
        console.log(text)
        dispatch("add", { quote: text });
    }

    function cancelNewTestimonial() {
        dispatch("cancel");
    }
</script>

<div class="flex flex-col items-end w-2/3 mx-auto pb-10 gap-10">
    <textarea 
        class="w-full h-40 p-4 rounded-lg bg-gray-800 resize-none outline-none focus:ring-1" 
        placeholder="Write your testimonial here..." 
        bind:value={text}
        ></textarea>
        <div class="flex items-center justify-end gap-4">
            <Button on:click={cancelNewTestimonial} variant="error">
                Cancel
            </Button>
            <Button on:click={addNewTestimonial}>
                Submit
            </Button>
        </div>
</div>