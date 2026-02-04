import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { vinylRecords } from '../data/mockData';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VinylScroll = () => {
  const sectionRef = useRef(null);
  const vinylRefs = useRef([]);

  useEffect(() => {
    vinylRefs.current.forEach((vinyl, index) => {
      if (!vinyl) return;

      const vinylDisc = vinyl.querySelector('.vinyl-disc');
      const vinylSleeve = vinyl.querySelector('.vinyl-sleeve');
      const content = vinyl.querySelector('.vinyl-content');

      // Vinyl slide out animation
      gsap.fromTo(
        vinylDisc,
        {
          x: 0,
          rotate: 0
        },
        {
          x: 150,
          rotate: 45,
          scrollTrigger: {
            trigger: vinyl,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Content fade in
      gsap.fromTo(
        content,
        {
          opacity: 0,
          x: -30
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: vinyl,
            start: 'top center',
            end: 'center center',
            scrub: 1
          }
        }
      );

      // Continuous rotation when in view
      ScrollTrigger.create({
        trigger: vinyl,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          gsap.to(vinylDisc, {
            rotate: '+=360',
            duration: 3,
            repeat: -1,
            ease: 'none'
          });
        },
        onLeave: () => {
          gsap.killTweensOf(vinylDisc);
        },
        onEnterBack: () => {
          gsap.to(vinylDisc, {
            rotate: '+=360',
            duration: 3,
            repeat: -1,
            ease: 'none'
          });
        },
        onLeaveBack: () => {
          gsap.killTweensOf(vinylDisc);
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">THE VINYL SCROLL</h2>
          <p className="text-gray-400 text-lg">Scroll to explore the sound collection</p>
        </div>

        <div className="space-y-32">
          {vinylRecords.map((record, index) => (
            <div
              key={record.id}
              ref={(el) => (vinylRefs.current[index] = el)}
              className="relative min-h-[600px] flex items-center"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Vinyl & Sleeve */}
                <div className="relative h-[400px] flex items-center justify-center">
                  {/* Sleeve */}
                  <div
                    className="vinyl-sleeve absolute w-[350px] h-[350px] rounded-sm shadow-2xl overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${record.coverColor} 0%, #000 100%)`
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <h3 className="text-3xl font-bold mb-2">{record.title}</h3>
                        <p className="text-sm uppercase tracking-widest text-gray-300">{record.artist}</p>
                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                          <span>{record.genre}</span>
                          <span>•</span>
                          <span>{record.year}</span>
                        </div>
                      </div>
                    </div>
                    {/* Grain texture */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20"></div>
                  </div>

                  {/* Vinyl Disc */}
                  <div className="vinyl-disc absolute w-[350px] h-[350px] rounded-full shadow-2xl">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 to-black"></div>
                    
                    {/* Grooves */}
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full border border-gray-800"
                        style={{
                          top: `${i * 3 + 10}%`,
                          left: `${i * 3 + 10}%`,
                          right: `${i * 3 + 10}%`,
                          bottom: `${i * 3 + 10}%`,
                          opacity: 0.3 - i * 0.01
                        }}
                      />
                    ))}

                    {/* Center label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-24 h-24 rounded-full flex items-center justify-center shadow-inner"
                        style={{ backgroundColor: record.coverColor }}
                      >
                        <Play size={32} className="text-black" />
                      </div>
                    </div>

                    {/* Center hole */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black border-2 border-gray-700"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="vinyl-content">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{record.title}</h3>
                  <p className="text-gray-400 mb-6">{record.description}</p>

                  {/* Spotify Embed */}
                  <div className="bg-gray-900/50 p-1 rounded-lg border border-gray-800">
                    <iframe
                      src={record.spotifyEmbed}
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VinylScroll;
