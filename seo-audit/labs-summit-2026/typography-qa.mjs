import {createRequire} from 'node:module';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const{chromium}=require('C:/Users/jose_/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({channel:'chrome',headless:true});
const results=[];
try{
for(const width of [320,390,768,1024,1253,1440]){
 const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'});
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/*',r=>{let h=new URL(r.request().url()).hostname;return ['localhost','127.0.0.1','fonts.googleapis.com','fonts.gstatic.com'].includes(h)?r.continue():r.abort();});
 await page.goto('http://localhost:8092/es/labs-summit-2026',{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 const state=await page.evaluate(()=>{
  const selectors=['.event-step p','.event-step a','.event-rule-strip p','.event-rule-strip strong','.event-section-heading > p','.event-prize-description','.event-prize-title','.event-prize-detail','.event-form-grid > label','.event-check','.event-privacy-note','.event-service p','.event-demo-note','.event-section-nav'];
  const fonts=Object.fromEntries(selectors.map(s=>[s,parseFloat(getComputedStyle(document.querySelector(s)).fontSize)]));
  const consoleRect=document.querySelector('.event-dice-console').getBoundingClientRect();
  const clipping=[...document.querySelectorAll('.event-step p,.event-rule-strip p,.event-prize-title,.event-prize-description,.event-service h3,.event-service p,.event-check,.event-form-grid label')].filter(el=>el.getClientRects().length&&el.scrollWidth>el.clientWidth+2).map(el=>el.className||el.tagName);
  return {fonts,overflow:document.documentElement.scrollWidth>innerWidth,consoleFits:consoleRect.left>=0&&consoleRect.right<=innerWidth,clipping,headerEventLinks:document.querySelectorAll('header a[href="/es/labs-summit-2026"]').length,footerEventLinks:document.querySelectorAll('footer a[href="/es/labs-summit-2026"]').length};
 });
 assert.equal(state.overflow,false,`${width}px page overflow`);assert.equal(state.consoleFits,true,`${width}px dice console`);assert.deepEqual(state.clipping,[],`${width}px clipped text`);assert.equal(state.headerEventLinks,0);assert.equal(state.footerEventLinks,1);assert.deepEqual(errors,[]);
 assert.ok(state.fonts['.event-rule-strip p']>=16);assert.ok(state.fonts['.event-form-grid > label']>=16);assert.ok(state.fonts['.event-check']>=14);
 if([390,1253].includes(width)){
  // Hide fixed chrome only in section screenshots so it cannot cover their text.
  await page.addStyleTag({content:'header,.fixed{visibility:hidden!important}'});
  await page.locator('#como-participar').screenshot({path:`seo-audit/labs-summit-2026/typography-steps-${width}.png`});
  await page.locator('#premios').screenshot({path:`seo-audit/labs-summit-2026/typography-prizes-${width}.png`});
  await page.locator('#registro').screenshot({path:`seo-audit/labs-summit-2026/typography-form-${width}.png`});
  await page.locator('#soluciones').screenshot({path:`seo-audit/labs-summit-2026/typography-services-${width}.png`});
 }
 results.push({width,...state,errors});await context.close();
}
await fs.writeFile('seo-audit/labs-summit-2026/typography-qa.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results));
}finally{await browser.close()}
