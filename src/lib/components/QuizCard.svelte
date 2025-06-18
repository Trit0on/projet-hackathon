<script lang="ts">
  import type { Quiz } from '../types';
  import { userProgress } from '../stores/userProgress';
  import { generateDailyQuiz } from '../data/quizzes';
  import {
    CheckCircle,
    XCircle,
    HelpCircle,
    Trophy,
    RotateCcw,
    ChevronRight,
    Award,
    Brain,
    Lightbulb
  } from 'lucide-svelte';
  export let quiz: Quiz;

  let currentQuestionIndex = 0;
  let selectedAnswers: number[] = [];
  let showExplanation = false;
  let quizCompleted = false;
  let score = 0;

  $: currentQuestion = quiz.questions[currentQuestionIndex];
  $: isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
  $: hasAnswered = selectedAnswers[currentQuestionIndex] !== undefined;

  function selectAnswer(answerIndex: number) {
    if (showExplanation) return;

    selectedAnswers[currentQuestionIndex] = answerIndex;
    showExplanation = true;

    if (answerIndex === currentQuestion.correctAnswer) {
      score++;
    }
  }

  function nextQuestion() {
    if (isLastQuestion) {
      quizCompleted = true;
      userProgress.completeQuiz(score);
    } else {
      currentQuestionIndex++;
      showExplanation = false;
    }
  }

  function restartQuiz() {
    quiz = generateDailyQuiz();
    currentQuestionIndex = 0;
    selectedAnswers = [];
    showExplanation = false;
    quizCompleted = false;
    score = 0;
  }
</script>

<div class="card p-6">
  {#if !quizCompleted}
    <!-- Progress Bar -->
    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <div class="flex items-center space-x-2">
          <Brain class="w-6 h-6 text-primary-600" />
          <h3 class="text-xl font-bold text-gray-900">{quiz.title}</h3>
        </div>
        <span class="text-sm text-gray-600 flex items-center space-x-1">
          <span>{currentQuestionIndex + 1} / {quiz.questions.length}</span>
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div
          class="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
          style="width: {((currentQuestionIndex + 1) / quiz.questions.length) * 100}%"
        ></div>
      </div>
    </div>

    <!-- Question -->
    <div class="mb-6">
      <div class="flex items-start space-x-3 mb-4">
        <div class="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center flex-shrink-0">
          <HelpCircle class="w-5 h-5 text-primary-600" />
        </div>
        <h4 class="text-lg font-medium text-gray-900 leading-relaxed">
          {currentQuestion.question}
        </h4>
      </div>
    </div>

    <!-- Options -->
    <div class="space-y-3 mb-6">
      {#each currentQuestion.options as option, index}
        <button
          on:click={() => selectAnswer(index)}
          class="w-full text-left p-4 rounded-lg border-2 transition-all duration-200 {
            !hasAnswered
              ? 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
              : selectedAnswers[currentQuestionIndex] === index
                ? index === currentQuestion.correctAnswer
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : 'border-red-500 bg-red-50 text-red-800'
                : index === currentQuestion.correctAnswer && showExplanation
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : 'border-gray-200 bg-gray-50 text-gray-600'
          }"
          disabled={showExplanation}
        >
          <div class="flex items-center justify-between">
            <span>{option}</span>
            {#if showExplanation}
              {#if index === currentQuestion.correctAnswer}
                <CheckCircle class="w-5 h-5 text-green-600" />
              {:else if selectedAnswers[currentQuestionIndex] === index && index !== currentQuestion.correctAnswer}
                <XCircle class="w-5 h-5 text-red-600" />
              {/if}
            {/if}
          </div>
        </button>
      {/each}
    </div>

    <!-- Explanation -->
    {#if showExplanation}
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div class="flex items-start space-x-2">
          <Lightbulb class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h5 class="font-medium text-blue-900 mb-2">Explication :</h5>
            <p class="text-blue-800">{currentQuestion.explanation}</p>
          </div>
        </div>
      </div>

      <button
        on:click={nextQuestion}
        class="btn-primary w-full flex items-center justify-center space-x-2"
      >
        {#if isLastQuestion}
          <Trophy class="w-5 h-5" />
          <span>Voir les résultats</span>
        {:else}
          <ChevronRight class="w-5 h-5" />
          <span>Question suivante</span>
        {/if}
      </button>
    {/if}
  {:else}
    <!-- Results -->
    <div class="text-center">
      <div class="mb-6">
        <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
          <span class="text-2xl font-bold text-white">{score}/{quiz.questions.length}</span>
        </div>
        <div class="flex items-center justify-center space-x-2 mb-2">
          <Trophy class="w-6 h-6 text-primary-600" />
          <h3 class="text-2xl font-bold text-gray-900">Quiz terminé !</h3>
        </div>
        <p class="text-gray-600">
          Vous avez obtenu {score} bonne{score > 1 ? 's' : ''} réponse{score > 1 ? 's' : ''} sur {quiz.questions.length}
        </p>
      </div>

      <div class="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 mb-6">
        <div class="flex items-center justify-center space-x-2">
          <Award class="w-5 h-5 text-primary-600" />
          <p class="text-sm text-gray-700">
            <span class="font-medium">Points gagnés :</span> {score * 5} points
          </p>
        </div>
      </div>

      <button
        on:click={restartQuiz}
        class="btn-secondary w-full flex items-center justify-center space-x-2"
      >
        <RotateCcw class="w-5 h-5" />
        <span>Refaire le quiz</span>
      </button>
    </div>
  {/if}
</div>
