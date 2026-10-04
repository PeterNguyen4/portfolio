import background from '../assets/backgrounds/background.webp'
import counter from '../assets/props/counter.webp'
import peter from '../assets/sprites/peter.png'
import peterResumeSheet from '../assets/sprites/peter_resume_sheet.png'

export const TEXTURE = {
  background: 'background',
  counter: 'counter',
  peter: 'peter',
  peterResume: 'peter-resume',
} as const

export const ANIM = {
  handResume: 'hand-resume',
} as const

export const IMAGES = {
  [TEXTURE.background]: background,
  [TEXTURE.counter]: counter,
  [TEXTURE.peter]: peter,
} as const

export const SPRITESHEETS = {
  [TEXTURE.peterResume]: { url: peterResumeSheet, frameWidth: 97, frameHeight: 94 },
} as const
