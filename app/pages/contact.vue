<script setup lang="ts">
import { usePasscodeStore } from "~/stores/passcodeStore";


const router = useRouter()
const passcodeStore = usePasscodeStore()


const enterRedRealm = () => {
  if (passcodeStore.unlocked) {
    router.push('/unlocked')
  } else {
    // if they somehow got here without unlocking, send them to the start
    router.push('/')
  }
}
</script>


<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-slate-100">
    <h1 class="text-3xl font-serif mb-6">notxenogenesisis@gmail.com</h1>
    <h1 class="text-3xl font-serif mb-6">kaifu7k@gmail.com</h1>



    <button
        @click="enterRedRealm"
        class="bg-black text-white px-8 py-3 rounded hover"
    >
      Meet Miles and Kai →
    </button>
  </div>
</template>
