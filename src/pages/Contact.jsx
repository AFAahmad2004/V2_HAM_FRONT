import React from "react";

const GREEN = "#1B4D2E";
const GOLD  = "#C9A84C";

export default function Contact() {
  return (
    <div style={{ direction: "rtl", fontFamily: "'Segoe UI', Tahoma, sans-serif", background: "#f5f7f5", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, ${GREEN}, #245f38)`, padding: "48px 24px", textAlign: "center" }}>
        <img src="/logo.png" alt="Arab Decoration" style={{ height: "70px", marginBottom: "12px" }} onError={e => e.target.style.display = "none"} />
        <h1 style={{ color: GOLD, margin: "0 0 6px", fontSize: "26px", fontWeight: "900" }}>تواصل معنا</h1>
        <p style={{ color: "rgba(255,255,255,0.6)", margin: 0 }}>يسعدنا الرد على استفساراتك</p>
      </div>

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "48px 24px" }}>
        {/* Info Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          {[
            { icon: "📞", label: "الهاتف",     value: "+966 50 000 0000" },
            { icon: "📧", label: "البريد",      value: "info@arabdecoration.com" },
            { icon: "📍", label: "الموقع",      value: "الرياض، السعودية" },
            { icon: "🕐", label: "أوقات العمل", value: "9ص – 9م (سبت - خميس)" },
          ].map(item => (
            <div key={item.label} style={{ padding: "22px", background: "#fff", border: `1px solid #e8ede8`, borderRadius: "16px", borderTop: `3px solid ${GOLD}`, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
              <span style={{ fontSize: "28px" }}>{item.icon}</span>
              <p style={{ color: GREEN, fontSize: "12px", fontWeight: "700", margin: "10px 0 4px" }}>{item.label}</p>
              <p style={{ color: "#555", fontSize: "14px", margin: 0 }}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Social */}
        <div style={{ marginTop: "32px", background: "#fff", padding: "28px", borderRadius: "16px", border: `1px solid #e8ede8`, textAlign: "center" }}>
          <div style={{ width: "4px", height: "22px", background: `linear-gradient(180deg, ${GREEN}, ${GOLD})`, borderRadius: "2px", margin: "0 auto 16px" }} />
          <p style={{ color: GREEN, fontWeight: "800", fontSize: "16px", margin: "0 0 16px" }}>تابعنا على وسائل التواصل</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
            {[
              { icon: "📘", label: "Facebook" },
              { icon: "📸", label: "Instagram" },
              { icon: "🐦", label: "Twitter" },
              { icon: "💬", label: "WhatsApp" },
            ].map(s => (
              <button key={s.label} title={s.label} style={{
                width: "52px", height: "52px",
                background: "#f5f7f5", border: `1px solid #e8ede8`,
                borderRadius: "12px", cursor: "pointer", fontSize: "22px",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8ede8"; e.currentTarget.style.transform = "translateY(0)"; }}
              >{s.icon}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}