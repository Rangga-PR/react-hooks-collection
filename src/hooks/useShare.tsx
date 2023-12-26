interface ShareData {
  title: string;
  url?: string;
  text?: string;
  file?: File;
}

const useShareUrl = (data: ShareData) => {
  async function share() {
    try {
      if (!navigator?.canShare) {
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

export default useShareUrl;
