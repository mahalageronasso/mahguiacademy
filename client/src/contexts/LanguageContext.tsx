import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Lang = "en" | "pt";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    "nav.courses": "Courses",
    "nav.plans": "Plans",
    "nav.professors": "Professors",
    "nav.getStarted": "Get started",
    "nav.tagline": "Hospitality Without Borders",

    // Hero
    "hero.title.1": "Learn from those who ",
    "hero.title.lived": "lived",
    "hero.title.2": " hospitality across ",
    "hero.title.continents": "4 continents",
    "hero.subtitle": "Practical courses in finance, revenue management, leadership, international careers, real estate and more — for hospitality professionals ready to go further.",
    "hero.cta.plans": "View subscription plans",
    "hero.cta.courses": "Explore courses",

    // Stats
    "stats.courses": "courses available",
    "stats.phd": "UCF — hospitality",
    "stats.years": "years in industry",
    "stats.continents": "continents",
    "stats.professors": "professors",

    // Courses section
    "courses.title": "Courses",
    "courses.viewAll": "View all",
    "courses.filter.all": "All",
    "courses.filter.finance": "Finance",
    "courses.filter.revenue": "Revenue",
    "courses.filter.leadership": "Leadership",
    "courses.filter.hospitality": "Hospitality",
    "courses.filter.data": "Data & Excel",
    "courses.filter.career": "Career",
    "courses.filter.fleet": "Fleet",
    "courses.filter.realestate": "Real Estate",
    "courses.filter.insurance": "Insurance",
    "courses.enroll": "Enroll",
    "courses.lessons": "lessons",
    "courses.from": "From",
    "courses.noCourses": "No courses found in this category.",
    "courses.orInBrl": "or R$",

    // Course names
    "course.hotelAccounting": "Hotel Accounting from Scratch",
    "course.revenueMgmt": "Fundamentals of Revenue Management",
    "course.financialStatements": "Hospitality Financial & Managerial Accounting",
    "course.excelHospitality": "Excel for Hospitality Professionals",
    "course.strategicPricing": "Strategic Pricing for Hotels",
    "course.leadership": "Leadership in Hospitality",
    "course.introHospitality": "Introduction to Hospitality Management",
    "course.internationalCareer": "Build Your International Career",
    "course.fleetMgmt": "Fleet Management",
    "course.uaeRealEstate": "UAE Real Estate",

    // Course descriptions
    "course.hotelAccounting.desc": "Master the fundamentals of hotel accounting, from chart of accounts to financial reporting in the hospitality industry.",
    "course.revenueMgmt.desc": "Learn demand forecasting, pricing strategies, and distribution channel management for maximum hotel revenue.",
    "course.financialStatements.desc": "Analyze income statements, balance sheets, and cash flow reports specific to the hospitality sector.",
    "course.excelHospitality.desc": "Build powerful spreadsheets for budgeting, forecasting, and operational analysis in hotels.",
    "course.strategicPricing.desc": "Develop data-driven pricing strategies that maximize revenue per available room.",
    "course.leadership.desc": "Cultivate leadership skills tailored for the unique challenges of the hospitality industry.",
    "course.introHospitality.desc": "A comprehensive overview of hospitality management principles, operations, and career paths.",
    "course.internationalCareer.desc": "Navigate visa processes, cultural adaptation, and career planning for a global hospitality career.",
    "course.fleetMgmt.desc": "Manage vehicle fleets efficiently in the UAE market, covering car rental operations and logistics.",
    "course.uaeRealEstate.desc": "Understand UAE property markets, investment strategies, regulations, and ROI analysis for real estate.",

    // Plans
    "plans.title": "Choose Your Plan",
    "plans.subtitle": "Invest in your career with flexible options that fit your goals and budget.",
    "plans.individual": "Individual Course",
    "plans.individual.desc": "Access a single course of your choice with lifetime access and all materials included.",
    "plans.individual.price": "US$ 37",
    "plans.individual.per": "per course",
    "plans.individual.brl": "or R$ 197",
    "plans.monthly": "Monthly Access",
    "plans.monthly.desc": "Unlimited access to all courses with new content added every month.",
    "plans.monthly.price": "US$ 47",
    "plans.monthly.per": "/month",
    "plans.monthly.brl": "or R$ 247/mo",
    "plans.annual": "Annual Access",
    "plans.annual.desc": "Best value — full access to all courses and exclusive content for a full year.",
    "plans.annual.price": "US$ 155",
    "plans.annual.per": "/year",
    "plans.annual.badge": "Best value",
    "plans.annual.brl": "or R$ 797/yr",
    "plans.mentorship": "Premium Mentorship",
    "plans.mentorship.desc": "1-on-1 mentoring sessions with our instructors, personalized career guidance, and priority support.",
    "plans.mentorship.price": "US$ 997",
    "plans.mentorship.per": "one-time",
    "plans.mentorship.brl": "or R$ 5.300",
    "plans.feature.lifetime": "Lifetime access to course",
    "plans.feature.materials": "All course materials",
    "plans.feature.certificate": "Certificate of completion",
    "plans.feature.community": "Community access",
    "plans.feature.allCourses": "All courses included",
    "plans.feature.newContent": "New content monthly",
    "plans.feature.priority": "Priority support",
    "plans.feature.exclusive": "Exclusive annual content",
    "plans.feature.mentoring": "4 mentoring sessions",
    "plans.feature.careerPlan": "Personalized career plan",
    "plans.feature.network": "Industry network access",
    "plans.feature.allAccess": "Full annual access included",
    "plans.cta": "Get started",
    "plans.popular": "Most popular",
    "plans.save": "Save 32%",
    "plans.brlNote": "Brazilian residents can pay in BRL",

    // Instructors
    "professors.title": "Meet Your Professors",
    "professors.subtitle": "Learn from professionals who built their careers across continents, combining academic excellence with real-world experience.",
    "professors.mahala.name": "Dr. Mahala Geronasso",
    "professors.mahala.role": "Assistant Professor — Les Roches, Abu Dhabi",
    "professors.mahala.bio": "Mahala Geronasso holds a Ph.D. in Hospitality Management (with a concentration in finance and technology) and an MBA from the University of Central Florida. She is currently an Assistant Professor of Hospitality Accounting & Finance at Les Roches Abu Dhabi, where she teaches undergraduate and graduate courses in financial management, revenue management, managerial accounting, and data analytics. Her career spans four continents — from Brazil to Switzerland, the United States, and the UAE — with hands-on experience at Hilton, Hyatt, and Disneyland Paris. A published researcher with articles in top-tier journals such as the Journal of Hospitality & Tourism Research and Tourism Economics, she also co-authored two textbooks on hospitality finance. Certified CHIA (Hotel Industry Analytics) and recognized multiple times by CFHLA, Dr. Geronasso brings a rare combination of academic depth and industry practice to every course she teaches.",
    "professors.mahala.credential.1": "Ph.D. & MBA — UCF",
    "professors.mahala.credential.2": "Les Roches Abu Dhabi",
    "professors.mahala.credential.3": "4 continents",
    "professors.mahala.credential.4": "CHIA Certified",
    "professors.mahala.expertise.1": "Hospitality Finance & Accounting",
    "professors.mahala.expertise.2": "Revenue & Pricing Management",
    "professors.mahala.expertise.3": "Data Analytics & Visualization",
    "professors.mahala.expertise.4": "Leadership & Career Development",
    "professors.guilherme.name": "Guilherme Gomes",
    "professors.guilherme.role": "Real Estate & Operations Specialist — Abu Dhabi, UAE",
    "professors.guilherme.bio": "Guilherme Gomes is a certified Real Estate Broker (ThinkProp / Abu Dhabi Real Estate Centre) and operations leader with 8+ years of experience in client-facing roles, high-value negotiations, and multi-location business expansion. As former Head of Operations at AZ Car Rental, he scaled the company from a single location into a multi-branch operation across Orlando, Miami, Fort Lauderdale, and Tampa — managing 45+ fleet units, negotiating a subleasing agreement with Mercedes-Benz, and building partnerships with over 10 travel and hospitality brands including Booking Group and CVC. With a Law degree from LaSalle University (Rio de Janeiro) and certifications in Six Sigma, Supply Chain, Data Analytics, and Strategic Thinking, Guilherme combines legal acumen with operational excellence. Trilingual in Portuguese, English, and Spanish, he now brings his expertise to the UAE market, helping professionals navigate real estate investment, fleet management, and business opportunities in the Gulf region.",
    "professors.guilherme.credential.1": "Certified RE Broker — UAE",
    "professors.guilherme.credential.2": "LL.B. — LaSalle University",
    "professors.guilherme.credential.3": "8+ years operations",
    "professors.guilherme.credential.4": "Trilingual: PT/EN/ES",
    "professors.guilherme.expertise.1": "UAE Real Estate Investment",
    "professors.guilherme.expertise.2": "Fleet Management & Car Rental",
    "professors.guilherme.expertise.3": "Business Operations & Partnerships",
    "professors.guilherme.expertise.4": "Data Analytics & Strategic Thinking",
    "professors.expertise": "Areas of Expertise",
    "professors.courses": "Courses by",

    // Footer
    "footer.desc": "Empowering hospitality, tourism, and business professionals with world-class education, practical skills, and international career guidance.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.email": "sdxinvestments@gmail.com",

    // CTA section
    "cta.title": "Ready to advance your career?",
    "cta.subtitle": "Join hundreds of hospitality professionals who are transforming their careers with MahGui Academy.",
    "cta.button": "Start learning today",

    // E-book
    "ebook.badge": "New Release",
    "ebook.title": "Financial Management for the Hospitality Industry",
    "ebook.authors": "By Dr. Mahala Geronasso & Dr. Murat Kizildag",
    "ebook.desc": "A comprehensive guide that bridges financial theory and real-world hospitality application. Covers balance sheets, income statements, budgeting, investment decisions, capital structure, and more — with real-life case studies, Excel demonstrations, and step-by-step frameworks.",
    "ebook.pages": "128 pages",
    "ebook.format": "E-book",
    "ebook.price": "US$ 59",
    "ebook.cta": "Get the E-book",
    "ebook.publisher": "Published by Kendall Hunt, 2025",

    // Misc
    "misc.comingSoon": "Feature coming soon",
  },
  pt: {
    // Nav
    "nav.courses": "Cursos",
    "nav.plans": "Planos",
    "nav.professors": "Professores",
    "nav.getStarted": "Comece agora",
    "nav.tagline": "Hospitalidade Sem Fronteiras",

    // Hero
    "hero.title.1": "Aprenda com quem ",
    "hero.title.lived": "viveu",
    "hero.title.2": " a hospitalidade em ",
    "hero.title.continents": "4 continentes",
    "hero.subtitle": "Cursos práticos em finanças, revenue management, liderança, carreiras internacionais, imóveis e mais — para profissionais de hospitalidade prontos para ir além.",
    "hero.cta.plans": "Ver planos de assinatura",
    "hero.cta.courses": "Explorar cursos",

    // Stats
    "stats.courses": "cursos disponíveis",
    "stats.phd": "UCF — hospitalidade",
    "stats.years": "anos na indústria",
    "stats.continents": "continentes",
    "stats.professors": "professores",

    // Courses section
    "courses.title": "Cursos",
    "courses.viewAll": "Ver todos",
    "courses.filter.all": "Todos",
    "courses.filter.finance": "Finanças",
    "courses.filter.revenue": "Revenue",
    "courses.filter.leadership": "Liderança",
    "courses.filter.hospitality": "Hospitalidade",
    "courses.filter.data": "Dados & Excel",
    "courses.filter.career": "Carreira",
    "courses.filter.fleet": "Frotas",
    "courses.filter.realestate": "Imóveis",
    "courses.filter.insurance": "Seguros",
    "courses.enroll": "Inscrever-se",
    "courses.lessons": "aulas",
    "courses.from": "A partir de",
    "courses.noCourses": "Nenhum curso encontrado nesta categoria.",
    "courses.orInBrl": "ou R$",

    // Course names
    "course.hotelAccounting": "Contabilidade Hoteleira do Zero",
    "course.revenueMgmt": "Fundamentos de Revenue Management",
    "course.financialStatements": "Análise de Demonstrações Financeiras",
    "course.excelHospitality": "Excel para Profissionais de Hospitalidade",
    "course.strategicPricing": "Precificação Estratégica para Hotéis",
    "course.leadership": "Liderança em Hospitalidade",
    "course.introHospitality": "Introdução à Gestão Hoteleira",
    "course.internationalCareer": "Construa Sua Carreira Internacional",
    "course.fleetMgmt": "Gestão de Frotas",
    "course.uaeRealEstate": "Investindo em Imóveis nos Emirados",

    // Course descriptions
    "course.hotelAccounting.desc": "Domine os fundamentos da contabilidade hoteleira, do plano de contas aos relatórios financeiros na indústria da hospitalidade.",
    "course.revenueMgmt.desc": "Aprenda previsão de demanda, estratégias de preços e gestão de canais de distribuição para maximizar a receita hoteleira.",
    "course.financialStatements.desc": "Analise demonstrações de resultado, balanços patrimoniais e fluxos de caixa específicos do setor hoteleiro.",
    "course.excelHospitality.desc": "Crie planilhas poderosas para orçamento, previsão e análise operacional em hotéis.",
    "course.strategicPricing.desc": "Desenvolva estratégias de precificação baseadas em dados para maximizar a receita por quarto disponível.",
    "course.leadership.desc": "Cultive habilidades de liderança adaptadas aos desafios únicos da indústria da hospitalidade.",
    "course.introHospitality.desc": "Uma visão abrangente dos princípios de gestão hoteleira, operações e caminhos de carreira.",
    "course.internationalCareer.desc": "Navegue processos de visto, adaptação cultural e planejamento de carreira para uma carreira global em hospitalidade.",
    "course.fleetMgmt.desc": "Gerencie frotas de veículos eficientemente, cobrindo operações de aluguel e logística.",
    "course.uaeRealEstate.desc": "Entenda o mercado imobiliário dos Emirados, estratégias de investimento, regulamentações e análise de ROI.",

    // Plans
    "plans.title": "Escolha Seu Plano",
    "plans.subtitle": "Invista na sua carreira com opções flexíveis que se adaptam aos seus objetivos e orçamento.",
    "plans.individual": "Curso Avulso",
    "plans.individual.desc": "Acesso a um curso de sua escolha com acesso vitalício e todos os materiais incluídos.",
    "plans.individual.price": "US$ 37",
    "plans.individual.per": "por curso",
    "plans.individual.brl": "ou R$ 197",
    "plans.monthly": "Acesso Mensal",
    "plans.monthly.desc": "Acesso ilimitado a todos os cursos com novos conteúdos adicionados todo mês.",
    "plans.monthly.price": "US$ 47",
    "plans.monthly.per": "/mês",
    "plans.monthly.brl": "ou R$ 247/mês",
    "plans.annual": "Acesso Anual",
    "plans.annual.desc": "Melhor custo-benefício — acesso total a todos os cursos e conteúdo exclusivo por um ano inteiro.",
    "plans.annual.price": "US$ 197",
    "plans.annual.per": "/ano",
    "plans.annual.badge": "Melhor valor",
    "plans.annual.brl": "ou R$ 997/ano",
    "plans.mentorship": "Mentoria Premium",
    "plans.mentorship.desc": "Sessões de mentoria 1-a-1 com nossos instrutores, orientação personalizada de carreira e suporte prioritário.",
    "plans.mentorship.price": "US$ 997",
    "plans.mentorship.per": "único",
    "plans.mentorship.brl": "ou R$ 5.000",
    "plans.feature.lifetime": "Acesso vitalício ao curso",
    "plans.feature.materials": "Todos os materiais do curso",
    "plans.feature.certificate": "Certificado de conclusão",
    "plans.feature.community": "Acesso à comunidade",
    "plans.feature.allCourses": "Todos os cursos incluídos",
    "plans.feature.newContent": "Novos conteúdos mensais",
    "plans.feature.priority": "Suporte prioritário",
    "plans.feature.exclusive": "Conteúdo exclusivo anual",
    "plans.feature.mentoring": "4 sessões de mentoria",
    "plans.feature.careerPlan": "Plano de carreira personalizado",
    "plans.feature.network": "Acesso à rede profissional",
    "plans.feature.allAccess": "Acesso anual completo incluído",
    "plans.cta": "Comece agora",
    "plans.popular": "Mais popular",
    "plans.save": "Economize 32%",
    "plans.brlNote": "Residentes no Brasil podem pagar em reais",

    // Instructors
    "professors.title": "Conheça Seus Professores",
    "professors.subtitle": "Aprenda com profissionais que construíram suas carreiras em vários continentes, combinando excelência acadêmica com experiência prática.",
    "professors.mahala.name": "Dra. Mahala Geronasso",
    "professors.mahala.role": "Professora — Les Roches, Abu Dhabi",
    "professors.mahala.bio": "Mahala Geronasso possui Ph.D. em Gestão de Hospitalidade (com concentração em finanças e tecnologia) e MBA pela University of Central Florida. Atualmente é Professora de Contabilidade e Finanças em Hospitalidade na Les Roches Abu Dhabi, onde leciona cursos de graduação e pós-graduação em gestão financeira, revenue management, contabilidade gerencial e análise de dados. Sua carreira abrange quatro continentes — do Brasil à Suíça, Estados Unidos e Emirados Árabes — com experiência prática no Hilton, Hyatt e Disneyland Paris. Pesquisadora publicada em periódicos de referência como o Journal of Hospitality & Tourism Research e Tourism Economics, é também coautora de dois livros didáticos sobre finanças em hospitalidade. Certificada CHIA (Hotel Industry Analytics) e reconhecida múltiplas vezes pela CFHLA, a Dra. Geronasso traz uma rara combinação de profundidade acadêmica e prática da indústria para cada curso que leciona.",
    "professors.mahala.credential.1": "Ph.D. & MBA — UCF",
    "professors.mahala.credential.2": "Les Roches Abu Dhabi",
    "professors.mahala.credential.3": "4 continentes",
    "professors.mahala.credential.4": "Certificada CHIA",
    "professors.mahala.expertise.1": "Finanças & Contabilidade Hoteleira",
    "professors.mahala.expertise.2": "Revenue & Pricing Management",
    "professors.mahala.expertise.3": "Análise de Dados & Visualização",
    "professors.mahala.expertise.4": "Liderança & Desenvolvimento de Carreira",
    "professors.guilherme.name": "Guilherme Gomes",
    "professors.guilherme.role": "Especialista em Real Estate & Operações — Abu Dhabi, UAE",
    "professors.guilherme.bio": "Guilherme Gomes é Corretor de Imóveis certificado (ThinkProp / Abu Dhabi Real Estate Centre) e líder operacional com mais de 8 anos de experiência em funções de atendimento ao cliente, negociações de alto valor e expansão de negócios multi-localidade. Como ex-Head de Operações da AZ Car Rental, escalou a empresa de uma única unidade para uma operação multi-filial em Orlando, Miami, Fort Lauderdale e Tampa — gerenciando mais de 45 veículos, negociando um contrato de subleasing com a Mercedes-Benz e construindo parcerias com mais de 10 marcas de turismo e hospitalidade, incluindo Booking Group e CVC. Com formação em Direito pela Universidade LaSalle (Rio de Janeiro) e certificações em Six Sigma, Supply Chain, Data Analytics e Strategic Thinking, Guilherme combina conhecimento jurídico com excelência operacional. Trilíngue em português, inglês e espanhol, ele agora traz sua expertise para o mercado dos Emirados, ajudando profissionais a navegar investimentos imobiliários, gestão de frotas e oportunidades de negócios na região do Golfo.",
    "professors.guilherme.credential.1": "Corretor Certificado — UAE",
    "professors.guilherme.credential.2": "LL.B. — Univ. LaSalle",
    "professors.guilherme.credential.3": "8+ anos operações",
    "professors.guilherme.credential.4": "Trilíngue: PT/EN/ES",
    "professors.guilherme.expertise.1": "Investimento Imobiliário nos Emirados",
    "professors.guilherme.expertise.2": "Gestão de Frotas & Aluguel de Veículos",
    "professors.guilherme.expertise.3": "Operações & Parcerias de Negócios",
    "professors.guilherme.expertise.4": "Data Analytics & Pensamento Estratégico",
    "professors.expertise": "Áreas de Expertise",
    "professors.courses": "Cursos de",

    // Footer
    "footer.desc": "Capacitando profissionais de hospitalidade, turismo e negócios com educação de classe mundial, habilidades práticas e orientação de carreira internacional.",
    "footer.quickLinks": "Links Rápidos",
    "footer.contact": "Contato",
    "footer.rights": "Todos os direitos reservados.",
    "footer.email": "sdxinvestments@gmail.com",

    // CTA section
    "cta.title": "Pronto para avançar na sua carreira?",
    "cta.subtitle": "Junte-se a centenas de profissionais de hospitalidade que estão transformando suas carreiras com a MahGui Academy.",
    "cta.button": "Comece a aprender hoje",

    // E-book
    "ebook.badge": "Lançamento",
    "ebook.title": "Financial Management for the Hospitality Industry",
    "ebook.authors": "Por Dra. Mahala Geronasso & Dr. Murat Kizildag",
    "ebook.desc": "Um guia completo que conecta teoria financeira com aplicação prática na hospitalidade. Aborda balanços patrimoniais, demonstrações de resultado, orçamentos, decisões de investimento, estrutura de capital e mais — com estudos de caso reais, demonstrações em Excel e frameworks passo a passo.",
    "ebook.pages": "128 páginas",
    "ebook.format": "E-book",
    "ebook.price": "US$ 59",
    "ebook.cta": "Adquirir o E-book",
    "ebook.publisher": "Publicado por Kendall Hunt, 2025",

    // Misc
    "misc.comingSoon": "Funcionalidade em breve",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] || key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
