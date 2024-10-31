<template>
  <div>
    <NuxtRouteAnnouncer />
    <div
      class="h-full w-full bg-[#373c48] flex justify-center text-gray-400 overflow-y-auto overflow-x-hidden"
    >
      <diV class="w-full max-w-screen-md py-20 space-y-8">
        <div class="bg-[#171b26] w-full rounded-lg p-8">
          <div class="w-full flex justify-between">
            <div class="flex items-center gap-3">
              <img src="/profile.webp" class="h-9 w-9 rounded-full" />

              <div class="flex">
                <p class="font-medium text-gray-100">Amplify</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
                    />
                  </svg>
                </span>
                <span class="font-normal"> <span>4h</span></span>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>

          <div class="w-full px-11 pt-2 space-y-5">
            <p>
              🗃️ ⚡ Today the amplify team just launched a new feature. That is
              an integration between Amplify Hosting and Amazon S3, making it
              easier to deploy static website content.
            </p>

            <div class="">
              <p>
                🔗 Learn more ⏩
                <NuxtLink
                  to="https://x.com/awsamplify/status/1851676097663910103?s=46&t=NXUmr2wfqcEBnleg_e1Njg"
                  class="text-purple-500"
                  >https://x.com/awsamplify/status/1851676097663910103?s=46&t=NXUmr2wfqcEBnleg_e1Njg</NuxtLink
                >
              </p>
            </div>

            <div>
              <img
                src="https://pbs.twimg.com/media/GbJ5mPgXYAAwL9z?format=jpg&name=900x900"
              />
            </div>
            <div class="flex gap-1 items-center text-purple-400">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M4.592 15.304C2.344 9.787 6.403 3.75 12.36 3.75h.321a8.07 8.07 0 0 1 8.068 8.068a8.98 8.98 0 0 1-8.982 8.982h-7.82a.75.75 0 0 1-.47-1.335l1.971-1.583a.25.25 0 0 0 .075-.29zM12.36 5.25c-4.893 0-8.226 4.957-6.38 9.488l.932 2.289a1.75 1.75 0 0 1-.525 2.024l-.309.249h5.689a7.48 7.48 0 0 0 7.482-7.482a6.57 6.57 0 0 0-6.568-6.568z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="font-medium pt-1">{{ comments.length }}</p>
            </div>

            <!-- <div class="flex bg-[#20232e] rounded-md">
              <img
                src="https://pbs.twimg.com/media/GbJ5mPgXYAAwL9z?format=jpg&name=900x900"
                class="w-32 object-cover"
              />
              <div class="p-3">
                <p>
                  🗃️ ⚡ Today the amplify team just launched a new feature. That
                  is an integration between Amplify Hosting and Amazon S3,
                  making it easier to deploy static website content.
                </p>
              </div>
            </div> -->
          </div>
        </div>

        <div class="bg-[#171b26] w-full rounded-lg p-8">
          <div class="mb-6 flex justify-between">
            <div class="flex gap-2 items-center font-medium text-gray-100">
              <div><p>Comments</p></div>
              <div
                class="bg-[#1f222d] px-2 py-1 rounded-lg border-2 border-gray-600"
              >
                <p class="text-sm">{{ comments.length }}</p>
              </div>
            </div>

            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                class="block w-full p-1.5 ps-10 text-sm text-gray-400 border-[2.5px] outline-none border-[#262934] rounded-md bg-[#1f222d]"
                placeholder="Search..."
                required
              />
            </div>
          </div>

          <div class="space-y-6">
            <Comment />
            <Comment />
            <Comment />
          </div>

          <div class="px-5">
            <div
              class="w-full mb-4 border-[2.5px] mt-8 border-[#262934] rounded-lg bg-[#171b26]"
            >
              <div class="px-2 py-2 bg-transparent rounded-t-lg">
                <label for="comment" class="sr-only">Your comment</label>
                <textarea
                  id="comment"
                  rows="4"
                  v-model="comment"
                  class="w-full px-4 py-2 text-sm rounded-md outline-none text-gray-400 bg-[#20232e] border-0"
                  placeholder="Write a comment..."
                  @input="error = ''"
                  :class="error && 'border-[1px] border-red-500'"
                ></textarea>
                <p :class="error && 'text-red-500'">
                  {{ error }}
                </p>
              </div>
              <div
                class="flex items-center justify-between px-3 py-2 border-t-[2.5px] border-[#262934]"
              >
                <button
                  type="submit"
                  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 hover:bg-purple-800"
                  @click="createComment()"
                >
                  Post comment
                </button>
                <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 12 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                      />
                    </svg>
                    <span class="sr-only">Attach file</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path
                        d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                      />
                    </svg>
                    <span class="sr-only">Set location</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path
                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
                      />
                    </svg>
                    <span class="sr-only">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </diV>
    </div>
  </div>
</template>
<script setup lang="ts">
const comments = ref([]);
const comment = ref("");
const error = ref("");

const createComment = () => {
  if (!comment.value) {
    error.value = "Required!";
    return;
  }
  console.log("comment: ", comment);
};
</script>
