import React, { useState, useEffect, useCallback } from 'react'
import { createRoot } from 'react-dom/client'

const slides = [
  { src: "/uploads/photos-1789153258249-vu21.jpg", alt: "Poisson, bouillon safrané et radis" },
  { src: "/uploads/a1.jpg", alt: "Assiette de la maison" },
  { src: "/uploads/photos-1789153383614-xwjl.jpg", alt: "Guédille aux crevettes nordiques" },
  { src: "/uploads/a2.jpg", alt: "Bouteilles de vin nature" },
  { src: "/uploads/photos-1789153383524-drr3.jpg", alt: "Magret de canard, purée et sauce au poivre" },
  { src: "/uploads/a3.jpg", alt: "Plat aux couleurs de la maison" },
  { src: "/uploads/photos-1789153383626-n98g.jpg", alt: "Finition d'une assiette au passe" },
  { src: "/uploads/a5.jpg", alt: "Terrasse de la buvette" },
  { src: "/uploads/photos-1789153383407-9g8x.jpg", alt: "Cocktail au soleil sur la terrasse" },
  { src: "/uploads/a6.jpg", alt: "Façade et terrasse" },
  { src: "/uploads/a7.jpg", alt: "Plat servi à la table" },
  { src: "/uploads/a8.jpg", alt: "Assiette fraîche et colorée" },
  { src: "/uploads/a11.jpg", alt: "Plat de saison" },
  { src: "/uploads/a13.jpg", alt: "Service en salle" },
  { src: "/uploads/a14.jpg", alt: "Détail du restaurant" }
]

const menu = [
  "Huîtres", "Foie gras torchon", "Betteraves chèvre", "Pissaladière",
  "Tomate mozza", "Magret de canard", "Pétoncle", "Cuisses de grenouilles",
  "Tartare de saumon", "Risotto", "Gravlax de bœuf", "Guédille",
  "Merguez choucroute", "Mousse aux fraises", "Assiette de fromages"
]

const horaires = [
  { jour: "Lundi", heures: "Fermé" },
  { jour: "Mardi", heures: "Fermé" },
  { jour: "Mercredi", heures: "16 h – 23 h" },
  { jour: "Jeudi", heures: "16 h – 23 h" },
  { jour: "Vendredi", heures: "16 h – minuit" },
  { jour: "Samedi", heures: "16 h – minuit" },
  { jour: "Dimanche", heures: "Fermé" }
]

const coulisses = [
  { src: "/uploads/a1.jpg", alt: "Assiette de la maison" },
  { src: "/uploads/a2.jpg", alt: "Bouteilles de vin nature" },
  { src: "/uploads/a3.jpg", alt: "Plat aux couleurs de la maison" },
  { src: "/uploads/a4.jpg", alt: "Préparation d'une assiette" },
  { src: "/uploads/a5.jpg", alt: "Terrasse de la buvette" },
  { src: "/uploads/a6.jpg", alt: "Façade et terrasse" },
  { src: "/uploads/a7.jpg", alt: "Plat servi à la table" },
  { src: "/uploads/a8.jpg", alt: "Assiette fraîche et colorée" },
  { src: "/uploads/a9.jpg", alt: "Création culinaire de la maison" },
  { src: "/uploads/a10.jpg", alt: "Détail d'une assiette" },
  { src: "/uploads/a11.jpg", alt: "Plat de saison" },
  { src: "/uploads/a12.jpg", alt: "Ambiance de la buvette" },
  { src: "/uploads/a13.jpg", alt: "Service en salle" },
  { src: "/uploads/a14.jpg", alt: "Détail du restaurant" },
  { src: "/uploads/a16.jpg", alt: "Moment gourmand à la buvette" }
]

function Carousel({ i, go }) {
  return (
    <div style={{ position: 'relative', border: '3px solid #241C16', borderRadius: 8, overflow: 'hidden', background: '#241C16', boxShadow: '10px 10px 0 rgba(36,28,22,0.35)' }}>
      <div style={{ display: 'flex', width: '100%', transition: 'transform 620ms cubic-bezier(0.4, 0, 0.2, 1)', transform: `translateX(-${100 * i}%)` }}>
        {slides.map((slide, k) => (
          <img key={k} src={slide.src} alt={slide.alt} style={{ flex: '0 0 100%', width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }} />
        ))}
      </div>
      <button type="button" onClick={() => go(-1)} aria-label="Photo précédente" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', width: 46, height: 46, borderRadius: 999, border: '2px solid #241C16', background: '#F6EFE3', color: '#241C16', fontSize: 20, lineHeight: 1, cursor: 'pointer', fontFamily: 'Karla, sans-serif' }}>‹</button>
      <button type="button" onClick={() => go(1)} aria-label="Photo suivante" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', width: 46, height: 46, borderRadius: 999, border: '2px solid #241C16', background: '#F6EFE3', color: '#241C16', fontSize: 20, lineHeight: 1, cursor: 'pointer', fontFamily: 'Karla, sans-serif' }}>›</button>
    </div>
  )
}

function Dots({ count, active, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
      {Array.from({ length: count }).map((_, k) => (
        <button
          key={k}
          type="button"
          onClick={() => onSelect(k)}
          aria-label={`Photo ${k + 1}`}
          style={{
            width: k === active ? 30 : 12,
            height: 12,
            borderRadius: 999,
            border: '2px solid #241C16',
            background: k === active ? '#E3B23C' : '#F6EFE3',
            cursor: 'pointer',
            padding: 0,
            transition: 'width 300ms ease, background 300ms ease'
          }}
        />
      ))}
    </div>
  )
}

function Hero({ i, go, setI }) {
  return (
    <header id="haut" style={{ background: '#C6551F', padding: '48px 24px 56px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'center' }}>
        <Carousel i={i} go={go} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, textAlign: 'left' }}>
          <h1 style={{ margin: 0, fontFamily: "'Shantell Sans', cursive", fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.05, color: '#F6EFE3', textWrap: 'balance' }}>Ananas Mon Amour</h1>
          <p style={{ margin: '-10px 0 0', fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#E3B23C', fontWeight: 700 }}>Buvette · Alma · Est. 2018</p>
          <p style={{ margin: 0, fontFamily: "'Shantell Sans', cursive", fontSize: 'clamp(17px, 2.2vw, 22px)', lineHeight: 1.5, color: '#FBEFE0', textWrap: 'pretty' }}>Vin nature, repas et bon breuvage, au cœur du centre-ville d'Alma.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 4 }}>
            <a href="tel:+14187691326" style={{ padding: '12px 24px', borderRadius: 999, background: '#E3B23C', color: '#241C16', border: '2px solid #241C16', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Réserver par téléphone</a>
            <a href="#menu" style={{ padding: '12px 24px', borderRadius: 999, background: 'transparent', color: '#F6EFE3', border: '2px solid #F6EFE3', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Voir le menu</a>
          </div>
          <Dots count={slides.length} active={i} onSelect={setI} />
        </div>
      </div>
    </header>
  )
}

function Nav() {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 20, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px 24px', padding: '14px 24px', background: '#C6551F', color: '#F6EFE3', borderBottom: '3px solid #241C16' }}>
      <a href="#haut" style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700, fontSize: 19, letterSpacing: '0.01em', color: '#F6EFE3', textDecoration: 'none' }}>Ananas Mon Amour</a>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 22px', alignItems: 'center', fontSize: 15, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        <a href="#maison" style={{ color: '#F6EFE3', textDecoration: 'none' }}>La maison</a>
        <a href="#menu" style={{ color: '#F6EFE3', textDecoration: 'none' }}>Menu</a>
        <a href="#buvette" style={{ color: '#F6EFE3', textDecoration: 'none' }}>Buvette</a>
        <a href="#infos" style={{ color: '#F6EFE3', textDecoration: 'none' }}>Nous trouver</a>
        <a href="tel:+14187691326" style={{ padding: '8px 16px', borderRadius: 999, background: '#E3B23C', color: '#241C16', fontWeight: 700, textDecoration: 'none', border: '2px solid #241C16' }}>418 769-1326</a>
      </div>
    </nav>
  )
}

function Maison() {
  return (
    <section id="maison" style={{ padding: '84px 24px', background: '#F6EFE3' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
        <div>
          <p style={{ margin: '0 0 14px', fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C6551F', fontWeight: 700 }}>La maison</p>
          <h2 style={{ margin: '0 0 22px', fontFamily: "'Shantell Sans', cursive", fontSize: 'clamp(30px, 4.4vw, 46px)', lineHeight: 1.15, color: '#2F4A33' }}>Un petit resto intimiste, une grande envie de partager.</h2>
          <p style={{ margin: '0 0 18px', fontSize: 18, lineHeight: 1.65, textWrap: 'pretty' }}>Ananas Mon Amour est une adresse unique au centre-ville d'Alma, où la convivialité et la créativité se rencontrent. On y sert une cuisine simple mais raffinée, inspirée des saisons, accompagnée d'une belle sélection de vins.</p>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, textWrap: 'pretty' }}>Une ambiance chaleureuse, un style audacieux : le lieu idéal pour partager un repas en bonne compagnie et vivre des moments imprévus.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <img src="/uploads/photos-1789153383335-mxc8.jpg" alt="Décor de la buvette" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', border: '3px solid #241C16', borderRadius: 4, gridRow: 'span 2' }} />
          <img src="/uploads/photos-1789153258168-jje5.jpg" alt="Dressage d'une assiette" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', border: '3px solid #241C16', borderRadius: 4 }} />
          <img src="/uploads/photos-1789153388769-quyf.jpg" alt="Service du vin" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', border: '3px solid #241C16', borderRadius: 4 }} />
        </div>
      </div>
    </section>
  )
}

function Menu() {
  return (
    <section id="menu" style={{ padding: '84px 24px', background: '#2F4A33', color: '#F6EFE3' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 40 }}>
          <div>
            <p style={{ margin: '0 0 12px', fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E3B23C', fontWeight: 700 }}>Sur l'ardoise</p>
            <h2 style={{ margin: 0, fontFamily: "'Shantell Sans', cursive", fontSize: 'clamp(30px, 4.4vw, 46px)', lineHeight: 1.15 }}>Le menu</h2>
          </div>
          <p style={{ margin: 0, maxWidth: 360, fontSize: 16, lineHeight: 1.6, color: '#E6DFD2' }}>Le menu change au fil des saisons et des arrivages. Voici ce qui tourne en ce moment.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 44, alignItems: 'start' }}>
          <div style={{ display: 'grid', gap: 0 }}>
            {menu.map((plat, k) => (
              <div key={k} style={{ display: 'flex', alignItems: 'baseline', gap: 12, padding: '13px 0', borderBottom: '1px dashed rgba(246,239,227,0.35)' }}>
                <span style={{ color: '#E3B23C', fontSize: 17 }}>✳</span>
                <span style={{ fontSize: 19, lineHeight: 1.3 }}>{plat}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            <img src="/uploads/photos-1789153383350-kvoq.jpg" alt="L'ardoise du menu devant le restaurant" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', border: '3px solid #F6EFE3', borderRadius: 4 }} />
            <img src="/uploads/photos-1789153388765-dav3.jpg" alt="Magret de canard" style={{ width: '100%', aspectRatio: '5/4', objectFit: 'cover', border: '3px solid #F6EFE3', borderRadius: 4 }} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Buvette() {
  return (
    <section id="buvette" style={{ padding: '84px 24px', background: '#C6551F', color: '#F6EFE3' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
        <img src="/uploads/photos-1789153383407-9g8x.jpg" alt="Cocktail au soleil sur la terrasse" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', border: '3px solid #241C16', borderRadius: 4 }} />
        <div>
          <p style={{ margin: '0 0 14px', fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E3B23C', fontWeight: 700 }}>Buvette</p>
          <h2 style={{ margin: '0 0 22px', fontFamily: "'Shantell Sans', cursive", fontSize: 'clamp(30px, 4.4vw, 46px)', lineHeight: 1.15 }}>Vin nature, cocktails et découvertes</h2>
          <p style={{ margin: '0 0 28px', fontSize: 18, lineHeight: 1.65, textWrap: 'pretty' }}>Une sélection vivante de vins nature, des importations privées qui changent souvent, et des cocktails montés au bar. Demandez-nous conseil : on adore faire goûter.</p>
          <div style={{ display: 'grid', gap: 14 }}>
            <div style={{ padding: '18px 20px', border: '2px solid #F6EFE3', borderRadius: 6 }}>
              <p style={{ margin: '0 0 6px', fontFamily: "'Shantell Sans', cursive", fontSize: 20 }}>Vins nature au verre</p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: '#FBEFE0' }}>La sélection change chaque semaine, selon les arrivages.</p>
            </div>
            <div style={{ padding: '18px 20px', border: '2px solid #F6EFE3', borderRadius: 6 }}>
              <p style={{ margin: '0 0 6px', fontFamily: "'Shantell Sans', cursive", fontSize: 20 }}>Cocktails maison</p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: '#FBEFE0' }}>Classiques bien faits et quelques créations un peu imprévues.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section style={{ padding: '84px 24px', background: '#F6EFE3' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <h2 style={{ margin: '0 0 36px', fontFamily: "'Shantell Sans', cursive", fontSize: 'clamp(30px, 4.4vw, 46px)', lineHeight: 1.15, color: '#2F4A33' }}>Un aperçu de l'assiette</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          <img src="/uploads/photos-1789153258249-vu21.jpg" alt="Poisson, bouillon safrané et radis" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', border: '3px solid #241C16', borderRadius: 4 }} />
          <img src="/uploads/photos-1789153383614-xwjl.jpg" alt="Guédille aux crevettes nordiques" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', border: '3px solid #241C16', borderRadius: 4 }} />
          <img src="/uploads/photos-1789153383524-drr3.jpg" alt="Magret de canard, purée et sauce au poivre" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', border: '3px solid #241C16', borderRadius: 4 }} />
          <img src="/uploads/photos-1789153383626-n98g.jpg" alt="Finition d'une assiette au passe" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', border: '3px solid #241C16', borderRadius: 4 }} />
        </div>
        <h3 style={{ margin: '56px 0 24px', fontFamily: "'Shantell Sans', cursive", fontSize: 'clamp(26px, 3.4vw, 36px)', lineHeight: 1.15, color: '#C6551F' }}>Dans les coulisses</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
          {coulisses.map((img, k) => (
            <img key={k} src={img.src} alt={img.alt} loading="lazy" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', border: '3px solid #241C16', borderRadius: 4 }} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Infos() {
  return (
    <section id="infos" style={{ padding: '84px 24px', background: '#E3B23C', color: '#241C16', borderTop: '3px solid #241C16' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 44 }}>
        <div>
          <h2 style={{ margin: '0 0 26px', fontFamily: "'Shantell Sans', cursive", fontSize: 'clamp(30px, 4.4vw, 46px)', lineHeight: 1.15 }}>Nous trouver</h2>
          <p style={{ margin: '0 0 8px', fontSize: 20, lineHeight: 1.5, fontWeight: 700 }}>487, rue Sacré-Cœur Ouest</p>
          <p style={{ margin: '0 0 24px', fontSize: 20, lineHeight: 1.5 }}>Alma (Québec) G8B 1M4</p>
          <p style={{ margin: '0 0 8px', fontSize: 20 }}><a href="tel:+14187691326" style={{ color: '#241C16' }}>(418) 769-1326</a></p>
          <p style={{ margin: '0 0 28px', fontSize: 16, lineHeight: 1.6 }}>Réservations par téléphone. Pour les groupes, appelez-nous à l'avance.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="https://www.google.com/maps/search/?api=1&query=487+Rue+Sacré-Coeur+O,+Alma,+QC+G8B+1M4" target="_blank" rel="noopener" style={{ padding: '12px 22px', borderRadius: 999, background: '#241C16', color: '#F6EFE3', fontWeight: 700, textDecoration: 'none' }}>Itinéraire</a>
            <a href="https://www.instagram.com/ananas_mon_amour/" target="_blank" rel="noopener" style={{ padding: '12px 22px', borderRadius: 999, border: '2px solid #241C16', color: '#241C16', fontWeight: 700, textDecoration: 'none' }}>Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=100063649897111" target="_blank" rel="noopener" style={{ padding: '12px 22px', borderRadius: 999, border: '2px solid #241C16', color: '#241C16', fontWeight: 700, textDecoration: 'none' }}>Facebook</a>
          </div>
        </div>
        <div>
          <h3 style={{ margin: '0 0 20px', fontFamily: "'Shantell Sans', cursive", fontSize: 26 }}>Horaires</h3>
          {horaires.map((h, k) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 20, padding: '12px 0', borderBottom: '1px solid rgba(36,28,22,0.25)', fontSize: 18 }}>
              <span style={{ fontWeight: 700 }}>{h.jour}</span>
              <span>{h.heures}</span>
            </div>
          ))}
          <p style={{ margin: '18px 0 0', fontSize: 15, lineHeight: 1.55, fontStyle: 'italic' }}>Horaires à confirmer — dites-moi les bons et je les corrige.</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: '#241C16', color: '#F6EFE3', padding: '40px 24px', display: 'flex', flexWrap: 'wrap', gap: '12px 28px', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 18 }}>Ananas Mon Amour — Buvette · Est. 2018</span>
      <span style={{ fontSize: 15, color: '#C9C0B4' }}>Alma, Saguenay–Lac-Saint-Jean</span>
    </footer>
  )
}

function App() {
  const [i, setI] = useState(0)
  const n = slides.length

  const go = useCallback((step) => {
    setI(prev => (prev + step + n) % n)
  }, [n])

  useEffect(() => {
    const timer = setInterval(() => go(1), 4500)
    return () => clearInterval(timer)
  }, [go])

  return (
    <div style={{ fontFamily: 'Karla, system-ui, sans-serif', color: '#241C16', background: '#F6EFE3', overflowX: 'hidden' }}>
      <Nav />
      <Hero i={i} go={go} setI={setI} />
      <Maison />
      <Menu />
      <Buvette />
      <Gallery />
      <Infos />
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
