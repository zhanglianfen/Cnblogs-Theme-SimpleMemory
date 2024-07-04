import{_ as a,c as s,o as e,a3 as n}from"./chunks/framework.C16dpgHr.js";const h=JSON.parse('{"title":"文章标题/目录","description":"","frontmatter":{},"headers":[],"relativePath":"guide/articleDirectory.md","filePath":"guide/articleDirectory.md","lastUpdated":1692862703000}'),p={name:"guide/articleDirectory.md"},c=n(`<h1 id="文章标题-目录" tabindex="-1">文章标题/目录 <a class="header-anchor" href="#文章标题-目录" aria-label="Permalink to &quot;文章标题/目录&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>v2 版本中移除了对标题样式的渲染。</p></div><h2 id="关于文章标题" tabindex="-1">关于文章标题 <a class="header-anchor" href="#关于文章标题" aria-label="Permalink to &quot;关于文章标题&quot;">​</a></h2><p>支持标题级别的识别。</p><p>例如我的文章：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 我是 makdown 二级标题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### 我是 makdown 四级标题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 我是 makdown 三级标题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### 我是 makdown 四级标题</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>主题会自动识别 <code>##</code> 为文章的一级标题， <code>###</code> 为文章的二级标题，依此类推。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>当最高级标题为 <code>##</code> 时，即使文章中没有 <code>###</code> 级标题，主题仍会认为 <code>###</code> 为二级标题。</p></div><h2 id="关于文章目录" tabindex="-1">关于文章目录 <a class="header-anchor" href="#关于文章目录" aria-label="Permalink to &quot;关于文章目录&quot;">​</a></h2><p>支持多级目录自动生成，支持标题级别1~5。</p>`,10),t=[c];function i(l,r,o,d,u,m){return e(),s("div",null,t)}const _=a(p,[["render",i]]);export{h as __pageData,_ as default};