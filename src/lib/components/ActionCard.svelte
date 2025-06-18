<script lang="ts">
  import type { Action } from '../types';
  import {
    BookOpen,
    Clock,
    Star,
    ExternalLink,
    Zap,
    Droplets,
    Bike,
    Recycle,
    ShoppingCart,
    Apple,
    TrendingUp
  } from 'lucide-svelte';

  export let action: Action;

  const categoryIcons = {
    energy: Zap,
    water: Droplets,
    transport: Bike,
    waste: Recycle,
    consumption: ShoppingCart,
    food: Apple
  };

  const categoryColors = {
    energy: 'bg-yellow-100 text-yellow-800',
    water: 'bg-blue-100 text-blue-800',
    transport: 'bg-green-100 text-green-800',
    waste: 'bg-purple-100 text-purple-800',
    consumption: 'bg-pink-100 text-pink-800',
    food: 'bg-orange-100 text-orange-800'
  };

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };
</script>

<div class="card p-6 relative overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary-100 to-transparent rounded-full -mr-12 -mt-12 opacity-50"></div>

  <div class="relative z-10">
    <!-- Header -->
    <div class="flex items-start space-x-3 mb-4">
      <div class="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center flex-shrink-0">
        <BookOpen class="w-6 h-6 text-secondary-600" />
      </div>
      <div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">{action.title}</h3>
        <p class="text-gray-600 leading-relaxed">{action.description}</p>
      </div>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="px-3 py-1 rounded-full text-xs font-medium {categoryColors[action.category]} flex items-center space-x-1">
        <svelte:component this={categoryIcons[action.category]} class="w-3 h-3" />
        <span>{action.category}</span>
      </span>
      <span class="px-3 py-1 rounded-full text-xs font-medium {difficultyColors[action.difficulty]}">
        {action.difficulty}
      </span>
    </div>

    <!-- Reading time -->
    <div class="flex items-center space-x-2 text-gray-600 mb-4">
      <Clock class="w-4 h-4" />
      <span class="text-sm">Temps de lecture : {action.timeToRead}</span>
    </div>

    <!-- Resources -->
    {#if action.resources && action.resources.length > 0}
      <div class="bg-secondary-50 rounded-lg p-4 mb-4">
        <h4 class="font-medium text-secondary-900 mb-2 flex items-center">
          <Star class="w-4 h-4 mr-2" />
          Ressources utiles :
        </h4>
        <ul class="space-y-1">
          {#each action.resources as resource}
            <li class="text-sm text-secondary-800 flex items-start space-x-2">
              <TrendingUp class="w-3 h-3 mt-1 text-secondary-600 flex-shrink-0" />
              <span>{resource}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/if}

    <!-- Action Button -->
    <button class="btn-secondary w-full flex items-center justify-center space-x-2">
      <ExternalLink class="w-5 h-5" />
      <span>Explorer cette action</span>
    </button>
  </div>
</div>
