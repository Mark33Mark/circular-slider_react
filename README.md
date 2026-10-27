<a id="readme-top"></a>

[![Version][version-shield]][version-url]
[![Package-Size][package-size-shield]][package-size-url]
[![Stargazers][stars-shield]][stars-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![project_license][license-shield]][license-url]

[![Watsonised][watsonised-logo]][watsonised-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mark33mark/circular-slider_react">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyODAiIGhlaWdodD0iMjgwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+CiAgPGRlZnM+CiAgICA8IS0tIHN2ZyBncmFkaWVudCAtLT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icHJvZ3Jlc3NHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0b3AtY29sb3IiIHZhbHVlcz0iIzAwODdmZjsgIzliNWRlNTsgI2YxNWJiNTsgIzAwZjVkNDsgIzAwODdmZiIgZHVyPSIxMXMiCiAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgICAgPC9zdG9wPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0b3AtY29sb3IiIHZhbHVlcz0iI2YxNWJiNTsgIzAwZjVkNDsgIzAwODdmZjsgIzliNWRlNTsgI2YxNWJiNSIgZHVyPSIxMXMiCiAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgICAgPC9zdG9wPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CgogIDwhLS0gYmFja2dyb3VuZCB0cmFjayAtLT4KICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEzMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2NjIiBzdHJva2Utd2lkdGg9IjE2IiAvPgoKICA8IS0tIHByb2dyZXNzIHRyYWNrIC0tPgogIDxwYXRoIGQ9Ik0gMTUwLCAxNTAgbSAwLCAtMTMyIGEgMTMyLDEzMiAwIDAsMSAwLDI2NCBhIC0xMzIsLTEzMiAwIDAsMSAwLC0yNjQiIGZpbGw9Im5vbmUiCiAgICBzdHJva2U9InVybCgjcHJvZ3Jlc3NHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMTYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iODI5LjM4MDQ2MDU0NzcwNTQiCiAgICBzdHJva2UtZGFzaG9mZnNldD0iMTk3LjQyODczNDkyMDYwNTQ1IiB0cmFuc2Zvcm09InJvdGF0ZSgwIDE1MCAxNTApIiAvPgoKICA8IS0tIGtub2IgcmluZyBncm91cCAocG9zaXRpb25lZCB1c2luZyBhIHVuaWZpZWQgdHJhbnNmb3JtIGdyb3VwKSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAxMjApIj4KICAgIDwhLS0gb3V0ZXIgZ2xvdyBjaXJjbGUgKHN0YXRpYyByZXByZXNlbnRhdGlvbiBvZiBwdWxzZSkgLS0+CiAgICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSIxNi4yIiBmaWxsPSIjNDhiNDAwIiBmaWxsLW9wYWNpdHk9IjAuMzUiIC8+CgogICAgPCEtLSBtYWluIGtub2IgYm9keSB3aXRoIGRyb3Agc2hhZG93IC0tPgogICAgPGNpcmNsZSBjeD0iMTgiIGN5PSIxOCIgcj0iMTIiIGZpbGw9IiM0OGI0MDAiIHN0eWxlPSJmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KSk7IiAvPgoKICAgIDwhLS0ga25vYiBncmlwIGxpbmVzIC0tPgogICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMTQiIHk9IjE0IiB3aWR0aD0iOCIgaGVpZ2h0PSIxIiAvPgogICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMTQiIHk9IjE3IiB3aWR0aD0iOCIgaGVpZ2h0PSIxIiAvPgogICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMTQiIHk9IjIwIiB3aWR0aD0iOCIgaGVpZ2h0PSIxIiAvPgogIDwvZz4KPC9zdmc+" alt="Logo" width="200" height="200">
  </a>

<h3 align="center">A Circular Sliding Input Component ⇶ for React projects</h3>

  <p align="center">
    A highly customisable circular slider with <strong>zero dependencies</strong> 
  </p>
  
    
  <a href=https://circular-slider-react.watsonised.me><strong>◻ live demo</strong></a>  
  <a href=https://sb-circular-slider-react.watsonised.me><strong>◻ storybook</strong></a>
    
  
  <h3>Explore the docs »»»</h3>
  <p>
    &middot;
    <a href="https://github.com/Mark33Mark/circular-slider_react"> View Demo </a>
    &middot;
    <a href="https://github.com/Mark33Mark/circular-slider_react/issues/new?labels=bug&template=bug-report---.md"> Report Bug </a>
    &middot;
    <a href="https://github.com/Mark33Mark/circular-slider_react/issues/new?labels=enhancement&template=feature-request---.md"> Request Feature </a>
    &middot;
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details open>
  <summary><strong><u>Table of Contents</u></strong></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built with</a></li>
        <li><a href="#project-structure">Project structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#use-in-your-react-project">Use in your React project</a></li>
        <li><a href="#get-a-copy-of-the-code-to-contribute">Get a copy of the code</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
      <ul>
        <li><a href="#default---no-customising">Default</a></li>
        <li><a href="#props">Props</a></li>
        <li><a href="#custom-configuration">Custom</a></li>
        <li><a href="#arc">Arc</a></li>
      </ul>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#goodwill">Goodwill</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
[![arc circular slider][circular-slider-arc]](https://circular-slider-react.watsonised.me)


### Built with

[![javascript][javascript]][javascript-url] [![typescript][typescript]][typescript-url] [![node][nodejs]][nodejs-url] [![npm][npm]][npm-url] [![react][react.js]][react-url]  [![storybook][storybook]][storybook-url] [![sqlite][sqlite]][sqlite-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Project structure

Set up as a mono-repo using NPM's `workpaces` 

```sh
  .../circular-slider_react
              .
              |-- LICENSE
              |-- README.md
              |-- assets
              |   |-- arc_circular_slider.webp
              |   `-- logo_circular_slider.svg
              |-- package.json
              |
              `-- packages
                  |-- circular-slider-lib
                  |   |-- _stories
                  |   |   `-- components
                  |   |
                  |   |-- index.d.ts
                  |   |-- package.json
                  |   |
                  |   |-- src
                  |   |   |-- components
                  |   |   |-- hooks
                  |   |   |-- index.js
                  |   |   |-- redux
                  |   |   |-- styles
                  |   |   `-- utilities
                  |   |
                  |   |-- tsconfig.json
                  |   |-- vite.config.js
                  |   `-- vitest.config.js
                  |
                  `-- demo-app
                      |-- index.html
                      |-- package.json
                      |
                      |-- public
                      |   |-- data
                      |   |-- robots.txt
                      |   |-- sql-wasm.wasm
                      |   |-- sqlite.worker.js
                      |   `-- sqlite.worker.js.map
                      |
                      |-- src
                      |   |-- assets
                      |   |-- components
                      |   |-- hooks
                      |   `-- styling
                      |
                      `-- vite.config.js

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Designed to be imported into your React project, with or without typescript, and consumed as a component in your application.  Refer to the [demonstration][demonstration-url] or [storybook][storybook-url], in particular you can interact with the available properties  for the circular-slider component to get a greater understanding of what is possible with this project.

### Use in your React project

To use this component in your project, install the package, my example uses NPM:

  ```sh
  npm install @watsonised/circular-slider-for-react
  ```

### Get a copy of the code to contribute

1. Clone the repo
   ```sh
   git clone https://github.com/Mark33Mark/circular-slider_react.git
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
3. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin Mark33Mark/circular-slider_react
   
   # confirm the changes
   git remote -v 
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Default - raw, without any custom props

```jsx

  import { CircularSlider } from '@watsonised/circular-slider-for-react';

  export const App = () => (
      <>
          <CircularSlider onChange={ value => console.log(value) } />
      </>
  );

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Props

| Prop                      | Type                                                    | Default                                   | Description                                                                                               |
|---------------------------|---------------------------------------------------------|-------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| `arcEnd`                  | `number`                                                | `undefined`                               | End angle (in degrees) for arc mode. Use with `arcStart` (e.g. `135` for lower-right = 270° speedometer sweep). |
| `arcStart`                | `number`                                                | `undefined`                               | Start angle (in degrees) for arc mode. Use with `arcEnd` to create a partial-circle gauge (e.g. `225` for lower-left). |
| `data`                    | `(string \| number)[]`                                  | `[]`                                      | Array of values or labels, evenly spread over 360°. If not provided, a data array of 0 t0 360 generated.  |
| `dataIndex`               | `number`                                                | `0`                                       | Initial index position in the data array.                                                                 |
| `direction`               | `string`                                                | `clockwise`                               | Rotation direction set with: `clockwise` or `anticlockwise`.                                              |
| `isDragging`              | `boolean`                                               | `() => {}`                                | Callback to signal whether the slider is being dragged.                                                   |
| `keypressStep`            | `integer`                                               | `1`                                       | For keyboard. When set to `1` the slider will progress `1` data point with `1` keypress.                  |
| `knobAnimated`            | `boolean`                                               | `true`                                    | If `true`, the knob outer ring will show a pulse animation.                                               |
| `knobColor`               | `string`                                                | `"#48B400"`                             | Color of the knob.                                                                                        |
| `knobDraggable`           | `boolean`                                               | `true`                                    | If `true`, the knob is draggable.                                                                         |
| `knobHide`                | `boolean`                                               | `false`                                   | If `true`, the knob is hidden.                                                                            |
| `knobHideRing`            | `boolean`                                               | `false`                                   | If `true`, the translucent ring around the knob is hidden.                                                |
| `knobPosition`            | `string \| number`                                      | `"top"`                                   | Starting position: accepts `"top"`, `"right"`, `"bottom"`, `"left"` or an angle (in degrees).             |
| `knobRingRadius`          | `floating point number`                                 | `0.45`                                    | Access to set how visible the outer ring of the knob.                                                     |
| `knobSize`                | `number`                                                | `36`                                      | Diameter of the knob in pixels.                                                                           |
| `label`                   | `string`                                                | `"ANGLE"`                                 | Text label displayed on the slider.                                                                       |
| `labelAppendCss`          | `string`                                                | `undefined`                               | Directly set CSS to set the style / position to your requirement.                                         |
| `labelAppendValue`        | `string`                                                | `""`                                      | Text appended to the value.                                                                               |
| `labelBottom`             | `boolean`                                               | `false`                                   | If `true`, the label is positioned below the slider.                                                      |
| `labelColor`              | `string`                                                | `"#333"`                                | Color of the label and value text.                                                                        |
| `labelFontSize`           | `string`                                                | `"1rem"`                                  | Font size of the label.                                                                                   |
| `labelHideValue`          | `boolean`                                               | `false`                                   | If `true`, both the label and value are hidden.                                                           |
| `labelHorizontalOffset`   | `string`                                                | `undefined`                               | Horizontal offset for the label / value display.                                                          |
| `labelPrependCss`         | `string`                                                | `undefined`                               | Directly set CSS to set the style / position to your requirement.                                         |
| `labelPrependValue`       | `string`                                                | `""`                                      | Text prepended to the value.                                                                              |
| `labelShow`               | `boolean`                                               | `true`                                    | Access to control display of the value in the centre of the circular slider. Set to `true` to show label. |
| `labelValueFontSize`      | `string`                                                | `"3rem"`                                  | Font size of the displayed value.                                                                         |
| `labelVerticalOffset`     | `string`                                                | `undefined`                               | Vertical offset for the label/value display.                                                              |
| `limitDragRange`          | `boolean`                                               | `false`                                   | If `true`, the slider knob is stopped from continuing past the data start or end value, the user must reverse direction to decrease the value, instead of progressing from `max` to `min` value. |
| `max`                     | `number`                                                | `359`                                     | Maximum value.                                                                                            |
| `min`                     | `number`                                                | `0`                                       | Minimum value.                                                                                            |
| `onChange`                | `string \| number`                                      | `() => {}`                                | Callback fired when the value changes.                                                                    |
| `progressColorFrom`       | `string`                                                | `"#81C784"`                             | Start color for the progress gradient.                                                                    |
| `progressColorTo`         | `string`                                                | `"#006403"`                             | End color for the progress gradient.                                                                      |
| `progressGradient`        | `(string \| GradientStop)[]`                            | `[]`                                      | Array of color stops for a multi-stop progress gradient. Overrides `progressColorFrom`/`To`. Each stop can be a color string or `{ offset, stopColor, stopOpacity }`. |
| `progressLineCap`         | `"butt" \| "round" \| "square"`                         | `"round"`                                 | Cap style for the progress track.                                                                         |
| `progressSize`            | `number`                                                | `16`                                      | Thickness of the progress track.                                                                          |
| `trackColor`              | `string`                                                | `"#DDDEFB"`                             | Color of the background track.                                                                            |
| `trackDraggable`          | `boolean`                                               | `false`                                   | If `true`, allows dragging the background track.                                                          |
| `trackGradient`           | `(string \| GradientStop)[]`                            | `[]`                                      | Array of color stops for a multi-stop track gradient. Overrides `trackColor`.                             |
| `trackSize`               | `number`                                                | `16`                                      | Thickness of the background track.                                                                        |
| `width`                   | `number`                                                | `280`                                     | Width of the slider in pixels.                                                                            |


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Custom Configuration  

Customise properties such as the label, colors, data set, and more.  For example:

```jsx

import CircularSlider from '@watsonised/circular-slider-for-react';

export const App = () => (
    <>
      <CircularSlider
        dataIndex={270}
        knobColor={selectedHue ? `oklch(0.8 0.2 ${selectedHue})` : "oklch(0.8 0.2 1)"}
        knobPosition={"bottom"}
        knobSize={isMobile ? 60 : 62}
        label={"Spectrum"}
        labelAppendValue={"°"}
        labelColor={isMobile ? "3.5rem" : "4rem"}
        labelValueFontSize={isMobile ? "3.5rem" : "4rem"}
        max={359}
        min={0}
        onChange={value => setSelectedHue(Number(value))}
        progressGradient={[
          { offset: "0%",  stopColor: "#ef4444" },
          { offset: "20%", stopColor: "#f97316" },
          { offset: "40%", stopColor: "#eab308" },
          { offset: "55%", stopColor: "#22c55e" },
          { offset: "70%", stopColor: "#3b82f6" },
          { offset: "85%", stopColor: "#6366f1" },
          { offset: "100%", stopColor: "#8b5cf6" },
        ]}
        progressSize={30}
        trackDraggable={true}
        trackGradient={[
          { offset: "0%", stopColor: "#fecaca", stopOpacity: 0.4 },
          { offset: "50%", stopColor: "#bbf7d0", stopOpacity: 0.4 },
          { offset: "100%", stopColor: "#c4b5fd", stopOpacity: 0.4 },
        ]}
        trackSize={20}
        width={250}
      />
    </>
);

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Arc

Use `arcStart` and `arcEnd` to create an arc (partial-circle):

```jsx
  <CircularSlider
    arcEnd={135}
    arcStart={225}
    dataIndex={80}
    knobColor={isSpeeding >= 170 ? "#dc2626" : isSpeeding >= 90 ? "#d67921ec" : "#0b9627"}
    knobSize={isMobile ? 50 : 60}
    label={"Speedometer"}
    labelColor={isSpeeding >= 170 ? "#dc2626" : isSpeeding >= 90 ? "#d67921ec" : "#0b9627"}
    labelValueFontSize={isMobile ? "2rem" : "2.5rem"}
    limitDragRange={true}
    max={250}
    min={0}
    onChange={value => setIsSpeeding(value)}
    progressGradient={[
      { offset: "0%", stopColor: "#22c55e" },
      { offset: "45%", stopColor: "#ffd000" },
      { offset: "55%", stopColor: "#ffae00" },
      { offset: "100%", stopColor: "#dc2626" },
    ]}
    progressLineCap="butt"
    progressSize={24}
    trackColor="#e5e7eb"
    trackDraggable={true}
    trackSize={24}
    width={250}
  />
  
```

For more examples, please refer to the [demonstration][demonstration-url] or [storybook][storybook-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap  
- [ ]  SolidJS version - I think SolidJS is significantly better than React, using signals to manage state was always going to be better than React's approach of a virtual DOM.  
- [x] Typescript - decided to add types, so that you don't have to 👌🏼.

See the [open issues](https://github.com/Mark33Mark/circular-slider_react/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".  

⭐⭐⭐⭐⭐  don't forget to give the project a star - thanks again.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch:  `git push origin feature/AmazingFeature`
5. Open a Pull Request


### Top contributors:

<a href="https://github.com/Mark33Mark/circular-slider_react/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Mark33Mark/circular-slider_react" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

This software is subject to the MIT,  please have a read of the [MIT][the-mit-licence] to understand the limits of our respective responsibilities to each other.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

**Mark Watson** - mark@watsonised.me

**Project Link**: [https://github.com/Mark33Mark/circular-slider_react](https://github.com/Mark33Mark/circular-slider_react)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [@fseehawer/react-circular-slider](https://www.npmjs.com/package/@fseehawer/react-circular-slider)  
  This package is now deprecated.  There were memory leak issues and functional issues like: vertical gradient fill, keyboard input broken, and some other subtle issues.  My project is a complete rebuild utilising the improvements in state rendering in React v19.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GOODWILL -->
## Goodwill

I know, we've all seen us developers with our hand out asking for some money.  In reality, there are so many people out there doing so much work to help others with improving the digital world.  So, if you are an altruist, and think this work is worthy of your love, then please visit my [Watsonised Stripe payment page. ](https://pay.watsonised.me)  
No problem if you're not in a position to make a goodwill payment... I get it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- README URL CONSTANTS -->
[git-repo-url]: https://github.com/Mark33Mark/circular-slider_react
[the-mit-licence]: https://mit-license.org/
[watsonised-logo]: data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCA5MCA5MCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgPGRlZnM+CiAgICAgIDxtYXNrIGlkPSJjdXRvdXRNYXNrIj4KICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjkwIiBoZWlnaHQ9IjkwIiBmaWxsPSJ3aGl0ZSIgLz4KICAgICAgICAgPHBhdGggaWQ9ImxldHRlci1NIiBzdHlsZT0iZmlsbDpibGFjazsiIGQ9ICIgTSAxNCwxNAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWIDYwCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEggMjYKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgViAzMwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMIDM3LDQ5IDQ5LDMzCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFYgMzMgMTcKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTCAzNywzMyAyNiwxNAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaIj4KICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBhdHRyaWJ1dGVUeXBlPSJYTUwiIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7IDggODsgOCA4OyAwIDA7IDAgMCIga2V5VGltZXM9IjA7IDAuNDsgMC41OyAwLjg7IDEiIGR1cj0iMTBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9ImxpbmVhciIgIC8+CiAgICAgICAgIDwvcGF0aD4KICAgICAgICAgPHBhdGggaWQ9ImxldHRlci1XIiBzdHlsZT0iZmlsbDpibGFjazsiIGQ9ICIgTSA3Niw3NgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWIDMwCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEggNjQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgViA1NwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMIDUzLDQxIDQxLDU3CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgMCAxNgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMIDUzLDU3IDY0LDc2CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFoiPgogICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGF0dHJpYnV0ZVR5cGU9IlhNTCIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDsgLTggLTg7IC04IC04OyAwIDA7IDAgMCIga2V5VGltZXM9IjA7IDAuNDsgMC41OyAwLjg7IDEiIGR1cj0iMTBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9ImxpbmVhciIgLz4KICAgICAgICAgPC9wYXRoPgogICAgICA8L21hc2s+CiAgIDwvZGVmcz4KCiAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgZmlsbD0iIzYwYTJmZCIgbWFzaz0idXJsKCNjdXRvdXRNYXNrKSIgLz4KCjwvc3ZnPgo=
[watsonised-url]: https://get.watsonised.me
[demonstration-url]: https://circular-slider-react.watsonised.me
[storybook-url]: https://sb-circular-slider-react.watsonised.me
[circular-slider-arc]: data:image/webp;base64,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MjY6MTA6MTAgMTY6Mjg6MTkAAQABoAMAAQAAAAEAAAAAAAAAWE1QIPAMAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjRlNzBlMDY1LThkODctNDI0YS1iM2VhLTI1ZmRjY2Y1ZjRhMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphNjlkYzQ0ZC04NmZjLTRlMmItYjQ3Ny04ZjM2NjRjODM4ZDEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNmUwMDRlOS01ZGYxLTQzNjAtYmZiMC1lNjk2OTE5MDI3ZWMiIGRjOkZvcm1hdD0iaW1hZ2Uvd2VicCIgR0lNUDpBUEk9IjIuMCIgR0lNUDpQbGF0Zm9ybT0iTGludXgiIEdJTVA6VGltZVN0YW1wPSIxNzkxNjEwMTAzMjg3OTkyIiBHSU1QOlZlcnNpb249IjIuMTAuMzYiIHRpZmY6T3JpZW50YXRpb249IjEiIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI2OjEwOjEwVDE2OjI4OjE5KzExOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNjoxMDoxMFQxNjoyODoxOSsxMTowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDpjaGFuZ2VkPSIvIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyY2IzOWMyLWZlNzktNGY4Yi1hODgxLTc2M2NmYzE0MzcxNyIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiIHN0RXZ0OndoZW49IjIwMjYtMTAtMTBUMTY6Mjg6MjMrMTE6MDAiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz4=

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Mark33Mark/circular-slider_react.svg?style=for-the-badge&colorB=60A2FD
[contributors-url]: https://github.com/Mark33Mark/circular-slider_react/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Mark33Mark/circular-slider_react.svg?style=for-the-badge&colorB=60A2FD
[forks-url]: https://github.com/Mark33Mark/circular-slider_react/network/members
[issues-shield]: https://img.shields.io/github/issues/Mark33Mark/circular-slider_react.svg?style=for-the-badge&colorB=60A2FD
[issues-url]: https://github.com/Mark33Mark/circular-slider_react/issues
[license-shield]: https://img.shields.io/github/license/Mark33Mark/circular-slider_react.svg?style=for-the-badge&colorB=60A2FD
[license-url]: https://github.com/Mark33Mark/circular-slider_react/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=60A2FD
[linkedin-url]: https://linkedin.com/in/mark-watsonised/
[package-size-shield]: https://img.shields.io/bundlejs/size/%40watsonised%2Fcircular-slider-for-react?style=for-the-badge&logo=linkedin&colorB=60A2FD
[package-size-url]: https://bundlephobia.com/package/@watsonised/circular-slider-for-react
[stars-shield]: https://img.shields.io/github/stars/Mark33Mark/circular-slider_react.svg?style=for-the-badge&colorB=60A2FD
[stars-url]: https://github.com/Mark33Mark/circular-slider_react/stargazers
[version-shield]: https://img.shields.io/npm/v/@watsonised/circular-slider-for-react?style=for-the-badge&logo=linkedin&colorB=60A2FD
[version-url]:https://www.npmjs.com/package/@watsonised/circular-slider-for-react

<!-- Shields.io badges. A comprehensive list with many more badges is at: https://github.com/inttter/md-badges -->

<!-- Database -->
[sqlite]: https://img.shields.io/badge/SQLite-%2307405e.svg?logo=sqlite&logoColor=white
[sqlite-url]: https://sqlite.org/index.html

<!-- Design -->
[storybook]: https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=fff
[storybook-url]: https://storybook.js.org/

<!-- Framework -->
[docker]: https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff
[docker-url]: https://www.docker.com
[nodejs]: https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org
[react.js]: https://img.shields.io/badge/React-20232A?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjE1IiB3aWR0aD0iMTUiIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJpbWciDQogICAgdmlld0JveD0iLTUgLTIwIDI4MCAyODAiIGNsYXNzPSJsb2dvIHJlYWN0IiA+DQoNCiAgICA8ZGVmcz4NCiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJzaW1wbGVHcmFkaWVudCI+DQogICAgICAgICAgICAvLyByZWFjdCBsb2dvIGRlZmF1bHQgZmlsbCBjb2xvcjogIiMwMEQ4RkYiDQogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDBEOEZGIiBzdG9wLW9wYWNpdHk9IjEiIC8+DQogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgICAgIDxmaWx0ZXIgaWQ9ImJsdXJTdHJva2UiIHg9Ii0yMCIgeT0iLTIwIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCI+DQogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiBzdGREZXZpYXRpb249IjYiIHJlc3VsdD0iYmx1ciIgLz4NCiAgICAgICAgICAgIDxmZUZsb29kIGZsb29kLWNvbG9yPSIjMDBEOEZGIiByZXN1bHQ9ImNvbG9yIiAvPg0KICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPSJjb2xvciIgaW4yPSJibHVyIiBvcGVyYXRvcj0iaW4iIHJlc3VsdD0ic29tYnJhIiAvPg0KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMCIgcmVzdWx0PSJvZmZzZXRCbHVyIiAvPg0KICAgICAgICAgICAgPGZlTWVyZ2U+DQogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJvZmZzZXRCbHVyIiAvPg0KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIgLz4NCiAgICAgICAgICAgIDwvZmVNZXJnZT4NCiAgICAgICAgPC9maWx0ZXI+DQogICAgPC9kZWZzPg0KDQogICAgPGc+DQogICAgICAgIDxlbGxpcHNlIGN4PSIxMjgiIGN5PSIxMTMuNSIgcng9IjEyMiIgcnk9IjQ3IiBzdHJva2U9InVybCgjc2ltcGxlR3JhZGllbnQpIiBzdHJva2Utd2lkdGg9IjEyIiBmaWxsPSJub25lIg0KICAgICAgICAgICAgZmlsdGVyPSJ1cmwoI2JsdXJTdHJva2UpIiAvPg0KICAgICAgICA8ZWxsaXBzZSBjeD0iMTYzIiBjeT0iLTUzIiByeD0iMTIyIiByeT0iNDciIHN0cm9rZT0idXJsKCNzaW1wbGVHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMTIiIGZpbGw9Im5vbmUiDQogICAgICAgICAgICB0cmFuc2Zvcm09InJvdGF0ZSg2MCkiIGZpbHRlcj0idXJsKCNibHVyU3Ryb2tlKSIgLz4NCiAgICAgICAgPGVsbGlwc2UgY3g9IjM1IiBjeT0iLTE2OCIgcng9IjEyMiIgcnk9IjQ3IiBzdHJva2U9InVybCgjc2ltcGxlR3JhZGllbnQpIiBzdHJva2Utd2lkdGg9IjEyIiBmaWxsPSJub25lIg0KICAgICAgICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSIgZmlsdGVyPSJ1cmwoI2JsdXJTdHJva2UpIiAvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxMjgiIGN5PSIxMTMuNSIgcj0iMjMiIGZpbGw9InVybCgjc2ltcGxlR3JhZGllbnQpIiAvPg0KDQogICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDEyOCAxMTMuNSIgdG89IjM2MCAxMjggMTEzLjUiIGR1cj0iMjBzIg0KICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+DQogICAgPC9nPg0KPC9zdmc+DQo=
[react-url]: https://reactjs.org/

<!-- Package Manager -->
[npm]: https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff
[npm-url]: https://www.npmjs.com/package/@watsonised/circular-slider-for-react 

<!-- Programming Language -->
[javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000
[javascript-url]: https://ecma-international.org/publications-and-standards/standards/ecma-262/
[typescript]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff
[typescript-url]: https://www.typescriptlang.org/
