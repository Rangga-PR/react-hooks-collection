import { useEffect } from "react";

function useBroadcastChannel(
  channelName: string,
  onReceiveMessage: (event: MessageEvent) => void
) {
  let channel: BroadcastChannel;

  useEffect(() => {
    channel = new BroadcastChannel(channelName);
    channel.addEventListener("message", onReceiveMessage);

    return () => {
      channel.removeEventListener("message", onReceiveMessage);
      channel.close();
    };
  }, []);

  function post(message: string) {
    channel.postMessage(message);
  }

  function close() {
    channel.close();
  }

  return { post, close };
}

export default useBroadcastChannel;
