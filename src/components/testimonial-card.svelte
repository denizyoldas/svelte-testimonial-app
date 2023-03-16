<script>
    /**
	 * @type {string}
	 */
     export let quote;
     export const user = {
         name: "John Doe",
         position: "CEO, Company",
         image: "https://via.placeholder.com/150",
     };
</script>

<div class="py-10 px-8 rounded-md gap-6 bg-card w-full">
    <p class="leading-8">
        {quote}
    </p>
    <div class="flex gap-4 items-center pt-6">
        <img src={user.image} alt="user" class="rounded-full w-12 h-12">
        <div>
            <div class="font-bold">{user.name}</div>
            <div class="text-gray-500">{user.position}</div>
        </div>
    </div>
</div>