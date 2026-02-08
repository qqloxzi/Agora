import { s as supabase } from '../../chunks/supabase_D1QsuwKJ.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request, cookies }) => {
  const { courseId, userId } = await request.json();
  if (!courseId || !userId) {
    return new Response(JSON.stringify({ error: "Missing data" }), { status: 400 });
  }
  const { error } = await supabase.from("course_enrollments").insert({ course_id: courseId, user_id: userId });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
