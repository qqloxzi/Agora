import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase"; // Your Supabase client setup

export const POST: APIRoute = async ({ request, cookies }) => {
  const { courseId, userId } = await request.json();

  if (!courseId || !userId) {
    return new Response(JSON.stringify({ error: "Missing data" }), { status: 400 });
  }

  const { error } = await supabase
    .from('course_enrollments')
    .insert({ course_id: courseId, user_id: userId });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};