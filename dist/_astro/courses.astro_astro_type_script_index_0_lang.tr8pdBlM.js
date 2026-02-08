import{c as d}from"./index.0LnPeXwf.js";const o="https://gncxqiarmnyspvrlsutp.supabase.co",i="sb_publishable_sWU29ifFK2XJIbx7GoLD5g_lMaWWo2f",n=d(o,i);async function c(){const t=document.getElementById("course-grid"),r=document.getElementById("loading");if(!t||!r)return;const{data:a,error:s}=await n.from("courses").select("*").order("created_at",{ascending:!1});if(s||!a){r.innerHTML="<p class='text-red-500'>Kurslar yüklenirken hata oluştu.</p>";return}if(a.length===0){r.innerHTML="<p class='dark:text-gray-300'>Henüz aktif bir kurs bulunmuyor.</p>";return}r.classList.add("hidden"),t.classList.remove("hidden"),a.forEach(e=>{const l=`
                    <a href="/course-detail?slug=${e.slug}" class="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                        
                        <div class="relative h-48 w-full overflow-hidden">
                            <img 
                                src="${e.image_url||"https://via.placeholder.com/400x250"}" 
                                alt="${e.title}" 
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                            />
                            <div class="absolute top-3 right-3 flex gap-1">
                                <span class="bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded shadow-sm text-gray-700 dark:text-gray-200 uppercase tracking-wide">
                                    ${e.level||"Kurs"}
                                </span>
                            </div>
                        </div>

                        <div class="p-5 flex flex-col flex-grow">
                            
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-6 h-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded flex items-center justify-center overflow-hidden shrink-0">
                                     <span class="text-[10px] font-bold text-gray-500 dark:text-gray-300">${e.provider?e.provider.substring(0,1):"A"}</span>
                                </div> 
                                <span class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide truncate">${e.provider||"Agora Academy"}</span>
                            </div>
                            
                            <h3 class="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                ${e.title}
                            </h3>

                            <div class="mt-auto pt-4 border-t border-gray-50 dark:border-gray-700">
                                <div class="flex items-center justify-between gap-2">
                                    
                                    <div class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <div class="flex flex-col">
                                            <span class="text-xs text-gray-600 dark:text-gray-400 font-medium">Sertifikalı</span>
                                        </div>
                                    </div>

                                    <div class="font-bold text-lg text-green-600 dark:text-green-400">
                                        ${e.price||"Ücretsiz"}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </a>
                `;t.innerHTML+=l})}c();
