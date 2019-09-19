import {
  LitElement,
  html,
} from './node_modules/@polymer/lit-element/lit-element.js'
import "./node_modules/@polymer/paper-slider/paper-slider.js"

const normalizeColor = colors => colors.map(value => Math.floor(256 * value))
const denormalizeInput = (value) => value > 0 ? (value / 100) : value
class ColorAdvisor extends LitElement {
  static get properties() {
    return {
      light: { type: Number },
      neutral: { type: Number },
      color: { type: Array },
    }
  }
  constructor() {
    super()
    this.light = 65
    this.neutral = 35
    this.color = [0, 0, 0]
    this.brain = null
    this.getABrain()
  }
  async connectedCallback() {
    super.connectedCallback()
    document.addEventListener('readystatechange', () => {
      let lightSlider = this.shadowRoot.querySelector('.lightSlider');
      lightSlider.addEventListener('change', _.throttle(function() {
        let { value } = lightSlider
        this.light = denormalizeInput(value)
        this.suggestColor()
      }.bind(this), 600))
      let neutralSlider = this.shadowRoot.querySelector('.neutralSlider');
      neutralSlider.addEventListener('change', _.throttle(function() {
        let { value } = neutralSlider
        this.neutral = denormalizeInput(value)
        this.suggestColor()
      }.bind(this), 600)) 
    })
  }
  async getABrain() {
    const response = await fetch('./brightness.json')
    const model = await response.json()
    let brightness = new brain.NeuralNetwork()
    brightness.fromJSON(model)
    this.brain = brightness
    this.suggestColor()
  }
  suggestColor () {
    let {red, green, blue} = this.brain.run({ light: this.light, neutral: this.neutral })
    this.color = normalizeColor([red, green, blue])
    console.log({color: this.color})
  }
  render() {
    return html`
      <style>
        paper-slider {
          width: 400px;
        }
        .parent {
          display: flex;
          width: 50%;
          margin: 0;
        }
        .one {
          margin: auto;
          width: 5%;
          padding: 10px;
        }
        .two {
          flex: 1;
        }
        .three {
          flex: 2;
          margin: auto;
          width: 60%;
          padding: 10px;
        }
        .four {
          flex: 3;
        }
        .color {
          background-color:rgb(${this.color[0]}, ${this.color[1]}, ${this.color[2]});
          border-width: 2px;
          border-color: black;
          border-style: solid;
          width: 56%;
          height: 20%;
        }
      </style>
      <div class="parent">
        <div class="one">
          <label>Light</label>
        </div>
        <div class="two">
          <paper-slider class="lightSlider"
            value="${this.light}"
            max="100"
            secondary-progress="100"
            editable
          ></paper-slider>
        </div>
        <div class="three">
          <label>Neutral</label>
        </div>
        <div class="four">
          <paper-slider class="neutralSlider"
            value="${this.neutral}"
            max="100"
            secondary-progress="100"
            editable
          ></paper-slider>
        </div>
      </div>
      <div class="color"></div>
    `
  }
}
customElements.define('color-advisor', ColorAdvisor)
