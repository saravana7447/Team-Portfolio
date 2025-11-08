import { RenderMode, ServerRoute } from '@angular/ssr';

// Static list of member ids used by the member detail route.
// This mirrors the in-memory data in MemberService. Keeping it small and static
// avoids importing application services into the server routing config.
const MEMBER_IDS = [1, 2, 3, 4];

export const serverRoutes: ServerRoute[] = [
  {
    // Provide explicit prerender params for dynamic route 'member/:id'
    path: 'member/:id',
    renderMode: RenderMode.Prerender,
    // Called by the prerenderer to know which parameterized routes to generate.
    getPrerenderParams: async () => {
      // ServerRoute expects an array of plain param maps: Record<string,string>[]
      return MEMBER_IDS.map((id) => ({ id: String(id) }));
    }
  },
  {
    // Fallback - prerender other routes (home, etc.)
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
