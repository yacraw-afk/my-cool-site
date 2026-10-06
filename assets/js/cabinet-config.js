/**
 * Cabinet config for status.html (demo stub on Vercel).
 * On MikroTik Hotspot these values come from the router / admin.
 */
window.CABINET_CONFIG = {
  whatsapp: "",
  telegram: "",
  packages: [
    { id: "1h", profile: "1hour", name: "1 час", duration: "1 ч", price: "20 ₴", seconds: 3600 },
    { id: "1d", profile: "1day", name: "1 день", duration: "24 ч", price: "50 ₴", seconds: 86400 },
    { id: "7d", profile: "7day", name: "7 дней", duration: "7 дн", price: "200 ₴", seconds: 604800 }
  ]
};
