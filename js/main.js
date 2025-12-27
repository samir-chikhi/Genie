document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',async function(e){
      e.preventDefault();
      const data = {
        nom: form.nom.value.trim(),
        email: form.email.value.trim(),
        telephone: form.telephone.value.trim(),
        sujet: form.sujet.value,
        message: form.message.value.trim()
      };
      if(!data.nom||!data.email||!data.sujet||!data.message){
        alert('Merci de remplir tous les champs obligatoires.');
        return;
      }
      // Here you can integrate with a serverless form endpoint or email service
      // For now we simulate success
      form.querySelector('button[type="submit"]').disabled = true;
      setTimeout(()=>{
        alert('Merci ! Votre message a bien été envoyé. Nous vous recontacterons rapidement.');
        form.reset();
        form.querySelector('button[type="submit"]').disabled = false;
      },800);
    });
  }

  // Cookie banner hide if previously set (redundant safe-check)
  try{
    const v = localStorage.getItem('cookie_consent');
    if(v){
      const b = document.getElementById('cookieBanner'); if(b) b.style.display='none';
    }
  }catch(e){}

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth'});
          // close mobile menu if open
          const mobile = document.getElementById('mobileMenu'); if(mobile && !mobile.classList.contains('hidden')){mobile.classList.add('hidden');}
        }
      }
    });
  });
});
