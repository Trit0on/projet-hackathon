<script lang="ts">
  import { page } from '$app/stores';
  import { getActionById, getAllActions } from '$lib/data/actions';
  import type { Action } from '$lib/types';
  import {
    ArrowLeft,
    Clock,
    TrendingUp,
    Tag,
    Sparkles,
    ExternalLink,
    Leaf
  } from 'lucide-svelte';

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
    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <article class="bg-white shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold text-green-700 mb-4 flex items-center space-x-2">
          <Leaf class="w-6 h-6" />
          <span>{action.title}</span>
        </h1>
        <p class="text-gray-700 whitespace-pre-line leading-relaxed">{action.descriptionDetail}</p>

        <div class="mt-6 flex flex-wrap gap-2">
          <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center space-x-1">
            <Tag class="w-3 h-3" />
            <span>#mission</span>
          </span>
          <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center space-x-1">
            <Sparkles class="w-3 h-3" />
            <span>impact positif</span>
          </span>
        </div>

        <div class="mt-6 border-t pt-4 space-y-2">
          <p class="text-sm text-gray-600 flex items-center space-x-2">
            <Clock class="w-4 h-4" />
            <span>Durée estimée : 5 minutes</span>
          </p>
          <p class="text-sm text-gray-600 flex items-center space-x-2">
            <TrendingUp class="w-4 h-4" />
            <span>Impact : Amélioration du recyclage local</span>
          </p>
        </div>

<a href="/" class="mt-6 w-full block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded py-4 flex items-center justify-center space-x-2">
  <ArrowLeft class="w-4 h-4" />
  <span>Retour sur la page principale</span>
</a>
      </article>

{#if otherActions.length}
  <section class="mt-12">
    <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
      <Leaf class="w-5 h-5 text-green-600" />
      <span>Découvrez d'autres bonnes actions 🌱</span>
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {#each otherActions as a}
        <a href={"/action/" + a.id} class="block bg-white shadow rounded-lg p-4 hover:shadow-md transition group">
          <h3 class="font-semibold text-lg text-green-700 flex items-center justify-between">
            <span>{a.title}</span>
            <ExternalLink class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
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
