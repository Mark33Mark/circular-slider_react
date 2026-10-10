try{
(()=>{var l=["Storybook 11","Layout was forced"],n=s=>function(...e){let t=e.map(o=>o&&typeof o=="object"?o.message||JSON.stringify(o):String(o)).join(" ");l.some(o=>t.includes(o))||s.apply(console,e)};console.warn=n(console.warn);console.error=n(console.error);})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
