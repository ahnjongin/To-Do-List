const quotes = [
  {
    quote:"위대한 사람은 말은 겸손하지만 행동이 남보다 뛰어나다.",
    author:"공자",
  },
  {
    quote:"경영이란 바로 다른 이들에게 동기를 부여하는 일이다.",
    author:"리 아이아코카",
  },
  {
    quote:"당신은 지체할 수도 있지만 시간은 그러하지 않을 것이다.",
    author:"벤자민 프랭클린",
  },
  {
    quote:"과거를 기억 못하는 이들은 과거를 반복하기 마련이다.",
    author:"조지 산타야나",
  },
  {
    quote:"그대는 인생을 사랑하는가? 그렇다면 시간을 낭비하지 말라, 시간이야말로 인생을 형성하는 재료이기 때문이다.",
    author:"벤자민 프랭클린",
  },
  {
    quote:"실패하는 것은 곧 성공으로 한 발짝 더 나아가는 것이다.",
    author:"메리 케이 애쉬",
  },
  {
    quote:"성공은 친구를 만들고, 역경은 친구를 시험한다.",
    author:"퍼블릴리어스 사이러스",
  },
  {
    quote:"가장 큰 위험은 위험없는 삶이다.",
    author:"스티븐 코비",
  },
  {
    quote:"스스로를 존경하면 다른 사람도 당신을 존경할 것이다.",
    author:"공자",
  }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote=(quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;
