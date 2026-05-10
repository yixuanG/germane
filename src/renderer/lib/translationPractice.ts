import type { SupportedLanguage, TranslationTopic } from '@shared/types'

export const normalizeLanguage = (language: string): SupportedLanguage => {
  if (language.startsWith('de')) return 'de'
  if (language.startsWith('zh')) return 'zh'
  return 'en'
}

export const translationTopics: TranslationTopic[] = [
  {
    id: 'digital-education-ai',
    title: {
      en: 'Digital education and artificial intelligence',
      de: 'Digitale Bildung und künstliche Intelligenz',
      zh: '数字教育与人工智能',
    },
    examFocus: ['TestDaF', 'Goethe C1', 'Goethe C2'],
    description: {
      en: 'Arguments about schools, universities, learning platforms, AI tutors, equal opportunity, and teacher responsibility.',
      de: 'Argumente zu Schulen, Universitäten, Lernplattformen, KI-Tutoren, Chancengleichheit und Verantwortung der Lehrkräfte.',
      zh: '围绕学校、大学、学习平台、AI 辅导、机会公平与教师责任展开论证。',
    },
    prompts: [
      {
        id: 'digital-education-ai-1',
        stance: 'pro',
        label: {
          en: 'Personalized support',
          de: 'Individuelle Förderung',
          zh: '个性化支持',
        },
        source: {
          en: 'Digital tools can reduce hidden inequality when they show teachers which learners are falling behind before poor performance becomes visible in tests.',
          de: 'Digitale Werkzeuge können verdeckte Ungleichheit verringern, wenn sie Lehrkräften früh zeigen, welche Lernenden zurückfallen, bevor schlechte Leistungen in Prüfungen sichtbar werden.',
          zh: '数字工具可以降低隐性的教育不平等，因为它们能在考试成绩变差之前提醒教师哪些学生正在掉队。',
        },
        references: {
          c1: 'Digitale Werkzeuge können verdeckte Bildungsungleichheit verringern, weil sie Lehrkräften frühzeitig zeigen, welche Lernenden Unterstützung brauchen, bevor schwache Leistungen in Prüfungen sichtbar werden.',
          c2: 'Richtig eingesetzt, können digitale Lernsysteme Bildungsungleichheit nicht nur dokumentieren, sondern präventiv abfedern, indem sie Lehrkräfte auf Lernrückstände hinweisen, lange bevor diese sich in Noten verfestigen.',
        },
      },
      {
        id: 'digital-education-ai-2',
        stance: 'con',
        label: {
          en: 'Attention and dependency',
          de: 'Aufmerksamkeit und Abhängigkeit',
          zh: '注意力与依赖',
        },
        source: {
          en: 'If every learning difficulty is answered by an app, students may become efficient users of hints without developing the patience needed for complex thinking.',
          de: 'Wenn jede Lernschwierigkeit sofort durch eine App gelöst wird, werden Schüler zwar effiziente Nutzer von Hinweisen, entwickeln aber weniger Geduld für komplexes Denken.',
          zh: '如果每个学习困难都由 App 立即解决，学生可能会很会使用提示，却不再培养复杂思考所需的耐心。',
        },
        references: {
          c1: 'Wenn jede Lernschwierigkeit sofort durch eine App abgefedert wird, lernen Schüler möglicherweise, Hinweise effizient zu nutzen, ohne die Ausdauer zu entwickeln, die komplexes Denken voraussetzt.',
          c2: 'Eine permanente digitale Hilfestellung birgt die Gefahr, dass Lernende zwar souverän mit Hinweisen umgehen, aber jene Frustrationstoleranz verlieren, aus der eigenständiges, anspruchsvolles Denken häufig erst entsteht.',
        },
      },
      {
        id: 'digital-education-ai-3',
        stance: 'balanced',
        label: {
          en: 'Teacher role',
          de: 'Rolle der Lehrkräfte',
          zh: '教师角色',
        },
        source: {
          en: 'AI should not replace teachers, but it can free them from routine correction so that they can spend more time on discussion, feedback, and motivation.',
          de: 'KI sollte Lehrkräfte nicht ersetzen, kann sie aber von Routinekorrekturen entlasten, damit mehr Zeit für Gespräch, Rückmeldung und Motivation bleibt.',
          zh: 'AI 不应取代教师，但可以减少机械批改，让教师把更多时间用于讨论、反馈和激励。',
        },
        references: {
          c1: 'KI sollte Lehrkräfte nicht ersetzen, kann sie jedoch von Routinekorrekturen entlasten, sodass mehr Zeit für Gespräche, differenziertes Feedback und Motivation bleibt.',
          c2: 'Der pädagogische Wert von KI liegt weniger im Ersatz der Lehrkraft als in ihrer Entlastung: Je mehr Routinearbeit automatisiert wird, desto stärker können Lehrende Beziehung, Urteilskraft und Motivation einbringen.',
        },
      },
      {
        id: 'digital-education-ai-4',
        stance: 'con',
        label: {
          en: 'Data and trust',
          de: 'Daten und Vertrauen',
          zh: '数据与信任',
        },
        source: {
          en: 'A school that measures every click may improve performance statistics, but it also teaches children that learning is something monitored rather than trusted.',
          de: 'Eine Schule, die jeden Klick misst, kann Leistungsdaten verbessern, vermittelt Kindern aber zugleich, dass Lernen eher überwacht als vertraut wird.',
          zh: '一所记录每次点击的学校或许能提高成绩数据，但也会让孩子觉得学习是被监控的，而不是被信任的。',
        },
        references: {
          c1: 'Eine Schule, die jeden Klick misst, kann ihre Leistungsdaten verbessern, vermittelt Kindern jedoch zugleich, dass Lernen vor allem kontrolliert und weniger vertraut wird.',
          c2: 'Wo schulisches Lernen lückenlos vermessen wird, entstehen zwar präzisere Leistungsprofile, zugleich aber eine Kultur des Misstrauens, in der Bildung eher als Überwachung denn als Vertrauensverhältnis erfahren wird.',
        },
      },
      {
        id: 'digital-education-ai-5',
        stance: 'pro',
        label: {
          en: 'Rural access',
          de: 'Zugang im ländlichen Raum',
          zh: '乡村教育机会',
        },
        source: {
          en: 'For rural students, online courses can mean access to advanced subjects that small schools cannot offer because they lack specialized teachers.',
          de: 'Für Schüler auf dem Land können Online-Kurse Zugang zu anspruchsvollen Fächern schaffen, die kleine Schulen mangels Fachlehrkräften nicht anbieten können.',
          zh: '对乡村学生来说，线上课程能提供小学校因缺少专业教师而无法开设的高级课程。',
        },
        references: {
          c1: 'Für Schüler im ländlichen Raum können Online-Kurse den Zugang zu anspruchsvollen Fächern eröffnen, die kleine Schulen wegen fehlender Fachlehrkräfte nicht anbieten können.',
          c2: 'Gerade in strukturschwachen Regionen können digitale Lernangebote einen realen Ausgleich schaffen, indem sie Jugendlichen fachliche Optionen eröffnen, die ihre Schule aus personellen Gründen nicht bereitstellen kann.',
        },
      },
      {
        id: 'digital-education-ai-6',
        stance: 'balanced',
        label: {
          en: 'Digital divide',
          de: 'Digitale Spaltung',
          zh: '数字鸿沟',
        },
        source: {
          en: 'Digitalization only promotes fairness if devices, quiet rooms, and parental support are not silently assumed to be available in every household.',
          de: 'Digitalisierung fördert Gerechtigkeit nur dann, wenn Geräte, ruhige Arbeitsräume und elterliche Unterstützung nicht stillschweigend in jedem Haushalt vorausgesetzt werden.',
          zh: '只有当设备、安静空间和父母支持不被默认每个家庭都有时，数字化才真正促进公平。',
        },
        references: {
          c1: 'Digitalisierung fördert Chancengerechtigkeit nur dann, wenn Geräte, ruhige Arbeitsräume und elterliche Unterstützung nicht stillschweigend in jedem Haushalt vorausgesetzt werden.',
          c2: 'Digitale Bildung wird erst dann gerecht, wenn sie die sozialen Voraussetzungen des Lernens mitdenkt; andernfalls verlagert sie Ungleichheit lediglich vom Klassenraum in die Wohnung.',
        },
      },
    ],
  },
  {
    id: 'work-future-economy',
    title: {
      en: 'Future of work and economic responsibility',
      de: 'Arbeitswelt der Zukunft und wirtschaftliche Verantwortung',
      zh: '未来工作与经济责任',
    },
    examFocus: ['TestDaF', 'Goethe C1', 'Goethe C2'],
    description: {
      en: 'Arguments about home office, automation, four-day weeks, career choice, lifelong learning, and social security.',
      de: 'Argumente zu Homeoffice, Automatisierung, Vier-Tage-Woche, Berufswahl, lebenslangem Lernen und sozialer Sicherheit.',
      zh: '围绕居家办公、自动化、四天工作制、职业选择、终身学习与社会保障展开。',
    },
    prompts: [
      {
        id: 'work-future-economy-1',
        stance: 'pro',
        label: {
          en: 'Home office autonomy',
          de: 'Autonomie im Homeoffice',
          zh: '居家办公自主性',
        },
        source: {
          en: 'Home office can make work more humane when employees gain control over concentration, commuting time, and family responsibilities.',
          de: 'Homeoffice kann Arbeit menschlicher machen, wenn Beschäftigte mehr Kontrolle über Konzentration, Pendelzeit und familiäre Verantwortung gewinnen.',
          zh: '当员工能更好地安排专注时间、通勤时间和家庭责任时，居家办公会让工作更人性化。',
        },
        references: {
          c1: 'Homeoffice kann Arbeit menschlicher gestalten, weil Beschäftigte mehr Kontrolle über Konzentrationsphasen, Pendelzeiten und familiäre Verpflichtungen gewinnen.',
          c2: 'Homeoffice ist dort ein Fortschritt, wo es Beschäftigten reale Souveränität über Zeit, Konzentration und Sorgearbeit verschafft, statt lediglich Büroarbeit in den privaten Raum zu verlagern.',
        },
      },
      {
        id: 'work-future-economy-2',
        stance: 'con',
        label: {
          en: 'Invisible overtime',
          de: 'Unsichtbare Mehrarbeit',
          zh: '隐形加班',
        },
        source: {
          en: 'The flexibility of home office becomes unfair when constant availability is treated as personal motivation rather than unpaid overtime.',
          de: 'Die Flexibilität des Homeoffice wird unfair, wenn ständige Erreichbarkeit als persönliche Motivation und nicht als unbezahlte Mehrarbeit gilt.',
          zh: '如果随时在线被视为个人积极性，而不是无偿加班，居家办公的灵活性就会变得不公平。',
        },
        references: {
          c1: 'Die Flexibilität des Homeoffice wird problematisch, wenn ständige Erreichbarkeit als Motivation ausgelegt wird, obwohl sie faktisch unbezahlte Mehrarbeit bedeutet.',
          c2: 'Homeoffice kippt in Ausbeutung, sobald permanente Verfügbarkeit moralisch als Engagement verklärt wird, statt arbeitsrechtlich als zusätzliche, zu begrenzende Arbeitszeit anerkannt zu werden.',
        },
      },
      {
        id: 'work-future-economy-3',
        stance: 'balanced',
        label: {
          en: 'Automation and dignity',
          de: 'Automatisierung und Würde',
          zh: '自动化与尊严',
        },
        source: {
          en: 'Automation is not only a threat to jobs; it becomes socially dangerous when people lose the feeling that their skills are still needed.',
          de: 'Automatisierung bedroht nicht nur Arbeitsplätze; gesellschaftlich gefährlich wird sie, wenn Menschen das Gefühl verlieren, dass ihre Fähigkeiten noch gebraucht werden.',
          zh: '自动化威胁的不只是岗位；当人们觉得自己的技能不再被需要时，它才真正具有社会风险。',
        },
        references: {
          c1: 'Automatisierung bedroht nicht nur Arbeitsplätze, sondern wird besonders dann gesellschaftlich gefährlich, wenn Menschen das Gefühl verlieren, dass ihre Fähigkeiten noch gebraucht werden.',
          c2: 'Die soziale Brisanz der Automatisierung liegt weniger im bloßen Wegfall einzelner Tätigkeiten als in der Erfahrung, mit den eigenen Fähigkeiten aus der gemeinsamen Wertschöpfung herauszufallen.',
        },
      },
      {
        id: 'work-future-economy-4',
        stance: 'pro',
        label: {
          en: 'Four-day week',
          de: 'Vier-Tage-Woche',
          zh: '四天工作制',
        },
        source: {
          en: 'A four-day week can increase productivity if companies stop confusing long presence with meaningful contribution.',
          de: 'Eine Vier-Tage-Woche kann Produktivität steigern, wenn Unternehmen lange Anwesenheit nicht länger mit sinnvollem Beitrag verwechseln.',
          zh: '如果企业不再把长时间在岗等同于有价值的贡献，四天工作制可能提高生产力。',
        },
        references: {
          c1: 'Eine Vier-Tage-Woche kann die Produktivität steigern, sofern Unternehmen lange Anwesenheit nicht länger mit einem sinnvollen Beitrag verwechseln.',
          c2: 'Die Vier-Tage-Woche zwingt Unternehmen dazu, Produktivität neu zu definieren: Nicht die Dauer der Anwesenheit zählt, sondern die Qualität der geleisteten Arbeit.',
        },
      },
      {
        id: 'work-future-economy-5',
        stance: 'con',
        label: {
          en: 'Lifelong learning pressure',
          de: 'Druck des lebenslangen Lernens',
          zh: '终身学习压力',
        },
        source: {
          en: 'Lifelong learning sounds empowering, but it can shift the cost of economic change onto individuals who already work under pressure.',
          de: 'Lebenslanges Lernen klingt stärkend, kann die Kosten wirtschaftlichen Wandels aber auf Einzelne verlagern, die ohnehin unter Druck arbeiten.',
          zh: '终身学习听起来赋能个人，但也可能把经济变化的成本转嫁给本已承压的劳动者。',
        },
        references: {
          c1: 'Lebenslanges Lernen klingt zunächst stärkend, kann jedoch die Kosten wirtschaftlichen Wandels auf Einzelne verlagern, die ohnehin unter hohem Druck arbeiten.',
          c2: 'Der Begriff des lebenslangen Lernens wird problematisch, wenn er strukturelle Anpassungskosten individualisiert und Beschäftigte für Marktumbrüche verantwortlich macht, die sie selbst kaum beeinflussen können.',
        },
      },
      {
        id: 'work-future-economy-6',
        stance: 'balanced',
        label: {
          en: 'Meaningful career choice',
          de: 'Sinnvolle Berufswahl',
          zh: '有意义的职业选择',
        },
        source: {
          en: 'Young people should consider income when choosing a career, but a society also loses talent when it teaches them to ignore meaning and public usefulness.',
          de: 'Junge Menschen sollten bei der Berufswahl Einkommen berücksichtigen, doch eine Gesellschaft verliert auch Talente, wenn sie Sinn und öffentlichen Nutzen abwertet.',
          zh: '年轻人择业时当然要考虑收入，但如果社会让他们忽视意义和公共价值，也会浪费人才。',
        },
        references: {
          c1: 'Junge Menschen sollten bei der Berufswahl das Einkommen berücksichtigen, doch eine Gesellschaft verliert Talente, wenn sie Sinn und gesellschaftlichen Nutzen systematisch abwertet.',
          c2: 'Eine realistische Berufswahl darf finanzielle Sicherheit nicht ausblenden; zugleich verarmt eine Gesellschaft, wenn sie jungen Menschen signalisiert, dass Sinn und Gemeinwohl zweitrangig seien.',
        },
      },
    ],
  },
  {
    id: 'climate-mobility-cities',
    title: {
      en: 'Climate, mobility, and livable cities',
      de: 'Klima, Mobilität und lebenswerte Städte',
      zh: '气候、交通与宜居城市',
    },
    examFocus: ['TestDaF', 'Goethe C1', 'Goethe C2'],
    description: {
      en: 'Arguments about public transport, cars, climate policy, urban planning, consumption, and social fairness.',
      de: 'Argumente zu öffentlichem Verkehr, Autos, Klimapolitik, Stadtplanung, Konsum und sozialer Fairness.',
      zh: '涉及公共交通、汽车、气候政策、城市规划、消费与社会公平。',
    },
    prompts: [
      {
        id: 'climate-mobility-cities-1',
        stance: 'pro',
        label: {
          en: 'Public transport as freedom',
          de: 'ÖPNV als Freiheit',
          zh: '公共交通作为自由',
        },
        source: {
          en: 'Good public transport does not limit freedom; it expands freedom for people who cannot or do not want to depend on a private car.',
          de: 'Guter öffentlicher Verkehr beschränkt Freiheit nicht, sondern erweitert sie für Menschen, die nicht vom eigenen Auto abhängig sein können oder wollen.',
          zh: '好的公共交通不是限制自由，而是扩大那些不能或不想依赖私家车的人的自由。',
        },
        references: {
          c1: 'Guter öffentlicher Verkehr beschränkt Freiheit nicht, sondern erweitert sie für Menschen, die nicht vom eigenen Auto abhängig sein können oder wollen.',
          c2: 'Ein leistungsfähiger öffentlicher Verkehr ist kein Angriff auf individuelle Freiheit, sondern deren soziale Voraussetzung, weil Mobilität nicht länger an Autobesitz gebunden bleibt.',
        },
      },
      {
        id: 'climate-mobility-cities-2',
        stance: 'con',
        label: {
          en: 'Unequal climate costs',
          de: 'Ungleiche Klimakosten',
          zh: '气候成本不平等',
        },
        source: {
          en: 'Climate policy loses legitimacy when people with low incomes pay more for heating and transport while wealthy lifestyles remain mostly symbolic targets.',
          de: 'Klimapolitik verliert Legitimität, wenn Menschen mit geringem Einkommen mehr für Heizung und Verkehr zahlen, während wohlhabende Lebensstile nur symbolisch kritisiert werden.',
          zh: '如果低收入者为供暖和交通支付更多，而富裕生活方式只受到象征性批评，气候政策就会失去正当性。',
        },
        references: {
          c1: 'Klimapolitik verliert an Legitimität, wenn Menschen mit geringem Einkommen höhere Kosten für Heizung und Verkehr tragen, während wohlhabende Lebensstile nur symbolisch kritisiert werden.',
          c2: 'Eine Klimapolitik, die soziale Härten unten konkret spürbar macht, aber ressourcenintensive Lebensstile oben nur rhetorisch adressiert, untergräbt ihre eigene demokratische Akzeptanz.',
        },
      },
      {
        id: 'climate-mobility-cities-3',
        stance: 'balanced',
        label: {
          en: 'Car in rural life',
          de: 'Auto auf dem Land',
          zh: '乡村生活中的汽车',
        },
        source: {
          en: 'For many rural households, the car is not a status symbol but infrastructure, so alternatives must exist before moral pressure can be fair.',
          de: 'Für viele Haushalte auf dem Land ist das Auto kein Statussymbol, sondern Infrastruktur; deshalb müssen Alternativen existieren, bevor moralischer Druck fair sein kann.',
          zh: '对许多乡村家庭来说，汽车不是身份象征，而是基础设施；因此在施加道德压力之前必须先提供替代方案。',
        },
        references: {
          c1: 'Für viele Haushalte im ländlichen Raum ist das Auto kein Statussymbol, sondern notwendige Infrastruktur, weshalb Alternativen vorhanden sein müssen, bevor moralischer Druck gerechtfertigt ist.',
          c2: 'Wer Mobilitätswandel ernst meint, muss anerkennen, dass das Auto auf dem Land häufig eine fehlende Infrastruktur ersetzt; moralische Appelle bleiben unfair, solange praktikable Alternativen fehlen.',
        },
      },
      {
        id: 'climate-mobility-cities-4',
        stance: 'pro',
        label: {
          en: 'Green urban space',
          de: 'Grüne Stadträume',
          zh: '绿色城市空间',
        },
        source: {
          en: 'Parks and trees are not decoration in dense cities; they protect health, cool neighborhoods, and create places where social groups meet without paying.',
          de: 'Parks und Bäume sind in dichten Städten keine Dekoration; sie schützen Gesundheit, kühlen Viertel und schaffen Orte, an denen soziale Gruppen ohne Konsumzwang zusammenkommen.',
          zh: '在高密度城市中，公园和树木不是装饰；它们保护健康、降低街区温度，并提供无需消费就能相遇的公共空间。',
        },
        references: {
          c1: 'Parks und Bäume sind in dichten Städten keine bloße Dekoration, sondern schützen Gesundheit, kühlen Stadtviertel und schaffen konsumfreie Orte der Begegnung.',
          c2: 'Städtisches Grün ist soziale Infrastruktur: Es mildert Hitze, schützt Gesundheit und eröffnet Räume, in denen Begegnung nicht von Kaufkraft abhängig ist.',
        },
      },
      {
        id: 'climate-mobility-cities-5',
        stance: 'con',
        label: {
          en: 'Consumer responsibility limits',
          de: 'Grenzen individueller Verantwortung',
          zh: '个人消费责任的边界',
        },
        source: {
          en: 'Calling on consumers to live sustainably is useful, but it becomes an excuse when companies and governments avoid changing the systems that shape choices.',
          de: 'Verbraucher zu nachhaltigem Verhalten aufzurufen ist sinnvoll, wird aber zur Ausrede, wenn Unternehmen und Politik die Systeme unverändert lassen, die Entscheidungen prägen.',
          zh: '呼吁消费者可持续生活是有意义的，但如果企业和政府不改变塑造选择的系统，这种呼吁就会变成借口。',
        },
        references: {
          c1: 'Verbraucher zu nachhaltigem Verhalten aufzurufen ist sinnvoll, wird jedoch zur Ausrede, wenn Unternehmen und Politik jene Strukturen nicht verändern, die Konsumentscheidungen prägen.',
          c2: 'Individuelle Verantwortung darf nicht als bequeme Ersatzhandlung dienen: Nachhaltiger Konsum bleibt begrenzt, solange politische und wirtschaftliche Strukturen klimaschädliche Entscheidungen nahelegen.',
        },
      },
      {
        id: 'climate-mobility-cities-6',
        stance: 'balanced',
        label: {
          en: 'Speed limits',
          de: 'Tempolimit',
          zh: '限速政策',
        },
        source: {
          en: 'A speed limit is not a complete climate strategy, but it is a visible signal that comfort must sometimes give way to shared risk reduction.',
          de: 'Ein Tempolimit ist keine vollständige Klimastrategie, aber ein sichtbares Signal, dass Bequemlichkeit manchmal gemeinsamer Risikovermeidung weichen muss.',
          zh: '限速不是完整的气候战略，但它是一个可见信号：个人便利有时必须让位于共同降低风险。',
        },
        references: {
          c1: 'Ein Tempolimit ist keine vollständige Klimastrategie, aber ein sichtbares Signal dafür, dass individuelle Bequemlichkeit gelegentlich gemeinsamer Risikovermeidung weichen muss.',
          c2: 'Das Tempolimit löst die Klimakrise nicht, besitzt aber symbolische und praktische Bedeutung, weil es zeigt, dass Freiheit in einer Risikogesellschaft auch Selbstbegrenzung einschließt.',
        },
      },
    ],
  },
  {
    id: 'health-aging-society',
    title: {
      en: 'Health, aging, and social cohesion',
      de: 'Gesundheit, Alterung und gesellschaftlicher Zusammenhalt',
      zh: '健康、老龄化与社会凝聚力',
    },
    examFocus: ['TestDaF', 'Goethe C1', 'Goethe C2'],
    description: {
      en: 'Arguments about healthcare, prevention, nursing, loneliness, mental health, sport, and demographic change.',
      de: 'Argumente zu Gesundheitswesen, Prävention, Pflege, Einsamkeit, psychischer Gesundheit, Sport und demografischem Wandel.',
      zh: '涉及医疗、预防、护理、孤独、心理健康、运动与人口结构变化。',
    },
    prompts: [
      {
        id: 'health-aging-society-1',
        stance: 'pro',
        label: {
          en: 'Prevention',
          de: 'Prävention',
          zh: '预防',
        },
        source: {
          en: 'Prevention is not a private hobby; it saves public money when schools, workplaces, and cities make healthy routines easy.',
          de: 'Prävention ist kein privates Hobby; sie spart öffentliche Kosten, wenn Schulen, Betriebe und Städte gesunde Routinen erleichtern.',
          zh: '预防不是私人爱好；当学校、企业和城市让健康习惯更容易实现时，它能节省公共成本。',
        },
        references: {
          c1: 'Prävention ist kein privates Hobby, sondern spart öffentliche Kosten, wenn Schulen, Betriebe und Städte gesunde Routinen im Alltag erleichtern.',
          c2: 'Gesundheitsprävention darf nicht als individuelle Lifestyle-Frage missverstanden werden; sie wird wirksam, wenn Institutionen Bedingungen schaffen, unter denen gesundes Verhalten naheliegt.',
        },
      },
      {
        id: 'health-aging-society-2',
        stance: 'con',
        label: {
          en: 'Moralizing health',
          de: 'Moralisierung von Gesundheit',
          zh: '健康道德化',
        },
        source: {
          en: 'Health campaigns become unjust when they blame individuals for illness while ignoring stress, poverty, housing, and working conditions.',
          de: 'Gesundheitskampagnen werden ungerecht, wenn sie Einzelnen Krankheit vorwerfen und Stress, Armut, Wohnraum und Arbeitsbedingungen ausblenden.',
          zh: '如果健康宣传把疾病归咎于个人，却忽视压力、贫困、住房和工作条件，它就会变得不公正。',
        },
        references: {
          c1: 'Gesundheitskampagnen werden ungerecht, wenn sie Krankheit individualisieren und dabei Stress, Armut, Wohnverhältnisse und Arbeitsbedingungen ausblenden.',
          c2: 'Eine Gesundheitspolitik, die Verantwortung moralisch an Einzelne delegiert, ohne soziale Ursachen von Krankheit mitzudenken, verwechselt Aufklärung mit Schuldzuweisung.',
        },
      },
      {
        id: 'health-aging-society-3',
        stance: 'balanced',
        label: {
          en: 'Aging society',
          de: 'Alternde Gesellschaft',
          zh: '老龄化社会',
        },
        source: {
          en: 'An aging society is not only a financial burden; it becomes a burden when care, housing, and work are designed as if most people remained young forever.',
          de: 'Eine alternde Gesellschaft ist nicht nur eine finanzielle Belastung; belastend wird sie, wenn Pflege, Wohnen und Arbeit so gestaltet sind, als blieben die meisten Menschen ewig jung.',
          zh: '老龄化社会不只是财政负担；真正的问题是护理、住房和工作制度仍像大多数人会永远年轻一样设计。',
        },
        references: {
          c1: 'Eine alternde Gesellschaft ist nicht automatisch eine Belastung; problematisch wird sie, wenn Pflege, Wohnen und Arbeit so organisiert sind, als blieben die meisten Menschen dauerhaft jung.',
          c2: 'Der demografische Wandel wird vor allem dort zur Krise, wo Institutionen weiterhin Jugendlichkeit voraussetzen und dadurch Pflege, Wohnraum und Arbeitsleben nicht altersgerecht umbauen.',
        },
      },
      {
        id: 'health-aging-society-4',
        stance: 'pro',
        label: {
          en: 'Mental health openness',
          de: 'Offenheit bei psychischer Gesundheit',
          zh: '心理健康公开讨论',
        },
        source: {
          en: 'Talking openly about mental health does not make people weaker; it prevents private suffering from becoming a silent social cost.',
          de: 'Offen über psychische Gesundheit zu sprechen macht Menschen nicht schwächer, sondern verhindert, dass privates Leiden zu stillen gesellschaftlichen Kosten wird.',
          zh: '公开谈论心理健康不会让人变脆弱，而是防止私人痛苦变成沉默的社会成本。',
        },
        references: {
          c1: 'Offen über psychische Gesundheit zu sprechen schwächt Menschen nicht, sondern verhindert, dass privates Leiden zu stillen gesellschaftlichen Kosten wird.',
          c2: 'Eine offene Debatte über psychische Gesundheit ist kein Zeichen kollektiver Schwäche, sondern eine Voraussetzung dafür, verborgenes Leiden früh zu erkennen und gesellschaftlich aufzufangen.',
        },
      },
      {
        id: 'health-aging-society-5',
        stance: 'con',
        label: {
          en: 'Loneliness and individualism',
          de: 'Einsamkeit und Individualismus',
          zh: '孤独与个人主义',
        },
        source: {
          en: 'Loneliness cannot be solved only by telling people to be more social; many cities have removed the low-cost places where relationships can grow slowly.',
          de: 'Einsamkeit lässt sich nicht lösen, indem man Menschen nur zu mehr Kontakt auffordert; viele Städte haben die günstigen Orte verloren, an denen Beziehungen langsam wachsen können.',
          zh: '孤独不能只靠劝人多社交解决；许多城市已经失去了那些低成本、能让关系慢慢生长的空间。',
        },
        references: {
          c1: 'Einsamkeit lässt sich nicht dadurch lösen, dass man Menschen einfach zu mehr Kontakt auffordert; viele Städte haben günstige Orte verloren, an denen Beziehungen langsam entstehen können.',
          c2: 'Wer Einsamkeit bekämpfen will, muss mehr tun, als individuelles Sozialverhalten zu appellieren: Entscheidend sind zugängliche Räume, in denen unverzweckte Begegnungen überhaupt möglich werden.',
        },
      },
      {
        id: 'health-aging-society-6',
        stance: 'balanced',
        label: {
          en: 'Sport and social status',
          de: 'Sport und sozialer Status',
          zh: '运动与社会地位',
        },
        source: {
          en: 'Sport can improve health and integration, but only if fees, equipment, and time are not barriers for families with little money.',
          de: 'Sport kann Gesundheit und Integration fördern, aber nur, wenn Gebühren, Ausrüstung und Zeit für Familien mit wenig Geld keine Hürden darstellen.',
          zh: '运动能促进健康和融入，但前提是费用、装备和时间不成为低收入家庭的障碍。',
        },
        references: {
          c1: 'Sport kann Gesundheit und Integration fördern, allerdings nur dann, wenn Gebühren, Ausrüstung und Zeitaufwand für Familien mit geringem Einkommen keine Hürden darstellen.',
          c2: 'Der integrative Wert des Sports entfaltet sich erst, wenn Teilhabe nicht an Geld, Ausrüstung oder elterliche Zeitressourcen gekoppelt ist.',
        },
      },
    ],
  },
  {
    id: 'migration-participation-identity',
    title: {
      en: 'Migration, participation, and identity',
      de: 'Migration, Teilhabe und Identität',
      zh: '移民、参与与身份',
    },
    examFocus: ['TestDaF', 'Goethe C1', 'Goethe C2'],
    description: {
      en: 'Arguments about integration, language, skilled immigration, discrimination, citizenship, and cultural identity.',
      de: 'Argumente zu Integration, Sprache, Fachkräfteeinwanderung, Diskriminierung, Staatsbürgerschaft und kultureller Identität.',
      zh: '围绕融合、语言、技术移民、歧视、公民身份与文化身份展开。',
    },
    prompts: [
      {
        id: 'migration-participation-identity-1',
        stance: 'balanced',
        label: {
          en: 'Language and participation',
          de: 'Sprache und Teilhabe',
          zh: '语言与参与',
        },
        source: {
          en: 'Language courses are central to integration, but they only work if people also get real chances to use the language at work and in public life.',
          de: 'Sprachkurse sind zentral für Integration, wirken aber nur, wenn Menschen reale Chancen bekommen, die Sprache in Arbeit und Öffentlichkeit zu nutzen.',
          zh: '语言课程对融入很重要，但只有当人们在工作和公共生活中有真实机会使用语言时，它才有效。',
        },
        references: {
          c1: 'Sprachkurse sind für Integration zentral, entfalten ihre Wirkung jedoch erst, wenn Menschen reale Chancen erhalten, die Sprache im Beruf und im öffentlichen Leben anzuwenden.',
          c2: 'Spracherwerb ist keine isolierte Vorleistung zur Integration, sondern gelingt dort nachhaltig, wo gesellschaftliche Teilhabe den Gebrauch der Sprache tatsächlich erforderlich und möglich macht.',
        },
      },
      {
        id: 'migration-participation-identity-2',
        stance: 'pro',
        label: {
          en: 'Skilled immigration',
          de: 'Fachkräfteeinwanderung',
          zh: '技术移民',
        },
        source: {
          en: 'A country that needs skilled workers must treat immigrants not as emergency labor, but as people who need stability, recognition, and family prospects.',
          de: 'Ein Land, das Fachkräfte braucht, muss Einwanderer nicht als Notfallarbeitskräfte behandeln, sondern als Menschen, die Stabilität, Anerkennung und Familienperspektiven benötigen.',
          zh: '一个需要技术人才的国家不能把移民只当成应急劳动力，而应把他们视为需要稳定、认可和家庭前景的人。',
        },
        references: {
          c1: 'Ein Land, das Fachkräfte braucht, sollte Einwanderer nicht als bloße Notfallarbeitskräfte behandeln, sondern als Menschen, die Stabilität, Anerkennung und Familienperspektiven benötigen.',
          c2: 'Fachkräfteeinwanderung kann nur gelingen, wenn Zugewanderte nicht funktional auf Arbeitskraft reduziert werden, sondern verlässliche Perspektiven für Anerkennung, Familie und gesellschaftliche Zugehörigkeit erhalten.',
        },
      },
      {
        id: 'migration-participation-identity-3',
        stance: 'con',
        label: {
          en: 'Symbolic diversity',
          de: 'Symbolische Vielfalt',
          zh: '象征性多元',
        },
        source: {
          en: 'Diversity remains superficial when institutions celebrate different cultures but leave hiring, housing, and education barriers untouched.',
          de: 'Vielfalt bleibt oberflächlich, wenn Institutionen unterschiedliche Kulturen feiern, aber Barrieren bei Einstellung, Wohnen und Bildung unangetastet lassen.',
          zh: '如果机构庆祝不同文化，却不触碰就业、住房和教育中的障碍，多元就只是表面。',
        },
        references: {
          c1: 'Vielfalt bleibt oberflächlich, wenn Institutionen kulturelle Unterschiede feiern, aber Barrieren bei Einstellung, Wohnen und Bildung nicht abbauen.',
          c2: 'Eine bloß symbolische Anerkennung von Vielfalt verdeckt strukturelle Ausschlüsse, solange Zugang zu Arbeit, Wohnraum und Bildung ungleich verteilt bleibt.',
        },
      },
      {
        id: 'migration-participation-identity-4',
        stance: 'balanced',
        label: {
          en: 'Identity and belonging',
          de: 'Identität und Zugehörigkeit',
          zh: '身份与归属',
        },
        source: {
          en: 'Integration should not require people to erase their background; belonging grows when a shared civic life allows more than one cultural memory.',
          de: 'Integration sollte nicht verlangen, dass Menschen ihre Herkunft auslöschen; Zugehörigkeit wächst, wenn ein gemeinsames Bürgerleben mehr als eine kulturelle Erinnerung zulässt.',
          zh: '融入不应要求人们抹去自身背景；当共同的公民生活允许多重文化记忆存在时，归属感才会增长。',
        },
        references: {
          c1: 'Integration sollte nicht verlangen, dass Menschen ihre Herkunft auslöschen; Zugehörigkeit entsteht, wenn ein gemeinsames Bürgerleben mehrere kulturelle Erinnerungen zulässt.',
          c2: 'Zugehörigkeit entsteht nicht durch kulturelle Selbstverleugnung, sondern durch eine politische Gemeinschaft, die gemeinsame Regeln mit pluralen Erinnerungen vereinbaren kann.',
        },
      },
      {
        id: 'migration-participation-identity-5',
        stance: 'pro',
        label: {
          en: 'Citizenship',
          de: 'Staatsbürgerschaft',
          zh: '公民身份',
        },
        source: {
          en: 'Easier citizenship can strengthen democracy because people who live, work, and pay taxes should not remain permanently outside political decisions.',
          de: 'Ein erleichterter Zugang zur Staatsbürgerschaft kann Demokratie stärken, weil Menschen, die leben, arbeiten und Steuern zahlen, nicht dauerhaft außerhalb politischer Entscheidungen bleiben sollten.',
          zh: '更容易获得公民身份能强化民主，因为长期生活、工作和纳税的人不应一直被排除在政治决策之外。',
        },
        references: {
          c1: 'Ein erleichterter Zugang zur Staatsbürgerschaft kann die Demokratie stärken, weil Menschen, die dauerhaft leben, arbeiten und Steuern zahlen, nicht von politischen Entscheidungen ausgeschlossen bleiben sollten.',
          c2: 'Demokratische Legitimität gewinnt, wenn dauerhafte gesellschaftliche Zugehörigkeit auch politisch anerkannt wird; wer über Jahre betroffen ist, sollte nicht dauerhaft ohne Stimme bleiben.',
        },
      },
      {
        id: 'migration-participation-identity-6',
        stance: 'con',
        label: {
          en: 'Integration as one-sided demand',
          de: 'Integration als einseitige Forderung',
          zh: '单向要求式融合',
        },
        source: {
          en: 'Integration fails when only newcomers are asked to adapt while the receiving society avoids examining its own prejudices and closed networks.',
          de: 'Integration scheitert, wenn nur Zugewanderte Anpassung leisten sollen, während die Aufnahmegesellschaft eigene Vorurteile und geschlossene Netzwerke nicht prüft.',
          zh: '如果只有新来者被要求适应，而接收社会不反思自己的偏见和封闭关系网，融合就会失败。',
        },
        references: {
          c1: 'Integration scheitert, wenn nur Zugewanderte Anpassung leisten sollen, während die Aufnahmegesellschaft eigene Vorurteile und geschlossene Netzwerke nicht hinterfragt.',
          c2: 'Integration ist keine einseitige Bringschuld der Zugewanderten; sie verlangt ebenso, dass die Mehrheitsgesellschaft ihre Ausschlussmechanismen und vertrauten Vorurteile kritisch prüft.',
        },
      },
    ],
  },
  {
    id: 'media-democracy-privacy',
    title: {
      en: 'Media, democracy, and privacy',
      de: 'Medien, Demokratie und Privatsphäre',
      zh: '媒体、民主与隐私',
    },
    examFocus: ['TestDaF', 'Goethe C1', 'Goethe C2'],
    description: {
      en: 'Arguments about social media, journalism, misinformation, privacy, platform power, and democratic debate.',
      de: 'Argumente zu sozialen Medien, Journalismus, Desinformation, Privatsphäre, Plattformmacht und demokratischer Debatte.',
      zh: '涉及社交媒体、新闻、虚假信息、隐私、平台权力与民主讨论。',
    },
    prompts: [
      {
        id: 'media-democracy-privacy-1',
        stance: 'con',
        label: {
          en: 'Attention economy',
          de: 'Aufmerksamkeitsökonomie',
          zh: '注意力经济',
        },
        source: {
          en: 'Social media does not simply show public opinion; it rewards the emotions that keep users reacting, especially anger and fear.',
          de: 'Soziale Medien bilden öffentliche Meinung nicht einfach ab; sie belohnen jene Emotionen, die Nutzer reagieren lassen, vor allem Wut und Angst.',
          zh: '社交媒体并不只是呈现公共意见；它奖励那些让用户持续反应的情绪，尤其是愤怒和恐惧。',
        },
        references: {
          c1: 'Soziale Medien bilden öffentliche Meinung nicht einfach ab, sondern belohnen jene Emotionen, die Nutzer zu Reaktionen bewegen, insbesondere Wut und Angst.',
          c2: 'Plattformen spiegeln Öffentlichkeit nicht neutral wider; ihre Logik der Aufmerksamkeit verstärkt Affekte, die Bindung erzeugen, und verschiebt Debatten dadurch in Richtung Empörung.',
        },
      },
      {
        id: 'media-democracy-privacy-2',
        stance: 'pro',
        label: {
          en: 'Access to voice',
          de: 'Zugang zur Stimme',
          zh: '发声机会',
        },
        source: {
          en: 'Social platforms can democratize debate when people without institutional power can make local problems visible beyond their neighborhood.',
          de: 'Soziale Plattformen können Debatten demokratisieren, wenn Menschen ohne institutionelle Macht lokale Probleme über ihr Viertel hinaus sichtbar machen.',
          zh: '当没有制度权力的人能让本地问题被更广泛看见时，社交平台可以民主化公共讨论。',
        },
        references: {
          c1: 'Soziale Plattformen können Debatten demokratisieren, weil Menschen ohne institutionelle Macht lokale Probleme über ihr unmittelbares Umfeld hinaus sichtbar machen können.',
          c2: 'Die demokratische Stärke sozialer Medien liegt darin, dass sie Sichtbarkeit nicht ausschließlich etablierten Institutionen überlassen, sondern auch marginalisierte Erfahrungen öffentlich anschlussfähig machen.',
        },
      },
      {
        id: 'media-democracy-privacy-3',
        stance: 'balanced',
        label: {
          en: 'Journalism and trust',
          de: 'Journalismus und Vertrauen',
          zh: '新闻与信任',
        },
        source: {
          en: 'Trust in journalism cannot be restored by demanding respect; it grows when media explain uncertainty, correct mistakes, and show how information was checked.',
          de: 'Vertrauen in Journalismus entsteht nicht durch eingeforderten Respekt, sondern wenn Medien Unsicherheit erklären, Fehler korrigieren und Prüfwege offenlegen.',
          zh: '新闻信任不能靠要求尊重恢复；它来自媒体解释不确定性、纠正错误并展示信息如何被核查。',
        },
        references: {
          c1: 'Vertrauen in Journalismus entsteht nicht durch eingeforderten Respekt, sondern dadurch, dass Medien Unsicherheit erklären, Fehler korrigieren und Recherchewege transparent machen.',
          c2: 'Journalistisches Vertrauen lässt sich nicht autoritär einfordern; es muss durch Transparenz über Unsicherheit, sichtbare Korrekturbereitschaft und nachvollziehbare Recherchepraktiken immer neu verdient werden.',
        },
      },
      {
        id: 'media-democracy-privacy-4',
        stance: 'con',
        label: {
          en: 'Privacy as social power',
          de: 'Privatsphäre als soziale Macht',
          zh: '隐私作为社会权力',
        },
        source: {
          en: 'Privacy is not only about hiding secrets; without private space, people adapt their behavior before anyone openly forces them to.',
          de: 'Privatsphäre bedeutet nicht nur, Geheimnisse zu verbergen; ohne private Räume passen Menschen ihr Verhalten an, bevor sie jemand offen dazu zwingt.',
          zh: '隐私不只是隐藏秘密；没有私人空间，人们会在任何人公开强迫之前就开始调整自己的行为。',
        },
        references: {
          c1: 'Privatsphäre bedeutet nicht nur, Geheimnisse zu verbergen; ohne private Räume passen Menschen ihr Verhalten bereits an, bevor sie jemand offen dazu zwingt.',
          c2: 'Privatsphäre schützt nicht bloß Informationen, sondern innere Freiheit: Wer sich permanent beobachtet fühlt, diszipliniert sich selbst, noch bevor äußerer Zwang sichtbar wird.',
        },
      },
      {
        id: 'media-democracy-privacy-5',
        stance: 'pro',
        label: {
          en: 'Media literacy',
          de: 'Medienkompetenz',
          zh: '媒介素养',
        },
        source: {
          en: 'Media literacy should be taught like civic education, because citizens need to judge sources before they can judge political arguments.',
          de: 'Medienkompetenz sollte wie politische Bildung vermittelt werden, denn Bürger müssen Quellen beurteilen können, bevor sie politische Argumente beurteilen.',
          zh: '媒介素养应像公民教育一样被教授，因为公民在判断政治论点之前必须先能判断信息来源。',
        },
        references: {
          c1: 'Medienkompetenz sollte ähnlich wie politische Bildung vermittelt werden, denn Bürger müssen Quellen beurteilen können, bevor sie politische Argumente bewerten.',
          c2: 'In einer digitalisierten Öffentlichkeit ist Medienkompetenz eine demokratische Grundfähigkeit: Ohne Quellenkritik bleibt politische Urteilsbildung manipulationsanfällig.',
        },
      },
      {
        id: 'media-democracy-privacy-6',
        stance: 'balanced',
        label: {
          en: 'Platform regulation',
          de: 'Plattformregulierung',
          zh: '平台监管',
        },
        source: {
          en: 'Regulating platforms is necessary, but it must be transparent enough that the fight against hate speech does not become invisible private censorship.',
          de: 'Plattformregulierung ist notwendig, muss aber transparent genug sein, damit der Kampf gegen Hassrede nicht zu unsichtbarer privater Zensur wird.',
          zh: '平台监管是必要的，但必须足够透明，避免打击仇恨言论变成不可见的私人审查。',
        },
        references: {
          c1: 'Plattformregulierung ist notwendig, muss jedoch transparent gestaltet werden, damit der Kampf gegen Hassrede nicht in unsichtbare private Zensur umschlägt.',
          c2: 'Demokratische Plattformregulierung muss Hassrede begrenzen, ohne Entscheidungsgewalt in intransparente private Moderationssysteme auszulagern.',
        },
      },
    ],
  },
]

export const getTranslationTopicById = (id: string) => {
  return translationTopics.find((topic) => topic.id === id)
}
