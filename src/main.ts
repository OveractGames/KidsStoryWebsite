import $ from 'jquery';
import './style.css'; // Assuming you have a styles.css file for your styles

export class Main {
  constructor() {
    this.init();
  }

  init() {
    console.log("Main class initialized");

    $('.card-game').on('click', () => {
      console.log('Image clicked via jQuery!');
    });

  }
}
export default new Main;
