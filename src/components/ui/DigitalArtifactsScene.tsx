import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface DigitalArtifactsSceneProps {
  className?: string;
}

/**
 * Creates an authentic elongated hexagonal crystal geometry
 * with 6 upper facet planes, 6 central prism planes, and 6 lower facet planes.
 */
const createCrystalGeometry = (radius = 1.05, height = 3.2, capHeight = 1.05): THREE.BufferGeometry => {
  const segments = 6;
  const halfPrismH = (height - capHeight * 2) / 2;
  const positions: number[] = [];

  const topApex = [0, halfPrismH + capHeight, 0];
  const bottomApex = [0, -halfPrismH - capHeight, 0];

  const upperRing: [number, number, number][] = [];
  const lowerRing: [number, number, number][] = [];

  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    upperRing.push([x, halfPrismH, z]);
    lowerRing.push([x, -halfPrismH, z]);
  }

  const addTriangle = (
    p1: [number, number, number] | number[],
    p2: [number, number, number] | number[],
    p3: [number, number, number] | number[]
  ) => {
    positions.push(...p1, ...p2, ...p3);
  };

  // Top Cap Triangles
  for (let i = 0; i < segments; i++) {
    const next = (i + 1) % segments;
    addTriangle(topApex, upperRing[next], upperRing[i]);
  }

  // Middle Prism Quads (2 triangles each)
  for (let i = 0; i < segments; i++) {
    const next = (i + 1) % segments;
    addTriangle(upperRing[i], upperRing[next], lowerRing[i]);
    addTriangle(upperRing[next], lowerRing[next], lowerRing[i]);
  }

  // Bottom Cap Triangles
  for (let i = 0; i < segments; i++) {
    const next = (i + 1) % segments;
    addTriangle(bottomApex, lowerRing[i], lowerRing[next]);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
};

interface ComputerArtifactResult {
  chipGroup: THREE.Group;
  circuitMat: THREE.MeshBasicMaterial;
  coreIndicatorMat: THREE.MeshBasicMaterial;
}

/**
 * Creates the futuristic computer / microchip 3D assembly
 */
const createComputerArtifact = (): ComputerArtifactResult => {
  const chipGroup = new THREE.Group();

  // 1. Dark Navy & Titanium Substrate Wafer
  const substrateGeo = new THREE.BoxGeometry(1.25, 0.06, 1.25);
  const substrateMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#0D274D'),
    metalness: 0.85,
    roughness: 0.35,
  });
  const substrate = new THREE.Mesh(substrateGeo, substrateMat);
  chipGroup.add(substrate);

  // Substrate edge accents
  const substrateEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(substrateGeo),
    new THREE.LineBasicMaterial({
      color: new THREE.Color('#2563EB'),
      transparent: true,
      opacity: 0.55,
    })
  );
  chipGroup.add(substrateEdges);

  // 2. Heat Spreader / Outer Silicon Frame
  const spreaderGeo = new THREE.BoxGeometry(0.85, 0.05, 0.85);
  const spreaderMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#163A70'),
    metalness: 0.95,
    roughness: 0.2,
  });
  const spreader = new THREE.Mesh(spreaderGeo, spreaderMat);
  spreader.position.y = 0.045;
  chipGroup.add(spreader);

  // 3. Central Silicon Die
  const dieGeo = new THREE.BoxGeometry(0.48, 0.04, 0.48);
  const dieMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#08101E'),
    metalness: 0.98,
    roughness: 0.1,
  });
  const die = new THREE.Mesh(dieGeo, dieMat);
  die.position.y = 0.08;
  chipGroup.add(die);

  // 4. Luminous Microcircuit Traces (Tiny illuminated conduits with pulsing glow)
  const circuitMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#8DB8F0'),
    wireframe: true,
    transparent: true,
    opacity: 0.85,
  });
  const circuitPlaneGeo = new THREE.PlaneGeometry(0.44, 0.44, 4, 4);
  const circuitPlane = new THREE.Mesh(circuitPlaneGeo, circuitMat);
  circuitPlane.rotation.x = -Math.PI / 2;
  circuitPlane.position.y = 0.102;
  chipGroup.add(circuitPlane);

  // 5. Central Quantum Core Indicator
  const coreIndicatorGeo = new THREE.OctahedronGeometry(0.08, 0);
  const coreIndicatorMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#2563EB'),
  });
  const coreIndicator = new THREE.Mesh(coreIndicatorGeo, coreIndicatorMat);
  coreIndicator.position.y = 0.15;
  chipGroup.add(coreIndicator);

  // 6. Perimeter Micro-Pins
  const pinGeo = new THREE.BoxGeometry(0.04, 0.025, 0.08);
  const pinMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#FAF6EF'),
    metalness: 0.95,
    roughness: 0.2,
  });

  const pinCountPerSide = 6;
  const pinSpacing = 1.05 / (pinCountPerSide + 1);
  for (let i = 1; i <= pinCountPerSide; i++) {
    const offset = -0.525 + i * pinSpacing;
    const p1 = new THREE.Mesh(pinGeo, pinMat);
    p1.position.set(offset, -0.015, 0.61);
    chipGroup.add(p1);

    const p2 = new THREE.Mesh(pinGeo, pinMat);
    p2.position.set(offset, -0.015, -0.61);
    chipGroup.add(p2);

    const p3 = new THREE.Mesh(pinGeo, pinMat);
    p3.rotation.y = Math.PI / 2;
    p3.position.set(0.61, -0.015, offset);
    chipGroup.add(p3);

    const p4 = new THREE.Mesh(pinGeo, pinMat);
    p4.rotation.y = Math.PI / 2;
    p4.position.set(-0.61, -0.015, offset);
    chipGroup.add(p4);
  }

  return { chipGroup, circuitMat, coreIndicatorMat };
};

export const DigitalArtifactsScene: React.FC<DigitalArtifactsSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect reduced motion preference (used only to pace speed gently, never to stop motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const speedMult = prefersReducedMotion ? 0.65 : 1.0;

    // --- 1. Scene, Camera, and Renderer Setup ---
    const scene = new THREE.Scene();

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Attach canvas to DOM
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    // Main interaction group containing all art-directed artifacts
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- 2. Lighting Rig ---
    // A. Ambient Navy/Beige Fill
    const ambientLight = new THREE.AmbientLight(new THREE.Color('#0D274D'), 1.2);
    scene.add(ambientLight);

    // B. Warm Beige Editorial Key Light
    const keyLight = new THREE.DirectionalLight(new THREE.Color('#FAF6EF'), 2.4);
    keyLight.position.set(-4.0, 5.0, 4.0);
    scene.add(keyLight);

    // C. Deep Blue Secondary Fill
    const fillLight = new THREE.DirectionalLight(new THREE.Color('#163A70'), 1.6);
    fillLight.position.set(4.0, 2.0, 2.5);
    scene.add(fillLight);

    // D. Royal Blue Specular Rim Light
    const rimLight = new THREE.DirectionalLight(new THREE.Color('#2563EB'), 3.4);
    rimLight.position.set(3.5, -3.0, -3.5);
    scene.add(rimLight);

    // E. Soft Blue Point Light near the focal center
    const focalGlow = new THREE.PointLight(new THREE.Color('#8DB8F0'), 2.2, 12, 1.2);
    focalGlow.position.set(0, 0.3, 2.5);
    scene.add(focalGlow);

    // --- 3. Object 1: Large Translucent Blue Crystal (Focal Point) ---
    const crystalGroup = new THREE.Group();
    crystalGroup.position.set(0.1, 0.15, 0);
    masterGroup.add(crystalGroup);

    // Outer Faceted Crystal
    const crystalGeo = createCrystalGeometry(1.08, 3.1, 0.95);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#163A70'),
      emissive: new THREE.Color('#0D274D'),
      emissiveIntensity: 0.3,
      roughness: 0.12,
      metalness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 0.92,
      reflectivity: 0.9,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    crystalGroup.add(crystalMesh);

    // Refined Facet Wire Edges
    const crystalEdgesGeo = new THREE.EdgesGeometry(crystalGeo, 10);
    const crystalEdgesMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#8DB8F0'),
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const crystalEdges = new THREE.LineSegments(crystalEdgesGeo, crystalEdgesMat);
    crystalGroup.add(crystalEdges);

    // Inner Concentric Luminous Crystal Core
    const innerCrystalGeo = createCrystalGeometry(0.55, 1.6, 0.5);
    const innerCrystalMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#2563EB'),
      emissive: new THREE.Color('#2563EB'),
      emissiveIntensity: 0.55,
      roughness: 0.2,
      metalness: 0.15,
      transparent: true,
      opacity: 0.85,
    });
    const innerCrystalMesh = new THREE.Mesh(innerCrystalGeo, innerCrystalMat);
    crystalGroup.add(innerCrystalMesh);

    // Initial artistic tilt for crystal
    crystalGroup.rotation.set(0.24, -0.4, 0.12);

    // --- 4. Object 2: Secondary Floating Glass Cubes ---
    const cubesData = [
      {
        size: 0.52,
        pos: new THREE.Vector3(-1.95, 1.25, 0.7),
        rotDir: { x: 0.22, y: 0.28, z: 0.14 },
        bobSpeed: 0.95,
        bobAmp: 0.22,
        driftAmpX: 0.12,
        driftAmpZ: 0.16,
        phase: 0.0,
      },
      {
        size: 0.42,
        pos: new THREE.Vector3(1.85, 1.45, -0.4),
        rotDir: { x: -0.18, y: 0.24, z: 0.18 },
        bobSpeed: 0.82,
        bobAmp: 0.20,
        driftAmpX: 0.14,
        driftAmpZ: 0.14,
        phase: 1.7,
      },
      {
        size: 0.35,
        pos: new THREE.Vector3(-1.45, -1.45, -0.8),
        rotDir: { x: 0.25, y: -0.20, z: 0.16 },
        bobSpeed: 1.18,
        bobAmp: 0.18,
        driftAmpX: 0.11,
        driftAmpZ: 0.18,
        phase: 3.4,
      },
      {
        size: 0.28,
        pos: new THREE.Vector3(2.1, -0.65, 0.65),
        rotDir: { x: -0.22, y: -0.26, z: -0.16 },
        bobSpeed: 0.92,
        bobAmp: 0.16,
        driftAmpX: 0.13,
        driftAmpZ: 0.15,
        phase: 4.8,
      },
      {
        size: 0.24,
        pos: new THREE.Vector3(-0.65, 2.05, -0.5),
        rotDir: { x: 0.18, y: -0.30, z: 0.22 },
        bobSpeed: 1.08,
        bobAmp: 0.15,
        driftAmpX: 0.10,
        driftAmpZ: 0.12,
        phase: 2.3,
      },
    ];

    const cubesList: {
      meshGroup: THREE.Group;
      basePos: THREE.Vector3;
      initRot: THREE.Euler;
      rotDir: { x: number; y: number; z: number };
      bobSpeed: number;
      bobAmp: number;
      driftAmpX: number;
      driftAmpZ: number;
      phase: number;
    }[] = [];

    cubesData.forEach((data) => {
      const cubeGroup = new THREE.Group();
      cubeGroup.position.copy(data.pos);

      const cubeGeo = new THREE.BoxGeometry(data.size, data.size, data.size);
      const cubeMat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#163A70'),
        emissive: new THREE.Color('#0D274D'),
        emissiveIntensity: 0.2,
        roughness: 0.15,
        metalness: 0.05,
        clearcoat: 0.9,
        clearcoatRoughness: 0.1,
        transparent: true,
        opacity: 0.88,
      });

      const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
      cubeGroup.add(cubeMesh);

      const cubeEdgesGeo = new THREE.EdgesGeometry(cubeGeo);
      const cubeEdgesMat = new THREE.LineBasicMaterial({
        color: new THREE.Color('#8DB8F0'),
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
      });
      const cubeEdges = new THREE.LineSegments(cubeEdgesGeo, cubeEdgesMat);
      cubeGroup.add(cubeEdges);

      const initRot = new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      cubeGroup.rotation.copy(initRot);

      masterGroup.add(cubeGroup);
      cubesList.push({
        meshGroup: cubeGroup,
        basePos: data.pos.clone(),
        initRot,
        rotDir: data.rotDir,
        bobSpeed: data.bobSpeed,
        bobAmp: data.bobAmp,
        driftAmpX: data.driftAmpX,
        driftAmpZ: data.driftAmpZ,
        phase: data.phase,
      });
    });

    // --- 5. Object 3: Futuristic Computer / Chip Artifact ---
    const chipArtifact = createComputerArtifact();
    chipArtifact.chipGroup.scale.set(0.62, 0.62, 0.62);
    const chipBasePos = new THREE.Vector3(1.0, -1.35, 0.85);
    chipArtifact.chipGroup.position.copy(chipBasePos);
    chipArtifact.chipGroup.rotation.set(0.52, -0.4, 0.26);
    masterGroup.add(chipArtifact.chipGroup);

    // --- 6. Interaction State (Mouse Parallax & Scroll) ---
    const mouseTarget = { x: 0, y: 0 };
    const mouseCurrent = { x: 0, y: 0 };
    let scrollFraction = 0;
    let isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseTarget.x = Math.max(-1.2, Math.min(1.2, nx));
      mouseTarget.y = Math.max(-1.2, Math.min(1.2, ny));
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
      mouseTarget.x = 0;
      mouseTarget.y = 0;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = Math.max(window.innerHeight, 1);
      scrollFraction = Math.min(scrollY / docHeight, 1.5);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize handling via ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    // --- 7. Animation Loop with Guaranteed Autonomous Motion ---
    let animationFrameId: number;
    const startTime = performance.now();

    const renderLoop = (now: number) => {
      // Elapsed time in seconds from initial mount
      const rawElapsed = (now - startTime) * 0.001;
      const t = rawElapsed * speedMult;

      // Smooth mouse interpolation (spring lerp)
      mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.05;
      mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.05;

      // --- A. Crystal: Continuous Organic Autonomous Motion ---
      // Steady fluid vertical rotation
      crystalGroup.rotation.y = t * 0.25;
      // Secondary tilt & precession
      crystalGroup.rotation.x = 0.24 + Math.sin(t * 0.45) * 0.12;
      crystalGroup.rotation.z = 0.12 + Math.cos(t * 0.35) * 0.09;
      // Continuous harmonic vertical float
      crystalGroup.position.y = 0.14 + Math.sin(t * 0.85) * 0.24;
      crystalGroup.position.x = 0.1 + Math.cos(t * 0.42) * 0.07;
      // Counter-rotation of inner crystal core for dynamic light refraction
      innerCrystalMesh.rotation.y = -t * 0.32;

      // --- B. Glass Cubes: Independent Continuous Floating & Drift ---
      cubesList.forEach((cube) => {
        // Continuous 3D rotation at unique speeds & directions
        cube.meshGroup.rotation.x = cube.initRot.x + t * cube.rotDir.x;
        cube.meshGroup.rotation.y = cube.initRot.y + t * cube.rotDir.y;
        cube.meshGroup.rotation.z = cube.initRot.z + t * cube.rotDir.z;

        // Asynchronous harmonic floating across Y, X, and depth (Z)
        const bobY = Math.sin(t * cube.bobSpeed + cube.phase) * cube.bobAmp;
        const driftX =
          Math.cos(t * (cube.bobSpeed * 0.7) + cube.phase) * cube.driftAmpX;
        const driftZ =
          Math.sin(t * (cube.bobSpeed * 0.85) + cube.phase + 1.2) * cube.driftAmpZ;

        cube.meshGroup.position.y = cube.basePos.y + bobY;
        cube.meshGroup.position.x = cube.basePos.x + driftX;
        cube.meshGroup.position.z = cube.basePos.z + driftZ;
      });

      // --- C. Computer/Chip Artifact: Continuous Drift & Pulsing Circuit Glow ---
      chipArtifact.chipGroup.rotation.y = -0.4 + t * 0.2;
      chipArtifact.chipGroup.rotation.x = 0.52 + Math.sin(t * 0.52) * 0.14;
      chipArtifact.chipGroup.rotation.z = 0.26 + Math.cos(t * 0.4) * 0.09;
      // Gentle floating & depth displacement
      chipArtifact.chipGroup.position.y =
        chipBasePos.y + Math.sin(t * 0.78 + 1.2) * 0.18;
      chipArtifact.chipGroup.position.x =
        chipBasePos.x + Math.cos(t * 0.52 + 0.6) * 0.1;
      chipArtifact.chipGroup.position.z =
        chipBasePos.z + Math.sin(t * 0.6 + 2.1) * 0.15;

      // Continuous gentle breathing pulse of circuit lines and core
      const circuitPulse = 0.55 + Math.sin(t * 2.4) * 0.35;
      chipArtifact.circuitMat.opacity = circuitPulse;
      chipArtifact.coreIndicatorMat.color.setRGB(
        0.14,
        0.38 + circuitPulse * 0.25,
        0.95
      );

      // --- D. Overall Scene: Ambient Autonomous Breathing + Parallax ---
      const autonomousDriftRotY = Math.sin(t * 0.25) * 0.06;
      const autonomousDriftRotX = Math.cos(t * 0.2) * 0.05;
      const autonomousDriftPosY = Math.sin(t * 0.32) * 0.05;

      // Mouse parallax and scroll responsiveness layer gracefully on top
      const targetGroupRotY = mouseCurrent.x * 0.24 + autonomousDriftRotY;
      const targetGroupRotX = -mouseCurrent.y * 0.18 + autonomousDriftRotX;
      const targetGroupPosX = mouseCurrent.x * 0.22;
      const targetGroupPosY = mouseCurrent.y * 0.18 - scrollFraction * 0.35 + autonomousDriftPosY;
      const targetGroupPosZ = -scrollFraction * 0.5;

      masterGroup.rotation.y += (targetGroupRotY - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (targetGroupRotX - masterGroup.rotation.x) * 0.05;
      masterGroup.position.x += (targetGroupPosX - masterGroup.position.x) * 0.05;
      masterGroup.position.y += (targetGroupPosY - masterGroup.position.y) * 0.05;
      masterGroup.position.z += (targetGroupPosZ - masterGroup.position.z) * 0.05;

      // Restrained hover response: slight scale pulse
      const targetScale = isHovered ? 1.03 : 1.0;
      masterGroup.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);
    setIsLoaded(true);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();

      // Cleanly remove canvas from container and dispose
      if (renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      crystalGeo.dispose();
      crystalMat.dispose();
      crystalEdgesGeo.dispose();
      crystalEdgesMat.dispose();
      innerCrystalGeo.dispose();
      innerCrystalMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center select-none overflow-visible transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      aria-label="Interactive 3D Art: Digital Artifacts featuring a translucent blue crystal, floating glass cubes, and a computing artifact"
    >
      {!hasWebGL && (
        /* Graceful WebGL Fallback */
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#163A70]/40 to-[#0D274D]/80 blur-2xl" />
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-[0_10px_25px_rgba(22,58,112,0.4)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="100,20 145,55 145,145 100,180 55,145 55,55"
              fill="#163A70"
              fillOpacity="0.85"
              stroke="#8DB8F0"
              strokeWidth="1.5"
            />
            <polygon
              points="100,20 100,180 55,145 55,55"
              fill="#2563EB"
              fillOpacity="0.4"
            />
            <rect
              x="25"
              y="40"
              width="24"
              height="24"
              rx="3"
              fill="#0D274D"
              fillOpacity="0.75"
              stroke="#8DB8F0"
              strokeWidth="1"
            />
            <rect
              x="150"
              y="130"
              width="20"
              height="20"
              rx="3"
              fill="#0D274D"
              fillOpacity="0.75"
              stroke="#8DB8F0"
              strokeWidth="1"
            />
            <rect
              x="130"
              y="45"
              width="32"
              height="32"
              rx="4"
              fill="#0D274D"
              stroke="#2563EB"
              strokeWidth="1.5"
            />
            <rect x="138" y="53" width="16" height="16" fill="#163A70" />
          </svg>
        </div>
      )}
    </div>
  );
};
