
document.addEventListener('DOMContentLoaded', function(){
  const header = document.querySelector('.header');
  window.addEventListener('scroll', ()=> {
    if(window.scrollY > 60) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  });
  const langSwitch = document.getElementById('langSwitch');
  let lang = 'fr';
  langSwitch.addEventListener('click', ()=>{
    if(lang === 'fr'){ lang='en'; langSwitch.textContent='FR'; translateToEnglish(); }
    else { lang='fr'; langSwitch.textContent='EN'; translateToFrench(); }
  });
  function translateToEnglish(){
    document.querySelector('.hero h1').textContent = 'Learn, translate and master Congolese languages with an expert.';
    document.querySelector('.hero p.lead').textContent = 'Lingala, Kituba, Munukutuba, Kikoongo ya leta, Laari, Mbochi, Téké...';
    document.getElementById('aboutTitle').textContent = 'About';
    document.getElementById('aboutText').textContent = 'Raphaël Otho is a linguistics researcher in Paris (PLIDAM – INALCO). He studies and promotes Congolese languages through teaching and translation.';
    document.getElementById('servicesTitle').textContent = 'Services';
    document.getElementById('contactTitle').textContent = 'Contact';
  }
  function translateToFrench(){
    document.querySelector('.hero h1').textContent = 'Apprenez, traduisez et maîtrisez les langues congolaises avec un expert.';
    document.querySelector('.hero p.lead').textContent = 'Lingala, Kituba, Munukutuba, Kikoongo ya leta, Laari, Mbochi, Téké...';
    document.getElementById('aboutTitle').textContent = 'À propos';
    document.getElementById('aboutText').textContent = 'Raphaël Otho est chercheur en linguistique à Paris (PLIDAM – INALCO). Passionné par les langues congolaises, il se consacre à leur étude et à leur transmission à travers l’enseignement et la traduction.';
    document.getElementById('servicesTitle').textContent = 'Services';
    document.getElementById('contactTitle').textContent = 'Contact';
  }
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', ()=>{
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = (offset * 0.2) + 'px';
  });
  const container = document.querySelector('.testimonials');
  if(container){
    let pos = 0;
    setInterval(()=>{
      pos += 320;
      if(pos > container.scrollWidth) pos = 0;
      container.scrollTo({left: pos, behavior:'smooth'});
    },3500);
  }
  const logo = document.querySelector('.logo-small');
  if(logo) logo.style.opacity = 1;
});
