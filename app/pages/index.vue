<script setup lang="ts">
import { usePasscodeStore } from "~/stores/passcodeStore";

useHead({
  title: '"it\'s locked."'
})

// router for redirecting & passcodeStore for "locking" that route
const router = useRouter();
const passcodeStore = usePasscodeStore();

// TODO: randomize this
const passcode = "6767";

const inputCode = ref("");
const isAnimating = ref(false);

// takes in a number and appends it to inputCode
function pressNumber(n: number) {
  if (inputCode.value.length > 3) { return; }
  inputCode.value += n;
}

// removes last character of string
function backspace() {
  if (inputCode.value === "") { return; }
  inputCode.value = inputCode.value.substring(0, inputCode.value.length - 1);
}

// animations
function triggerAnimation() {
  isAnimating.value = true;

  // Remove animation after 300ms (or however long your animation lasts)
  setTimeout(() => {
    isAnimating.value = false;
    inputCode.value = "";
  }, 500)
}


watch(inputCode, async (newVal) => {
  if (newVal.length === 4) {
    if (newVal === passcode) {
      passcodeStore.unlocked = true
      // TODO: refactor triggerAnimation name & add second victory animation
      triggerAnimation()
      await new Promise(r => setTimeout(r, 300));
      await router.push("/unlocked");
    } else {
      triggerAnimation()
    }
  }
})

</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center h-dvh w-dvh">
    <div class="text-4xl">it's locked.</div>
    <div
        class="text-2xl p-4 h-12"
        :class="{ 'shake': isAnimating }">{{ inputCode }}</div>
    <div class="grid grid-cols-3 gap-3 p-4">
      <button
          v-for="n in 9"
          :key="n"
          class="keypad-btn"
          @click="pressNumber(n)">{{ n }}</button>
      <div/>
      <button class="keypad-btn" @click="pressNumber(0)">0</button>
      <button class="keypad-btn" @click="backspace">&lt;</button>
    </div>
    </div>
  </div>
</template>

<style scoped>
.keypad-btn {
  @apply bg-red-600 text-white py-4 rounded-lg text-xl font-semibold
  hover:bg-red-500 active:scale-95 transition transform shadow w-20 h-20;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  75% { transform: translateX(-4px); }
  100% { transform: translateX(0); }
}

.shake {
  animation: shake 0.3s ease-in-out;
}

</style>