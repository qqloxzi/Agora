import{s}from"./supabase.DgUM0jQD.js";const e={formContainer:document.getElementById("post-form-container"),loginWarning:document.getElementById("login-warning"),form:document.getElementById("forum-form"),titleInput:document.getElementById("post-title"),contentInput:document.getElementById("post-content"),feed:document.getElementById("posts-feed")};let i=null;async function c(){const{data:{user:t}}=await s.auth.getUser();i=t,t?e.formContainer&&(e.formContainer.style.display="block"):e.loginWarning&&(e.loginWarning.style.display="block"),await l()}async function l(){const{data:t,error:n}=await s.from("forum_posts").select(`
        *,
        agorasusers ( username )
      `).order("created_at",{ascending:!1});if(n){console.error("Postlar çekilemedi:",n),e.feed&&(e.feed.innerHTML='<p class="error-text">Veriler yüklenirken hata oluştu.</p>');return}t&&f(t)}function f(t){if(e.feed){if(e.feed.innerHTML="",t.length===0){e.feed.innerHTML='<div class="empty-state">Henüz kimse bir şey yazmamış. İlk sen ol! 🎤</div>';return}t.forEach(n=>{const a=new Date(n.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"});let r="Bilinmeyen Oyuncu";n.agorasusers&&(Array.isArray(n.agorasusers)&&n.agorasusers.length>0?r=n.agorasusers[0].username:n.agorasusers.username&&(r=n.agorasusers.username));const u=`
        <div class="post-card">
          <div class="post-header">
            <div class="author-avatar">${r[0]?r[0].toUpperCase():"?"}</div>
            <div class="author-info">
              <span class="author-name">@${r}</span>
              <span class="post-date">${a}</span>
            </div>
          </div>
          
          ${n.title?`<h3 class="post-title">${o(n.title)}</h3>`:""}
          <div class="post-body">
            ${d(o(n.content))}
          </div>
        </div>
      `;e.feed&&(e.feed.innerHTML+=u)})}}function o(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function d(t){return t.replace(/\n/g,"<br>")}e.form&&e.form.addEventListener("submit",async t=>{if(t.preventDefault(),!i)return alert("Lütfen giriş yapın.");if(!e.titleInput||!e.contentInput)return;const n=e.titleInput.value.trim(),a=e.contentInput.value.trim();if(!a)return alert("İçerik boş olamaz!");const{error:r}=await s.from("forum_posts").insert({user_id:i.id,title:n||null,content:a});r?alert("Paylaşım başarısız: "+r.message):(e.form&&e.form.reset(),await l())});c();
