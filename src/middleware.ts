import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Liste des chemins valides de votre site
  const validPaths = [
    '/',
    '/about',
    '/accessibilityArticle',
    '/blog',
    '/contact',
    '/devLille',
    '/devWebVsSeo',
    '/legalNotices',
    '/nextJSArticle',
    '/prestations',
    '/privacy',
    '/project',
    '/tartecitron',
    '/trainingImportance',
    '/api/newsletter',
  ];

  const pathname = request.nextUrl.pathname;

  // Vérifie si le chemin commence par un chemin valide
  const isValidPath = validPaths.some(path => 
    pathname === path || pathname.startsWith(path + '/')
  );

  // Vérifie si c'est un fichier statique (images, fonts, etc.)
  const isStaticFile = 
    pathname.startsWith('/_next') ||
    pathname.startsWith('/public') ||
    pathname.startsWith('/fonts') ||
    pathname.includes('.') && (
      pathname.endsWith('.css') ||
      pathname.endsWith('.js') ||
      pathname.endsWith('.webp') ||
      pathname.endsWith('.jpg') ||
      pathname.endsWith('.png') ||
      pathname.endsWith('.svg') ||
      pathname.endsWith('.ico') ||
      pathname.endsWith('.xml') ||
      pathname.endsWith('.txt')
    );

  // Si ce n'est pas un chemin valide et pas un fichier statique, rediriger vers l'accueil
  if (!isValidPath && !isStaticFile) {
    return NextResponse.redirect(new URL('/', request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Correspond à tous les chemins sauf :
     * - api (API routes)
     * - _next/static (fichiers statiques)
     * - _next/image (fichiers d'optimisation d'image)
     * - favicon.ico (fichier favicon)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
