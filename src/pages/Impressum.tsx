export default function Impressum() {
  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Impressum</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Informationspflicht laut E-Commerce Gesetz und Mediengesetz.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-sm prose prose-slate max-w-none">
            
            <h2 className="text-2xl font-bold text-primary mb-6">Diensteanbieter</h2>
            
            <p className="font-semibold text-lg mb-1">Tufan Dönmez</p>
            <p className="mb-6">
              Heiligenstädter Straße 152<br />
              1190 Wien<br />
              Österreich
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Kontaktdaten</h3>
            <p className="mb-6">
              <strong>Tel:</strong> <a href="tel:06766166646" className="text-primary hover:underline">0676 61 666 46</a><br />
              <strong>E-Mail:</strong> <a href="mailto:office@notprofi24.at" className="text-primary hover:underline">office@notprofi24.at</a>
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Unternehmensgegenstand</h3>
            <p className="mb-6">
              Notdienst-Vermittlungsservice. Vermittlung von Handwerksbetrieben (Installateur, Elektriker, Dachdecker, Schlosser, Glaser) an Endkunden.
            </p>

            <hr className="my-8 border-border" />

            <h3 className="text-xl font-bold text-primary mb-4">Haftungsausschluss für Inhalte</h3>
            <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Haftung für Links</h3>
            <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Urheberrecht</h3>
            <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
