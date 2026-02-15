<script setup lang="ts">
import { usePasscodeStore } from "~/stores/passcodeStore";

const router = useRouter();
const passcodeStore = usePasscodeStore();

const ready = ref(false);

useHead({
  title: "Geryon was a monster",
});

// checks if actually unlocked before rendering any content.
onMounted(() => {
  // if user did not go through passcode puzzle, then they are redirected back to the passcode
  // likely not entirely secure, but good enough for now, honestly.
  if (!passcodeStore.unlocked) {
    router.push("/");
  } else {
    ready.value = true;
  }
});
</script>

<template>
  <div v-if="ready">
    <div class="p-4 text-2xl">
      Geryon was a monster everything about him was red.
    </div>
    <div class="p-4">
      <NuxtLink
        to="/contact"
        class="bg-black text-white px-8 py-3 rounded hover"
      >
        Contact Us!
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
