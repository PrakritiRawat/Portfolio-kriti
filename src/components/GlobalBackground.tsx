"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobalBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 80;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Milky Way Generator ---
    const starCount = 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    const color1 = new THREE.Color("#ffffff"); // Pure white
    const color2 = new THREE.Color("#e2e8f0"); // Soft grey/white
    const color3 = new THREE.Color("#7dd3fc"); // Bright sky blue
    const color4 = new THREE.Color("#c4b5fd"); // Very pale purple
    const color5 = new THREE.Color("#3b82f6"); // Deep cosmic blue

    for (let i = 0; i < starCount; i++) {
       const distance = Math.random() * 150;
       const theta = Math.random() * Math.PI * 2;
       
       let x, y, z;
       // The Milky Way dense band is now slightly wider and more organic
       if (Math.random() > 0.5) {
           x = (Math.random() - 0.5) * 250;
           y = (Math.random() - 0.5) * 15 + Math.sin(x * 0.03) * 15;
           z = (Math.random() - 0.5) * 120;
       } else {
           // Scattered background stars
           x = (Math.random() - 0.5) * 350;
           y = (Math.random() - 0.5) * 350;
           z = (Math.random() - 0.5) * 350;
       }

       positions[i * 3] = x;
       positions[i * 3 + 1] = y;
       positions[i * 3 + 2] = z;

       const mixedColor = new THREE.Color();
       const rand = Math.random();
       // 50% white, 30% bright blue, 15% deep blue, 5% pale purple
        if (rand < 0.5) mixedColor.copy(color1);
        else if (rand < 0.8) mixedColor.copy(color3);
        else if (rand < 0.95) mixedColor.copy(color5);
        else mixedColor.copy(color4);

       colors[i * 3] = mixedColor.r;
       colors[i * 3 + 1] = mixedColor.g;
       colors[i * 3 + 2] = mixedColor.b;

       sizes[i] = Math.random() * 1.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Shader material for variable sized glowing stars
    const material = new THREE.PointsMaterial({
       size: 0.4,
       vertexColors: true,
       transparent: true,
       opacity: 0.8,
       blending: THREE.AdditiveBlending,
       sizeAttenuation: true,
    });

    const starSystem = new THREE.Points(geometry, material);
    // Tilt the band diagonally
    starSystem.rotation.z = Math.PI / 4;
    scene.add(starSystem);

    // Nebula dust effect using a second points layer with much larger size
    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 100;
    const dustPositions = new Float32Array(dustCount * 3);
    
    for (let i = 0; i < dustCount; i++) {
        dustPositions[i * 3] = (Math.random() - 0.5) * 150;
        dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
        dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    
    // We attach a basic map natively by doing circular opacity in shader, but here we just rely on standard points
    const dustMaterial = new THREE.PointsMaterial({
       size: 30,
       color: 0x1e1b4b, // Subtle dark midnight indigo
       transparent: true,
       opacity: 0.02,
       blending: THREE.AdditiveBlending,
       depthWrite: false
    });

    const dustSystem = new THREE.Points(dustGeometry, dustMaterial);
    dustSystem.rotation.z = Math.PI / 4;
    scene.add(dustSystem);

    // --- Vibrant Blue Stardust Layer ---
    const blueCount = 600;
    const blueGeometry = new THREE.BufferGeometry();
    const bluePositions = new Float32Array(blueCount * 3);
    const blueColors = new Float32Array(blueCount * 3);
    
    for (let i = 0; i < blueCount; i++) {
        // Concentrate along the band but with more vertical scatter
        const x = (Math.random() - 0.5) * 250;
        const y = (Math.random() - 0.5) * 40 + Math.sin(x * 0.03) * 15;
        const z = (Math.random() - 0.5) * 100;
        
        bluePositions[i * 3] = x;
        bluePositions[i * 3 + 1] = y;
        bluePositions[i * 3 + 2] = z;
        
        const c = new THREE.Color("#60a5fa");
        blueColors[i * 3] = c.r;
        blueColors[i * 3 + 1] = c.g;
        blueColors[i * 3 + 2] = c.b;
    }
    
    blueGeometry.setAttribute('position', new THREE.BufferAttribute(bluePositions, 3));
    blueGeometry.setAttribute('color', new THREE.BufferAttribute(blueColors, 3));
    
    const blueMaterial = new THREE.PointsMaterial({
        size: 0.8,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
    });
    
    const blueSystem = new THREE.Points(blueGeometry, blueMaterial);
    blueSystem.rotation.z = Math.PI / 4;
    scene.add(blueSystem);

    // Animation Loop
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the entire galaxy very slowly
      starSystem.rotation.y += 0.0002;
      dustSystem.rotation.y += 0.00015;
      blueSystem.rotation.y += 0.00025;

      // Mouse parallax easing
      targetX = mouseX * 20;
      targetY = mouseY * 20;

      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (-targetY - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) / windowHalfX;
      mouseY = (event.clientY - windowHalfY) / windowHalfY;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      blueGeometry.dispose();
      blueMaterial.dispose();
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none">
      {/* Deep space radial gradient for Nebula background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black opacity-80" />
      
      {/* 3D Milky Way */}
      <div ref={containerRef} className="absolute inset-0" />
      
      {/* Very faint grid to maintain the 'architecture' structural feel overlaid on space */}
      <div className="absolute inset-0 bg-grid opacity-20" />
    </div>
  );
}
