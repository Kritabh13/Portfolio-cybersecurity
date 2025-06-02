import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

type Props = {
  animationPath: string; // path can be a URL or a local file path
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const res = await fetch(animationPath);
        const data = await res.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to load animation", error);
      }
    };

    fetchAnimation();
  }, [animationPath]);

  if (!animationData) return null;

  return (
    <div onClick={() => null}>
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

export default GreetingLottie;

