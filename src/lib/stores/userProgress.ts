import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { UserProgress } from '../types';

const defaultProgress: UserProgress = {
  missionsCompleted: 0,
  quizzesCompleted: 0,
  totalPoints: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: new Date().toISOString().split('T')[0],
  badges: []
};

function getNewBadges(progress: UserProgress, type: 'mission' | 'quiz' | 'points' | 'streak'): string[] {
  const newBadges: string[] = [];

  // Missions & Quiz
  if (type === 'mission' || type === 'quiz') {
    const paliers = [1, 3, 5, 10];
    const badgeIds = paliers.map(n => type === 'mission' ? `Badge_Mission_${n}` : `Badge_Quiz_${n}`);
    const completed = type === 'mission' ? progress.missionsCompleted + 1 : progress.quizzesCompleted + 1;
    paliers.forEach((palier, i) => {
      if (completed === palier && !progress.badges.includes(badgeIds[i])) {
        newBadges.push(badgeIds[i]);
      }
    });
  }

  // Points
  if (type === 'points') {
    const pointsPaliers = [50, 100, 200, 300];
    pointsPaliers.forEach((palier) => {
      const badgeId = `Badge_Points_${palier}`;
      if (progress.totalPoints >= palier && !progress.badges.includes(badgeId)) {
        newBadges.push(badgeId);
      }
    });
  }

  // Streaks
  if (type === 'streak') {
    const streakPaliers = [3, 7, 14, 30];
    streakPaliers.forEach((palier) => {
      const badgeId = `Badge_Streak_${palier}`;
      if (progress.currentStreak >= palier && !progress.badges.includes(badgeId)) {
        newBadges.push(badgeId);
      }
    });
  }

  return newBadges;
}

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
      const newBadges = [
        ...getNewBadges(progress, 'mission'),
        ...getNewBadges({ ...newProgress }, 'points'),
        ...getNewBadges({ ...newProgress }, 'streak')
      ];
      const updatedProgress = {
        ...newProgress,
        badges: [...progress.badges, ...newBadges.filter(b => !progress.badges.includes(b))]
      };
      if (browser) {
        localStorage.setItem('userProgress', JSON.stringify(updatedProgress));
      }
      return updatedProgress;
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
      const newBadges = [
        ...getNewBadges(progress, 'quiz'),
        ...getNewBadges({ ...newProgress }, 'points'),
        ...getNewBadges({ ...newProgress }, 'streak')
      ];
      const updatedProgress = {
        ...newProgress,
        badges: [...progress.badges, ...newBadges.filter(b => !progress.badges.includes(b))]
      };
      if (browser) {
        localStorage.setItem('userProgress', JSON.stringify(updatedProgress));
      }
      return updatedProgress;
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