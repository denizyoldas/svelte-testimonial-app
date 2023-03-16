<script>
	import Header from "../components/header.svelte";

    import { users } from '../store/data';
</script>

<Header />

<!-- user list -->
<div class="mt-4 px-48">
    <h2 class="font-bold text-2xl mb-2">
        Most Popular Users
    </h2>
    <div class="grid grid-cols-6 gap-8">
        {#each users as user}
            <a class="bg-slate-700 rounded flex flex-col items-center p-5 text-center gap-4" href={user.username}>
                <img src={user.image} alt={user.name} />
                <h2 class="text-xl font-bold">{user.name}</h2>
                <!-- <p class="text-sm text-gray-500">{user.email}</p> -->
            </a>
        {/each}
    </div>
</div>
