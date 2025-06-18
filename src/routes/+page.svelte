<script lang="ts">
  import { onMount } from 'svelte';
  import MissionCard from '$lib/components/MissionCard.svelte';
  import QuizCard from '$lib/components/QuizCard.svelte';
  import ActionCard from '$lib/components/ActionCard.svelte';
  import ProgressStats from '$lib/components/ProgressStats.svelte';
  import { getDailyMission } from '$lib/data/missions';
  import { generateDailyQuiz } from '$lib/data/quizzes';
  import { getDailyAction } from '$lib/data/actions';
  import {
    Target,
    Brain,
    BookOpen
  } from 'lucide-svelte';
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
  <title>E-Quiz</title>
  <meta name="description" content="Adoptez des gestes écologiques au quotidien avec nos missions, quiz et actions pour la planète." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
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
        <div class="flex items-center space-x-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
            <Target class="w-6 h-6 text-white" />
          </div>
          <h2 class="text-2xl font-bold text-gray-900">Mission du Jour</h2>
        </div>
        {#if dailyMission}
          <MissionCard mission={dailyMission} />
        {/if}
      </div>

      <!-- Daily Quiz -->
      <div>
        <div class="flex items-center space-x-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center">
            <Brain class="w-6 h-6 text-white" />
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
      <div class="flex items-center space-x-3 mb-4">
        <div class="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
          <BookOpen class="w-6 h-6 text-white" />
        </div>
        <h2 class="text-2xl font-bold text-gray-900">Action Concrète du Jour</h2>
      </div>
      {#if dailyAction}
        <ActionCard action={dailyAction} />
      {/if}
    </div>
  </main>
</div>
