import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 

function Card({ surah, inSurah, arab, latin, terjemahan, tafsir, loading }) {
  return (
    <div className="relative p-1 border-gradient rounded-lg">
      <div className="rounded-lg overflow-hidden shadow-lg bg-white p-10">
        <div className="font-bold text-xl mb-4 text-center">
          {loading ? <Skeleton width={150} /> : `Surah ${surah} Ayat ${inSurah}`}
        </div>
        <div className="font-light text-lg mb-4 text-center">
          {loading ? <Skeleton height={40} width={200} /> : arab}
        </div>
        <div className="font-light italic text-md mb-4 text-center">
          {loading ? <Skeleton width={200} /> : latin}
        </div>
        <div className="font-bold text-md">
          Terjemahan:
        </div>
        <div className="font-light text-md mb-4">
          {loading ? <Skeleton count={3} /> : terjemahan}
        </div>
        <div className="font-bold text-md">
          Tafsir: 
        </div>
        <p className="text-gray-700 text-base">
          {loading ? <Skeleton count={4} /> : tafsir}
        </p>
      </div>
    </div>
  );
}

export default Card;
