import { c as create_ssr_component, o as onDestroy, e as escape } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{color:white;background-color:black;display:flex;justify-content:center;align-items:center;height:100vh}a.svelte-1y79znf{color:white;text-decoration:none}p.svelte-1y79znf{line-height:0.2}.construct.svelte-1y79znf{font-family:sans-serif;letter-spacing:0.05em}.blink.svelte-1y79znf{animation:svelte-1y79znf-blink 1s infinite}@keyframes svelte-1y79znf-blink{0%,49%{opacity:1}50%,100%{opacity:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fontSize = "16px";
  if (typeof window !== "undefined") {
    let resize = function() {
      fontSize = `${Math.max(16, window.innerWidth / 10)}px`;
    };
    document.title = "construct ( );";
    onDestroy(() => {
      window.removeEventListener("resize", resize);
    });
  }
  $$result.css.add(css);
  return `<p class="svelte-1y79znf">Hello, we are Demircan &amp; and Dimitrios. Nice to meet you :)</p>
<br>
<p class="svelte-1y79znf">We are designers &amp; computer scientists from MIT,</p>
<p class="svelte-1y79znf">and founding members of construct ( ); -- a design &amp; tech company based in Cambridge.</p>
<br>
<p class="svelte-1y79znf">We build worlds out of words.</p>
<br>
<p class="svelte-1y79znf">Enter the alpha version by clicking construct ( ); below.</p>
<a href="https://www.w3schools.com" target="_blank" class="svelte-1y79znf"><p class="construct svelte-1y79znf" style="${"font-size: " + escape(fontSize, true) + ";"}">construct(<span class="blink svelte-1y79znf">_</span>);
	</p></a>`;
});
export {
  Page as default
};
