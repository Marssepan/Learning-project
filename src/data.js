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
        <h2>1. Podstawy Fizyczne i Definicje</h2>
        <p><b>Elektronika</b> to dziedzina nauki zajmująca się ruchem elektronów swobodnych w próżni, gazach i ciałach stałych (głównie półprzewodnikach).</p>
        <ul>
          <li><b>Kwant ładunku:</b> $e = 1,602 \cdot 10^{-19} C$. Nośnikami są elektrony ($-e$) i protony ($+e$).</li>
          <li><b>Natężenie prądu ($i, I$):</b> Szybkość przepływu ładunku: $i = \\frac{dq}{dt}$ $[A]$.</li>
          <li><b>Gęstość prądu ($J$):</b> Przestrzenny rozkład prądu na powierzchni: $J = \\frac{I}{S}$ $[A/m^2]$.</li>
        </ul>
        <p><b>Złota zasada schematów:</b> Strzałka prądu wskazuje kierunek ruchu ładunków dodatnich (prąd płynie w kierunku przeciwnym do faktycznego ruchu elektronów).</p>
  
        <h2>2. Energetyczny Model Pasmowy</h2>
        <p>Poziomy energetyczne w krysztale tworzą pasma:</p>
        <ul>
          <li><b>Pasmo walencyjne ($E_v$):</b> W temperaturze 0 K całkowicie zapełnione elektronami.</li>
          <li><b>Pasmo przewodnictwa ($E_c$):</b> W temperaturze 0 K całkowicie puste. Elektrony, które tu trafią, mogą swobodnie przewodzić prąd.</li>
          <li><b>Przerwa energetyczna ($E_g$):</b> Pasmo wzbronione. Dla krzemu (Si) $E_g \approx 1,1 eV$, dla germanu (Ge) $E_g \approx 0,7 eV$.</li>
        </ul>
  
        <h2>3. Mechanizmy Transportu w Półprzewodnikach</h2>
        <p>W półprzewodnikach prąd płynie dzięki dwóm rodzajom nośników (elektrony i dziury) w wyniku dwóch mechanizmów:</p>
        <ol>
          <li><b>Unoszenie (Dryft):</b> Ruch ładunków wywołany zewnętrznym polem elektrycznym ($E$).</li>
          <li><b>Dyfuzja:</b> Ruch ładunków wywołany różnicą (gradientem) ich koncentracji (ruch cieplny).</li>
        </ol>
        <p><b>Prawo masy ładunku:</b> W stanie równowagi termodynamicznej iloczyn koncentracji elektronów i dziur jest stały: $n \cdot p = n_i^2$.</p>
  
        <h2>4. Złącze P-N i Diody</h2>
        <p>Na styku półprzewodników typu P i N powstaje <b>warstwa zubożona</b> (warstwa zaporowa), w której nie ma wolnych nośników, a pozostają jedynie nieruchome, zjonizowane atomy domieszek.</p>
        <ul>
          <li><b>Polaryzacja przewodzenia:</b> "+" na P, "-" na N. Bariera potencjału maleje, prąd rośnie wykładniczo zgodnie z równaniem Shockleya: $I = I_S (e^{U/V_T} - 1)$.</li>
          <li><b>Polaryzacja zaporowa:</b> "-" na P, "+" na N. Warstwa zubożona się poszerza, płynie tylko minimalny prąd nasycenia $I_0$.</li>
          <li><b>Wpływ temperatury:</b> Przy stałym prądzie spadek napięcia na diodzie w kierunku przewodzenia maleje o ok. $-2 mV/K$. Prąd wsteczny podwaja się co każde $10^{\circ}C$ wzrostu temperatury.</li>
        </ul>
  
        <h2>5. Tranzystory Bipolarne (BJT) i Polowe (FET)</h2>
        <h3>Tranzystor Bipolarny (Sterowany prądem)</h3>
        <p>W stanie aktywnym normalnym złącze B-E jest spolaryzowane w kierunku przewodzenia, a złącze C-B zaporowo. Obowiązuje I prawo Kirchhoffa: $I_E = I_C + I_B$. Wzmocnienie prądowe w układzie WE wynosi $\beta = \\frac{I_C}{I_B}$.</p>
        <h3>Tranzystor Polowe (Sterowany napięciem)</h3>
        <p>Charakteryzuje się gigantyczną rezystancją wejściową ($R_{we}$), ponieważ bramka (G) steruje prądem drenu ($I_D$) za pomocą pola elektrycznego, praktycznie nie pobierając prądu. Transkonduktancja definiowana jest jako $g_m = \\frac{dI_D}{dU_{GS}}$.</p>
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