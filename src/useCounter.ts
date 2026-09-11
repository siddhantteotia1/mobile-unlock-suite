// build 4c6a08d6ad
// (auto) 044aa4
import { ref } from 'vue';
export function useCounter(init = 0) {
  const n = ref(init);
  return { n, inc: () => n.value++, dec: () => n.value-- };
}
