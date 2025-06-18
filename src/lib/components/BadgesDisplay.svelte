<script lang="ts">
  export let badges: string[] = [];

  // Mapping badge IDs to display names and placeholder images
  const badgeData: Record<string, { label: string; img: string }> = {
    Badge_Quiz_1: { label: '1er Quiz', img: '/src/assets/quiz1.png' },
    Badge_Quiz_3: { label: '3 Quiz', img: '/src/assets/quiz3.png' },
    Badge_Quiz_5: { label: '5 Quiz', img: '/src/assets/quiz5.png' },
    Badge_Quiz_10: { label: '10 Quiz', img: '/src/assets/quiz10.png' },
    Badge_Mission_1: { label: '1ère Mission', img: '/src/assets/mission1.png' },
    Badge_Mission_3: { label: '3 Missions', img: '/src/assets/mission3.png' },
    Badge_Mission_5: { label: '5 Missions', img: '/src/assets/mission5.png' },
    Badge_Mission_10: { label: '10 Missions', img: '/src/assets/mission10.png' },
    Badge_Points_50: { label: '50 Points', img: '/src/assets/points50.png' },
    Badge_Points_100: { label: '100 Points', img: '/src/assets/points100.png' },
    Badge_Points_200: { label: '200 Points', img: '/src/assets/points200.png' },
    Badge_Points_300: { label: '300 Points', img: '/src/assets/points300.png' },
    Badge_Streak_3: { label: 'Série de 3 jours', img: '/src/assets/streak3.png' },
    Badge_Streak_7: { label: 'Série de 7 jours', img: '/src/assets/streak7.png' },
    Badge_Streak_14: { label: 'Série de 14 jours', img: '/src/assets/streak14.png' },
    Badge_Streak_30: { label: 'Série de 30 jours', img: '/src/assets/streak30.png' },
  };
</script>
{#if badges.length !== 0}
<h2 class="text-2xl font-bold text-gray-900 mb-4">Vos Badges</h2>
{/if}
<div class="flex flex-wrap gap-4 justify-center">
  {#if badges.length === 0}
    <div class="text-gray-400 italic">Aucun badge débloqué pour l'instant</div>
  {:else}
    {#each badges as badgeId}
      {#if badgeData[badgeId]}
        <div class="flex flex-col items-center">
            <img src={badgeData[badgeId].img} alt={badgeData[badgeId].label} class="w-24 h-24 object-contain hover:scale-125 duration-200" />
          <span class="mt-2 text-xs font-semibold text-gray-700">{badgeData[badgeId].label}</span>
        </div>
      {/if}
    {/each}
  {/if}
</div>
