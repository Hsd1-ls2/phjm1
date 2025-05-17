// إدارة عربة التسوق في localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartCountSpan = document.getElementById('cart-count');
const updateCartCount = () => {
  cartCountSpan.textContent = cart.length;
};
updateCartCount();

// زر عربة التسوق يفتح صفحة العربة
document.getElementById('cart-button').addEventListener('click', () => {
  window.location.href = 'cart.html';
});

// زر تسجيل الدخول يفتح صفحة تسجيل الدخول
document.getElementById('login-button').addEventListener('click', () => {
  window.location.href = 'login.html';
});

// اختيار اللغة (تغيير اللغة فقط واجهة الآن)
document.getElementById('language-select').addEventListener('change', (e) => {
  const lang = e.target.value;
  alert(`تم اختيار اللغة: ${lang === 'ar' ? 'العربية' : 'English'}\n (يمكنك تعديل هذه الوظيفة لاحقًا)`);
  // يمكن هنا إضافة دعم تغيير اللغة الفعلي لاحقًا
});

// بحث عن المنتجات (مجرد مثال بسيط)
document.getElementById('search-input').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  if (!searchTerm) {
    // لا تفعل شيء حاليا، يمكن إضافة تحسينات لاحقا
    return;
  }
  // توجه المستخدم لصفحة تحتوي نتائج البحث أو تصفية المنتجات (غير مفعّل الآن)
  // يمكن تطويرها لاحقا
});
