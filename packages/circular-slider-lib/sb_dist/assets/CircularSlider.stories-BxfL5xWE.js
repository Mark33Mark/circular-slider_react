import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{p as t}from"./iframe-CZ2KsMJj.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{_ as r,c as i,d as a,f as o,g as s,h as c,m as l,p as u,t as d,u as f}from"./components-B1TSa2wJ.js";import{i as p,t as m}from"./Wrappers-CE3M5TWX.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{h=t(),d(),p(),c(),u(),r(),g=n(),{fn:_,expect:v,within:y,waitFor:b,fireEvent:x,spyOn:S}=__STORYBOOK_MODULE_TEST__,C={title:`Slider/CircularSlider`,component:i,parameters:{layout:`centered`,sort:`alpha`},tags:[`autodocs`],argTypes:{limitDragRange:{control:{type:`boolean`}},knobHide:{control:{type:`boolean`}},trackDraggable:{control:{type:`boolean`}},direction:{control:{type:`radio`},options:[`clockwise`,`anti-clockwise`]},knobPosition:{control:{type:`radio`},options:[`top`,`right`,`bottom`,`left`]},progressLineCap:{control:{type:`radio`},options:[`butt`,`round`,`square`]},knobColor:{control:{type:`color`},table:{category:`🎨 colours`}},progressColorFrom:{control:{type:`color`},table:{category:`🎨 colours`}},progressColorTo:{control:{type:`color`},table:{category:`🎨 colours`}},trackColor:{control:{type:`color`},table:{category:`🎨 colours`}},progressGradient:{table:{category:`🎨 colours`}},trackGradient:{table:{category:`🎨 colours`}},arcStart:{control:{type:`range`,min:180.5,max:359,step:.5},defaultValue:225,table:{category:`🌙 feature`}},arcEnd:{control:{type:`range`,min:1,max:180,step:.5},defaultValue:135,table:{category:`🌙 feature`}},knobRingRadius:{control:{type:`range`,min:.01,max:1,step:.01},defaultValue:.5,table:{category:`🏗️ size`}},knobSize:{control:{type:`range`,min:.5,max:100,step:.25},defaultValue:36,table:{category:`🏗️ size`}},min:{control:{type:`range`,min:-500,max:10,step:.5},defaultValue:0,table:{category:`🏗️ size`}},max:{control:{type:`range`,min:1,max:500,step:.5},defaultValue:359,table:{category:`🏗️ size`}},progressSize:{control:{type:`range`,min:1,max:48,step:.5},defaultValue:16,table:{category:`🏗️ size`}},keypressStep:{control:{type:`range`,min:1,max:50,step:1},defaultValue:1,table:{category:`🏗️ size`}},trackSize:{control:{type:`range`,min:1,max:48,step:.5},defaultValue:24,table:{category:`🏗️ size`}},width:{control:{type:`range`,min:10,max:600,step:1},defaultValue:280,table:{category:`🏗️ size`}},onChange:{table:{disable:!0}}}},w={args:{...s},argTypes:{arcStart:{table:{disable:!0}},arcEnd:{table:{disable:!0}},isDragging:{table:{disable:!0}},progressGradient:{table:{disable:!0}},trackGradient:{table:{disable:!0}},value:{table:{disable:!0}}},render:e=>(0,g.jsx)(i,{...e})},T={args:{...w.args,knobPosition:90,knobPreset:`top`,onChange:_()},argTypes:{...w.argTypes,knobPosition:{control:{type:`range`,min:0,max:359,step:1},name:`Knob Position (Angle)`,table:{category:`🧭 position`}},knobPreset:{control:`radio`,options:[`top`,`right`,`bottom`,`left`],name:`Knob Position (Preset)`,table:{category:`🧭 position`}}},render:e=>(0,g.jsx)(m,{...e})},E={...w,args:{...w.args,knobPosition:void 0,arcEnd:135,arcStart:225,dataIndex:10,direction:`clockwise`,knobSize:40,label:`Acceleration`,labelAppendCss:{fontSize:`1.25rem`,top:`1rem`},labelFontSize:`1.75rem`,labelValueFontSize:`2.25rem`,labelAppendValue:`ms⁻²`,limitDragRange:!0,max:80,min:0,progressGradient:[{offset:`0%`,stopColor:`#22c55e`},{offset:`45%`,stopColor:`#ffd000`},{offset:`55%`,stopColor:`#ffae00`},{offset:`100%`,stopColor:`#dc2626`}],progressLineCap:`butt`,progressSize:12,trackColor:`#e5e7eb`,trackDraggable:!0,trackSize:24,onChange:_()},argTypes:{knobPosition:{table:{disable:!0}},progressGradient:{table:{disable:!0}},trackGradient:{table:{disable:!0}}},render:e=>{let[t,n]=(0,h.useState)(e.value??e.dataIndex??``);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{...e,onChange:t=>{e.onChange(t),n(t)},knobColor:t>=65?`#dc2626`:t>=30?`#d67921ec`:`#0b9627`,labelColor:t>=65?`#dc2626`:t>=30?`#d67921ec`:`#0b9627`}),(0,g.jsx)(`h2`,{style:{width:`6rem`,height:`5.75rem`,margin:`3.75rem auto 2.75rem`,padding:`0.5rem 0`,fontSize:`2.5rem`,borderRadius:`50%`,boxShadow:t>=65?`0px 0px 16px 8px #ffa1a1`:t>=30?`0px 0px 16px 8px #ffc48dec`:`0px 0px 16px 8px #98ffad`,display:`flex`,justifyContent:`center`,alignItems:`center`,backgroundColor:t>=65?`#ffa1a1`:t>=30?`#ffc48dec`:`#98ffad`},children:t>=65?`🫣`:t>=30?`😬`:`😀`})]})}},D={...w,args:{...w.args,trackDraggable:!0,onChange:_()},play:async({canvasElement:e,args:t,step:n})=>{await n(`Touch track path and provides drag movement`,async()=>{let n=y(e).getByTestId(`svg-element`),r=n.getBoundingClientRect(),i=r.left+r.width/2,a=r.top+r.height/2,o=r.width/2-8,s=i+o,c=a,l=i+o*.866,u=a+o*.5;x.pointerDown(n,{pointerId:1,pointerType:`touch`,clientX:s,clientY:c,pageX:s,pageY:c,button:0,buttons:1,isPrimary:!0}),await new Promise(e=>setTimeout(e,60)),x.pointerMove(window,{pointerId:1,pointerType:`touch`,clientX:l,clientY:u,pageX:l,pageY:u,button:0,buttons:1,isPrimary:!0}),x.pointerUp(window,{pointerId:1,pointerType:`touch`}),await b(()=>v(t.onChange).toHaveBeenCalledTimes(1))})}},O={...w,args:{...w.args,arcEnd:135,arcStart:225,dataIndex:10,direction:`clockwise`,knobSize:60,max:250,min:0,progressLineCap:`butt`,progressSize:24,trackColor:`#e5e7eb`,trackDraggable:!0,trackSize:24,width:250,onChange:_()},render:e=>(0,g.jsx)(i,{...e}),play:async({canvasElement:e,args:t,step:n})=>{await n(`Touch track path and provides drag movement to progress slider`,async()=>{let n=y(e),r=n.getByTestId(`svg-element`),i=n.getByTestId(`svg-progress-foreign-object`),a=r.getBoundingClientRect(),o=a.left+a.width/2,s=a.top+a.height/2,c=a.width/2-t.trackSize/2,l=o+c,u=s,d=o+c*.866,f=s+c*.5;x.pointerDown(i,{pointerId:1,pointerType:`touch`,clientX:l,clientY:u,pageX:l,pageY:u,button:0,buttons:1,isPrimary:!0}),await new Promise(e=>setTimeout(e,50)),x.pointerMove(window,{pointerId:1,pointerType:`touch`,clientX:d,clientY:f,pageX:d,pageY:f,button:0,buttons:1,isPrimary:!0}),x.pointerUp(window,{pointerId:1,pointerType:`touch`}),await v(t.onChange).toHaveBeenCalledTimes(1)})}},k={...w,args:{...w.args,onChange:_(),knobPosition:30},play:async({canvasElement:e,args:t})=>{let n=()=>y(e).getByTestId(`circular-slider`);n().focus(),v(document.activeElement).toBe(n()),x.keyDown(n(),{key:`ArrowRight`,code:`ArrowRight`,keyCode:39,charCode:39}),await b(()=>v(t.onChange).toHaveBeenCalledTimes(1)),await new Promise(e=>setTimeout(e,60)),n().focus(),x.keyDown(n(),{key:`ArrowRight`,code:`ArrowRight`,keyCode:39,charCode:39}),await b(()=>v(t.onChange).toHaveBeenCalledTimes(2)),await new Promise(e=>setTimeout(e,60)),n().focus(),x.keyDown(n(),{key:`Home`,code:`Home`,keyCode:36,charCode:36}),await b(()=>v(t.onChange).toHaveBeenCalledTimes(3))}},A={...w,play:async({canvasElement:e})=>{let t=y(e).getByTestId(`svg-progress-foreign-object`);x.keyDown(t,{key:`ArrowRight`,code:`ArrowRight`}),t.focus(),x.keyDown(t,{key:`a`,code:`KeyA`})}},j={...w,args:{...w.args,data:[`apple`,`banana`,`orange`],knobPosition:`grape`},play:async({canvasElement:e})=>{let t=y(e).getByTestId(`svg-progress-foreign-object`);t.focus(),x.keyDown(t,{key:`ArrowRight`,code:`ArrowRight`})}},M={...w,args:{...w.args,onChange:_(),knobPosition:30},play:async({canvasElement:e})=>{let t=()=>y(e).getByTestId(`circular-slider`);t().focus(),x.keyDown(t(),{key:`a`,code:`KeyA`})}},N={...w,args:{...w.args,onChange:_(),data:[`apple`,`banana`,`orange`],knobPosition:`grape`},play:async({canvasElement:e})=>{let t=()=>y(e).getByTestId(`circular-slider`);t().focus(),x.keyDown(t(),{key:`ArrowRight`,code:`ArrowRight`,keyCode:39})}},P={...w,args:{...w.args,onChange:_(),limitDragRange:!1,dataIndex:359},render:e=>(0,g.jsx)(i,{...e}),play:async({canvasElement:e,args:t})=>{let n=()=>y(e).getByTestId(`circular-slider`);n().focus(),v(document.activeElement).toBe(n()),x.keyDown(n(),{key:`ArrowRight`,code:`ArrowRight`,keyCode:39,charCode:39}),await b(()=>v(t.onChange).toHaveBeenCalledTimes(1)),await v(y(e).getByText(`0`)).toBeInTheDocument()}},F={...w,args:{...w.args,onChange:_(),limitDragRange:!0,dataIndex:359},render:e=>(0,g.jsx)(i,{...e}),play:async({canvasElement:e,args:t})=>{let n=()=>y(e).getByTestId(`circular-slider`);n().focus(),v(document.activeElement).toBe(n()),x.keyDown(n(),{key:`ArrowRight`,code:`ArrowRight`,keyCode:39,charCode:39}),await b(()=>v(t.onChange).toHaveBeenCalledTimes(1)),await v(y(e).getByText(`359`)).toBeInTheDocument()}},I={...w,play:async()=>{let e={data:[0,50,100],label:0},t={hasArc:!0,arcStart:90,arcEnd:270,limitDragRange:!1};f({radians:0,fromDrag:!0,state:e,props:t}),f({radians:5.236,fromDrag:!0,state:e,props:t}),f({radians:3.14159,fromDrag:!0,state:e,props:t});let n={hasArc:!0,arcStart:270,arcEnd:90,limitDragRange:!1};f({radians:1.745,fromDrag:!0,state:e,props:n}),f({radians:4.538,fromDrag:!0,state:e,props:n}),f({radians:1.57,fromDrag:!0,state:{data:[0,50,100],label:0,mounted:!0},props:{hasArc:!0,arcStart:0,arcEnd:360,direction:`anti-clockwise`}}),a(`non-existent-value`,{data:[10,20,30]},{min:0,max:100,hasArc:!0,arcStart:0,arcEnd:360}),o(-.7724896069078283,{hasArc:!0,knobOffset:0},{data:[1,2,3,4,5,6,7,8,9,10],min:0,max:100,arcStart:0,arcEnd:0})}},L={args:{trackDraggable:!0,direction:`anti-clockwise`,knobPosition:0,limitDragRange:!0,progressSize:16,trackSize:24,width:280,onChange:_()},play:async({canvasElement:e,args:t})=>{let n=y(e).getByTestId(`svg-progress-foreign-object`),r=Math.PI/180*330,i=n.getBoundingClientRect(),a=i.left+i.width/2,o=i.top+i.height/2,s=i.width/2-t.trackSize/2,c=a+s,l=o;x.pointerDown(n,{pointerId:1,pointerType:`touch`,clientX:c,clientY:l,button:0,buttons:1,isPrimary:!0}),await new Promise(e=>setTimeout(e,10)),x.pointerMove(window,{pointerId:1,pointerType:`touch`,clientX:a+s*Math.cos(r),clientY:o+s*Math.sin(r),pageX:a+s*Math.cos(r),pageY:o+s*Math.sin(r),button:0,buttons:1,isPrimary:!0}),x.pointerUp(window,{pointerId:1,pointerType:`touch`}),await v(t.onChange).toHaveBeenCalledTimes(1)}},R={args:{trackDraggable:!0,direction:`clockwise`,knobPosition:0,limitDragRange:!0,width:280,trackSize:24,onChange:_()},play:async({canvasElement:e,args:t})=>{let n=y(e).getByTestId(`svg-progress-foreign-object`),r=n.getBoundingClientRect(),i=r.left+r.width/2,a=r.top+r.height/2,o=r.width/2-t.trackSize/2;x.pointerDown(n,{pointerId:1,pointerType:`mouse`,button:0,buttons:1,isPrimary:!0,clientX:i+o,clientY:a}),await new Promise(e=>setTimeout(e,10));let s=-5e-4;x.pointerMove(window,{pointerId:1,pointerType:`mouse`,button:0,buttons:1,isPrimary:!0,clientX:i+o*Math.cos(s),clientY:a+o*Math.sin(s),pageX:i+o*Math.cos(s),pageY:a+o*Math.sin(s)}),x.pointerUp(window,{pointerId:1,pointerType:`mouse`})}},z={args:{width:280,trackSize:24,progressSize:16,trackDraggable:!0,knobDraggable:!0,onChange:_()},play:async({canvasElement:e,args:t})=>{typeof t.onChange?.mockClear==`function`&&t.onChange.mockClear();let n=y(e),r=n.getByTestId(`svg-element`),i=n.getByTestId(`svg-progress-foreign-object`),a=r.getBoundingClientRect(),o=a.left+a.width/2,s=a.top+a.height/2,c=a.width/2-t.trackSize/2,l=o+c,u=s,d=o+c*.866,f=s+c*.5;x.pointerUp(window,{pointerId:1,pointerType:`mouse`}),x.pointerMove(window,{pointerId:1,pointerType:`mouse`,clientX:d,clientY:f}),await v(t.onChange).not.toHaveBeenCalled(),x.pointerDown(i,{pointerId:1,pointerType:`mouse`,clientX:l,clientY:u,button:0,buttons:1,isPrimary:!0}),await new Promise(e=>setTimeout(e,50)),x.pointerDown(i,{pointerId:1,pointerType:`mouse`,clientX:l,clientY:u,button:0,buttons:1,isPrimary:!0}),x.pointerMove(window,{pointerId:1,pointerType:`mouse`,clientX:d,clientY:f,button:0,buttons:1,isPrimary:!0}),x.pointerUp(window,{pointerId:1,pointerType:`mouse`}),await v(t.onChange).toHaveBeenCalledTimes(1)}},B={args:{arcStart:90,arcEnd:270,knobPosition:50,width:280,trackSize:24,progressSize:16,trackDraggable:!0,knobDraggable:!0,onChange:_()},beforeEach:()=>{let e=S(console,`warn`).mockImplementation(()=>{});return()=>{e.mockRestore()}},play:async()=>{await v(console.warn).toHaveBeenCalledWith(l.KNOB_POSITIONING_WARNING),await v(console.warn).toHaveBeenCalledTimes(1)}},V={args:{min:0,max:100,trackDraggable:!0},render:e=>{let[t,n]=(0,h.useState)(10),[r,a]=(0,h.useState)(0);return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`button`,{"data-testid":`update-value-btn`,onClick:()=>n(80),style:{display:`none`}}),(0,g.jsx)(`button`,{"data-testid":`update-index-btn`,onClick:()=>a(5),style:{display:`none`}}),(0,g.jsx)(i,{...e,value:t,dataIndex:r})]})},play:async({canvasElement:e})=>{let t=y(e),n=t.getByTestId(`update-value-btn`),r=t.getByTestId(`update-index-btn`),i=t.getByTestId(`svg-progress-foreign-object`);x.click(n),await new Promise(e=>setTimeout(e,50));let a=t.getByText(`80`);await v(a).toBeInTheDocument(),x.pointerDown(i,{pointerId:1,pointerType:`mouse`,button:0,buttons:1,isPrimary:!0}),await new Promise(e=>setTimeout(e,50)),x.click(r),await new Promise(e=>setTimeout(e,50)),await v(t.queryByText(`50`)).not.toBeInTheDocument(),x.pointerUp(window,{pointerId:1,pointerType:`mouse`})}},H={args:{trackDraggable:!0,limitDragRange:!0,arcStart:90,arcEnd:270,width:280,trackSize:24},play:async({canvasElement:e,args:t})=>{let n=y(e).getByTestId(`svg-progress-foreign-object`),r=n.getBoundingClientRect(),i=r.left+r.width/2,a=r.top+r.height/2,o=r.width/2-t.trackSize/2;x.pointerDown(n,{pointerId:1,pointerType:`mouse`,button:0,buttons:1,isPrimary:!0,clientX:i,clientY:a+o}),await new Promise(e=>setTimeout(e,10)),x.pointerMove(window,{pointerId:1,pointerType:`mouse`,button:0,buttons:1,isPrimary:!0,clientX:i,clientY:a-o,pageX:i,pageY:a-o}),x.pointerUp(window,{pointerId:1,pointerType:`mouse`})}},U={args:{trackDraggable:!0,limitDragRange:!0,width:280,trackSize:24,knobPosition:0},play:async({canvasElement:e,args:t})=>{let n=y(e).getByTestId(`svg-progress-foreign-object`),r=n.getBoundingClientRect(),i=r.left+r.width/2,a=r.top+r.height/2,o=r.width/2-t.trackSize/2;x.pointerDown(n,{pointerId:1,pointerType:`mouse`,button:0,buttons:1,isPrimary:!0,clientX:i+o,clientY:a}),await new Promise(e=>setTimeout(e,10));let s=Math.PI/180*190;x.pointerMove(window,{pointerId:1,pointerType:`mouse`,button:0,buttons:1,isPrimary:!0,clientX:i+o*Math.cos(s),clientY:a+o*Math.sin(s),pageX:i+o*Math.cos(s),pageY:a+o*Math.sin(s)}),x.pointerUp(window,{pointerId:1,pointerType:`mouse`})}},W=[`Default`,`ArcSlider`,`PointerDraggingTest`,`ArcSliderMovesWithTouchTest`,`KeyboardNavigationTest`,`KeyboardEarlyReturnsTest`,`KeyboardInvalidDataTest`,`KeyboardInvalidKeyTest`,`KeyboardInvalidDataIndexTest`,`KeyboardUnlimitedNavigationTest`,`KeyboardLimitedNavigationTest`,`ArcConstraintMathBranchesTest`,`AntiClockwiseDragTest`,`ClockwiseNegativeWrapTest`,`InteractionHandlersGuardTest`,`ConflictingPropsWarningTest`,`PropSyncEffectTest`,`ArcDeadzoneClampTest`,`JumpLimiterAbortTest`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...BaseConfig.args,
    knobPosition: 90,
    knobPreset: 'top',
    onChange: fn()
  },
  argTypes: {
    ...BaseConfig.argTypes,
    knobPosition: {
      control: {
        type: 'range',
        min: 0,
        max: 359,
        step: 1
      },
      name: 'Knob Position (Angle)',
      table: {
        category: '🧭 position'
      }
    },
    knobPreset: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
      name: 'Knob Position (Preset)',
      table: {
        category: '🧭 position'
      }
    }
  },
  render: args => <DualControlWrapper {...args} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...BaseConfig,
  args: {
    ...BaseConfig.args,
    knobPosition: undefined,
    arcEnd: 135,
    arcStart: 225,
    dataIndex: 10,
    direction: 'clockwise',
    knobSize: 40,
    label: 'Acceleration',
    labelAppendCss: {
      fontSize: '1.25rem',
      top: '1rem'
    },
    labelFontSize: '1.75rem',
    labelValueFontSize: '2.25rem',
    labelAppendValue: 'ms⁻²',
    limitDragRange: true,
    max: 80,
    min: 0,
    progressGradient: [{
      offset: '0%',
      stopColor: '#22c55e'
    }, {
      offset: '45%',
      stopColor: '#ffd000'
    }, {
      offset: '55%',
      stopColor: '#ffae00'
    }, {
      offset: '100%',
      stopColor: '#dc2626'
    }],
    progressLineCap: 'butt',
    progressSize: 12,
    trackColor: '#e5e7eb',
    trackDraggable: true,
    trackSize: 24,
    onChange: fn()
  },
  argTypes: {
    knobPosition: {
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
  render: args => {
    // Initialize state with default props if available
    const [value, setValue] = useState(args.value ?? args.dataIndex ?? '');
    return <>
                <CircularSlider {...args} onChange={val => {
        args.onChange(val); // Preserves Storybook fn() tracking
        setValue(val);
      }} knobColor={value >= 65 ? '#dc2626' : value >= 30 ? '#d67921ec' : '#0b9627'} labelColor={value >= 65 ? '#dc2626' : value >= 30 ? '#d67921ec' : '#0b9627'} />
                <h2 style={{
        width: '6rem',
        height: '5.75rem',
        margin: '3.75rem auto 2.75rem',
        padding: '0.5rem 0',
        fontSize: '2.5rem',
        borderRadius: '50%',
        boxShadow: value >= 65 ? '0px 0px 16px 8px #ffa1a1' : value >= 30 ? '0px 0px 16px 8px #ffc48dec' : '0px 0px 16px 8px #98ffad',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: value >= 65 ? '#ffa1a1' : value >= 30 ? '#ffc48dec' : '#98ffad'
      }}>
                    {value >= 65 ? '🫣' : value >= 30 ? '😬' : '😀'}
                </h2>
            </>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  // tags: ['!dev'],
  ...BaseConfig,
  args: {
    ...BaseConfig.args,
    trackDraggable: true,
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    await step('Touch track path and provides drag movement', async () => {
      const canvas = within(canvasElement);

      // Target the SVG that holds the onPointerDown listener!
      const targetElement = canvas.getByTestId('svg-element');
      const rect = targetElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // To ensure the track is hit, subtract exactly half the stroke width.
      // Assumes default trackSize/progressSize is ~16px:
      const assumedStroke = 16;
      const dragRadius = rect.width / 2 - assumedStroke / 2;

      // This places the click on the right-middle edge exactly on the track
      const startX = centerX + dragRadius;
      const startY = centerY;

      // Move slightly along the curve
      const moveX = centerX + dragRadius * 0.866;
      const moveY = centerY + dragRadius * 0.5;

      // Fire on the correct targetElement
      fireEvent.pointerDown(targetElement, {
        pointerId: 1,
        pointerType: 'touch',
        clientX: startX,
        clientY: startY,
        pageX: startX,
        pageY: startY,
        button: 0,
        buttons: 1,
        isPrimary: true
      });

      // Allow React time to process \`handleClick\` and update \`isDragging\` to true
      await new Promise(resolve => setTimeout(resolve, 60));

      // Fire move globally (as users can drag their mouse outside the SVG)
      fireEvent.pointerMove(window, {
        pointerId: 1,
        pointerType: 'touch',
        clientX: moveX,
        clientY: moveY,
        pageX: moveX,
        pageY: moveY,
        button: 0,
        buttons: 1,
        isPrimary: true
      });
      fireEvent.pointerUp(window, {
        pointerId: 1,
        pointerType: 'touch'
      });
      await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...BaseConfig,
  args: {
    ...BaseConfig.args,
    arcEnd: 135,
    arcStart: 225,
    dataIndex: 10,
    direction: 'clockwise',
    knobSize: 60,
    max: 250,
    min: 0,
    progressLineCap: 'butt',
    progressSize: 24,
    trackColor: '#e5e7eb',
    trackDraggable: true,
    trackSize: 24,
    width: 250,
    onChange: fn()
  },
  render: args => {
    return <CircularSlider {...args} />;
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    await step('Touch track path and provides drag movement to progress slider', async () => {
      const canvas = within(canvasElement);

      // Target the ROOT SVG container so we measure the full 280x280 circle!
      const svgElement = canvas.getByTestId('svg-element');

      // Note: If you need to click the knob specifically, you still measure the svgElement
      // to find the circle's center, but pass the foreign-object to fireEvent!
      const targetElement = canvas.getByTestId('svg-progress-foreign-object');
      const rect = svgElement.getBoundingClientRect(); // Measure the whole circle
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Exact math to land perfectly on the track, bypassing the dead-zone
      const dragRadius = rect.width / 2 - args.trackSize / 2;

      // 3 o'clock starting position
      const startX = centerX + dragRadius;
      const startY = centerY;

      // 4 o'clock move position
      const moveX = centerX + dragRadius * 0.866;
      const moveY = centerY + dragRadius * 0.5;

      // Click the target element
      fireEvent.pointerDown(targetElement, {
        pointerId: 1,
        pointerType: 'touch',
        clientX: startX,
        clientY: startY,
        pageX: startX,
        pageY: startY,
        button: 0,
        buttons: 1,
        isPrimary: true
      });

      // Give the real browser enough time to attach window event listeners!
      await new Promise(resolve => setTimeout(resolve, 50));
      fireEvent.pointerMove(window, {
        pointerId: 1,
        pointerType: 'touch',
        clientX: moveX,
        clientY: moveY,
        pageX: moveX,
        pageY: moveY,
        button: 0,
        buttons: 1,
        isPrimary: true
      });
      fireEvent.pointerUp(window, {
        pointerId: 1,
        pointerType: 'touch'
      });
      await expect(args.onChange).toHaveBeenCalledTimes(1);
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  // tags: ['!dev'],
  ...BaseConfig,
  args: {
    ...BaseConfig.args,
    onChange: fn(),
    knobPosition: 30
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const getSlider = () => within(canvasElement).getByTestId('circular-slider');

    // 1. Initial Focus
    getSlider().focus();
    expect(document.activeElement).toBe(getSlider());

    // --- First Keypress ---
    fireEvent.keyDown(getSlider(), {
      key: 'ArrowRight',
      code: 'ArrowRight',
      keyCode: 39,
      charCode: 39
    });
    await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));

    // Wait > 50ms to pass the component's throttle debouncer!
    await new Promise(resolve => setTimeout(resolve, 60));

    // --- Second Keypress ---
    getSlider().focus();
    fireEvent.keyDown(getSlider(), {
      key: 'ArrowRight',
      code: 'ArrowRight',
      keyCode: 39,
      charCode: 39
    });
    await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(2));

    // Wait another 60ms for the throttle
    await new Promise(resolve => setTimeout(resolve, 60));

    // --- Third Keypress (Home) ---
    getSlider().focus();
    fireEvent.keyDown(getSlider(), {
      key: 'Home',
      code: 'Home',
      keyCode: 36,
      charCode: 36
    });
    await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(3));
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...BaseConfig,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const targetElement = canvas.getByTestId('svg-progress-foreign-object');

    // Step A: Unfocused (No focus call made)
    fireEvent.keyDown(targetElement, {
      key: 'ArrowRight',
      code: 'ArrowRight'
    });

    // Step B: Focused, but invalid key
    targetElement.focus();
    fireEvent.keyDown(targetElement, {
      key: 'a',
      code: 'KeyA'
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...BaseConfig,
  args: {
    ...BaseConfig.args,
    data: ['apple', 'banana', 'orange'],
    // Inject custom data array
    knobPosition: 'grape' // Inject a bad value
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const targetElement = canvas.getByTestId('svg-progress-foreign-object');
    targetElement.focus();
    fireEvent.keyDown(targetElement, {
      key: 'ArrowRight',
      code: 'ArrowRight'
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...BaseConfig,
  args: {
    ...BaseConfig.args,
    onChange: fn(),
    knobPosition: 30
  },
  play: async ({
    canvasElement
  }) => {
    const getSlider = () => within(canvasElement).getByTestId('circular-slider');

    // Focus the slider so it passes the activeElement check
    getSlider().focus();

    // Fire an invalid key ('a'). This will pass the throttle (it's the 1st event),
    // pass the activeElement check, and hit: if (!validKeys.includes(event.key)) return;
    fireEvent.keyDown(getSlider(), {
      key: 'a',
      code: 'KeyA'
    });
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...BaseConfig,
  args: {
    ...BaseConfig.args,
    onChange: fn(),
    data: ['apple', 'banana', 'orange'],
    knobPosition: 'grape' // Forces state.label to something not in data array -> indexOf returns -1
  },
  play: async ({
    canvasElement
  }) => {
    const getSlider = () => within(canvasElement).getByTestId('circular-slider');
    getSlider().focus();

    // Fire a valid key. It passes throttle, passes activeElement,
    // but hits: if (currentIndex === -1) return; and safely aborts!
    fireEvent.keyDown(getSlider(), {
      key: 'ArrowRight',
      code: 'ArrowRight',
      keyCode: 39
    });
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...BaseConfig,
  args: {
    ...BaseConfig.args,
    onChange: fn(),
    limitDragRange: false,
    dataIndex: 359
  },
  render: args => <CircularSlider {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const getSlider = () => within(canvasElement).getByTestId('circular-slider');
    getSlider().focus();
    expect(document.activeElement).toBe(getSlider());

    // Pressing ArrowRight while at the max value with limitDragRange=false
    // will trigger the wrap-around logic to 0, hitting your 'else' block!
    fireEvent.keyDown(getSlider(), {
      key: 'ArrowRight',
      code: 'ArrowRight',
      keyCode: 39,
      charCode: 39
    });
    await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
    await expect(within(canvasElement).getByText('0')).toBeInTheDocument();
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  ...BaseConfig,
  args: {
    ...BaseConfig.args,
    onChange: fn(),
    limitDragRange: true,
    dataIndex: 359
  },
  render: args => <CircularSlider {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const getSlider = () => within(canvasElement).getByTestId('circular-slider');
    getSlider().focus();
    expect(document.activeElement).toBe(getSlider());

    // Pressing ArrowRight while at the max value with limitDragRange=false
    // will trigger the wrap-around logic to 0, hitting your 'else' block!
    fireEvent.keyDown(getSlider(), {
      key: 'ArrowRight',
      code: 'ArrowRight',
      keyCode: 39,
      charCode: 39
    });
    await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
    await expect(within(canvasElement).getByText('359')).toBeInTheDocument();
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...BaseConfig,
  play: async () => {
    const mockState = {
      data: [0, 50, 100],
      label: 0
    };

    // --------------------------------------------------
    // 1. Standard Arc: physicalDegrees outside & inside bounds
    // --------------------------------------------------
    const standardProps = {
      hasArc: true,
      arcStart: 90,
      arcEnd: 270,
      limitDragRange: false
    };

    // 1a. Too small (< 90°) -> triggers: physicalDegrees < normalizedArcStart
    calculateSliderPosition({
      radians: 0,
      fromDrag: true,
      state: mockState,
      props: standardProps
    });

    // 1b. Too large (> 270°) -> triggers: else if (physicalDegrees > normalizedArcEnd)
    calculateSliderPosition({
      radians: 5.236,
      // ~300 degrees
      fromDrag: true,
      state: mockState,
      props: standardProps
    });

    // 1c. Inside the arc (between 90° and 270°) -> hits the fall-through (both ifs false)
    calculateSliderPosition({
      radians: 3.14159,
      // ~180 degrees (safely inside the arc)
      fromDrag: true,
      state: mockState,
      props: standardProps
    });

    // --------------------------------------------------
    // 2. Boundary-Crossing Arc: Dead Zone & Ternary Clamping
    // --------------------------------------------------
    const crossingProps = {
      hasArc: true,
      arcStart: 270,
      arcEnd: 90,
      limitDragRange: false
    };

    // 2a. Closer to arcEnd (90°)
    calculateSliderPosition({
      radians: 1.745,
      // ~100 degrees
      fromDrag: true,
      state: mockState,
      props: crossingProps
    });

    // 2b. Closer to arcStart (270°)
    calculateSliderPosition({
      radians: 4.538,
      // ~260 degrees
      fromDrag: true,
      state: mockState,
      props: crossingProps
    });

    // --------------------------------------------------
    // 3. Anti-clockwise direction check
    // --------------------------------------------------
    calculateSliderPosition({
      radians: 1.57,
      // ~90 degrees
      fromDrag: true,
      state: {
        data: [0, 50, 100],
        label: 0,
        mounted: true
      },
      props: {
        hasArc: true,
        // Keep arc enabled so arc variables exist
        arcStart: 0,
        // Provide valid numbers so it doesn't crash
        arcEnd: 360,
        direction: 'anti-clockwise'
      }
    });

    // --------------------------------------------------
    // 4. Fallback when value is missing from data array
    // --------------------------------------------------
    getRadiansFromValue('non-existent-value',
    // A value guaranteed not to be in the array
    {
      data: [10, 20, 30]
    }, {
      min: 0,
      max: 100,
      hasArc: true,
      arcStart: 0,
      arcEnd: 360
    });

    // --------------------------------------------------
    // 5. Fallback when arcSpan is 0
    // --------------------------------------------------
    getValueFromRadians(-0.7724896069078283, {
      hasArc: true,
      // MUST be in state object
      knobOffset: 0
    }, {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      // MUST be in props object
      min: 0,
      max: 100,
      arcStart: 0,
      arcEnd: 0
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    trackDraggable: true,
    direction: 'anti-clockwise',
    knobPosition: 0,
    limitDragRange: true,
    progressSize: 16,
    trackSize: 24,
    width: 280,
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const targetElement = canvas.getByTestId('svg-progress-foreign-object'); // or 'svg-element' if testing the wrapper

    const angleInRadians = 330 * (Math.PI / 180);
    const rect = targetElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // calculate dragRadius to hit the exact center of the SVG track line
    const dragRadius = rect.width / 2 - args.trackSize / 2; // 140 - 12 = 128

    const startX = centerX + dragRadius; // 3 o'clock (0 degrees)
    const startY = centerY;
    fireEvent.pointerDown(targetElement, {
      pointerId: 1,
      pointerType: 'touch',
      clientX: startX,
      clientY: startY,
      button: 0,
      buttons: 1,
      isPrimary: true
    });
    await new Promise(resolve => setTimeout(resolve, 10));
    fireEvent.pointerMove(window, {
      pointerId: 1,
      pointerType: 'touch',
      clientX: centerX + dragRadius * Math.cos(angleInRadians),
      clientY: centerY + dragRadius * Math.sin(angleInRadians),
      pageX: centerX + dragRadius * Math.cos(angleInRadians),
      pageY: centerY + dragRadius * Math.sin(angleInRadians),
      button: 0,
      buttons: 1,
      isPrimary: true
    });
    fireEvent.pointerUp(window, {
      pointerId: 1,
      pointerType: 'touch'
    });
    await expect(args.onChange).toHaveBeenCalledTimes(1);
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    trackDraggable: true,
    direction: 'clockwise',
    knobPosition: 0,
    limitDragRange: true,
    width: 280,
    trackSize: 24,
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const targetElement = canvas.getByTestId('svg-progress-foreign-object');
    const rect = targetElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dragRadius = rect.width / 2 - args.trackSize / 2;

    // Pointer Down at 0 degrees (3 o'clock)
    fireEvent.pointerDown(targetElement, {
      pointerId: 1,
      pointerType: 'mouse',
      button: 0,
      buttons: 1,
      isPrimary: true,
      clientX: centerX + dragRadius,
      clientY: centerY
    });

    // Wait for state.isDragging to become true
    await new Promise(resolve => setTimeout(resolve, 10));

    // Move slightly into negative Y to trigger the wrapping math
    const tinyNegativeAngle = -0.0005;
    fireEvent.pointerMove(window, {
      pointerId: 1,
      pointerType: 'mouse',
      button: 0,
      buttons: 1,
      isPrimary: true,
      clientX: centerX + dragRadius * Math.cos(tinyNegativeAngle),
      clientY: centerY + dragRadius * Math.sin(tinyNegativeAngle),
      pageX: centerX + dragRadius * Math.cos(tinyNegativeAngle),
      pageY: centerY + dragRadius * Math.sin(tinyNegativeAngle)
    });
    fireEvent.pointerUp(window, {
      pointerId: 1,
      pointerType: 'mouse'
    });
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    width: 280,
    trackSize: 24,
    progressSize: 16,
    trackDraggable: true,
    knobDraggable: true,
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    if (typeof args.onChange?.mockClear === 'function') {
      args.onChange.mockClear();
    }
    const canvas = within(canvasElement);
    const svgElement = canvas.getByTestId('svg-element');
    const targetElement = canvas.getByTestId('svg-progress-foreign-object');
    const rect = svgElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dragRadius = rect.width / 2 - args.trackSize / 2;
    const startX = centerX + dragRadius;
    const startY = centerY;
    const moveX = centerX + dragRadius * 0.866; // 30 degrees
    const moveY = centerY + dragRadius * 0.5;

    // ------------------------------------------------------------------
    // CHECK 1: onPointerUp when NOT dragging (state.isDragging === false)
    // Hits: if (!state.isDragging) return;
    // ------------------------------------------------------------------
    fireEvent.pointerUp(window, {
      pointerId: 1,
      pointerType: 'mouse'
    });

    // ------------------------------------------------------------------
    // CHECK 2: onPointerMove when NOT dragging (state.isDragging === false)
    // Hits: if (!state.isDragging || ...) return;
    // ------------------------------------------------------------------
    fireEvent.pointerMove(window, {
      pointerId: 1,
      pointerType: 'mouse',
      clientX: moveX,
      clientY: moveY
    });

    // Ensure onChange was NOT called during the above early returns
    await expect(args.onChange).not.toHaveBeenCalled();

    // ------------------------------------------------------------------
    // START DRAGGING: Set state.isDragging = true
    // ------------------------------------------------------------------
    fireEvent.pointerDown(targetElement, {
      pointerId: 1,
      pointerType: 'mouse',
      clientX: startX,
      clientY: startY,
      button: 0,
      buttons: 1,
      isPrimary: true
    });

    // Wait for React reducer state update (isDragging = true)
    await new Promise(resolve => setTimeout(resolve, 50));

    // ------------------------------------------------------------------
    // CHECK 3: onPointerDown when ALREADY dragging (state.isDragging === true)
    // Hits: if (state.isDragging) return;
    // ------------------------------------------------------------------
    fireEvent.pointerDown(targetElement, {
      pointerId: 1,
      pointerType: 'mouse',
      clientX: startX,
      clientY: startY,
      button: 0,
      buttons: 1,
      isPrimary: true
    });

    // ------------------------------------------------------------------
    // CHECK 4: Valid onPointerMove while dragging (executes getOffset)
    // Hits: getOffset(ref) and calculates bounding client rect
    // ------------------------------------------------------------------
    fireEvent.pointerMove(window, {
      pointerId: 1,
      pointerType: 'mouse',
      clientX: moveX,
      clientY: moveY,
      button: 0,
      buttons: 1,
      isPrimary: true
    });

    // ------------------------------------------------------------------
    // CLEANUP: Fire pointerUp to reset drag state back to false
    // ------------------------------------------------------------------
    fireEvent.pointerUp(window, {
      pointerId: 1,
      pointerType: 'mouse'
    });

    // Assert that the single valid drag move fired onChange exactly once
    await expect(args.onChange).toHaveBeenCalledTimes(1);
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    arcStart: 90,
    arcEnd: 270,
    knobPosition: 50,
    width: 280,
    trackSize: 24,
    progressSize: 16,
    trackDraggable: true,
    knobDraggable: true,
    onChange: fn()
  },
  beforeEach: () => {
    // set up the spy BEFORE the component mounts
    const consoleSpy = spyOn(console, 'warn').mockImplementation(() => {});

    // return a cleanup function so the spy is removed after the test
    return () => {
      consoleSpy.mockRestore();
    };
  },
  play: async () => {
    // by the time play runs, useEffect has already fired,
    // so you can assert that the spy caught it.
    await expect(console.warn).toHaveBeenCalledWith(constants.KNOB_POSITIONING_WARNING);

    // Assert it only fired exactly once
    await expect(console.warn).toHaveBeenCalledTimes(1);
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    trackDraggable: true
  },
  // create a stateful wrapper to dynamically change props
  render: args => {
    const [value, setValue] = useState(10);
    const [dataIndex, setDataIndex] = useState(0);
    return <div>
                {/* Hidden buttons purely for the play function to trigger prop changes */}
                <button data-testid="update-value-btn" onClick={() => setValue(80)} style={{
        display: 'none'
      }} />
                <button data-testid="update-index-btn" onClick={() => setDataIndex(5)} style={{
        display: 'none'
      }} />

                {/* The component receives the dynamic state as props */}
                <CircularSlider {...args} value={value} dataIndex={dataIndex} />
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const updateValueBtn = canvas.getByTestId('update-value-btn');
    const updateIndexBtn = canvas.getByTestId('update-index-btn');
    const targetElement = canvas.getByTestId('svg-progress-foreign-object');

    // ------------------------------------------------------------------
    // CHECK 1: Prop change when NOT dragging -> SHOULD update position
    // ------------------------------------------------------------------
    fireEvent.click(updateValueBtn); // Changes value 10 -> 80

    // Wait a tick for React to run the useEffect and update state
    await new Promise(resolve => setTimeout(resolve, 50));

    // ASSERTION: Verify the component visually updated to 80.
    const labelText = canvas.getByText('80');
    await expect(labelText).toBeInTheDocument();

    // ------------------------------------------------------------------
    // CHECK 2: Prop change WHILE dragging -> SHOULD abort (early return)
    // ------------------------------------------------------------------
    // Simulate grabbing the knob (sets state.isDragging = true)
    fireEvent.pointerDown(targetElement, {
      pointerId: 1,
      pointerType: 'mouse',
      button: 0,
      buttons: 1,
      isPrimary: true
    });
    await new Promise(resolve => setTimeout(resolve, 50));

    // Fire a prop update (changes dataIndex 0 -> 5)
    fireEvent.click(updateIndexBtn);
    await new Promise(resolve => setTimeout(resolve, 50));

    // ASSERTION: Because we are dragging, the useEffect(() => {if (!state.mounted || state.isDragging) return; ...)
    // will resolve to 'return;'.
    // The component should NOT have updated visually.
    // (Assuming index 5 correlates to a specific value, e.g., '50', that value should NOT be in the document)
    await expect(canvas.queryByText('50')).not.toBeInTheDocument();

    // ------------------------------------------------------------------
    // CLEANUP
    // ------------------------------------------------------------------
    fireEvent.pointerUp(window, {
      pointerId: 1,
      pointerType: 'mouse'
    });
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    trackDraggable: true,
    limitDragRange: true,
    arcStart: 90,
    // Bottom half arc
    arcEnd: 270,
    width: 280,
    trackSize: 24
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const targetElement = canvas.getByTestId('svg-progress-foreign-object');
    const rect = targetElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dragRadius = rect.width / 2 - args.trackSize / 2;

    // Start safely inside the arc at the bottom (6 o'clock)
    fireEvent.pointerDown(targetElement, {
      pointerId: 1,
      pointerType: 'mouse',
      button: 0,
      buttons: 1,
      isPrimary: true,
      clientX: centerX,
      clientY: centerY + dragRadius // +Y is bottom
    });
    await new Promise(resolve => setTimeout(resolve, 10));

    // Drag straight to the top of the circle (12 o'clock).
    // Since the arc is at the bottom, the top is 100% inside the deadzone gap.
    fireEvent.pointerMove(window, {
      pointerId: 1,
      pointerType: 'mouse',
      button: 0,
      buttons: 1,
      isPrimary: true,
      clientX: centerX,
      clientY: centerY - dragRadius,
      // -Y is top
      pageX: centerX,
      pageY: centerY - dragRadius
    });
    fireEvent.pointerUp(window, {
      pointerId: 1,
      pointerType: 'mouse'
    });
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    trackDraggable: true,
    limitDragRange: true,
    width: 280,
    trackSize: 24,
    knobPosition: 0
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const targetElement = canvas.getByTestId('svg-progress-foreign-object');
    const rect = targetElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dragRadius = rect.width / 2 - args.trackSize / 2;

    // Start at 0 degrees (3 o'clock)
    fireEvent.pointerDown(targetElement, {
      pointerId: 1,
      pointerType: 'mouse',
      button: 0,
      buttons: 1,
      isPrimary: true,
      clientX: centerX + dragRadius,
      clientY: centerY
    });
    await new Promise(resolve => setTimeout(resolve, 10));

    // Simulate user instantly teleporting mouse to 190 degrees
    const jumpAngle = 190 * (Math.PI / 180);
    fireEvent.pointerMove(window, {
      pointerId: 1,
      pointerType: 'mouse',
      button: 0,
      buttons: 1,
      isPrimary: true,
      clientX: centerX + dragRadius * Math.cos(jumpAngle),
      clientY: centerY + dragRadius * Math.sin(jumpAngle),
      pageX: centerX + dragRadius * Math.cos(jumpAngle),
      pageY: centerY + dragRadius * Math.sin(jumpAngle)
    });
    fireEvent.pointerUp(window, {
      pointerId: 1,
      pointerType: 'mouse'
    });
  }
}`,...U.parameters?.docs?.source}}}})))()}G();export{L as AntiClockwiseDragTest,I as ArcConstraintMathBranchesTest,H as ArcDeadzoneClampTest,E as ArcSlider,O as ArcSliderMovesWithTouchTest,R as ClockwiseNegativeWrapTest,B as ConflictingPropsWarningTest,T as Default,z as InteractionHandlersGuardTest,U as JumpLimiterAbortTest,A as KeyboardEarlyReturnsTest,N as KeyboardInvalidDataIndexTest,j as KeyboardInvalidDataTest,M as KeyboardInvalidKeyTest,F as KeyboardLimitedNavigationTest,k as KeyboardNavigationTest,P as KeyboardUnlimitedNavigationTest,D as PointerDraggingTest,V as PropSyncEffectTest,W as __namedExportsOrder,C as default};