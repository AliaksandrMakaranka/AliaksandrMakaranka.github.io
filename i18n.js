/*
 * ТЕКСТЫ САЙТА НА ТРЁХ ЯЗЫКАХ
 *
 * Как это работает: в index.html у элемента стоит data-i="ключ",
 * а здесь у каждого языка есть строка  ключ:"текст".
 *
 * Правила:
 *  - меняешь текст → меняй во всех трёх языках (pl, en, ru);
 *  - новый ключ → добавить в pl, en и ru, иначе на другом языке будет пусто;
 *  - разделы идут в том же порядке, что и на сайте, сверху вниз.
 */
var T = {

/* ══════════ ПОЛЬСКИЙ (язык по умолчанию) ══════════ */
pl: {
  // --- Вкладка браузера и меню ---
  title:"Aliaksandr Makaranka · Automatyzacja procesów, boty, HR",
  m1:"Usługi", m2:"Jak pracuję", m3:"Oferta", m4:"O mnie", m5:"Kontakt",
  // --- Слайдер: слайд 1 — автоматизация ---
  k1:"Automatyzacja procesów", h1:"Oddaj rutynę automatom. Twój zespół zajmie się klientami.",
  sub1:"Jestem menedżerem, wcześniej programistą i inżynierem automatyzacji testów. Znajduję w firmie zadania, które mogą robić się same, i je automatyzuję.",
  cta_talk:"Umów bezpłatną rozmowę", cta_offer:"Zobacz ofertę", more:"Dowiedz się więcej",
  week_title:"Przykładowy tydzień w biurze",
  t1:"Przepisywanie zamówień do Excela", t2:"Cotygodniowy raport sprzedaży", t3:"Przeglądanie 80 CV", t4:"Sprawdzanie cen konkurencji",
  sum:"Odzyskany czas", sum_v:"~15 h tygodniowo", week_note:"Przykładowe wartości. Realny wynik zależy od Twoich procesów.",
  // --- Слайдер: слайд 2 — HR ---
  k2:"HR i rekrutacja", h2s:"Rekrutacja bez chaosu w skrzynce mailowej.",
  sub2:"Ogłoszenia, selekcja CV i terminy rozmów w jednym uporządkowanym procesie. Ty rozmawiasz tylko z najlepszymi kandydatami.",
  pipe_title:"Rekrutacja: magazynier, przykład", pp1:"zgłoszeń", pp2:"po selekcji", pp3:"rozmów", pp4:"oferty",
  who1:"Kandydat K.N. · wt. 10:00", who1s:"umówiono", who2:"Kandydatka O.P. · śr. 12:00", who2s:"umówiono",
  // --- Слайдер: слайд 3 — мост PL ↔ UA/BY ---
  k3:"Most PL ↔ UA/BY", h3s:"Twój zespół mówi różnymi językami? Pomogę się dogadać.",
  sub3:"Pomagam polskim firmom współpracować z pracownikami i wykonawcami z Ukrainy i Białorusi: komunikacja, wdrożenie, instrukcje w zrozumiałym języku.",
  chat_title:"Czat zespołu, przykład", bridge_me:"Aliaksandr",
  // --- Статистика (подписи под цифрами) ---
  st1:"pracy zdalnej, w całej Polsce i Europie", st2:"języki: polski, angielski, rosyjski", st3:"obszarów, w których pomagam", st4:"testów automatycznych w moich projektach",
  // --- Услуги: заголовок ---
  s_title:"W czym mogę pomóc",
  s_intro:"Zaczynam od problemu, nie od technologii. Usługi oznaczone „w przygotowaniu” rozwijam teraz, więc pierwsi klienci dostają je na preferencyjnych warunkach.",
  soon:"w przygotowaniu",
  // --- Услуга 1: автоматизация процессов ---
  a1:"Automatyzacja procesów", a1t:"Raporty i dane, które robią się same",
  a1d:"Jeśli ktoś w firmie co tydzień kopiuje te same dane z jednego miejsca do drugiego, to zadanie dla automatu.",
  a1a:"raporty i zestawienia z Excela, Google Sheets i CRM", a1b:"przenoszenie danych między systemami i pocztą", a1c:"instrukcje i porządek w procesach: kto, co i kiedy",
  rep_title:"Raport sprzedaży · co poniedziałek o 8:00", rep1:"Dane pobrane z systemu", rep2:"Tabela i wykres zaktualizowane", rep3:"Raport wysłany do zarządu",
  // --- Услуга 2: Telegram-боты и AI ---
  a2:"Boty Telegram i AI", a2t:"Odpowiadają klientom, gdy Ty śpisz",
  a2d:"Bot przyjmuje zamówienia i zgłoszenia, przypomina o terminach i odpowiada na najczęstsze pytania. AI pomaga pisać opisy i odpowiedzi.",
  a2a:"przyjmowanie zamówień i zgłoszeń w Telegramie", a2b:"powiadomienia dla zespołu i klientów", a2c:"opisy produktów i szkice odpowiedzi z AI",
  bot_title:"Bot firmy w Telegramie, przykład", bot_client:"Klient",
  bot1:"Dzień dobry, czy macie jutro wolny termin?", bot2:"Tak! Wolne godziny: 10:00, 13:30, 16:00. Którą wybierasz?", bot3:"13:30", bot4:"Gotowe ✅ Przypomnę Ci jutro o 12:30.",
  // --- Услуга 3: анализ конкурентов ---
  a3:"Analiza konkurencji", a3t:"Wiesz, co robią inni, zanim stracisz klienta",
  a3d:"Automatycznie zbieram ceny, oferty i nowości u konkurentów i pokazuję zmiany w przejrzystym zestawieniu.",
  a3a:"monitoring cen i promocji", a3b:"nowe produkty i usługi u konkurencji", a3c:"cotygodniowy raport w arkuszu lub mailu",
  cmp_title:"Ceny konkurencji · aktualizacja dziś 7:00", cmp_p:"Produkt", cmp_you:"Ty", cmp1:"Produkt 1", cmp2:"Produkt 2", cmp3:"Produkt 3",
  cmp_note:"↓ konkurent obniżył cenę · ↑ podniósł cenę",
  // --- Услуга 4: сайты и тестирование ---
  a4:"Strony, nowe funkcje i testy", a4t:"Sklep, który działa każdego dnia",
  a4d:"Mam doświadczenie w automatyzacji testów. Sprawdzam, czy strona działa, zanim zrobi to klient, i pomagam wdrażać nowe funkcje.",
  a4a:"automatyczne sprawdzanie koszyka, formularzy i logowania", a4b:"raport, gdy coś przestanie działać", a4c:"wdrażanie nowych funkcji: formularze, integracje, płatności",
  qa_title:"Kontrola sklepu · dziś 6:00", qa1:"Strona główna", qa2:"Logowanie", qa3:"Płatność kartą", qa_err:"✗ błąd", qa4:"Formularz kontaktowy",
  qa_note:"Wiadomość o błędzie trafiła do zespołu, zanim zauważyli ją klienci.",
  // --- Услуга 5: HR и подбор ---
  a5:"HR i rekrutacja", a5t:"Szybciej znajdziesz właściwych ludzi",
  a5d:"Łączę doświadczenie menedżera i HR z automatyzacją. Mniej maili i telefonów, więcej czasu na rozmowy z dobrymi kandydatami.",
  a5a:"ogłoszenia i kryteria selekcji CV", a5b:"automatyczne umawianie rozmów", a5c:"plan onboardingu nowych pracowników",
  cal_title:"Rozmowy na czwartek, przykład", cal1:"Specjalista ds. sprzedaży", cal2:"Magazynier", cal3:"Asystentka biura",
  cal_note:"Kandydaci sami wybrali godziny z kalendarza. Zero maili w tę i z powrotem.",
  // --- Услуга 6: мост PL ↔ UA/BY ---
  a6:"Most między Polską a zespołami z Ukrainy i Białorusi", a6t:"Mówię językiem obu stron",
  a6d:"Wiele polskich firm zatrudnia osoby z Ukrainy i Białorusi. Pomagam, żeby współpraca szła sprawnie od pierwszego dnia.",
  a6a:"komunikacja między kierownikiem a zespołem", a6b:"instrukcje i zasady pracy w zrozumiałym języku", a6c:"wdrożenie nowych osób i koordynacja zadań",
  doc_title:"Pakiet startowy dla nowego pracownika", doc1:"Instrukcja stanowiska", doc2:"Zasady BHP w skrócie", doc3:"Kontakty i grafik", doc4:"Słowniczek najważniejszych zwrotów",
  // --- Как я работаю ---
  w_title:"Jak pracuję", w_intro:"Prosto i bez wielkich wdrożeń. Pierwszy efekt widać po kilku tygodniach.",
  w1:"Rozmowa", w1d:"30 minut online o tym, co zabiera Twojemu zespołowi najwięcej czasu.",
  w2:"Mapa procesów", w2d:"Rozpisuję, kto co robi i gdzie gubi się czas. Wybieramy jedno zadanie na start.",
  w3:"Wdrożenie", w3d:"Buduję rozwiązanie i testuję je na prawdziwych danych.",
  w4:"Wsparcie", w4d:"Instrukcja dla zespołu, miesiąc wsparcia i propozycje kolejnych kroków.",
  // --- С чего начать (3 формата) ---
  p_title:"Jak możemy zacząć", p_intro:"Trzy formy współpracy. Najczęściej zaczynamy od przeglądu, żeby nie płacić za to, czego nie potrzebujesz.",
  p1_tag:"Na start", p1:"Przegląd procesów", p1_time:"1–2 rozmowy online",
  p1_a:"Rozmowa z Tobą i zespołem", p1_b:"Lista zadań do automatyzacji", p1_c:"Szacunek oszczędności czasu", p1_res:"Krótki raport z priorytetami",
  p2_tag:"Najczęściej wybierane", p2:"Automatyzacja lub bot", p2_time:"2–4 tygodnie",
  p2_a:"Wybieramy proces, który zabiera najwięcej czasu", p2_b:"Wdrażam rozwiązanie: raport, integrację lub bota", p2_c:"Instrukcja dla zespołu i miesiąc wsparcia", p2_res:"Proces działa sam, zespół odzyskuje godziny",
  p3_tag:"HR i zespół", p3:"Rekrutacja i wdrożenie", p3_time:"od 2 tygodni",
  p3_a:"Szablony ogłoszeń i kryteria selekcji", p3_b:"Automatyczne umawianie rozmów", p3_c:"Onboarding, także po rosyjsku i ukraińsku", p3_res:"Szybsze zatrudnianie, mniej chaosu",
  res:"Wynik", price:"Cenę ustalam indywidualnie, po pierwszej rozmowie. Pierwsza rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
  // --- Обо мне ---
  me_role:"Menedżer · automatyzacja procesów · HR",
  f1:"Były programista Java", f2:"Automatyzacja testów", f3:"Zarządzanie", f4:"Rekrutacja",
  ab_title:"Kim jestem",
  ab1:"Przez lata pisałem kod w Javie i automatyczne testy oprogramowania. Dziś pracuję jako menedżer i zajmuję się też rekrutacją.",
  ab2:"Dzięki temu rozumiem zarówno ludzi, jak i technologię. Wiem, co warto zautomatyzować, a co lepiej zostawić człowiekowi, i potrafię to wyjaśnić bez żargonu.",
  ab3:"Pracuję wyłącznie zdalnie, z klientami w całej Polsce i Europie.",
  // --- Частые вопросы (qN — вопрос, qNa — ответ) ---
  q_title:"Częste pytania",
  q1:"Czy pracujesz tylko zdalnie?", q1a:"Tak. Spotykamy się online, a rozwiązania wdrażam przez dostęp, który mi udostępnisz. Dzięki temu pracuję z firmami z całej Polski i Europy.",
  q2:"Ile to kosztuje?", q2a:"Zależy od procesu. Po pierwszej, bezpłatnej rozmowie podaję konkretną cenę za konkretny efekt, bez rozliczania „za godzinę bez końca”.",
  q3:"Nie mamy działu IT. Czy to problem?", q3a:"Nie. Pracuję z małymi i średnimi firmami, także bez programistów. Wszystko wyjaśniam prostym językiem i zostawiam instrukcję.",
  q4:"W jakich językach mogę się z Tobą kontaktować?", q4a:"Po polsku, angielsku i rosyjsku. Rozumiem też ukraiński, co pomaga przy pracy z zespołami z Ukrainy.",
  q5:"Co jeśli automatyzacja się nie opłaci?", q5a:"Powiem to na etapie przeglądu. Nie proponuję rozwiązań, które nie zwrócą się w rozsądnym czasie.",
  // --- Контакт ---
  c_title:"Masz proces, który zjada godziny?", c_sub:"Napisz, porozmawiamy online. Odpowiadam po polsku, angielsku i rosyjsku.",
  // --- Подвал ---
  ft_about:"Automatyzacja procesów, boty, analiza konkurencji i wsparcie HR dla małych i średnich firm.", ft_bridge:"Most PL ↔ UA/BY", ft_remote:"Pracuję zdalnie"
},

/* ══════════ АНГЛИЙСКИЙ ══════════ */
en: {
  // --- Вкладка браузера и меню ---
  title:"Aliaksandr Makaranka · Process automation, bots, HR",
  m1:"Services", m2:"How I work", m3:"Offer", m4:"About", m5:"Contact",
  // --- Слайдер: слайд 1 — автоматизация ---
  k1:"Process automation", h1:"Hand the routine to automation. Your team handles the clients.",
  sub1:"I'm a manager and a former software developer and QA automation engineer. I find the tasks in your company that can run by themselves, and automate them.",
  cta_talk:"Book a free call", cta_offer:"See the offer", more:"Learn more",
  week_title:"A typical office week",
  t1:"Copying orders into Excel", t2:"Weekly sales report", t3:"Screening 80 CVs", t4:"Checking competitor prices",
  sum:"Time saved", sum_v:"~15 h a week", week_note:"Example values. Real results depend on your processes.",
  // --- Слайдер: слайд 2 — HR ---
  k2:"HR and recruitment", h2s:"Recruitment without inbox chaos.",
  sub2:"Job ads, CV screening and interview scheduling in one tidy process. You only talk to the best candidates.",
  pipe_title:"Hiring: warehouse worker, example", pp1:"applications", pp2:"shortlisted", pp3:"interviews", pp4:"offers",
  who1:"Candidate K.N. · Tue 10:00", who1s:"booked", who2:"Candidate O.P. · Wed 12:00", who2s:"booked",
  // --- Слайдер: слайд 3 — мост PL ↔ UA/BY ---
  k3:"Bridge PL ↔ UA/BY", h3s:"Does your team speak different languages? I'll help them understand each other.",
  sub3:"I help Polish companies work with employees and contractors from Ukraine and Belarus: communication, onboarding, instructions people understand.",
  chat_title:"Team chat, example", bridge_me:"Aliaksandr",
  // --- Статистика (подписи под цифрами) ---
  st1:"remote, across Poland and Europe", st2:"languages: Polish, English, Russian", st3:"areas I can help with", st4:"automated tests in my projects",
  // --- Услуги: заголовок ---
  s_title:"How I can help",
  s_intro:"I start from the problem, not the technology. Services marked \"coming soon\" are being developed now, so first clients get them on special terms.",
  soon:"coming soon",
  // --- Услуга 1: автоматизация процессов ---
  a1:"Process automation", a1t:"Reports and data that update themselves",
  a1d:"If someone in your company copies the same data from one place to another every week, that's a job for automation.",
  a1a:"reports and summaries from Excel, Google Sheets and CRM", a1b:"moving data between systems and e-mail", a1c:"clear processes and instructions: who does what, when",
  rep_title:"Sales report · every Monday at 8:00", rep1:"Data pulled from the system", rep2:"Table and chart updated", rep3:"Report sent to management",
  // --- Услуга 2: Telegram-боты и AI ---
  a2:"Telegram bots and AI", a2t:"They answer clients while you sleep",
  a2d:"A bot takes orders and requests, sends reminders and answers frequent questions. AI helps write descriptions and replies.",
  a2a:"orders and requests via Telegram", a2b:"notifications for your team and clients", a2c:"AI-drafted product descriptions and replies",
  bot_title:"Company Telegram bot, example", bot_client:"Client",
  bot1:"Hi, do you have a free slot tomorrow?", bot2:"Yes! Free times: 10:00, 13:30, 16:00. Which one?", bot3:"13:30", bot4:"Done ✅ I'll remind you tomorrow at 12:30.",
  // --- Услуга 3: анализ конкурентов ---
  a3:"Competitor analysis", a3t:"Know what others do before you lose a client",
  a3d:"I automatically collect competitors' prices, offers and new products and show the changes in a clear summary.",
  a3a:"price and promotion tracking", a3b:"new products and services from competitors", a3c:"a weekly report in a spreadsheet or by e-mail",
  cmp_title:"Competitor prices · updated today 7:00", cmp_p:"Product", cmp_you:"You", cmp1:"Product 1", cmp2:"Product 2", cmp3:"Product 3",
  cmp_note:"↓ competitor lowered the price · ↑ raised it",
  // --- Услуга 4: сайты и тестирование ---
  a4:"Websites, new features and testing", a4t:"An online store that works every day",
  a4d:"I have a background in test automation. I check that your site works before your clients find out it doesn't, and help add new features.",
  a4a:"automated checks of the cart, forms and login", a4b:"a report as soon as something breaks", a4c:"new features: forms, integrations, payments",
  qa_title:"Store check · today 6:00", qa1:"Home page", qa2:"Login", qa3:"Card payment", qa_err:"✗ error", qa4:"Contact form",
  qa_note:"The team got the error alert before any client noticed.",
  // --- Услуга 5: HR и подбор ---
  a5:"HR and recruitment", a5t:"Find the right people faster",
  a5d:"I combine management and HR experience with automation. Fewer e-mails and calls, more time to talk to good candidates.",
  a5a:"job ads and CV screening criteria", a5b:"automated interview scheduling", a5c:"onboarding plans for new hires",
  cal_title:"Thursday interviews, example", cal1:"Sales specialist", cal2:"Warehouse worker", cal3:"Office assistant",
  cal_note:"Candidates picked their own time slots. No back-and-forth e-mails.",
  // --- Услуга 6: мост PL ↔ UA/BY ---
  a6:"A bridge between Polish companies and teams from Ukraine and Belarus", a6t:"I speak both sides' language",
  a6d:"Many Polish companies employ people from Ukraine and Belarus. I help the cooperation run smoothly from day one.",
  a6a:"communication between managers and the team", a6b:"work instructions and rules people understand", a6c:"onboarding new people and coordinating tasks",
  doc_title:"Starter pack for a new employee", doc1:"Job instructions", doc2:"Safety rules in brief", doc3:"Contacts and schedule", doc4:"Glossary of key phrases",
  // --- Как я работаю ---
  w_title:"How I work", w_intro:"Simple, without huge implementations. First results show up within weeks.",
  w1:"A call", w1d:"30 minutes online about what takes your team the most time.",
  w2:"Process map", w2d:"I map who does what and where time is lost. We pick one task to start with.",
  w3:"Build", w3d:"I build the solution and test it on real data.",
  w4:"Support", w4d:"Team instructions, one month of support and ideas for next steps.",
  // --- С чего начать (3 формата) ---
  p_title:"How we can start", p_intro:"Three ways to work together. Most clients start with a review, so you don't pay for what you don't need.",
  p1_tag:"To start", p1:"Process review", p1_time:"1–2 online calls",
  p1_a:"A talk with you and your team", p1_b:"A list of tasks to automate", p1_c:"An estimate of time saved", p1_res:"A short report with priorities",
  p2_tag:"Most popular", p2:"Automation or a bot", p2_time:"2–4 weeks",
  p2_a:"We pick the process that takes the most time", p2_b:"I build it: a report, an integration or a bot", p2_c:"Team instructions and one month of support", p2_res:"The process runs by itself, the team gets hours back",
  p3_tag:"HR and team", p3:"Recruitment and onboarding", p3_time:"from 2 weeks",
  p3_a:"Job ad templates and screening criteria", p3_b:"Automated interview scheduling", p3_c:"Onboarding, also in Russian and Ukrainian", p3_res:"Faster hiring, less chaos",
  res:"Result", price:"Pricing is individual and agreed after the first call. The first call is free and without obligation.",
  // --- Обо мне ---
  me_role:"Manager · process automation · HR",
  f1:"Former Java developer", f2:"Test automation", f3:"Management", f4:"Recruitment",
  ab_title:"About me",
  ab1:"For years I wrote Java code and automated software tests. Today I work as a manager and handle recruitment too.",
  ab2:"So I understand both people and technology. I know what is worth automating and what is better left to a person, and I can explain it without jargon.",
  ab3:"I work remotely only, with clients across Poland and Europe.",
  // --- Частые вопросы (qN — вопрос, qNa — ответ) ---
  q_title:"FAQ",
  q1:"Do you only work remotely?", q1a:"Yes. We meet online, and I set things up through the access you give me. That's how I work with companies across Poland and Europe.",
  q2:"How much does it cost?", q2a:"It depends on the process. After the first free call I give you a fixed price for a specific result, not open-ended hourly billing.",
  q3:"We don't have an IT department. Is that a problem?", q3a:"No. I work with small and medium companies, including ones without developers. I explain everything in plain language and leave instructions.",
  q4:"Which languages can we talk in?", q4a:"Polish, English and Russian. I also understand Ukrainian, which helps when working with teams from Ukraine.",
  q5:"What if automation isn't worth it?", q5a:"I'll tell you during the review. I don't propose solutions that won't pay off in a reasonable time.",
  // --- Контакт ---
  c_title:"Got a process that eats hours?", c_sub:"Write to me and we'll talk online. I reply in Polish, English and Russian.",
  // --- Подвал ---
  ft_about:"Process automation, bots, competitor analysis and HR support for small and medium companies.", ft_bridge:"Bridge PL ↔ UA/BY", ft_remote:"Remote only"
},

/* ══════════ РУССКИЙ ══════════ */
ru: {
  // --- Вкладка браузера и меню ---
  title:"Aliaksandr Makaranka · Автоматизация процессов, боты, HR",
  m1:"Услуги", m2:"Как я работаю", m3:"Предложение", m4:"Обо мне", m5:"Контакты",
  // --- Слайдер: слайд 1 — автоматизация ---
  k1:"Автоматизация процессов", h1:"Отдайте рутину автоматике. Ваша команда займётся клиентами.",
  sub1:"Я менеджер, в прошлом программист и инженер по автоматизации тестирования. Нахожу в компании задачи, которые могут выполняться сами, и автоматизирую их.",
  cta_talk:"Бесплатная консультация", cta_offer:"Смотреть предложение", more:"Подробнее",
  week_title:"Обычная неделя в офисе",
  t1:"Перенос заказов в Excel", t2:"Еженедельный отчёт о продажах", t3:"Разбор 80 резюме", t4:"Проверка цен конкурентов",
  sum:"Сэкономлено", sum_v:"~15 ч в неделю", week_note:"Цифры для примера. Реальный результат зависит от ваших процессов.",
  // --- Слайдер: слайд 2 — HR ---
  k2:"HR и подбор персонала", h2s:"Подбор персонала без хаоса в почте.",
  sub2:"Вакансии, отбор резюме и назначение собеседований в одном понятном процессе. Вы общаетесь только с лучшими кандидатами.",
  pipe_title:"Подбор: кладовщик, пример", pp1:"откликов", pp2:"после отбора", pp3:"собеседований", pp4:"оффера",
  who1:"Кандидат К.Н. · вт 10:00", who1s:"назначено", who2:"Кандидат О.П. · ср 12:00", who2s:"назначено",
  // --- Слайдер: слайд 3 — мост PL ↔ UA/BY ---
  k3:"Мост PL ↔ UA/BY", h3s:"Ваша команда говорит на разных языках? Помогу договориться.",
  sub3:"Помогаю польским компаниям работать с сотрудниками и подрядчиками из Украины и Беларуси: коммуникация, вхождение в работу, понятные инструкции.",
  chat_title:"Чат команды, пример", bridge_me:"Александр",
  // --- Статистика (подписи под цифрами) ---
  st1:"удалённо, по всей Польше и Европе", st2:"языка: польский, английский, русский", st3:"направлений, в которых помогаю", st4:"автотестов в моих проектах",
  // --- Услуги: заголовок ---
  s_title:"Чем я могу помочь",
  s_intro:"Начинаю с проблемы, а не с технологии. Услуги с пометкой «в разработке» я развиваю сейчас, поэтому первые клиенты получают их на особых условиях.",
  soon:"в разработке",
  // --- Услуга 1: автоматизация процессов ---
  a1:"Автоматизация процессов", a1t:"Отчёты и данные, которые обновляются сами",
  a1d:"Если кто-то в компании каждую неделю копирует одни и те же данные из одного места в другое, это задача для автоматики.",
  a1a:"отчёты и сводки из Excel, Google Sheets и CRM", a1b:"перенос данных между системами и почтой", a1c:"понятные процессы и инструкции: кто, что и когда",
  rep_title:"Отчёт о продажах · каждый понедельник в 8:00", rep1:"Данные взяты из системы", rep2:"Таблица и график обновлены", rep3:"Отчёт отправлен руководству",
  // --- Услуга 2: Telegram-боты и AI ---
  a2:"Telegram-боты и AI", a2t:"Отвечают клиентам, пока вы спите",
  a2d:"Бот принимает заказы и заявки, напоминает о сроках и отвечает на частые вопросы. AI помогает писать описания и ответы.",
  a2a:"приём заказов и заявок в Telegram", a2b:"уведомления для команды и клиентов", a2c:"описания товаров и черновики ответов с AI",
  bot_title:"Telegram-бот компании, пример", bot_client:"Клиент",
  bot1:"Здравствуйте, есть свободное время завтра?", bot2:"Да! Свободно: 10:00, 13:30, 16:00. Какое выбираете?", bot3:"13:30", bot4:"Готово ✅ Напомню вам завтра в 12:30.",
  // --- Услуга 3: анализ конкурентов ---
  a3:"Анализ конкурентов", a3t:"Знайте, что делают другие, пока не потеряли клиента",
  a3d:"Автоматически собираю цены, предложения и новинки конкурентов и показываю изменения в понятной сводке.",
  a3a:"отслеживание цен и акций", a3b:"новые товары и услуги у конкурентов", a3c:"еженедельный отчёт в таблице или на почту",
  cmp_title:"Цены конкурентов · обновлено сегодня в 7:00", cmp_p:"Товар", cmp_you:"Вы", cmp1:"Товар 1", cmp2:"Товар 2", cmp3:"Товар 3",
  cmp_note:"↓ конкурент снизил цену · ↑ повысил",
  // --- Услуга 4: сайты и тестирование ---
  a4:"Сайты, новые функции и тестирование", a4t:"Интернет-магазин, который работает каждый день",
  a4d:"У меня опыт в автоматизации тестирования. Проверяю, что сайт работает, раньше, чем это заметит клиент, и помогаю внедрять новые функции.",
  a4a:"автоматическая проверка корзины, форм и входа", a4b:"отчёт, как только что-то сломалось", a4c:"новые функции: формы, интеграции, оплата",
  qa_title:"Проверка магазина · сегодня 6:00", qa1:"Главная страница", qa2:"Вход", qa3:"Оплата картой", qa_err:"✗ ошибка", qa4:"Форма обратной связи",
  qa_note:"Команда узнала об ошибке раньше, чем её заметили клиенты.",
  // --- Услуга 5: HR и подбор ---
  a5:"HR и подбор персонала", a5t:"Быстрее найдёте нужных людей",
  a5d:"Сочетаю опыт менеджера и HR с автоматизацией. Меньше писем и звонков, больше времени на разговоры с хорошими кандидатами.",
  a5a:"вакансии и критерии отбора резюме", a5b:"автоматическое назначение собеседований", a5c:"план адаптации новых сотрудников",
  cal_title:"Собеседования на четверг, пример", cal1:"Специалист по продажам", cal2:"Кладовщик", cal3:"Офис-ассистент",
  cal_note:"Кандидаты сами выбрали время в календаре. Никакой переписки туда-обратно.",
  // --- Услуга 6: мост PL ↔ UA/BY ---
  a6:"Мост между Польшей и командами из Украины и Беларуси", a6t:"Говорю на языке обеих сторон",
  a6d:"Многие польские компании нанимают людей из Украины и Беларуси. Помогаю, чтобы работа шла гладко с первого дня.",
  a6a:"коммуникация между руководителем и командой", a6b:"инструкции и правила работы на понятном языке", a6c:"адаптация новых сотрудников и координация задач",
  doc_title:"Стартовый набор для нового сотрудника", doc1:"Инструкция по должности", doc2:"Техника безопасности кратко", doc3:"Контакты и график", doc4:"Словарик главных фраз",
  // --- Как я работаю ---
  w_title:"Как я работаю", w_intro:"Просто и без огромных внедрений. Первый результат виден через несколько недель.",
  w1:"Разговор", w1d:"30 минут онлайн о том, что отнимает у команды больше всего времени.",
  w2:"Карта процессов", w2d:"Расписываю, кто что делает и где теряется время. Выбираем одну задачу для старта.",
  w3:"Внедрение", w3d:"Делаю решение и проверяю его на реальных данных.",
  w4:"Поддержка", w4d:"Инструкция для команды, месяц поддержки и идеи для следующих шагов.",
  // --- С чего начать (3 формата) ---
  p_title:"С чего начать", p_intro:"Три формата сотрудничества. Чаще всего начинаем с обзора, чтобы вы не платили за ненужное.",
  p1_tag:"Для старта", p1:"Обзор процессов", p1_time:"1–2 онлайн-встречи",
  p1_a:"Разговор с вами и командой", p1_b:"Список задач для автоматизации", p1_c:"Оценка экономии времени", p1_res:"Короткий отчёт с приоритетами",
  p2_tag:"Чаще всего выбирают", p2:"Автоматизация или бот", p2_time:"2–4 недели",
  p2_a:"Выбираем процесс, который отнимает больше всего времени", p2_b:"Внедряю решение: отчёт, интеграцию или бота", p2_c:"Инструкция для команды и месяц поддержки", p2_res:"Процесс работает сам, команда получает часы обратно",
  p3_tag:"HR и команда", p3:"Подбор и адаптация", p3_time:"от 2 недель",
  p3_a:"Шаблоны вакансий и критерии отбора", p3_b:"Автоматическое назначение собеседований", p3_c:"Адаптация, в том числе на русском и украинском", p3_res:"Быстрее нанимать, меньше хаоса",
  res:"Результат", price:"Стоимость обсуждается индивидуально после первого разговора. Первый разговор бесплатный и ни к чему не обязывает.",
  // --- Обо мне ---
  me_role:"Менеджер · автоматизация процессов · HR",
  f1:"Бывший Java-разработчик", f2:"Автоматизация тестирования", f3:"Менеджмент", f4:"Подбор персонала",
  ab_title:"Обо мне",
  ab1:"Годами я писал код на Java и автоматические тесты. Сейчас работаю менеджером и занимаюсь также подбором персонала.",
  ab2:"Поэтому понимаю и людей, и технологии. Знаю, что стоит автоматизировать, а что лучше оставить человеку, и объясняю это без жаргона.",
  ab3:"Работаю только удалённо, с клиентами по всей Польше и Европе.",
  // --- Частые вопросы (qN — вопрос, qNa — ответ) ---
  q_title:"Частые вопросы",
  q1:"Вы работаете только удалённо?", q1a:"Да. Встречаемся онлайн, а решения я внедряю через доступ, который вы мне дадите. Так я работаю с компаниями по всей Польше и Европе.",
  q2:"Сколько это стоит?", q2a:"Зависит от процесса. После первого бесплатного разговора называю конкретную цену за конкретный результат, без бесконечной почасовой оплаты.",
  q3:"У нас нет IT-отдела. Это проблема?", q3a:"Нет. Я работаю с малыми и средними компаниями, в том числе без программистов. Всё объясняю простым языком и оставляю инструкцию.",
  q4:"На каких языках можно общаться?", q4a:"На польском, английском и русском. Понимаю также украинский, это помогает при работе с командами из Украины.",
  q5:"А если автоматизация не окупится?", q5a:"Скажу об этом на этапе обзора. Я не предлагаю решения, которые не окупятся в разумный срок.",
  // --- Контакт ---
  c_title:"Есть процесс, который съедает часы?", c_sub:"Напишите мне, обсудим онлайн. Отвечаю на польском, английском и русском.",
  // --- Подвал ---
  ft_about:"Автоматизация процессов, боты, анализ конкурентов и HR-поддержка для малых и средних компаний.", ft_bridge:"Мост PL ↔ UA/BY", ft_remote:"Работаю удалённо"
}
};
