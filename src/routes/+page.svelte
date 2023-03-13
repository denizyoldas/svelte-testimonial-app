<script>
	import Header from "../components/header.svelte";
	import NewTestimonial from "../components/new-testimonial.svelte";
    import TestimonialCard from "../components/testimonial-card.svelte";

    $: LIST = [
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nunc nisl eu nunc.",
        },
        {
            quote: "asdasdab2q13123",
        },
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nunc nisl eu nunc.",
        },
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nunc nisl eu nunc.",
        },
    ];

    $: console.log(LIST);

    /**
	 * @param {any} event
	 */
    function addNewTestimonial({ detail }) {
        LIST = [...LIST, detail];
    }
</script>

<Header />

<NewTestimonial on:add={addNewTestimonial} />

<div class="flex flex-col items-center justify-center px-32 gap-10">
    {#each LIST.reverse() as item}
        <TestimonialCard {...item} />
    {/each}
</div>
