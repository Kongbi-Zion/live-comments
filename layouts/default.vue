<template>
  <div>
    <nav
      class="fixed start-0 top-0 z-20 w-full bg-[#171b26] text-gray-50 border-b-2 border-gray-600"
    >
      <div
        class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between h-16 md:h-20"
      >
        <div class="">
          <NuxtLink to="/" class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-9 md:h-10 max-md:pl-2.5 text-purple-600 mr-2.5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M4.592 15.304C2.344 9.787 6.403 3.75 12.36 3.75h.321a8.07 8.07 0 0 1 8.068 8.068a8.98 8.98 0 0 1-8.982 8.982h-7.82a.75.75 0 0 1-.47-1.335l1.971-1.583a.25.25 0 0 0 .075-.29zM12.36 5.25c-4.893 0-8.226 4.957-6.38 9.488l.932 2.289a1.75 1.75 0 0 1-.525 2.024l-.309.249h5.689a7.48 7.48 0 0 0 7.482-7.482a6.57 6.57 0 0 0-6.568-6.568z"
                clip-rule="evenodd"
              />
            </svg>
            <span
              class="-ml-2 self-center whitespace-nowrap text-xl font-semibold"
              >Live Comments</span
            >
          </NuxtLink>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>
