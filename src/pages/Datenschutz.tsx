export default function Datenschutz() {
  return (
    <div className="w-full pb-24">
      <section className="bg-primary text-white py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Datenschutzerklärung</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Informationen gemäß DSGVO (Datenschutz-Grundverordnung)
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-sm prose prose-slate max-w-none">

            <h2 className="text-2xl font-bold text-primary mb-4">1. Verantwortlicher</h2>
            <p className="mb-6">
              Verantwortlicher im Sinne der DSGVO ist:<br /><br />
              <strong>Tufan Dönmez</strong><br />
              Heiligenstädter Straße 152<br />
              1190 Wien<br />
              Österreich<br /><br />
              <strong>Telefon:</strong> 0676 61 666 46<br />
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:office@notprofi24.at" className="text-primary hover:underline">
                office@notprofi24.at
              </a>
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p className="mb-4">
              Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Dienstleistungen erforderlich ist oder Sie ausdrücklich eingewilligt haben.
            </p>
            <p className="mb-6">
              Beim Besuch unserer Website werden automatisch folgende technische Daten erfasst:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>IP-Adresse (anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Aufgerufene Seiten</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
            </ul>
            <p className="mb-6">
              Diese Daten werden ausschließlich zur Sicherstellung des technischen Betriebs der Website verwendet und nicht an Dritte weitergegeben.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">3. Kontaktaufnahme</h2>
            <p className="mb-6">
              Wenn Sie uns per Telefon, E-Mail oder WhatsApp kontaktieren, werden die von Ihnen übermittelten Daten (Name, Telefonnummer, Schadensbeschreibung) zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben und nach Abschluss des Vorgangs gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">4. Cookies</h2>
            <p className="mb-6">
              Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies enthalten keine personenbezogenen Daten und werden nicht für Werbezwecke verwendet. Sie werden beim Schließen des Browsers automatisch gelöscht.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">5. Weitergabe von Daten</h2>
            <p className="mb-6">
              Eine Weitergabe Ihrer Daten an Dritte erfolgt nur im Rahmen der Vermittlung von Notdiensten (d.h. an den jeweiligen Fachbetrieb, der Ihren Notfall bearbeitet) und nur mit Ihrer Einwilligung bzw. soweit dies zur Vertragserfüllung erforderlich ist.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">6. Ihre Rechte</h2>
            <p className="mb-4">Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mb-6">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:office@notprofi24.at" className="text-primary hover:underline">
                office@notprofi24.at
              </a>
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">7. Beschwerderecht</h2>
            <p className="mb-6">
              Sie haben das Recht, sich bei der österreichischen Datenschutzbehörde zu beschweren:<br /><br />
              <strong>Österreichische Datenschutzbehörde</strong><br />
              Barichgasse 40–42<br />
              1030 Wien<br />
              <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.dsb.gv.at
              </a>
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">8. Aktualität dieser Datenschutzerklärung</h2>
            <p className="mb-2">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026.
            </p>
            <p className="text-sm text-muted-foreground">
              Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen der Website oder geänderten rechtlichen Anforderungen anzupassen.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
