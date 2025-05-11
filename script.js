// ترجمة النصوص
const translations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Information",
    contact: "Contact",
    "hero.title": "Hi, I'm Islem",
    "hero.subtitle": "Front-End Developer & Designer",
    "about.title": "Who I am?",
    "about.description": "I am Islem, a web developer passionate about code, design, and creativity. I build engaging and clean websites.",
    "projects.title": "Books for learning",
    "book1.title": "Python Programming Guide",
    "book1.description": "Complete guide from basics to advanced topics",
    "book2.title": "Modern Web Design",
    "book2.description": "Learn responsive design and UI/UX principles",
    "book3.title": "JavaScript Mastery",
    "book3.description": "Advanced JavaScript concepts and patterns",
    "book4.title": "HTML Book",
    "book4.description": "",
    "download": "Download",
    "contact.title": "Contact Me",
    "contact.email": "Email: islemhanache49@gmail.com",
    "contact.phone": "Phone number: 0552497465",
    "skills.title": "My Skills",
    "skill1.name": "HTML",
    "skill2.name": "CSS",
    "skill3.name": "JavaScript",
    "skill4.name": "UI/UX Design",
  },
  ar: {
    home: "الرئيسية",
    about: "عني",
    projects: "المعلومات",
    contact: "اتصل بي",
    "hero.title": "مرحباً، أنا إسلام",
    "hero.subtitle": "مطور واجهات أمامية ومصمم",
    "about.title": "من أنا؟",
    "about.description": "أنا إسلام، مطور ويب شغوف بالبرمجة والتصميم والإبداع. أبني مواقع ويب جذابة ونظيفة.",
    "projects.title": "كتب للتعلم",
    "book1.title": "دليل برمجة بايثون",
    "book1.description": "دليل كامل من الأساسيات إلى المواضيع المتقدمة",
    "book2.title": "تصميم ويب حديث",
    "book2.description": "تعلم التصميم المتجاوب ومبادئ واجهة المستخدم/تجربة المستخدم",
    "book3.title": "إتقان جافا سكريبت",
    "book3.description": "مفاهيم وأنماط متقدمة في جافا سكريبت",
    "book4.title": "كتاب HTML",
    "book4.description": "",
    "download": "تحميل",
    "contact.title": "اتصل بي",
    "contact.email": "البريد الإلكتروني: islemhanache49@gmail.com",
    "contact.phone": "رقم الهاتف: 0552497465",
    "skills.title": "مهاراتي",
    "skill1.name": "HTML",
    "skill2.name": "CSS",
    "skill3.name": "JavaScript",
    "skill4.name": "تصميم واجهات المستخدم",
  }
};

// تغيير اللغة (بدون عكس الاتجاه)
function changeLanguage(lang) {
  // تغيير لغة الصفحة فقط (بدون تغيير الاتجاه)
  document.documentElement.lang = lang;
  
  // تحديث جميع النصوص
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // تحديث نص زر التبديل
  document.getElementById('language-toggle').textContent = 
    lang === 'en' ? 'English' : 'العربية';
  
  // حفظ اللغة المفضلة
  localStorage.setItem('preferredLanguage', lang);
}

// تهيئة اللغة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
  // تحديد اللغة المفضلة من localStorage أو استخدام الإنجليزية افتراضيًا
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  changeLanguage(savedLang);
  
  // إضافة حدث النقر على زر التبديل
  document.getElementById('language-toggle').addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    changeLanguage(newLang);
  });
});
// تحسينات القائمة المنسدلة
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '☰';
  menuToggle.setAttribute('aria-label', 'Toggle menu');
  document.querySelector('.navbar .container').prepend(menuToggle);
  
  menuToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
  });
  
  // إغلاق القائمة عند النقر على رابط
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('active');
      document.querySelector('.menu-toggle').innerHTML = '☰';
    });
  });
});
// أضف هذا في نهاية ملف script.js
function animateSkillBars() {
  const skills = document.querySelectorAll('.skill-level');
  skills.forEach(skill => {
    const level = skill.getAttribute('data-level');
    skill.style.setProperty('--target-width', level);
    skill.style.width = level;
  });
}

// استدعاء الدالة عند التمرير إلى القسم
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
      }
    });
  }, { threshold: 0.5 });

  const skillsSection = document.querySelector('.skills');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
});
