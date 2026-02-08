import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

const ADMIN_EMAIL = "alikarakayagg@gmail.com"; 

export const POST: APIRoute = async ({ request }) => {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.email !== ADMIN_EMAIL) {
    return new Response(JSON.stringify({ error: "Yetkisiz" }), { status: 403 });
  }

  const body = await request.json();
  
  const { error } = await supabase
    .from("courses")
    .insert({
      title: body.title,
      description: body.description,
      image_url: body.image_url,    // Yeni alan
      provider: body.provider,      // Yeni alan
      teacher_id: user.id,
      rating: 4.8 // Varsayılan puan
    });

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};