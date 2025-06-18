import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { UserProgress } from '../types';

const defaultProgress: UserProgress = {
  missionsCompleted: 0,
  quizzesCompleted: 0,
  totalPoints: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: new Date().toISOString().split('T')[0]
};

function createUserProgressStore() {
  // Initialize with data from localStorage if available
  const initialValue = browser 
    ? JSON.parse(localStorage.getItem('userProgress') || JSON.stringify(defaultProgress))
    : defaultProgress;

  const { subscribe, set, update } = writable<UserProgress>(initialValue);

  return {
    subscribe,
    completeMission: () => update(progress => {
      const today = new Date().toISOString().split('T')[0];
      const isToday = progress.lastActiveDate === today;
      
      const newProgress = {
        ...progress,
        missionsCompleted: progress.missionsCompleted + 1,
        totalPoints: progress.totalPoints + 10,
        currentStreak: isToday ? progress.currentStreak : progress.currentStreak + 1,
        longestStreak: Math.max(progress.longestStreak, progress.currentStreak + 1),
        lastActiveDate: today
      };

      if (browser) {
        localStorage.setItem('userProgress', JSON.stringify(newProgress));
      }

      return newProgress;
    }),
    completeQuiz: (score: number) => update(progress => {
      const today = new Date().toISOString().split('T')[0];
      const isToday = progress.lastActiveDate === today;
      
      const newProgress = {
        ...progress,
        quizzesCompleted: progress.quizzesCompleted + 1,
        totalPoints: progress.totalPoints + score * 5,
        currentStreak: isToday ? progress.currentStreak : progress.currentStreak + 1,
        longestStreak: Math.max(progress.longestStreak, progress.currentStreak + 1),
        lastActiveDate: today
      };

      if (browser) {
        localStorage.setItem('userProgress', JSON.stringify(newProgress));
      }

      return newProgress;
    }),
    reset: () => {
      const newProgress = defaultProgress;
      if (browser) {
        localStorage.setItem('userProgress', JSON.stringify(newProgress));
      }
      set(newProgress);
    }
  };
}

export const userProgress = createUserProgressStore();