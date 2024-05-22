
/**
 * check mobile device in server
 */
export const isMobileDevice = () => {
  const userAgent = navigator.userAgent;
  console.log(userAgent)
  if (/android/i.test(userAgent)) {
    return true;
  }
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return true;
  }
  return false;
};


