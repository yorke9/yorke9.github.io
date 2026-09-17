// 页面只使用原生 JavaScript；主要内容可直接在 index.html 中修改。
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const navigationLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const backToTopButton = document.querySelector(".back-to-top");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// 手机端菜单：按钮状态与菜单是否展开始终同步。
function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
}

menuButton.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  navigation.classList.toggle("is-open", willOpen);
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.setAttribute("aria-label", willOpen ? "Close navigation menu" : "Open navigation menu");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeMenu();
});

// 站内链接平滑滚动；系统设置“减少动态效果”时改为直接跳转。
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" });
    // 更新网址中的锚点，方便复制链接或刷新后回到对应区域。
    // 某些浏览器对 file:// 页面的历史记录有限制；滚动本身仍可正常使用。
    try {
      history.pushState(null, "", link.getAttribute("href"));
    } catch (error) {
      // 直接双击打开文件时，忽略浏览器对地址栏操作的限制。
    }
    if (link.classList.contains("skip-link")) target.focus({ preventScroll: true });
  });
});

// 根据滚动位置更新当前导航，并在下滑后显示返回顶部按钮。
let scrollFrameRequested = false;
function updateScrollState() {
  const marker = window.innerHeight * 0.35;
  let activeId = "home";
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) activeId = section.id;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    activeId = sections[sections.length - 1].id;
  }

  for (const link of navigationLinks) {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
  backToTopButton.hidden = window.scrollY < 500;
  scrollFrameRequested = false;
}

window.addEventListener("scroll", () => {
  if (!scrollFrameRequested) {
    requestAnimationFrame(updateScrollState);
    scrollFrameRequested = true;
  }
}, { passive: true });
window.addEventListener("resize", updateScrollState);
updateScrollState();

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
});

// 元素第一次进入视口时轻微淡入；不支持 IntersectionObserver 时直接显示。
const revealItems = [...document.querySelectorAll("[data-reveal]")];
if ("IntersectionObserver" in window && !reduceMotion.matches) {
  document.documentElement.classList.add("js-enabled");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
  revealItems.forEach((item) => revealObserver.observe(item));
}
