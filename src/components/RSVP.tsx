import { useState } from 'react'

interface RSVPProps {
  isOpen: boolean
  onClose: () => void
}

export default function RSVP({ isOpen, onClose }: RSVPProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attendance: 'yes',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    const whatsappLink = `https://api.whatsapp.com/send?phone=82010000000&text=안녕하세요!%0A${encodeURIComponent(formData.name)}입니다.%0A%0A돌잔치 ${formData.attendance === 'yes' ? '참석합니다!' : '못 갑니다.'}%0A${formData.message ? `메시지: ${formData.message}` : ''}`
    window.open(whatsappLink, '_blank')

    setTimeout(() => {
      onClose()
      setFormData({ name: '', phone: '', attendance: 'yes', message: '' })
      setSubmitted(false)
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-serif font-bold text-korean-navy mb-6">
          참석 여부 알리기
        </h2>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✨</div>
            <p className="text-lg text-korean-navy font-medium">
              참석 알림이 전송되었습니다!
            </p>
            <p className="text-korean-navy/70 mt-2">감사합니다 💕</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-korean-navy mb-2">
                이름 *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-korean-red"
                placeholder="이름을 입력하세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-korean-navy mb-2">
                연락처 *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-korean-red"
                placeholder="010-0000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-korean-navy mb-2">
                참석 여부 *
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="yes"
                    checked={formData.attendance === 'yes'}
                    onChange={(e) =>
                      setFormData({ ...formData, attendance: e.target.value })
                    }
                    className="w-4 h-4"
                  />
                  <span className="ml-3 text-korean-navy">참석합니다</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="no"
                    checked={formData.attendance === 'no'}
                    onChange={(e) =>
                      setFormData({ ...formData, attendance: e.target.value })
                    }
                    className="w-4 h-4"
                  />
                  <span className="ml-3 text-korean-navy">못 갑니다</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-korean-navy mb-2">
                메시지
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-korean-red"
                placeholder="축하 메시지를 남겨주세요"
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border-2 border-korean-red text-korean-red rounded-full font-medium hover:bg-red-50 transition"
              >
                취소
              </button>
              <button type="submit" className="flex-1 btn-primary text-center">
                제출
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
