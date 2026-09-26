import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      setPos({ x: clientX, y: clientY })

      // Generate sparkles on movement
      if (Math.random() > 0.6) {
        const id = Date.now() + Math.random()
        setParticles((prev) => [
          ...prev.slice(-12),
          {
            id,
            x: clientX + (Math.random() - 0.5) * 16,
            y: clientY + (Math.random() - 0.5) * 16,
            size: Math.random() * 10 + 6,
            color: ['#FF8A75', '#FFB088', '#64DCC0', '#8B5CF6'][Math.floor(Math.random() * 4)],
          },
        ])

        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id))
        }, 600)
      }
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    const handleOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.onclick ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [])

  // Smooth trailing effect for the outer ring
  useEffect(() => {
    let animationFrameId
    const loop = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2,
      }))
      animationFrameId = requestAnimationFrame(loop)
    }
    loop()
    return () => cancelAnimationFrame(animationFrameId)
  }, [pos])

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden sm:block">
      {/* Sparkles particle trail */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-ping font-bold select-none"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            fontSize: `${p.size}px`,
            color: p.color,
            transform: 'translate(-50%, -50%)',
            animationDuration: '600ms',
          }}
        >
          ✦
        </span>
      ))}

      {/* Main Inner Dot */}
      <div
        className={`fixed top-0 left-0 h-3 w-3 rounded-full transition-transform duration-75 ease-out ${
          isHovered ? 'bg-[#64DCC0] scale-150' : 'bg-[#FF8A75]'
        }`}
        style={{
          transform: `translate3d(${pos.x - 6}px, ${pos.y - 6}px, 0) scale(${
            isClicked ? 0.6 : isHovered ? 1.5 : 1
          })`,
        }}
      />

      {/* Smooth Trailing Outer Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-dashed transition-all duration-300 ease-out ${
          isHovered
            ? 'h-12 w-12 border-[#64DCC0] bg-[#64DCC0]/10 border-solid'
            : 'h-9 w-9 border-[#FF8A75]/60'
        }`}
        style={{
          transform: `translate3d(${trail.x - (isHovered ? 24 : 18)}px, ${
            trail.y - (isHovered ? 24 : 18)
          }px, 0) scale(${isClicked ? 0.8 : 1})`,
        }}
      />
    </div>
  )
}