import { createRequire } from 'node:module';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const {chromium}=require('C:/Users/jose_/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({channel:'chrome',headless:true});
const report={viewports:[],interactions:{},errors:[]};
async function create(width,reducedMotion='no-preference'){
 const context=await browser.newContext({viewport:{width,height:900},reducedMotion});
 const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 await page.route('**/*',r=>{let u=new URL(r.request().url());return ['localhost','127.0.0.1','fonts.googleapis.com','fonts.gstatic.com'].includes(u.hostname)?r.continue():r.abort();});
 return {context,page};
}
for(const width of [320,360,390,768,1440]){
 const {context,page}=await create(width,'reduce');
 await page.goto('http://localhost:8092/es/labs-summit-2026',{waitUntil:'networkidle'});
 await page.locator('img').evaluateAll(imgs=>imgs.forEach(i=>i.loading='eager'));
 await page.evaluate(()=>Promise.all([...document.images].map(i=>i.decode().catch(()=>null))));
 const state=await page.evaluate(()=>({lang:document.documentElement.lang,overflow:document.documentElement.scrollWidth>innerWidth,consoleFits:(()=>{let r=document.querySelector('.event-dice-console').getBoundingClientRect();return r.left>=0&&r.right<=innerWidth})(),missingImages:[...document.querySelectorAll('main img')].filter(i=>i.naturalWidth===0).map(i=>i.getAttribute('src')),prizes:document.querySelectorAll('.event-prize').length,englishSwitch:!!document.querySelector('header a[hreflang="en"]'),motion:getComputedStyle(document.querySelector('.event-dice-float')).animationName}))
 assert.equal(state.overflow,false);assert.equal(state.consoleFits,true);assert.equal(state.missingImages.length,0);assert.equal(state.lang,'es');assert.equal(state.prizes,6);assert.equal(state.englishSwitch,false);assert.equal(state.motion,'none');
 await page.screenshot({path:`seo-audit/labs-summit-2026/final-${width}.png`,fullPage:true});
 if([390,1440].includes(width)){
  await page.locator('.event-hero').screenshot({path:`seo-audit/labs-summit-2026/final-hero-${width}.png`});
  await page.locator('#registro').screenshot({path:`seo-audit/labs-summit-2026/final-form-${width}.png`});
  await page.locator('#soluciones').screenshot({path:`seo-audit/labs-summit-2026/final-services-${width}.png`});
 }
 report.viewports.push({width,...state});await context.close();
}
await fs.writeFile('seo-audit/labs-summit-2026/viewport-qa-final.json',JSON.stringify(report.viewports,null,2));
const {context,page}=await create(390,'reduce');
await page.goto('http://localhost:8092/labs-summit-2026?utm_source=qa#registro',{waitUntil:'networkidle'});
assert.equal(new URL(page.url()).pathname,'/es/labs-summit-2026');assert.equal(new URL(page.url()).searchParams.get('utm_source'),'qa');assert.equal(new URL(page.url()).hash,'#registro');report.interactions.aliasPreservesCampaignAndHash=true;
await page.getByRole('button',{name:'Cara 2',exact:true}).click();assert.equal(await page.getByRole('button',{name:'Cara 2',exact:true}).getAttribute('aria-pressed'),'true');assert.equal(await page.locator('#prize-detail-2').isVisible(),true);report.interactions.diceAndPrizeSynchronized=true;
await page.locator('#registro button[type=submit]').click();assert.equal(await page.locator('.event-field-error').count(),5);assert.equal(await page.evaluate(()=>document.activeElement.id),'event-name');report.interactions.invalidSubmissionFocus=true;
await page.locator('#event-name').fill('Synthetic Tester');await page.locator('#event-business').fill('Synthetic Event Brand');await page.locator('#event-phone').fill('+13055550123');await page.locator('#event-need').selectOption('crm');await page.locator('#event-participationConsent').check();
assert.equal(await page.locator('[name=marketingConsent]').isChecked(),false);
await page.route('**/api/event-registration',r=>r.fulfill({status:503,contentType:'application/json',body:JSON.stringify({ok:false,error:'not_configured'})}));
await page.locator('#registro button[type=submit]').click();await page.getByRole('alert').waitFor();assert.equal(await page.locator('[role=status].event-form-success').count(),0);assert.equal(await page.locator('#event-name').inputValue(),'Synthetic Tester');report.interactions.unconfiguredDoesNotClaimSaved=true;
await page.unroute('**/api/event-registration');
let payload;
await page.route('**/api/event-registration',r=>{payload=r.request().postDataJSON();return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,duplicate:false})});});
await page.locator('#registro button[type=submit]').click();await page.locator('.event-form-success').waitFor();assert.equal(payload.marketingConsent,false);assert.equal(payload.email,'');assert.equal(payload.prize,undefined);report.interactions.mockedSuccessDisplaysOnlyAfterAcknowledgment=true;
await page.reload({waitUntil:'networkidle'});assert.equal(await page.locator('.event-form-success').count(),0);report.interactions.noParticipantStorage=true;
assert.equal(await page.locator('#conversemos a[href="/es/book"]').count(),1);assert.equal(await page.locator('#conversemos iframe').count(),0);report.interactions.reusesBookingRoute=true;
await page.locator('header button').filter({has:page.locator('svg')}).last().click();await page.getByRole('navigation',{name:'Navegación móvil'}).getByRole('link',{name:'Tuluá Labs Summit',exact:false}).waitFor({state:'visible'});report.interactions.spanishMobileHeaderLink=true;
await context.close();
const desktop=await create(1440);await desktop.page.goto('http://localhost:8092/es/labs-summit-2026',{waitUntil:'networkidle'});await desktop.page.getByRole('button',{name:'Pausar movimiento',exact:true}).click();assert.equal(await desktop.page.locator('.event-dice-float').evaluate(e=>getComputedStyle(e).animationPlayState),'paused');report.interactions.pauseControl=true;
await desktop.page.goto('http://localhost:8092/?lang=en',{waitUntil:'networkidle'});assert.equal(await desktop.page.locator('header a[href="/es/labs-summit-2026"]').count(),0);report.interactions.englishHeaderUnchanged=true;await desktop.context.close();
await browser.close();assert.deepEqual(report.errors,[]);await fs.writeFile('seo-audit/labs-summit-2026/browser-qa-final.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
