import{j as k,r as h}from"./index-CbjnaJ9o.js";const L=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Strata — Cloud Migration Platform</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-[#050510] text-white font-['Inter',system-ui,sans-serif] overflow-x-hidden antialiased selection:bg-violet-500/30 selection:text-violet-200">

    <!-- WebGL Background Canvas -->
    <canvas id="c" class="fixed inset-0 w-full h-full z-0 pointer-events-none"></canvas>

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-6 md:px-10 bg-[#050510]/50 backdrop-blur-xl border-b border-violet-600/10">
        <div class="w-full max-w-[1200px] flex items-center justify-between">
            <div class="flex items-center gap-3 font-medium text-sm tracking-wide">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.3)]">
                    <iconify-icon icon="solar:layers-linear" class="text-white text-lg"></iconify-icon>
                </div>
                Strata
            </div>
            
            <div class="hidden md:flex items-center gap-8">
                <a href="#" class="text-white/50 hover:text-white/90 text-sm font-light tracking-wide transition-colors">Platform</a>
                <a href="#" class="text-white/50 hover:text-white/90 text-sm font-light tracking-wide transition-colors">Solutions</a>
                <a href="#" class="text-white/50 hover:text-white/90 text-sm font-light tracking-wide transition-colors">Pricing</a>
                <a href="#" class="text-white/50 hover:text-white/90 text-sm font-light tracking-wide transition-colors">Docs</a>
            </div>
            
            <button class="px-5 py-2.5 rounded-full text-xs font-normal bg-gradient-to-br from-violet-600/20 to-violet-500/10 border border-violet-600/30 text-violet-400 hover:from-violet-600/30 hover:to-violet-500/20 transition-all shadow-[0_0_20px_rgba(124,58,237,0.1)] hover:shadow-[0_0_28px_rgba(124,58,237,0.2)] tracking-wide">
                Start Migration
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <main class="relative z-10 flex flex-col items-center justify-center text-center min-h-[100svh] px-6 pt-20">
        <!-- Radial shadow overlay to help text readability over canvas -->
        <div class="absolute inset-0 pointer-events-none z-[-1]" style="background: radial-gradient(ellipse 70% 50% at 50% 55%, rgba(5,5,16,0.6) 0%, transparent 70%);"></div>

        <div class="relative z-1 max-w-3xl mx-auto w-full flex flex-col items-center">
            
            <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-violet-600/5 border border-violet-600/20 rounded-full text-xs font-medium tracking-[0.1em] uppercase text-violet-400 backdrop-blur-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_#8b5cf6] animate-pulse"></span>
                Now in General Availability
            </div>
            
            <h1 class="text-[clamp(2.4rem,6vw,4rem)] font-thin tracking-tight leading-[1.08] text-white mb-6">
                Migrate to the cloud<br>with <em class="not-italic bg-gradient-to-br from-violet-500 via-violet-400 to-violet-200 bg-clip-text text-transparent">confidence</em>
            </h1>
            
            <p class="text-sm md:text-base font-light leading-relaxed text-white/40 max-w-xl mx-auto mb-10">
                Automated discovery, dependency mapping, and zero-downtime migration for enterprise workloads. Move faster with less risk.
            </p>
            
            <div class="flex flex-wrap justify-center gap-4 mb-16 w-full">
                <button class="relative overflow-hidden px-8 py-3.5 rounded-xl text-sm font-medium border-none text-white tracking-wide bg-gradient-to-br from-violet-700 to-violet-500 shadow-[0_0_30px_rgba(124,58,237,0.3),0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.45),0_6px_20px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-[1px] group">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                    Start Free Assessment
                </button>
                <button class="px-8 py-3.5 rounded-xl text-sm font-normal border border-white/10 bg-white/5 text-white/70 backdrop-blur-md hover:border-white/20 hover:text-white hover:bg-white/10 transition-all tracking-wide">
                    Watch Demo
                </button>
            </div>
            
            <div class="flex flex-wrap justify-center gap-8 md:gap-14 w-full">
                <div class="text-center">
                    <div class="text-2xl md:text-3xl font-thin tracking-tight bg-gradient-to-br from-violet-400 to-violet-200 bg-clip-text text-transparent">99.99%</div>
                    <div class="text-xs font-light text-white/30 tracking-[0.08em] uppercase mt-1.5">Uptime SLA</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl md:text-3xl font-thin tracking-tight bg-gradient-to-br from-violet-400 to-violet-200 bg-clip-text text-transparent">8.5M</div>
                    <div class="text-xs font-light text-white/30 tracking-[0.08em] uppercase mt-1.5">Workloads Migrated</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl md:text-3xl font-thin tracking-tight bg-gradient-to-br from-violet-400 to-violet-200 bg-clip-text text-transparent">75%</div>
                    <div class="text-xs font-light text-white/30 tracking-[0.08em] uppercase mt-1.5">Faster Migrations</div>
                </div>
                <div class="hidden sm:block text-center">
                    <div class="text-2xl md:text-3xl font-thin tracking-tight bg-gradient-to-br from-violet-400 to-violet-200 bg-clip-text text-transparent">500+</div>
                    <div class="text-xs font-light text-white/30 tracking-[0.08em] uppercase mt-1.5">Enterprise Clients</div>
                </div>
            </div>

        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 pointer-events-none">
            <div class="w-5 h-[30px] rounded-full border-[1.5px] border-white/40 relative">
                <div id="scroll-dot" class="w-[2px] h-1.5 bg-white/60 rounded-full absolute top-1.5 left-1/2 -translate-x-1/2"></div>
            </div>
            <span class="text-[0.6rem] tracking-[0.14em] uppercase text-white/40">Scroll</span>
        </div>
    </main>

    <!-- Scroll Reveal Section (GSAP Masked Stagger) -->
    <section class="relative z-10 py-32 px-6 min-h-[70svh] flex items-center justify-center bg-[#050510]">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510] to-[#050510] pointer-events-none z-[-1]"></div>
        <div class="max-w-4xl mx-auto w-full text-center">
            <p class="text-xs font-medium tracking-[0.15em] uppercase text-violet-500 mb-8">Intelligent Infrastructure</p>
            <h2 id="reveal-text" class="text-2xl md:text-5xl font-thin tracking-tight leading-[1.3] text-white/90">
                Discover untethered scalability. The platform built to dynamically map, migrate, and optimize your entire infrastructure without lifting a finger.
            </h2>
        </div>
    </section>

    <!-- Feature Section with Premium Gradient Borders & Aura Images -->
    <section class="relative z-10 py-24 px-6 bg-[#050510]">
        <div class="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- Card 1 -->
            <div class="p-[1px] rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent relative group overflow-hidden">
                <div class="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-3xl pointer-events-none"></div>
                <div class="bg-[#080814] rounded-[23px] h-full p-2 relative z-10 flex flex-col">
                    <div class="w-full h-56 md:h-72 rounded-[18px] overflow-hidden mb-6 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg" alt="Architecture" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#080814] to-transparent"></div>
                    </div>
                    <div class="px-6 pb-8">
                        <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-white/70">
                            <iconify-icon icon="solar:box-minimalistic-linear" class="text-xl"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-light tracking-tight text-white mb-3">Architectural Clarity</h3>
                        <p class="text-sm font-light text-white/40 leading-relaxed">
                            Automatically visualize dependencies across microservices and legacy monolithic structures before execution.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="p-[1px] rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent relative group overflow-hidden">
                <div class="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-3xl pointer-events-none"></div>
                <div class="bg-[#080814] rounded-[23px] h-full p-2 relative z-10 flex flex-col">
                    <div class="w-full h-56 md:h-72 rounded-[18px] overflow-hidden mb-6 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Abstract" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#080814] to-transparent"></div>
                    </div>
                    <div class="px-6 pb-8">
                        <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-white/70">
                            <iconify-icon icon="solar:graph-linear" class="text-xl"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-light tracking-tight text-white mb-3">Dynamic Scaling</h3>
                        <p class="text-sm font-light text-white/40 leading-relaxed">
                            Leverage predictive models to right-size compute resources dynamically as your user traffic shifts.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Footer Spacer -->
    <footer class="relative z-10 bg-[#050510] border-t border-white/5 py-10 text-center">
        <p class="text-xs font-light text-white/30 tracking-wide">© Strata Technologies. All rights reserved.</p>
    </footer>

    <!-- Logic & Animations -->
    <script>
        // --- GSAP Animations ---
        gsap.registerPlugin(ScrollTrigger);

        // Scroll Mouse Dot Animation
        gsap.to("#scroll-dot", {
            y: 8,
            opacity: 0.2,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Masked Staggered Text Reveal
        const revealEl = document.getElementById('reveal-text');
        const textContent = revealEl.innerText;
        revealEl.innerHTML = '';
        
        // Wrap words in masked spans
        const words = textContent.split(' ');
        words.forEach(word => {
            const wrapper = document.createElement('span');
            // Using inline styles for structural mask requirements (avoids \`<style>\`)
            wrapper.style.display = 'inline-block';
            wrapper.style.overflow = 'hidden';
            wrapper.style.verticalAlign = 'bottom';
            wrapper.style.marginRight = '0.25em';
            wrapper.style.paddingBottom = '0.1em'; // Prevent clipping of descenders
            
            const inner = document.createElement('span');
            inner.className = 'reveal-word';
            inner.style.display = 'inline-block';
            inner.style.transform = 'translateY(110%)';
            inner.style.transformOrigin = 'top left';
            inner.innerText = word;
            
            wrapper.appendChild(inner);
            revealEl.appendChild(wrapper);
        });

        // Trigger animation
        gsap.to('.reveal-word', {
            y: 0,
            duration: 1.2,
            stagger: 0.03,
            ease: "power4.out",
            scrollTrigger: {
                trigger: revealEl,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });


        // --- WebGL Background Canvas ---
        const canvas = document.getElementById('c');
        const gl = canvas.getContext('webgl', { antialias: true, alpha: false, preserveDrawingBuffer: true });

        let W, H, dpr;
        function resize() {
            dpr = Math.min(window.devicePixelRatio, 2);
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            gl.viewport(0, 0, canvas.width, canvas.height);
        }
        window.addEventListener('resize', resize);
        resize();

        const VS = \`
        attribute vec2 a_pos;
        void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
        \`;

        const FS = \`
        precision highp float;
        uniform vec2 u_res;
        uniform float u_time;
        uniform vec2 u_mouse;

        float hash(float n){ return fract(sin(n)*43758.5453123); }
        float hash2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }

        float noise(float x){
            float i = floor(x);
            float f = fract(x);
            f = f*f*(3.0-2.0*f);
            return mix(hash(i), hash(i+1.0), f);
        }

        float fbm(float x, float octaves){
            float val = 0.0;
            float amp = 0.5;
            float freq = 1.0;
            for(int i = 0; i < 6; i++){
                if(float(i) >= octaves) break;
                val += amp * noise(x * freq);
                freq *= 2.17;
                amp *= 0.48;
            }
            return val;
        }

        float meteor(vec2 uv, float t){
            float cycle = mod(t * 0.15, 1.0);
            float seed = floor(t * 0.15);
            float h = hash(seed * 7.31);
            float h2 = hash(seed * 13.17);
            if(h > 0.30) return 0.0;
            vec2 start = vec2(0.2 + h2 * 0.6, 0.7 + h * 0.25);
            vec2 dir = normalize(vec2(1.0, -0.6 - h * 0.3));
            float progress = smoothstep(0.0, 0.7, cycle);
            vec2 pos = start + dir * progress * 0.5;
            vec2 toP = uv - pos;
            float along = dot(toP, dir);
            float perp = length(toP - dir * along);
            float trail = smoothstep(0.0, -0.12, along) * smoothstep(-0.18, -0.04, along);
            float core = smoothstep(0.003, 0.0, perp) * trail;
            float glow = smoothstep(0.012, 0.0, perp) * trail * 0.3;
            float fade = smoothstep(0.0, 0.1, cycle) * smoothstep(0.8, 0.55, cycle);
            return (core + glow) * fade;
        }

        float stars(vec2 uv, float density){
            vec2 cell = floor(uv * density);
            vec2 sub = fract(uv * density);
            float h = hash2(cell);
            float brightness = step(0.975, h);
            float size = 0.025 + h * 0.045;
            float d = length(sub - vec2(hash2(cell + 100.0), hash2(cell + 200.0)));
            float star = brightness * smoothstep(size, 0.0, d);
            star *= 0.5 + 0.5 * sin(u_time * (1.0 + h * 3.0) + h * 6.28);
            return star;
        }

        void main(){
            vec2 uv = gl_FragCoord.xy / u_res;
            float aspect = u_res.x / u_res.y;

            vec2 mouse = u_mouse * 2.0 - 1.0;

            vec3 skyTop    = vec3(0.015, 0.012, 0.045);
            vec3 skyMid    = vec3(0.035, 0.025, 0.085);
            vec3 skyBottom = vec3(0.065, 0.045, 0.14);

            float skyGrad = uv.y;
            vec3 col = mix(skyBottom, skyMid, smoothstep(0.3, 0.6, skyGrad));
            col = mix(col, skyTop, smoothstep(0.6, 1.0, skyGrad));

            float horizonY = 0.35;
            float horizonGlow = exp(-pow((uv.y - horizonY) * 3.8, 2.0));
            col += vec3(0.15, 0.07, 0.26) * horizonGlow * 0.8;

            float centerGlow = exp(-pow((uv.x - 0.5) * 1.5, 2.0)) * exp(-pow((uv.y - horizonY) * 4.0, 2.0));
            col += vec3(0.14, 0.10, 0.24) * centerGlow * 0.6;

            float starField = stars(uv * vec2(aspect, 1.0), 60.0)
                            + stars(uv * vec2(aspect, 1.0) + 500.0, 100.0) * 0.7
                            + stars(uv * vec2(aspect, 1.0) + 900.0, 160.0) * 0.4;

            float starMask = 1.0;
            float xC, yS, prof, mTop, mtn, rDist, rGlow, rAmb;
            vec3 lC;

            // Layer 0
            lC = vec3(0.14, 0.10, 0.24);
            xC = uv.x * aspect * 1.6 + u_time * 0.006 + mouse.x * 0.010;
            yS = mouse.y * 0.003;
            prof = fbm(xC, 5.0) * 0.10 + fbm(xC * 0.3 + 17.0, 3.0) * 0.07;
            mTop = 0.40 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.18;
            rAmb = smoothstep(0.04, 0.0, rDist) * 0.06;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            col += vec3(0.12, 0.06, 0.22) * rAmb;
            starMask *= (1.0 - mtn);

            // Layer 1
            lC = vec3(0.11, 0.07, 0.19);
            xC = uv.x * aspect * 2.0 + u_time * 0.012 + mouse.x * 0.020;
            yS = mouse.y * 0.006;
            prof = fbm(xC, 5.0) * 0.13 + fbm(xC * 0.3 + 34.0, 3.0) * 0.091;
            mTop = 0.33 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.15;
            rAmb = smoothstep(0.04, 0.0, rDist) * 0.045;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            col += vec3(0.12, 0.06, 0.22) * rAmb;
            starMask *= (1.0 - mtn);

            // Layer 2
            lC = vec3(0.08, 0.05, 0.14);
            xC = uv.x * aspect * 2.6 + u_time * 0.020 + mouse.x * 0.034;
            yS = mouse.y * 0.010;
            prof = fbm(xC, 5.0) * 0.16 + fbm(xC * 0.3 + 51.0, 3.0) * 0.112;
            mTop = 0.26 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.12;
            rAmb = smoothstep(0.04, 0.0, rDist) * 0.03;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            col += vec3(0.12, 0.06, 0.22) * rAmb;
            starMask *= (1.0 - mtn);

            // Layer 3
            lC = vec3(0.05, 0.03, 0.09);
            xC = uv.x * aspect * 3.2 + u_time * 0.030 + mouse.x * 0.050;
            yS = mouse.y * 0.015;
            prof = fbm(xC, 5.0) * 0.14 + fbm(xC * 0.3 + 68.0, 3.0) * 0.098;
            mTop = 0.18 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.09;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            starMask *= (1.0 - mtn);

            // Layer 4
            lC = vec3(0.03, 0.018, 0.055);
            xC = uv.x * aspect * 4.0 + u_time * 0.044 + mouse.x * 0.070;
            yS = mouse.y * 0.021;
            prof = fbm(xC, 5.0) * 0.11 + fbm(xC * 0.3 + 85.0, 3.0) * 0.077;
            mTop = 0.09 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.06;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            starMask *= (1.0 - mtn);

            col += vec3(0.9, 0.8, 1.0) * starField * starMask;
            float met = meteor(uv * vec2(aspect, 1.0), u_time);
            col += vec3(0.8, 0.6, 1.0) * met * starMask;

            float vig = 1.0 - 0.3 * pow(length((uv - 0.5) * vec2(1.1, 1.6)), 2.0);
            col *= vig;

            float haze = exp(-pow((uv.y - 0.33) * 5.0, 2.0)) * 0.05;
            col += vec3(0.15, 0.10, 0.30) * haze;

            col = pow(col, vec3(0.95));

            gl_FragColor = vec4(col, 1.0);
        }
        \`;

        function createShader(src, type) {
            const s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) return null;
            return s;
        }

        const vs = createShader(VS, gl.VERTEX_SHADER);
        const fs = createShader(FS, gl.FRAGMENT_SHADER);
        const prog = gl.createProgram();
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        gl.useProgram(prog);

        const quad = new Float32Array([-1,-1, 1,-1, -1,1, 1,1]);
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
        const aPos = gl.getAttribLocation(prog, 'a_pos');
        gl.enableVertexAttribArray(aPos);
        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

        const uRes = gl.getUniformLocation(prog, 'u_res');
        const uTime = gl.getUniformLocation(prog, 'u_time');
        const uMouse = gl.getUniformLocation(prog, 'u_mouse');

        let mx = 0.5, my = 0.5;
        let smx = 0.5, smy = 0.5;
        document.addEventListener('mousemove', e => {
            mx = e.clientX / window.innerWidth;
            my = 1.0 - e.clientY / window.innerHeight;
        });

        function frame(t) {
            t *= 0.001;
            smx += (mx - smx) * 0.04;
            smy += (my - smy) * 0.04;

            gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.uniform1f(uTime, t);
            gl.uniform2f(uMouse, smx, smy);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    <\/script>
</body>
</html>`,f={mode:"dark",hue:0,saturation:1,brightness:1},z={cloud:{title:"Strata cloud migration field",source:L,background:"#071010",targets:[{selector:"#c",role:"background"}]}};function y(t,e,r){return Math.min(r,Math.max(e,t))}function C(t,e){return t.theme?.[`${e}Background`]??t.background}function W(t,e){const r=C(t,e),l=t.theme?.invertBackground===!0&&t.theme.nativeMode!==e,v=t.transformSource?.(t.source,e)??t.source,d=JSON.stringify(t.targets).replace(/</g,"\\u003c"),m=JSON.stringify(t.hiddenTargets??[]).replace(/</g,"\\u003c"),g=JSON.stringify(t.introWordmark??null).replace(/</g,"\\u003c"),x=JSON.stringify(e),c=l?"filter: invert(1) hue-rotate(180deg) saturate(.92) brightness(1.02) !important;":"",s=t.introWordmark?`${t.introWordmark.sceneSelector} .tx { font-size: ${t.introWordmark.fontSize}px !important; }`:"",w=`<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${r} !important; color-scheme: ${e} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-hidden] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; ${c} }
[data-threeui-role="background"][data-threeui-fit="contain-square"] { position: absolute !important; top: 50% !important; right: auto !important; bottom: auto !important; left: 50% !important; width: min(100vw, 100vh) !important; height: min(100vw, 100vh) !important; aspect-ratio: 1 / 1 !important; transform: translate(-50%, -50%) !important; }
[data-threeui-role="button"] { position: relative !important; z-index: 2 !important; opacity: 1 !important; flex: none !important; }
[data-threeui-role="button"]:not([data-threeui-preserve-transform]) { transform: none !important; }
[data-threeui-role="visual"] { position: relative !important; z-index: 1 !important; width: min(100%, 1040px) !important; max-width: 1040px !important; max-height: 100% !important; margin: auto !important; padding: 24px !important; overflow: auto !important; opacity: 1 !important; filter: none !important; }
[data-threeui-role="visual"]:not([data-threeui-preserve-transform]) { transform: none !important; }
[data-threeui-role="visual"][data-threeui-fit="contain-square"] { flex: none !important; width: min(calc(100vw - 32px), calc(100vh - 32px)) !important; max-width: none !important; height: min(calc(100vw - 32px), calc(100vh - 32px)) !important; max-height: none !important; aspect-ratio: 1 / 1 !important; padding: 0 !important; overflow: hidden !important; }
[data-threeui-role="visual"][data-threeui-fit="wide-wordmark"] { width: min(calc(100vw - 48px), 1180px) !important; max-width: calc(100vw - 48px) !important; height: auto !important; max-height: none !important; aspect-ratio: 16 / 3 !important; padding: 0 !important; overflow: hidden !important; }
[data-threeui-role="visual"][data-threeui-fit="portrait-stage"] { position: absolute !important; top: 50% !important; right: auto !important; bottom: auto !important; left: 50% !important; width: 1080px !important; max-width: none !important; height: 1350px !important; max-height: none !important; padding: 0 !important; overflow: hidden !important; transform-origin: center !important; }
${s}
</style>`,p=`<script data-threeui-focus>
(function () {
  document.documentElement.dataset.sfMode = ${x};
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${d};
    var hiddenSelectors = ${m};
    var introWordmark = ${g};
    var roots = [];
    hiddenSelectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (element) {
        element.setAttribute('data-threeui-hidden', '');
        element.setAttribute('aria-hidden', 'true');
        if ('inert' in element) element.inert = true;
      });
    });
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.fit) element.setAttribute('data-threeui-fit', spec.fit);
      if (spec.preserveTransform) element.setAttribute('data-threeui-preserve-transform', '');
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (introWordmark) {
      var introScene = document.querySelector(introWordmark.sceneSelector);
      var introText = introScene && introScene.querySelector('.tx');
      var introMark = introText && introText.querySelector('.mark');
      if (introText && introMark) {
        introMark.innerHTML = introWordmark.logoSvg;
        var introCharacters = Array.from(introText.children).filter(function (element) { return element !== introMark; });
        introCharacters.forEach(function (element, index) {
          element.textContent = introWordmark.text[index] === ' ' ? ' ' : (introWordmark.text[index] || '');
          element.style.display = index < introWordmark.text.length ? 'inline-block' : 'none';
        });
      }
      var introReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var introStartedAt = performance.now();
      function renderIntroWordmark(now) {
        if (typeof window.__seek !== 'function') return;
        if (introReducedMotion) {
          window.__seek(introWordmark.endTime);
          return;
        }
        var introCycle = introWordmark.endTime + introWordmark.holdTime;
        var introTime = ((now - introStartedAt) / 1000) % introCycle;
        window.__seek(Math.min(introTime, introWordmark.endTime));
        requestAnimationFrame(renderIntroWordmark);
      }
      requestAnimationFrame(renderIntroWordmark);
    }
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) {
      var placeholderLink = root.matches('a[href="#"]') ? root : root.querySelector('a[href="#"]');
      if (placeholderLink) placeholderLink.addEventListener('click', function (event) { event.preventDefault(); });
      document.body.appendChild(root);
    });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
<\/script>`;return v.replace(/<\/head>/i,`${w}</head>`).replace(/<\/body>/i,`${p}</body>`)}function D({definition:t,mode:e=f.mode,hue:r=f.hue,saturation:l=f.saturation,brightness:v=f.brightness,runtime:d,trackPointerHover:m,className:g,style:x}){const c=h.useRef(null),s=e==="light"?"light":"dark",w=C(t,s),p=h.useMemo(()=>W(t,s),[t,s]),S=y(r,-180,180),T=y(l,0,2),_=y(v,.35,1.65),M=S===0&&T===1&&_===1?void 0:`hue-rotate(${S}deg) saturate(${T}) brightness(${_})`;h.useEffect(()=>{const n=c.current;if(!m||!n)return;let o=!1;const i=()=>{o&&(o=!1,n.contentWindow?.postMessage({threeuiRuntime:{hover:0}},"*"))},A=a=>{a.source===n.contentWindow&&a.data?.threeuiPointerOver&&(o=!0)},E=a=>{if(!o)return;const u=n.getBoundingClientRect();(a.clientX<u.left||a.clientX>u.right||a.clientY<u.top||a.clientY>u.bottom)&&i()};return window.addEventListener("message",A),window.addEventListener("pointermove",E,!0),n.addEventListener("pointerleave",i),document.addEventListener("mouseleave",i),window.addEventListener("blur",i),()=>{window.removeEventListener("message",A),window.removeEventListener("pointermove",E,!0),n.removeEventListener("pointerleave",i),document.removeEventListener("mouseleave",i),window.removeEventListener("blur",i)}},[m]);const b=d?JSON.stringify(d):null;return h.useEffect(()=>{const n=c.current;if(!n||!b)return;const o=()=>n.contentWindow?.postMessage({threeuiRuntime:JSON.parse(b)},"*");return o(),n.addEventListener("load",o),()=>n.removeEventListener("load",o)},[b,p]),k.jsx("iframe",{ref:c,className:g,"data-mode":s,title:t.title,srcDoc:p,sandbox:"allow-scripts",loading:"eager",style:{display:"block",width:"100%",height:"100%",border:0,background:w,filter:M,...x}})}function j(t){return function(r){return k.jsx(D,{...r,definition:t})}}const F=j(z.cloud);function P({variant:t,hue:e,saturation:r,brightness:l}){return t!=="cloud-field"?null:k.jsx(F,{mode:"dark",hue:e,saturation:r,brightness:l,className:"portal-field-cloud"})}export{P as default};
