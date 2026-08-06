import { useEffect, useState } from 'react'

interface HeroProps {
  onRsvpClick: () => void
}

export default function Hero({ onRsvpClick }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-korean-cream via-pink-100 to-korean-cream opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.1), transparent 50%)',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-korean-red text-lg md:text-xl font-medium mb-4">
            우리 아기의 소중한 날
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-korean-navy mb-6">
            돌잔치
          </h1>
          <p className="text-lg md:text-2xl text-korean-navy/80 mb-8">
            생후 12개월, 건강하고 밝게 자라난 <br />
            우리 아기의 첫 번째 생일을 축하해주세요
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={onRsvpClick} className="btn-primary">
              참석 여부 알리기
            </button>
            <a href="#details" className="btn-secondary">
              자세히 보기
            </a>
          </div>
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="inline-block">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
              alt="아기"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-korean-gold shadow-xl animate-bounce-gentle"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-korean-red"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
