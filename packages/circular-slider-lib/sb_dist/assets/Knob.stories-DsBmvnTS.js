import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{o as n,t as r}from"./components-B1TSa2wJ.js";import{i,n as a}from"./Wrappers-CE3M5TWX.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),i(),o=t(),s={title:`Slider/Knob`,component:n,parameters:{layout:`centered`,sort:`alpha`},tags:[`autodocs`],argTypes:{children:{table:{disable:!0}},knobPosition:{table:{disable:!0}},knobAnimated:{control:{type:`boolean`}},knobDraggable:{control:{type:`boolean`}},knobHide:{control:{type:`boolean`}},knobHideRing:{control:{type:`boolean`}},knobColor:{control:{type:`color`},table:{category:`🎨 colours`}},knobSize:{control:{type:`range`,min:1,max:112,step:.5},defaultValue:36,table:{category:`🏗️ size`}},childSize:{control:{type:`range`,min:1,max:112,step:.5},defaultValue:36,table:{category:`🏗️ size`}},knobRingRadius:{control:{type:`range`,min:.05,max:.6,step:.01},defaultValue:.5,table:{category:`🏗️ size`}}},render:e=>(0,o.jsx)(a,{...e})},c={args:{knobAnimated:!0,knobColor:`#4e63ea`,knobDraggable:!0,knobHide:!1,knobHideRing:!1,knobPosition:{x:0,y:100},knobRingRadius:.5,knobSize:36,trackSize:10,progressSize:10}},l={args:{childSize:30,knobAnimated:!0,knobColor:`#000`,knobHide:!1,knobHideRing:!1,knobDraggable:!0,knobPosition:{x:0,y:100},knobRingRadius:.5,knobSize:48},render:e=>{let{knobSize:t,childSize:n}=e,r=(t-n)/2,i=(0,o.jsx)(`svg`,{width:`${n}px`,height:`${n}px`,x:`${r}px`,y:`${r}px`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#FFD700`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,o.jsx)(`polygon`,{points:`12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2`})});return(0,o.jsx)(a,{...e,children:i})}},u={args:{knobAnimated:!1,knobColor:`#ff0000`,knobDraggable:!0,knobPosition:{x:0,y:100},knobSize:52}},d={args:{knobColor:`#888`,knobAnimated:!1,knobHide:!1,knobHideRing:!0,knobDraggable:!1,knobPosition:{x:0,y:100},knobSize:36}},f=[`Default`,`CustomHandleChild`,`knobPositioning`,`NonDraggable`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    knobAnimated: true,
    knobColor: '#4e63ea',
    knobDraggable: true,
    knobHide: false,
    knobHideRing: false,
    knobPosition: {
      x: 0,
      y: 100
    },
    // starting position (top: 100,0; right: 200, 100, bottom: 100, 200, left: 0, 100 )
    knobRingRadius: 0.5,
    knobSize: 36,
    trackSize: 10,
    // required by calculateSliderPosition
    progressSize: 10 // required by calculateSliderPosition
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    childSize: 30,
    knobAnimated: true,
    knobColor: '#000',
    knobHide: false,
    knobHideRing: false,
    knobDraggable: true,
    knobPosition: {
      x: 0,
      y: 100
    },
    knobRingRadius: 0.5,
    knobSize: 48
  },
  // override the default render just for this story
  render: args => {
    const {
      knobSize,
      childSize
    } = args;
    const offset = (knobSize - childSize) / 2;
    const customIcon = <svg width={\`\${childSize}px\`} height={\`\${childSize}px\`} x={\`\${offset}px\`} y={\`\${offset}px\`} viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>;
    return <InteractiveKnobWrapper {...args}>{customIcon}</InteractiveKnobWrapper>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    knobAnimated: false,
    knobColor: '#ff0000',
    knobDraggable: true,
    knobPosition: {
      x: 0,
      y: 100
    },
    knobSize: 52
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    knobColor: '#888',
    knobAnimated: false,
    knobHide: false,
    knobHideRing: true,
    knobDraggable: false,
    knobPosition: {
      x: 0,
      y: 100
    },
    knobSize: 36
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as CustomHandleChild,c as Default,d as NonDraggable,f as __namedExportsOrder,s as default,u as knobPositioning};