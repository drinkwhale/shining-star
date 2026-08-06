import { useState } from "react";

export default function Share() {
  const [copied, setCopied] = useState(false);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = "우리 아기의 돌잔치에 초대합니다! 💕";

  const shareOptions = [
    {
      name: "KakaoTalk",
      icon: "💬",
      onClick: () => {
        const link = `https://story.kakao.com/s/write?urlInfo=${encodeURIComponent(pageUrl)}`;
        window.open(link, "_blank");
      },
    },
    {
      name: "Instagram",
      icon: "📸",
      onClick: () => {
        alert("Instagram 스토리에 직접 공유해주세요!");
      },
    },
    {
      name: "Facebook",
      icon: "👍",
      onClick: () => {
        const link = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
        window.open(link, "_blank");
      },
    },
    {
      name: "링크 복사",
      icon: "🔗",
      onClick: () => {
        navigator.clipboard.writeText(pageUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
  ];

  return (
    <section className="container-section bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-korean-navy">
          돌잔치 소식을 나누세요
        </h2>
        <p className="text-center text-korean-navy/70 mb-12">
          이 초대장을 친구들과 함께 나누어 보세요!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              onClick={option.onClick}
              className="card flex flex-col items-center justify-center py-6 hover:bg-korean-gold/10 border-2 border-transparent hover:border-korean-gold transition-all"
            >
              <div className="text-4xl mb-3">{option.icon}</div>
              <span className="text-sm font-medium text-korean-navy">
                {option.name}
              </span>
              {copied && option.name === "링크 복사" && (
                <span className="text-xs text-korean-red mt-2">✓ 복사됨</span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-12 p-6 bg-korean-cream rounded-lg text-center">
          <p className="text-korean-navy/70">
            <span className="font-medium">{shareText}</span>
            <br />
            <br />
            함께 축하해주시는 모든 분들께 진심으로 감사드립니다 🙏
          </p>
        </div>
      </div>
    </section>
  );
}
