// 1. Importación de componentes:
// Importas el Header, que seguramente contiene la navegación y el selector de idiomas.
import { Header } from "@/src/components/Header";

export default async function RootLayout({
  children,
  params,
}: {
  // 2. Definición de tipos:
  // 'children' son las páginas (Home, About, etc.) que se renderizarán dentro de este layout.
  children: React.ReactNode;
  // 'params' sigue el estándar asíncrono de Next.js 15.
  params: Promise<{ locale: string }>;
}) {
  // 3. Resolución del locale:
  // Aunque en este código no usas 'locale' directamente en el JSX,
  // es necesario resolver la promesa para cumplir con la firma del componente.
  const { locale } = await params;

  return (
    // 4. Estructura visual con Tailwind CSS:
    // 'min-h-screen': Asegura que el fondo cubra al menos toda la altura de la pantalla.
    // 'bg-slate-500': Color de fondo gris azulado.
    // 'pt-10': Padding superior para que el contenido no pegue al borde.
    <div className="min-h-screen bg-slate-500 text-white pt-10">
      {/* 5. Componente Header: 
          Al estar fuera de <main>, aparecerá siempre en la parte superior 
          de todas las páginas que compartan este layout. */}
      <Header />

      {/* 6. Contenedor Main:
          'container mx-auto': Centra el contenido horizontalmente.
          'px-4': Añade un pequeño margen a los lados en dispositivos móviles. */}
      <main className="container mx-auto px-4">
        {/* Aquí es donde Next.js "inyecta" el contenido de cada página individual */}
        {children}
      </main>
    </div>
  );
}
