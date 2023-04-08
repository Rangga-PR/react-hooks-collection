import { useState, useEffect, useRef } from "react";

const useWatchPosition = (options: PositionOptions) => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const watchId = useRef(0);

  useEffect(() => {
    if (navigator?.geolocation) {
      const id = navigator.geolocation.watchPosition(
        (pos: GeolocationPosition) => {
          setPosition(pos);
        },
        null,
        options
      );

      watchId.current = id;
    }

    return () => {
      watchId.current && navigator.geolocation.clearWatch(watchId.current);
    };
  }, []);

  return position;
};

export default useWatchPosition;
