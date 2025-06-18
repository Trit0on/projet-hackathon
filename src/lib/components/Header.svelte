<script lang="ts">
	import { Calendar, Leaf, Sunrise } from 'lucide-svelte';
</script>

<header class="bg-white shadow-sm border-b border-gray-100">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
		<div class="flex items-center justify-between">
			<a href="/" class="flex items-center space-x-6">
				<div class="w-20 h-20 overflow-hidden flex items-center justify-center">
					<img src="/logo.png" alt="Eco-Quest Logo" class="w-full h-full object-contain" />
				</div>
				<div>
					<h1 class="text-3xl font-bold text-gradient flex items-center space-x-2">
						<Leaf class="w-8 h-8 text-primary-600" />
						<span>Eco-Quest</span>
					</h1>
					<p class="text-gray-600">Missions écologiques pour un avenir durable</p>
				</div>
			</a>
			<div class="hidden md:flex items-center space-x-3 bg-gradient-to-r from-primary-50 to-secondary-50 px-4 py-2 rounded-xl">
				<div class="flex items-center space-x-2">
					<Sunrise class="w-5 h-5 text-primary-600" />
					<Calendar class="w-5 h-5 text-secondary-600" />
				</div>
				<span class="font-medium text-gray-700">Nouveau contenu chaque jour !</span>
			</div>
		</div>
	</div>
</header>
