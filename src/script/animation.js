// src/scripts/animations.js

const animateCounter = (el) => {
  const target = parseFloat(el.getAttribute('data-target') || '0')
  const duration = 2000
  let startTime = null

  const step = (currentTime) => {
    if (!startTime) startTime = currentTime
    const progress = Math.min((currentTime - startTime) / duration, 1)

    const easeOut = 1 - Math.pow(1 - progress, 3)
    const currentVal = easeOut * target

    if (target % 1 !== 0) {
      el.innerText = currentVal.toFixed(1)
    } else if (target >= 10000) {
      el.innerText = Math.floor(currentVal / 1000).toString()
    } else {
      el.innerText = Math.floor(currentVal).toString()
    }

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      el.innerText =
        target >= 10000 ? (target / 1000).toString() : target.toString()
    }
  }

  requestAnimationFrame(step)
}

export const initScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15,
  }

  const masterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetEl = entry.target

        if (
          targetEl.classList.contains('reveal') ||
          targetEl.classList.contains('reveal-left') ||
          targetEl.classList.contains('reveal-right')
        ) {
          targetEl.classList.add('active')
        }

        const counters = targetEl.querySelectorAll('.counter')
        if (targetEl.classList.contains('counter')) {
          if (!targetEl.classList.contains('counted')) {
            animateCounter(targetEl)
            targetEl.classList.add('counted')
          }
        } else if (counters.length > 0) {
          counters.forEach((counter) => {
            if (!counter.classList.contains('counted')) {
              animateCounter(counter)
              counter.classList.add('counted')
            }
          })
        }

        observer.unobserve(targetEl)
      }
    })
  }, observerOptions)

  const targets = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .counter',
  )
  targets.forEach((target) => masterObserver.observe(target))
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations)
  document.addEventListener('astro:page-load', initScrollAnimations)
}
