import { useStore } from "@/store/store.ts";

export const useUser = () => {
  const firstName = useStore((state) => state.firstName);
  const lastName = useStore((state) => state.lastName);
  return { firstName, lastName };
};
