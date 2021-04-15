import Head from 'next/head'
import styles from '../styles/Development.module.css'

const Imprint = () => {

    return (
        <>
            <Head>
                <title>Zwickermann | Imprint</title>
                <meta name="keywords" content="Imprint" />
                <meta name="description" content="Zwickermann"/>
            </Head>

            
            <main className={styles.main}>
                <div className={styles.heading}>
                <h1 className="headline01">Imprint</h1>
                </div>

                <h2>Impressum</h2>
                <p>
                Anne Debora Zimmermann
                <br />
                22844 Norderstedt
                </p>
                <p>
                Telefon: 015207343391
                <br />
                E-Mail: <a href="mailto:zwicki-100@gmx.de">zwicki-100@gmx.de</a>
                <br />
                </p>
                <br />
                <br />
                <h2>Disclaimer – rechtliche Hinweise</h2>§ 1 Warnhinweis zu Inhalten
                <br />
                Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mitgrößtmöglicher Sorgfalt erstellt. Der
                Anbieter dieser Webseite übernimmt jedochkeine Gewähr für die Richtigkeit und Aktualität der bereitgestellten
                kostenlosenund frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlichgekennzeichnete Beiträge
                geben die Meinung des jeweiligen Autors und nicht immerdie Meinung des Anbieters wieder. Allein durch den Aufruf
                der kostenlosen undfrei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzerund dem
                Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen desAnbieters.
                <br />
                <br />§ 2 Externe Links
                <br />
                Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). DieseWebsites unterliegen der Haftung
                der jeweiligen Betreiber. Der Anbieter hat beider erstmaligen Verknüpfung der externen Links die fremden Inhalte
                daraufhinüberprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keineRechtsverstöße ersichtlich.
                Der Anbieter hat keinerlei Einfluss auf die aktuelleund zukünftige Gestaltung und auf die Inhalte der
                verknüpften Seiten. Das Setzenvon externen Links bedeutet nicht, dass sich der Anbieter die hinter dem
                Verweisoder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externenLinks ist für den
                Anbieter ohne konkrete Hinweise auf Rechtsverstöße nichtzumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch
                derartige externe Linksunverzüglich gelöscht.
                <br />
                <br />§ 3 Urheber- und Leistungsschutzrechte
                <br />
                Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschenUrheber- und Leistungsschutzrecht. Jede
                vom deutschen Urheber- undLeistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigenschriftlichen
                Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies giltinsbesondere für Vervielfältigung,
                Bearbeitung, Übersetzung, Einspeicherung,Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder
                anderenelektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei alssolche gekennzeichnet. Die
                unerlaubte Vervielfältigung oder Weitergabe einzelnerInhalte oder kompletter Seiten ist nicht gestattet und
                strafbar. Lediglich dieHerstellung von Kopien und Downloads für den persönlichen, privaten und
                nichtkommerziellen Gebrauch ist erlaubt.
                <br />
                <br />
                Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicherErlaubnis zulässig.
                <br />
                <br />§ 4 Besondere Nutzungsbedingungen
                <br />
                Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von denvorgenannten Paragraphen abweichen,
                wird an entsprechender Stelle ausdrücklichdarauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall
                diebesonderen Nutzungsbedingungen.
                <p>
                Quelle: <a className="link" href="https://www.juraforum.de/impressum-generator/">Original anschauen</a>
                </p>
            </main>
        </>
     );
}
export default Imprint;