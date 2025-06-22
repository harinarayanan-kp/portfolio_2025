"use client";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { useFBX } from "@react-three/drei";
import { AnimationMixer, LoopRepeat, TextureLoader } from "three";

// Background component for Canvas
function CanvasBackground({ onLoaded }) {
  const texture = useLoader(TextureLoader, "/cambg.png");
  useEffect(() => {
    if (texture && onLoaded) onLoaded();
  }, [texture, onLoaded]);

  return (
    <mesh position={[0, 30, -200]}>
      <planeGeometry args={[540, 405]} />
      <meshBasicMaterial map={texture} transparent={false} opacity={1} />
    </mesh>
  );
}

// Model with animation (unchanged)
function FBXModel({ url, onLoaded }) {
  const group = useRef();
  const fbx = useFBX(url);
  const mixer = useRef();

  useEffect(() => {
    if (fbx && fbx.animations && fbx.animations.length) {
      mixer.current = new AnimationMixer(fbx);
      fbx.animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip, fbx);
        action.play();
        action.setLoop(LoopRepeat);
      });
    }
    if (fbx && onLoaded) onLoaded();
    return () => {
      mixer.current?.stopAllAction();
    };
  }, [fbx, onLoaded]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive ref={group} object={fbx} scale={50} />;
}

// Camera animation based on cursor position
function AnimatedCamera({ mouse }) {
  const { camera } = useThree();
  const basePos = [1.81, 53.05, 50];
  const lookAt = [-2.13, 49, -15.27];

  useFrame(() => {
    const xRange = 10;
    const yRange = 5;
    const targetX = basePos[0] - mouse.x * xRange;
    const targetY = basePos[1] - mouse.y * yRange;
    const targetZ = basePos[2];
    const t = 0.08;
    camera.position.x += (targetX - camera.position.x) * t;
    camera.position.y += (targetY - camera.position.y) * t;
    camera.position.z += (targetZ - camera.position.z) * t;
    camera.lookAt(...lookAt);
  });

  return null;
}

// Add this component above your ThreeBox export
function MovingPointLight({ mouse }) {
  // Map mouse.x/y (-1 to 1) to a position in 3D space
  const basePos = [0, 60, 60];
  const xRange = 20;
  const yRange = 10;
  const lightRef = useRef();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = basePos[0] + mouse.x * xRange;
      lightRef.current.position.y = basePos[1] + mouse.y * yRange;
      lightRef.current.position.z = basePos[2];
    }
  });

  return (
    <pointLight
      ref={lightRef}
      intensity={5}
      distance={200}
      color="red"
      castShadow
    />
  );
}

export default function ThreeBox() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [bgLoaded, setBgLoaded] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMouse({ x, y });
  };

  const allLoaded = bgLoaded && modelLoaded;

  return (
    <div
      style={{
        width: "min(90vw, 420px)",
        aspectRatio: "4 / 3",
        height: "auto",
        margin: "0 auto",
        background: "#222",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        maxWidth: 420,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
    >
      {!allLoaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#222",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
            }}
          />
        </div>
      )}
      <Canvas
        camera={{
          position: [1.81, 53.05, 54.75],
          fov: 50,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <CanvasBackground onLoaded={() => setBgLoaded(true)} />
          <FBXModel url="/Typing.fbx" onLoaded={() => setModelLoaded(true)} />
        </Suspense>
        <directionalLight
          position={[0, 10, 20]}
          intensity={1.2}
          color="#ffffff"
          castShadow
        />
        <directionalLight
          position={[-15, 10, 0]}
          intensity={1}
          color="#00ff00"
          castShadow
        />
        <directionalLight
          position={[15, 10, 0]}
          intensity={1}
          color="#00ff00"
          castShadow
        />
        <MovingPointLight mouse={mouse} />
        <AnimatedCamera mouse={mouse} />
      </Canvas>
    </div>
  );
}
