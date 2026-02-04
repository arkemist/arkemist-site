import React from 'react';
import { artistInfo } from '../data/mockData';

const Bio = () => {
  return (
    <section id="bio" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">ABOUT ARKEMIST</h2>
        </div>

        <div className="bg-black border border-gray-800 p-8 md:p-12 relative overflow-hidden">
          {/* Grain texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-[#ff6b35]"></div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">From {artistInfo.origin}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Based in {artistInfo.location}</p>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              {artistInfo.bio}
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Specialization</h3>
                <p className="text-lg font-semibold">Mixing & Mastering</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Genres</h3>
                <p className="text-lg font-semibold">Trap, Hip-Hop, Jazz</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Experience</h3>
                <p className="text-lg font-semibold">5+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
