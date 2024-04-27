import { useMediaQuery } from "@mantine/hooks";

export function useMobileQuery() {
  const mobile = useMediaQuery("(max-width: 25rem)");
  return mobile;
}
