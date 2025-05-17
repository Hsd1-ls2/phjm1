let cart = [];

function addToCart(item) {
  cart.push(item);
  alert("تمت الإضافة إلى السلة: " + item);
}

document.addEventListener("DOMContentLoaded", function () {
  const sendBtn = document.getElementById('sendWhatsApp');
  if (sendBtn) {
    sendBtn.addEventListener('click', function () {
      if (cart.length === 0) {
        alert("السلة فارغة!");
        return;
      }
      const message = encodeURIComponent("مرحبًا، أرغب في شراء:\n" + cart.join("\n"));
      const phone = "+9647717702898"; // عدّل الرقم حسب الحاجة
      this.href = `https://wa.me/${phone}?text=${message}`;
    });
  }
});
