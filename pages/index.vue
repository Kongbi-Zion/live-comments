<template>
  <div
    class="h-full pt-1.5 md:pt-10 px-3 w-full bg-[#373c48] flex justify-center text-gray-400 overflow-y-auto overflow-x-hidden"
  >
    <diV class="w-full max-w-screen-md py-20 space-y-8">
      <div class="bg-[#171b26] w-full rounded-lg p-6 md:p-8">
        <div class="w-full flex justify-between">
          <div class="flex items-center gap-3">
            <img
              src="https://d14x58xoxfhz1s.cloudfront.net/6d26bf94-1114-446a-b9fa-948ee8b164d7"
              class="h-9 w-9 rounded-full"
            />

            <div class="flex">
              <p class="font-medium text-gray-100">Educloud Academy</p>
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
              <span class="font-normal"> <span>Thus 31st 2024</span></span>
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
            🗃️ ⚡ Educloud Academy is an online educational platform focused on
            cloud computing, offering practical projects on AWS, Azure, and
            Google Cloud.
          </p>

          <div class="">
            <p>
              🔗 Learn more ⏩
              <NuxtLink
                to="https://www.educloud.academy"
                target="_blank"
                class="text-purple-500 break-words"
                >https://www.educloud.academy</NuxtLink
              >
            </p>
          </div>

          <p>
            If you have used this platform before, let me know what you think
            about the platform in the comments section below
          </p>

          <!-- <div>
            <img
              src="https://pbs.twimg.com/media/GbJ5mPgXYAAwL9z?format=jpg&name=900x900"
            />
          </div> -->

          <div class="md:flex bg-[#20232e] rounded-md">
            <img src="/educloud_logo.jpg" class="md:w-32 object-cover" />
            <div class="p-3">
              <p>
                🗃️ ⚡ Educloud Academy is an online educational platform focused
                on cloud computing, offering practical projects on AWS, Azure,
                and Google Cloud...
              </p>
            </div>
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
        </div>
      </div>

      <div class="bg-[#171b26] w-full rounded-lg p-6 md:p-8">
        <div class="mb-6 flex justify-between gap-10">
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
          <div
            v-if="comments.length == 0"
            class="w-full flex items-center flex-wrap justify-center gap-10 mt-20"
          >
            <div class="grid gap-4 w-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-14 mx-auto"
                viewBox="0 0 116 121"
                fill="none"
              >
                <path
                  d="M0.206909 63.57C0.206909 31.7659 25.987 6.12817 57.6487 6.12817C89.2631 6.12817 115.079 31.7541 115.079 63.57C115.079 77.0648 110.43 89.4805 102.627 99.2755C91.8719 112.853 75.4363 121 57.6487 121C39.7426 121 23.4018 112.794 12.6582 99.2755C4.85538 89.4805 0.206909 77.0648 0.206909 63.57Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M72.7942 0.600875L72.7942 0.600762L72.7836 0.599331C72.3256 0.537722 71.8622 0.5 71.3948 0.5H22.1643C17.1256 0.5 13.0403 4.56385 13.0403 9.58544V107.286C13.0403 112.308 17.1256 116.372 22.1643 116.372H93.1214C98.1725 116.372 102.245 112.308 102.245 107.286V29.4482C102.245 28.7591 102.17 28.0815 102.019 27.4162L102.019 27.416C101.615 25.6459 100.67 24.0014 99.2941 22.7574C99.2939 22.7572 99.2937 22.757 99.2934 22.7568L77.5462 2.89705C77.5461 2.89692 77.5459 2.89679 77.5458 2.89665C76.2103 1.66765 74.5591 0.876968 72.7942 0.600875Z"
                  fill="white"
                  stroke="#E5E7EB"
                />
                <circle cx="60.2069" cy="61" r="21.0256" fill="#EEF2FF" />
                <path
                  d="M74.6786 46.1412L74.6783 46.1409C66.5737 38.0485 53.4531 38.0481 45.36 46.1412C37.2552 54.2341 37.2551 67.3666 45.3597 75.4596C53.4529 83.5649 66.5739 83.5645 74.6786 75.4599C82.7716 67.3669 82.7716 54.2342 74.6786 46.1412ZM79.4694 41.3508C90.2101 52.0918 90.2101 69.5093 79.4694 80.2502C68.7166 90.9914 51.3104 90.9915 40.5576 80.2504C29.8166 69.5095 29.8166 52.0916 40.5576 41.3506C51.3104 30.6096 68.7166 30.6097 79.4694 41.3508Z"
                  stroke="#E5E7EB"
                />
                <path
                  d="M83.2471 89.5237L76.8609 83.1309C78.9391 81.5058 80.8156 79.6106 82.345 77.6546L88.7306 84.0468L83.2471 89.5237Z"
                  stroke="#E5E7EB"
                />
                <path
                  d="M104.591 94.4971L104.59 94.4969L92.7346 82.653C92.7342 82.6525 92.7337 82.652 92.7332 82.6515C91.6965 81.6018 90.0076 81.6058 88.9629 82.6505L89.3089 82.9965L88.9629 82.6505L81.8573 89.7561C80.8213 90.7921 80.8248 92.4783 81.8549 93.5229L81.8573 93.5253L93.7157 105.384C96.713 108.381 101.593 108.381 104.591 105.384C107.6 102.375 107.6 97.5062 104.591 94.4971Z"
                  fill="#A5B4FC"
                  stroke="#818CF8"
                />
                <path
                  d="M62.5493 65.6714C62.0645 65.6714 61.6626 65.2694 61.6626 64.7729C61.6626 62.7866 58.6595 62.7866 58.6595 64.7729C58.6595 65.2694 58.2576 65.6714 57.761 65.6714C57.2762 65.6714 56.8743 65.2694 56.8743 64.7729C56.8743 60.422 63.4478 60.4338 63.4478 64.7729C63.4478 65.2694 63.0458 65.6714 62.5493 65.6714Z"
                  fill="#4F46E5"
                />
                <path
                  d="M70.1752 58.0694H66.4628C65.9662 58.0694 65.5642 57.6675 65.5642 57.1709C65.5642 56.6862 65.9662 56.2842 66.4628 56.2842H70.1752C70.6717 56.2842 71.0737 56.6862 71.0737 57.1709C71.0737 57.6675 70.6717 58.0694 70.1752 58.0694Z"
                  fill="#4F46E5"
                />
                <path
                  d="M53.8596 58.0693H50.1472C49.6506 58.0693 49.2487 57.6673 49.2487 57.1708C49.2487 56.686 49.6506 56.2841 50.1472 56.2841H53.8596C54.3443 56.2841 54.7463 56.686 54.7463 57.1708C54.7463 57.6673 54.3443 58.0693 53.8596 58.0693Z"
                  fill="#4F46E5"
                />
                <rect
                  x="28.9248"
                  y="16.3846"
                  width="30.7692"
                  height="2.05128"
                  rx="1.02564"
                  fill="#4F46E5"
                />
                <rect
                  x="28.9248"
                  y="100.487"
                  width="41.0256"
                  height="4.10256"
                  rx="2.05128"
                  fill="#A5B4FC"
                />
                <rect
                  x="28.9248"
                  y="22.5385"
                  width="10.2564"
                  height="2.05128"
                  rx="1.02564"
                  fill="#4F46E5"
                />
                <circle cx="42.2582" cy="23.5641" r="1.02564" fill="#4F46E5" />
                <circle cx="46.3607" cy="23.5641" r="1.02564" fill="#4F46E5" />
                <circle cx="50.4633" cy="23.5641" r="1.02564" fill="#4F46E5" />
              </svg>
              <div>
                <h2
                  class="text-center text-base font-semibold leading-relaxed pb-1"
                >
                  There are no comment's here
                </h2>
                <p class="text-center text-sm font-normal leading-snug pb-4">
                  Type your comments below
                </p>
              </div>
            </div>
          </div>
          <Comment
            v-for="comment in comments"
            :key="comment.comment"
            :comment="comment"
          />
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
                :disabled="pending"
              >
                <svg
                  v-if="pending"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                    opacity=".25"
                  />
                  <path
                    fill="currentColor"
                    d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      dur="0.75s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;360 12 12"
                    />
                  </path>
                </svg>
                <span v-else>Post comment</span>
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
</template>

<script setup lang="ts">
// import dependencies
import { events } from "aws-amplify/data";
import Comment from "@/components/Comment.vue";

// Types
type Comment = {
  username: string;
  time: string;
  color: string;
  comment: string;
};

// States
const comments = ref<Comment[]>([]);
const pending = ref(false);
const comment = ref("");
const error = ref("");

// Built-in methods
onMounted(async () => {
  if (process.client) {
    const sleep = (m: number) => new Promise((r) => setTimeout(r, m));
    await sleep(2000);
    handleEventSubscription();
  }
});

// custom methods
const createComment = async () => {
  if (!comment.value) {
    error.value = "Required!";
    return;
  }
  pending.value = true;

  // Single event
  await events.post("/default/test", {
    username: "Username",
    time: "4h",
    color: getRandomColor(),
    comment: comment.value,
  });
};

const handleEventSubscription = async () => {
  const channel = await events.connect("/default/test");
  channel.subscribe({
    next: (data) => {
      pending.value = false;
      comments.value.push(data);
      comment.value = "";
    },
    error: (err) => console.error("error", err),
  });
};

function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, "0")}`;
}
</script>

<style scoped></style>
