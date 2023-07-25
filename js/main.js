const starManEl = document.querySelector('.starman')
const starManImgEl = document.querySelector('.starman img')
const starManHpEl = document.querySelector('.starman .hpgauge .color')
const starManHpLeftEl = document.querySelector('.starman .hpgauge .left')
// 스타맨
const moveTopEl = document.querySelector('.move button.movetop') 
const moveLeftEl = document.querySelector('.move button.moveleft') 
const moveDownEl = document.querySelector('.move button.movedown') 
const moveRightEl = document.querySelector('.move button.moveright') 
const attackBtnEl = document.querySelector('button.attack')
//단축키 
const bigHpEl = document.querySelector('.bighpgauge .color')
const bigHpLeftEl = document.querySelector('.bighpgauge .left')
//큰 체력바
const enemyEl = document.querySelectorAll('.enemy')
//enemy
const ufoFirstEl = document.querySelector('.enemy.ufo-first')
const ufoFirstImgEl = document.querySelector('.enemy.ufo-first img')
const ufoFirstHpEl = document.querySelector('.enemy.ufo-first .color')
const ufoFirstHpLeftEl = document.querySelector('.enemy.ufo-first .hpgauge .left')
//ufo1
const ufoSecond1El = document.querySelector('.enemy.ufo-second.ufo-second1')
const ufoSecond1ImgEl = document.querySelector('.enemy.ufo-second.ufo-second1 img')
const ufoSecond1HpEl = document.querySelector('.enemy.ufo-second.ufo-second1 .color')
const ufoSecond1HpLeftEl = document.querySelector('.enemy.ufo-second.ufo-second1 .hpgauge .left')
//ufo2-1
const ufoSecond2El = document.querySelector('.enemy.ufo-second.ufo-second2')
const ufoSecond2ImgEl = document.querySelector('.enemy.ufo-second.ufo-second2 img')
const ufoSecond2HpEl = document.querySelector('.enemy.ufo-second.ufo-second2 .color')
const ufoSecond2HpLeftEl = document.querySelector('.enemy.ufo-second.ufo-second2 .hpgauge .left')
//ufo2-2
const ufoThird1El = document.querySelector('.enemy.ufo-third.ufo-third1')
const ufoThird1ImgEl = document.querySelector('.enemy.ufo-third.ufo-third1 img')
const ufoThird1HpEl = document.querySelector('.enemy.ufo-third.ufo-third1 .color')
const ufoThird1HpLeftEl = document.querySelector('.enemy.ufo-third.ufo-third1 .hpgauge .left')
//ufo3-1
const ufoThird2El = document.querySelector('.enemy.ufo-third.ufo-third2')
const ufoThird2ImgEl = document.querySelector('.enemy.ufo-third.ufo-third2 img')
const ufoThird2HpEl = document.querySelector('.enemy.ufo-third.ufo-third2 .color')
const ufoThird2HpLeftEl = document.querySelector('.enemy.ufo-third.ufo-third2 .hpgauge .left')
//ufo3-2
const ufoThird3El = document.querySelector('.enemy.ufo-third.ufo-third3')
const ufoThird3ImgEl = document.querySelector('.enemy.ufo-third.ufo-third3 img')
const ufoThird3HpEl = document.querySelector('.enemy.ufo-third.ufo-third3 .color')
const ufoThird3HpLeftEl = document.querySelector('.enemy.ufo-third.ufo-third3 .hpgauge .left')
//ufo3-3
const ufoFourth1El = document.querySelector('.enemy.ufo-fourth.ufo-fourth1')
const ufoFourth1ImgEl = document.querySelector('.enemy.ufo-fourth.ufo-fourth1 img')
const ufoFourth1HpEl = document.querySelector('.enemy.ufo-fourth.ufo-fourth1 .color')
const ufoFourth1HpLeftEl = document.querySelector('.enemy.ufo-fourth.ufo-fourth1 .hpgauge .left')
//ufo4-1
const ufoFourth2El = document.querySelector('.enemy.ufo-fourth.ufo-fourth2')
const ufoFourth2ImgEl = document.querySelector('.enemy.ufo-fourth.ufo-fourth2 img')
const ufoFourth2HpEl = document.querySelector('.enemy.ufo-fourth.ufo-fourth2 .color')
const ufoFourth2HpLeftEl = document.querySelector('.enemy.ufo-fourth.ufo-fourth2 .hpgauge .left')
//ufo4-2
const ufoFifth1El = document.querySelector('.enemy.ufo-fifth.ufo-fifth1')
const ufoFifth1ImgEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth1 img')
const ufoFifth1HpEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth1 .color')
const ufoFifth1HpLeftEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth1 .hpgauge .left')
//ufo4-1
const ufoFifth2El = document.querySelector('.enemy.ufo-fifth.ufo-fifth2')
const ufoFifth2ImgEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth2 img')
const ufoFifth2HpEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth2 .color')
const ufoFifth2HpLeftEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth2 .hpgauge .left')
//ufo4-2
const ufoFifth3El = document.querySelector('.enemy.ufo-fifth.ufo-fifth3')
const ufoFifth3ImgEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth3 img')
const ufoFifth3HpEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth3 .color')
const ufoFifth3HpLeftEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth3 .hpgauge .left')
//ufo4-3
const ufoFifth4El = document.querySelector('.enemy.ufo-fifth.ufo-fifth4')
const ufoFifth4ImgEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth4 img')
const ufoFifth4HpEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth4 .color')
const ufoFifth4HpLeftEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth4 .hpgauge .left')
//ufo4-4
const enemy1El = document.querySelector('.enemy.enemy1')
const enemy1ImgEl = document.querySelector('.enemy.enemy1 img')
const enemy1HpEl = document.querySelector('.enemy.enemy1 .color')
const enemy1HpLeftEl = document.querySelector('.enemy.enemy1 .hpgauge .left')
//집게우주선1
const enemy2El = document.querySelector('.enemy.enemy2')
const enemy2ImgEl = document.querySelector('.enemy.enemy2 img')
const enemy2HpEl = document.querySelector('.enemy.enemy2 .color')
const enemy2HpLeftEl = document.querySelector('.enemy.enemy2 .hpgauge .left')
//집게 우주선2

let locX = 0
let locY = 0

window.addEventListener('click', e => { //스타맨 위치 이동 
    locX = e.screenX 
    locY = e.screenY
    // starManEl.style.animationPlayState = 'paused'
    starManEl.style.transform = `translate(calc(${locX}px - 120px),calc(${locY}px - 270px))`
    e.preventDefault()
})

window.addEventListener('dbclick', e => { 
    e.preventDefault()
})

let hpgaugeUfoFirst = 100
let hpgaugeUfoSecond1 = 100
let hpgaugeUfoSecond2 = 100
let hpgaugeUfoThird1 = 100
let hpgaugeUfoThird2 = 100
let hpgaugeUfoThird3 = 100
let hpgaugeUfoFourth1 = 100
let hpgaugeUfoFourth2 = 100
let hpgaugeUfoFifth1 = 100
let hpgaugeUfoFifth2 = 100
let hpgaugeUfoFifth3 = 100
let hpgaugeUfoFifth4 = 100

let hpgauge1 = 100
let hpgauge2 = 100

// let locEnemy1X = enemy1ImgEl.getBoundingClientRect().x
// let locEnemy1Y = enemy1ImgEl.getBoundingClientRect().y

let ufoFirstLocX = 1280
let ufoSecond1LocX = 1680
let ufoSecond2LocX = 1680
let ufoThird1LocX = 2380
let ufoThird2LocX = 2380
let ufoThird3LocX = 2380
let ufoFourth1LocX = 3080
let ufoFourth2LocX = 3080
let ufoFifth1LocX = 3780
let ufoFifth2LocX = 3780
let ufoFifth3LocX = 3780
let ufoFifth4LocX = 3780

let enemy1LocX = 830
let enemy2LocX = 830

function countLoc() { //1초 50px (1500px/30s) -> 0.1초 5px
    setInterval(() => {
        ufoFirstLocX = ufoFirstLocX - 10
        ufoSecond1LocX = ufoSecond1LocX - 10
        ufoSecond2LocX = ufoSecond2LocX - 10
        ufoThird1LocX = ufoThird1LocX - 10
        ufoThird2LocX = ufoThird2LocX - 10
        ufoThird3LocX = ufoThird3LocX - 10
        ufoFourth1LocX = ufoFourth1LocX - 10
        ufoFourth2LocX = ufoFourth2LocX - 10
        ufoFifth1LocX = ufoFifth1LocX - 10
        ufoFifth2LocX = ufoFifth2LocX - 10
        ufoFifth3LocX = ufoFifth3LocX - 10
        ufoFifth4LocX = ufoFifth4LocX - 10
        // enemy1LocX = enemy1LocX - 4.3 //초기 x좌표 1100
        // enemy2LocX = enemy2LocX - 4.3
    }, 100)
}
countLoc()
 
window.addEventListener('keydown', e => { //스타맨 막대사탕 공격
    if(e.code == 'KeyA') {
            starManImgEl.style.transform = `rotate(45deg)`
            setTimeout(() => {
                starManImgEl.style.transform = `rotate(0)`
            }, 100) //스타맨 공격 모션

            if((locX>=ufoFirstLocX-200) && (locX<=ufoFirstLocX+50)
             && (locY>=400) && (locY<=500)) {
                ufoFirstHpEl.style.width = `calc(${hpgaugeUfoFirst}% - 10%)`
                ufoFirstHpLeftEl.textContent = parseInt(hpgaugeUfoFirst*4)-40 //400,360,320,280...
                ufoFirstEl.style.visibility = 'hidden'
                setTimeout(() => {ufoFirstEl.style.visibility = 'visible'},50)
                hpgaugeUfoFirst = hpgaugeUfoFirst - 10
                if(hpgaugeUfoFirst<=0) {
                    hpgaugeUfoFirst = 10
                    ufoFirstEl.style.opacity = '0'
                    ufoFirstEl.classList.add('removed')
                    ufoFirstImgEl.src = "../images/burst(3).png" 
                    ufoFirstImgEl.style.transform = 'scale(1.3)'
                }
            }   //첫번째 ufo 침공

            if((locX>=ufoSecond1LocX-150) && (locX<=ufoSecond1LocX+100)
            && (locY>=300) && (locY<=360)) {
            ufoSecond1HpEl.style.width = `calc(${hpgaugeUfoSecond1}% - 10%)`
            ufoSecond1HpLeftEl.textContent = parseInt(hpgaugeUfoSecond1*4)-40 //400,360,320,280...
            ufoSecond1El.style.visibility = 'hidden'
            setTimeout(() => {ufoSecond1El.style.visibility = 'visible'},50)
            hpgaugeUfoSecond1 = hpgaugeUfoSecond1 - 10
            if(hpgaugeUfoSecond1<=0) {
                hpgaugeUfoSecond1 = 10
                ufoSecond1El.style.opacity = '0'
                ufoSecond1El.classList.add('removed')
                ufoSecond1ImgEl.src = "../images/burst(3).png" 
                ufoSecond1ImgEl.style.transform = 'scale(1.3)'
            }
        }  //두번째-1 ufo침공

        if((locX>=ufoSecond2LocX-150) && (locX<=ufoSecond2LocX+100)
        && (locY>=510) && (locY<=570)) {
        ufoSecond2HpEl.style.width = `calc(${hpgaugeUfoSecond2}% - 10%)`
        ufoSecond2HpLeftEl.textContent = parseInt(hpgaugeUfoSecond2*4)-40 //400,360,320,280...
        ufoSecond2El.style.visibility = 'hidden'
        setTimeout(() => {ufoSecond2El.style.visibility = 'visible'},50)
        hpgaugeUfoSecond2 = hpgaugeUfoSecond2 - 10
        if(hpgaugeUfoSecond2<=0) {
            hpgaugeUfoSecond2 = 10
            ufoSecond2El.style.opacity = '0'
            ufoSecond2El.classList.add('removed')
            ufoSecond2ImgEl.src = "../images/burst(3).png" 
            ufoSecond2ImgEl.style.transform = 'scale(1.3)'
        } 
    } //두번째-2 ufo침공
            
    if((locX>=ufoThird1LocX-200) && (locX<=ufoThird1LocX+100)
    && (locY>=240) && (locY<=300)) {
    ufoThird1HpEl.style.width = `calc(${hpgaugeUfoThird1}% - 10%)`
    ufoThird1HpLeftEl.textContent = parseInt(hpgaugeUfoThird1*4)-40 //400,360,320,280...
    ufoThird1El.style.visibility = 'hidden'
    setTimeout(() => {ufoThird1El.style.visibility = 'visible'},50)
    hpgaugeUfoThird1 = hpgaugeUfoThird1 - 10
    if(hpgaugeUfoThird1<=0) {
        hpgaugeUfoThird1 = 10
        ufoThird1El.style.opacity = '0'
        ufoThird1El.classList.add('removed')
        ufoThird1ImgEl.src = "../images/burst(3).png" 
        ufoThird1ImgEl.style.transform = 'scale(1.3)'
    }
}  //세번째-1 ufo침공

if((locX>=ufoThird2LocX-200) && (locX<=ufoThird2LocX+100)
&& (locY>=405) && (locY<=465)) {
ufoThird2HpEl.style.width = `calc(${hpgaugeUfoThird2}% - 10%)`
ufoThird2HpLeftEl.textContent = parseInt(hpgaugeUfoThird2*4)-40 //400,360,320,280...
ufoThird2El.style.visibility = 'hidden'
setTimeout(() => {ufoThird2El.style.visibility = 'visible'},50)
hpgaugeUfoThird2 = hpgaugeUfoThird2 - 10
if(hpgaugeUfoThird2<=0) {
    hpgaugeUfoThird2 = 10
    ufoThird2El.style.opacity = '0'
    ufoThird2El.classList.add('removed')
    ufoThird2ImgEl.src = "../images/burst(3).png" 
    ufoThird2ImgEl.style.transform = 'scale(1.3)'
}
}  //세번째-2 ufo침공

if((locX>=ufoThird3LocX-200) && (locX<=ufoThird3LocX+100)
&& (locY>=615) && (locY<=690)) {
ufoThird3HpEl.style.width = `calc(${hpgaugeUfoThird3}% - 10%)`
ufoThird3HpLeftEl.textContent = parseInt(hpgaugeUfoThird3*4)-40 //400,360,320,280...
ufoThird3El.style.visibility = 'hidden'
setTimeout(() => {ufoThird3El.style.visibility = 'visible'},50)
hpgaugeUfoThird3 = hpgaugeUfoThird3 - 10
if(hpgaugeUfoThird3<=0) {
    hpgaugeUfoThird3 = 10
    ufoThird3El.style.opacity = '0'
    ufoThird3El.classList.add('removed')
    ufoThird3ImgEl.src = "../images/burst(3).png" 
    ufoThird3ImgEl.style.transform = 'scale(1.3)'
}
}  //세번째-3 ufo침공

if((locX>=ufoFourth1LocX-200) && (locX<=ufoFourth1LocX+100)
&& (locY>=300) && (locY<=360)) {
ufoFourth1HpEl.style.width = `calc(${hpgaugeUfoFourth1}% - 10%)`
ufoFourth1HpLeftEl.textContent = parseInt(hpgaugeUfoFourth1*4)-40 //400,360,320,280...
ufoFourth1El.style.visibility = 'hidden'
setTimeout(() => {ufoFourth1El.style.visibility = 'visible'},50)
hpgaugeUfoFourth1 = hpgaugeUfoFourth1 - 10
if(hpgaugeUfoFourth1<=0) {
    hpgaugeUfoFourth1 = 10
    ufoFourth1El.style.opacity = '0'
    ufoFourth1El.classList.add('removed')
    ufoFourth1ImgEl.src = "../images/burst(3).png" 
    ufoFourth1ImgEl.style.transform = 'scale(1.3)'
}
} //네번째-1 ufo침공

if((locX>=ufoFourth2LocX-200) && (locX<=ufoFourth2LocX+100)
&& (locY>=510) && (locY<=570)) {
ufoFourth2HpEl.style.width = `calc(${hpgaugeUfoFourth2}% - 10%)`
ufoFourth2HpLeftEl.textContent = parseInt(hpgaugeUfoFourth2*4)-40 //400,360,320,280...
ufoFourth2El.style.visibility = 'hidden'
setTimeout(() => {ufoFourth2El.style.visibility = 'visible'},50)
hpgaugeUfoFourth2 = hpgaugeUfoFourth2 - 10
if(hpgaugeUfoFourth2<=0) {
    hpgaugeUfoFourth2 = 10
    ufoFourth2El.style.opacity = '0'
    ufoFourth2El.classList.add('removed')
    ufoFourth2ImgEl.src = "../images/burst(3).png" 
    ufoFourth2ImgEl.style.transform = 'scale(1.3)'
}
} //네번째-2 ufo침공

if((locX>=ufoFifth1LocX-200) && (locX<=ufoFifth1LocX+100)
&& (locY>=200) && (locY<=260)) {
ufoFifth1HpEl.style.width = `calc(${hpgaugeUfoFifth1}% - 10%)`
ufoFifth1HpLeftEl.textContent = parseInt(hpgaugeUfoFifth1*4)-40 //400,360,320,280...
ufoFifth1El.style.visibility = 'hidden'
setTimeout(() => {ufoFifth1El.style.visibility = 'visible'},50)
hpgaugeUfoFifth1 = hpgaugeUfoFifth1 - 10
if(hpgaugeUfoFifth1<=0) {
    hpgaugeUfoFifth1 = 10
    ufoFifth1El.style.opacity = '0'
    ufoFifth1El.classList.add('removed')
    ufoFifth1ImgEl.src = "../images/burst(3).png" 
    ufoFifth1ImgEl.style.transform = 'scale(1.3)'
}
} //다섯번째-1 ufo침공

if((locX>=ufoFifth2LocX-200) && (locX<=ufoFifth2LocX+100)
&& (locY>=360) && (locY<=420)) {
ufoFifth2HpEl.style.width = `calc(${hpgaugeUfoFifth2}% - 10%)`
ufoFifth2HpLeftEl.textContent = parseInt(hpgaugeUfoFifth2*4)-40 //400,360,320,280...
ufoFifth2El.style.visibility = 'hidden'
setTimeout(() => {ufoFifth2El.style.visibility = 'visible'},50)
hpgaugeUfoFifth2 = hpgaugeUfoFifth2 - 10
if(hpgaugeUfoFifth2<=0) {
    hpgaugeUfoFifth2 = 10
    ufoFifth2El.style.opacity = '0'
    ufoFifth2El.classList.add('removed')
    ufoFifth2ImgEl.src = "../images/burst(3).png" 
    ufoFifth2ImgEl.style.transform = 'scale(1.3)'
}
} //다섯번째-2 ufo침공

if((locX>=ufoFifth3LocX-200) && (locX<=ufoFifth3LocX+100)
&& (locY>=480) && (locY<=540)) {
ufoFifth3HpEl.style.width = `calc(${hpgaugeUfoFifth3}% - 10%)`
ufoFifth3HpLeftEl.textContent = parseInt(hpgaugeUfoFifth3*4)-40 //400,360,320,280...
ufoFifth3El.style.visibility = 'hidden'
setTimeout(() => {ufoFifth3El.style.visibility = 'visible'},50)
hpgaugeUfoFifth3 = hpgaugeUfoFifth3 - 10
if(hpgaugeUfoFifth3<=0) {
    hpgaugeUfoFifth3 = 10
    ufoFifth3El.style.opacity = '0'
    ufoFifth3El.classList.add('removed')
    ufoFifth3ImgEl.src = "../images/burst(3).png" 
    ufoFifth3ImgEl.style.transform = 'scale(1.3)'
}
} //다섯번째-3 ufo침공

if((locX>=ufoFifth4LocX-200) && (locX<=ufoFifth4LocX+100)
&& (locY>=600) && (locY<=660)) {
ufoFifth4HpEl.style.width = `calc(${hpgaugeUfoFifth4}% - 10%)`
ufoFifth4HpLeftEl.textContent = parseInt(hpgaugeUfoFifth4*4)-40 
ufoFifth4El.style.visibility = 'hidden'
setTimeout(() => {ufoFifth4El.style.visibility = 'visible'},50)
hpgaugeUfoFifth4 = hpgaugeUfoFifth4 - 10
if(hpgaugeUfoFifth4<=0) {
    hpgaugeUfoFifth4 = 10
    ufoFifth4El.style.opacity = '0'
    ufoFifth4El.classList.add('removed')
    ufoFifth4ImgEl.src = "../images/burst(3).png" 
    ufoFifth4ImgEl.style.transform = 'scale(1.3)'
}
} //다섯번째-4 ufo침공
            
            // setTimeout(())

            // if((locX/1280)>=((enemy1LocX-200)/700-0.15) && (locX/1280)<=((enemy1LocX-200)/700+0.05
            // )&&(locY>=200) && (locY<=420)){
            //     enemy1HpEl.style.width = `calc(${hpgauge1}% - 4%)`
            //     enemy1HpLeftEl.textContent = parseInt(hpgauge1*10)-40
            //     enemy1ImgEl.style.visibility = 'hidden'
            //     setTimeout(() => {enemy1ImgEl.style.visibility = 'visible'},50)
            //     hpgauge1 = hpgauge1 - 4
            //     if(hpgauge1<=0) {
            //         hpgauge1 = 4
            //         enemy1El.style.opacity = '0'
            //     }
            // }
            // if((locX/1280)>=((enemy2LocX-200)/700-0.15) && (locX/1280)<=((enemy2LocX-200)/700+0.05
            // )&&(locY>=450) && (locY<=670)){
            //     enemy2HpEl.style.width = `calc(${hpgauge2}% - 4%)`
            //     enemy2HpLeftEl.textContent = parseInt(hpgauge2*10)-40
            //     enemy2ImgEl.style.visibility = 'hidden'
            //     setTimeout(() => {enemy2ImgEl.style.visibility = 'visible'},50)
            //     hpgauge2 = hpgauge2 - 4
            //     if(hpgauge2<=0) {
            //         hpgauge2 = 4
            //         enemy2El.style.opacity = '0'
            //     }
            // }
        
}})

setTimeout(() => { //캔디스매시 스킬
    window.addEventListener('keydown', e => {
        console.log(e.code)
        if(e.code == 'KeyS') {
            starManImgEl.style.transform = `rotate(90deg)`
            starManEl.classList.add('candybarsmash')
            setTimeout(() => {
                starManImgEl.style.transform = `rotate(0)`
                starManEl.classList.remove('candybarsmash')
            }, 100)
            if((locX>=ufoFourth1LocX-200) && (locX<=ufoFourth1LocX+100)
&& (locY>=300) && (locY<=360)) {
ufoFourth1HpEl.style.width = `calc(${hpgaugeUfoFourth1}% - 20%)`
ufoFourth1HpLeftEl.textContent = parseInt(hpgaugeUfoFourth1*4)-80 //400,320,240,160,80(20),40(10),-40(-10)
ufoFourth1El.style.visibility = 'hidden'
setTimeout(() => {ufoFourth1El.style.visibility = 'visible'},50)
hpgaugeUfoFourth1 = hpgaugeUfoFourth1 - 20
if(hpgaugeUfoFourth1<=0) {
    ufoFourth1HpLeftEl.textContent = 0
    ufoFourth1El.style.opacity = '0'
    ufoFourth1El.classList.add('removed')
    ufoFourth1ImgEl.src = "../images/burst(3).png" 
    ufoFourth1ImgEl.style.transform = 'scale(1.3)'
}
} //네번째-1 ufo침공

if((locX>=ufoFourth2LocX-200) && (locX<=ufoFourth2LocX+100)
&& (locY>=510) && (locY<=570)) {
ufoFourth2HpEl.style.width = `calc(${hpgaugeUfoFourth2}% - 20%)`
ufoFourth2HpLeftEl.textContent = parseInt(hpgaugeUfoFourth2*4)-80 //400,360,320,280...
ufoFourth2El.style.visibility = 'hidden'
setTimeout(() => {ufoFourth2El.style.visibility = 'visible'},50)
hpgaugeUfoFourth2 = hpgaugeUfoFourth2 - 20
if(hpgaugeUfoFourth2<=0) {
    ufoFourth2HpLeftEl.textContent = 0
    ufoFourth2El.style.opacity = '0'
    ufoFourth2El.classList.add('removed')
    ufoFourth2ImgEl.src = "../images/burst(3).png" 
    ufoFourth2ImgEl.style.transform = 'scale(1.3)'
}
} //네번째-2 ufo침공

if((locX>=ufoFifth1LocX-200) && (locX<=ufoFifth1LocX+100)
&& (locY>=200) && (locY<=260)) {
ufoFifth1HpEl.style.width = `calc(${hpgaugeUfoFifth1}% - 20%)`
ufoFifth1HpLeftEl.textContent = parseInt(hpgaugeUfoFifth1*4)-80 //400,360,320,280...
ufoFifth1El.style.visibility = 'hidden'
setTimeout(() => {ufoFifth1El.style.visibility = 'visible'},50)
hpgaugeUfoFifth1 = hpgaugeUfoFifth1 - 20
if(hpgaugeUfoFifth1<=0) {
    ufoFifth1HpLeftEl.textContent = 0
    ufoFifth1El.style.opacity = '0'
    ufoFifth1El.classList.add('removed')
    ufoFifth1ImgEl.src = "../images/burst(3).png" 
    ufoFifth1ImgEl.style.transform = 'scale(1.3)'
}
} //다섯번째-1 ufo침공

if((locX>=ufoFifth2LocX-200) && (locX<=ufoFifth2LocX+100)
&& (locY>=360) && (locY<=420)) {
ufoFifth2HpEl.style.width = `calc(${hpgaugeUfoFifth2}% - 20%)`
ufoFifth2HpLeftEl.textContent = parseInt(hpgaugeUfoFifth2*4)-80 //400,360,320,280...
ufoFifth2El.style.visibility = 'hidden'
setTimeout(() => {ufoFifth2El.style.visibility = 'visible'},50)
hpgaugeUfoFifth2 = hpgaugeUfoFifth2 - 20
if(hpgaugeUfoFifth2<=0) {
    ufoFifth2HpLeftEl.textContent = 0
    ufoFifth2El.style.opacity = '0'
    ufoFifth2El.classList.add('removed')
    ufoFifth2ImgEl.src = "../images/burst(3).png" 
    ufoFifth2ImgEl.style.transform = 'scale(1.3)'
}
} //다섯번째-2 ufo침공

if((locX>=ufoFifth3LocX-200) && (locX<=ufoFifth3LocX+100)
&& (locY>=480) && (locY<=540)) {
ufoFifth3HpEl.style.width = `calc(${hpgaugeUfoFifth3}% - 20%)`
ufoFifth3HpLeftEl.textContent = parseInt(hpgaugeUfoFifth3*4)-80 //400,360,320,280...
ufoFifth3El.style.visibility = 'hidden'
setTimeout(() => {ufoFifth3El.style.visibility = 'visible'},50)
hpgaugeUfoFifth3 = hpgaugeUfoFifth3 - 20
if(hpgaugeUfoFifth3<=0) {
    ufoFifth3HpLeftEl.textContent = 0
    ufoFifth3El.style.opacity = '0'
    ufoFifth3El.classList.add('removed')
    ufoFifth3ImgEl.src = "../images/burst(3).png" 
    ufoFifth3ImgEl.style.transform = 'scale(1.3)'
}
} //다섯번째-3 ufo침공

if((locX>=ufoFifth4LocX-200) && (locX<=ufoFifth4LocX+100)
&& (locY>=600) && (locY<=660)) {
ufoFifth4HpEl.style.width = `calc(${hpgaugeUfoFifth4}% - 20%)`
ufoFifth4HpLeftEl.textContent = parseInt(hpgaugeUfoFifth4*4)-80 
ufoFifth4El.style.visibility = 'hidden'
setTimeout(() => {ufoFifth4El.style.visibility = 'visible'},50)
hpgaugeUfoFifth4 = hpgaugeUfoFifth4 - 20
if(hpgaugeUfoFifth4<=0) {
    ufoFifth4HpLeftEl.textContent = 0
    ufoFifth4El.style.opacity = '0'
    ufoFifth4El.classList.add('removed')
    ufoFifth4ImgEl.src = "../images/burst(3).png" 
    ufoFifth4ImgEl.style.transform = 'scale(1.3)'
}
} //다섯번째-4 ufo침공
        }
    })
}, 20000)

setTimeout(() => {
    const blinking = setInterval(() => {
        document.querySelector('.skillnotice').style.visibility = 'visible'
        setTimeout(() => {
            document.querySelector('.skillnotice').style.visibility = 'hidden'
        }, 400)
    }, 600)
    setTimeout(() => {
        clearInterval(blinking)
        document.querySelector('.skillnotice img').style.visibility = 'visible'
        document.querySelector('.skillnotice img').style.transform = 'translate(-300px,-100px)'
    }, 10000)
}, 20000) //캔디바 스매시 스킬 등장 알림

let bighpgauge = 100

const ufoFirstAlive = setTimeout(() => {
    if(!ufoFirstEl.classList.contains('removed')) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.2%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-100
        bighpgauge = bighpgauge - 0.2
    }
},12500)

const ufoSecondAlive = setTimeout(() => {
    if(!ufoSecond1El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.2%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-100
        bighpgauge = bighpgauge - 0.2
    }
    if(!ufoSecond2El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.2%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-100
        bighpgauge = bighpgauge - 0.2
    }
}, 17500)

const ufoThirdAlive = setTimeout(() => {
    if(!ufoThird1El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.2%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-100
        bighpgauge = bighpgauge - 0.2
    }
    if(!ufoThird2El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.2%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-100
        bighpgauge = bighpgauge - 0.2
    }
    if(!ufoThird3El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.2%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-100
        bighpgauge = bighpgauge - 0.2
    }
}, 24500)

const ufoFourthAlive = setTimeout(() => {
    if(!ufoFourth1El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.4%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-200
        bighpgauge = bighpgauge - 0.4
    }
    if(!ufoFourth2El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.4%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-200
        bighpgauge = bighpgauge - 0.4
    }
}, 31500)

const ufoFifthAlive = setTimeout(() => {
    if(!ufoFifth1El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.4%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-200
        bighpgauge = bighpgauge - 0.4
    }
    if(!ufoFifth2El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.4%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-200
        bighpgauge = bighpgauge - 0.4
    }
    if(!ufoFifth3El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.4%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-200
        bighpgauge = bighpgauge - 0.4
    }
    if(!ufoFifth4El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.4%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-200
        bighpgauge = bighpgauge - 0.4
    }
}, 38500)


let fourth1MissileLocX = 1200
let fourth2MissileLocX = 1200

function countMissileLoc() {
    setTimeout(() => {  //1초 300px , 0.1초 30px //스타맨 enemy4한테 미사일 피격 
        setInterval(() => {
            fourth1MissileLocX = fourth1MissileLocX - 30
            if(fourth1MissileLocX<=-300) {
                fourth1MissileLocX = 640  
            }
            }
        ,100)
    },20000)
}
countMissileLoc()

if(locX>=600) {
    console.log('600over')
}

if((locX>=fourth1MissileLocX)) {
    let starManHpgauge = 100
    starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
    starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
    starManHpgauge = starManHpgauge - 5}


