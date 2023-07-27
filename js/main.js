// 스타맨
const starManEl = document.querySelector('.starman')
const starManImgEl = document.querySelector('.starman img')
const starManHpEl = document.querySelector('.starman .hpgauge .color')
const starManHpLeftEl = document.querySelector('.starman .hpgauge .left')
//단축키 
const moveTopEl = document.querySelector('.move button.movetop') 
const moveLeftEl = document.querySelector('.move button.moveleft') 
const moveDownEl = document.querySelector('.move button.movedown') 
const moveRightEl = document.querySelector('.move button.moveright') 
const attackBtnEl = document.querySelector('button.attack')
//큰 체력바
const bigHpEl = document.querySelector('.bighpgauge .color')
const bigHpLeftEl = document.querySelector('.bighpgauge .left')
//enemy
const enemyEl = document.querySelectorAll('.enemy')
//ufo1
const ufoFirstEl = document.querySelector('.enemy.ufo-first')
const ufoFirstImgEl = document.querySelector('.enemy.ufo-first img')
const ufoFirstHpEl = document.querySelector('.enemy.ufo-first .color')
const ufoFirstHpLeftEl = document.querySelector('.enemy.ufo-first .hpgauge .left')
//ufo2-1
const ufoSecond1El = document.querySelector('.enemy.ufo-second.ufo-second1')
const ufoSecond1ImgEl = document.querySelector('.enemy.ufo-second.ufo-second1 img')
const ufoSecond1HpEl = document.querySelector('.enemy.ufo-second.ufo-second1 .color')
const ufoSecond1HpLeftEl = document.querySelector('.enemy.ufo-second.ufo-second1 .hpgauge .left')
//ufo2-2
const ufoSecond2El = document.querySelector('.enemy.ufo-second.ufo-second2')
const ufoSecond2ImgEl = document.querySelector('.enemy.ufo-second.ufo-second2 img')
const ufoSecond2HpEl = document.querySelector('.enemy.ufo-second.ufo-second2 .color')
const ufoSecond2HpLeftEl = document.querySelector('.enemy.ufo-second.ufo-second2 .hpgauge .left')
//ufo3-1
const ufoThird1El = document.querySelector('.enemy.ufo-third.ufo-third1')
const ufoThird1ImgEl = document.querySelector('.enemy.ufo-third.ufo-third1 img')
const ufoThird1HpEl = document.querySelector('.enemy.ufo-third.ufo-third1 .color')
const ufoThird1HpLeftEl = document.querySelector('.enemy.ufo-third.ufo-third1 .hpgauge .left')
//ufo3-2
const ufoThird2El = document.querySelector('.enemy.ufo-third.ufo-third2')
const ufoThird2ImgEl = document.querySelector('.enemy.ufo-third.ufo-third2 img')
const ufoThird2HpEl = document.querySelector('.enemy.ufo-third.ufo-third2 .color')
const ufoThird2HpLeftEl = document.querySelector('.enemy.ufo-third.ufo-third2 .hpgauge .left')
//ufo3-3
const ufoThird3El = document.querySelector('.enemy.ufo-third.ufo-third3')
const ufoThird3ImgEl = document.querySelector('.enemy.ufo-third.ufo-third3 img')
const ufoThird3HpEl = document.querySelector('.enemy.ufo-third.ufo-third3 .color')
const ufoThird3HpLeftEl = document.querySelector('.enemy.ufo-third.ufo-third3 .hpgauge .left')
//ufo4-1
const ufoFourth1El = document.querySelector('.enemy.ufo-fourth.ufo-fourth1')
const ufoFourth1ImgEl = document.querySelector('.enemy.ufo-fourth.ufo-fourth1 img')
const ufoFourth1HpEl = document.querySelector('.enemy.ufo-fourth.ufo-fourth1 .color')
const ufoFourth1HpLeftEl = document.querySelector('.enemy.ufo-fourth.ufo-fourth1 .hpgauge .left')
const missileFourth1El = document.querySelector('.enemy.ufo-fourth.ufo-fourth1 .missile')
//ufo 4-2
const ufoFourth2El = document.querySelector('.enemy.ufo-fourth.ufo-fourth2')
const ufoFourth2ImgEl = document.querySelector('.enemy.ufo-fourth.ufo-fourth2 img')
const ufoFourth2HpEl = document.querySelector('.enemy.ufo-fourth.ufo-fourth2 .color')
const ufoFourth2HpLeftEl = document.querySelector('.enemy.ufo-fourth.ufo-fourth2 .hpgauge .left')
const missileFourth2El = document.querySelector('.enemy.ufo-fourth.ufo-fourth2 .missile')
//ufo5-1
const ufoFifth1El = document.querySelector('.enemy.ufo-fifth.ufo-fifth1')
const ufoFifth1ImgEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth1 img')
const ufoFifth1HpEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth1 .color')
const ufoFifth1HpLeftEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth1 .hpgauge .left')
const missileFifth1El = document.querySelector('.enemy.ufo-fifth.ufo-fifth1 .missile')
//ufo5-2
const ufoFifth2El = document.querySelector('.enemy.ufo-fifth.ufo-fifth2')
const ufoFifth2ImgEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth2 img')
const ufoFifth2HpEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth2 .color')
const ufoFifth2HpLeftEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth2 .hpgauge .left')
const missileFifth2El = document.querySelector('.enemy.ufo-fifth.ufo-fifth2 .missile')
//ufo5-3
const ufoFifth3El = document.querySelector('.enemy.ufo-fifth.ufo-fifth3')
const ufoFifth3ImgEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth3 img')
const ufoFifth3HpEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth3 .color')
const ufoFifth3HpLeftEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth3 .hpgauge .left')
const missileFifth3El = document.querySelector('.enemy.ufo-fifth.ufo-fifth3 .missile')
//ufo5-4
const ufoFifth4El = document.querySelector('.enemy.ufo-fifth.ufo-fifth4')
const ufoFifth4ImgEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth4 img')
const ufoFifth4HpEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth4 .color')
const ufoFifth4HpLeftEl = document.querySelector('.enemy.ufo-fifth.ufo-fifth4 .hpgauge .left')
const missileFifth4El = document.querySelector('.enemy.ufo-fifth.ufo-fifth4 .missile')
//ufo6-1
const ufoSixth1El = document.querySelector('.enemy.ufo-sixth.ufo-sixth1')
const ufoSixth1ImgEl = document.querySelector('.enemy.ufo-sixth.ufo-sixth1 img')
const ufoSixth1HpEl = document.querySelector('.enemy.ufo-sixth.ufo-sixth1 .color')
const ufoSixth1HpLeftEl = document.querySelector('.enemy.ufo-sixth.ufo-sixth1 .hpgauge .left')
//ufo6-2
const ufoSixth2El = document.querySelector('.enemy.ufo-sixth.ufo-sixth2')
const ufoSixth2ImgEl = document.querySelector('.enemy.ufo-sixth.ufo-sixth2 img')
const ufoSixth2HpEl = document.querySelector('.enemy.ufo-sixth.ufo-sixth2 .color')
const ufoSixth2HpLeftEl = document.querySelector('.enemy.ufo-sixth.ufo-sixth2 .hpgauge .left')
//ufo7-1
const ufoSeventh1El = document.querySelector('.enemy.ufo-seventh.ufo-seventh1')
const ufoSeventh1ImgEl = document.querySelector('.enemy.ufo-seventh.ufo-seventh1 img')
const ufoSeventh1HpEl = document.querySelector('.enemy.ufo-seventh.ufo-seventh1 .color')
const ufoSeventh1HpLeftEl = document.querySelector('.enemy.ufo-seventh.ufo-seventh1 .hpgauge .left')
//ufo7-2
const ufoSeventh2El = document.querySelector('.enemy.ufo-seventh.ufo-seventh2')
const ufoSeventh2ImgEl = document.querySelector('.enemy.ufo-seventh.ufo-seventh2 img')
const ufoSeventh2HpEl = document.querySelector('.enemy.ufo-seventh.ufo-seventh2 .color')
const ufoSeventh2HpLeftEl = document.querySelector('.enemy.ufo-seventh.ufo-seventh2 .hpgauge .left')
//집게우주선1
const enemy1El = document.querySelector('.enemy.enemy1')
const enemy1ImgEl = document.querySelector('.enemy.enemy1 img')
const enemy1HpEl = document.querySelector('.enemy.enemy1 .color')
const enemy1HpLeftEl = document.querySelector('.enemy.enemy1 .hpgauge .left')
//집게 우주선2
const enemy2El = document.querySelector('.enemy.enemy2')
const enemy2ImgEl = document.querySelector('.enemy.enemy2 img')
const enemy2HpEl = document.querySelector('.enemy.enemy2 .color')
const enemy2HpLeftEl = document.querySelector('.enemy.enemy2 .hpgauge .left')


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

let starManHpgauge = 100
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
let hpgaugeUfoSixth1 = 100
let hpgaugeUfoSixth2 = 100
let hpgaugeUfoSeventh1 = 100
let hpgaugeUfoSeventh2 = 100



let enemyLocX = 1280 // 일반화 시도
let missileFourth1LocX = 1280
let missileFourth2LocX = 1280
let missileFifth1LocX = 1280
let missileFifth2LocX = 1280
let missileFifth3LocX = 1280
let missileFifth4LocX = 1280

function countLoc() { //1초 50px (1500px/30s) -> 0.1초 5px
    setInterval(() => {
        enemyLocX = enemyLocX - 10      
        // enemyLocX + animationdelay*100  //거리 = 속도(100px/s) * 시간(animationdelay)       
    }, 100)
    setTimeout(() => {
        setInterval(() => {
            missileFourth1LocX = missileFourth1LocX - 7.5
            missileFourth2LocX = missileFourth2LocX - 7.5

            if(missileFourth1LocX<=-2000) {
                missileFourth1LocX = 700
            }
            if(missileFourth2LocX<=-2000) {
                missileFourth2LocX = 700
            }
        },10)
            //미사일 : 300px/s => 3px/10ms
    }, 20000)

    setTimeout(() => {
    setInterval(() => {
        missileFifth1LocX = missileFifth1LocX - 7.5
        missileFifth2LocX = missileFifth2LocX - 7.5
        missileFifth3LocX = missileFifth3LocX - 7.5
        missileFifth4LocX = missileFifth4LocX - 7.5

        if(missileFifth1LocX<=-2000) {
            missileFifth1LocX = 700
        }
        if(missileFifth2LocX<=-2000) {
            missileFifth2LocX = 700
        }
        if(missileFifth3LocX<=-2000) {
            missileFifth3LocX = 700
        }
        if(missileFifth4LocX<=-2000) {
            missileFifth4LocX = 700
        }
    },10)
        //미사일 : 300px/s => 3px/10ms
}, 27000)

}
countLoc()
 
window.addEventListener('keydown', e => { //스타맨 막대사탕 공격
    if(e.code == 'KeyA') {
            starManImgEl.style.transform = `rotate(45deg)`
            setTimeout(() => {
                starManImgEl.style.transform = `rotate(0)`
            }, 100) //스타맨 공격 모션

            if((locX>=enemyLocX-150) && (locX<=enemyLocX+150)
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

            if(locX>=(enemyLocX+500-150) 
            && (locX<=(enemyLocX+500+150))
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

        if(locX>=(enemyLocX+500-150) 
        && (locX<=enemyLocX+500+150)
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
            
    if((locX>=enemyLocX+1200-150)
    && (locX<=enemyLocX+1200+150)
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

if((locX>=enemyLocX+1200-150)
&& (locX<=enemyLocX+1200+150)
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

if((locX>=enemyLocX+1200-150) 
&& (locX<=enemyLocX+1200+150)
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

if((locX>=enemyLocX+1900-150)
&& (locX<=enemyLocX+1900+150)
&& (locY>=300) && (locY<=360)) {
ufoFourth1HpEl.style.width = `calc(${hpgaugeUfoFourth1}% - 10%`
ufoFourth1HpLeftEl.textContent = parseInt(hpgaugeUfoFourth1*4)-40 //400,360,320,280...
ufoFourth1El.style.visibility = 'hidden'
setTimeout(() => {ufoFourth1El.style.visibility = 'visible'},50)
hpgaugeUfoFourth1 = hpgaugeUfoFourth1 - 10
if(hpgaugeUfoFourth1<=0) {
    ufoFourth1HpLeftEl.textContent = 0
    ufoFourth1El.style.opacity = '0'
    ufoFourth1El.classList.add('removed')
    ufoFourth1ImgEl.src = "../images/burst(3).png" 
    ufoFourth1ImgEl.style.transform = 'scale(1.3)'
}
} //네번째-1 ufo침공

if((locX>=enemyLocX+1900-150) && (locX<=enemyLocX+1900+150)
&& (locY>=510) && (locY<=570)) {
ufoFourth2HpEl.style.width = `calc(${hpgaugeUfoFourth2}% - 10%`
ufoFourth2HpLeftEl.textContent = parseInt(hpgaugeUfoFourth2*4)-40 //400,360,320,280...
ufoFourth2El.style.visibility = 'hidden'
setTimeout(() => {ufoFourth2El.style.visibility = 'visible'},50)
hpgaugeUfoFourth2 = hpgaugeUfoFourth2 - 10
if(hpgaugeUfoFourth2<=0) {
    ufoFourth2HpLeftEl.textContent = 0
    ufoFourth2El.style.opacity = '0'
    ufoFourth2El.classList.add('removed')
    ufoFourth2ImgEl.src = "../images/burst(3).png" 
    ufoFourth2ImgEl.style.transform = 'scale(1.3)'
}
} //네번째-2 ufo침공

if((locX>=enemyLocX+2600-150) && (locX<=enemyLocX+2600+150)
&& (locY>=200) && (locY<=260)) {
ufoFifth1HpEl.style.width = `calc(${hpgaugeUfoFifth1}% - 10%`
ufoFifth1HpLeftEl.textContent = parseInt(hpgaugeUfoFifth1*4)-40 //400,360,320,280...
ufoFifth1El.style.visibility = 'hidden'
setTimeout(() => {ufoFifth1El.style.visibility = 'visible'},50)
hpgaugeUfoFifth1 = hpgaugeUfoFifth1 - 10
if(hpgaugeUfoFifth1<=0) {
    ufoFifth1HpLeftEl.textContent = 0
    ufoFifth1El.style.opacity = '0'
    ufoFifth1El.classList.add('removed')
    ufoFifth1ImgEl.src = "../images/burst(3).png" 
    ufoFifth1ImgEl.style.transform = 'scale(1.3)'
}
} //다섯번째-1 ufo침공

if((locX>=enemyLocX+2600-150) && (locX<=enemyLocX+2600+150)
&& (locY>=360) && (locY<=420)) {
ufoFifth2HpEl.style.width = `calc(${hpgaugeUfoFifth2}% - 10%`
ufoFifth2HpLeftEl.textContent = parseInt(hpgaugeUfoFifth2*4)-40 //400,360,320,280...
ufoFifth2El.style.visibility = 'hidden'
setTimeout(() => {ufoFifth2El.style.visibility = 'visible'},50)
hpgaugeUfoFifth2 = hpgaugeUfoFifth2 - 10
if(hpgaugeUfoFifth2<=0) {
    ufoFifth2HpLeftEl.textContent = 0
    ufoFifth2El.style.opacity = '0'
    ufoFifth2El.classList.add('removed')
    ufoFifth2ImgEl.src = "../images/burst(3).png" 
    ufoFifth2ImgEl.style.transform = 'scale(1.3)'
}
} //다섯번째-2 ufo침공

if((locX>=enemyLocX-2600-150) && (locX<=enemyLocX-2600+150)
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

if((locX>=enemyLocX+2600-150) && (locX<=enemyLocX+2600+150)
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

if((locX>=enemyLocX+3400-250) && (locX<=enemyLocX+3400+150)
&& (locY>=300) && (locY<=480)) {
ufoSixth1HpEl.style.width = `calc(${hpgaugeUfoSixth1}% - 5%)`
ufoSixth1HpLeftEl.textContent = parseInt(hpgaugeUfoSixth1*8)-40 //400,360,320,280...
ufoSixth1El.style.visibility = 'hidden'
setTimeout(() => {ufoSixth1El.style.visibility = 'visible'},50)
hpgaugeUfoSixth1 = hpgaugeUfoSixth1 - 5
if(hpgaugeUfoSixth1<=0) {
    ufoSixth1HpLeftEl.textContent = 0
    ufoSixth1El.style.opacity = '0'
    ufoSixth1El.classList.add('removed')
    ufoSixth1ImgEl.src = "../images/burst(3).png" 
    ufoSixth1ImgEl.style.transform = 'scale(1.3)'
}
} //여섯번째-1 ufo침공

if((locX>=enemyLocX+3400-250) && (locX<=enemyLocX+3400+150)
&& (locY>=540) && (locY<=720)) {
ufoSixth2HpEl.style.width = `calc(${hpgaugeUfoSixth2}% - 5%)`
ufoSixth2HpLeftEl.textContent = parseInt(hpgaugeUfoSixth2*8)-40 //400,360,320,280...
ufoSixth2El.style.visibility = 'hidden'
setTimeout(() => {ufoSixth2El.style.visibility = 'visible'},50)
hpgaugeUfoSixth2 = hpgaugeUfoSixth2 - 5
if(hpgaugeUfoSixth2<=0) {
    ufoSixth2HpLeftEl.textContent = 0
    ufoSixth2El.style.opacity = '0'
    ufoSixth2El.classList.add('removed')
    ufoSixth2ImgEl.src = "../images/burst(3).png" 
    ufoSixth2ImgEl.style.transform = 'scale(1.3)'
}
} //여섯번째-2 ufo침공

if((locX>=enemyLocX+3800-250) && (locX<=enemyLocX+3800+150)
&& (locY>=300) && (locY<=480)) {
ufoSeventh1HpEl.style.width = `calc(${hpgaugeUfoSeventh1}% - 5%)`
ufoSeventh1HpLeftEl.textContent = parseInt(hpgaugeUfoSeventh1*8)-40 //400,360,320,280...
ufoSeventh1El.style.visibility = 'hidden'
setTimeout(() => {ufoSeventh1El.style.visibility = 'visible'},50)
hpgaugeUfoSeventh1 = hpgaugeUfoSeventh1 - 5
if(hpgaugeUfoSeventh1<=0) {
    ufoSeventh1HpLeftEl.textContent = 0
    ufoSeventh1El.style.opacity = '0'
    ufoSeventh1El.classList.add('removed')
    ufoSeventh1ImgEl.src = "../images/burst(3).png" 
    ufoSeventh1ImgEl.style.transform = 'scale(1.3)'
}
} //일곱번째-1 ufo침공

if((locX>=enemyLocX+3800-250) && (locX<=enemyLocX+3800+150)
&& (locY>=540) && (locY<=720)) {
ufoSeventh2HpEl.style.width = `calc(${hpgaugeUfoSeventh2}% - 5%)`
ufoSeventh2HpLeftEl.textContent = parseInt(hpgaugeUfoSeventh2*8)-40 //400,360,320,280...
ufoSeventh2El.style.visibility = 'hidden'
setTimeout(() => {ufoSeventh2El.style.visibility = 'visible'},50)
hpgaugeUfoSeventh2 = hpgaugeUfoSeventh2 - 5
if(hpgaugeUfoSeventh2<=0) {
    ufoSeventh2HpLeftEl.textContent = 0
    ufoSeventh2El.style.opacity = '0'
    ufoSeventh2El.classList.add('removed')
    ufoSeventh2ImgEl.src = "../images/burst(3).png" 
    ufoSeventh2ImgEl.style.transform = 'scale(1.3)'
}
} //일곱번째-2 ufo침공
            
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
        if(e.code == 'KeyS') {
            starManImgEl.style.transform = `rotate(90deg)`
            starManEl.classList.add('candybarsmash')
            setTimeout(() => {
                starManImgEl.style.transform = `rotate(0)`
                starManEl.classList.remove('candybarsmash')
            }, 100)

            if((locX>=enemyLocX+1900-150) && (locX<=enemyLocX+1900+150)
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

if((locX>=enemyLocX+1900-150) && (locX<=enemyLocX+1900+150)
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

if((locX>=enemyLocX+2600-150) && (locX<=enemyLocX+2600+150)
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

if((locX>=enemyLocX+2600-150) && (locX<=enemyLocX+2600+150)
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

if((locX>=enemyLocX+2600-150) && (locX<=enemyLocX+2600+150)
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

if((locX>=enemyLocX+2600-150) && (locX<=enemyLocX+2600+150)
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

if((locX>=enemyLocX+3400-250) && (locX<enemyLocX+3400+150)
&& (locY>=300) && (locY<=480)) {
ufoSixth1HpEl.style.width = `calc(${hpgaugeUfoSixth1}% - 10%)`
ufoSixth1HpLeftEl.textContent = parseInt(hpgaugeUfoSixth1*8)-80 //400,360,320,280...
ufoSixth1El.style.visibility = 'hidden'
setTimeout(() => {ufoSixth1El.style.visibility = 'visible'},50)
hpgaugeUfoSixth1 = hpgaugeUfoSixth1 - 10
if(hpgaugeUfoSixth1<=0) {
    ufoSixth1HpLeftEl.textContent = 0
    ufoSixth1El.style.opacity = '0'
    ufoSixth1El.classList.add('removed')
    ufoSixth1ImgEl.src = "../images/burst(3).png" 
    ufoSixth1ImgEl.style.transform = 'scale(1.3)'
}
} //여섯번째-1 ufo침공

if((locX>=enemyLocX+3400-250) && (locX<=enemyLocX+3400+150)
&& (locY>=540) && (locY<=720)) {
ufoSixth2HpEl.style.width = `calc(${hpgaugeUfoSixth2}% - 10%)`
ufoSixth2HpLeftEl.textContent = parseInt(hpgaugeUfoSixth2*8)-80 //400,360,320,280...
ufoSixth2El.style.visibility = 'hidden'
setTimeout(() => {ufoSixth2El.style.visibility = 'visible'},50)
hpgaugeUfoSixth2 = hpgaugeUfoSixth2 - 10
if(hpgaugeUfoSixth2<=0) {
    ufoSixth2HpLeftEl.textContent = 0
    ufoSixth2El.style.opacity = '0'
    ufoSixth2El.classList.add('removed')
    ufoSixth2ImgEl.src = "../images/burst(3).png" 
    ufoSixth2ImgEl.style.transform = 'scale(1.3)'
}
} //여섯번째-2 ufo침공

if((locX>=enemyLocX+3800-250) && (locX<=enemyLocX+3800+150)
&& (locY>=300) && (locY<=480)) {
ufoSeventh1HpEl.style.width = `calc(${hpgaugeUfoSeventh1}% - 10%)`
ufoSeventh1HpLeftEl.textContent = parseInt(hpgaugeUfoSeventh1*8)-80 //400,360,320,280...
ufoSeventh1El.style.visibility = 'hidden'
setTimeout(() => {ufoSeventh1El.style.visibility = 'visible'},50)
hpgaugeUfoSeventh1 = hpgaugeUfoSeventh1 - 10
if(hpgaugeUfoSeventh1<=0) {
    ufoSeventh1HpLeftEl.textContent = 0
    ufoSeventh1El.style.opacity = '0'
    ufoSeventh1El.classList.add('removed')
    ufoSeventh1ImgEl.src = "../images/burst(3).png" 
    ufoSeventh1ImgEl.style.transform = 'scale(1.3)'
}
} //일곱번째-1 ufo침공

if((locX>=enemyLocX+3800-250) && (locX<=enemyLocX+3800+150)
&& (locY>=540) && (locY<=720)) {
ufoSeventh2HpEl.style.width = `calc(${hpgaugeUfoSeventh2}% - 10%)`
ufoSeventh2HpLeftEl.textContent = parseInt(hpgaugeUfoSeventh2*8)-80 //400,360,320,280...
ufoSeventh2El.style.visibility = 'hidden'
setTimeout(() => {ufoSeventh2El.style.visibility = 'visible'},50)
hpgaugeUfoSeventh2 = hpgaugeUfoSeventh2 - 10
if(hpgaugeUfoSeventh2<=0) {
    ufoSeventh2HpLeftEl.textContent = 0
    ufoSeventh2El.style.opacity = '0'
    ufoSeventh2El.classList.add('removed')
    ufoSeventh2ImgEl.src = "../images/burst(3).png" 
    ufoSeventh2ImgEl.style.transform = 'scale(1.3)'
}
} //일곱번째-2 ufo침공


        }
    })
}, 20000)



setTimeout(() => {   //스타맨 4-미사일 피격
    let starManHit4_1_1 = setInterval(() => {  //첫번째 미사일 이것만 실행됨
        if((locX>=missileFourth1LocX-50) && (locX<=missileFourth1LocX+50) 
        && (locY>=400) && (locY<=470) && (!ufoFourth1El.classList.contains('removed'))) {
            starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
            starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
            starManHpgauge = starManHpgauge - 5
            starManImgEl.style.opacity = '0'
            setTimeout(() => {starManImgEl.style.opacity = '1'}, 100)
            setTimeout(() => {ufoFourth1El.classList.add('missileReloaded')}, 1000)
            clearInterval(starManHit4_1_1)
        }
    }, )
    let starManHit4_1_2 = setInterval(() => {   //두번째 미사일 이것만 실행됨
        if((locX>=missileFourth1LocX-50) && (locX<=missileFourth1LocX+50) 
        && (ufoFourth1El.classList.contains('missileReloaded'))
        && (locY>=400) && (locY<=470) && (!ufoFourth1El.classList.contains('removed'))) {
            starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
            starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
            starManHpgauge = starManHpgauge - 5
            starManImgEl.style.opacity = '0'
            setTimeout(() => {starManImgEl.style.opacity = '1'}, 100)
            clearInterval(starManHit4_1_2)
        }
    }, )

    let starManHit4_2_1 = setInterval(() => {  //첫번째 미사일 이것만 실행됨
        if((locX>=missileFourth2LocX-50) && (locX<=missileFourth2LocX+50) 
        && (locY>=630) && (locY<=700) && (!ufoFourth2El.classList.contains('removed'))) {
            starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
            starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
            starManHpgauge = starManHpgauge - 5
            starManImgEl.style.opacity = '0'
            setTimeout(() => {starManImgEl.style.opacity = '1'}, 100)
            setTimeout(() => {ufoFourth2El.classList.add('missileReloaded')}, 1000)
            clearInterval(starManHit4_2_1)
        }
    }, )
    let starManHit4_2_2 = setInterval(() => {   //두번째 미사일 이것만 실행됨
        if((locX>=missileFourth2LocX-50) && (locX<=missileFourth2LocX+50) 
        && (ufoFourth2El.classList.contains('missileReloaded'))
        && (locY>=630) && (locY<=700) && (!ufoFourth2El.classList.contains('removed'))) {
            starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
            starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
            starManHpgauge = starManHpgauge - 5
            starManImgEl.style.opacity = '0'
            setTimeout(() => {starManImgEl.style.opacity = '1'}, 100)
            clearInterval(starManHit4_2_2)
        }
    }, )

}, 20000)



setTimeout(() => {   //스타맨 5-미사일 피격

    let starManHit5_1_1 = setInterval(() => {  //첫번째 미사일 이것만 실행됨
        if((locX>=missileFifth1LocX-50) && (locX<=missileFifth1LocX+50) 
        && (locY>=310) && (locY<=380) && (!ufoFifth1El.classList.contains('removed'))) {
            starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
            starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
            starManHpgauge = starManHpgauge - 5
            starManImgEl.style.opacity = '0'
            setTimeout(() => {starManImgEl.style.opacity = '1'}, 100)
            setTimeout(() => {ufoFifth1El.classList.add('missileReloaded')}, 1000)
            clearInterval(starManHit5_1_1)
        }
    }, )
    let starManHit5_1_2 = setInterval(() => {   //두번째 미사일 이것만 실행됨
        if((locX>=missileFifth1LocX-50) && (locX<=missileFifth1LocX+50) 
        && (ufoFifth1El.classList.contains('missileReloaded'))
        && (locY>=310) && (locY<=380) && (!ufoFifth1El.classList.contains('removed'))) {
            starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
            starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
            starManHpgauge = starManHpgauge - 5
            starManImgEl.style.opacity = '0'
            setTimeout(() => {starManImgEl.style.opacity = '1'}, 100)
            clearInterval(starManHit5_1_2)
        }
    })

    let starManHit5_2_1 = setInterval(() => {  //첫번째 미사일 이것만 실행됨
        if((locX>=missileFourth1LocX-50) && (locX<=missileFifth2LocX+50) 
        && (locY>=470) && (locY<=540) && (!ufoFifth2El.classList.contains('removed'))) {
            starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
            starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
            starManHpgauge = starManHpgauge - 5
            starManImgEl.style.opacity = '0'
            setTimeout(() => {starManImgEl.style.opacity = '1'}, 100)
            setTimeout(() => {ufoFifth2El.classList.add('missileReloaded')}, 1000)
            clearInterval(starManHit5_2_1)
        }
    }, )
    let starManHit5_2_2 = setInterval(() => {   //두번째 미사일 이것만 실행됨
        if((locX>=missileFifth2LocX-50) && (locX<=missileFifth2LocX+50) 
        && (ufoFifth2El.classList.contains('missileReloaded'))
        && (locY>=470) && (locY<=540) && (!ufoFifth2El.classList.contains('removed'))) {
            starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
            starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
            starManHpgauge = starManHpgauge - 5
            starManImgEl.style.opacity = '0'
            setTimeout(() => {starManImgEl.style.opacity = '1'}, 100)
            clearInterval(starManHit5_2_2)
        }
    })

    let starManHit5_3_1 = setInterval(() => {  //첫번째 미사일 이것만 실행됨
        if((locX>=missileFifth3LocX-50) && (locX<=missileFifth3LocX+50) 
        && (locY>=590) && (locY<=660) && (!ufoFifth3El.classList.contains('removed'))) {
            starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
            starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
            starManHpgauge = starManHpgauge - 5
            starManImgEl.style.opacity = '0'
            setTimeout(() => {starManImgEl.style.opacity = '1'}, 100)
            setTimeout(() => {ufoFifth3El.classList.add('missileReloaded')}, 1000)
            clearInterval(starManHit5_3_1)
        }
    }, )
    let starManHit5_3_2 = setInterval(() => {   //두번째 미사일 이것만 실행됨
        if((locX>=missileFourth1LocX-50) && (locX<=missileFifth3LocX+50) 
        && (ufoFifth3El.classList.contains('missileReloaded'))
        && (locY>=590) && (locY<=660) && (!ufoFifth3El.classList.contains('removed'))) {
            starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
            starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
            starManHpgauge = starManHpgauge - 5
            starManImgEl.style.opacity = '0'
            setTimeout(() => {starManImgEl.style.opacity = '1'}, 100)
            clearInterval(starManHit5_3_2)
        }
    })

    let starManHit5_4_1 = setInterval(() => {  //첫번째 미사일 이것만 실행됨
        if((locX>=missileFifth4LocX-50) && (locX<=missileFifth4LocX+50) 
        && (locY>=710) && (locY<=780) && (!ufoFifth4El.classList.contains('removed'))) {
            starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
            starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
            starManHpgauge = starManHpgauge - 5
            starManImgEl.style.opacity = '0'
            setTimeout(() => {starManImgEl.style.opacity = '1'}, 100)
            setTimeout(() => {ufoFifth4El.classList.add('missileReloaded')}, 1000)
            clearInterval(starManHit5_4_1)
        }
    }, )
    let starManHit5_4_2 = setInterval(() => {   //두번째 미사일 이것만 실행됨
        if((locX>=missileFifth4LocX-50) && (locX<=missileFifth4LocX+50) 
        && (ufoFifth4El.classList.contains('missileReloaded'))
        && (locY>=710) && (locY<=780) && (!ufoFifth4El.classList.contains('removed'))) {
            starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
            starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
            starManHpgauge = starManHpgauge - 5
            starManImgEl.style.opacity = '0'
            setTimeout(() => {starManImgEl.style.opacity = '1'}, 100)
            clearInterval(starManHit5_4_2)
        }
    })

}, 27000)


setTimeout(() => {              //자이언트 캔디 
    window.addEventListener('keydown', e => {
        if(e.code == 'KeyD') {
            starManImgEl.src = "../images/giantcandy.png"
            starManImgEl.style.backgroundSize = '134%'
            starManImgEl.style.backgroundPositionY = '-60px'
        }
    })
}, 46000)

setTimeout(() => {
    const blinking = setInterval(() => {
        document.querySelector('.skillnotice.skillnotice1').style.visibility = 'visible'
        setTimeout(() => {
            document.querySelector('.skillnotice.skillnotice1').style.visibility = 'hidden'
        }, 400)
    }, 600)
    setTimeout(() => {
        clearInterval(blinking)
        document.querySelector('.skillnotice.skillnotice1 img').style.visibility = 'visible'
        document.querySelector('.skillnotice.skillnotice1 img').style.transform = 'translate(-300px,-95px)'
    }, 10000)
}, 20000) //캔디바 스매시 스킬 등장 알림

setTimeout(() => {
    const blinking = setInterval(() => {
        document.querySelector('.skillnotice.skillnotice2').style.visibility = 'visible'
        setTimeout(() => {
            document.querySelector('.skillnotice.skillnotice2').style.visibility = 'hidden'
        }, 400)
    }, 600)
    setTimeout(() => {
        clearInterval(blinking)
        document.querySelector('.skillnotice.skillnotice2 img').style.visibility = 'visible'
        document.querySelector('.skillnotice.skillnotice2 img').style.transform = 'translate(-250px,-95px)'
    }, 10000)
}, 46000) //자이언트 캔디 스킬 등장 알림

let bighpgauge = 100

const ufoFirstAlive = setTimeout(() => {
    if(!ufoFirstEl.classList.contains('removed')) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.8%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-400
        bighpgauge = bighpgauge - 0.8
    }
},13000)

const ufoSecondAlive = setTimeout(() => {
    if(!ufoSecond1El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.8%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-400
        bighpgauge = bighpgauge - 0.8
    }
    if(!ufoSecond2El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.8%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-400
        bighpgauge = bighpgauge - 0.8
    }
}, 18000)

const ufoThirdAlive = setTimeout(() => {
    if(!ufoThird1El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.8%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-400
        bighpgauge = bighpgauge - 0.8
    }
    if(!ufoThird2El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.8%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-400
        bighpgauge = bighpgauge - 0.8
    }
    if(!ufoThird3El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.8%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-400
        bighpgauge = bighpgauge - 0.8
    }
}, 25000)

const ufoFourthAlive = setTimeout(() => {
    if(!ufoFourth1El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.8%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-400
        bighpgauge = bighpgauge - 0.8
    }
    if(!ufoFourth2El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.8%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-400
        bighpgauge = bighpgauge - 0.8
    }
}, 32000)

const ufoFifthAlive = setTimeout(() => {
    if(!ufoFifth1El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.8%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-400
        bighpgauge = bighpgauge - 0.8
    }
    if(!ufoFifth2El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.8%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-400
        bighpgauge = bighpgauge - 0.8
    }
    if(!ufoFifth3El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.8%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-400
        bighpgauge = bighpgauge - 0.8
    }
    if(!ufoFifth4El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 0.8%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-400
        bighpgauge = bighpgauge - 0.8
    }
}, 39000)

const ufoSixthAlive = setTimeout(() => {
    if(!ufoSixth1El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 1.6%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-800
        bighpgauge = bighpgauge - 1.6
    }
    if(!ufoSixth2El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 1.6%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-800
        bighpgauge = bighpgauge - 1.6
    }
}, 46000)

const ufoSeventhAlive = setTimeout(() => {
    if(!ufoSeventh1El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 1.6%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-800
        bighpgauge = bighpgauge - 1.6
    }
    if(!ufoSeventh2El.classList.contains('removed') ) {
        bigHpEl.style.width = `calc(${bighpgauge}% - 1.6%)`
        bigHpLeftEl.textContent = parseInt(bighpgauge*500)-800
        bighpgauge = bighpgauge - 1.6
    }
}, 50000)


// if((locX>=fourth1MissileLocX)) {
//     let starManHpgauge = 100
//     starManHpEl.style.width = `calc(${starManHpgauge}% - 5%)`
//     starManHpLeftEl.textContent = parseInt(starManHpgauge) - 5
//     starManHpgauge = starManHpgauge - 5}


