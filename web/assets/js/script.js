/* =========================================================
   FEI World Cup Zagreb 2026 — Script
   - Mobile nav toggle
   - Language switch (HR / EN)
   - Smooth scroll close-on-click
   ========================================================= */

(function () {
  'use strict';

  /* ----------------- Mobile nav ----------------- */
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      const open = primaryNav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    primaryNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        primaryNav.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ----------------- i18n dictionary ----------------- */
  const i18n = {
    hr: {
      'brand.line1': 'FEI World Cup',
      'brand.line2': 'Zagreb 2026',

      'nav.home': 'Naslovnica',
      'nav.about': 'O natjecanju',
      'nav.location': 'Lokacija',
      'nav.programme': 'Program',
      'nav.riders': 'Za natjecatelje',
      'nav.visitors': 'Za posjetitelje',
      'nav.sponsors': 'Sponzori',
      'nav.media': 'Mediji',
      'nav.contact': 'Kontakt',

      'hero.freeEntry': 'SLOBODAN ULAZ ZA POSJETITELJE',
      'hero.eyebrow': 'FEI WORLD CUP · CSI2*-W | CSI1* | CSIYH1*',
      'hero.tournament': '70. Lipanjski turnir',
      'hero.date': '11.–14. lipnja 2026.  ·  Hipodrom Zagreb',
      'hero.lead': 'FEI World Cup u preponskom jahanju vraća se u Zagreb nakon dvadeset godina. Četiri dana međunarodnih utakmica, otvoren za publiku.',
      'hero.ctaProgramme': 'Program natjecanja',
      'hero.ctaVisitors': 'Za posjetitelje',

      'intro.eyebrow': '11.–14. lipnja 2026.',
      'intro.title': 'FEI World Cup u preponskom jahanju vraća se u Zagreb',
      'intro.p1': 'Zagreb će od 11. do 14. lipnja ponovno biti domaćin međunarodnog preponskog natjecanja iz kalendara Fédération Équestre Internationale, čime se nakon dvadeset godina u grad vraća razina FEI World Cupa. Natjecanje se održava na zagrebačkom Hipodromu u sklopu 70. Lipanjskog turnira i tijekom četiri dana okuplja međunarodnu konkurenciju jahača i konja koji u Zagrebu osvajaju bodove za ukupni poredak i plasman u završnicu sezone.',
      'intro.p2': 'Program uključuje kategorije CSI2*-W, CSI1* i CSIYH1*, raspoređene kroz više natjecateljskih dana, dok je središnji događaj Grand Prix utakmica za Pehar Grada Zagreba. Očekuje se dolazak natjecatelja iz više od petnaest zemalja, zajedno s njihovim timovima i konjima, što Lipanjski turnir ponovno pozicionira među relevantna međunarodna konjička događanja u ovom dijelu Europe.',
      'intro.p3': 'Održavanje natjecanja ove razine nadovezuje se na dugu tradiciju Lipanjskog turnira, jednog od najstarijih konjičkih natjecanja u Hrvatskoj, ali istovremeno postavlja i jasne organizacijske zahtjeve — od infrastrukture i uvjeta na terenu do provedbe tehničkih i sigurnosnih standarda koje propisuje FEI. Upravo ta kombinacija kontinuiteta i zahtjevnosti definira ovogodišnje izdanje turnira.',
      'intro.p4': 'Uz sportski program, događanje uključuje i sadržaje za posjetitelje, a ulaz na natjecanje bit će besplatan.',

      'facts.tournament': 'Turnir',
      'facts.categories': 'Kategorije',
      'facts.dates': 'Termin',
      'facts.datesValue': '11.–14. lipnja 2026.',
      'facts.venue': 'Lokacija',
      'facts.venueValue': 'Hipodrom, Zagreb · Hrvatska',

      'about.eyebrow': 'O natjecanju',
      'about.title': 'O Lipanjskom turniru',
      'about.p1': 'Lipanjski turnir održava se na zagrebačkom Hipodromu više od sedam desetljeća i jedno je od najdugovječnijih konjičkih natjecanja u Hrvatskoj. Kroz to vrijeme bio je stalni dio domaćeg sportskog kalendara i mjesto na kojem su domaći jahači redovito nastupali uz međunarodnu konkurenciju.',
      'about.p2': 'Za mnoge jahače upravo je ovdje počinjao prvi ozbiljniji iskorak prema međunarodnoj sceni, dok je publici omogućavao kontinuirano praćenje preponskog jahanja. Ta dvostruka uloga — razvoj domaćih sportaša i prisutnost stranih natjecatelja — određivala je turnir kroz godine.',
      'about.p3': 'Sedamdeseto izdanje, koje se održava od 11. do 14. lipnja 2026., vraća u Zagreb FEI World Cup razinu natjecanja nakon dvadeset godina. Time se program turnira pomiče prema zahtjevnijim utakmicama, s višim parkurima i tehnički složenijim postavama koje traže veću preciznost i iskustvo.',
      'about.p4': 'Program uključuje kategorije CSI2*-W, CSI1* i CSIYH1*, raspoređene kroz četiri dana, dok je Grand Prix za Pehar Grada Zagreba središnja utakmica turnira. Lipanjski turnir se pritom nastavlja u svom prepoznatljivom formatu, ali ove godine jasno ulazi u okvir natjecanja više razine.',
      'about.stat1': 'izdanje turnira',
      'about.stat2': 'natjecateljska dana',
      'about.stat3': 'godina od zadnjeg World Cupa',
      'about.stat4': 'zemalja sudionica',

      'location.eyebrow': 'Lokacija',
      'location.title': 'Hipodrom Zagreb',
      'location.p1': 'Natjecanje se održava na zagrebačkom Hipodromu.',
      'location.p2': 'Pristup lokaciji tijekom turnira organiziran je kroz označene ulaze i zone kretanja, uz privremenu regulaciju prometa i parkiranja u neposrednoj blizini. Preporučuje se pratiti upute na licu mjesta i planirati dolazak s obzirom na očekivanu posjećenost.',
      'location.p3': 'Karta prostora i upute za dolazak dostupni su na ovoj stranici.',
      'location.address': 'Adresa:',
      'location.entry': 'Glavni ulaz:',
      'location.entryValue': 'označen za posjetitelje — pratite upute na lokaciji',
      'location.parking': 'Parking:',
      'location.parkingValue': 'privremena regulacija u neposrednoj blizini',
      'location.navigate': 'Otvori navigaciju',
      'location.mapPdf': 'Karta prostora (PDF)',
      'location.zones': 'Zone na lokaciji',
      'zone.arena': 'Glavna arena',
      'zone.warmup': 'Warm-up',
      'zone.stables': 'Staje',
      'zone.parking': 'Parking',
      'zone.entry': 'Ulazi za posjetitelje',
      'zone.showoffice': 'Show office',

      'programme.eyebrow': 'Program',
      'programme.title': 'Detaljan raspored uskoro',
      'programme.p1': 'Program uključuje međunarodne utakmice u kategorijama CSI2*-W, CSI1* i CSIYH1*, uključujući World Cup kvalifikacijsku razinu te natjecanja za mlade konje. Uz sportski dio, tijekom četiri dana održavanja priprema se i opsežan prateći program za posjetitelje, s naglaskom na sadržaje za djecu i obitelji, kao i dodatne aktivnosti u okviru Sport Festa.',
      'programme.soon': '<strong>Uskoro objavljujemo:</strong> raspored utakmica, satnicu, službeni program, informacije za publiku i detalje o popratnim sadržajima.',
      'programme.notify': 'Obavijesti me',
      'day.thursday': 'Četvrtak',
      'day.friday': 'Petak',
      'day.saturday': 'Subota',
      'day.sunday': 'Nedjelja',
      'month.june': 'Lipanj 2026.',
      'day1.l1': 'CSIYH1* — mladi konji',
      'day1.l2': 'CSI1* — uvodne utakmice',
      'day1.l3': 'Otvaranje turnira',
      'day2.l1': 'CSI2*-W — kvalifikacije',
      'day2.l2': 'CSI1* / CSIYH1*',
      'day2.l3': 'Večernji program',
      'day3.l1': '<strong>Grand Prix — Pehar Grada Zagreba</strong>',
      'day3.l2': 'FEI World Cup ključna utakmica',
      'day3.l3': 'Svečana dodjela nagrada',
      'day4.l1': 'CSI2*-W finale',
      'day4.l2': 'Završne utakmice CSI1*',
      'day4.l3': 'Zatvaranje turnira',

      'riders.eyebrow': 'Za natjecatelje',
      'riders.title': 'Sve informacije za jahače i timove',
      'riders.p1': 'Zagrebački Hipodrom nalazi se unutar urbanog tkiva grada, na južnoj obali Save, svega nekoliko minuta vožnje od centra. Takva pozicija relativno je rijetka za konjičke objekte ove veličine i omogućuje izravan pristup gradskoj infrastrukturi, ali istovremeno znači da se dolazak i logistika odvijaju u uvjetima gradskog prometa, uključujući mostove preko Save koji u vršnim satima mogu biti opterećeni.',
      'riders.p2': 'Prostor Hipodroma proteže se uz rijeku i obuhvaća otvorene površine koje se za potrebe turnira organiziraju u natjecateljsku arenu, zagrijavanje i stajski dio. Zagrebačko konjičko okruženje čini mreža klubova u Zagrebu i okolici, s više od deset aktivnih sportskih klubova i kontinuiranim kalendarom natjecanja tijekom godine.',
      'riders.p3': 'Smještaj konja organiziran je u montažnim boksovima unutar hipodromskog prostora, uz prethodnu rezervaciju kroz prijavni proces. Show office nalazi se u neposrednoj blizini natjecateljske arene i staja te predstavlja referentnu točku za sve operativne informacije po dolasku.',
      'riders.p4': 'Zagreb kao domaćin nudi razvijenu hotelsku i ugostiteljsku infrastrukturu. U neposrednoj blizini Hipodroma, u Novom Zagrebu, nalaze se hoteli različitih kategorija, dok je centar grada udaljen desetak minuta vožnje i nudi širi izbor smještaja, restorana i pratećih sadržaja.',
      'riders.contactTitle': 'Rezervacija boksova i operativne informacije',
      'riders.showoffice': 'Show office',
      'riders.phone': '+385 (0) — telefon',

      'docs.schedule': 'FEI Schedule (propozicije)',
      'docs.scheduleD': 'Službene propozicije natjecanja — uvjeti, kategorije, satnica.',
      'docs.entries': 'Prijave i rokovi',
      'docs.entriesD': 'Postupak prijave (entries) i rokovi za nominacije i definitive entries.',
      'docs.vet': 'Veterinarski uvjeti',
      'docs.vetD': 'Dokumentacija, uvoz konja, pregled po dolasku.',
      'docs.tech': 'Tehničke informacije',
      'docs.techD': 'Arena, podloga, warm-up uvjeti, dimenzije.',
      'docs.map': 'Karta Hipodroma',
      'docs.mapD': 'Označene zone: arena, warm-up, staje, parking, ulazi, show office.',
      'docs.checkin': 'Check-in konja',
      'docs.checkinD': 'Satnica dolaska, prijem konja, ulaz u staje.',
      'docs.view': 'Pregledaj',

      'visitors.eyebrow': 'Za posjetitelje',
      'visitors.title': 'Hipodrom otvoren za publiku',
      'visitors.p1': 'Lipanjski turnir otvara zagrebački Hipodrom publici i vraća međunarodno preponsko jahanje u prostor grada, na nekoliko minuta od centra Zagreba. Tijekom četiri dana natjecanja Hipodrom postaje mjesto na kojem se prati vrhunski sport, ali i provodi vrijeme na otvorenom, bez formalnosti koje inače prate ovakva događanja.',
      'visitors.p2': 'Natjecanja se odvijaju kroz dan, uz izmjenu ritma — od tehnički zahtjevnih utakmica do završnica koje se odlučuju u sekundama i okupljaju publiku oko arene. Upravo taj trenutak, kada nekoliko najboljih ulazi u završnicu, definira atmosferu turnira.',
      'visitors.p3': 'Uz sportski program, prostor Hipodroma tijekom dana funkcionira kao otvorena zona za posjetitelje. U suradnji sa Sport Festom prisutni su partneri i izlagači sportske opreme, uz prodajne štandove i sadržaj vezan uz aktivan način života. Gastro zona prati program tijekom cijelog dana.',
      'visitors.p4': 'Dio sadržaja namijenjen je djeci — dječji kutci, šetnje na konjima i druženje s maskotom Purgijem organizirani su u odvojenom dijelu prostora.',
      'visitors.p5': 'U večernjim satima program se nastavlja u opuštenijem formatu, uz party i slobodan ulaz.',
      'visitors.freeBadge': 'SLOBODAN ULAZ',
      'visitors.ticketTitle': 'Ulaz na natjecanje je besplatan',
      'visitors.ticketDesc': 'Ulaz na natjecanje i večernji party program je besplatan. Za posjetitelje koji žele pratiti natjecanje iz izdvojenog prostora, dostupna je VIP zona uz plaćanje.',
      'visitors.vipTitle': 'VIP zona',
      'visitors.vipDesc': 'Izdvojen prostor s pogledom na arenu, F&B uključen.',
      'visitors.vipBuy': 'Kupi VIP ulaznicu',
      'visitors.vipContact': 'VIP kontakt:',

      'vf.sport': 'Vrhunski sport',
      'vf.sportD': 'FEI World Cup utakmice i Grand Prix za Pehar Grada Zagreba.',
      'vf.sportfest': 'Sport Fest',
      'vf.sportfestD': 'Izlagači, sportska oprema, aktivnosti i sadržaji aktivnog načina života.',
      'vf.kids': 'Za djecu',
      'vf.kidsD': 'Dječji kutci, šetnje na konjima i maskota Purgi.',
      'vf.gastro': 'Gastro zona',
      'vf.gastroD': 'Hrana i piće tijekom cijelog dana, do večernjeg party programa.',

      'sponsors.eyebrow': 'Sponzori i partneri',
      'sponsors.title': 'Hvala onima koji čine turnir mogućim',
      'sponsors.p1': 'Povratak FEI World Cup natjecanja u Zagreb važan je sportski i organizacijski iskorak koji ne bi bio moguć bez podrške partnera, sponzora i institucija koje prepoznaju vrijednost međunarodnog sporta, tradicije i razvoja konjičkog sporta u Hrvatskoj.',
      'sponsors.tier1': 'Glavni sponzori',
      'sponsors.tier2': 'Tehnički partneri',
      'sponsors.your': 'Vaš logotip',
      'sponsors.partner': 'Partner',
      'sponsors.cta': 'Zainteresiranim partnerima dostupne su sponzorske mogućnosti kroz različite razine vidljivosti i aktivacije.',
      'sponsors.contact': 'partners@worldcupzagreb.com',

      'media.eyebrow': 'Mediji',
      'media.title': 'Akreditacije, materijali, galerija',
      'media.p1': 'Praćenje Lipanjskog turnira na razini FEI World Cup natjecanja organizira se uz prethodnu najavu dolaska i, prema potrebi, akreditaciju. Medijima je omogućen pristup natjecanju, izjavama i foto materijalima u skladu s pravilima događanja i organizacijom na terenu.',
      'media.pressTitle': 'Press materijali',
      'media.pressDesc': 'Službena priopćenja i objave za preuzimanje.',
      'media.release1': 'Priopćenje — najava turnira',
      'media.release2': 'Press kit — opće informacije',
      'media.release3': 'Fact sheet — FEI World Cup',
      'media.photosTitle': 'Fotografije',
      'media.photosDesc': 'Visokorezolucijska galerija za uredničku upotrebu.',
      'media.download': 'Preuzmi ZIP galeriju',
      'media.aboutUs': 'Mediji o nama',
      'news.t1': 'FEI World Cup vraća se u Zagreb nakon dvadeset godina',
      'news.t2': '70. Lipanjski turnir: Grand Prix za Pehar Grada Zagreba',
      'news.t3': 'Hipodrom domaćin međunarodne preponske scene',
      'media.contactTitle': 'Akreditacije i upiti',
      'media.role': 'PR / Mediji',
      'media.phone': '+385 (0) — telefon',

      'contact.eyebrow': 'Kontakt',
      'contact.title': 'Zagrebački konjički savez',
      'contact.lede': 'Organizator 70. Lipanjskog turnira i FEI World Cup natjecanja u Zagrebu.',
      'contact.emailLabel': 'E-mail',
      'contact.phoneLabel': 'Telefon',
      'contact.phoneValue': '+385 (0) — kontakt',
      'contact.webLabel': 'Web',

      'footer.org': 'Organizator',
      'footer.date': '11.–14. lipnja 2026. · Hipodrom Zagreb',
      'footer.rights': 'Sva prava pridržana.'
    },

    en: {
      'brand.line1': 'FEI World Cup',
      'brand.line2': 'Zagreb 2026',

      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.location': 'Location',
      'nav.programme': 'Programme',
      'nav.riders': 'For Riders',
      'nav.visitors': 'For Visitors',
      'nav.sponsors': 'Sponsors',
      'nav.media': 'Media',
      'nav.contact': 'Contact',

      'hero.freeEntry': 'FREE ENTRY FOR SPECTATORS!',
      'hero.eyebrow': 'FEI WORLD CUP · CSI2*-W | CSI1* | CSIYH1*',
      'hero.tournament': '70th Lipanjski Tournament',
      'hero.date': '11–14 June 2026  ·  Zagreb Hippodrome',
      'hero.lead': 'FEI World Cup show jumping returns to Zagreb after twenty years. Four days of international classes, open to the public.',
      'hero.ctaProgramme': 'Competition programme',
      'hero.ctaVisitors': 'For visitors',

      'intro.eyebrow': '11–14 June 2026',
      'intro.title': 'FEI Jumping World Cup returns to Zagreb',
      'intro.p1': 'Zagreb will host an international show jumping competition from the calendar of the Fédération Équestre Internationale from 11 to 14 June, marking the return of FEI World Cup-level competition to the city after twenty years. The event takes place at the Zagreb Hippodrome as part of the 70th Lipanjski Tournament and will, over four days, bring together international riders and horses competing for World Cup points and qualification for the season final.',
      'intro.p2': 'The programme includes CSI2*-W, CSI1* and CSIYH1* categories, with multiple classes scheduled throughout the competition, while the central event will be the Grand Prix for the City of Zagreb Trophy. Riders from more than fifteen countries are expected to participate, together with their teams and horses, placing the Lipanjski Tournament once again within the circuit of relevant international equestrian events in this part of Europe.',
      'intro.p3': 'Hosting a competition at this level builds on the long-standing tradition of the Lipanjski Tournament, while at the same time requiring clearly defined organisational conditions — from arena and infrastructure to the technical and safety standards set by the FEI. This combination of continuity and operational demands defines this year’s edition of the event.',
      'intro.p4': 'Alongside the competition programme, additional content for visitors will be available, and entry to the event will be free.',

      'facts.tournament': 'Tournament',
      'facts.categories': 'Categories',
      'facts.dates': 'Dates',
      'facts.datesValue': '11–14 June 2026',
      'facts.venue': 'Venue',
      'facts.venueValue': 'Hippodrome, Zagreb · Croatia',

      'about.eyebrow': 'About the event',
      'about.title': 'About the Tournament',
      'about.p1': 'The Lipanjski Tournament has been held at the Zagreb Hippodrome for more than seventy years and is one of the longest-running equestrian competitions in Croatia. Over time, it has remained a fixed part of the national sporting calendar and a competition where Croatian riders regularly competed alongside international entries.',
      'about.p2': 'For many riders, this is where their first more serious step towards the international level began, while for the public it has provided a consistent opportunity to follow show jumping as a sport. This dual role — developing domestic athletes and hosting international participation — has defined the tournament over the years.',
      'about.p3': 'The 70th edition, taking place from 11 to 14 June 2026, brings FEI World Cup-level competition back to Zagreb after twenty years. This shifts the programme towards more demanding classes, with higher fences and technically more complex courses that require greater precision and experience.',
      'about.p4': 'The programme includes CSI2*-W, CSI1* and CSIYH1* categories, scheduled across four days, with the Grand Prix for the City of Zagreb Trophy as the central class. The Lipanjski Tournament continues in its established format, while this year clearly operating within a higher competitive level.',
      'about.stat1': 'edition of the tournament',
      'about.stat2': 'competition days',
      'about.stat3': 'years since last World Cup',
      'about.stat4': 'participating nations',

      'location.eyebrow': 'Location',
      'location.title': 'Zagreb Hippodrome',
      'location.p1': 'The competition takes place at the Zagreb Hippodrome.',
      'location.p2': 'Access to the venue during the event is organised through designated entry points and movement zones, with temporary traffic and parking arrangements in place. Visitors are advised to follow on-site directions and plan their arrival in line with expected attendance.',
      'location.p3': 'A venue map and directions are available on this page.',
      'location.address': 'Address:',
      'location.entry': 'Main entrance:',
      'location.entryValue': 'marked for visitors — follow on-site signage',
      'location.parking': 'Parking:',
      'location.parkingValue': 'temporary regulation nearby',
      'location.navigate': 'Open navigation',
      'location.mapPdf': 'Venue map (PDF)',
      'location.zones': 'Venue zones',
      'zone.arena': 'Main arena',
      'zone.warmup': 'Warm-up',
      'zone.stables': 'Stables',
      'zone.parking': 'Parking',
      'zone.entry': 'Visitor entrances',
      'zone.showoffice': 'Show office',

      'programme.eyebrow': 'Programme',
      'programme.title': 'Detailed schedule coming soon',
      'programme.p1': 'The programme will include international classes in the CSI2*-W, CSI1* and CSIYH1* categories, including World Cup qualifying level and young horse classes. Alongside the competition, a comprehensive visitor programme will run throughout the event, with a focus on activities for children and families, as well as additional content as part of the Sport Fest.',
      'programme.soon': '<strong>Coming soon:</strong> competition schedule, timetable, official programme, visitor information and details of accompanying activities.',
      'programme.notify': 'Notify me',
      'day.thursday': 'Thursday',
      'day.friday': 'Friday',
      'day.saturday': 'Saturday',
      'day.sunday': 'Sunday',
      'month.june': 'June 2026',
      'day1.l1': 'CSIYH1* — young horses',
      'day1.l2': 'CSI1* — opening classes',
      'day1.l3': 'Tournament opening',
      'day2.l1': 'CSI2*-W — qualifiers',
      'day2.l2': 'CSI1* / CSIYH1*',
      'day2.l3': 'Evening programme',
      'day3.l1': '<strong>Grand Prix — City of Zagreb Trophy</strong>',
      'day3.l2': 'FEI World Cup feature class',
      'day3.l3': 'Award ceremony',
      'day4.l1': 'CSI2*-W finals',
      'day4.l2': 'Closing CSI1* classes',
      'day4.l3': 'Tournament closing',

      'riders.eyebrow': 'For Riders',
      'riders.title': 'Everything riders and teams need',
      'riders.p1': 'The Zagreb Hippodrome is located within the urban area of the city, on the south bank of the Sava River, just a few minutes’ drive from the city centre. Such a position is relatively uncommon for equestrian venues of this size, offering direct access to city infrastructure, while at the same time requiring arrival and logistics to be planned within regular city traffic, including river crossings that may be congested during peak hours.',
      'riders.p2': 'The Hippodrome extends along the river and consists of open grounds that are organised for the event into the competition arena, warm-up areas and stabling. The equestrian scene in Zagreb is supported by a network of clubs in the city and surrounding area, with more than ten active clubs and a continuous competition calendar throughout the year.',
      'riders.p3': 'Horses are accommodated in temporary stables set up within the Hippodrome grounds, with reservations made in advance through the entry process. The show office is located close to the competition arena and stabling and serves as the main point of contact upon arrival.',
      'riders.p4': 'Zagreb offers a well-developed range of hotels and restaurants. In the immediate vicinity of the Hippodrome, in Novi Zagreb, there are hotels of different categories, while the city centre is a short drive away and provides a wider choice of accommodation, dining and other services. Increased demand is expected during the event period, particularly for higher-category accommodation.',
      'riders.contactTitle': 'Stable reservations and operational enquiries',
      'riders.showoffice': 'Show office',
      'riders.phone': '+385 (0) — phone',

      'docs.schedule': 'FEI Schedule',
      'docs.scheduleD': 'Official competition schedule — conditions, categories, timing.',
      'docs.entries': 'Entries & deadlines',
      'docs.entriesD': 'Entry process and deadlines for nominated and definite entries.',
      'docs.vet': 'Veterinary requirements',
      'docs.vetD': 'Documents, horse import, on-arrival inspection.',
      'docs.tech': 'Technical information',
      'docs.techD': 'Arena, footing, warm-up conditions, dimensions.',
      'docs.map': 'Hippodrome map',
      'docs.mapD': 'Marked zones: arena, warm-up, stables, parking, entrances, show office.',
      'docs.checkin': 'Horse check-in',
      'docs.checkinD': 'Arrival schedule, reception, stable entry.',
      'docs.view': 'View',

      'visitors.eyebrow': 'For Visitors',
      'visitors.title': 'Hippodrome open to the public',
      'visitors.p1': 'The Lipanjski Tournament opens the Zagreb Hippodrome to the public, bringing international show jumping into the urban space, just a few minutes from the city centre. Over four days, the venue becomes a place to follow top-level sport while spending time outdoors, without the formality that usually surrounds events of this kind.',
      'visitors.p2': 'The competition runs throughout the day, shifting in pace — from technical classes to final rounds decided in seconds, drawing the crowd towards the arena. Those moments, when the leading riders return for the final rounds, define the atmosphere of the event.',
      'visitors.p3': 'Alongside the sport, the Hippodrome functions as an open visitor zone. In cooperation with Sport Fest, partners and exhibitors present sports equipment, accompanied by retail stands and content focused on an active lifestyle. A food and beverage area runs throughout the day.',
      'visitors.p4': 'A dedicated section of the programme is designed for children, including children’s zones, horse walks and meet-and-greet sessions with the event mascot Purgi.',
      'visitors.p5': 'In the evening, the programme continues in a more relaxed format, with a party and free entry.',
      'visitors.freeBadge': 'FREE ENTRY',
      'visitors.ticketTitle': 'Admission to the competition is free',
      'visitors.ticketDesc': 'Admission to the competition and the evening party programme is free. For visitors who prefer to follow the competition from a separate area, a paid VIP zone is available.',
      'visitors.vipTitle': 'VIP zone',
      'visitors.vipDesc': 'Dedicated arena-view area with F&B included.',
      'visitors.vipBuy': 'Buy VIP ticket',
      'visitors.vipContact': 'VIP contact:',

      'vf.sport': 'Top-level sport',
      'vf.sportD': 'FEI World Cup classes and the Grand Prix for the City of Zagreb Trophy.',
      'vf.sportfest': 'Sport Fest',
      'vf.sportfestD': 'Exhibitors, sports gear, activities and active-lifestyle content.',
      'vf.kids': 'For children',
      'vf.kidsD': 'Kids’ zones, horse walks and meet-and-greet with mascot Purgi.',
      'vf.gastro': 'Food & beverage',
      'vf.gastroD': 'Food and drinks throughout the day, into the evening party.',

      'sponsors.eyebrow': 'Sponsors & partners',
      'sponsors.title': 'Thank you to those who make the tournament possible',
      'sponsors.p1': 'The return of FEI World Cup-level competition to Zagreb is an important sporting and organisational milestone, made possible with the support of partners, sponsors and institutions that recognise the value of international sport, tradition and the development of equestrian sport in Croatia.',
      'sponsors.tier1': 'Main sponsors',
      'sponsors.tier2': 'Technical partners',
      'sponsors.your': 'Your logo',
      'sponsors.partner': 'Partner',
      'sponsors.cta': 'Partnership opportunities are available through different levels of visibility and activation.',
      'sponsors.contact': 'partners@worldcupzagreb.com',

      'media.eyebrow': 'Media',
      'media.title': 'Accreditation, materials, gallery',
      'media.p1': 'Coverage of the Lipanjski Tournament at FEI World Cup level is organised with prior notice and, where required, accreditation. Media representatives are granted access to the competition, statements and photo materials in accordance with event guidelines and on-site organisation.',
      'media.pressTitle': 'Press materials',
      'media.pressDesc': 'Official press releases and announcements for download.',
      'media.release1': 'Press release — tournament announcement',
      'media.release2': 'Press kit — general information',
      'media.release3': 'Fact sheet — FEI World Cup',
      'media.photosTitle': 'Photos',
      'media.photosDesc': 'High-resolution gallery for editorial use.',
      'media.download': 'Download ZIP gallery',
      'media.aboutUs': 'Press coverage',
      'news.t1': 'FEI World Cup returns to Zagreb after twenty years',
      'news.t2': '70th Lipanjski Tournament: Grand Prix for City of Zagreb',
      'news.t3': 'Hippodrome hosts international show jumping scene',
      'media.contactTitle': 'Accreditation & enquiries',
      'media.role': 'PR / Media',
      'media.phone': '+385 (0) — phone',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Zagreb Equestrian Federation',
      'contact.lede': 'Organiser of the 70th Lipanjski Tournament and the FEI World Cup in Zagreb.',
      'contact.emailLabel': 'E-mail',
      'contact.phoneLabel': 'Phone',
      'contact.phoneValue': '+385 (0) — contact',
      'contact.webLabel': 'Website',

      'footer.org': 'Organiser',
      'footer.date': '11–14 June 2026 · Zagreb Hippodrome',
      'footer.rights': 'All rights reserved.'
    }
  };

  function setLang(lang) {
    if (!i18n[lang]) return;
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const value = i18n[lang][key];
      if (typeof value === 'string') {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.langBtn === lang);
    });

    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.dataset.langBtn);
    });
  });

  // initial language: stored, then browser, fallback hr
  let initial = 'hr';
  try {
    const stored = localStorage.getItem('lang');
    if (stored && i18n[stored]) initial = stored;
    else if (navigator.language && /^en/i.test(navigator.language)) initial = 'en';
  } catch (e) {}
  setLang(initial);

  /* ----------------- Reveal on scroll ----------------- */
  const observer = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 })
    : null;

  if (observer) {
    document.querySelectorAll('.section, .day-card, .doc-card, .feat, .news-card, .stat').forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
})();
