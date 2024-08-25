import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  const generateSurah = () => {
    return Math.floor(Math.random() * 114) + 1; // 1-114 untuk jumlah surah
  }

  const [surah, setSurah] = useState(null)
  const [ayat, setAyat] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = () => {
    setLoading(true);
    const surahRandomNumber = generateSurah();
    console.log(surahRandomNumber);

    axios.get(`https://api.quran.gading.dev/surah/${surahRandomNumber}`)
    .then((response) => {
      const verseData = response.data.data.verses[Math.floor(Math.random() * response.data.data.verses.length)];
      setSurah(response.data);
      setAyat(verseData)
      setLoading(false);
      console.log("response data", response.data);
      console.log("response ayat", verseData)
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleGenerate = () => {
    fetchData();
  }

  // if (loading) return <p>Loading...</p>
  if (error) return <p className="font-bold text-lg text-center items-center">Error: {error.message}</p>

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-2/3">
        {surah && ayat ? (
          <Card
            surah={surah.data.name.transliteration.id}
            inSurah={ayat.number.inSurah}
            arab={ayat.text.arab}
            latin={ayat.text.transliteration.en}
            terjemahan={ayat.translation.id}
            tafsir={ayat.tafsir.id.short}
            loading={loading}
          />
        ) : (
          <Skeleton height={200} />
        )}
        <div className="mt-4 flex justify-center">
          <Button label="Regenerate" onClick={handleGenerate} color="blue" />
        </div>
      </div>
    </div>
  )
}

export default App;
