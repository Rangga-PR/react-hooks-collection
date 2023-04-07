import { useState, useEffect } from "react";

const useGetPosition = (options: PositionOptions) => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos: GeolocationPosition) => {
          setPosition(pos);
        },
        null,
        options
      );
    }
  }, []);

  return position;
};

export default useGetPosition;
