import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.C16dpgHr.js";const E=JSON.parse('{"title":"钩子","description":"","frontmatter":{},"headers":[],"relativePath":"reference/hook.md","filePath":"reference/hook.md","lastUpdated":1692862703000}'),e={name:"reference/hook.md"},t=n(`<h1 id="钩子" tabindex="-1">钩子 <a class="header-anchor" href="#钩子" aria-label="Permalink to &quot;钩子&quot;">​</a></h1><p>用于用户在插件处理周期中扩展自己的行为。</p><h2 id="配置方式" tabindex="-1">配置方式 <a class="header-anchor" href="#配置方式" aria-label="Permalink to &quot;配置方式&quot;">​</a></h2><p>示例配置：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    window.cnblogsConfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // ...  主配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 钩子配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    window.cnblogsConfig.hooks </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          beforeCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // console.log(&#39;code 渲染开始前&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          afterCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // console.log(&#39;code 渲染结束后&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          beforeLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // console.log(&#39;loading 开始前&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          afterLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // console.log(&#39;loading 结束后&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          dayNightControl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // console.log(type);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // console.log(&#39;日/夜间模式&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="钩子方法" tabindex="-1">钩子方法 <a class="header-anchor" href="#钩子方法" aria-label="Permalink to &quot;钩子方法&quot;">​</a></h2><table><thead><tr><th style="text-align:center;"><strong>方法</strong></th><th style="text-align:center;"><strong>参数</strong></th><th style="text-align:center;"><strong>描述</strong></th></tr></thead><tbody><tr><td style="text-align:center;"><strong>beforeCode</strong></td><td style="text-align:center;">_</td><td style="text-align:center;">code 渲染开始前调用此方法</td></tr><tr><td style="text-align:center;"><strong>afterCode</strong></td><td style="text-align:center;">_</td><td style="text-align:center;">code 渲染结束后调用此方法</td></tr><tr><td style="text-align:center;"><strong>beforeLoading</strong></td><td style="text-align:center;">_</td><td style="text-align:center;">loading 开始前调用此方法</td></tr><tr><td style="text-align:center;"><strong>afterLoading</strong></td><td style="text-align:center;">_</td><td style="text-align:center;">loading 结束后调用此方法</td></tr><tr><td style="text-align:center;"><strong>dayNightControl</strong></td><td style="text-align:center;">_, type</td><td style="text-align:center;">日/夜间模式切换调用此方法</td></tr></tbody></table><h2 id="关于参数" tabindex="-1">关于参数 &quot;_&quot; <a class="header-anchor" href="#关于参数" aria-label="Permalink to &quot;关于参数 &quot;_&quot;&quot;">​</a></h2><p>里面包含了插件渲染使用的配置、工具方法、页面状态、事件监听等。</p><h3 id="查看-修改配置" tabindex="-1">查看/修改配置 <a class="header-anchor" href="#查看-修改配置" aria-label="Permalink to &quot;查看/修改配置&quot;">​</a></h3><p>当前插件渲染使用的配置都在 <code>_.__config</code> 中，可以查看当前配置，也可以直接修改使用的配置。</p><h3 id="调用插件公共方法" tabindex="-1">调用插件公共方法 <a class="header-anchor" href="#调用插件公共方法" aria-label="Permalink to &quot;调用插件公共方法&quot;">​</a></h3><p>当前插件公共方法都在 <code>_.__tools</code> 中，关于所有的公共方法可查看<a href="https://github.com/BNDong/Cnblogs-Theme-SimpleMemory/blob/v2/src/utils/tools.js" target="_blank" rel="noreferrer">此文件</a></p><h3 id="查看页面状态信息" tabindex="-1">查看页面状态信息 <a class="header-anchor" href="#查看页面状态信息" aria-label="Permalink to &quot;查看页面状态信息&quot;">​</a></h3><p>当前插件渲染使用的配置都在 <code>_.__status</code> 中。</p><h3 id="查看-触发事件" tabindex="-1">查看/触发事件 <a class="header-anchor" href="#查看-触发事件" aria-label="Permalink to &quot;查看/触发事件&quot;">​</a></h3><p>当前插件公共事件处理都在 <code>_.__event</code> 中，目前只有滚动事件和窗口大小事件的监听处理，源码可参考<a href="https://github.com/BNDong/Cnblogs-Theme-SimpleMemory/blob/v2/src/components/event/event.js" target="_blank" rel="noreferrer">此文件</a>。</p><ul><li>触发事件</li></ul><p>只能触发已经注册的事件，根据插件加载，会陆续注册进来新的事件处理 handle。</p><p>示例：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_.__event.handle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scroll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 触发滚动处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_.__event.handle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 触发窗口大小变化处理</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>添加新的事件处理</li></ul><p>示例：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_.__event.scroll.handle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;当页面滚动时，我被执行！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,24),l=[t];function p(h,r,k,d,o,c){return i(),a("div",null,l)}const b=s(e,[["render",p]]);export{E as __pageData,b as default};