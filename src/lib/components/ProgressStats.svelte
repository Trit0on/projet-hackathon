<script lang="ts">
  import { userProgress } from '../stores/userProgress';
  import {
    Trophy,
    Target,
    Zap,
    Award,
    Calendar,
    TrendingUp,
    Star,
    Flame
  } from 'lucide-svelte';

  $: progress = $userProgress;
</script>

<div class="card-gradient p-6">
  <div class="flex items-center justify-between mb-6">
    <div class="flex items-center space-x-3">
      <div class="w-10 h-10 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center">
        <Trophy class="w-6 h-6 text-accent-600" />
      </div>
      <h2 class="text-2xl font-bold text-gray-900">Vos Progrès</h2>
    </div>
    <TrendingUp class="w-6 h-6 text-primary-500" />
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <!-- Total Points -->
    <div class="text-center">
      <div class="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
        <Zap class="w-8 h-8 text-white" />
      </div>
      <div class="text-2xl font-bold text-gray-900">{progress.totalPoints}</div>
      <div class="text-sm text-gray-600 flex items-center justify-center space-x-1">
        <Star class="w-3 h-3" />
        <span>Points</span>
      </div>
    </div>

    <!-- Missions Completed -->
    <div class="text-center">
      <div class="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
        <Target class="w-8 h-8 text-white" />
      </div>
      <div class="text-2xl font-bold text-gray-900">{progress.missionsCompleted}</div>
      <div class="text-sm text-gray-600">Missions</div>
    </div>

    <!-- Quizzes Completed -->
    <div class="text-center">
      <div class="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
        <Award class="w-8 h-8 text-white" />
      </div>
      <div class="text-2xl font-bold text-gray-900">{progress.quizzesCompleted}</div>
      <div class="text-sm text-gray-600">Quiz</div>
    </div>

    <!-- Current Streak -->
    <div class="text-center">
      <div class="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
        <Flame class="w-8 h-8 text-white" />
      </div>
      <div class="text-2xl font-bold text-gray-900">{progress.currentStreak}</div>
      <div class="text-sm text-gray-600 flex items-center justify-center space-x-1">
        <Calendar class="w-3 h-3" />
        <span>Série</span>
      </div>
    </div>
  </div>

  {#if progress.longestStreak > 0}
    <div class="mt-6 pt-6 border-t border-gray-200">
      <div class="text-center">
        <div class="flex items-center justify-center space-x-2">
          <Trophy class="w-4 h-4 text-primary-600" />
          <p class="text-sm text-gray-600">
            Meilleure série : <span class="font-bold text-primary-600">{progress.longestStreak} jours</span>
          </p>
        </div>
      </div>
    </div>
  {/if}
</div>
