import { loadSettingsAndConfig, closeStore } from './global';
import { getStore } from './global/store'

(async () => {
  await loadSettingsAndConfig();
  const store = getStore()
  console.log(store.went.to);
})()
