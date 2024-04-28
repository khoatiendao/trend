// Bấm nút sẽ hiển thị phần container
var lyric1 = document.querySelector(".dad");
document.getElementById("showButton").addEventListener("click", function() {
    var mainContainer = document.querySelector('.container')
    var audio = document.getElementById('myAudio');
    mainContainer.style.display = "block";
    this.style.display = "none"
    audio.play()
    typing()
    setTimeout(() => {
        lyric1.style.display = "block"
    },12000)
})



// Load lại web là nhạc tự động bật
// window.addEventListener('load', function() {
//     var audio = document.getElementById('myAudio');
//     audio.play();
// });


// text typing 
var textmessage_1 = document.getElementById("text-message_1")
var textmessage_2 = document.getElementById("text-message_2")
var message_string = "Được làm trọn bằng cả tấm lòng của ...";
var message_string_2 = "Đặc biệt gửi đến ...";

let messLength = 0;
let messIndex = 0;
let charIndex = 0;

function typing() {
    var typingInterval = setInterval(function() {
        if(charIndex < message_string.length) {
            let currentChar = message_string.substring(0, charIndex + 1);
            textmessage_1.textContent = currentChar;
            console.log(currentChar)
            charIndex++;
        } else {
            charIndex = 0;
            clearInterval(typingInterval)
            
            var typingInterval2 = setInterval(function() {
                if(charIndex < message_string_2.length) {
                    let currentChar2 = message_string_2.substring(0, charIndex + 1);
                    textmessage_2.textContent = currentChar2;
                    charIndex++;
                } else {
                    clearInterval(typingInterval2)
                }

            }, 100)
        }
    }, 100)
}

// mưa trái tim
function heart() {
    const container = document.querySelector('.container')

    const create = document.createElement('div');
    create.classList.add('heart')
    create.innerHTML = '❤';
    container.appendChild(create)
    create.style.left = Math.random() * 100 + 'vw';
    create.style.animationDuration = Math.random() * 3 + 2 + 's';
    setTimeout(() => {
        create.remove()
    }, 3000)
}
heart()

setInterval(heart, 200)


