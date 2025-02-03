let user = {
  id: 1,
  username: "testuser",
  links: [
    { id: 1, title: "تحميل المجلة PDF", url: "https://drive.google.com/file/d/1OqnJrh9k75OmVrTlscfFQJ-J9B5tE_Na/view?usp=drive_link", icon: "fa-regular fa-file-pdf" }
  ]
};

// دالة عرض الروابط
function displayLinks() {
  const linksContainer = document.getElementById("links");
  linksContainer.innerHTML = ""; // تنظيف القائمة
  user.links.forEach(link => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.target = "_blank"; // فتح الرابط في نافذة جديدة
    linkElement.classList.add("link-item");

    // إضافة الأيقونة والنص
    linkElement.innerHTML = `<i class="${link.icon} sp"></i> ${link.title}`;
    linksContainer.appendChild(linkElement);
  });
}

// دالة إضافة رابط جديد
document.getElementById("addLink").addEventListener("click", () => {
  const title = prompt("Enter link title:"); // طلب العنوان
  const url = prompt("Enter link URL:"); // طلب الرابط
  const icon = prompt("Enter icon class (e.g., 'fab fa-facebook'):"); // طلب الأيقونة

  if (title && url && icon) {
    const newLink = { id: Date.now(), title, url, icon };
    user.links.push(newLink); // إضافة الرابط
    displayLinks(); // تحديث العرض
  } else {
    alert("Please fill in all the fields!");
  }
});

// عرض الروابط عند تحميل الصفحة
window.onload = displayLinks;
