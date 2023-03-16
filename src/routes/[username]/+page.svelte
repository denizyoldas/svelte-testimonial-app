<script>
	import NewTestimonial from "../../components/new-testimonial.svelte";
    import TestimonialCard from "../../components/testimonial-card.svelte";
	import Button from "../../components/UI/button.svelte";
	import UserCard from "../../components/user-card.svelte";


    /** @type {import('./$types').PageData} */
    export let data;

    let showNewTestimonial = false;

    $: LIST = data.user.testimonials;

    /**
	 * @param {any} event
	 */
    function addNewTestimonial({ detail }) {
        LIST = [...LIST, detail];
        showNewTestimonial = false;
    }

    function showAddTestimonial() {
        showNewTestimonial = true;
    }
</script>

<UserCard 
name={data.user.name} 
username={data.user.username}
position="Frontend Developer" 
image="https://randomuser.me/api/portraits/med/women/64.jpg" 
/>


{#if showNewTestimonial}
    <NewTestimonial on:add={addNewTestimonial} on:cancel={() => showNewTestimonial = false } />
{:else}
    <div class="flex items-center justify-end py-4 px-40">
        <Button on:click={showAddTestimonial}>Add Testimonial</Button> 
    </div>
{/if}


{#if LIST.length === 0}
    <div class="flex flex-col items-center justify-center px-32 gap-10">
        <h1 class="text-4xl font-bold">No Testimonials</h1>
        <p class="text-xl">Be the first to write a testimonial</p>
    </div>
{/if}

<div class="flex flex-col items-center justify-center px-32 gap-10">
    {#each LIST.reverse() as item}
        <TestimonialCard {...item} />
    {/each}
</div>
