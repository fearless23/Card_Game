export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  loadImages() {
    this.load.setPath('assets/img');
    this.load.image('github', '/github.jpg');
    this.load.image('facebook', '/facebook.jpg');
  }

  preload() {
    this.loadImages();
    console.log('preload method');

    let loadingBar = this.add.graphics({
      fillStyle: { color: 0xffffff },
    });

    const { width, height } = this.game.renderer;
    const wPad = 0.1 * width;
    const hPad = 0.1 * height;

    const t = this.add.text(width / 2, height / 2, 'Loading', {
      fill: '#000000',
    });
    loadingBar.fillRect(wPad, height / 2 + 2 * hPad, width - 2 * wPad, 30);
    t.text = 'Loading ' + 100 + ' %';
  }

  create() {
    // this.cameras.main.setBackgroundColor('#2a98ef');
    this.add.image(13, 13, 'github').setScale(4).setDepth(1);
    this.add.image(130, 130, 'facebook').setScale(4).setDepth(1);
  }
  update() {
    // console.log('update method');
  }
}
