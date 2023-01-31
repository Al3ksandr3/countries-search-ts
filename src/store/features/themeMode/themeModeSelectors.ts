import { RootState } from "../../store";

export function selectThemeMode(reduxStore: RootState): string {
  return reduxStore.themeMode;
}
