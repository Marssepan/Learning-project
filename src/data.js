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
    },
    'elektronika': {
      title: 'Elementy i Układy Elektroniczne',
      overview: 'Fizyka półprzewodników, złącze P-N, diody, tranzystory bipolarne (BJT) i unipolarne (FET), wzmacniacze operacyjne oraz elementy energoelektroniczne.',
      notes: `
      <h2 class="code-line has-line-data" data-line-start="0" data-line-end="1"><a id="1_Podstawy_fizyczne_i_definicje_0"></a>1. Podstawy fizyczne i definicje</h2>
      <ul>
      <li class="has-line-data" data-line-start="2" data-line-end="3"><strong>Elektronika:</strong> Dziedzina nauki zajmująca się ruchem elektronów swobodnych w próżni, gazach i ciałach stałych (głównie półprzewodnikach).</li>
      <li class="has-line-data" data-line-start="3" data-line-end="6"><strong>Ładunek elektryczny (q, Q):</strong> Występuje w porcjach kwantowych (niepodzielnych).
      <ul>
      <li class="has-line-data" data-line-start="4" data-line-end="5"><strong>Kwant ładunku:</strong> <strong>e = 1,602 * 10<sup>-19</sup> C</strong>.</li>
      <li class="has-line-data" data-line-start="5" data-line-end="6">Jednostką jest kulomb (1C). Nośnikami są elektrony (-e) i protony (+e). Ładunki jednoimienne się odpychają, różnoimienne przyciągają.</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="6" data-line-end="8"><strong>Prąd elektryczny:</strong> Uporządkowany ruch ładunków.
      <ul>
      <li class="has-line-data" data-line-start="7" data-line-end="8"><strong>Złota zasada schematów:</strong> Strzałka prądu wskazuje kierunek ruchu ładunków dodatnich (czyli prąd płynie w kierunku przeciwnym do faktycznego ruchu elektronów).</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="8" data-line-end="9"><strong>Natężenie prądu (i, I):</strong> Pochodna ładunku po czasie (szybkość przepływu ładunku). Wzór: <strong>i = dq / dt</strong>. Jednostka to amper (1A = 1C/1s).</li>
      <li class="has-line-data" data-line-start="9" data-line-end="11"><strong>Gęstość prądu (J):</strong> Wektor określający przestrzenny rozkład prądu na danej powierzchni. Wzór: <strong>J = I / S</strong>. Jednostka to A/m². Zwrot wektora jest zgodny ze strzałką prądu.</li>
      </ul>
      <p class="has-line-data" data-line-start="11" data-line-end="12"><strong>Prawo Coulomba i Pole elektryczne:</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="12" data-line-end="13"><strong>Siła oddziaływania ładunków:</strong> <strong>F = (Q<sub>1</sub> * Q<sub>2</sub>) / (4 * π * ε * r<sup>2</sup>)</strong></li>
      <li class="has-line-data" data-line-start="13" data-line-end="14"><strong>Natężenie pola elektrycznego (E):</strong> <strong>E = F / q</strong> (Jednostka: V/m lub N/C).</li>
      <li class="has-line-data" data-line-start="14" data-line-end="16"><strong>Praca sił pola (równomiernego):</strong> <strong>W<sub>AB</sub> = F * l<sub>AB</sub> = q * E * l<sub>AB</sub></strong>.</li>
      </ul>
      <p class="has-line-data" data-line-start="16" data-line-end="17"><strong>Napięcie (U) i Potencjał (V):</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="17" data-line-end="18"><strong>Napięcie:</strong> Iloraz pracy do przenoszonego ładunku: <strong>U<sub>AB</sub> = W<sub>AB</sub> / q</strong>. Jednostka to wolt (1V = 1J/1C).</li>
      <li class="has-line-data" data-line-start="18" data-line-end="19"><strong>Potencjał:</strong> Zdolność pola do wykonania pracy. To napięcie między danym punktem a nieskończonością (ziemią). Potencjał ziemi przyjmuje się jako 0V.</li>
      <li class="has-line-data" data-line-start="19" data-line-end="21"><strong>Zależność:</strong> <strong>U<sub>AB</sub> = V<sub>A</sub> - V<sub>B</sub></strong> (napięcie to różnica potencjałów).</li>
      </ul>
      <p class="has-line-data" data-line-start="21" data-line-end="22"><strong>Moc prądu (P):</strong> * Granica ilorazu pracy do czasu (<strong>P = dW / dt</strong>).</p>
      <ul>
      <li class="has-line-data" data-line-start="22" data-line-end="24">Dla prądu stałego: <strong>P = U * I = I<sup>2</sup> * R = U<sup>2</sup> / R</strong>. Jednostka to wat (1W).</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="26" data-line-end="27"><a id="2_Podstawowe_Prawa_Obwodw_26"></a>2. Podstawowe Prawa Obwodów</h2>
      <ul>
      <li class="has-line-data" data-line-start="28" data-line-end="29"><strong>Gałąź:</strong> Odcinek obwodu z takim samym prądem.</li>
      <li class="has-line-data" data-line-start="29" data-line-end="30"><strong>Węzeł:</strong> Punkt, w którym schodzą się co najmniej trzy prądy.</li>
      <li class="has-line-data" data-line-start="30" data-line-end="31"><strong>Oczko:</strong> Kontur zamknięty (po usunięciu elementu przestaje być zamknięty).</li>
      <li class="has-line-data" data-line-start="31" data-line-end="32"><strong>Prawo Ohma:</strong> <strong>I = U / R</strong></li>
      <li class="has-line-data" data-line-start="32" data-line-end="33"><strong>I Prawo Kirchhoffa (Napięciowe/Węzłowe):</strong> Suma algebraiczna prądów w węźle wynosi 0 (suma prądów wpływających równa się sumie wypływających). <strong>Σ I = 0</strong>.</li>
      <li class="has-line-data" data-line-start="33" data-line-end="35"><strong>II Prawo Kirchhoffa (Oczkowe):</strong> Suma algebraiczna wszystkich napięć w zamkniętym oczku jest równa zeru. <strong>Σ U = 0</strong>. (Uwaga na strzałkowanie: zgodnie z obiegiem z plusem, przeciwnie z minusem).</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="37" data-line-end="38"><a id="3_Parametry_pocze_Szeregowe_vs_Rwnolege_37"></a>3. Parametry połączeń (Szeregowe vs Równoległe)</h2>
      <table class="table table-striped table-bordered">
      <thead>
      <tr>
      <th style="text-align:left">Parametr</th>
      <th style="text-align:left">Połączenie Szeregowe</th>
      <th style="text-align:left">Połączenie Równoległe</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style="text-align:left"><strong>Prąd / Napięcie</strong></td>
      <td style="text-align:left">Prąd (<strong>I</strong>) jest ten sam wszędzie.</td>
      <td style="text-align:left">Napięcie (<strong>U</strong>) jest to samo wszędzie.</td>
      </tr>
      <tr>
      <td style="text-align:left"><strong>Rezystancja ®</strong></td>
      <td style="text-align:left"><strong>R<sub>eq</sub> = R<sub>1</sub> + R<sub>2</sub> + … + R<sub>n</sub></strong></td>
      <td style="text-align:left"><strong>1/R<sub>eq</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + … + 1/R<sub>n</sub></strong></td>
      </tr>
      <tr>
      <td style="text-align:left"><strong>Pojemność ©</strong></td>
      <td style="text-align:left"><strong>1/C<sub>eq</sub> = 1/C<sub>1</sub> + 1/C<sub>2</sub> + …</strong></td>
      <td style="text-align:left"><strong>C<sub>eq</sub> = C<sub>1</sub> + C<sub>2</sub> + … + C<sub>n</sub></strong></td>
      </tr>
      <tr>
      <td style="text-align:left"><strong>Indukcyjność (L)</strong></td>
      <td style="text-align:left"><strong>L<sub>eq</sub> = L<sub>1</sub> + L<sub>2</sub> + … + L<sub>n</sub></strong></td>
      <td style="text-align:left"><strong>1/L<sub>eq</sub> = 1/L<sub>1</sub> + 1/L<sub>2</sub> + …</strong></td>
      </tr>
      <tr>
      <td style="text-align:left"><strong>Konduktancja (G)</strong></td>
      <td style="text-align:left"><strong>1/G<sub>eq</sub> = 1/G<sub>1</sub> + 1/G<sub>2</sub> + …</strong></td>
      <td style="text-align:left"><strong>G<sub>eq</sub> = G<sub>1</sub> + G<sub>2</sub> + … + G<sub>n</sub></strong></td>
      </tr>
      <tr>
      <td style="text-align:left"><strong>Funkcja w układzie</strong></td>
      <td style="text-align:left">Dzielnik napięcia: Napięcia rozkładają się proporcjonalnie do wartości R (<strong>U<sub>1</sub> = U * R<sub>1</sub> / (R<sub>1</sub> + R<sub>2</sub>)</strong>).</td>
      <td style="text-align:left">Dzielnik prądu: Prądy rozpływają się odwrotnie proporcjonalnie do wartości R (<strong>I<sub>1</sub> = I * R<sub>2</sub> / (R<sub>1</sub> + R<sub>2</sub>)</strong>).</td>
      </tr>
      </tbody>
      </table>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="50" data-line-end="51"><a id="4_Analiza_elementw_biernych_R_L_C_50"></a>4. Analiza elementów biernych (R, L, C)</h2>
      <h3 class="code-line has-line-data" data-line-start="52" data-line-end="53"><a id="A_Rezystor_R_Dyssypatywny_rozprasza_energi_52"></a>A. Rezystor ® - Dyssypatywny (rozprasza energię)</h3>
      <ul>
      <li class="has-line-data" data-line-start="53" data-line-end="54"><strong>Zasada działania:</strong> Elektrony zderzają się z atomami przewodnika, przekazując im energię kinetyczną (ciepło).</li>
      <li class="has-line-data" data-line-start="54" data-line-end="55"><strong>Wzór fizyczny:</strong> <strong>R = (ρ * l) / S</strong> (gdzie ρ to rezystywność, l długość, S pole przekroju).</li>
      <li class="has-line-data" data-line-start="55" data-line-end="56"><strong>Parametry rzeczywistego rezystora:</strong> Charakteryzuje się krzywą stałej mocy (np. 0.5 W), która ogranicza dopuszczalne <strong>I</strong> i <strong>U</strong>. Rezystor rzeczywisty posiada pomijalnie małą pasożytniczą indukcyjność (od przewodu) i pojemność.</li>
      <li class="has-line-data" data-line-start="56" data-line-end="59"><strong>Oznaczenia i typoszeregi:</strong> * Kody paskowe / SMD: Np. kod SMD “472” to <strong>47 * 10<sup>2</sup> = 4700 Ω = 4,7 kΩ</strong>. Litera “R” oznacza przecinek (np. 4R7 = 4,7 Ω).
      <ul>
      <li class="has-line-data" data-line-start="57" data-line-end="59">Typoszeregi: E3, E6, E12, E24 itd. Odstępy wartości tworzone są na podstawie mnożnika <strong><sup>n</sup>√10</strong>. Im wyższy szereg, tym mniejsza tolerancja błędu.</li>
      </ul>
      </li>
      </ul>
      <h3 class="code-line has-line-data" data-line-start="59" data-line-end="60"><a id="B_Kondensator_C_Zachowawczy_magazynuje_energi_w_polu_elektrycznym_59"></a>B. Kondensator © - Zachowawczy (magazynuje energię w polu elektrycznym)</h3>
      <ul>
      <li class="has-line-data" data-line-start="60" data-line-end="61"><strong>Pojemność:</strong> <strong>C = Q / V</strong> (Jednostka: Farad). Dla kondensatora płaskiego: <strong>C = (ε<sub>r</sub> * ε<sub>0</sub> * S) / d</strong>.</li>
      <li class="has-line-data" data-line-start="61" data-line-end="63"><strong>Prąd i napięcie:</strong> * Prąd przesunięcia: <strong>I = C * (dV / dt)</strong>.
      <ul>
      <li class="has-line-data" data-line-start="62" data-line-end="63">Dla prądu stałego (DC) <strong>dV / dt = 0</strong>, więc prąd nie płynie (przerwa w obwodzie).</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="63" data-line-end="64"><strong>Energia:</strong> <strong>W = 1/2 * C * V<sup>2</sup></strong>.</li>
      <li class="has-line-data" data-line-start="64" data-line-end="67"><strong>Reaktancja pojemnościowa (AC):</strong> <strong>X<sub>C</sub> = 1 / (ω * C)</strong>.
      <ul>
      <li class="has-line-data" data-line-start="65" data-line-end="66">Dla <strong>f → ∞</strong>, <strong>X<sub>C</sub> → 0</strong> (zwarcie).</li>
      <li class="has-line-data" data-line-start="66" data-line-end="67">W układach AC prąd wyprzedza napięcie o 90° (π/2).</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="67" data-line-end="69"><strong>Model rzeczywisty:</strong> Posiada tzw. upływność (modelowaną jako równoległy rezystor prądu stałego).</li>
      </ul>
      <h3 class="code-line has-line-data" data-line-start="69" data-line-end="70"><a id="C_Cewka_indukcyjna_Induktor_L_Zachowawczy_magazynuje_energi_w_polu_magnetycznym_69"></a>C. Cewka indukcyjna / Induktor (L) - Zachowawczy (magazynuje energię w polu magnetycznym)</h3>
      <ul>
      <li class="has-line-data" data-line-start="70" data-line-end="71"><strong>Indukcyjność:</strong> <strong>L = (μ<sub>r</sub> * μ<sub>0</sub> * z<sup>2</sup> * S) / l</strong> (Jednostka: Henr).</li>
      <li class="has-line-data" data-line-start="71" data-line-end="72"><strong>Napięcie i prąd:</strong> Zgodnie z prawem Faradaya <strong>V = L * (dI / dt)</strong>.</li>
      <li class="has-line-data" data-line-start="72" data-line-end="73"><strong>Energia:</strong> <strong>W = 1/2 * L * I<sup>2</sup></strong>.</li>
      <li class="has-line-data" data-line-start="73" data-line-end="77"><strong>Reaktancja indukcyjna (AC):</strong> <strong>X<sub>L</sub> = ω * L</strong>.
      <ul>
      <li class="has-line-data" data-line-start="74" data-line-end="75">Dla <strong>f → ∞</strong>, <strong>X<sub>L</sub> → ∞</strong> (przerwa w obwodzie).</li>
      <li class="has-line-data" data-line-start="75" data-line-end="76">Dla małych częstotliwości (DC) cewka stanowi zwarcie.</li>
      <li class="has-line-data" data-line-start="76" data-line-end="77">W układach AC prąd opóźnia się względem napięcia o 90° (π/2).</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="77" data-line-end="79"><strong>Model rzeczywisty:</strong> Posiada wewnętrzną rezystancję zwojów (szeregowo z idealną cewką).</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="81" data-line-end="82"><a id="5_Prd_przemienny_AC_i_Przebiegi_Czasowe_81"></a>5. Prąd przemienny (AC) i Przebiegi Czasowe</h2>
      <ul>
      <li class="has-line-data" data-line-start="83" data-line-end="84"><strong>Sygnał sinusoidalny:</strong> <strong>v(t) = V<sub>0</sub> * cos(ωt)</strong>, gdzie <strong>ω = 2πf = 2π / T</strong>.</li>
      <li class="has-line-data" data-line-start="84" data-line-end="85"><strong>Wartość skuteczna (RMS):</strong> To hipotetyczny prąd stały wywołujący taki sam skutek cieplny jak dany przebieg zmienny na tym samym rezystorze w tym samym czasie. Dla czystej sinusoidy: <strong>I<sub>sk</sub> = I<sub>m</sub> / √2 ≈ 0,707 * I<sub>m</sub></strong>.</li>
      <li class="has-line-data" data-line-start="85" data-line-end="87"><strong>Wartość średnia:</strong> Pamiętaj, że średnia z półokresu sinusoidy to <strong>2 / π ≈ 0,637 * I<sub>m</sub></strong>.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="89" data-line-end="90"><a id="6_Stany_Nieustalone_Skok_Jednostkowy_89"></a>6. Stany Nieustalone (Skok Jednostkowy)</h2>
      <p class="has-line-data" data-line-start="91" data-line-end="92">Kluczowe zagadnienie na kolokwiach – jak zachowuje się układ po zamknięciu włącznika (t=0):</p>
      <ul>
      <li class="has-line-data" data-line-start="93" data-line-end="97"><strong>Układ RC:</strong>
      <ul>
      <li class="has-line-data" data-line-start="94" data-line-end="95">Stała czasowa <strong>τ = R * C</strong>.</li>
      <li class="has-line-data" data-line-start="95" data-line-end="96">Kondensator zaczyna się ładować: napięcie rośnie wykładniczo <strong>V<sub>C</sub> = V<sub>0</sub> * (1 - e<sup>-t/RC</sup>)</strong>.</li>
      <li class="has-line-data" data-line-start="96" data-line-end="97">Spadek napięcia na rezystorze maleje: <strong>V<sub>R</sub> = V<sub>0</sub> * e<sup>-t/RC</sup></strong>. Prąd w obwodzie zanika.</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="97" data-line-end="101"><strong>Układ RL:</strong>
      <ul>
      <li class="has-line-data" data-line-start="98" data-line-end="99">Stała czasowa <strong>τ = L / R</strong>.</li>
      <li class="has-line-data" data-line-start="99" data-line-end="100">Prąd powoli rośnie (cewka przeciwdziała zmianom): <strong>I = (V<sub>0</sub> / R) * (1 - e<sup>-Rt/L</sup>)</strong>.</li>
      <li class="has-line-data" data-line-start="100" data-line-end="101">Napięcie na cewce spada: <strong>V<sub>L</sub> = V<sub>0</sub> * e<sup>-Rt/L</sup></strong>.</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="101" data-line-end="103"><strong>Układ RLC:</strong> Pojawiają się drgania (pulsacja <strong>ω = 1 / √(L * C)</strong>), o ile tłumienie układu (zależne od R) jest wystarczająco małe (<strong>R<sup>2</sup> &lt; 4L / C</strong>).</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="105" data-line-end="106"><a id="7_Materiay_Elektroniczne_105"></a>7. Materiały Elektroniczne</h2>
      <ul>
      <li class="has-line-data" data-line-start="107" data-line-end="108"><strong>Konduktywność (γ) a Rezystywność (ρ):</strong> Są swoimi odwrotnościami (<strong>ρ = 1 / γ</strong>).</li>
      <li class="has-line-data" data-line-start="108" data-line-end="112"><strong>Wpływ temperatury:</strong>
      <ul>
      <li class="has-line-data" data-line-start="109" data-line-end="110"><strong>Przewodniki</strong> (np. miedź, srebro, złoto): Konduktywność <strong>≈ 10<sup>7</sup> S/m</strong>. Ze wzrostem temperatury ich rezystywność rośnie (przewodzą gorzej).</li>
      <li class="has-line-data" data-line-start="110" data-line-end="111"><strong>Półprzewodniki</strong> (np. krzem, german): Konduktywność <strong>≈ 10<sup>-8</sup></strong> do <strong>10<sup>6</sup> S/m</strong>. Ze wzrostem temperatury ich rezystywność maleje (przewodzą lepiej, uwalniają się nośniki).</li>
      <li class="has-line-data" data-line-start="111" data-line-end="112"><strong>Dielektryki</strong> (np. teflon, szkło): Konduktywność <strong>≈ 10<sup>-24</sup></strong> do <strong>10<sup>-10</sup> S/m</strong>.</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="112" data-line-end="114"><strong>Wzór na rezystywność temperaturową:</strong> <strong>ρ(T) = ρ<sub>20</sub> * [1 + α(T-20) + β(T-20)<sup>2</sup>]</strong>.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="116" data-line-end="117"><a id="8_Transformatory_116"></a>8. Transformatory</h2>
      <p class="has-line-data" data-line-start="118" data-line-end="119">Urządzenia bazujące na sprzężeniu elektromagnetycznym dwóch cewek (uzwojenia pierwotnego i wtórnego).</p>
      <ul>
      <li class="has-line-data" data-line-start="120" data-line-end="121"><strong>Przekładnia transformatora (z):</strong> <strong>z = N<sub>p</sub> / N<sub>S</sub></strong> (stosunek zwojów pierwotnych do wtórnych).</li>
      <li class="has-line-data" data-line-start="121" data-line-end="124"><strong>Zależności napięć i prądów:</strong>
      <ul>
      <li class="has-line-data" data-line-start="122" data-line-end="123">Napięcie: <strong>V<sub>S</sub> = (N<sub>S</sub> / N<sub>p</sub>) * V<sub>p</sub></strong></li>
      <li class="has-line-data" data-line-start="123" data-line-end="124">Prąd: <strong>I<sub>S</sub> = (N<sub>p</sub> / N<sub>S</sub>) * I<sub>p</sub></strong> (transformator podwyższający napięcie, obniża prąd i odwrotnie).</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="124" data-line-end="126"><strong>Typy pracy uzwojeń:</strong> Uzwojenia wtórne można połączyć szeregowo zgodnie (napięcia się sumują) lub przeciwsobnie (napięcia się odejmują). Wykorzystuje się też transformatory z odczepem w środku (np. do zasilaczy symetrycznych i prostowników na dwóch diodach). Pamiętaj też o istnieniu autotransformatorów (wspólne uzwojenie dla wejścia i wyjścia).</li>
      </ul>
      <h2 class="code-line has-line-data" data-line-start="126" data-line-end="127"><a id="1_Wprowadzenie_do_elementw_nieliniowych_126"></a>1. Wprowadzenie do elementów nieliniowych</h2>
      <ul>
      <li class="has-line-data" data-line-start="128" data-line-end="129"><strong>Element nieliniowy</strong> to taki, którego właściwości zależą od przepływającego przez niego prądu lub od napięcia panującego na jego zaciskach.</li>
      <li class="has-line-data" data-line-start="129" data-line-end="130">Większość rzeczywistych podzespołów to elementy nieliniowe. Należą do nich między innymi elementy oświetleniowe (żarówka, świetlówka, neonówka) oraz elementy elektroniczne (dioda, tranzystor, tyrystor).</li>
      <li class="has-line-data" data-line-start="130" data-line-end="131"><strong>Charakterystyka prądowo-napięciowa (I-U)</strong> elementu nieliniowego nie jest linią prostą.</li>
      <li class="has-line-data" data-line-start="131" data-line-end="133">Zależność <strong>I = f(U)</strong> dla elementów nieliniowych może być przedstawiona w formie wzoru, tabeli, wykresu lub wyłącznie w sposób opisowy.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="135" data-line-end="136"><a id="2_Przykady_elementw_i_ich_charakterystyki_IU_135"></a>2. Przykłady elementów i ich charakterystyki I-U</h2>
      <ul>
      <li class="has-line-data" data-line-start="137" data-line-end="138"><strong>Rezystor liniowy:</strong> Wykazuje proporcjonalność – dwukrotny wzrost napięcia powoduje dwukrotny wzrost prądu (<strong>I<sub>2</sub> = 2 * I<sub>1</sub></strong>).</li>
      <li class="has-line-data" data-line-start="138" data-line-end="139"><strong>Żarówka:</strong> Wraz ze wzrostem napięcia prąd rośnie wolniej (<strong>I<sub>2</sub> &lt; 2 * I<sub>1</sub></strong>), ponieważ nagrzewające się włókno zwiększa swoją rezystancję, co ogranicza prąd.</li>
      <li class="has-line-data" data-line-start="139" data-line-end="140"><strong>Warystor:</strong> Półprzewodnikowy element chroniący przed przepięciami. Wzrost napięcia przemieszcza elektrony do pasma przewodnictwa, przez co spada rezystancja elementu i prąd rośnie gwałtowniej (<strong>I<sub>2</sub> &gt; 2 * I<sub>1</sub></strong>).</li>
      <li class="has-line-data" data-line-start="140" data-line-end="141"><strong>Neonówka (charakterystyka typu S):</strong> Początkowo gaz jest niezjonizowany i element prawie nie przewodzi prądu. Dostatecznie wysokie napięcie wywołuje lawinową jonizację, co skutkuje nagłym skokiem prądu (przejście na górną gałąź). Zmniejszenie napięcia wymusza rekombinację jonów i nagły powrót do stanu izolatora (dolna gałąź).</li>
      <li class="has-line-data" data-line-start="141" data-line-end="143"><strong>Dioda tunelowa (charakterystyka typu N):</strong> Posiada specyficzny zakres <strong>ujemnej rezystancji dynamicznej</strong>.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="145" data-line-end="146"><a id="3_Punkt_pracy_i_rodzaje_rezystancji_145"></a>3. Punkt pracy i rodzaje rezystancji</h2>
      <ul>
      <li class="has-line-data" data-line-start="147" data-line-end="148"><strong>Punkt pracy:</strong> Konkretna para parametrów <strong>(U, I)</strong> znajdująca się na charakterystyce elementu, określająca aktualne napięcie na jego zaciskach oraz przepływający prąd.</li>
      <li class="has-line-data" data-line-start="148" data-line-end="149"><strong>Rezystancja statyczna ®:</strong> Iloraz napięcia i prądu elementu nieliniowego w danym punkcie pracy (<strong>R = U / I</strong>). Graficznie reprezentuje ją tangens kąta nachylenia <strong>siecznej</strong>.</li>
      <li class="has-line-data" data-line-start="149" data-line-end="151"><strong>Rezystancja dynamiczna ®:</strong> Granica stosunku przyrostu napięcia do przyrostu prądu w danym punkcie pracy (<strong>r = dU / dI</strong>). Graficznie jest to tangens kąta nachylenia <strong>stycznej</strong> poprowadzonej do krzywej w punkcie pracy.</li>
      </ul>
      <blockquote>
      <p class="has-line-data" data-line-start="151" data-line-end="152"><strong>Ważne:</strong> W przypadku elementów liniowych, rezystancja statyczna i dynamiczna są zawsze równe. Zarówno statyczna, jak i dynamiczna rezystancja elementów nieliniowych zależą od ich punktu pracy.</p>
      </blockquote>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="155" data-line-end="156"><a id="4_czenie_elementw_nieliniowych_Charakterystyki_Zastpcze_155"></a>4. Łączenie elementów nieliniowych (Charakterystyki Zastępcze)</h2>
      <blockquote>
      <p class="has-line-data" data-line-start="157" data-line-end="158">Prawa Kirchhoffa są zawsze prawdziwe, niezależnie od tego czy obwód jest liniowy, czy nieliniowy.</p>
      </blockquote>
      <ul>
      <li class="has-line-data" data-line-start="159" data-line-end="160"><strong>Połączenie szeregowe:</strong> Prąd zasilania jest wspólny dla elementów, a napięcia na nich się sumują (<strong>U = U<sub>1</sub> + U<sub>2</sub></strong>). Metoda graficzna polega na sumowaniu napięć poszczególnych elementów dla stałych wartości prądu.</li>
      <li class="has-line-data" data-line-start="160" data-line-end="162"><strong>Połączenie równoległe:</strong> Napięcie zasilania jest wspólne, a prądy płynące przez elementy się sumują (<strong>I = I<sub>1</sub> + I<sub>2</sub></strong>). Metoda graficzna opiera się na sumowaniu prądów poszczególnych elementów dla stałych wartości napięcia.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="164" data-line-end="165"><a id="5_Metody_rozwizywania_obwodw_nieliniowych_164"></a>5. Metody rozwiązywania obwodów nieliniowych</h2>
      <p class="has-line-data" data-line-start="166" data-line-end="167">Głównym problemem w analizie układów nieliniowych jest to, że powstają skomplikowane układy równań (zamiast prostego Prawa Ohma), które mogą mieć jedno, wiele lub wcale nie mieć rozwiązań. Do ich rozwiązywania stosuje się cztery główne metody:</p>
      <ul>
      <li class="has-line-data" data-line-start="168" data-line-end="169"><strong>Metody dokładne:</strong> Stosowane tylko wtedy, gdy charakterystyki podane są wzorami matematycznymi, a powstałe na ich podstawie równanie można bezbłędnie rozwiązać.</li>
      <li class="has-line-data" data-line-start="169" data-line-end="170"><strong>Metody numeryczne (np. iteracje, metoda Newtona):</strong> Wykorzystywane przy dostępności wzorów, gdy układu nie da się rozwiązać matematycznie w sposób dokładny. Opierają się na procesie zbieżnym, dla którego matematycznie musi być spełniony warunek zbieżności: <strong>-1 &lt; g’(x) &lt; 1</strong>.</li>
      <li class="has-line-data" data-line-start="170" data-line-end="171"><strong>Metody graficzne:</strong> Stosowane w przypadku, gdy charakterystyki podano w formie wykresu lub tabeli. Dla układu ze źródłem napięciowym i elementami w szeregu korzysta się z równania <strong>E - U<sub>1</sub> = U<sub>2</sub></strong>. Na wspólnym wykresie rysuje się ch-kę jednego elementu normalnie, a ch-kę drugiego (np. źródła i rezystora) po uprzednim lustrzanym odbiciu i przesunięciu do punktu zasilania <strong>E</strong> (powstaje krzywa <strong>E - N<sub>1</sub></strong>). Punkt przecięcia tych dwóch linii wyznacza poszukiwany punkt pracy.</li>
      <li class="has-line-data" data-line-start="171" data-line-end="173"><strong>Metody analityczne (Linearyzacja):</strong> Polega na przybliżeniu nieliniowej funkcji za pomocą wyrażenia uproszczonego (często linii prostej).</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="175" data-line-end="176"><a id="6_Szczegy_procesu_Linearyzacji_175"></a>6. Szczegóły procesu Linearyzacji</h2>
      <p class="has-line-data" data-line-start="177" data-line-end="178">Charakterystykę rzeczywistą elementu można zastąpić linią prostą (zlinearyzować), pod warunkiem, że ograniczamy się do <strong>niewielkiego otoczenia punktu pracy</strong>. Równanie takiej uogólnionej prostej ma postać: <strong>U = E<sub>N</sub> + r * I</strong>. Pozwala to na zastąpienie trudnego obwodu nieliniowego łatwiejszym, liniowym modelem zastępczym.</p>
      <ul>
      <li class="has-line-data" data-line-start="179" data-line-end="180"><strong>Parametr E<sub>N</sub>:</strong> Jest interpretowany jako idealne źródło napięciowe (SEM) na schemacie zastępczym. Stanowi punkt przecięcia zlinearyzowanej prostej z osią napięcia <strong>U</strong> na wykresie.</li>
      <li class="has-line-data" data-line-start="180" data-line-end="182"><strong>Parametr r:</strong> Jest interpretowany jako szeregowa rezystancja na schemacie. Jego wartość jest równa <strong>rezystancji dynamicznej</strong> elementu w rozpatrywanym punkcie (<strong>r = dU / dI</strong>).</li>
      </ul>
      <blockquote>
      <p class="has-line-data" data-line-start="182" data-line-end="183"><strong>Zasada końcowa:</strong> Po wykorzystaniu modelu zlinearyzowanego, bezwzględnie należy sprawdzić, czy element w rozwiązanym obwodzie nadal pracuje w narzuconym, małym zakresie linearyzacji.</p>
      </blockquote>
      <h2 class="code-line has-line-data" data-line-start="184" data-line-end="185"><a id="1_Pprzewodniki_i_wizania_w_ciele_staym_184"></a>1. Półprzewodniki i wiązania w ciele stałym</h2>
      <ul>
      <li class="has-line-data" data-line-start="186" data-line-end="187"><strong>Dlaczego półprzewodniki?</strong> W przeciwieństwie do metali (gdzie prąd przewodzą tylko elektrony), w półprzewodnikach prąd płynie dzięki <strong>dwóm rodzajom nośników</strong>: elektronom (ładunek ujemny, <strong>-q</strong>) i dziurom (ładunek dodatni, <strong>+q</strong>). Ponadto, ich przewodnictwo można łatwo kontrolować temperaturą, oświetleniem oraz domieszkowaniem.</li>
      <li class="has-line-data" data-line-start="187" data-line-end="188"><strong>Materiały:</strong> Najpopularniejsze to krzem (Si) i german (Ge) z IV grupy układu okresowego oraz związki (np. GaAs, SiC). W elektronice wykorzystuje się materiały <strong>monokrystaliczne</strong> (idealnie uporządkowana sieć).</li>
      <li class="has-line-data" data-line-start="188" data-line-end="189"><strong>Wiązania kowalencyjne:</strong> W krysztale krzemu (4 elektrony walencyjne) atomy uwspólniają pary elektronów z czterema sąsiadami.</li>
      <li class="has-line-data" data-line-start="189" data-line-end="191"><strong>Generacja pary elektron-dziura:</strong> Dostarczenie energii (np. temperatury lub światła) zrywa wiązanie kowalencyjne. Uwolniony elektron staje się nośnikiem swobodnym, a puste miejsce po nim staje się <strong>dziurą (h<sup>+</sup>)</strong>, która również może się przemieszczać. Procesowi temu przeciwdziała <strong>rekombinacja</strong> (anihilacja ładunku).</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="193" data-line-end="194"><a id="2_Energetyczny_Model_Pasmowy_193"></a>2. Energetyczny Model Pasmowy</h2>
      <p class="has-line-data" data-line-start="195" data-line-end="196">Zgodnie z zasadą Pauliego, poziomy energetyczne izolowanych atomów po połączeniu w kryształ rozszczepiają się, tworząc <strong>pasma energetyczne</strong>:</p>
      <ul>
      <li class="has-line-data" data-line-start="197" data-line-end="198"><strong>Pasmo walencyjne (E<sub>v</sub>):</strong> W temp. 0 K całkowicie zapełnione elektronami.</li>
      <li class="has-line-data" data-line-start="198" data-line-end="199"><strong>Pasmo wzbronione / przerwa energetyczna (E<sub>g</sub>):</strong> Obszar, w którym elektrony nie mogą przebywać. Szerokość przerwy determinuje właściwości materiału (dla Si <strong>E<sub>g</sub> ≈ 1,1 eV</strong>, dla Ge <strong>E<sub>g</sub> ≈ 0,7 eV</strong>).</li>
      <li class="has-line-data" data-line-start="199" data-line-end="201"><strong>Pasmo przewodnictwa (E<sub>c</sub>):</strong> W temp. 0 K całkowicie puste. Elektrony, które tu trafią, mogą swobodnie przewodzić prąd.</li>
      </ul>
      <p class="has-line-data" data-line-start="201" data-line-end="202"><strong>Klasyfikacja materiałów:</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="202" data-line-end="203"><strong>Izolatory (dielektryki):</strong> Bardzo duża przerwa energetyczna (<strong>E<sub>g</sub> ≥ 4 eV</strong>).</li>
      <li class="has-line-data" data-line-start="203" data-line-end="204"><strong>Półprzewodniki:</strong> Umiarkowana przerwa energetyczna (<strong>E<sub>g</sub> ≤ 4 eV</strong>).</li>
      <li class="has-line-data" data-line-start="204" data-line-end="206"><strong>Przewodniki (metale):</strong> Pasmo walencyjne i przewodnictwa nakładają się na siebie (brak przerwy) lub pasmo walencyjne jest wypełnione tylko częściowo.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="208" data-line-end="209"><a id="3_Prawdopodobiestwo_obsadzenia_i_Poziom_Fermiego_EsubFsub_208"></a>3. Prawdopodobieństwo obsadzenia i Poziom Fermiego (E<sub>F</sub>)</h2>
      <ul>
      <li class="has-line-data" data-line-start="210" data-line-end="211"><strong>Funkcja Fermiego-Diraca:</strong> Opisuje prawdopodobieństwo zajęcia danego poziomu energetycznego przez elektron.</li>
      <li class="has-line-data" data-line-start="211" data-line-end="216"><strong>Poziom Fermiego (E<sub>F</sub>):</strong> To poziom energetyczny, dla którego prawdopodobieństwo obsadzenia przez elektron wynosi dokładnie 0,5 (50%). Jego położenie decyduje o typie półprzewodnika:
      <ul>
      <li class="has-line-data" data-line-start="212" data-line-end="213"><strong>W pp. samoistnym:</strong> <strong>E<sub>F</sub></strong> leży dokładnie w połowie przerwy wzbronionej.</li>
      <li class="has-line-data" data-line-start="213" data-line-end="214"><strong>W pp. typu N:</strong> <strong>E<sub>F</sub></strong> przesuwa się w górę, w stronę pasma przewodnictwa (<strong>E<sub>c</sub></strong>).</li>
      <li class="has-line-data" data-line-start="214" data-line-end="216"><strong>W pp. typu P:</strong> <strong>E<sub>F</sub></strong> przesuwa się w dół, w stronę pasma walencyjnego (<strong>E<sub>v</sub></strong>).</li>
      </ul>
      </li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="218" data-line-end="219"><a id="4_Rodzaje_pprzewodnikw_218"></a>4. Rodzaje półprzewodników</h2>
      <h3 class="code-line has-line-data" data-line-start="220" data-line-end="221"><a id="A_Pprzewodnik_samoistny_niedomieszkowany_220"></a>A. Półprzewodnik samoistny (niedomieszkowany)</h3>
      <p class="has-line-data" data-line-start="221" data-line-end="222">Ilość elektronów (n) i dziur (p) jest sobie równa: <strong>n = p = n<sub>i</sub></strong>. Koncentracja samoistna (<strong>n<sub>i</sub></strong>) silnie rośnie wraz ze wzrostem temperatury.</p>
      <h3 class="code-line has-line-data" data-line-start="223" data-line-end="224"><a id="B_Pprzewodniki_niesamoistne_domieszkowane_223"></a>B. Półprzewodniki niesamoistne (domieszkowane)</h3>
      <p class="has-line-data" data-line-start="224" data-line-end="225">Wprowadzenie obcych atomów (domieszek) diametralnie zmienia właściwości i tworzy nośniki większościowe oraz mniejszościowe.</p>
      <ul>
      <li class="has-line-data" data-line-start="225" data-line-end="226"><strong>Typ N (Donorowy):</strong> Powstaje po domieszkowaniu pierwiastkiem <strong>V grupy</strong> (np. Fosfor P, Antymon Sb). Donor posiada 5 elektronów – cztery tworzą wiązania, piąty staje się elektronem swobodnym. Jony donora są nieruchome (ładunek <strong>+</strong>). <strong>Nośniki większościowe to elektrony</strong> (<strong>n<sub>n</sub> ≈ N<sub>D</sub></strong>).</li>
      <li class="has-line-data" data-line-start="226" data-line-end="228"><strong>Typ P (Akceptorowy):</strong> Powstaje po domieszkowaniu pierwiastkiem <strong>III grupy</strong> (np. Bor B, Glin Al). Akceptor ma 3 elektrony walencyjne – brakuje mu jednego do pełnego wiązania z krzemem, co tworzy wolną dziurę. Jony akceptora są nieruchome (ładunek <strong>-</strong>). <strong>Nośniki większościowe to dziury</strong> (<strong>p<sub>p</sub> ≈ N<sub>A</sub></strong>).</li>
      </ul>
      <blockquote>
      <p class="has-line-data" data-line-start="228" data-line-end="231"><strong>Kluczowy wzór na egzamin – Prawo masy ładunku:</strong><br>
      W stanie równowagi termodynamicznej iloczyn koncentracji elektronów i dziur jest zawsze stały (dla danej temperatury) i wynosi:<br>
      <strong>n * p = n<sub>i</sub><sup>2</sup></strong></p>
      </blockquote>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="234" data-line-end="235"><a id="5_Transport_adunkw_Konduktywno_i_Prdy_234"></a>5. Transport ładunków (Konduktywność i Prądy)</h2>
      <p class="has-line-data" data-line-start="236" data-line-end="238">Konduktywność (<strong>σ</strong>, odwrotność rezystywności <strong>ρ</strong>) zależy od koncentracji nośników i ich ruchliwości (<strong>μ</strong>):<br>
      <strong>σ = q(n * μ<sub>n</sub> + p * μ<sub>p</sub>)</strong></p>
      <p class="has-line-data" data-line-start="239" data-line-end="240">W półprzewodnikach występują <strong>dwa niezależne mechanizmy transportu ładunków</strong>:</p>
      <ul>
      <li class="has-line-data" data-line-start="240" data-line-end="243"><strong>Unoszenie (Dryft):</strong>
      <ul>
      <li class="has-line-data" data-line-start="241" data-line-end="242">Wywołane zewnętrznym <strong>polem elektrycznym (E)</strong>.</li>
      <li class="has-line-data" data-line-start="242" data-line-end="243">Wzór na gęstość prądu: <strong>J<sub>dryft</sub> = σ * E = (q * n * μ<sub>n</sub> + q * p * μ<sub>p</sub>) * E</strong>.</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="243" data-line-end="247"><strong>Dyfuzja:</strong>
      <ul>
      <li class="has-line-data" data-line-start="244" data-line-end="245">Wywołana różnicą (gradientem) koncentracji nośników (ładunki “rozmywają się” z miejsc, gdzie jest ich dużo, tam gdzie jest ich mało, ruch cieplny).</li>
      <li class="has-line-data" data-line-start="245" data-line-end="247">Wzór na gęstość prądu elektronów: <strong>J<sub>dyf,n</sub> = q * D<sub>n</sub> * grad(n)</strong>.</li>
      </ul>
      </li>
      </ul>
      <blockquote>
      <p class="has-line-data" data-line-start="247" data-line-end="248">Związek między unoszeniem a dyfuzją opisują <strong>Wzory Einsteina</strong> (<strong>D<sub>n</sub> = (k * T / q) * μ<sub>n</sub></strong>). Całkowity prąd to suma prądu unoszenia i dyfuzji.</p>
      </blockquote>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="251" data-line-end="252"><a id="6_Czujniki_i_Zjawiska_temperaturowe_251"></a>6. Czujniki i Zjawiska temperaturowe</h2>
      <ul>
      <li class="has-line-data" data-line-start="253" data-line-end="254"><strong>Termistory NTC:</strong> Czujniki półprzewodnikowe. Wraz ze wzrostem temperatury rośnie liczba nośników (<strong>n<sub>i</sub></strong>), więc <strong>rezystancja silnie maleje</strong> (Ujemny Współczynnik Temperaturowy, <strong>TC &lt; 0</strong>).</li>
      <li class="has-line-data" data-line-start="254" data-line-end="255"><strong>Czujniki Pt100 (RTD):</strong> Czujniki metalowe (platynowe). Wraz ze wzrostem temperatury atomy w sieci drgają mocniej, rozpraszając elektrony, więc <strong>rezystancja rośnie liniowo</strong> (<strong>TC &gt; 0</strong>).</li>
      <li class="has-line-data" data-line-start="255" data-line-end="257"><strong>Fotorezystory:</strong> Pod wpływem oświetlenia (fotonów o energii wyższej od przerwy zabronionej <strong>E<sub>g</sub></strong>) generowane są pary elektron-dziura, co powoduje ostry spadek rezystancji.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="259" data-line-end="260"><a id="7_Zjawisko_Halla_259"></a>7. Zjawisko Halla</h2>
      <ul>
      <li class="has-line-data" data-line-start="261" data-line-end="262">Zjawisko polegające na powstawaniu napięcia poprzecznego (<strong>U<sub>H</sub></strong>, napięcie Halla) w półprzewodniku umieszczonym w <strong>polu magnetycznym</strong>, przez który płynie prąd.</li>
      <li class="has-line-data" data-line-start="262" data-line-end="263">Wynika z działania <strong>siły Lorentza</strong>, która odchyla poruszające się w polu magnetycznym ładunki elektryczne w kierunku krawędzi próbki.</li>
      <li class="has-line-data" data-line-start="263" data-line-end="265"><strong>Zastosowanie:</strong> Hallotrony (czujniki pola magnetycznego, wyłączniki zbliżeniowe).</li>
      </ul>
      <h2 class="code-line has-line-data" data-line-start="265" data-line-end="266"><a id="1_Powstawanie_zcza_PN_i_stan_rwnowagi_265"></a>1. Powstawanie złącza P-N i stan równowagi</h2>
      <ul>
      <li class="has-line-data" data-line-start="267" data-line-end="268"><strong>Złącze P-N:</strong> Powstaje na styku półprzewodników typu P i typu N. W wyniku dyfuzji nośników (elektronów i dziur) dochodzi do ich rekombinacji na granicy obu obszarów.</li>
      <li class="has-line-data" data-line-start="268" data-line-end="269"><strong>Warstwa zaporowa (obszar zubożony):</strong> Wymieciony z wolnych nośników obszar, w którym pozostają jedynie zjonizowane, nieruchome atomy domieszek (dipol ładunku elektrycznego).</li>
      <li class="has-line-data" data-line-start="269" data-line-end="270"><strong>Pole elektryczne:</strong> Powstały dipol ładunku generuje wewnętrzne pole elektryczne, które przeciwdziała dalszej dyfuzji nośników (wywołuje prąd unoszenia). W stanie równowagi suma prądów dyfuzji i unoszenia wynosi zero.</li>
      <li class="has-line-data" data-line-start="270" data-line-end="274"><strong>Napięcie dyfuzyjne (U<sub>D</sub>):</strong> Nazywane również potencjałem bariery (<strong>φ<sub>B</sub></strong>). Oblicza się je ze wzoru:<br>
      <strong>U<sub>D</sub> = (k * T / q) * ln((N<sub>A</sub> * N<sub>D</sub>) / n<sub>i</sub><sup>2</sup>)</strong><br>
      gdzie <strong>V<sub>T</sub> = (k * T) / q</strong> to potencjał termoelektryczny, wynoszący około <strong>26 mV</strong> w temperaturze <strong>300 K</strong>.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="276" data-line-end="277"><a id="2_Polaryzacja_zcza_PN_276"></a>2. Polaryzacja złącza P-N</h2>
      <ul>
      <li class="has-line-data" data-line-start="278" data-line-end="283"><strong>Polaryzacja w kierunku zaporowym (“-” na obszar P, “+” na obszar N):</strong>
      <ul>
      <li class="has-line-data" data-line-start="279" data-line-end="280">Napięcie zewnętrzne dodaje się do potencjału bariery.</li>
      <li class="has-line-data" data-line-start="280" data-line-end="281">Skutkuje to zwiększeniem szerokości warstwy zubożonej i zwiększeniem bariery potencjału.</li>
      <li class="has-line-data" data-line-start="281" data-line-end="282">Prądy dyfuzyjne znacząco maleją.</li>
      <li class="has-line-data" data-line-start="282" data-line-end="283">Przez złącze płynie jedynie bardzo mały <strong>prąd nasycenia</strong> (unoszenie nośników mniejszościowych) oraz prąd generacji.</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="283" data-line-end="288"><strong>Polaryzacja w kierunku przewodzenia (“+” na obszar P, “-” na obszar N):</strong>
      <ul>
      <li class="has-line-data" data-line-start="284" data-line-end="285">Napięcie zewnętrzne odejmuje się od potencjału bariery.</li>
      <li class="has-line-data" data-line-start="285" data-line-end="286">Zmniejsza się ładunek oraz szerokość warstwy zubożonej.</li>
      <li class="has-line-data" data-line-start="286" data-line-end="288">Bariera potencjału maleje, co pozwala na gwałtowny wzrost prądów dyfuzyjnych (przepływ nośników większościowych).</li>
      </ul>
      </li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="290" data-line-end="291"><a id="3_Parametry_i_modele_diody_290"></a>3. Parametry i modele diody</h2>
      <ul>
      <li class="has-line-data" data-line-start="292" data-line-end="295"><strong>Wzór Shockleya (dioda idealna):</strong> Zależność prądu od napięcia opisuje równanie:<br>
      <strong>J = J<sub>S</sub> * (e<sup>U / φ<sub>T</sub></sup> - 1)</strong><br>
      gdzie <strong>J<sub>S</sub></strong> to gęstość prądu nasycenia, a <strong>φ<sub>T</sub></strong> to potencjał termiczny.</li>
      <li class="has-line-data" data-line-start="295" data-line-end="298"><strong>Dioda rzeczywista:</strong>
      <ul>
      <li class="has-line-data" data-line-start="296" data-line-end="297">Przy polaryzacji w kierunku przewodzenia pojawia się spadek napięcia na <strong>rezystancji szeregowej (R<sub>S</sub>)</strong>, która reprezentuje opór obszarów obojętnych i kontaktów złącza. Spadek ten opisuje równanie <strong>ΔU = I * R<sub>S</sub></strong>.</li>
      <li class="has-line-data" data-line-start="297" data-line-end="298">Zazwyczaj przyjmuje się uproszczony model stałonapięciowy. Oznacza to, że po przekroczeniu pewnego progu (ok. <strong>0,7 V</strong> dla krzemu i <strong>0,3 V</strong> dla germanu), dioda działa jak źródło napięciowe (SEM) na poziomie tego progu, a w stanie zaporowym stanowi przerwę w obwodzie.</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="298" data-line-end="300"><strong>Rezystancja dynamiczna (r<sub>d</sub>):</strong> To odwrotność konduktancji dynamicznej (<strong>r<sub>d</sub> = g<sup>-1</sup> = dU / dI</strong>). Jej wartość jest silnie zależna od aktualnego punktu pracy (<strong>Q</strong>) i wylicza się ją ze wzoru przybliżonego: <strong>r<sub>d</sub> = 26 mV / I<sub>Q</sub></strong>.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="302" data-line-end="303"><a id="4_Przebicie_zcza_i_Dioda_Zenera_302"></a>4. Przebicie złącza i Dioda Zenera</h2>
      <ul>
      <li class="has-line-data" data-line-start="304" data-line-end="307"><strong>Przebicie złącza</strong> to gwałtowny wzrost prądu przy polaryzacji wstecznej, po przekroczeniu charakterystycznego napięcia przebicia.
      <ul>
      <li class="has-line-data" data-line-start="305" data-line-end="306"><strong>Przebicie lawinowe:</strong> Występuje w złączach słabo domieszkowanych (o szerokiej warstwie zaporowej). Mechanizmem jest tu jonizacja zderzeniowa – rozpędzone nośniki wybijają kolejne elektrony z sieci krystalicznej.</li>
      <li class="has-line-data" data-line-start="306" data-line-end="307"><strong>Przebicie tunelowe (Zenera):</strong> Występuje w złączach silnie domieszkowanych (bardzo wąska bariera potencjału). Polega na bezpośrednim przejściu tunelowym nośnika przez barierę na ten sam poziom energii.</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="307" data-line-end="309"><strong>Dioda Zenera w stabilizatorze napięcia:</strong> Wykorzystuje charakterystykę przebicia do stabilizowania napięcia na zadanym poziomie (<strong>U<sub>Z</sub></strong>). Współczynnik stabilizacji (<strong>k</strong>) określa, jak skutecznie układ tłumi tętnienia napięcia i wyliczany jest jako stosunek względnej zmiany napięcia na wyjściu do względnej zmiany na wejściu.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="311" data-line-end="312"><a id="5_Wpyw_temperatury_na_zcze_PN_311"></a>5. Wpływ temperatury na złącze P-N</h2>
      <ul>
      <li class="has-line-data" data-line-start="313" data-line-end="314"><strong>Kierunek przewodzenia:</strong> Ze wzrostem temperatury całkowity prąd przeważnie rośnie, dominowany przez wzrost prądu <strong>I<sub>0</sub></strong>. Przy zachowaniu stałego prądu, spadek napięcia na diodzie maleje o około <strong>-2 mV / K</strong>.</li>
      <li class="has-line-data" data-line-start="314" data-line-end="315"><strong>Kierunek zaporowy:</strong> Prąd wsteczny (nasycenia i generacji) silnie rośnie wraz z temperaturą. W praktyce inżynierskiej przyjmuje się, że wartość natężenia prądu wstecznego podwaja się co każde <strong>10°C</strong> (10 K) wzrostu temperatury.</li>
      <li class="has-line-data" data-line-start="315" data-line-end="319"><strong>Napięcie przebicia:</strong>
      <ul>
      <li class="has-line-data" data-line-start="316" data-line-end="317">Przebicie tunelowe (Zenera) charakteryzuje się ujemnym współczynnikiem temperaturowym (<strong>β &lt; 0</strong>) – ze wzrostem temperatury napięcie przebicia maleje z powodu zwężania się przerwy energetycznej.</li>
      <li class="has-line-data" data-line-start="317" data-line-end="319">Przebicie lawinowe ma dodatni współczynnik temperaturowy (<strong>β &gt; 0</strong>) – wyższa temperatura to mocniejsze drgania sieci, co skraca drogę swobodną elektronów i wymaga wyższego napięcia do wywołania jonizacji.</li>
      </ul>
      </li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="321" data-line-end="322"><a id="6_Fotodiody_i_Fotoogniwa_321"></a>6. Fotodiody i Fotoogniwa</h2>
      <h3 class="code-line has-line-data" data-line-start="323" data-line-end="324"><a id="Fotodioda_323"></a>Fotodioda</h3>
      <p class="has-line-data" data-line-start="324" data-line-end="325">Działa w polaryzacji zaporowej. Światło o energii fotonów przekraczającej szerokość przerwy energetycznej (<strong>E<sub>fot</sub> ≥ E<sub>g</sub></strong>) generuje dodatkowe pary elektron-dziura. Przy braku oświetlenia płynie jedynie mały prąd zwany <strong>prądem ciemnym (I<sub>0</sub>)</strong>. Fotogeneracja powoduje powstanie <strong>fotoprądu</strong>, co zwiększa prąd wsteczny elementu.</p>
      <p class="has-line-data" data-line-start="326" data-line-end="327"><strong>Rodzaje:</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="327" data-line-end="328"><strong>Fotodioda p-i-n:</strong> Pomiędzy obszary p i n wprowadzona jest warstwa niedomieszkowana (i), co rozszerza obszar ładunku przestrzennego i poprawia wydajność zbierania nośników.</li>
      <li class="has-line-data" data-line-start="328" data-line-end="330"><strong>Fotodioda lawinowa:</strong> Wykorzystuje kaskadowe powielanie par nośników. Absorpcja fotonu zapoczątkowuje proces lawinowy.</li>
      </ul>
      <h3 class="code-line has-line-data" data-line-start="330" data-line-end="331"><a id="Fotoogniwo_Fotowoltaika_330"></a>Fotoogniwo (Fotowoltaika)</h3>
      <p class="has-line-data" data-line-start="331" data-line-end="332">Światło generuje pary elektron-dziura, które wewnętrzne pole elektryczne złącza rozdziela (elektrony do n, dziury do p). Skutkuje to wymuszeniem przepływu prądu wstecznego (<strong>I<sub>L</sub></strong>) przez zewnętrzne obciążenie (<strong>R<sub>L</sub></strong>). Spadek napięcia na obciążeniu z kolei polaryzuje ogniwo w kierunku przewodzenia. Fotoogniwo pracuje w czwartej ćwiartce charakterystyki I-U, gdzie generuje moc.</p>
      <ul>
      <li class="has-line-data" data-line-start="333" data-line-end="334"><strong>Współczynnik wypełnienia (FF):</strong> Zdefiniowany jako <strong>FF = (I<sub>m</sub> * V<sub>m</sub>) / (I<sub>sc</sub> * V<sub>oc</sub>)</strong> – określa jakość i sprawność ogniwa.</li>
      <li class="has-line-data" data-line-start="334" data-line-end="336">Straty sprawności wynikają ze zjawisk takich jak termalizacja (nadmiarowa energia fotonów zamieniana w ciepło), rekombinacja ładunków oraz brak absorpcji fotonów o zbyt małej energii. Aby zwiększyć sprawność (nawet powyżej 40%), stosuje się <strong>ogniwa wielozłączowe</strong> zbudowane z materiałów o różnej przerwie energetycznej (np. InGaP, InGaAs, Ge).</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="338" data-line-end="339"><a id="7_Przykady_zastosowania_diod_338"></a>7. Przykłady zastosowania diod</h2>
      <ul>
      <li class="has-line-data" data-line-start="340" data-line-end="341"><strong>Zabezpieczenie przed odwrotną polaryzacją zasilania</strong> (np. obwody przełączające zasilanie awaryjne).</li>
      <li class="has-line-data" data-line-start="341" data-line-end="342"><strong>Diody odsprzęgające (ang. free-wheeling diode):</strong> Zabezpieczają obwody przed przepięciami powstającymi podczas wyłączania obciążeń indukcyjnych (np. cewek).</li>
      <li class="has-line-data" data-line-start="342" data-line-end="344"><strong>Prostowniki:</strong> Przetwarzają napięcie przemienne na stałe. Dzielą się na <strong>jednopołówkowe</strong> oraz <strong>dwupołówkowe</strong>, w tym bardzo popularny <strong>Mostek Graetza</strong>. W układach tych najczęściej stosuje się dodatkowo <strong>kondensator filtrujący</strong>, który wygładza przebieg (większa pojemność skutkuje mniejszą amplitudą tętnień).</li>
      </ul>
      <h2 class="code-line has-line-data" data-line-start="344" data-line-end="345"><a id="1_Tranzystor_bipolarny_BJT_Budowa_i_Idea_Dziaania_344"></a>1. Tranzystor bipolarny (BJT) – Budowa i Idea Działania</h2>
      <p class="has-line-data" data-line-start="346" data-line-end="347"><strong>Budowa:</strong> Składa się z trzech obszarów o odmiennym typie przewodności, tworzących dwa złącza p-n. Wyprowadzenia to:</p>
      <ul>
      <li class="has-line-data" data-line-start="347" data-line-end="348"><strong>Emiter (E):</strong> Najsilniej domieszkowany (wstrzykuje nośniki).</li>
      <li class="has-line-data" data-line-start="348" data-line-end="349"><strong>Baza (B):</strong> Bardzo cienka i słabo domieszkowana warstwa środkowa.</li>
      <li class="has-line-data" data-line-start="349" data-line-end="351"><strong>Kolektor ©:</strong> Zbiera nośniki, które przeszły przez bazę.</li>
      </ul>
      <p class="has-line-data" data-line-start="351" data-line-end="352"><strong>Typy tranzystorów:</strong> NPN oraz PNP.</p>
      <p class="has-line-data" data-line-start="353" data-line-end="354"><strong>Zasada działania (na przykładzie NPN):</strong></p>
      <ol>
      <li class="has-line-data" data-line-start="354" data-line-end="355">Złącze Baza-Emiter (B-E) polaryzuje się w <strong>kierunku przewodzenia</strong>, co wymusza wstrzykiwanie elektronów z emitera do bazy.</li>
      <li class="has-line-data" data-line-start="355" data-line-end="356">Złącze Kolektor-Baza (C-B) polaryzuje się w <strong>kierunku zaporowym</strong>. Generuje to pole elektryczne, które “wyciąga” elektrony z bazy do kolektora.</li>
      <li class="has-line-data" data-line-start="356" data-line-end="358"><strong>Efekt:</strong> Niewielki prąd bazy steruje wielokrotnie większym prądem kolektora.</li>
      </ol>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="360" data-line-end="361"><a id="2_Rwnania_Prdowe_i_Ukady_Pracy_360"></a>2. Równania Prądowe i Układy Pracy</h2>
      <ul>
      <li class="has-line-data" data-line-start="362" data-line-end="363"><strong>I Prawo Kirchhoffa dla tranzystora:</strong> Suma prądów w tranzystorze wynosi zawsze: <strong>I<sub>E</sub> = I<sub>C</sub> + I<sub>B</sub></strong>.</li>
      <li class="has-line-data" data-line-start="363" data-line-end="368"><strong>Współczynniki wzmocnienia:</strong>
      <ul>
      <li class="has-line-data" data-line-start="364" data-line-end="365"><strong>α (alfa):</strong> Współczynnik transportu prądu (wzmocnienie w układzie wspólnej bazy). Wynosi <strong>α = I<sub>C</sub> / I<sub>E</sub></strong> i przyjmuje wartości bliskie jedności (np. 0,95 - 0,999).</li>
      <li class="has-line-data" data-line-start="365" data-line-end="366"><strong>β (beta):</strong> Współczynnik wzmocnienia prądowego (w układzie wspólnego emitera). Wynosi <strong>β = I<sub>C</sub> / I<sub>B</sub></strong> i zazwyczaj przyjmuje wartości <strong>≫ 1</strong> (np. 100-200).</li>
      <li class="has-line-data" data-line-start="366" data-line-end="368"><strong>Zależność między współczynnikami:</strong> <strong>β = α / (1 - α)</strong>.</li>
      </ul>
      </li>
      </ul>
      <p class="has-line-data" data-line-start="368" data-line-end="369"><strong>Trzy układy włączania tranzystora:</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="369" data-line-end="370"><strong>WE (Wspólny Emiter):</strong> Najpopularniejszy, odwraca fazę, zapewnia duże wzmocnienie prądowe i napięciowe.</li>
      <li class="has-line-data" data-line-start="370" data-line-end="371"><strong>WB (Wspólna Baza):</strong> Brak wzmocnienia prądowego (<strong>α &lt; 1</strong>).</li>
      <li class="has-line-data" data-line-start="371" data-line-end="373"><strong>WC (Wspólny Kolektor):</strong> Wtórnik emiterowy, brak wzmocnienia napięciowego.</li>
      </ul>
      <p class="has-line-data" data-line-start="373" data-line-end="374"><strong>Układ Darlingtona:</strong> Połączenie dwóch tranzystorów (<strong>E<sub>1</sub> → B<sub>2</sub></strong>) w celu uzyskania gigantycznego wzmocnienia prądowego: <strong>A<sub>I</sub> ≈ β<sup>2</sup></strong>.</p>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="377" data-line-end="378"><a id="3_Tryby_Pracy_Tranzystora_377"></a>3. Tryby Pracy Tranzystora</h2>
      <p class="has-line-data" data-line-start="379" data-line-end="380">Punkt pracy tranzystora zależy od sposobu polaryzacji obu złącz:</p>
      <ul>
      <li class="has-line-data" data-line-start="381" data-line-end="382"><strong>Zakres Aktywny (normalny):</strong> Złącze E-B spolaryzowane w kierunku przewodzenia, złącze C-B zaporowo. W tym trybie tranzystor pracuje jako <strong>wzmacniacz</strong> sygnałów.</li>
      <li class="has-line-data" data-line-start="382" data-line-end="383"><strong>Zakres Nasycenia:</strong> Oba złącza (E-B oraz C-B) spolaryzowane w kierunku przewodzenia. Używany w technice cyfrowej jako stan włączenia przełącznika (ON). Napięcie <strong>U<sub>CE</sub></strong> spada niemal do zera.</li>
      <li class="has-line-data" data-line-start="383" data-line-end="384"><strong>Zakres Zatkania (Odcięcia):</strong> Oba złącza spolaryzowane zaporowo. Tranzystor nie przewodzi prądu (poza bardzo małymi prądami upływu). Stan wyłączenia przełącznika (OFF).</li>
      <li class="has-line-data" data-line-start="384" data-line-end="386"><strong>Zakres Inwersyjny:</strong> Złącze E-B zaporowo, C-B przewodzenia (zamiana ról emitera i kolektora, lecz z bardzo małym wzmocnieniem ze względu na asymetrię budowy).</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="388" data-line-end="389"><a id="4_Charakterystyki_i_Punkt_Pracy_Qpoint_388"></a>4. Charakterystyki i Punkt Pracy (Q-point)</h2>
      <p class="has-line-data" data-line-start="390" data-line-end="391">Kluczowe wykresy dla najpopularniejszego układu <strong>WE</strong>:</p>
      <ul>
      <li class="has-line-data" data-line-start="392" data-line-end="393"><strong>Charakterystyka wejściowa (U<sub>BE</sub> = f(I<sub>B</sub>)</strong> dla stałego <strong>U<sub>CE</sub>):</strong> Przypomina zwykłą charakterystykę przewodzenia diody krzemowej, gdzie prąd rośnie gwałtownie po przekroczeniu około <strong>0,6 - 0,7 V</strong>.</li>
      <li class="has-line-data" data-line-start="393" data-line-end="394"><strong>Charakterystyka wyjściowa (I<sub>C</sub> = f(U<sub>CE</sub>)</strong> dla parametrycznego <strong>I<sub>B</sub>):</strong> Pokazuje płaskie linie prądu kolektora w obszarze aktywnym.</li>
      <li class="has-line-data" data-line-start="394" data-line-end="395"><strong>Prosta pracy (Load line):</strong> Wyznaczona przez napięcie zasilania <strong>U<sub>CC</sub></strong> i rezystancję obciążenia <strong>R<sub>L</sub></strong> (<strong>U<sub>CE</sub> = U<sub>CC</sub> - R<sub>L</sub> * I<sub>C</sub></strong>). Przedstawia wszystkie możliwe stany obwodu.</li>
      <li class="has-line-data" data-line-start="395" data-line-end="397"><strong>Punkt pracy (Q-point):</strong> Punkt przecięcia charakterystyki wyjściowej z prostą pracy. Reprezentuje stałoprądowe wartości polaryzacji (<strong>I<sub>C0</sub></strong>, <strong>U<sub>CE0</sub></strong>) przy braku sygnału zmiennego.</li>
      </ul>
      <blockquote>
      <p class="has-line-data" data-line-start="397" data-line-end="398"><strong>Ograniczenia pracy bezpiecznej:</strong> W trakcie projektowania nie można przekroczyć: maksymalnego prądu (<strong>I<sub>Cmax</sub></strong>), maksymalnego napięcia (<strong>U<sub>CEmax</sub></strong>) oraz <strong>hiperboli maksymalnej mocy admisyjnej (P<sub>a</sub>)</strong>.</p>
      </blockquote>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="401" data-line-end="402"><a id="5_Model_Maosygnaowy_Parametry_macierzy_h_401"></a>5. Model Małosygnałowy (Parametry macierzy “h”)</h2>
      <p class="has-line-data" data-line-start="403" data-line-end="404">Aby analizować wzmacnianie małych sygnałów zmiennych (AC), prąd stały pomija się (źródła zasilania DC traktuje się jako zwarcia do masy), a tranzystor zastępuje się liniowym czwórnikiem hybrydowym.</p>
      <ul>
      <li class="has-line-data" data-line-start="405" data-line-end="406"><strong>h<sub>11e</sub> = r<sub>we</sub>:</strong> Rezystancja wejściowa układu (<strong>≈ ΔU<sub>BE</sub> / ΔI<sub>B</sub></strong>).</li>
      <li class="has-line-data" data-line-start="406" data-line-end="407"><strong>h<sub>21e</sub> = β:</strong> Małosygnałowe wzmocnienie prądowe (<strong>≈ ΔI<sub>C</sub> / ΔI<sub>B</sub></strong>).</li>
      <li class="has-line-data" data-line-start="407" data-line-end="408"><strong>h<sub>22e</sub> = 1 / r<sub>wy</sub>:</strong> Konduktancja wyjściowa (<strong>≈ ΔI<sub>C</sub> / ΔU<sub>CE</sub></strong>).</li>
      <li class="has-line-data" data-line-start="408" data-line-end="410"><strong>Wzmocnienie napięciowe (K<sub>u</sub>)</strong> wzmacniacza w układzie WE określa wzór przybliżony: <strong>K<sub>u</sub> ≈ β * (R<sub>L</sub> / h<sub>11e</sub>)</strong>.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="412" data-line-end="413"><a id="6_Decybele_Pasmo_Przenoszenia_i_Klasy_Wzmacniaczy_412"></a>6. Decybele, Pasmo Przenoszenia i Klasy Wzmacniaczy</h2>
      <p class="has-line-data" data-line-start="414" data-line-end="415"><strong>Decybele (dB):</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="415" data-line-end="416">Dla wzmocnienia napięciowego i prądowego: <strong>K<sub>u,i</sub>[dB] = 20 * log(K<sub>u,i</sub>)</strong>.</li>
      <li class="has-line-data" data-line-start="416" data-line-end="418">Dla wzmocnienia mocy: <strong>K<sub>p</sub>[dB] = 10 * log(K<sub>p</sub>)</strong>.</li>
      </ul>
      <p class="has-line-data" data-line-start="418" data-line-end="419"><strong>Pasmo przenoszenia (Δf<sub>3dB</sub>):</strong> Zakres od dolnej (<strong>f<sub>d</sub></strong>) do górnej (<strong>f<sub>g</sub></strong>) częstotliwości granicznej. Na krańcach pasma następuje spadek wzmocnienia o <strong>3 dB</strong>, co fizycznie oznacza spadek napięcia do poziomu <strong>1 / √2 ≈ 0,707</strong> wartości maksymalnej.</p>
      <p class="has-line-data" data-line-start="420" data-line-end="421"><strong>Klasy pracy wzmacniaczy:</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="421" data-line-end="422"><strong>Klasa A:</strong> Tranzystor przewodzi prąd przez pełny okres (360°). Bardzo małe zniekształcenia, ale bardzo niska sprawność (max 25%).</li>
      <li class="has-line-data" data-line-start="422" data-line-end="423"><strong>Klasa B:</strong> Przewodzenie tylko przez połowę okresu (180°). Sprawność wysoka (ok. 78,5%).</li>
      <li class="has-line-data" data-line-start="423" data-line-end="424"><strong>Klasa AB:</strong> Kompromis. Przewodzenie od 180° do 360°. Sprawność rzędu 50-70% przy zachowaniu niskich zniekształceń.</li>
      <li class="has-line-data" data-line-start="424" data-line-end="426"><strong>Klasa C:</strong> Przewodzenie &lt; 180° (używana <a href="http://m.in">m.in</a>. w nadajnikach radiowych).</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="428" data-line-end="429"><a id="7_Wzmacniacze_Operacyjne_OpAmp_428"></a>7. Wzmacniacze Operacyjne (Op-Amp)</h2>
      <p class="has-line-data" data-line-start="430" data-line-end="431">To fundamentalne, wielotranzystorowe analogowe układy scalone oparte na wejściowym stopniu wzmacniacza różnicowego.</p>
      <p class="has-line-data" data-line-start="432" data-line-end="433"><strong>Cechy Idealnego Wzmacniacza Operacyjnego:</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="433" data-line-end="434">Różnicowe wzmocnienie napięciowe (<strong>A<sub>vd</sub></strong>) dążące do nieskończoności (<strong>A<sub>vd</sub> → ∞</strong>).</li>
      <li class="has-line-data" data-line-start="434" data-line-end="435">Rezystancja wejściowa dążąca do nieskończoności (<strong>R<sub>in</sub> → ∞</strong>).</li>
      <li class="has-line-data" data-line-start="435" data-line-end="437">Rezystancja wyjściowa dążąca do zera (<strong>R<sub>out</sub> → 0</strong>).</li>
      </ul>
      <blockquote>
      <p class="has-line-data" data-line-start="437" data-line-end="438"><strong>Ważne:</strong> W praktyce wzmacniacze operacyjne <strong>zawsze pracują z pętlą ujemnego sprzężenia zwrotnego</strong> (rezystor podłączony z wyjścia na wejście odwracające “-”), co stabilizuje układ i pozwala precyzyjnie dobrać wzmocnienie samymi zewnętrznymi rezystorami.</p>
      </blockquote>
      <p class="has-line-data" data-line-start="439" data-line-end="440"><strong>Podstawowe konfiguracje:</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="440" data-line-end="441"><strong>Wzmacniacz odwracający:</strong> Zmienia fazę o 180°. Wzór na napięcie wyjściowe: <strong>v<sub>out</sub> = -(R<sub>F</sub> / R<sub>S</sub>) * v<sub>s</sub></strong>.</li>
      <li class="has-line-data" data-line-start="441" data-line-end="442"><strong>Wzmacniacz nieodwracający:</strong> Zachowuje zgodność fazy. Wzór: <strong>v<sub>out</sub> = (1 + R<sub>F</sub> / R<sub>S</sub>) * v<sub>s</sub></strong>.</li>
      <li class="has-line-data" data-line-start="442" data-line-end="443"><strong>Wzmacniacz sumujący:</strong> <strong>v<sub>out</sub> = -( (R<sub>F</sub> / R<sub>S1</sub>) * v<sub>s1</sub> + (R<sub>F</sub> / R<sub>S2</sub>) * v<sub>s2</sub> + … )</strong>.</li>
      <li class="has-line-data" data-line-start="443" data-line-end="445"><strong>Wzmacniacz całkujący:</strong> Zamiast rezystora sprzężenia posiada kondensator (<strong>C<sub>F</sub></strong>). Całkuje sygnał wejściowy po czasie: <strong>v<sub>out</sub>(t) = -(1 / (R<sub>S</sub> * C<sub>F</sub>)) * ∫ v<sub>s</sub>(t) dt</strong>.</li>
      </ul>
      <h2 class="code-line has-line-data" data-line-start="445" data-line-end="446"><a id="1_Wprowadzenie_i_Podzia_445"></a>1. Wprowadzenie i Podział</h2>
      <ul>
      <li class="has-line-data" data-line-start="447" data-line-end="448"><strong>Efekt polowy:</strong> Zjawisko zmiany konduktywności (przewodnictwa) materiału półprzewodnikowego pod wpływem zewnętrznego <strong>pola elektrycznego</strong>.</li>
      <li class="has-line-data" data-line-start="448" data-line-end="453"><strong>Oznaczenia wyprowadzeń:</strong>
      <ul>
      <li class="has-line-data" data-line-start="449" data-line-end="450"><strong>S (Source - Źródło):</strong> odpowiednik emitera.</li>
      <li class="has-line-data" data-line-start="450" data-line-end="451"><strong>G (Gate - Bramka):</strong> odpowiednik bazy.</li>
      <li class="has-line-data" data-line-start="451" data-line-end="453"><strong>D (Drain - Dren):</strong> odpowiednik kolektora.</li>
      </ul>
      </li>
      </ul>
      <blockquote>
      <p class="has-line-data" data-line-start="453" data-line-end="454"><strong>Ważne:</strong> Rezystancja wejściowa tranzystorów polowych jest gigantyczna (<strong>R<sub>we</sub> ≫ R<sub>wy</sub></strong>), co oznacza, że w odróżnieniu od tranzystorów bipolarnych (sterowanych prądem), <strong>tranzystory polowe sterowane są napięciem</strong> (praktycznie nie pobierają prądu bramki).</p>
      </blockquote>
      <p class="has-line-data" data-line-start="455" data-line-end="456"><strong>Główny podział tranzystorów FET:</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="456" data-line-end="457"><strong>JFET (Złączowe):</strong> Ze złączem p-n.</li>
      <li class="has-line-data" data-line-start="457" data-line-end="461"><strong>MOSFET / IGFET (Z izolowaną bramką):</strong> Bramka oddzielona od kanału warstwą izolatora (najczęściej tlenku krzemu <strong>SiO<sub>2</sub></strong>). Dzielą się na:
      <ul>
      <li class="has-line-data" data-line-start="458" data-line-end="459"><strong>Z kanałem wzbogacanym (E-MOSFET):</strong> Normalnie wyłączone.</li>
      <li class="has-line-data" data-line-start="459" data-line-end="461"><strong>Z kanałem zubożanym (D-MOSFET):</strong> Normalnie włączone (posiadają wbudowany kanał).</li>
      </ul>
      </li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="463" data-line-end="464"><a id="2_Tranzystory_zczowe_JFET_463"></a>2. Tranzystory złączowe (JFET)</h2>
      <ul>
      <li class="has-line-data" data-line-start="465" data-line-end="466"><strong>Budowa i Zasada działania (kanał n):</strong> Prąd płynie przez kanał typu “n” od źródła (S) do drenu (D). Dwie warstwy p+ wokół kanału tworzą bramkę (G).</li>
      <li class="has-line-data" data-line-start="466" data-line-end="468"><strong>Polaryzacja:</strong> Złącze bramka-kanał (G-S) polaryzuje się w <strong>kierunku zaporowym</strong> (dla kanału “n” napięcie <strong>U<sub>GS</sub> ≤ 0</strong>). Wzrost ujemnego napięcia <strong>U<sub>GS</sub></strong> powoduje poszerzanie się warstwy zaporowej, która “zubaża” (zwęża) kanał przewodzący, ograniczając prąd drenu <strong>I<sub>D</sub></strong>, aż do momentu całkowitego zatkania kanału.</li>
      </ul>
      <p class="has-line-data" data-line-start="468" data-line-end="469"><strong>Kluczowe parametry statyczne i wzory:</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="469" data-line-end="470"><strong>U<sub>p</sub> (Napięcie odcięcia kanału):</strong> Ujemne napięcie <strong>U<sub>GS</sub></strong>, przy którym prąd przestaje płynąć.</li>
      <li class="has-line-data" data-line-start="470" data-line-end="471"><strong>I<sub>DSS</sub> (Prąd nasycenia):</strong> Maksymalny prąd drenu płynący przy <strong>U<sub>GS</sub> = 0V</strong>.</li>
      <li class="has-line-data" data-line-start="471" data-line-end="473"><strong>Równanie prądu (w zakresie nasycenia):</strong> <strong>I<sub>D</sub> = I<sub>DSS</sub> * (1 - U<sub>GS</sub> / U<sub>p</sub>)<sup>2</sup></strong></li>
      </ul>
      <p class="has-line-data" data-line-start="473" data-line-end="474"><strong>Charakterystyka wyjściowa (zakresy pracy):</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="474" data-line-end="475"><strong>Zakres liniowy (omowy/nienasycenia):</strong> Dla małych <strong>U<sub>DS</sub></strong>, tranzystor zachowuje się jak rezystor sterowany napięciem.</li>
      <li class="has-line-data" data-line-start="475" data-line-end="476"><strong>Zakres nasycenia:</strong> Po przekroczeniu <strong>U<sub>Dsat</sub></strong>, prąd <strong>I<sub>D</sub></strong> staje się prawie stały i zależy wyłącznie od <strong>U<sub>GS</sub></strong>.</li>
      <li class="has-line-data" data-line-start="476" data-line-end="478"><strong>Przebicie:</strong> Gwałtowny wzrost prądu przy zbyt wysokim <strong>U<sub>DS</sub></strong>.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="480" data-line-end="481"><a id="3_Tranzystory_z_izolowan_bramk_MOSFET_480"></a>3. Tranzystory z izolowaną bramką (MOSFET)</h2>
      <p class="has-line-data" data-line-start="482" data-line-end="483">Charakteryzują się bramką odizolowaną galwanicznie cienką warstwą tlenku (<strong>SiO<sub>2</sub></strong>), co daje ogromną rezystancję wejściową.</p>
      <h3 class="code-line has-line-data" data-line-start="484" data-line-end="485"><a id="A_MOSFET_z_kanaem_wzbogacanym_EMOSFET_Enhanced_484"></a>A. MOSFET z kanałem wzbogacanym (E-MOSFET - Enhanced)</h3>
      <ul>
      <li class="has-line-data" data-line-start="485" data-line-end="486"><strong>Normalnie wyłączony (OFF):</strong> Bez przyłożenia napięcia, kanał nie istnieje (izolacja między S i D w postaci dwóch złącz p-n przeciwstawnie skierowanych).</li>
      <li class="has-line-data" data-line-start="486" data-line-end="487"><strong>Zasada działania (kanał n):</strong> Dodatnie napięcie na bramce odpycha dziury z podłoża (typu p) i przyciąga elektrony pod warstwę izolatora, tworząc <strong>obszar inwersyjny</strong>, który staje się kanałem przewodzącym “n”.</li>
      <li class="has-line-data" data-line-start="487" data-line-end="488"><strong>Napięcie progowe (U<sub>T</sub>):</strong> Minimalne napięcie <strong>U<sub>GS</sub></strong>, które trzeba przekroczyć, aby wyindukować kanał i wymusić przepływ prądu.</li>
      <li class="has-line-data" data-line-start="488" data-line-end="492"><strong>Wzory na prąd:</strong>
      <ul>
      <li class="has-line-data" data-line-start="489" data-line-end="490">Zakres nienasycenia: <strong>I<sub>D</sub> = β * [ (U<sub>GS</sub> - U<sub>T</sub>) * U<sub>DS</sub> - U<sub>DS</sub><sup>2</sup> / 2 ]</strong></li>
      <li class="has-line-data" data-line-start="490" data-line-end="492">Zakres nasycenia: <strong>I<sub>D</sub> = (β / 2) * (U<sub>GS</sub> - U<sub>T</sub>)<sup>2</sup></strong></li>
      </ul>
      </li>
      </ul>
      <h3 class="code-line has-line-data" data-line-start="492" data-line-end="493"><a id="B_MOSFET_z_kanaem_zuboanym_DMOSFET_Depleted_492"></a>B. MOSFET z kanałem zubożanym (D-MOSFET - Depleted)</h3>
      <ul>
      <li class="has-line-data" data-line-start="493" data-line-end="494"><strong>Normalnie załączony (ON):</strong> Posiada technologicznie wbudowany, stały kanał. Przy <strong>U<sub>GS</sub> = 0V</strong> prąd może płynąć.</li>
      <li class="has-line-data" data-line-start="494" data-line-end="498"><strong>Można nim sterować w obu kierunkach:</strong>
      <ul>
      <li class="has-line-data" data-line-start="495" data-line-end="496">Ujemne <strong>U<sub>GS</sub></strong>: Odpycha elektrony, zubaża kanał i zmniejsza prąd (tryb zubożania).</li>
      <li class="has-line-data" data-line-start="496" data-line-end="498">Dodatnie <strong>U<sub>GS</sub></strong>: Przyciąga dodatkowe elektrony, wzbogacając kanał i zwiększając prąd (tryb wzbogacania).</li>
      </ul>
      </li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="500" data-line-end="501"><a id="4_Model_maosygnaowy_AC_tranzystorw_FET_500"></a>4. Model małosygnałowy (AC) tranzystorów FET</h2>
      <p class="has-line-data" data-line-start="502" data-line-end="503">Dla małych sygnałów zmiennych, modele JFET i MOSFET są identyczne. Z uwagi na brak prądu bramki, model AC opiera się na <strong>sterowanym napięciem źródle prądowym</strong>.</p>
      <ul>
      <li class="has-line-data" data-line-start="504" data-line-end="506"><strong>Transkonduktancja (g<sub>m</sub>):</strong> Najważniejszy parametr zmiennoprądowy tranzystora polowego. Określa, jak mocno napięcie sterujące na bramce wpływa na zmianę prądu wyjściowego.<br>
      <strong>g<sub>m</sub> = ΔI<sub>D</sub> / ΔU<sub>GS</sub></strong></li>
      <li class="has-line-data" data-line-start="506" data-line-end="507"><strong>Konduktancja wyjściowa (g<sub>ds</sub>):</strong> <strong>g<sub>ds</sub> = ΔI<sub>D</sub> / ΔU<sub>DS</sub></strong></li>
      <li class="has-line-data" data-line-start="507" data-line-end="508"><strong>Wzmocnienie napięciowe (A<sub>V</sub>):</strong> Dla podstawowego układu wzmacniacza wynosi: <strong>A<sub>V</sub> = -g<sub>m</sub> * R<sub>D</sub></strong> (Znak minus oznacza odwrócenie fazy sygnału, a <strong>R<sub>D</sub></strong> to rezystancja w obwodzie drenu).</li>
      <li class="has-line-data" data-line-start="508" data-line-end="510"><strong>Pojemności pasożytnicze:</strong> (<strong>C<sub>gd</sub></strong>, <strong>C<sub>gs</sub></strong>) mają kluczowe znaczenie przy wysokich częstotliwościach – ograniczają szybkość przełączania i pasmo przenoszenia.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="512" data-line-end="513"><a id="5_Zastosowania_tranzystorw_polowych_512"></a>5. Zastosowania tranzystorów polowych</h2>
      <p class="has-line-data" data-line-start="514" data-line-end="515">Dzięki sterowaniu napięciowemu i wysokiej impedancji wejściowej, FET-y mają szerokie zastosowanie:</p>
      <ul>
      <li class="has-line-data" data-line-start="516" data-line-end="517"><strong>Rezystor sterowany napięciem (VCR):</strong> Tranzystor (głównie JFET) pracujący w zakresie omowym. Wartość rezystancji (<strong>R<sub>JFET</sub> = U<sub>DS</sub> / I<sub>D</sub></strong>) zależy liniowo od napięcia na bramce.</li>
      <li class="has-line-data" data-line-start="517" data-line-end="520"><strong>Klucz (Przełącznik):</strong> Najczęstsze zastosowanie (szczególnie MOSFET-ów w elektronice cyfrowej).
      <ul>
      <li class="has-line-data" data-line-start="518" data-line-end="519">Stan <strong>OPEN (WYŁ)</strong>: Brak kanału, nieskończenie wysoka rezystancja.</li>
      <li class="has-line-data" data-line-start="519" data-line-end="520">Stan <strong>CLOSE (ZAŁ)</strong>: Kanał otwarty, tranzystor stanowi bardzo małą rezystancję <strong>R<sub>DS(ON)</sub></strong>.</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="520" data-line-end="521"><strong>Mostek H (Sterowanie silnikami):</strong> Wykorzystanie komplementarnych tranzystorów (CMOS) p-kanałowych i n-kanałowych do płynnego sterowania kierunkiem obrotów i zatrzymaniem silnika (Motor Stopped, Rotates Forward, Rotates Reverse).</li>
      <li class="has-line-data" data-line-start="521" data-line-end="522"><strong>Wzmacniacze audio i stopnie wejściowe sprzętu pomiarowego:</strong> Wszędzie tam, gdzie układ pomiarowy (lub mikrofon) nie może być obciążony prądowo, wysoka impedancja FET jest niezastąpiona.</li>
      <li class="has-line-data" data-line-start="522" data-line-end="524"><strong>Drajvery zasilania (LED, ściemniacze):</strong> Gdzie wymagana jest kontrola dużych prądów przy pomocy bardzo słabych (np. z mikroprocesora) sygnałów napięciowych.</li>
      </ul>
      <h2 class="code-line has-line-data" data-line-start="524" data-line-end="525"><a id="1_Przeczanie_w_obwodach_DC_i_Modulacja_PWM_524"></a>1. Przełączanie w obwodach DC i Modulacja PWM</h2>
      <ul>
      <li class="has-line-data" data-line-start="526" data-line-end="527">W obwodach prądu stałego (DC) elementami przełączającymi są najczęściej tranzystory unipolarne (MOSFET) lub bipolarne.</li>
      <li class="has-line-data" data-line-start="527" data-line-end="530"><strong>PWM (Pulse Width Modulation - Modulacja szerokości impulsu):</strong> To technika sterowania, w której <strong>wypełnienie impulsu</strong> decyduje o wartości skutecznej napięcia, a tym samym o średniej mocy przekazywanej do obciążenia.
      <ul>
      <li class="has-line-data" data-line-start="528" data-line-end="529"><strong>Wzór na moc średnią:</strong> <strong>P<sub>sr</sub> = R * I<sub>sk</sub><sup>2</sup></strong></li>
      <li class="has-line-data" data-line-start="529" data-line-end="530"><strong>Wzór na prąd skuteczny (RMS):</strong> <strong>I<sub>sk</sub> = √( (1/T) * ∫ i<sup>2</sup> dt )</strong> (całkowane w przedziale od 0 do T).</li>
      </ul>
      </li>
      <li class="has-line-data" data-line-start="530" data-line-end="532"><strong>Zabezpieczenie:</strong> W układach z obciążeniem indukcyjnym stosuje się diodę zabezpieczającą (ang. <em>Flywheel Diode</em>), która chroni tranzystor przed przepięciami.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="534" data-line-end="535"><a id="2_Wymagania_dla_kluczy_pprzewodnikowych_i_Mostek_H_534"></a>2. Wymagania dla kluczy półprzewodnikowych i Mostek H</h2>
      <p class="has-line-data" data-line-start="536" data-line-end="537">Idealny przełącznik półprzewodnikowy powinien spełniać dwa główne warunki:</p>
      <ol>
      <li class="has-line-data" data-line-start="537" data-line-end="538"><strong>Krótkie czasy przełączania</strong> (rzędu mikrosekund).</li>
      <li class="has-line-data" data-line-start="538" data-line-end="540"><strong>Bardzo mały spadek napięcia w stanie załączenia</strong> (<strong>U<sub>CEon</sub></strong> dla BJT, <strong>U<sub>DSon</sub></strong> dla MOSFET). Gwarantuje to <strong>małą moc traconą</strong> (wydzielaną jako ciepło) w samym tranzystorze, co wynika ze wzoru <strong>P = I<sub>Don</sub> * U<sub>DSon</sub></strong>.</li>
      </ol>
      <ul>
      <li class="has-line-data" data-line-start="540" data-line-end="542"><strong>Układ CMOSFET (Mostek H):</strong> Zbudowany z komplementarnych tranzystorów MOSFET (z kanałem N oraz P). Służy <a href="http://m.in">m.in</a>. do sterowania silnikami. Polaryzacja odpowiednich bramek definiuje <strong>kierunek obrotów</strong>, a wypełnienie sygnału sterującego (PWM) odpowiada za <strong>szybkość obrotową</strong>.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="544" data-line-end="545"><a id="3_Regulacja_mocy_AC_Sterowanie_fazowe_544"></a>3. Regulacja mocy AC (Sterowanie fazowe)</h2>
      <ul>
      <li class="has-line-data" data-line-start="546" data-line-end="547">Tradycyjne układy prostownicze z diodami (np. mostek Graetza) pozwalają jedynie na zmianę sygnału zmiennego na stały, jednak <strong>nie umożliwiają regulacji mocy</strong> dostarczanej do obciążenia.</li>
      <li class="has-line-data" data-line-start="547" data-line-end="549">Rozwiązaniem jest <strong>sterowanie fazowe</strong>. Polega ono na “wycinaniu” odpowiedniej części sygnału sinusoidalnego. Zmieniając kąt fazowy (<strong>θ</strong>) załączenia, płynnie regulujemy przekazywaną moc.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="551" data-line-end="552"><a id="4_Diak_DIAC_Diode_for_Alternating_Current_551"></a>4. Diak (DIAC - Diode for Alternating Current)</h2>
      <p class="has-line-data" data-line-start="553" data-line-end="554">To dwukierunkowy półprzewodnikowy element przełączający. Najprostsza budowa przypomina tranzystor PNP pozbawiony wyprowadzenia bazy (często występuje w strukturze trój- lub czterozłączowej).</p>
      <ul>
      <li class="has-line-data" data-line-start="555" data-line-end="556">Posiada całkowicie <strong>symetryczną charakterystykę I-U</strong>.</li>
      <li class="has-line-data" data-line-start="556" data-line-end="557"><strong>Zasada działania:</strong> Diak zaczyna przewodzić prąd dopiero wtedy, gdy napięcie na jego zaciskach przekroczy tzw. <strong>napięcie przebicia</strong>.</li>
      <li class="has-line-data" data-line-start="557" data-line-end="559">Po przekroczeniu tego napięcia element wchodzi w obszar <strong>ujemnej rezystancji</strong>, co oznacza, że prąd rośnie przy jednoczesnym spadku napięcia na elemencie.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="561" data-line-end="562"><a id="5_Tyrystor_SCR_Silicon_Controlled_Rectifier_561"></a>5. Tyrystor (SCR - Silicon Controlled Rectifier)</h2>
      <p class="has-line-data" data-line-start="563" data-line-end="564">To kierunkowa “sterowana dioda” o czterowarstwowej strukturze <strong>PNPN</strong>. Występują tu trzy wyprowadzenia: Anoda (A), Katoda (K) i Bramka (G).</p>
      <ul>
      <li class="has-line-data" data-line-start="565" data-line-end="566"><strong>Model dwutranzystorowy:</strong> Tyrystor zachowuje się jak połączenie tranzystora PNP i NPN. Wysterowanie jednego powoduje otwarcie drugiego, tworząc pętlę silnego dodatniego sprzężenia zwrotnego.</li>
      <li class="has-line-data" data-line-start="566" data-line-end="567"><strong>Załączanie:</strong> Aby włączyć tyrystor, stosuje się krótki impuls prądu podany na bramkę (<strong>I<sub>G</sub> ≈ 1 - 10 mA</strong>). Inne, mniej popularne sposoby to bardzo szybki narost napięcia między anodą a katodą (<strong>V<sub>AK</sub></strong>) lub oświetlenie struktury (fototyrystory).</li>
      <li class="has-line-data" data-line-start="567" data-line-end="569"><strong>Kluczowa zasada działania (Prąd trzymania):</strong> Dzięki wewnętrznemu sprzężeniu, nawet po zaniku impulsu sterującego z bramki, <strong>tyrystor pozostaje w stanie przewodzenia</strong>. Wyłączy się samoistnie dopiero wtedy, gdy prąd główny spadnie poniżej wartości krytycznej – tzw. <strong>prądu trzymania (holding current)</strong>.</li>
      </ul>
      <blockquote>
      <p class="has-line-data" data-line-start="569" data-line-end="570"><strong>Ważne:</strong> W obwodach DC tyrystor trzeba wyłączać specjalnym rozłącznikiem. W układach AC wyłącza się on sam naturalnie w momencie przejścia napięcia przez zero. Ponieważ przewodzi tylko w jedną stronę, pojedynczy element zapewnia sterowanie mocą maksymalnie do 50% (jedna połówka). Do pełnego sterowania stosuje się mostki lub układy równoległe przeciwsobne.</p>
      </blockquote>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="573" data-line-end="574"><a id="6_Triak_TRIAC_573"></a>6. Triak (TRIAC)</h2>
      <p class="has-line-data" data-line-start="575" data-line-end="576">To element będący odpowiednikiem <strong>dwóch tyrystorów połączonych równolegle i przeciwsobnie</strong>.</p>
      <ul>
      <li class="has-line-data" data-line-start="577" data-line-end="578">Posiada zdolność <strong>przewodzenia prądu w obu kierunkach</strong>, co czyni go idealnym rozwiązaniem dla prądu przemiennego.</li>
      <li class="has-line-data" data-line-start="578" data-line-end="579">W przeciwieństwie do tyrystora, triak może być załączany impulsem prądowym bramki zarówno <strong>dodatnim, jak i ujemnym</strong>, bez względu na polaryzację napięcia sieciowego. Pozwala to na pracę w czterech trybach (kwadranty: I+, I-, III+, III-).</li>
      <li class="has-line-data" data-line-start="579" data-line-end="581">W praktyce układ składający się z Triaka, Diaka, rezystorów i kondensatora stanowi podstawę każdego klasycznego ściemniacza światła lub regulatora obrotów.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="583" data-line-end="584"><a id="7_Tranzystor_IGBT_Insulated_Gate_Bipolar_Transistor_583"></a>7. Tranzystor IGBT (Insulated Gate Bipolar Transistor)</h2>
      <p class="has-line-data" data-line-start="585" data-line-end="586">Zaawansowany element stanowiący hybrydę: od strony wejścia jest to <strong>tranzystor polowy MOSFET</strong> (izolowana bramka), natomiast od strony wyjścia <strong>tranzystor bipolarny PNP</strong> (kolektor, emiter).</p>
      <p class="has-line-data" data-line-start="587" data-line-end="588"><strong>Łączy w sobie najlepsze cechy obu rodzin:</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="588" data-line-end="589">Posiada <strong>bardzo dużą rezystancję wejściową</strong>, co sprawia, że jest bardzo łatwy w sterowaniu napięciowym (nie pobiera znaczącego prądu bramki).</li>
      <li class="has-line-data" data-line-start="589" data-line-end="590">Charakteryzuje się <strong>małym spadkiem napięcia w stanie przewodzenia</strong> (mała rezystancja C-E) co ogranicza straty ciepła.</li>
      <li class="has-line-data" data-line-start="590" data-line-end="591">Jest w stanie blokować i przełączać <strong>bardzo wysokie napięcia (kV)</strong> oraz przewodzić gigantyczne prądy (100A i więcej).</li>
      <li class="has-line-data" data-line-start="591" data-line-end="593">Gwarantuje znacznie <strong>krótsze czasy przełączania</strong> (większą szybkość) niż klasyczne tranzystory bipolarne.</li>
      </ul>
      <h2 class="code-line has-line-data" data-line-start="593" data-line-end="594"><a id="1_Emitery_wiata_Dioda_elektroluminescencyjna_LED_593"></a>1. Emitery światła – Dioda elektroluminescencyjna (LED)</h2>
      <ul>
      <li class="has-line-data" data-line-start="595" data-line-end="596"><strong>Zasada działania:</strong> Podstawą diody LED jest <strong>złącze p-n spolaryzowane w kierunku przewodzenia</strong>. Przepływ prądu powoduje wstrzykiwanie nośników mniejszościowych, co prowadzi do <strong>rekombinacji par elektron-dziura</strong>.</li>
      <li class="has-line-data" data-line-start="596" data-line-end="597"><strong>Emisja fotonu:</strong> Energia wyzwolona podczas tej rekombinacji jest uwalniana w postaci kwantu światła (fotonu).</li>
      <li class="has-line-data" data-line-start="597" data-line-end="598"><strong>Warunek emisji światła:</strong> Dioda musi być wykonana z półprzewodnika o <strong>prostej przerwie energetycznej</strong> (w przeciwieństwie np. do krzemu, który ma skośną przerwę i przy rekombinacji wydziela głównie ciepło).</li>
      <li class="has-line-data" data-line-start="598" data-line-end="599"><strong>Materiały i długość fali:</strong> Stosuje się najczęściej związki z grup <strong>A<sup>III</sup>B<sup>V</sup></strong> (np. arsenek galu - GaAs, fosforek galu - GaP). Długość emitowanej fali (kolor światła) zależy bezpośrednio od szerokości przerwy energetycznej (<strong>W<sub>g</sub></strong>) zastosowanego materiału.</li>
      <li class="has-line-data" data-line-start="599" data-line-end="601"><strong>Budowa fizyczna:</strong> Struktura posiada anodę (+) i katodę (-), obszar czynny (gdzie zachodzi rekombinacja) oraz często tylne zwierciadło odbijające światło w pożądanym kierunku. Całość zalana jest w żywicy, która pełni rolę soczewki.</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="603" data-line-end="604"><a id="2_wiatowody_Podzia_i_Materiay_603"></a>2. Światłowody – Podział i Materiały</h2>
      <p class="has-line-data" data-line-start="605" data-line-end="606">Światłowody to falowody dielektryczne, w których propagacja światła odbywa się dzięki zjawisku całkowitego wewnętrznego odbicia na granicy rdzenia i płaszcza.</p>
      <p class="has-line-data" data-line-start="607" data-line-end="608"><strong>Materiały światłowodowe:</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="608" data-line-end="609"><strong>Szkło kwarcowe (SiO<sub>2</sub>)</strong> – domieszkowane (najpopularniejsze w telekomunikacji).</li>
      <li class="has-line-data" data-line-start="609" data-line-end="610"><strong>ZBLAN</strong> – specjalne szkła fluorkowe (zawierające cyrkon, bar, lantan, glin, sód).</li>
      <li class="has-line-data" data-line-start="610" data-line-end="611"><strong>Tworzywa sztuczne (PMMA)</strong> – światłowody plastikowe (POF), stosowane na krótkich dystansach (np. sprzęt audio, motoryzacja).</li>
      <li class="has-line-data" data-line-start="611" data-line-end="613"><strong>Materiały krystaliczne</strong> (np. szafir).</li>
      </ul>
      <p class="has-line-data" data-line-start="613" data-line-end="614"><strong>Podział ze względu na strukturę (profil współczynnika załamania):</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="614" data-line-end="615"><strong>O skokowej zmianie współczynnika załamania</strong> (rdzeń ma stały współczynnik, na granicy z płaszczem następuje nagły skok).</li>
      <li class="has-line-data" data-line-start="615" data-line-end="617"><strong>O płynnej (gradientowej) zmianie współczynnika załamania</strong> (współczynnik maleje płynnie od środka rdzenia ku jego krawędziom, co zmniejsza dyspersję).</li>
      </ul>
      <p class="has-line-data" data-line-start="617" data-line-end="618"><strong>Podział ze względu na liczbę prowadzonych modów (promieni):</strong></p>
      <ul>
      <li class="has-line-data" data-line-start="618" data-line-end="619"><strong>Wielomodowe</strong> (rdzeń o większej średnicy, światło rozchodzi się wieloma torami).</li>
      <li class="has-line-data" data-line-start="619" data-line-end="621"><strong>Jednomodowe</strong> (bardzo cienki rdzeń, światło wędruje tylko jednym, osiowym torem – brak dyspersji modalnej, idealne na dalekie dystanse).</li>
      </ul>
      <hr>
      <h2 class="code-line has-line-data" data-line-start="623" data-line-end="624"><a id="3_Tumienie_i_Okna_Transmisyjne_wiatowd_kwarcowy_623"></a>3. Tłumienie i Okna Transmisyjne (Światłowód kwarcowy)</h2>
      <p class="has-line-data" data-line-start="625" data-line-end="626">Tłumienie (<strong>α</strong>) wyraża się w <strong>dB/km</strong>. Na jego wartość wpływają dwa główne zjawiska fizyczne, z których wypadkowo powstaje charakterystyka tłumienności:</p>
      <ol>
      <li class="has-line-data" data-line-start="626" data-line-end="627"><strong>Rozpraszanie Rayleigha</strong> (silnie maleje wraz ze wzrostem długości fali).</li>
      <li class="has-line-data" data-line-start="627" data-line-end="629"><strong>Absorpcja</strong> w podczerwieni oraz piki absorpcyjne pochodzące od zanieczyszczeń (głównie grup wodorotlenowych <strong>OH<sup>-</sup></strong>).</li>
      </ol>
      <p class="has-line-data" data-line-start="629" data-line-end="630">Na podstawie wykresu tłumienia w funkcji długości fali (<strong>λ</strong>) wyznaczono historycznie <strong>trzy optymalne okna transmisyjne</strong> (obszary, w których tłumienie jest najmniejsze, co pozwala na transmisję sygnału na dalekie odległości):</p>
      <ul>
      <li class="has-line-data" data-line-start="630" data-line-end="631"><strong>I okno transmisyjne (~0,85 μm):</strong> Pierwsze historycznie wykorzystywane pasmo. Lokalne minimum tłumienia, łatwe do uzyskania tanimi nadajnikami (np. pierwsze LED-y).</li>
      <li class="has-line-data" data-line-start="631" data-line-end="632"><strong>II okno transmisyjne (~1,3 μm):</strong> Kolejne pasmo o jeszcze niższym tłumieniu (ok. 0,5 dB/km). Co bardzo ważne na egzamin – w tym oknie dla standardowych włókien występuje <strong>punkt zerowej dyspersji chromatycznej</strong>.</li>
      <li class="has-line-data" data-line-start="632" data-line-end="633"><strong>III okno transmisyjne (~1,55 μm):</strong> Wykorzystywane we współczesnej telekomunikacji dalekosiężnej, ponieważ znajduje się tu <strong>globalne (absolutne) minimum tłumienia</strong> dla włókna kwarcowego (rzędu 0,2 dB/km).</li>
      </ul>
      `,
      quiz: [
        {
          id: 1,
          question: "Obwód RC, w którym wyjście jest połączone równolegle do kondensatora C:",
          image: "/quiz-images/elek-foto-1.png", // Dodane miejsce na zdjęcie obwodu RC
          options: ["stanowi obwód filtra środkowoprzepustowego", "ma stałą czasową τ = RC", "ma stałą czasową τ = R / C", "stanowi obwód filtra górnoprzepustowego", "stanowi obwód filtra dolnoprzepustowego"],
          correctIndices: [1, 4]
        },
        {
          id: 2,
          question: "Konduktywność metali:",
          options: ["modulowana jest drganiami termicznymi atomów w sieci krystalicznej", "zależy od ruchliwości elektronów i dziur występujących w metalu", "rośnie ze wzrostem temperatury", "nie jest zależna od temperatury", "maleje ze wzrostem temperatury"],
          correctIndices: [0, 4]
        },
        {
          id: 3,
          question: "Prąd przesunięcia I w kondensatorze o pojemności C opisany jest wzorem:",
          options: ["I = dQ / dU", "I = dU / dC", "I = C * (dU / dt)", "U = dI / dC", "I = dQ / dt"],
          correctIndices: [2, 4]
        },
        {
          id: 4,
          question: "Konduktancja zastępcza połączenia równoległego rezystorów:",
          options: ["jest sumą konduktancji poszczególnych rezystorów", "jest sumą odwrotności konduktancji poszczególnych rezystorów", "jest sumą rezystancji poszczególnych rezystorów", "jest sumą odwrotności rezystancji poszczególnych rezystorów", "jest sumą rezystywności poszczególnych rezystorów"],
          correctIndices: [0, 3]
        },
        {
          id: 5,
          question: "W metalach nośnikami prądu elektrycznego są:",
          options: ["naładowane elektrycznie drobiny materiału", "zjonizowane atomy", "dipole elektryczne", "dziury", "elektrony"],
          correctIndices: [4]
        },
        {
          id: 6,
          question: "Strzałka napięcia:",
          options: ["wskazuje kierunek przepływu prądu", "określa kierunek przepływu energii", "wskazuje kierunek poruszania się elektronów w polu elektrycznym", "wskazuje punkt o wyższym potencjale", "wskazuje punkt o niższym potencjale"],
          correctIndices: [3]
        },
        {
          id: 7,
          question: "Transformator:",
          options: ["o przekładni 1:2 służy do obniżania napięcia", "o przekładni 1:2 służy do podnoszenia napięcia", "działa dzięki sprzężeniu dwóch kondensatorów w polu magnetycznym", "działa dzięki sprzężeniu dwóch cewek w polu magnetycznym", "służy do izolacji galwanicznej obwodu wejściowego i wyjściowego"],
          correctIndices: [1, 3, 4]
        },
        {
          id: 8,
          question: "Na rysunku przedstawiono charakterystykę zastępczą połączeń nieliniowych N1 i N2. Zaznacz prawdziwe zdania:",
          image: "/quiz-images/elek-foto-8.png", // Dodane miejsce na zdjęcie charakterystyki N
          options: ["charakterystykę N będącą ch-ką zastępczą połączenia równoległego elementów N1 i N2", "charakterystykę elementu N posiadającego zakres ujemnej rezystancji dynamicznej", "charakterystykę N będącą ch-ką zastępczą połączenia szeregowego elementów N1 i N2", "charakterystykę elementu N2 posiadającego zakres ujemnej rezystancji dynamicznej", "charakterystykę elementu N1 posiadającego zakres ujemnej rezystancji dynamicznej"],
          correctIndices: [0, 4]
        },
        {
          id: 9,
          question: "Obwód RC, w którym wyjście jest połączone równolegle do rezystora R:",
          image: "/quiz-images/elek-foto-9.png", // Dodane miejsce na zdjęcie obwodu RC (górnoprzepustowy)
          options: ["stanowi obwód filtra dolnoprzepustowego", "stanowi obwód filtra środkowoprzepustowego", "ma stałą czasową τ = R / C", "stanowi obwód filtra górnoprzepustowego", "ma stałą czasową τ = R * C"],
          correctIndices: [3, 4]
        },
        {
          id: 10,
          question: "Zaznacz prawidłowe zależności obowiązujące dla przedstawionego obwodu (równoległe R1 i R2):",
          image: "/quiz-images/elek-foto-10.png", // Dodane miejsce na zdjęcie obwodu równoległego
          options: ["I1 ≠ I2 gdy R1 = R2", "I1 = [R2 / (R1 + R2)] * I", "I2 = I - I1", "R1 = I / U", "U1 = U2"],
          correctIndices: [1, 2, 4]
        },
        {
          id: 11,
          question: "Pojemność kondensatora płaskiego:",
          options: ["zależy od wymiarów geometrycznych", "zmniejsza się wraz ze zmniejszaniem odległości między okładkami", "zależy od natężenia prądu płynącego w obwodzie", "zależy od przenikalności dielektrycznej ośrodka którym jest wypełniony", "wynika z ilości ładunku zgromadzonego na jego okładkach przy zadanym napięciu"],
          correctIndices: [0, 3, 4]
        },
        {
          id: 12,
          question: "Rezystancja R przewodu wykonanego z materiału o konduktywności γ, długości l i stałym przekroju poprzecznym o polu S:",
          image: "/quiz-images/elek-foto-12.png", // Dodane miejsce na zdjęcie wzoru/przewodu
          options: ["opisana jest wzorem R = (γ * S) / l", "nie zależy od wymiarów przewodu", "opisana jest wzorem R = S / (γ * l)", "opisana jest wzorem R = l / (γ * S)", "opisana jest wzorem R = (γ * l) / S"],
          correctIndices: [3]
        },
        {
          id: 13,
          question: "Rezystancja statyczna:",
          options: ["ma zawsze wartość dodatnią", "definiowana jest wzorem R = du / di", "definiowana jest wzorem R = U / I", "elementów nieliniowych zależy od punktu pracy", "jest równa rezystancji dynamicznej rezystora liniowego"],
          correctIndices: [2, 3, 4]
        },
        {
          id: 14,
          question: "Zaznacz prawidłowe zależności obowiązujące dla przedstawionego obwodu (szeregowe R1 i R2):",
          image: "/quiz-images/elek-foto-14.png", // Dodane miejsce na zdjęcie obwodu szeregowego
          options: ["U1 = U2 - U", "R1 = I / U1", "R2 = U1 / I", "U1 / U2 = R1 / R2", "U1 = [R1 / (R1 + R2)] * U"],
          correctIndices: [3, 4]
        },
        {
          id: 15,
          question: "Zwrot strzałki prądu:",
          options: ["jest przeciwny do zwrotu przemieszczania się dziur", "jest przeciwny do zwrotu przemieszczania się elektronów", "jest zgodny ze zwrotem przemieszczania się elektronów", "jest zgodny ze zwrotem przemieszczania się dziur", "w elementach biernych jest przeciwny do zwrotu strzałki napięcia"],
          correctIndices: [1, 3]
        },
        {
          id: 16,
          question: "W transformatorze:",
          options: ["o przekładni 1:2 służy do obniżania napięcia", "o przekładni 1:2 służy do podnoszenia napięcia", "działa dzięki sprzężeniu dwóch kondensatorów w polu magnetycznym", "działa dzięki sprzężeniu dwóch cewek w polu magnetycznym", "służy do izolacji galwanicznej obwodu wejściowego i wyjściowego"],
          correctIndices: [1, 3, 4]
        },
        {
          id: 17,
          question: "W półprzewodniku samoistnym koncentracja elektronów n i koncentracja dziur p spełniają warunki:",
          options: ["n < 0 dla T < 0K", "n = 0 dla T = 0K", "n > 0 dla T < 0K", "n < p", "n = p"],
          correctIndices: [1, 4]
        },
        {
          id: 18,
          question: "W półprzewodnikach nośnikami prądu elektrycznego są:",
          options: ["zjonizowane atomy", "dipole elektryczne", "naładowane elektrycznie drobiny materiału", "dziury", "elektrony"],
          correctIndices: [3, 4]
        },
        {
          id: 19,
          question: "Przerwa zabroniona półprzewodników:",
          options: ["określa minimalną wartość energii koniecznej do zaabsorbowania przez elektron aby mógł opuścić wiązanie kowalencyjne", "określa minimalną wartość energii koniecznej do zaabsorbowania przez elektron aby mógł opuścić sieć krystaliczną", "oddziela pasmo walencyjne od pasma przewodzenia", "oddziela pasmo przewodzenia od poziomu próżni", "zależy od składu materiału półprzewodnikowego"],
          correctIndices: [0, 2, 4]
        },
        {
          id: 20,
          question: "Konduktywność półprzewodnika:",
          options: ["zależy od szerokości przerwy energetycznej Eg", "zależy od ruchliwości elektronów i dziur", "zależy od koncentracji nośników swobodnych", "rośnie przy wzroście temperatury", "spada przy wzroście temperatury"],
          correctIndices: [0, 1, 2, 3]
        },
        {
          id: 21,
          question: "Generacja par elektron-dziura:",
          options: ["może nastąpić poprzez dostarczenie ciepła", "polega na przejściu dziury z pasma przewodzenia do pasma walencyjnego", "może nastąpić poprzez zderzenie elektronów (jonizację)", "może nastąpić poprzez absorpcję fotonu", "polega na przejściu elektronu z pasma przewodzenia do pasma walencyjnego"],
          correctIndices: [0, 2, 3]
        },
        {
          id: 22,
          question: "Wiązania kowalencyjne:",
          options: ["polegają na przekazaniu elektronu walencyjnego atomu innym atomom, w wyniku czego powstają jony oddziałujące na siebie elektrostatycznie", "są rodzajem wiązań chemicznych występujących w półprzewodnikach", "polegają na wymianie protonów między jądrami sąsiadujących atomów", "polegają na uwspólnieniu elektronów znajdujących się na powłoce walencyjnej z sąsiednimi atomami", "mogą zostać zerwane skutkując powstaniem elektronu swobodnego"],
          correctIndices: [1, 3, 4]
        },
        {
          id: 23,
          question: "Zaznacz prawidłowe stwierdzenie:",
          options: ["w półprzewodniku typu n nośnikami mniejszościowymi są dziury", "w półprzewodniku samoistnym nośnikami większościowymi są elektrony", "w półprzewodniku typu n nośnikami większościowymi są elektrony", "w półprzewodniku typu n nośnikami większościowymi są dziury", "w półprzewodniku typu n nośnikami mniejszościowymi są elektrony"],
          correctIndices: [0, 2]
        },
        {
          id: 24,
          question: "Elektrony w atomie:",
          options: ["posiadają ładunek dodatni", "mogą znajdować się tylko w określonym stanie kwantowym (posiadać skwantowaną energię)", "są związane oddziaływaniem elektrostatycznym z dodatnio naładowanym jądrem atomowym", "znajdują się w rdzeniu atomu", "znajdują się na powłokach elektronowych"],
          correctIndices: [1, 2, 4]
        },
        {
          id: 25,
          question: "Konduktywność półprzewodników:",
          options: ["modulowana jest drganiami termicznymi atomów w sieci krystalicznej", "rośnie ze wzrostem temperatury", "maleje ze wzrostem temperatury", "zależy od ruchliwości elektronów i dziur", "nie jest zależna od temperatury"],
          correctIndices: [0, 1, 3]
        },
        {
          id: 26,
          question: "Prąd dyfuzji:",
          options: ["zależy od gradientu koncentracji nośników prądu", "polega na przepływie nośników od miejsca o wyższej koncentracji do miejsca o niższej koncentracji", "polega na przepływie nośników od miejsca o niższej koncentracji do miejsca o wyższej koncentracji", "polega na przepływie elektronów w polu elektrycznym od miejsca o niższym potencjale do miejsca o wyższym potencjale", "wynika z chaosu ruchu cieplnego ładunków dążącego do wyrównania gęstości nośników"],
          correctIndices: [0, 1, 4]
        },
        {
          id: 27,
          question: "W półprzewodnikach obserwujemy prąd:",
          options: ["konwekcyjny", "jonowy", "przesunięcia", "unoszenia", "dyfuzyjny"],
          correctIndices: [3, 4]
        },
        {
          id: 28,
          question: "Zjawisko tunelowania elektronów przez obszar złącza obserwowane jest w:",
          options: ["fotodiodach p-i-n", "diodach Zenera", "diodach prostowniczych", "fotodiodach lawinowych", "diodach Esakiego (diodach tunelowych)"],
          correctIndices: [1, 4]
        },
        {
          id: 29,
          question: "W warstwie zubożonej złącza p-n:",
          options: ["znajdują się dodatnio naładowane jony domieszki po stronie półprzewodnika typu p", "występuje pole elektryczne pochodzące od zjonizowanych domieszek", "znajdują się ujemnie naładowane jony domieszki po stronie półprzewodnika typu p", "znajdują się dodatnio naładowane jony domieszki po stronie półprzewodnika typu n", "znajdują się ujemnie naładowane jony domieszki po stronie półprzewodnika typu n"],
          correctIndices: [1, 2, 3]
        },
        {
          id: 30,
          question: "Napięcie dyfuzyjne:",
          options: ["określa wysokość bariery potencjału dla nośników większościowych", "to napięcie w niespolaryzowanym złączu p-n wynikające z obecności pola elektrycznego pochodzącego od nieskompensowanych jonów domieszki", "rośnie ze wzrostem szerokości przerwy energetycznej", "maleje ze wzrostem szerokości przerwy energetycznej", "nie zależy od temperatury"],
          correctIndices: [0, 1, 2]
        },
        {
          id: 31,
          question: "Typowo w układach stabilizatorów parametrycznych wykorzystuje się:",
          options: ["termistory", "fotodiody", "diodyc prostownicze", "diody Zenera", "fotorezystory"],
          correctIndices: [3]
        },
        {
          id: 32,
          question: "Oświetlenie diody ze złączem p-n falą o energii Efot wywołuje zjawiska:",
          options: ["powoduje wzrost fotoprądu jeśli Efot < Eg", "może powodować wzrost temperatury diody", "powoduje powstanie siły elektromotorycznej w niespolaryzowanym zewnętrznie złączu jeśli Efot > Eg", "powoduje powstanie siły elektromotorycznej... jeśli Efot < Eg", "powoduje wzrost fotoprądu jeśli Efot > Eg"],
          correctIndices: [1, 2, 4]
        },
        {
          id: 33,
          question: "Ze wzrostem temperatury w przyrządach półprzewodnikowych:",
          options: ["dioda przestaje przewodzić prąd", "maleje prąd przewodzenia diody ze złączem p-n", "rośnie prąd wsteczny diody ze złączem p-n", "maleje prąd wsteczny diody ze złączem p-n", "rośnie prąd przewodzenia diody ze złączem p-n"],
          correctIndices: [2, 4]
        },
        {
          id: 34,
          question: "W diodzie ze złączem p-n wyróżniamy pojemności pasożytnicze:",
          options: ["pojemność dyfuzyjną", "pojemność upływu", "pojemność złączową", "pojemność przebicia", "pojemność unoszenia"],
          correctIndices: [0, 3]
        },
        {
          id: 35,
          question: "Przebicie złącza p-n:",
          options: ["spowodowane jest zjawiskiem tunelowania elektronów przez złącze w silnie domieszkowanych złączach", "spowodowane jest zjawiskiem tunelowania elektronów przez złącze w słabo domieszkowanych złączach", "spowodowane jest zjawiskiem powielania lawinowego w silnie domieszkowanych złączach", "spowodowane jest zjawiskiem powielania lawinowego w słabo domieszkowanych złączach", "występuje przy charakterystycznym dla złącza napięciu Zenera dla polaryzacji w kierunku przewodzenia"],
          correctIndices: [0, 3]
        },
        {
          id: 36,
          question: "Współczynnik wzmocnienia prądowego tranzystora bipolarnego w układzie WE:",
          options: ["zależy od punktu pracy", "jest mniejszy od 1", "wyrażony jest jako Ic/Ie", "wyrażony jest jako Ic/Ib", "jest większy od 1"],
          correctIndices: [0, 3, 4]
        },
        {
          id: 37,
          question: "Podać warunek polaryzacji tranzystora NPN do pracy aktywnej inwersyjnej:",
          image: "/quiz-images/elek-foto-37.png", // Miejsce na schemat tranzystora NPN
          options: ["VE > VB", "VE > VC", "VE < VB", "VC > VB", "VC < VB"],
          correctIndices: [0, 1, 4]
        },
        {
          id: 38,
          question: "We wzmacniaczu tranzystorowym pracującym w klasie B:",
          options: ["element aktywny przewodzi przez połowę okresu sygnału sterującego", "element aktywny przewodzi przez cały okres sygnału sterującego", "element aktywny przewodzi przez więcej niż połowę okresu sygnału sterującego", "element aktywny przewodzi przez 3/4 okresu sygnału sterującego", "element aktywny przewodzi przez mniej niż połowę okresu sygnału sterującego"],
          correctIndices: [0]
        },
        {
          id: 39,
          question: "Podać warunek polaryzacji tranzystora PNP do pracy aktywnej normalnej:",
          image: "/quiz-images/elek-foto-39.png", // Miejsce na schemat tranzystora PNP
          options: ["VE > VB", "VE < VB", "VE > VC", "VC > VB", "VC < VB"],
          correctIndices: [0, 2, 4]
        },
        {
          id: 40,
          question: "W modelu zastępczym małosygnałowym tranzystora bipolarnego w układzie WE parametr h21 oznacza:",
          options: ["rezystancję wejściową", "wzmocnienie mocy", "wzmocnienie prądowe", "wzmocnienie napięciowe", "rezystancję wyjściową"],
          correctIndices: [2]
        },
        {
          id: 41,
          question: "Podać warunek polaryzacji tranzystora PNP do pracy aktywnej inwersyjnej:",
          image: "/quiz-images/elek-foto-41.png", // Miejsce na schemat tranzystora PNP
          options: ["VC < VB", "VC > VB", "VE < VB", "VE > VB", "VE > VC"],
          correctIndices: [1, 2]
        },
        {
          id: 42,
          question: "W tranzystorze bipolarnym w stanie aktywnym normalnym:",
          options: ["Złącze B-C polaryzowane jest zaporowo", "Złącze E-B polaryzowane jest zaporowo", "Złącze E-C polaryzowane jest zaporowo", "Złącze B-C polaryzowane jest w kier. przewodzenia", "Złącze E-B polaryzowane jest w kier. przewodzenia"],
          correctIndices: [0, 4]
        },
        {
          id: 43,
          question: "Dla tranzystorów unipolarnych różniczkowe parametry małosygnałowe transkonduktancji gm i konduktancji wyjściowej gds definiuje się jako:",
          options: ["gm = dID / dUGS", "gds = dID / dUGS", "gds = dUDS / dID", "gds = dID / dUDS", "gm = dUGS / dID"],
          correctIndices: [0, 3]
        },
        {
          id: 44,
          question: "Na rysunku przedstawiono charakterystykę przejściową tranzystora polowego. Zaznacz prawidłowe typy:",
          image: "/quiz-images/elek-foto-44.png", // Miejsce na wykres charakterystyki przejściowej FET
          options: ["przejściową", "wyjściową", "tranzystora PNFET", "tranzystora MOSFET z kanałem wzbogacanym", "tranzystora MOSFET z kanałem zubażanym"],
          correctIndices: [0, 2, 4]
        },
        {
          id: 45,
          question: "Na rysunku przedstawiono charakterystykę wyjściową tranzystora polowego. Zaznacz prawidłowe typy:",
          image: "/quiz-images/elek-foto-45.png", // Miejsce na wykres charakterystyki wyjściowej FET
          options: ["tranzystora MOSFET z kanałem zubażanym", "wyjściową", "tranzystora PNFET", "przejściową", "tranzystora MOSFET z kanałem wzbogacanym"],
          correctIndices: [0, 1, 2]
        },
        {
          id: 46,
          question: "Na poniższym rysunku przedstawiono symbol struktury:",
          image: "/quiz-images/elek-foto-46.png", // Miejsce na symbol graficzny tranzystora
          options: ["tranzystora DMOSFET z kanałem typu N", "tranzystora bipolarnego", "tranzystora EMOSFET", "tranzystora P-JFET", "tranzystora N-JFET"],
          correctIndices: [2]
        },
        {
          id: 47,
          question: "Na rysunku przedstawiono specyficzną charakterystykę przejściową tranzystora PNFET. Zaznacz prawidłowe opisy:",
          image: "/quiz-images/elek-foto-47.png", // Miejsce na kolejny wykres ch-ki przejściowej PNFET
          options: ["tranzystora MOSFET z kanałem wzbogacanym", "tranzystora MOSFET z kanałem zubażanym", "przejściową", "wejściową", "tranzystora PNFET"],
          correctIndices: [1, 2, 4]
        },
        {
          id: 48,
          question: "Podać warunki prawidłowej polaryzacji tranzystora JFET z kanałem n przedstawionego na rysunku:",
          image: "/quiz-images/elek-foto-48.png", // Miejsce na schemat polaryzacji JFET
          options: ["VD < VS", "VD = VS", "VG < VS", "VD > VS", "VG > VS"],
          correctIndices: [2, 3]
        },
        {
          id: 49,
          question: "Układy CMOSFET:",
          options: ["składają się z dwu tranzystorów PMOSFET", "składają się z dwu tranzystorów NMOSFET", "składają się z tranzystorów IGBT, MOSFET i JFET", "składają się z pary tranzystorów NMOSFET i PMOSFET", "składają się z pary tranzystorów NJFET i PJFET"],
          correctIndices: [4]
        },
        {
          id: 50,
          question: "Poniżej przedstawiono tablicę prawdy dwuwejściowej bramki logicznej. Zidentyfikuj jej typ:",
          image: "/quiz-images/elek-foto-50.png", // Miejsce na tabelę stanów (tablicę prawdy) bramki XOR
          options: ["XNOR", "XOR", "AND", "OR", "NOR"],
          correctIndices: [1]
        }
      ]
    }
  };