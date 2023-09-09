import i18n from 'i18n-js';

import en from './locales/en';
import id_ID from './locales/id';

import { NativeModules, Platform } from 'react-native';

let deviceLanguage = Platform.OS === 'ios'
? NativeModules.SettingsManager.settings.AppleLocale ||
  NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
: NativeModules.I18nManager.localeIdentifier;

// NOTE : for dynamically change language inside app (need restart)
i18n.locale = deviceLanguage;
i18n.translations = { en, id_ID };

i18n.fallbacks = true;

i18n.missingBehaviour = 'guess';

i18n.tUC = (value, params) => i18n.t(value, params || {}).toUpperCase();
i18n.tLC = (value, params) => i18n.t(value, params || {}).toLowerCase();

// NOTE : capitalize first
i18n.tCF = (value, params) => {
  const str = i18n.t(value, params || {}).toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// NOTE : capitalize all
i18n.tCA = (value, params) =>
  i18n.t(value, params || {}).replace(/(?:^|\s)\S/g, fw => fw.toUpperCase());

export default i18n;
