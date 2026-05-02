import type { Metadata } from "next";
import LegalLayout from "@/shared/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad | Edgar López Rodríguez — Asesor Financiero",
  description:
    "Política de privacidad del sitio web de Edgar López Rodríguez. Conoce cómo se tratan los datos personales proporcionados voluntariamente a través del formulario de contacto.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://edgarlopez.mx/privacidad" },
};

const sections = [
  {
    id: "responsable",
    title: "1. Responsable del tratamiento",
    content: [
      "El responsable del tratamiento de los datos personales recabados a través de este sitio web es Edgar López Rodríguez, asesor financiero con Certificación A1 emitida por la Comisión Nacional de Seguros y Fianzas (CNSF), con domicilio en la Ciudad de México, México.",
      "Para cualquier consulta relacionada con el tratamiento de sus datos personales, puede contactar al Titular a través del correo electrónico de contacto disponible en este sitio.",
    ],
  },
  {
    id: "datos-recabados",
    title: "2. Datos personales recabados",
    content: [
      "Este sitio web únicamente recaba datos personales cuando el usuario decide enviar voluntariamente una consulta a través del formulario de contacto. Los datos solicitados son, de manera exclusiva:",
      "• Nombre completo\n• Dirección de correo electrónico\n• Mensaje o consulta",
      "El uso del formulario de contacto es completamente opcional. Ningún dato personal es recabado de forma automática, pasiva u obligatoria como condición para acceder al sitio web.",
    ],
  },
  {
    id: "finalidad",
    title: "3. Finalidad del tratamiento",
    content: [
      "Los datos personales proporcionados a través del formulario de contacto serán utilizados exclusivamente para las siguientes finalidades:",
      "• Dar respuesta a la consulta o solicitud enviada por el usuario.\n• Establecer comunicación para ofrecer información sobre los servicios de asesoría financiera del Titular, si el usuario así lo solicita.",
      "Los datos no serán utilizados para ninguna finalidad distinta a las aquí señaladas sin el consentimiento previo y expreso del titular de los datos.",
    ],
  },
  {
    id: "transferencia",
    title: "4. Transferencia de datos",
    content: [
      "El Titular no vende, alquila, cede ni transfiere los datos personales de los usuarios a terceros, salvo que exista una obligación legal que así lo requiera o el usuario haya otorgado su consentimiento expreso para ello.",
      "En ningún caso los datos serán compartidos con fines comerciales, publicitarios o de mercadotecnia con terceros.",
    ],
  },
  {
    id: "conservacion",
    title: "5. Conservación de los datos",
    content: [
      "Los datos personales proporcionados serán conservados únicamente durante el tiempo necesario para atender la consulta enviada y, en su caso, durante el período que dure la relación profesional con el usuario.",
      "Una vez concluida la finalidad para la que fueron recabados, los datos serán eliminados de forma segura.",
    ],
  },
  {
    id: "derechos",
    title: "6. Derechos ARCO",
    content: [
      "De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), el usuario tiene derecho a:",
      "• Acceso: conocer qué datos personales se tienen sobre él y cómo son tratados.\n• Rectificación: solicitar la corrección de datos inexactos o incompletos.\n• Cancelación: solicitar la eliminación de sus datos cuando no sean necesarios.\n• Oposición: oponerse al tratamiento de sus datos para fines específicos.",
      "Para ejercer cualquiera de estos derechos, el usuario deberá enviar una solicitud al correo de contacto del Titular, indicando su nombre completo y el derecho que desea ejercer. El Titular responderá en un plazo máximo de 20 días hábiles conforme a la ley.",
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies y tecnologías de rastreo",
    content: [
      "Este sitio web no utiliza cookies propias ni de terceros con fines de seguimiento, análisis de comportamiento o publicidad. No se integran herramientas de analítica de terceros en la versión actual del sitio.",
      "En caso de que en el futuro se incorpore alguna tecnología de este tipo, la presente Política será actualizada oportunamente.",
    ],
  },
  {
    id: "seguridad",
    title: "8. Medidas de seguridad",
    content: [
      "El Titular aplica medidas técnicas y organizativas razonables para proteger los datos personales contra accesos no autorizados, pérdida, alteración o divulgación indebida.",
      "Se recomienda al usuario no incluir información financiera sensible —como números de cuenta o contraseñas— en el formulario de contacto.",
    ],
  },
  {
    id: "modificaciones",
    title: "9. Modificaciones a la política",
    content: [
      "El Titular se reserva el derecho de modificar la presente Política de Privacidad en cualquier momento, con el fin de adaptarla a cambios legislativos, jurisprudenciales o técnicos.",
      "La versión actual de esta Política fue actualizada por última vez el 1 de mayo de 2025.",
    ],
  },
  {
    id: "legislacion",
    title: "10. Legislación aplicable",
    content: [
      "La presente Política se rige por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad, vigentes en los Estados Unidos Mexicanos.",
      "Para la resolución de cualquier controversia, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México.",
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Política de Privacidad",
            url: "https://edgarlopez.mx/privacidad",
            author: { "@type": "Person", name: "Edgar López Rodríguez", jobTitle: "Asesor Financiero" },
            dateModified: "2025-05-01",
          }),
        }}
      />
      <LegalLayout
        badge="Documento legal"
        title="Política de Privacidad"
        subtitle="El Titular se compromete a proteger la privacidad de los usuarios y a tratar sus datos conforme a la legislación mexicana vigente."
        lastUpdated="1 de mayo de 2025"
        dateISO="2025-05-01"
        meta={[
          { label: "Marco legal",       value: "LFPDPPP · México" },
          { label: "Datos recabados",   value: "Nombre · Email · Mensaje" },
        ]}
        sections={sections}
        footerLink={{ href: "/terminos", label: "Términos y Condiciones" }}
      />
    </>
  );
}
