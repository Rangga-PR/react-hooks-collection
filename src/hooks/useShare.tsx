interface ShareData {
  title: string;
  url?: string;
  text?: string;
  file?: File;
}

const useShare = (data: ShareData, fallback: (data: ShareData) => void) => {
  async function share() {
    try {
      if (!navigator?.canShare) {
        if (fallback) {
          fallback(data);
          return;
        }
        return new Error("Your browser doesn't support the Web Share API.");
      }

      if (navigator.canShare(data)) {
        await navigator.share(data);
      } else {
        return new Error("failed to share data");
      }
    } catch (err) {
      return err;
    }
  }

  return { share };
};

export default useShare;
