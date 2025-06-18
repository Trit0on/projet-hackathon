<script lang="ts">
	import {
		Leaf,
		Heart,
		Globe,
		Sprout,
		Recycle,
		Users,
		Sparkles,
		Calendar,
		ArrowRight
	} from 'lucide-svelte';
</script>

<footer class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-8 mt-auto">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Motivational Section -->
		<div class="text-center mb-8">
			<div class="flex items-center justify-center space-x-3 mb-4">
				<div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
					<Globe class="w-7 h-7 text-white" />
				</div>
				<h3 class="text-2xl font-bold">Chaque geste compte !</h3>
			</div>
			<p class="text-primary-100 max-w-2xl mx-auto">
				Ensemble, construisons un avenir plus durable. Revenez demain pour de nouvelles missions et continuez votre impact positif sur la planète.
			</p>
		</div>

		<!-- Links and Info -->
		<div class="grid md:grid-cols-3 gap-8 text-center md:text-left">
			<div>
				<h4 class="font-semibold mb-3 flex items-center justify-center md:justify-start">
					<Leaf class="w-5 h-5 mr-2" />
					Éco-Boost Quotidien
				</h4>
				<p class="text-primary-100 text-sm">
					Votre compagnon quotidien pour adopter des gestes écologiques et protéger notre planète.
				</p>
				<div class="flex items-center justify-center md:justify-start space-x-2 mt-3">
					<Calendar class="w-4 h-4 text-primary-200" />
					<span class="text-primary-200 text-xs">Nouveau contenu quotidien</span>
				</div>
			</div>

			<div>
				<h4 class="font-semibold mb-3 flex items-center justify-center md:justify-start">
					<Sparkles class="w-5 h-5 mr-2" />
					Nos Valeurs
				</h4>
				<ul class="text-primary-100 text-sm space-y-2">
					<li class="flex items-center justify-center md:justify-start space-x-2">
						<Sprout class="w-4 h-4 text-green-300 flex-shrink-0" />
						<span>Développement durable</span>
					</li>
					<li class="flex items-center justify-center md:justify-start space-x-2">
						<Recycle class="w-4 h-4 text-blue-300 flex-shrink-0" />
						<span>Économie circulaire</span>
					</li>
					<li class="flex items-center justify-center md:justify-start space-x-2">
						<Users class="w-4 h-4 text-yellow-300 flex-shrink-0" />
						<span>Action collective</span>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="font-semibold mb-3 flex items-center justify-center md:justify-start">
					<Heart class="w-5 h-5 mr-2" />
					Impact Positif
				</h4>
				<p class="text-primary-100 text-sm mb-3">
					Chaque action compte pour construire un monde plus vert et plus durable pour les générations futures.
				</p>
				<div class="flex items-center justify-center md:justify-start text-xs text-primary-200">
					<ArrowRight class="w-3 h-3 mr-1" />
					<span>Rejoignez le mouvement</span>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div class="border-t border-primary-400 mt-8 pt-6 text-center">
			<div class="flex items-center justify-center space-x-2">
				<p class="text-primary-100 text-sm">
					© 2025 Éco-Boost Quotidien. Tous droits réservés.
				</p>
				<p class="text-primary-100 text-sm">Fait avec ❤️ pour la planète.</p>
			</div>
		</div>
	</div>
</footer>
