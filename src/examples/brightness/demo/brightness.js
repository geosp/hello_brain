/* 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module' */
import {
  LitElement,
  html,
} from './node_modules/@polymer/lit-element/lit-element.js'
import './node_modules/@polymer/paper-slider/paper-slider.js'

const debounceLmit = 200
const denormalizeColor = colors => colors.map(value => Math.floor(256 * value))
const normalizeInput = value => (value > 0 ? value / 100 : value)
class ColorAdvisor extends LitElement {
  static get properties() {
    return {
      light: { type: Number },
      neutral: { type: Number },
      color: { type: Array },
      brain: { type: Object },
    }
  }
  constructor() {
    super()
    this.light = 50
    this.neutral = 50
    this.color = [255, 255, 255]
    this.getABrain()
  }
  async connectedCallback() {
    super.connectedCallback()
  }
  lightSliderChanged(e) {
    let slider = this.shadowRoot.querySelector('.lightSlider')
    let { value } = slider
    this.light = value
    this.suggestColor()
  }
  neutralSliderChanged(e) {
    let slider = this.shadowRoot.querySelector('.neutralSlider')
    let { value } = slider
    this.neutral = value
    this.suggestColor()
  }
  async getABrain() {
    const response = await fetch('./brightness.json')
    const model = await response.json()
    let brightness = new brain.NeuralNetwork()
    brightness.fromJSON(model)
    this.brain = brightness
    this.suggestColor()
  }
  suggestColor() {
    let input = _.mapValues(
      { light: this.light, neutral: this.neutral },
      normalizeInput
    )
    let { red, green, blue } = this.brain.run(input)
    this.color = denormalizeColor([red, green, blue])
    console.log(JSON.stringify({ color: this.color }))
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
          background-color: rgb(
            ${this.color[0]},
            ${this.color[1]},
            ${this.color[2]}
          );
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
          <paper-slider
            class="lightSlider"
            value="${this.light}"
            max="100"
            secondary-progress="100"
            editable
            @change="${_.debounce(
              e => this.lightSliderChanged(e),
              debounceLmit
            )}"
          ></paper-slider>
        </div>
        <div class="three">
          <label>Neutral</label>
        </div>
        <div class="four">
          <paper-slider
            class="neutralSlider"
            value="${this.neutral}"
            max="100"
            secondary-progress="100"
            editable
            @change="${_.debounce(
              e => this.neutralSliderChanged(e),
              debounceLmit
            )}"
          ></paper-slider>
        </div>
      </div>
      <div class="color"></div>
    `
  }
}
customElements.define('color-advisor', ColorAdvisor)
