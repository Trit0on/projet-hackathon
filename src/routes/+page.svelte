<script lang="ts">
  import { onMount } from 'svelte';
  import MissionCard from '$lib/components/MissionCard.svelte';
  import QuizCard from '$lib/components/QuizCard.svelte';
  import ActionCard from '$lib/components/ActionCard.svelte';
  import ProgressStats from '$lib/components/ProgressStats.svelte';
  import { getDailyMission } from '$lib/data/missions';
  import { generateDailyQuiz } from '$lib/data/quizzes';
  import { getDailyAction } from '$lib/data/actions';
  import { Leaf, Sparkles } from 'lucide-svelte';
  import type { Mission, Quiz, Action } from '$lib/types';

  let dailyMission: Mission;
  let dailyQuiz: Quiz;
  let dailyAction: Action;

  onMount(() => {
    dailyMission = getDailyMission();
    dailyQuiz = generateDailyQuiz();
    dailyAction = getDailyAction();
  });
</script>

<svelte:head>
  <title>Éco-Boost Quotidien - Missions Écologiques</title>
  <meta name="description" content="Adoptez des gestes écologiques au quotidien avec nos missions, quiz et actions pour la planète." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
  <!-- Header -->
  <header class="bg-white shadow-sm border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
            <Leaf class="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 class="text-3xl font-bold text-gradient">Éco-Boost Quotidien</h1>
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

  <!-- Main Content -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Progress Stats -->
    <div class="mb-8">
      <ProgressStats />
    </div>

    <!-- Daily Content Grid -->
    <div class="grid lg:grid-cols-2 gap-8 mb-8">
      <!-- Daily Mission -->
      <div>
        <div class="flex items-center space-x-2 mb-4">
          <div class="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">M</span>
          </div>
          <h2 class="text-2xl font-bold text-gray-900">Mission du Jour</h2>
        </div>
        {#if dailyMission}
          <MissionCard mission={dailyMission} />
        {/if}
      </div>

      <!-- Daily Quiz -->
      <div>
        <div class="flex items-center space-x-2 mb-4">
          <div class="w-8 h-8 bg-secondary-500 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">Q</span>
          </div>
          <h2 class="text-2xl font-bold text-gray-900">Quiz Éclair</h2>
        </div>
        {#if dailyQuiz}
          <QuizCard quiz={dailyQuiz} />
        {/if}
      </div>
    </div>

    <!-- Daily Action -->
    <div class="mb-8">
      <div class="flex items-center space-x-2 mb-4">
        <div class="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-sm">A</span>
        </div>
        <h2 class="text-2xl font-bold text-gray-900">Action Concrète du Jour</h2>
      </div>
      {#if dailyAction}
        <ActionCard action={dailyAction} />
      {/if}
    </div>

    <!-- Motivational Footer -->
    <div class="text-center py-8">
      <div class="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
        <h3 class="text-2xl font-bold mb-2">Chaque geste compte ! 🌍</h3>
        <p class="text-primary-100 max-w-2xl mx-auto">
          Ensemble, construisons un avenir plus durable. Revenez demain pour de nouvelles missions et continuez votre impact positif sur la planète.
        </p>
      </div>
    </div>
  </main>
</div>
