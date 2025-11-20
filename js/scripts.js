// 인사말 변경 함수
function changeGreetings() {
  const greeting = document.getElementById("greeting");
  console.log(greeting);

  const time = new Date().getHours();
  console.log(time);

  let greetingText = "";
  if (time < 6) {
    greetingText =
      "좋은 새벽입니다.<br /><strong class='home__title__strong'>김대영</strong>입니다.";
  } else if (time < 12) {
    greetingText =
      "좋은 아침입니다.<br /><strong class='home__title__strong'>김대영</strong>입니다.";
  } else if (time < 18) {
    greetingText =
      "좋은 오후입니다.<br /><strong class='home__title__strong'>김대영</strong>입니다.";
  } else {
    greetingText =
      "좋은 저녁입니다.<br /><strong class='home__title__strong'>김대영</strong>입니다.";
  }

  greeting.innerHTML = greetingText;
}

let isDarkMode = true;

function initDarkModeButton() {
  const btn = document.getElementById("darkmode-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (isDarkMode) {
      // 다크모드 → 라이트모드
      document.body.classList.add("light-mode");
      btn.textContent = "다크모드 : OFF";
      isDarkMode = false;
    } else {
      // 라이트모드 → 다크모드
      document.body.classList.remove("light-mode");
      btn.textContent = "다크모드 : ON";
      isDarkMode = true;
    }
  });
}

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function initPortfolioFilter() {
  const buttons = document.querySelectorAll(".category");
  const projects = document.querySelectorAll(".project");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 버튼 스타일 변경
      buttons.forEach((b) => b.classList.remove("category--selected"));
      btn.classList.add("category--selected");

      const label = btn.childNodes[0].textContent.trim();

      projects.forEach((project) => {
        if (label === "ALL") {
          project.classList.remove("hide");
        } else if (project.classList.contains(label)) {
          project.classList.remove("hide");
        } else {
          project.classList.add("hide");
        }
      });
    });
  });
}

function initScrollAnimation() {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec) => sec.classList.add("scroll-animate"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 화면에 들어올 때
          entry.target.classList.add("show");
        } else {
          // 화면에서 다시 나가면
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach((sec) => observer.observe(sec));
}

function applyAll() {
  changeGreetings();
  initDarkModeButton();
  initSmoothScroll();
  initPortfolioFilter();
  initScrollAnimation();
}

applyAll();
