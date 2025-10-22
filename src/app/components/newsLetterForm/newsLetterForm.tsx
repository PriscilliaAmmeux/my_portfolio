"use client";

export default function NewsletterForm() {
  return (
    <div className="mx-auto my-4" style={{ maxWidth: 1000 }}>
      <div className="bg-pink-100 rounded-xl shadow p-4 text-center space-y-6">
        <h2 className="text-3xl font-bold mb-2 text-pink-700">Newsletter</h2>
        <p className="text-pink-900">
          1 email par mois. Zéro spam. 100 % web & humain. 💻❤️
        </p>
        <p className="text-pink-900 mx-20">
          Entre coulisses de Pixelia&Co, conseils pratiques et réflexions sur le
          web d’aujourd’hui, ma newsletter te plonge chaque mois dans l’envers
          du décor d’une créatrice de sites passionnée. ✨
        </p>

        <div
          id="sib-container"
          className="mx-auto rounded-lg"
          style={{ borderStyle: "dotted", borderColor: "#be185d" }}>
          <div
            style={{
              position: "relative",
              height: 600,
              overflow: "hidden",
            }}>
            <iframe
              title="Formulaire newsletter"
              src="https://a0a6fe2a.sibforms.com/serve/MUIFAKJj4fwd6VSX-mvBmjqGnVVXd4m-oDxHwQb2AZQmKM7mtGceh1Iw84kQW-tRyzGQV7WpMC89AD6sVAdXHhxhAcEUk35YCAR_Peb6LPfseJPxhYsAV2Npyx8kGE1zfHakPADVV6rFx7Sn-t6gzhex7uonfdWg1J7EgL6LrLwepgSx2gMu96wFbQ7kC67yqaoAxA-lfW8HQj-m"
              style={{
                width: "100%",
                height: 900,
                border: "0",
                display: "block",
                overflow: "hidden",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
            />
          </div>

          <noscript
            style={{ display: "block", marginTop: 12, color: "#be185d" }}>
            JavaScript désactivé — ouvrez le formulaire directement :{" "}
            <a
              href="https://a0a6fe2a.sibforms.com/serve/MUIFAKJj4fwd6VSX-mvBmjqGnVVXd4m-oDxHwQb2AZQmKM7mtGceh1Iw84kQW-tRyzGQV7WpMC89AD6sVAdXHhxhAcEUk35YCAR_Peb6LPfseJPxhYsAV2Npyx8kGE1zfHakPADVV6rFx7Sn-t6gzhex7uonfdWg1J7EgL6LrLwepgSx2gMu96wFbQ7kC67yqaoAxA-lfW8HQj-m"
              target="_blank"
              rel="noreferrer">
              Ouvrir le formulaire
            </a>
          </noscript>
        </div>
      </div>
    </div>
  );
}
