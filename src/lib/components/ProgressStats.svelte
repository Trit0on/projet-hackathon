<script lang="ts">
  import { userProgress } from '../stores/userProgress';
  import { Trophy, Target, Zap, Award } from 'lucide-svelte';
  
  $: progress = $userProgress;

  // Liste des badges à afficher (id et nom, image à ajouter plus tard)
  const badgeLabels = {
    Badge_Quiz_1: '1er Quiz',
    Badge_Quiz_3: '3 Quiz',
    Badge_Quiz_5: '5 Quiz',
    Badge_Quiz_10: '10 Quiz',
    Badge_Mission_1: '1ère Mission',
    Badge_Mission_3: '3 Missions',
    Badge_Mission_5: '5 Missions',
    Badge_Mission_10: '10 Missions'
  };
</script>

<div class="card-gradient p-6">
  <div class="flex items-center justify-between mb-6">
    <h2 class="text-2xl font-bold text-gray-900">Vos Progrès</h2>
    <Trophy class="w-8 h-8 text-accent-500" />
  </div>
  
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <!-- Total Points -->
    <div class="text-center">
      <div class="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
        <Zap class="w-8 h-8 text-white" />
      </div>
      <div class="text-2xl font-bold text-gray-900">{progress.totalPoints}</div>
      <div class="text-sm text-gray-600">Points</div>
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
      <div class="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
        <span class="text-2xl">🔥</span>
      </div>
      <div class="text-2xl font-bold text-gray-900">{progress.currentStreak}</div>
      <div class="text-sm text-gray-600">Série</div>
    </div>
  </div>
  
  {#if progress.longestStreak > 0}
    <div class="mt-6 pt-6 border-t border-gray-200">
      <div class="text-center">
        <p class="text-sm text-gray-600">
          Meilleure série : <span class="font-bold text-primary-600">{progress.longestStreak} jours</span>
        </p>
      </div>
    </div>
  {/if}

</div>