export const curriculumData = {
    'elektrotechnika': {
      title: 'Podstawy Elektrotechniki',
      overview: 'Kompletne opracowanie do kolokwium: pole elektrostatyczne, pole magnetyczne, elementy obwodu, prąd stały i przemienny oraz metody analizy obwodów.',
      notes: `
        <h2>1. Wstęp i Podstawowe Pojęcia</h2>
        <p>Każda wielkość fizyczna podawana jest jako iloczyn wartości liczbowej i jednostki. W układzie SI wielkościami podstawowymi są m.in.: <b>metr, kilogram, amper, kandela, kelwin.</b></p>
        
        <h3>Ładunek Elektryczny (q, Q)</h3>
        <p>Wielkość fizyczna mająca wpływ na właściwości materii. Występują dwa rodzaje ładunków: ujemne i dodatnie.</p>
        <ul>
          <li><b>Elektron:</b> ładunek elementarny -1,602 &times; 10<sup>-19</sup> C, masa 9,109 &times; 10<sup>-31</sup> kg</li>
          <li><b>Proton:</b> ładunek dodatni +1,602 &times; 10<sup>-19</sup> C, masa 1,673 &times; 10<sup>-27</sup> kg</li>
          <li><b>Neutron:</b> ładunek 0 C, masa 1,675 &times; 10<sup>-27</sup> kg</li>
        </ul>
        <blockquote style="border-left: 4px solid var(--border-dark); padding-left: 1rem; margin-left: 0; margin-bottom: 2rem;">
          <b>Zasada Zachowania Ładunku:</b> W układach izolowanych sumaryczny ładunek (algebraiczna suma ładunków dodatnich i ujemnych) nie ulega zmianie. Ładunki elektryczne nie giną ani nie można ich stworzyć z niczego.
        </blockquote>
  
        <h2>2. Pole Elektrostatyczne</h2>
        <h3>Prawo Coulomba</h3>
        <p>Pozwala na obliczenie siły wzajemnego oddziaływania spoczywających ładunków elektrycznych. Ciała o tych samych znakach się odpychają, a o przeciwnych — przyciągają.</p>
        <p><b>F = k &middot; (|q1 &middot; q2|) / r<sup>2</sup></b></p>
        <p>Stała elektrostatyczna <b>k</b> w próżni wynosi ok. 9 &times; 10<sup>9</sup> [N&middot;m<sup>2</sup>/C<sup>2</sup>].</p>
        
        <h3>Natężenie Pola Elektrycznego (E)</h3>
        <p>Jest to stosunek siły, z jaką pole działa na ładunek próbny wprowadzony do danego punktu, do wartości tego ładunku. Jednostką jest [V/m].</p>
  
        <h2>3. Pole Przepływowe Prądu Elektrycznego</h2>
        <p>Ruch ładunków elektrycznych następuje pod wpływem natężenia pola elektrycznego.</p>
        <ul>
          <li><b>Gęstość prądu J:</b> wektor określający granicę stosunku prądu &Delta;i do elementarnej powierzchni &Delta;S. Jednostka to [A/m<sup>2</sup>].</li>
        </ul>
        <p><b>Wektorowe Prawo Ohma:</b> W izotropowym środowisku przy stałej temperaturze gęstość prądu jest proporcjonalna do natężenia pola: <b>J = &gamma;E</b></p>
  
        <h2>4. Pole Magnetyczne</h2>
        <p>Pole magnetyczne pojawia się zawsze w związku z płynącym prądem elektrycznym (ładunkami w ruchu).</p>
        <ul>
          <li><b>Indukcja magnetyczna B:</b> wektor definiujący pole, jednostką jest Tesla [T].</li>
          <li><b>Natężenie pola magnetycznego H:</b> wektor wyrażony w [A/m]. Zależność: B = &mu;H.</li>
        </ul>
        <p><b>Prawo Indukcji Faradaya:</b> Zmiana strumienia w czasie indukuje napięcie w zamkniętym obwodzie.</p>
  
        <h2>5. Elementy Obwodu Elektrycznego</h2>
        <ul>
          <li><b>Węzeł:</b> miejsce schodzenia się gałęzi.</li>
          <li><b>Gałąź:</b> zbiór połączonych elementów mających łącznie dwa wyprowadzone na zewnątrz zaciski.</li>
          <li><b>Oczko:</b> zamknięta droga dla przepływu prądu złożona z połączonych gałęzi.</li>
        </ul>
        <h3>Elementy Pasywne (W &ge; 0)</h3>
        <ul>
          <li><b>Rezystor (R):</b> Rozprasza energię (przemienia na ciepło). u = R &middot; i</li>
          <li><b>Cewka (L):</b> Gromadzi energię w polu magnetycznym. u = L &middot; (di/dt)</li>
          <li><b>Kondensator (C):</b> Gromadzi energię w polu elektrycznym. i = C &middot; (du/dt)</li>
        </ul>
  
        <h2>6. Prąd Przemienny (Reprezentacja Zespolona)</h2>
        <p>Dla wymuszeń sinusoidalnych wygodnie jest analizować obwody stosując liczby zespolone. Impedancja <b>Z = R + jX</b>.</p>
        <ul>
          <li><b>Cewka Idealna L:</b> Napięcie wyprzedza w fazie prąd o 90&deg;. Reaktancja indukcyjna X<sub>L</sub> = &omega;L</li>
          <li><b>Kondensator Idealny C:</b> Napięcie opóźnia się w fazie względem prądu o 90&deg;. Reaktancja pojemnościowa X<sub>C</sub> = 1/(&omega;C)</li>
        </ul>
  
        <h2>7. Prawa Kirchhoffa</h2>
        <h3>Pierwsze Prawo Kirchhoffa (Prądowe - Węzły)</h3>
        <p>Suma algebraiczna prądów w dowolnym węźle równa jest zeru. (&Sigma; I = 0)</p>
        <h3>Drugie Prawo Kirchhoffa (Napięciowe - Oczka)</h3>
        <p>W dowolnym oczku suma algebraiczna napięć źródłowych i napięć na elementach (spadków napięć) jest równa zeru: &Sigma; E = &Sigma; R&middot;I</p>
  
        <h2>8. Metody Analizy Obwodów Liniowych</h2>
        <h3>Metoda Prądów Oczkowych (Cyklicznych)</h3>
        <p>Opiera się o równania napięciowe Kirchhoffa. Wyznacza się wymyślone "prądy oczkowe", które rzekomo krążą wokół poszczególnych oczek.</p>
        <h3>Metoda Potencjałów Węzłowych</h3>
        <p>Opiera się o prądowe Prawo Kirchhoffa i redukuje obwód do wyliczenia napięć (w-1) węzłów. Jeden z węzłów obiera się jako odniesienie i nadaje mu potencjał V = 0.</p>
      `,
      quiz: [
        {
          id: 1,
          question: "1 kV to",
          options: ["0,001 V", "1000 000 V", "1 000 000 mV", "1 000 V"],
          correctIndices: [2, 3]
        },
        {
          id: 2,
          question: "Ładunek protonu wynosi",
          options: ["- 1,602 × 10^19 A", "0", "1,602 × 10^19 C", "to zależy od ośrodka w jakim się znajduje", "- 1,602 × 10^19 C", "1,602 × 10^19 A", "∞", "-∞"],
          correctIndices: [2]
        },
        {
          id: 3,
          question: "Ładunek elektronu wynosi",
          options: ["- 1,602 × 10^19 A", "∞", "-∞", "1,602 × 10^19 A", "0", "- 1,602 × 10^19 C", "to zależy od ośrodka w jakim się znajduje", "1,602 × 10^19 C"],
          correctIndices: [5]
        },
        {
          id: 4,
          question: "Podaj wzór na gęstość powierzchniową ładunków elektrycznych",
          options: ["λ = lim(Δq/Δl)", "ρ = lim(Δq/ΔV)", "σ = lim(Δq/ΔS)", "żadna odpowiedź nie jest poprawna"],
          correctIndices: [2]
        },
        {
          id: 5,
          question: "Podaj wzór na gęstość liniową ładunków elektrycznych",
          options: ["λ = lim(Δq/Δl)", "ρ = lim(Δq/ΔV)", "σ = lim(Δq/ΔS)", "żadna odpowiedź nie jest poprawna"],
          correctIndices: [0]
        },
        {
          id: 6,
          question: "Wymiarem przenikalności elektrycznej w układzie SI jest",
          options: ["Nie ma jednostki", "F/m", "F*m", "żadna odpowiedź nie jest poprawna"],
          correctIndices: [1]
        },
        {
          id: 7,
          question: "Zaznacz prawidłowe stwierdzenia (dot. pola elektrycznego)",
          options: [
            "Natężenie pola elektrycznego E jest wielkością wektorową równą granicy stosunku siły z jaką pole elektryczne działa na nieruchomy ładunek punktowy wprowadzony do rozpatrywanego punktu pola do wartości tego ładunku",
            "Zwrot wektora natężenia pola elektrycznego jest zgodny ze zwrotem siły działającej na ładunek punktowy dodatni.",
            "Jednostką natężenia pola elektrycznego jest wolt na metr (V/m).",
            "Żadna odpowiedź nie jest poprawna"
          ],
          correctIndices: [0, 1, 2]
        },
        {
          id: 8,
          question: "W próżni εr ma wartość",
          options: ["8,85 · 10^-12 F/m", "∞", "żadna odpowiedź nie jest poprawna", "1", "to zależy od ośrodka w jakim się znajduje próżnia", "0", "-∞"],
          correctIndices: [3]
        },
        {
          id: 9,
          question: "Zaznacz prawidłowe stwierdzenia/zależności wynikające z prawa Coulomba",
          options: [
            "Żadna odpowiedź nie jest poprawna",
            "Wartość siły, którą działają na siebie naładowane ciała jest wprost proporcjonalna do iloczynu ładunków i odwrotnie proporcjonalna do kwadratu odległości między ich środkami.",
            "Ciała naładowane ładunkami o różnych znakach przyciągają się, a ciała naładowane ładunkami o jednakowych znakach odpychają się."
          ],
          correctIndices: [1, 2]
        },
        {
          id: 10,
          question: "Elektrostatycznie obojętna kropla wody uderzając o stół rozpadła się na dwie krople o masach w stosunku 1:3. Ładunek jednej kropli (tej o mniejszej masie) wynosi +2Q. Jaki jest ładunek drugiej kropelki?",
          options: ["żadna odpowiedź nie jest poprawna", "-2Q", "+2Q", "-6Q"],
          correctIndices: [1]
        },
        {
          id: 11,
          question: "Jednostką ładunku jest",
          options: ["Niuton", "[N]", "[F]", "Farad", "[C]", "Kulomb"],
          correctIndices: [4, 5]
        },
        {
          id: 12,
          question: "Stała elektrostatyczna dla próżni w przybliżeniu wynosi",
          options: [
            "to zależy od ośrodka w jakim się znajduje próżnia",
            "9 × 10^9 [N·m²/C²]",
            "9 × 10^19 [N·m²/C²]",
            "0",
            "-∞",
            "∞",
            "żadna odpowiedź nie jest poprawna"
          ],
          correctIndices: [1]
        },
        {
          id: 13,
          question: "Zaznacz prawidłowe stwierdzenia dotyczące zasady superpozycji",
          options: [
            "Zasada superpozycji jest to zasada spełniona dla układów liniowych",
            "żadna odpowiedź nie jest poprawna",
            "Zasada superpozycji jest to zasada spełniona dla systemów liniowych",
            "wejście A daje odpowiedź X, a wejście B daje odpowiedź Y (A -> X, B -> Y), to wejście (A + B) daje odpowiedź (X + Y)"
          ],
          correctIndices: [0, 2, 3]
        },
        {
          id: 14,
          question: "Zaznacz prawidłowe stwierdzenia (dot. pola magnetycznego)",
          options: [
            "natężenie pola magnetycznego oznaczamy jako H",
            "Jednostką natężenia pola magnetycznego jest amper na metr.",
            "Żadna odpowiedź nie jest poprawna"
          ],
          correctIndices: [0, 1]
        },
        {
          id: 15,
          question: "Zaznacz prawidłowe stwierdzenia (dot. indukcji magnetycznej)",
          options: [
            "Jednostką indukcji magnetycznej jest tesla [t]",
            "Podstawową wielkością charakteryzującą pole magnetyczne jest indukcja magnetyczna B",
            "Żadna odpowiedź nie jest poprawna"
          ],
          correctIndices: [0, 1]
        },
        {
          id: 16,
          question: "Jednostką gęstości prądu elektrycznego jest",
          options: [
            "Nie ma jednostki",
            "amper na metr kwadratowy",
            "amper",
            "żadna odpowiedź nie jest poprawna"
          ],
          correctIndices: [1]
        },
        {
          id: 17,
          question: "Wybierz poprawne uzupełnienia zdania: \"W środowisku izotropowym wektor gęstości prądu J ma kierunek .....x1...... z wektorem natężenia pola elektrycznego .....x2......., a zależność między tymi wektorami jest ujęta prawem Ohma w postaci wektorowej.\"",
          options: [
            "przeciwny, E",
            "przeciwny, U",
            "zgodny, U",
            "zgodny, E"
          ],
          correctIndices: [3]
        },
        {
          id: 18,
          question: "Wskaż poprawne zdania (dot. węzła obwodu)",
          options: [
            "Węzeł obwodu to wyprowadzony na zewnątrz zacisk gałęzi, do której może być przyłączona jedna bądź kilka gałęzi następnych.",
            "Węzeł obwodu to wyprowadzony na zewnątrz zacisk gałęzi, do której może być przyłączona tylko jedna gałąź.",
            "nie ma w tym pytaniu poprawnych stwierdzeń"
          ],
          correctIndices: [0]
        },
        {
          id: 19,
          question: "Wskaż poprawne zdania (dot. gałęzi obwodu)",
          options: [
            "nie ma w tym pytaniu poprawnych stwierdzeń",
            "Gałęzią obwodu jest zbiór połączonych ze sobą elementów conajwyżej dwóch zacisków, z którego, przy dowolnej liczbie zacisków znajdujących się wewnątrz tego zbioru, na zewnątrz są wyprowadzone jedynie trzy zaciski.",
            "Gałęzią obwodu jest zbiór połączonych ze sobą elementów o dwóch lub większej liczbie zacisków, z którego, przy dowolnej liczbie zacisków znajdujących się wewnątrz tego zbioru, na zewnątrz są wyprowadzone jedynie dwa zaciski."
          ],
          correctIndices: [2]
        },
        {
          id: 20,
          question: "Wskaż poprawne zdania dotyczące obwodu na tablicy",
          options: [
            "Obwód jest obwodem nierozgałęzionym",
            "Obwód ma cztery węzły",
            "Obwód ma dwa węzły",
            "Obwód ma trzy węzły",
            "Obwód ma jeden węzeł",
            "Obwód nie ma żadnego węzła",
            "Obwód jest obwodem rozgałęzionym"
          ],
          correctIndices: [3, 6]
        },
        {
          id: 21,
          question: "Wskaż poprawne zdania (dot. elementów pasywnych)",
          options: [
            "nie ma w tym pytaniu poprawnych stwierdzeń",
            "Elementy pasywne, w których zachodzi proces przemiany energii elektrycznej w inny rodzaj energii nazywamy elementami rozpraszającymi",
            "Elementy pasywne, w których zachodzi proces przemiany energii elektrycznej w inny rodzaj energii nazywamy elementami dyssypatywnymi"
          ],
          correctIndices: [1, 2]
        },
        {
          id: 22,
          question: "Wskaż poprawne zdania (dot. elementów odwracalnych i nieodwracalnych)",
          options: [
            "Przykładem elementu odwracalnego jest rezystor.",
            "Element odwracalny ma takie same właściwości niezależne od sposobu połączenia elementu w obwodzie i niezależnie od biegunowości przyłożonego napięcia.",
            "Przykładem elementu nieodwracalnego jest dioda",
            "nie ma w tym pytaniu poprawnych stwierdzeń"
          ],
          correctIndices: [0, 1, 2]
        },
        {
          id: 23,
          question: "Wskaż poprawne zdania (dot. oczka obwodu)",
          options: [
            "Oczko obwodu natomiast jest zbiorem połączonych ze sobą gałęzi tworzących drogę zamkniętą przepływu prądu, przy czym po usunięciu dowolnej gałęzi pozostałe nie tworzą już drogi zamkniętej.",
            "nie ma w tym pytaniu poprawnych stwierdzeń",
            "Oczko obwodu jest zbiorem połączonych ze sobą dokładnie gałęzi tworzących drogę zamkniętą przepływu prądu."
          ],
          correctIndices: [0]
        },
        {
          id: 24,
          question: "Wskaż poprawne zdania (dot. elementów obwodu)",
          options: [
            "Elementem idealnym nazywamy taki element, który charakteryzuje tylko jeden rodzaj procesów energetycznych.",
            "Element obwodu elektrycznego jest pasywny wtedy i tylko wtedy, gdy spełnia dwa następujące warunki: 1. całkowita energia elektryczna doprowadzona do elementu w czasie od -∞ do t jest nieujemna; 2. do chwili doprowadzenia napięcia do zacisków elementu prąd w nim nie płynie i na odwrót.",
            "nie ma w tym pytaniu poprawnych stwierdzeń"
          ],
          correctIndices: [0, 1]
        },
        {
          id: 25,
          question: "Wskaż poprawne równania (Szkic objaśniający wyprowadzenie II prawa Kirchhoffa - oczko)",
          options: [
            "E1 - I1*R1 + E2 + I2*R2 - E3 + I3*R3 + I4*R4 = 0",
            "E1 - I1*R1 + E2 - I2*R2 - E3 + I3*R3 + I4*R4 = 0",
            "I1*R1 + I2*R2 - I3*R3 - I4*R4 = E1 + E2 - E3"
          ],
          correctIndices: [1, 2]
        },
        {
          id: 26,
          question: "Wskaż poprawne zależności (parametry prądu przemiennego)",
          options: [
            "XC = 1 / (2πfC)",
            "XL = 2πfL",
            "|Z| = √(XL² + XC²)",
            "XC = 2πfC"
          ],
          correctIndices: [0, 1, 2]
        },
        {
          id: 27,
          question: "Wskaż równania odpowiednie dla wskazanego węzła (Węzeł sieci elektrycznej)",
          options: [
            "I1 - I2 + I3 - I4 = 0",
            "I2 + I4 = I1 + I3",
            "I1 + I2 + I3 + I4 = 0"
          ],
          correctIndices: [0, 1]
        },
        {
          id: 28,
          question: "Wskaż poprawne równania (Napięcia gałęziowe w obwodzie)",
          options: [
            "Uda = -I4*R4",
            "Ubc = Vb - Vc = E2 - I2*R2",
            "Uab = E1 - I1*R1",
            "Ucd = Vc - Vd = -E3 + I3*R3"
          ],
          correctIndices: [0, 1, 2, 3]
        },
        {
          id: 29,
          question: "Wskaż poprawne zdania lub zależności dotyczące cewki",
          options: [
            "i = (1/L) ∫ u(τ) dτ",
            "Jednostką indukcyjności L jest henr (1 H = 1 Ω·s)",
            "u = L (di/dt)"
          ],
          correctIndices: [0, 1, 2]
        },
        {
          id: 30,
          question: "Wskaż poprawne zdania lub zależności dotyczące rezystora",
          options: [
            "i(t) = R / U(t)",
            "R = u · i",
            "Rezystancja nie posiada jednostki",
            "u(t) = R · i(t)"
          ],
          correctIndices: [3]
        },
        {
          id: 31,
          question: "Wskaż poprawne zdania lub zależności dotyczące kondensatora",
          options: [
            "i = C (du/dt)",
            "u = (1/C) ∫ i(τ) dτ",
            "Jednostką pojemności jest farad (1 F = 1 C / 1 V)."
          ],
          correctIndices: [0, 1, 2]
        },
        {
          id: 32,
          question: "W układzie SI:",
          options: [
            "Jednostką rezystywności jest om (1Ω)",
            "Jednostką konduktywności jest simens (1S = 1/Ω).",
            "Jednostką rezystancji jest om (1Ω)",
            "Jednostką konduktancji jest simens (1S = 1/Ω)."
          ],
          correctIndices: [2, 3]
        }
      ]
    }
  };