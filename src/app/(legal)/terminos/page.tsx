import type { Metadata } from "next";
import LegalLayout from "@/shared/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Edgar López Rodríguez — Asesor Financiero",
  description:
    "Términos y condiciones de uso del sitio web de Edgar López Rodríguez, asesor financiero y economista. Condiciones de uso, tratamiento de datos y responsabilidades.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://edgarlopez.mx/terminos" },
};

const sections = [
  {
    id: "objeto",
    title: "1. Objeto y aceptación",
    content: [
      "El presente documento establece los Términos y Condiciones de uso del sitio web de Edgar López Rodríguez (en adelante, «el Titular»), asesor financiero con Certificación A1 emitida por la Comisión Nacional de Seguros y Fianzas (CNSF), con domicilio en la Ciudad de México, México.",
      "El acceso y uso de este sitio web implica la aceptación plena y sin reservas de los presentes Términos. Si no está de acuerdo con alguna de las condiciones aquí establecidas, le solicitamos abstenerse de utilizar este sitio.",
    ],
  },
  {
    id: "uso",
    title: "2. Uso del sitio",
    content: [
      "Este sitio web tiene carácter informativo y de presentación profesional. El contenido publicado —incluyendo textos, datos, experiencia profesional y certificaciones— tiene como único propósito facilitar el contacto con el Titular y presentar sus servicios de asesoría financiera.",
      "El usuario se compromete a hacer un uso lícito, ético y conforme a la normativa vigente del sitio, absteniéndose de realizar cualquier acción que pueda dañar, inutilizar, sobrecargar o deteriorar el sitio o impedir su normal uso por parte de otros usuarios.",
    ],
  },
  {
    id: "informacion",
    title: "3. Naturaleza informativa del contenido",
    content: [
      "El contenido de este sitio web tiene exclusivamente fines informativos y no constituye asesoría financiera, fiscal, legal o de inversión. Ninguna información publicada en este sitio debe interpretarse como una recomendación de inversión ni como una oferta de compra o venta de valores.",
      "La asesoría financiera personalizada se ofrece de manera individual, sujeta a la normativa aplicable y únicamente tras el establecimiento formal de una relación profesional con el Titular.",
    ],
  },
  {
    id: "datos",
    title: "4. Tratamiento de datos personales",
    content: [
      "El único dato personal que este sitio puede recopilar es la información voluntariamente proporcionada por el usuario a través del formulario de contacto, que incluye exclusivamente: nombre completo, dirección de correo electrónico y mensaje.",
      "La proporción de estos datos es completamente opcional y se realiza únicamente cuando el usuario decide enviar una consulta. Dichos datos serán utilizados exclusivamente para dar respuesta a la solicitud enviada y no serán compartidos, vendidos ni cedidos a terceros bajo ninguna circunstancia.",
      "El Titular se compromete a tratar los datos con la máxima confidencialidad, aplicando medidas técnicas y organizativas razonables para su protección, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.",
    ],
  },
  {
    id: "propiedad",
    title: "5. Propiedad intelectual",
    content: [
      "Todos los contenidos de este sitio web —incluyendo textos, diseño visual, logotipos propios, fotografías y código fuente— son propiedad del Titular o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual aplicables en México.",
      "Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de cualquier contenido de este sitio sin la autorización expresa y por escrito del Titular.",
    ],
  },
  {
    id: "responsabilidad",
    title: "6. Limitación de responsabilidad",
    content: [
      "El Titular no garantiza la disponibilidad continua e ininterrumpida del sitio web, ni la ausencia de errores en su contenido. Se reserva el derecho de modificar, suspender o interrumpir el acceso al sitio en cualquier momento sin previo aviso.",
      "El Titular no será responsable por daños directos o indirectos derivados del uso o imposibilidad de uso del sitio web, ni por decisiones financieras tomadas basándose exclusivamente en el contenido informativo aquí publicado.",
    ],
  },
  {
    id: "modificaciones",
    title: "7. Modificaciones",
    content: [
      "El Titular se reserva el derecho de modificar los presentes Términos en cualquier momento. Las modificaciones entrarán en vigor desde el momento de su publicación en el sitio web. Se recomienda revisar periódicamente este documento.",
      "La versión actual de estos Términos fue actualizada por última vez el 1 de mayo de 2025.",
    ],
  },
  {
    id: "legislacion",
    title: "8. Legislación aplicable",
    content: [
      "Los presentes Términos se rigen por la legislación vigente en los Estados Unidos Mexicanos. Para la resolución de cualquier controversia derivada del uso de este sitio, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.",
    ],
  },
];

export default function TerminosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Términos y Condiciones",
            url: "https://edgarlopez.mx/terminos",
            author: { "@type": "Person", name: "Edgar López Rodríguez", jobTitle: "Asesor Financiero" },
            dateModified: "2025-05-01",
          }),
        }}
      />
      <LegalLayout
        badge="Documento legal"
        title="Términos y Condiciones"
        subtitle="Al acceder y utilizar este sitio web, el usuario acepta los presentes términos en su totalidad."
        lastUpdated="1 de mayo de 2025"
        dateISO="2025-05-01"
        meta={[
          { label: "Jurisdicción", value: "Ciudad de México, México" },
          { label: "Marco legal",  value: "LFPDPPP · Legislación mexicana" },
        ]}
        sections={sections}
        footerLink={{ href: "/privacidad", label: "Política de Privacidad" }}
      />
    </>
  );
}