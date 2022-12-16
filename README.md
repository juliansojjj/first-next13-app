A agregar: 
- OOO también {next:{revalidate:60}}, que se encarga de refrescar la pagina cada 60 segujndos, por ejemplo, para incluir nuevos articulos o lo q sea. incremental static regeneration


# Elementos a destacar

## Lógica
### Fetching
En react 12, había diferentes funciones para fetching de datos
*De la doc oficial de Next 13*
This request should be cached until manually invalidated.
Similar to `getStaticProps`.
 `force-cache` is the default and can be omitted.
fetch(URL, { cache: 'force-cache' });

This request should be refetched on every request.
Similar to `getServerSideProps`.
fetch(URL, { cache: 'no-store' });
//En la build, este fetch no se vuelve "permanente"

This request should be cached with a lifetime of 10 seconds.
Similar to `getStaticProps` with the `revalidate` option.
// o similar a ISR(incrementalStaticRegeneration)
fetch(URL, { next: { revalidate: 10 } });
//cada 10 segundos hace un nuevo fetch que actualiza la página

### Server-side components y estructura granular
Para que vaya más rápido, los componentes se dividen en Server y Client. Los server DEBEN ser la mayoría; implican las views, fetching de datos, etc. Los Client se implementan cuando se espera interacción con el usuario. Deben ser lo más esenciales posibles, y lo más pequeños y alejados del tronco principal. 'client side'
Debemos desestructurar TODO en componentes. Lo más que podamos y tenga lógica.

### Layout 
Ademas de contener todos los componentes y poder usar un header inmutabler, se puede usar como state manager, reemplazo de redux .ej. Recibe ({children})

### Loading (y suspense)
Podemos implementar, para cada ruta (page.tsx), un loading.tsx, con un placheolder dentro. Esto automatiza tener que usar ternarias dentro del return Y profundiza la lógixa granular de separar cada función en componentes pequeños 
Para los componentes que no cargaron, compatible cn async,await Se usa un fallback con un componente como loading screen

### Image
a

### Fonts
