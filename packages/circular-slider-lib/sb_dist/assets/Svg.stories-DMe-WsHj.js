import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./components-B1TSa2wJ.js";import{i,r as a}from"./Wrappers-CE3M5TWX.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),i(),o=t(),{fn:s,expect:c,within:l,fireEvent:u}=__STORYBOOK_MODULE_TEST__,d={title:`Slider/Svg`,component:n,parameters:{layout:`centered`,sort:`alpha`},tags:[`autodocs`],argTypes:{arcStart:{control:{type:`range`,min:0,max:359,step:.5},defaultValue:225,table:{category:`🌙 feature`}},arcEnd:{control:{type:`range`,min:0,max:359,step:.5},defaultValue:135,table:{category:`🌙 feature`}},direction:{control:{type:`radio`},options:[`clockwise`,`anti-clockwise`],defaultValue:`clockwise`},limitDragRange:{control:{type:`boolean`}},position:{control:{type:`radio`},options:[`top`,`right`,`bottom`,`left`]},progressColorFrom:{control:{type:`color`},table:{category:`🎨 colours`}},progressColorTo:{control:{type:`color`},table:{category:`🎨 colours`}},progressGradient:{table:{category:`🎨 colours`}},progressLineCap:{control:{type:`radio`},options:[`butt`,`round`,`square`]},progressSize:{control:{type:`range`,min:1,max:48,step:.5},defaultValue:16,table:{category:`🏗️ size`}},trackColor:{control:{type:`color`},table:{category:`🎨 colours`}},trackDraggable:{control:{type:`boolean`}},trackGradient:{table:{category:`🎨 colours`}},keypressStep:{control:{type:`range`,min:1,max:50,step:1},defaultValue:1,table:{category:`🏗️ size`}},dataIndex:{control:{type:`range`,min:0,max:359,step:1},defaultValue:25,table:{category:`🏗️ size`}},trackSize:{control:{type:`range`,min:1,max:48,step:.5},defaultValue:24,table:{category:`🏗️ size`}},width:{control:{type:`range`,min:16,max:560,step:1},defaultValue:16,table:{category:`🏗️ size`}},args:{handleClick:s(),table:{disable:!0}}},render:e=>(0,o.jsx)(a,{...e})},f={args:{trackDraggable:!0,limitDragRange:!0,progressLineCap:`round`,direction:`clockwise`,position:`top`,dataIndex:50,width:300,trackSize:16,progressSize:16,keypressStep:1,trackColor:`#e0e0e0`,progressColorFrom:`#81c784`,progressColorTo:`#006403`},globals:{grid:!1},argTypes:{arcStart:{table:{disable:!0}},arcEnd:{table:{disable:!0}},progressGradient:{table:{disable:!0}},trackGradient:{table:{disable:!0}}}},p={args:{arcStart:270,arcEnd:90,trackDraggable:!0,limitDragRange:!0,progressLineCap:`round`,direction:`clockwise`,position:`top`,dataIndex:50,width:440,trackSize:8,progressSize:40,keypressStep:1,progressLineCap:`round`,direction:`clockwise`,progressColorFrom:`#80C3F3`,progressColorTo:`#00418b`,trackColor:`#DDDEFB`},globals:{grid:!0},argTypes:{position:{table:{disable:!0}},progressGradient:{table:{disable:!0}},trackGradient:{table:{disable:!0}}}},m={args:{arcStart:225,arcEnd:135,trackDraggable:!0,limitDragRange:!0,dataIndex:50,direction:`clockwise`,progressLineCap:`butt`,progressSize:30,trackSize:40,width:440,progressGradient:[{offset:`0%`,stopColor:`#8b5cf6`},{offset:`20%`,stopColor:`#6366f1`},{offset:`40%`,stopColor:`#3b82f6`},{offset:`55%`,stopColor:`#22c55e`},{offset:`70%`,stopColor:`#e6ea08`},{offset:`85%`,stopColor:`#f97316`},{offset:`100%`,stopColor:`#ef4444`}],trackGradient:[{offset:`0%`,stopColor:`#c4b5fd`,stopOpacity:.4},{offset:`50%`,stopColor:`#bbf7d0`,stopOpacity:.4},{offset:`100%`,stopColor:`#fecaca`,stopOpacity:.4}]},globals:{grid:!1},argTypes:{position:{table:{disable:!0}},progressColorFrom:{table:{disable:!0}},progressColorTo:{table:{disable:!0}},trackColor:{table:{disable:!0}}}},h={args:{arcStart:270,arcEnd:90,dataIndex:359,limitDragRange:!0,trackDraggable:!0,direction:`clockwise`,progressSize:25,trackSize:35,width:200,trackColor:`#DDDEFB`,progressColorFrom:`#80C3F3`,progressColorTo:`#003572`},argTypes:{arcStart:{table:{disable:!0}},arcEnd:{table:{disable:!0}},position:{table:{disable:!0}},progressLineCap:{table:{disable:!0}},progressGradient:{table:{disable:!0}},trackGradient:{table:{disable:!0}}},globals:{grid:!1},render:e=>(0,o.jsx)(`div`,{children:(0,o.jsxs)(`div`,{style:{fontFamily:`arial`,fontSize:`clamp(0.75rem, 1vw, 1.5rem)`,display:`flex`,flexDirection:`column`,gap:`1rem`,alignItems:`center`,backgroundColor:`gray`,padding:`1rem`,width:`80vw`},children:[(0,o.jsx)(`h2`,{style:{paddingTop:`2rem`},children:`progressLineCap = 'butt'`}),(0,o.jsx)(a,{...e,progressLineCap:`butt`}),(0,o.jsx)(`h2`,{style:{paddingTop:`2rem`},children:`progressLineCap = 'round'`}),(0,o.jsx)(a,{...e,progressLineCap:`round`}),(0,o.jsx)(`h2`,{style:{paddingTop:`2rem`},children:`progressLineCap = 'square'`}),(0,o.jsx)(a,{...e,arcStart:90,arcEnd:270,progressLineCap:`square`})]})})},g={tags:[`!dev`],args:{onPointerDown:s(),trackDraggable:!0,isDragging:!1,trackSize:10},play:async({canvasElement:e,args:t})=>{typeof t.onPointerDown?.mockClear==`function`&&t.onPointerDown.mockClear();let n=l(e).getByTestId(`svg-element`);n.getBoundingClientRect=()=>({left:0,top:0,width:200,height:200}),u.pointerDown(n,{clientX:195,clientY:100,pointerType:`touch`}),await c(t.onPointerDown).toHaveBeenCalledTimes(1),u.pointerDown(n,{clientX:100,clientY:100,pointerType:`mouse`}),await c(t.onPointerDown).toHaveBeenCalledTimes(2)}},_={tags:[`!dev`],args:{onPointerDown:s(),trackDraggable:!0,isDragging:!0,trackSize:10},play:async({canvasElement:e,args:t})=>{let n=l(e).getByTestId(`svg-element`);n.getBoundingClientRect=()=>({left:0,top:0,width:200,height:200}),u.pointerDown(n,{clientX:150,clientY:100}),await c(t.onPointerDown).toHaveBeenCalledTimes(1)}},v={tags:[`!dev`],args:{onPointerDown:s(),trackDraggable:!1},play:async({canvasElement:e,args:t})=>{let n=l(e).getByTestId(`svg-element`);u.pointerDown(n,{clientX:195,clientY:100}),await c(t.onPointerDown).toHaveBeenCalledTimes(0)}},y={tags:[`!dev`],args:{onPointerDown:s(),trackDraggable:!0},play:async({canvasElement:e,args:t})=>{let n=l(e).getByTestId(`svg-element`);n.getBoundingClientRect=()=>null,u.pointerDown(n,{clientX:100,clientY:100}),await c(t.onPointerDown).toHaveBeenCalledTimes(0)}},b={tags:[`!dev`],args:{progressSize:-2},play:async({canvasElement:e})=>{let t=l(e).getByTestId(`svg-progress-mask-path`);await c(t.getAttribute(`stroke-width`)).toEqual(`8`)}},x={tags:[`!dev`],args:{size:200,progress:50,trackSize:10,progressSize:10,progressLineCap:`butt`,progressGradient:[{stopColor:`#fecaca`},{stopColor:`#bbf7d0`},{stopColor:`#c4b5fd`}]},play:async({canvasElement:e})=>{let t=l(e).getByTestId(`svg-progress-foreign-object`),n=t.firstElementChild||t,r=n.getAttribute(`style`)||n.style.backgroundImage;c(r).toContain(`conic-gradient`),c(r).toContain(`rgb(254, 202, 202)`),c(r).toContain(`rgb(187, 247, 208)`),c(r).toContain(`rgb(196, 181, 253)`)}},S={tags:[`!dev`],args:{onPointerDown:s(),width:200,trackSize:10,progressSize:10,trackDraggable:!0},play:async({canvasElement:e,args:t})=>{typeof t.onPointerDown?.mockClear==`function`&&t.onPointerDown.mockClear();let n=l(e).getByTestId(`svg-element`);n.getBoundingClientRect=()=>({left:0,top:0,width:200,height:200}),u.pointerDown(n,{clientX:100,clientY:100,pointerType:`mouse`}),await c(t.onPointerDown).not.toHaveBeenCalled(),u.pointerDown(n,{clientX:196,clientY:100,pointerType:`mouse`}),await c(t.onPointerDown).toHaveBeenCalledTimes(1)}},C=[`Default`,`Arc`,`gradientFill`,`lineCaps`,`TrackInteractions`,`WhileDraggingInteraction`,`NonDraggableInteraction`,`NullBoundsInteraction`,`EdgeCase`,`ForgottenGradientOffset`,`SvgDeadZoneTest`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    trackDraggable: true,
    limitDragRange: true,
    progressLineCap: 'round',
    direction: 'clockwise',
    position: 'top',
    dataIndex: 50,
    width: 300,
    trackSize: 16,
    progressSize: 16,
    keypressStep: 1,
    trackColor: '#e0e0e0',
    progressColorFrom: '#81c784',
    progressColorTo: '#006403'
  },
  globals: {
    grid: false
  },
  argTypes: {
    arcStart: {
      table: {
        disable: true
      }
    },
    arcEnd: {
      table: {
        disable: true
      }
    },
    progressGradient: {
      table: {
        disable: true
      }
    },
    trackGradient: {
      table: {
        disable: true
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    arcStart: 270,
    arcEnd: 90,
    trackDraggable: true,
    limitDragRange: true,
    progressLineCap: 'round',
    direction: 'clockwise',
    position: 'top',
    dataIndex: 50,
    width: 440,
    trackSize: 8,
    progressSize: 40,
    keypressStep: 1,
    progressLineCap: 'round',
    direction: 'clockwise',
    progressColorFrom: '#80C3F3',
    progressColorTo: '#00418b',
    trackColor: '#DDDEFB'
  },
  globals: {
    grid: true
  },
  argTypes: {
    position: {
      table: {
        disable: true
      }
    },
    progressGradient: {
      table: {
        disable: true
      }
    },
    trackGradient: {
      table: {
        disable: true
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    arcStart: 225,
    arcEnd: 135,
    trackDraggable: true,
    limitDragRange: true,
    dataIndex: 50,
    direction: 'clockwise',
    progressLineCap: 'butt',
    progressSize: 30,
    trackSize: 40,
    width: 440,
    progressGradient: [{
      offset: '0%',
      stopColor: '#8b5cf6'
    }, {
      offset: '20%',
      stopColor: '#6366f1'
    }, {
      offset: '40%',
      stopColor: '#3b82f6'
    }, {
      offset: '55%',
      stopColor: '#22c55e'
    }, {
      offset: '70%',
      stopColor: '#e6ea08'
    }, {
      offset: '85%',
      stopColor: '#f97316'
    }, {
      offset: '100%',
      stopColor: '#ef4444'
    }],
    trackGradient: [{
      offset: '0%',
      stopColor: '#c4b5fd',
      stopOpacity: 0.4
    }, {
      offset: '50%',
      stopColor: '#bbf7d0',
      stopOpacity: 0.4
    }, {
      offset: '100%',
      stopColor: '#fecaca',
      stopOpacity: 0.4
    }]
  },
  globals: {
    grid: false
  },
  argTypes: {
    position: {
      table: {
        disable: true
      }
    },
    progressColorFrom: {
      table: {
        disable: true
      }
    },
    progressColorTo: {
      table: {
        disable: true
      }
    },
    trackColor: {
      table: {
        disable: true
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    arcStart: 270,
    arcEnd: 90,
    dataIndex: 359,
    limitDragRange: true,
    trackDraggable: true,
    direction: 'clockwise',
    progressSize: 25,
    trackSize: 35,
    width: 200,
    trackColor: '#DDDEFB',
    progressColorFrom: '#80C3F3',
    progressColorTo: '#003572'
  },
  argTypes: {
    arcStart: {
      table: {
        disable: true
      }
    },
    arcEnd: {
      table: {
        disable: true
      }
    },
    position: {
      table: {
        disable: true
      }
    },
    progressLineCap: {
      table: {
        disable: true
      }
    },
    progressGradient: {
      table: {
        disable: true
      }
    },
    trackGradient: {
      table: {
        disable: true
      }
    }
  },
  globals: {
    grid: false
  },
  render: args => {
    return <div>
                <div style={{
        fontFamily: 'arial',
        fontSize: 'clamp(0.75rem, 1vw, 1.5rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: '1rem',
        width: '80vw'
      }}>
                    <h2 style={{
          paddingTop: '2rem'
        }}>progressLineCap = 'butt'</h2>
                    <InteractiveSvgWrapper {...args} progressLineCap="butt" />
                    <h2 style={{
          paddingTop: '2rem'
        }}>progressLineCap = 'round'</h2>
                    <InteractiveSvgWrapper {...args} progressLineCap="round" />
                    <h2 style={{
          paddingTop: '2rem'
        }}>progressLineCap = 'square'</h2>
                    <InteractiveSvgWrapper {...args} arcStart={90} arcEnd={270} progressLineCap="square" />
                </div>
            </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  // this tag hides the 'story' from the sidebar menu / UI
  args: {
    onPointerDown: fn(),
    trackDraggable: true,
    isDragging: false,
    trackSize: 10
  },
  play: async ({
    canvasElement,
    args
  }) => {
    // 🛡️ Clear any accumulated mock history if the play function re-runs
    if (typeof args.onPointerDown?.mockClear === 'function') {
      args.onPointerDown.mockClear();
    }
    const canvas = within(canvasElement);
    const svgElement = canvas.getByTestId('svg-element');
    svgElement.getBoundingClientRect = () => ({
      left: 0,
      top: 0,
      width: 200,
      height: 200
    });

    // Valid Click/Tap on the track (simulating touch via pointerType)
    fireEvent.pointerDown(svgElement, {
      clientX: 195,
      clientY: 100,
      pointerType: 'touch'
    });
    await expect(args.onPointerDown).toHaveBeenCalledTimes(1);

    // Invalid Click in the dead-zone
    fireEvent.pointerDown(svgElement, {
      clientX: 100,
      clientY: 100,
      pointerType: 'mouse'
    });
    await expect(args.onPointerDown).toHaveBeenCalledTimes(2);
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    onPointerDown: fn(),
    trackDraggable: true,
    isDragging: true,
    // hits the '4' in the threshold ternary
    trackSize: 10
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const svgElement = canvas.getByTestId('svg-element');
    svgElement.getBoundingClientRect = () => ({
      left: 0,
      top: 0,
      width: 200,
      height: 200
    });

    // Threshold is now (200 / 4) - 10 = 40.
    // Click at 150 gives distance of 50. (50 > 40) -> Success
    fireEvent.pointerDown(svgElement, {
      clientX: 150,
      clientY: 100
    });
    await expect(args.onPointerDown).toHaveBeenCalledTimes(1);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    onPointerDown: fn(),
    trackDraggable: false // Forces the early return
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const svgElement = canvas.getByTestId('svg-element');

    // Fire a click that WOULD be valid if it were draggable
    fireEvent.pointerDown(svgElement, {
      clientX: 195,
      clientY: 100
    });

    // Assert that the early return successfully blocked the function call
    await expect(args.onPointerDown).toHaveBeenCalledTimes(0);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    onPointerDown: fn(),
    trackDraggable: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const svgElement = canvas.getByTestId('svg-element');
    svgElement.getBoundingClientRect = () => null;
    fireEvent.pointerDown(svgElement, {
      clientX: 100,
      clientY: 100
    });

    // Assert that the early return successfully blocked the function call
    await expect(args.onPointerDown).toHaveBeenCalledTimes(0);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    progressSize: -2
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const svgPathElement = canvas.getByTestId('svg-progress-mask-path');

    // TEST: safety over ride if a negative number set for the Svg's progressSize
    await expect(svgPathElement.getAttribute('stroke-width')).toEqual('8');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  // Keeps test out of the Storybook UI sidebar
  args: {
    size: 200,
    progress: 50,
    trackSize: 10,
    progressSize: 10,
    progressLineCap: 'butt',
    progressGradient: [{
      stopColor: '#fecaca'
    }, {
      stopColor: '#bbf7d0'
    }, {
      stopColor: '#c4b5fd'
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const svgForeignObject = canvas.getByTestId('svg-progress-foreign-object');
    const targetElement = svgForeignObject.firstElementChild || svgForeignObject;
    const styleAttribute = targetElement.getAttribute('style') || targetElement.style.backgroundImage;

    // 1. Verify conic-gradient exists
    expect(styleAttribute).toContain('conic-gradient');

    // 2. Check for normalized RGB colors in order
    expect(styleAttribute).toContain('rgb(254, 202, 202)');
    expect(styleAttribute).toContain('rgb(187, 247, 208)');
    expect(styleAttribute).toContain('rgb(196, 181, 253)');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    onPointerDown: fn(),
    width: 200,
    trackSize: 10,
    progressSize: 10,
    trackDraggable: true // <--- required for Svg.jsx to enable the click handler
  },
  play: async ({
    canvasElement,
    args
  }) => {
    if (typeof args.onPointerDown?.mockClear === 'function') {
      args.onPointerDown.mockClear();
    }
    const canvas = within(canvasElement);
    const svgElement = canvas.getByTestId('svg-element');
    svgElement.getBoundingClientRect = () => ({
      left: 0,
      top: 0,
      width: 200,
      height: 200
    });
    fireEvent.pointerDown(svgElement, {
      clientX: 100,
      clientY: 100,
      pointerType: 'mouse'
    });
    await expect(args.onPointerDown).not.toHaveBeenCalled();
    fireEvent.pointerDown(svgElement, {
      clientX: 196,
      clientY: 100,
      pointerType: 'mouse'
    });
    await expect(args.onPointerDown).toHaveBeenCalledTimes(1);
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{p as Arc,f as Default,b as EdgeCase,x as ForgottenGradientOffset,v as NonDraggableInteraction,y as NullBoundsInteraction,S as SvgDeadZoneTest,g as TrackInteractions,_ as WhileDraggingInteraction,C as __namedExportsOrder,d as default,m as gradientFill,h as lineCaps};