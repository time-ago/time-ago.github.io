import{_ as i,c as a,a3 as t,o as e}from"./chunks/framework._n2T8Tqs.js";const c=JSON.parse('{"title":"Options - v3","description":"Modify the output by passing additional options to the Parse function","frontmatter":{"outline":"deep","title":"Options - v3","description":"Modify the output by passing additional options to the Parse function"},"headers":[],"relativePath":"v3/options.md","filePath":"versions/v3/options.md","lastUpdated":1732548318000}'),n={name:"v3/options.md"};function h(p,s,l,o,d,k){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h1><p>The <code>Parse()</code> is a <a href="https://en.wikipedia.org/wiki/Variadic_function" target="_blank" rel="noreferrer">variadic function</a> that eccepts an indefinite number of string arguments after the first argument. It means that you can pass as many options as you want to modify the output.</p><h2 id="example-with-one-option" tabindex="-1">Example With One Option <a class="header-anchor" href="#example-with-one-option" aria-label="Permalink to &quot;Example With One Option&quot;">​</a></h2><p>The most common way to use options is to pass a single option as a string. For example, if you want to display <code>Online</code> when the date interval is within 60 seconds, you can pass the <code>online</code> option like this:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ago </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">github.com/SerhiiCho/timeago/v3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tenSecondsAgo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> time.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time.Second </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    out, err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ago.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(currTime, ago.OptOnline)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // handle the error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(out) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// prints: &quot;Online&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Two Ways to Use Options</p><p>You can pass options either as strings (e.g., <code>&quot;online&quot;</code>, <code>&quot;justNow&quot;</code>) or by using constants from the <code>timeago</code> package (e.g., <code>timeago.OptOnline</code>, <code>timeago.OptJustNow</code>). While both approaches work the same, using constants is recommended because it improves readability, reduces errors, and provides autocomplete support in your editor.</p></div><h2 id="example-with-multiple-options" tabindex="-1">Example With Multiple Options <a class="header-anchor" href="#example-with-multiple-options" aria-label="Permalink to &quot;Example With Multiple Options&quot;">​</a></h2><p>Let&#39;s see the example with multiple options where you want hide the suffix <code>ago</code> and display <code>Just now</code> if the date interval is within 60 seconds:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ago </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">github.com/SerhiiCho/timeago/v3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tenSecondsAgo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> time.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time.Second </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    out, err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ago.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(currTime, ago.OptJustNow, ago.OptNoSuffix)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // handle the error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(out) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// prints: &quot;Just now&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>But if we change the <code>tenSecondsAgo</code> to <code>time.Now().Add(-time.Minute * 2)</code> the output will be <code>2 minutes</code> because the <code>justNow</code> option is applicable only for the date interval within 60 seconds.</p><h2 id="available-options" tabindex="-1">Available Options <a class="header-anchor" href="#available-options" aria-label="Permalink to &quot;Available Options&quot;">​</a></h2><p>The full list of available options with constant names and string value if you prefer to use them:</p><table tabindex="0"><thead><tr><th>Const &amp; str</th><th>Description</th><th>When to use?</th></tr></thead><tbody><tr><td><code>OptOnline</code><br><code>&quot;online&quot;</code></td><td>Displays <strong>Online</strong> if date interval withing 60 seconds. For example instead of <code>13 seconds ago</code> prints <code>Online</code></td><td>It could be used when you need to display the online status of users, to tell the show that the user is <code>Online</code> when the date interval is within the certain threshold</td></tr><tr><td><code>OptJustNow</code><br><code>&quot;justNow&quot;</code></td><td>Displays <strong>Just now</strong> if date interval withing 60 seconds. For example instead of <code>32 seconds ago</code> prints <code>Just now</code></td><td>It could be used when you need to display the <code>Just now</code> message when the message was sent within the certain threshold, or when something was done, published, etc.</td></tr><tr><td><code>OptNoSuffix</code><br><code>&quot;noSuffix&quot;</code></td><td>Removes suffix from datetime result and get for example <code>5 minutes</code> instead of <code>5 minutes ago</code></td><td>It could be used in scenarios where you want to display a time duration without indicating whether it is in the past or future. Or, When you need a shorter, cleaner output for compact UI elements like widgets or dashboards</td></tr><tr><td><code>OptUpcoming</code><br><code>&quot;upcoming&quot;</code></td><td>Removes the suffix <code>ago</code> when the date is in the future. <strong>This option is enabled by default, there is no need to pass it</strong>. It&#39;s available to keep backward compatibility with the previous versions</td><td>No usage. Because it&#39;s enabled by default</td></tr></tbody></table><p>This list will be updated with new useful options in the future if they are actually something that can be useful for the majority of users. If you want to suggest a new option, please create an issue on the <a href="https://github.com/SerhiiCho/timeago/issues" target="_blank" rel="noreferrer">GitHub repository</a></p>`,14)]))}const u=i(n,[["render",h]]);export{c as __pageData,u as default};