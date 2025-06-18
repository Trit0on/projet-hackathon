<script lang="ts">
  import { page } from '$app/stores';
  import { getActionById, getAllActions } from '$lib/data/actions';
  import type { Action } from '$lib/types';
  import { Leaf, Sparkles } from 'lucide-svelte';


  let action: Action | undefined;
  $: id = $page.params.id;
  let otherActions: Action[] = [];

$: if (id) {
  action = getActionById(id);
  const allActions = getAllActions();
  otherActions = allActions.filter(a => a.id !== id).slice(0, 2);
}
</script>

{#if action}
  <div class="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 font-sans">
    <!-- Header -->
  <header class="bg-white shadow-sm border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
            <Leaf class="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 class="text-3xl font-bold text-gradient">E-Quiz</h1>
            <p class="text-gray-600">Missions écologiques pour un avenir durable</p>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-2 text-primary-600">
          <Sparkles class="w-5 h-5" />
          <span class="font-medium">Nouveau contenu chaque jour !</span>
        </div>
      </div>
    </div>
  </header>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <article class="bg-white shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold text-green-700 mb-4">{action.title}</h1>
        <p class="text-gray-700 whitespace-pre-line leading-relaxed">{action.descriptionDetail}</p>

        <div class="mt-6 flex flex-wrap gap-2">
          <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">#mission</span>
          <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">impact positif</span>
        </div>

        <div class="mt-6 border-t pt-4">
          <p class="text-sm text-gray-600">Durée estimée : 5 minutes</p>
          <p class="text-sm text-gray-600">Impact : Amélioration du recyclage local</p>
        </div>

<a href="/" class="mt-6 w-full block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded py-4">
  Retour sur la page principale
</a>
      </article>

{#if otherActions.length}
  <section class="mt-12">
    <h2 class="text-xl font-bold text-gray-800 mb-6">Découvrez d'autres bonnes actions 🌱</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {#each otherActions as a}
        <a href={"/action/" + a.id} class="block bg-white shadow rounded-lg p-4 hover:shadow-md transition">
          <h3 class="font-semibold text-lg text-green-700">{a.title}</h3>
          <p class="text-sm text-gray-600 mt-1">{a.description}</p>
        </a>
      {/each}
    </div>
  </section>
{/if}
    </main>
  </div>
{:else}
  <p class="text-center text-gray-500 py-12">Action introuvable.</p>
{/if}
