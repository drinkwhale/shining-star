export default function Details() {
  const eventDate = new Date("2024-12-25T11:00:00").toLocaleDateString(
    "ko-KR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    },
  );

  const details = [
    {
      icon: "📅",
      label: "날짜",
      value: eventDate,
    },
    {
      icon: "⏰",
      label: "시간",
      value: "오전 11:00 ~ 오후 3:00",
    },
    {
      icon: "📍",
      label: "장소",
      value: "서울 강남구 \n컨벤션 홀",
    },
    {
      icon: "🎂",
      label: "아이",
      value: "김OO\n(생년월일: 2023년 12월 25일)",
    },
  ];

  return (
    <section
      id="details"
      className="container-section max-w-5xl mx-auto scroll-mt-20"
    >
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-korean-navy">
        행사 안내
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {details.map((detail, index) => (
          <div
            key={index}
            className="card text-center hover:border-korean-red border-2 border-transparent transition-colors"
          >
            <div className="text-5xl mb-4">{detail.icon}</div>
            <h3 className="text-xl font-bold text-korean-navy mb-3">
              {detail.label}
            </h3>
            <p className="text-korean-navy/70 whitespace-pre-line leading-relaxed">
              {detail.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-white rounded-lg border-l-4 border-korean-red">
        <h3 className="text-lg font-bold text-korean-navy mb-3">📝 안내사항</h3>
        <ul className="space-y-2 text-korean-navy/70">
          <li>• 아이가 받을 선물은 현금을 부탁드립니다</li>
          <li>• 예약은 행사 일주일 전까지 부탁드립니다</li>
          <li>• 주차는 건물 지하주차장을 이용해주세요</li>
        </ul>
      </div>
    </section>
  );
}
