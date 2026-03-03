import{c as d}from"./index.0LnPeXwf.js";function i(t){switch(t){case"Temel Taşlar":return"17–12 Kyu";case"Gelişime":return"11–6 Kyu";case"Aydınlanmaya":return"5 Kyu – 1 Dan";default:return""}}const u="https://gncxqiarmnyspvrlsutp.supabase.co",c="sb_publishable_sWU29ifFK2XJIbx7GoLD5g_lMaWWo2f",g=d(u,c);async function p(){const t=document.getElementById("course-grid"),r=document.getElementById("loading");if(!t||!r)return;const{data:a,error:l}=await g.from("courses").select("*").order("created_at",{ascending:!1});if(l||!a){r.innerHTML="<p class='text-red-500'>Ligler yüklenirken hata oluştu.</p>";return}if(a.length===0){r.innerHTML="<p class='dark:text-gray-300'>Henüz aktif bir Lig bulunmuyor.</p>";return}r.classList.add("hidden"),t.classList.remove("hidden"),a.forEach(e=>{const s=i(e.level),o=s?`<span class="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md uppercase tracking-wide">
                        ${s}
                       </span>`:"",n=`
                    <a href="/course-detail?slug=${e.slug}" class="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group relative w-full sm:w-[360px]">
                        
                        <div class="relative h-48 w-full overflow-hidden">
                            <img 
                                src="${e.image_url||"https://via.placeholder.com/400x250"}" 
                                alt="${e.title}" 
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                            />
                            
                            <div class="absolute top-3 right-3 flex gap-2">
                                <span class="bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded shadow-sm text-gray-700 dark:text-gray-200 uppercase tracking-wide">
                                    ${e.level||"Lig"}
                                </span>
                            </div>

                            <div class="absolute bottom-3 left-3">
                                ${o}
                            </div>
                        </div>

                        <div class="p-5 flex flex-col flex-grow relative">
                            
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-6 h-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded flex items-center justify-center overflow-hidden shrink-0">
                                     <span class="text-[10px] font-bold text-gray-500 dark:text-gray-300">${e.provider?e.provider.substring(0,1):"A"}</span>
                                </div> 
                                <span class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide truncate">${e.provider||"Agora Academy"}</span>
                            </div>
                            
                            <h3 class="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                ${e.title}
                            </h3>

                            <div class="mt-auto pt-4 flex justify-end">
                                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                            </div>

                        </div>
                    </a>
                `;t.innerHTML+=n})}p();
