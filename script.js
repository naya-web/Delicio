// carousel section
document.addEventListener("DOMContentLoaded", function () {
  const slide = document.querySelector(".carousel-slide");
  const pairs = document.querySelectorAll(".image-pair");
  const delay = 2000; // 2 ثانية تأخير
  let currentIndex = 0;

  // استنساخ العنصر الأول وإضافته للنهاية لإنشاء حلقة سلسة
  const firstPairClone = pairs[0].cloneNode(true);
  slide.appendChild(firstPairClone);

  function showNextPair() {
    currentIndex++;
    slide.style.transition = "transform 1s ease-in-out";
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;

    // عند الوصول إلى العنصر المستنسخ (النهاية)
    if (currentIndex === pairs.length) {
      setTimeout(() => {
        slide.style.transition = "none";
        currentIndex = 0;
        slide.style.transform = "translateX(0)";
        setTimeout(() => {
          slide.style.transition = "transform 1s ease-in-out";
        }, 50);
      }, 1000); // بعد انتهاء الانتقال
    }
  }

  // بدء التشغيل التلقائي
  setInterval(showNextPair, delay);
});




// videos section

document.addEventListener("DOMContentLoaded", function () {
  const mainPlayer = document.getElementById("mainPlayer");
  const videoItems = document.querySelectorAll(".video-item");
  const toggleBtn = document.getElementById("toggleListBtn");
  const videoList = document.getElementById("videoList");

  // تبديل إظهار/إخفاء القائمة
  toggleBtn.addEventListener("click", () => {
    videoList.classList.toggle("hidden");
  });

  // عند النقر على فيديو فرعي
videoItems.forEach((item) => {
  item.addEventListener("click", () => {
    const src = item.getAttribute("data-src");
    mainPlayer.src = src;
    mainPlayer.play();

    // تحديث العنصر الفعّال
    videoItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

});
