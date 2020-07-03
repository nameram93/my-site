let phrases = [
  { text: 'взять Maxwells', image: 'https://sun9-57.userapi.com/impf/c845217/v845217990/1ec630/oYQqjIKe6Us.jpg?size=500x0&quality=90&sign=d6b03fdedd1c937b94fef9d7490bd9a5' },
  { text: 'спросить совета продавца', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'взять Bad Drip', image: 'https://img.postershop.me/146/Products/768972_1533733171.0384_original.jpg' },
  { text: 'капнуть на язык', image: 'https://get.wallhere.com/photo/women-open-mouth-mouth-lips-water-water-drops-blue-red-red-lipstick-1390509.jpg' },
  { text: 'воспользоваться считалкой', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'взять ElectroJam', image: 'https://img.postershop.me/146/Products/768953_1533731919.3707_original.jpg' },
  // { text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  // { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  // { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  // { text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}

