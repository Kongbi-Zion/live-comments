<template>
  <div class="w-full text-sm">
    <div class="w-full">
      <div class="flex items-center gap-3">
        <div
          class="h-8 w-8 rounded-full"
          :style="{ backgroundColor: comment.color }"
        ></div>
        <div class="flex">
          <p class="font-medium text-gray-100">{{ comment.username }}</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
              />
            </svg>
          </span>
          <span class="">
            <span>{{ comment.time }}</span></span
          >
        </div>
      </div>
    </div>

    <div class="w-full px-11 space-y-5">
      <p>
        {{ comment.comment }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Types
type Comment = {
  username: string;
  time: string;
  color: string;
  comment: string;
};
defineProps<{ comment: Comment }>();
</script>
