let Q = [

    {
        question: 'Which picture is more your style and vibe?',
        type: 'img',
        choices: [
            {
                img: 'img-vintage.webp',
                text: 'Vintage'
            },
            {
                img: 'img-luxury.jpeg',
                text: 'Luxury'
            },
            {
                img: 'img-minimalist.jpeg',
                text: 'Minimalist'
            },
            {
                img: 'img-renaissance.webp',
                text: 'Renaissance'
            },
        ]
    },

    {
        question: 'Please rank your excitement for the below events from MOST to LEAST excited.',
        type: 'sort',
        choices: [
            'E-book sale for $100',
            '$50 Deposit for a new Discovery Call',
            'Coaching booking for $150',
            'Invitation to an exclusive creator event',
            '"Re: Paid Collab Opportunity with XXX"'
        ]
    },
    {
        question: 'If you had to choose to do one of the following in the next hour, you would:',
        type: 'text',
        choices: [
            'Coach a client for $300',
            'Be interviewed by a podcast',
            'Shoot an UGC video for $150',
            'Make & promote a new product',
            'Have a friend treat you to a $50 meal'
        ]
    },
    {
        question: 'Taking client calls and coaching calls are ______________',
        type: 'text',
        choices: [
            'Exciting and I look forward to them!',
            'Great in moderation (limited per month)',
            'Acceptable if it’s paid',
            'Draining and I no longer look forward to them',
            'Ew, no'
        ]
    },
    {
        question: 'What makes you happier?',
        type: 'text',
        choices: [
            'Your last video goes viral (1 million views!)',
            'You receive 100 appreciative comments on a post',
            'Your follower count grows by 10% in a week',
            'You receive a large gift box from a new company',
            'One of your favorite creators DMs you for a collab'
        ]
    },
    {
        question: 'What is your horoscope?',
        type: 'text',
        choices: [
            `Horoscopes aren't my thing`,
            `Aries  (March 21 – April 19)`,
            `Taurus  (April 20 – May 20)`,
            `Gemini  (May 21 – June 20)`,
            `Cancer  (June 21 – July 22)`,
            `Leo  (July 23 – August 22)`,
            `Virgo  (August 23 – September 22)`,
            `Libra  (September 23 – October 22)`,
            `Scorpio  (October 23 – November 21)`,
            `Sagittarius  (November 22 – December 21)`,
            `Capricorn  (December 22 – January 19)`,
            `Aquarius  (January 20 – February 18)`,
            `Pisces  (February 19 – March 20)`,
        ]
    },
    {
        question: 'You believe that link-in-bios should be primarily for?',
        type: 'text',
        choices: [
            'Branding: To show off your brand',
            'Sales: To convert leads to sales',
            'Lead: To convert audience to leads',
            'Deals: To promote brand deal clients'
        ]
    },
    {
        question: 'What is your Instagram handle?',
        type: 'input',
        choices: []
    },
]

let r =
    `
    Aries (March 21 – April 19)
Taurus (April 20 – May 20)
Gemini (May 21 – June 20)
Cancer (June 21 – July 22)
Leo (July 23 – August 22)
Virgo (August 23 – September 22)
Libra (September 23 – October 22)
Scorpio (October 23 – November 21)
Sagittarius (November 22 – December 21)
Capricorn (December 22 – January 19)
Aquarius (January 20 – February 18)
Pisces (February 19 – March 20)

    `

function Id(el) {
    return document.getElementById(el)
}

function Class(el) {
    return document.getElementsByClassName(el)
}

let RESULT = []

let alphabet = 'abcdefghijklmnopqrstuvwxyz'

let area = Id('area')

function Itemify(obj, n) {
    let str =
    `
    <div class = 'question'>
    <h1> ${obj.question} </h1>
    `

    switch (obj.type) {

        case 'text':
            str += `<div class = 'choices' id = 'choices-${n}'>`
            for (let i = 0; i < obj.choices.length; i++){
                let text = obj.choices[i]
                str +=
                `
                <div class = 'choice choice-${n}' id = 'choice-${n}-${i}'>
                    <p>  <span> ${alphabet[i]}) </span> ${text} </p>
                </div>
                `
            }
            break

        case 'sort':
            str +=
                `
                <div class = 'choices' id = 'choices-${n}'>
                <h3> Most </h3>
                `
            for (let i = 0; i < obj.choices.length; i++){
                let text = obj.choices[i]
                str +=
                `
                <div class = 'sortable sortable-${n}' id = 'sortable-${n}-${i}'>
                    <div class = 'handle'>
                        <div class = 'bar'></div>
                        <div class = 'bar'></div>
                        <div class = 'bar'></div>
                    </div>
                    <p>  ${text} </p>
                </div>
                `
            }
            str += `<h3> Least </h3>`
            break

        case 'img':
            str += `<div class = 'grid' id = 'choices-${n}'>`
            for (let i = 0; i < obj.choices.length; i++){
                let img = obj.choices[i].img
                let text = obj.choices[i].text
                str +=
                `
                <div class = 'img choice-${n}' id = 'img-${n}-${i}'>
                    <img src = 'assets/${img}'>
                </div>
                `
            }
            break

        case 'input':
            str += `<div class = 'choices' id = 'choices-${n}'>`
            str += `<input type = 'text' id = 'input-${n}' placeholder = 'Type here...'>`
            break

        default:
            break
    }

    str += `</div> <button class = 'next' id = 'next-${n}'> Next </button> </div>`

    return str
}

function Draw(list) {

    // Draw

    let str = `<div id = 'menu'>`

    for (let i = 0; i < list.length; i++) {
        str +=  `<div class = 'num' id = 'num-${i}'> <h2> ${i+1} </h2> </div>`
    }

    str +=  `</div>`

    for (let i = 0; i < list.length; i++){
        let obj = list[i]
        str += Itemify(obj, i)
        RESULT.push(
            {
                q: obj.question,
                t: obj.type,
                n: null,
                a: ''
            }
        )
    }

    area.innerHTML = str

    // Interaction

    for (let i = 0; i < list.length; i++) {
        let obj = list[i]
        let num = Id(`num-${i}`)
        let next = Id(`next-${i}`)
        let area = Id(`choices-${i}`)

        console.log(next)

        next.onclick = () => { Activate(i+1) }
        num.onclick = () => { Activate(i) }


        let choices = Class(`choice-${i}`)

        // Choices

        switch (obj.type) {

            case 'text':
                for (let j = 0; j < list[i].choices.length; j++){
                    let text = list[i].choices[j]
                    let choice = Id(`choice-${i}-${j}`)

                    choice.onclick = () => {
                        for (let k = 0; k < choices.length; k++){
                            choices[k].classList.remove('active')
                        }
                        choice.classList.add('active')
                        next.classList.add('active')
                        RESULT[i].a = text
                        RESULT[i].n = j
                    }
                }
                break

            case 'img':
                for (let j = 0; j < list[i].choices.length; j++){
                    let text = list[i].choices[j].text
                    let choice = Id(`img-${i}-${j}`)

                    choice.onclick = () => {
                        for (let k = 0; k < choices.length; k++){
                            choices[k].classList.remove('active')
                        }
                        choice.classList.add('active')
                        next.classList.add('active')
                        RESULT[i].a = text
                        RESULT[i].n = j
                    }
                }
                break

            case 'sort':
                Sortable.create(area, {
                    animation: 150,
                    dragoverBubble: true,
                    draggable: '.sortable',
                    ghostClass: 'bro'
                });
                next.classList.add('active')
                next.style.marginTop = '15px'

                break

            case 'input':
                Id(`input-${i}`).oninput = () => {
                    next.classList.add('active')
                }

                break

            default:
                break
        }
    }

}



function Activate(n) {

    let cards = Class('question')
    let nums = Class('num')

    if (n > cards.length-1) {
        Id('end').classList.add('active')
        return
    }

    for (let i = 0; i < cards.length; i++){
        let card = cards[i]
        let num = nums[i]

        card.classList.remove('active')
        num.classList.remove('active')
    }

    cards[n].classList.add('active')
    nums[n].classList.add('active')
    if (RESULT[n].n) {
        Id(`choice-${n}-${RESULT[n].n}`).classList.add('active')
    }
}

Draw(Q)

Activate(0)


Id('start').onclick = () => {Id('splash').classList.remove('active')}