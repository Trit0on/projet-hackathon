<script lang="ts">
  import type { Mission } from '../types';
  import { userProgress } from '../stores/userProgress';
  import {
    CheckCircle,
    Clock,
    Target,
    Zap,
    Droplets,
    Bike,
    Recycle,
    ShoppingCart,
    Apple,
    TrendingUp,
    Calendar,
    Sparkles
  } from 'lucide-svelte';

  export let mission: Mission;

  let completed = false;

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
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  function completeMission() {
    completed = true;
    userProgress.completeMission();
  }
</script>

<div class="card p-6 relative overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50"></div>

  <div class="relative z-10">
    <!-- Header -->
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
          <svelte:component this={categoryIcons[mission.category]} class="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <h3 class="text-xl font-bold text-gray-900">{mission.title}</h3>
          <p class="text-gray-600 text-sm">{mission.description}</p>
        </div>
      </div>

      {#if completed}
        <CheckCircle class="w-8 h-8 text-green-500 animate-bounce-subtle" />
      {/if}
    </div>

    <!-- Action -->
    <div class="bg-primary-50 rounded-lg p-4 mb-4">
      <div class="flex items-start space-x-2">
        <Target class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
        <p class="text-gray-800 leading-relaxed">{mission.action}</p>
      </div>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="px-3 py-1 rounded-full text-xs font-medium {categoryColors[mission.category]} flex items-center space-x-1">
        <svelte:component this={categoryIcons[mission.category]} class="w-3 h-3" />
        <span>{mission.category}</span>
      </span>
      <span class="px-3 py-1 rounded-full text-xs font-medium {difficultyColors[mission.difficulty]}">
        {mission.difficulty}
      </span>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="flex items-center space-x-2 text-gray-600">
        <Clock class="w-4 h-4" />
        <span class="text-sm">{mission.estimatedTime}</span>
      </div>
      <div class="flex items-center space-x-2 text-gray-600">
        <TrendingUp class="w-4 h-4" />
        <span class="text-sm">Impact élevé</span>
      </div>
    </div>

    <!-- Impact -->
    <div class="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-lg p-3 mb-6">
      <div class="flex items-start space-x-2">
        <Sparkles class="w-4 h-4 text-secondary-600 mt-0.5 flex-shrink-0" />
        <p class="text-sm text-gray-700">
          <span class="font-medium">Impact :</span> {mission.impact}
        </p>
      </div>
    </div>

    <!-- Action Button -->
    {#if !completed}
      <button
        on:click={completeMission}
        class="btn-primary w-full flex items-center justify-center space-x-2"
      >
        <CheckCircle class="w-5 h-5" />
        <span>Mission accomplie !</span>
      </button>
    {:else}
      <div class="bg-green-100 text-green-800 rounded-lg px-4 py-3 text-center font-medium flex items-center justify-center space-x-2">
        <CheckCircle class="w-5 h-5" />
        <span>Mission terminée ! Bravo !</span>
      </div>
    {/if}
  </div>
</div>
