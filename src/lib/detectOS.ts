export type OperatingSystem = 'ios' | 'android' | 'desktop';

export const detectOS = (): OperatingSystem => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  
  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'ios';
  }
  
  // Android detection
  if (/android/i.test(userAgent)) {
    return 'android';
  }
  
  return 'desktop';
};

export const APP_STORE_URL = "https://apps.apple.com/br/app/barbearia-paradise/id6756071953";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=barbeariaparadise.bestbarbers.app";
