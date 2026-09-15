import React, { useState } from 'react'

export default function App() {
  const [lang, setLang] = useState('ar')

  const content = {
    ar: { title: "ChemCraft Pro - حاسبة ومصنع الكيمياء", desc: "تطبيق تصنيع المنظفات والدهانات المنزلية والسيارات" },
    fr: { title: "ChemCraft Pro - Calculateur Chimie", desc: "Application de fabrication de détergents et peintures" },
    en: { title: "ChemCraft Pro - Chemical Calculator", desc: "Car & Home Chemical Formulation App" }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>{content[lang].title}</h1>
      <p>{content[lang].desc}</p>      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setLang('ar')}>العربية</button>
        <button onClick={() => setLang('fr')}>Français</button>
        <button onClick={() => setLang('en')}>English</button>
      </div>
    </div>
  )
}
