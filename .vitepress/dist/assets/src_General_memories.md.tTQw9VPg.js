import{_ as e,o as t,c as a,R as r}from"./chunks/framework.OwEraUkW.js";const u=JSON.parse('{"title":"primary or main memory","description":"","frontmatter":{},"headers":[],"relativePath":"src/General/memories.md","filePath":"src/General/memories.md"}'),o={name:"src/General/memories.md"},i=r('<h1 id="primary-or-main-memory" tabindex="-1">primary or main memory <a class="header-anchor" href="#primary-or-main-memory" aria-label="Permalink to &quot;primary or main memory&quot;">​</a></h1><p>consists of to parts:</p><ol><li>random access memory(RAM)</li><li>read only memory(ROM)</li></ol><h2 id="rom" tabindex="-1">ROM <a class="header-anchor" href="#rom" aria-label="Permalink to &quot;ROM&quot;">​</a></h2><p>In a computer, ROM stands for Read-Only Memory. It&#39;s a type of non-volatile memory that stores data permanently, meaning the information remains even when the computer is turned off. Unlike RAM (Random Access Memory), ROM cannot be overwritten or changed once programmed. it is used to boot the computer as well.</p><h2 id="ram" tabindex="-1">RAM <a class="header-anchor" href="#ram" aria-label="Permalink to &quot;RAM&quot;">​</a></h2><p>RAM, or Random Access Memory, is your computer&#39;s short-term memory, where it stores data that it needs to quickly access while running programs and performing tasks. Imagine it like your desk at work, where you keep the papers and tools you&#39;re currently using.</p><h2 id="cache-memory" tabindex="-1">cache memory <a class="header-anchor" href="#cache-memory" aria-label="Permalink to &quot;cache memory&quot;">​</a></h2><p>is the memory that saves the frequently data of the RAM used by the processor by it does not save data permanently. the RAM complicates with the caches memory through the words and the cache memory mapping technique.</p><h2 id="secondary-memory" tabindex="-1">secondary memory <a class="header-anchor" href="#secondary-memory" aria-label="Permalink to &quot;secondary memory&quot;">​</a></h2><p>the pregnant storage that we store the audio files and stuff, it communicates with the RAM through the pages and the virtual memory mapping technique.</p><p>types:</p><ol><li>removable axillary storages. usb&#39;s , hard externals and cd and dvd etc</li><li>fixed axillary storage. onboard hdd and sdd and etc.</li></ol><h2 id="volatile-memory-regions" tabindex="-1">Volatile Memory regions: <a class="header-anchor" href="#volatile-memory-regions" aria-label="Permalink to &quot;Volatile Memory regions:&quot;">​</a></h2><ol><li>heap</li><li>stack</li><li>static memory</li></ol><table><thead><tr><th></th><th>Contents</th><th>Size</th><th>LifeTime</th><th>Cleanup</th></tr></thead><tbody><tr><td>Stack</td><td>- Functions args<br>- Local Variables<br>- known size at compile time</td><td>Dynamic / Fixed Upper Limit</td><td>Life time of function</td><td>Automatic when function returns</td></tr><tr><td>Heap</td><td>- values that live beyond the function life time<br>- values accessed by multiple threads<br>- Large values<br>- unknown size at compile time</td><td>Dynamic</td><td>Determined by the programmer</td><td>Manual</td></tr><tr><td>Static</td><td>- programs binary<br>- static variable<br>- string literals</td><td>Fixed</td><td>Life time of the program</td><td>Automatic, when the program terminates</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>notice that the stacks are in context of the functions calls, so what is meant by local variables is the vars that are built inside of the fn blocks.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Notice that the heap is used for variables that are accessed by multiple threads. It has a dynamic size, allowing it to grow or shrink. The lifetime of these variables is not automatically destroyed after a function returns or completes its execution. The programmer must manually determine when to de-allocate memory in this region. Therefore, the memory management of this region is solely the responsibility of the program, which is known as manual memory management.</p></div>',18),s=[i];function n(m,l,d,h,c,p){return t(),a("div",null,s)}const f=e(o,[["render",n]]);export{u as __pageData,f as default};
