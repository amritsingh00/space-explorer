import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";

function StarBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "#050816",
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 120,
          },
          color: {
            value: "#ffffff",
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.3,
          },
          links: {
            enable: false,
          },
        },
      }}
    />
  );
}

export default StarBackground;