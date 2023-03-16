<script>
    /**
	 * @type {any}
	 */
     export let name;
     /**
	 * @type {any}
	 */
    export let username;
    /**
	 * @type {any}
	 */
     export let position;
    /**
	 * @type {any}
	 */
     export let image;
</script>

<div class="flex flex-col justify-center items-center py-12 px-40">
    <img src={image} alt="user" class="rounded-full w-40 h-40">
    <div class="text-2xl font-bold mt-4">{name}</div>
    <div class="text-gray-500">@{username}</div>
    <div class="text-gray-500">{position}</div>
</div>
