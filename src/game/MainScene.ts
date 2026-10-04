import Phaser from 'phaser'
import { ANIM, IMAGES, SPRITESHEETS, TEXTURE } from './assets'

const COUNTER_W = 1488
const COUNTER_H = 718
const PERSON_POS = { x: 750, y: 210 }
const RESUME_POS = { x: 1180, y: 215 }

const COUNTER_DISPLAY_W = 1000
const PERSON_SCALE = 4
const RESUME_SIZE = 18
const RESUME_ANIM_OFFSET_X = 6
const RESUME_ANIM_OFFSET_Y = 4

export class MainScene extends Phaser.Scene {
  private bg!: Phaser.GameObjects.Image
  private counter!: Phaser.GameObjects.Image
  private person!: Phaser.GameObjects.Sprite
  private resumes!: Phaser.GameObjects.Rectangle
  private personX = 0
  private personY = 0

  constructor() {
    super('main')
  }

  preload() {
    for (const [key, url] of Object.entries(IMAGES)) this.load.image(key, url)
    for (const [key, { url, ...frame }] of Object.entries(SPRITESHEETS)) {
      this.load.spritesheet(key, url, frame)
    }
  }

  create() {
    this.bg = this.add.image(0, 0, TEXTURE.background).setOrigin(0.5).setDepth(0)
    this.person = this.add.sprite(0, 0, TEXTURE.peter).setOrigin(0.5, 1).setDepth(3)
    this.counter = this.add.image(0, 0, TEXTURE.counter).setOrigin(0, 0).setDepth(2)
    this.resumes = this.add
      .rectangle(0, 0, 1, 1, 0xff0000)
      .setDepth(4)
      .setInteractive({ useHandCursor: true })

    this.anims.create({
      key: ANIM.handResume,
      frames: this.anims.generateFrameNumbers(TEXTURE.peterResume, { start: 0, end: 11 }),
      frameRate: 8,
    })

    this.resumes.on('pointerdown', () => {
      if (this.person.anims.isPlaying) return
      this.person.play(ANIM.handResume)
    })

    this.person.on(Phaser.Animations.Events.ANIMATION_START, () => {
      this.person.x = this.personX - RESUME_ANIM_OFFSET_X * this.person.scaleX
      this.person.y = this.personY - RESUME_ANIM_OFFSET_Y * this.person.scaleY
    })

    this.layout()
  }

  private layout() {
    const { width: W, height: H } = this.scale

    this.bg.setDisplaySize(W, H).setPosition(W / 2, H / 2)

    const s = COUNTER_DISPLAY_W / COUNTER_W
    const ch = COUNTER_H * s
    const cx = -0.08 * COUNTER_DISPLAY_W
    const cy = H - ch + 0.25 * ch
    this.counter.setScale(s).setPosition(cx, cy)

    this.personX = cx + PERSON_POS.x * s
    this.person
      .setScale(s * PERSON_SCALE)
      .setPosition(cx + PERSON_POS.x * s, this.personX)

    this.personY = cy + PERSON_POS.y * s
    this.person
      .setScale(s * PERSON_SCALE)
      .setPosition(cx + PERSON_POS.x * s, this.personY)

    const size = RESUME_SIZE * s
    this.resumes
      .setDisplaySize(size, size)
      .setPosition(cx + RESUME_POS.x * s, cy + RESUME_POS.y * s)
    this.resumes.input?.hitArea.setSize(size, size)
  }
}
