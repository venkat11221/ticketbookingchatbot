<script>
	import '../app.css';
	import { Card } from 'flowbite-svelte';
</script>

<header
	class="min-w-full max-w-full bg-gradient-to-t from-yellow-950 to-stone-950 px-4 py-3 md:grid md:grid-cols-4 md:px-8"
>
	<div
		class="min-w-fit max-w-full self-center text-2xl font-bold text-yellow-700 md:text-left md:text-4xl"
	>
		<a href="/">CSMVS</a>
	</div>
	<div
		class="col-span-2 min-w-fit max-w-full self-center font-semibold text-orange-200 md:text-center md:text-xl"
	>
		<a href="/">Chhatrapati Shivaji Maharaj Vastu Sangrahalaya</a>
	</div>
	<div
		class="min-w-fit max-w-full self-center font-semibold text-orange-300 md:text-right md:text-xl"
	>
		<a href="/"> Ticket Booking Chatbot </a>
	</div>
</header>

<main class="bg-yellow-950">
	<Card
		class="md:min-h-[80vh] min-h-[74vh] max-w-full border-yellow-800 max-h-full
    bg-[url('https://lh3.googleusercontent.com/pw/AP1GczOEN7J3iSznMIa6px037PaMw5JZDYIvXSaPyHJZ45OiWu4pLIu42NU5eHw0oMwXkRVnQmJkM7G4KRMB1tXnAAu1Dxa7qLeFJwEZ0rrlyKCNbAMP--5MdX-YW0Q-atHJ8xmb8gd1wToIsfZhzTo-X8rP=w1341-h894-s-no-gm?authuser=0')] bg-cover bg-center bg-no-repeat py-10 md:px-16"
		padding="none"
	>
		<slot />
	</Card>
</main>

<footer
	class="max-w-full overflow-auto bg-gradient-to-b from-yellow-950 to-stone-950 p-4 text-center text-orange-300"
>
	© Created as a sample chatbot website.
</footer>
