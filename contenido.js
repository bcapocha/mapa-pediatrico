/*
  El Gran Mapa Pediátrico — contenido del prototipo
  Áreas: Neumonología › Sibilancias del lactante al escolar; Dermatología › Exantemas; Cardiología › Cardiopatías congénitas; Neurología › Las 20 más frecuentes; Metabolismo › Errores congénitos y vías

  Cómo está organizado:
  - REFS: bibliografía verificada en PubMed (PMID y, cuando lo tenemos, DOI). Cada nodo la cita por su clave.
  - NODOS: cada tema o concepto del mapa.
      tipo: "tema" (nodo grande) o "concepto" (nodo chico)
      x, y: posición en el mapa (lienzo de 1200 × 640)
      teoria: secciones { h: título, html: texto }
      diferenciales: { dx, claves (html), nodo opcional } — qué orienta a cada diagnóstico diferencial
      evidencia: claves de REFS
      pico: preguntas { p, i, c, o, respuesta, certeza, refs }
      ateneos: { titulo, fecha, presenta, url }
      causa: "infecciosa" | "alergica" | "inflamatoria" | "cortocircuito" | "cianotica" | "obstructiva" (o una lista) — colorea el punto en mapas con leyenda de causas
      color: color del nodo tema (variable CSS)
      nivel: capa de lectura (1 lo esencial, 2 para profundizar, 3 todo)
      conexiones: ids de otros nodos
      revision: { estado: "borrador" | "revisado", revisor, fecha }

  Todo el texto es un BORRADOR redactado con asistencia de IA: necesita revisión médica antes de usarse.
*/

window.REFS = {
  ralston2014: {
    cita: "Ralston SL, et al. Clinical practice guideline: the diagnosis, management, and prevention of bronchiolitis. Pediatrics. 2014;134:e1474-e1502.",
    tipo: "Guía de práctica clínica (AAP)",
    hallazgo: "Diagnóstico clínico. No recomienda de rutina salbutamol, adrenalina, corticoides, radiografía ni laboratorio. Oxígeno si SatO₂ < 90 %.",
    pmid: "25349312"
  },
  gadomski2014: {
    cita: "Gadomski AM, Scribani MB. Bronchodilators for bronchiolitis. Cochrane Database Syst Rev. 2014.",
    tipo: "Revisión sistemática (Cochrane)",
    hallazgo: "Los broncodilatadores no mejoran la saturación, no reducen internaciones ni la duración de la estadía en lactantes con bronquiolitis.",
    pmid: "24937099"
  },
  paris2018: {
    cita: "Franklin D, et al. A randomized trial of high-flow oxygen therapy in infants with bronchiolitis (PARIS). N Engl J Med. 2018;378:1121-1131.",
    tipo: "Ensayo clínico aleatorizado multicéntrico (n = 1472)",
    hallazgo: "La CNAF redujo la escalada del tratamiento (12 % vs 23 %) frente al oxígeno estándar, sin diferencias en duración de la internación ni del oxígeno.",
    pmid: "29562151"
  },
  plint2009: {
    cita: "Plint AC, et al. Epinephrine and dexamethasone in children with bronchiolitis (CanBEST). N Engl J Med. 2009;360:2079-2089.",
    tipo: "Ensayo clínico aleatorizado factorial (n = 800)",
    hallazgo: "La combinación dexametasona + adrenalina mostró menos internaciones a 7 días, pero el efecto no fue significativo tras ajustar por comparaciones múltiples. Hallazgo exploratorio.",
    pmid: "19439742"
  },
  melody2022: {
    cita: "Hammitt LL, et al. Nirsevimab for prevention of RSV in healthy late-preterm and term infants (MELODY). N Engl J Med. 2022;386:837-846.",
    tipo: "Ensayo clínico aleatorizado controlado con placebo",
    hallazgo: "Eficacia del 74,5 % contra infección respiratoria baja por VSR con atención médica durante 150 días.",
    pmid: "35235726"
  },
  harmonie2023: {
    cita: "Drysdale SB, et al. Nirsevimab for prevention of hospitalizations due to RSV in infants (HARMONIE). N Engl J Med. 2023;389:2425-2435.",
    tipo: "Ensayo clínico aleatorizado pragmático",
    hallazgo: "Internación por IRAB por VSR: 0,3 % con nirsevimab vs 1,5 % sin profilaxis (eficacia 83,2 %).",
    pmid: "38157500"
  },
  matisse2023: {
    cita: "Kampmann B, et al. Bivalent prefusion F vaccine in pregnancy to prevent RSV illness in infants (MATISSE). N Engl J Med. 2023;388:1451-1464.",
    tipo: "Ensayo clínico aleatorizado controlado con placebo",
    hallazgo: "Vacuna materna: eficacia del 81,8 % contra IRAB grave por VSR a los 90 días y del 69,4 % a los 180 días.",
    pmid: "37018474"
  },
  martinez1995: {
    cita: "Martinez FD, et al. Asthma and wheezing in the first six years of life. N Engl J Med. 1995;332:133-138.",
    tipo: "Cohorte prospectiva (Tucson Children's Respiratory Study)",
    hallazgo: "Describe fenotipos: sibilancias transitorias tempranas, persistentes y de inicio tardío. Las transitorias se asocian a menor función pulmonar previa y no a atopia.",
    pmid: "7800004"
  },
  castro2000: {
    cita: "Castro-Rodriguez JA, et al. A clinical index to define risk of asthma in young children with recurrent wheezing. Am J Respir Crit Care Med. 2000;162:1403-1406.",
    tipo: "Cohorte prospectiva (Tucson)",
    hallazgo: "Define el Índice Predictivo de Asma (IPA). Su mayor fortaleza es el valor predictivo negativo.",
    pmid: "11029352"
  },
  brand2008: {
    cita: "Brand PLP, et al. Definition, assessment and treatment of wheezing disorders in preschool children: an evidence-based approach. Eur Respir J. 2008;32:1096-1110.",
    tipo: "Consenso (ERS Task Force)",
    hallazgo: "Propone dos fenotipos clínicos: sibilancias episódicas virales y sibilancias por desencadenantes múltiples.",
    pmid: "18827155",
    doi: "10.1183/09031936.00002108"
  },
  guilbert2006: {
    cita: "Guilbert TW, et al. Long-term inhaled corticosteroids in preschool children at high risk for asthma (PEAK). N Engl J Med. 2006;354:1985-1997.",
    tipo: "Ensayo clínico aleatorizado (n = 285)",
    hallazgo: "Dos años de fluticasona en preescolares con IPA positivo mejoraron el control durante el tratamiento, pero no modificaron los síntomas al año de suspenderlo.",
    pmid: "16687711"
  },
  bisgaard2006: {
    cita: "Bisgaard H, et al. Intermittent inhaled corticosteroids in infants with episodic wheezing. N Engl J Med. 2006;354:1998-2005.",
    tipo: "Ensayo clínico aleatorizado",
    hallazgo: "Budesonida intermitente desde el primer episodio no previno la progresión a sibilancias persistentes.",
    pmid: "16687712"
  },
  zeiger2011: {
    cita: "Zeiger RS, et al. Daily or intermittent budesonide in preschool children with recurrent wheezing (MIST). N Engl J Med. 2011;365:1990-2001.",
    tipo: "Ensayo clínico aleatorizado (n = 278)",
    hallazgo: "Budesonida intermitente en altas dosis no fue inferior a la diaria en bajas dosis para prevenir exacerbaciones, con menor exposición acumulada al corticoide.",
    pmid: "22111718"
  },
  fitzpatrick2016: {
    cita: "Fitzpatrick AM, et al. Individualized therapy for persistent asthma in young children (INFANT). J Allergy Clin Immunol. 2016;138:1608-1618.",
    tipo: "Ensayo cruzado aleatorizado",
    hallazgo: "La respuesta diferencial al CI diario fue más probable en niños con sensibilización a aeroalérgenos o eosinófilos ≥ 300/µL.",
    pmid: "27777180"
  },
  bacharier2015: {
    cita: "Bacharier LB, et al. Early administration of azithromycin and prevention of severe lower respiratory tract illnesses in preschool children (APW-RCT). JAMA. 2015;314:2034-2044.",
    tipo: "Ensayo clínico aleatorizado",
    hallazgo: "Azitromicina al inicio del cuadro redujo la progresión a infección respiratoria baja grave. Preocupa la resistencia antimicrobiana.",
    pmid: "26575060"
  },
  jartti2006: {
    cita: "Jartti T, et al. Evaluation of the efficacy of prednisolone in early wheezing induced by rhinovirus or RSV. Pediatr Infect Dis J. 2006;25:482-488.",
    tipo: "Ensayo clínico controlado (n = 78)",
    hallazgo: "La prednisolona no acortó la internación, pero redujo recaídas a 2 meses en sibilancias por rinovirus (22 % vs 56 %) o con eosinófilos ≥ 0,2 × 10⁹/L.",
    pmid: "16732144",
    doi: "10.1097/01.inf.0000215226.69696.0c"
  },
  panickar2009: {
    cita: "Panickar J, et al. Oral prednisolone for preschool children with acute virus-induced wheezing. N Engl J Med. 2009;360:329-338.",
    tipo: "Ensayo clínico aleatorizado (n = 700)",
    hallazgo: "En preescolares con sibilancias virales que consultan, la prednisolona oral no redujo la duración de la internación.",
    pmid: "19164186"
  },
  reddel2022: {
    cita: "Reddel HK, et al. Global Initiative for Asthma Strategy 2021: executive summary and rationale for key changes. Eur Respir J. 2022;59:2102730.",
    tipo: "Guía / estrategia (GINA)",
    hallazgo: "Fundamenta el abandono del SABA solo y el uso de CI-formoterol a demanda en adolescentes y adultos.",
    pmid: "34667060",
    doi: "10.1183/13993003.02730-2021"
  },
  sobieraj2018: {
    cita: "Sobieraj DM, et al. Association of ICS and LABA as controller and quick relief therapy with exacerbations and symptom control in persistent asthma. JAMA. 2018;319:1485-1496.",
    tipo: "Revisión sistemática y metaanálisis (16 ECA)",
    hallazgo: "SMART redujo exacerbaciones. En 4 a 11 años: RR 0,55 vs CI en dosis más alta y RR 0,38 vs CI-LABA en igual dosis (evidencia limitada, n = 341).",
    pmid: "29554195",
    doi: "10.1001/jama.2018.2769"
  },
  keeney2014: {
    cita: "Keeney GE, et al. Dexamethasone for acute asthma exacerbations in children: a meta-analysis. Pediatrics. 2014;133:493-499.",
    tipo: "Metaanálisis",
    hallazgo: "Sin diferencias en recaídas entre dexametasona y prednisona/prednisolona; menos vómitos con dexametasona.",
    pmid: "24515516"
  },
  powell2013: {
    cita: "Powell C, et al. Inhaled magnesium sulfate in the treatment of acute asthma in children (MAGNETIC). Lancet Respir Med. 2013;1:301-308.",
    tipo: "Ensayo clínico aleatorizado (n = 508)",
    hallazgo: "El magnesio nebulizado agregado a salbutamol e ipratropio mejoró levemente el puntaje de gravedad a los 60 minutos, sobre todo en las crisis más graves.",
    pmid: "24429155"
  },
  henderson2008: {
    cita: "Henderson J, et al. Associations of wheezing phenotypes in the first 6 years of life with atopy, lung function and airway responsiveness in mid-childhood. Thorax. 2008;63:974-980.",
    tipo: "Cohorte de nacimiento (ALSPAC, n = 6265)",
    hallazgo: "Seis trayectorias de sibilancias. Las de inicio intermedio (18 meses) se asociaron con más atopia (OR 8,36; IC 95 % 5,2–13,4) e hiperreactividad a metacolina; las tempranas transitorias, no con atopia.",
    pmid: "18678704",
    doi: "10.1136/thx.2007.093187"
  },
  jackson2008: {
    cita: "Jackson DJ, et al. Wheezing rhinovirus illnesses in early life predict asthma development in high-risk children (COAST). Am J Respir Crit Care Med. 2008;178:667-672.",
    tipo: "Cohorte prospectiva de alto riesgo (n = 259)",
    hallazgo: "Sibilancias por rinovirus antes de los 3 años: OR 9,8 de asma a los 6 años (VSR: OR 2,6). El 87 % (26/30) de quienes sibilaron con rinovirus en el tercer año tenía asma a los 6.",
    pmid: "18565953",
    doi: "10.1164/rccm.200802-309OC"
  },
  makrinioti2024: {
    cita: "Makrinioti H, et al. European Respiratory Society statement on preschool wheezing disorders: updated definitions, knowledge gaps and proposed future research directions. Eur Respir J. 2024;64:2400624.",
    tipo: "Declaración (ERS Task Force)",
    hallazgo: "Define sibilancias del preescolar como edad de 0 a menos de 6 años, más de un episodio y al menos uno confirmado. Los fenotipos episódico/desencadenantes múltiples no predicen bien la respuesta al tratamiento; propone buscar rasgos tratables.",
    pmid: "38843917",
    doi: "10.1183/13993003.00624-2024"
  },
  lee2024: {
    cita: "Lee B, et al. Efficacy of oral corticosteroids for acute preschool wheeze: a systematic review and individual participant data meta-analysis. Lancet Respir Med. 2024;12:444-456.",
    tipo: "Metaanálisis de datos individuales (7 ECA, n = 1728)",
    hallazgo: "El corticoide oral mejoró el puntaje de sibilancias a las 4 h (no a las 12 h) y acortó la internación 3,2 h; 4,5 h en quienes tenían antecedentes de sibilancias o asma. Señal imprecisa de más vómitos (OR 2,27; IC 0,87–5,88).",
    pmid: "38527486",
    doi: "10.1016/S2213-2600(24)00041-9"
  },
  fisk2007: {
    cita: "Fisk WJ, Lei-Gomez Q, Mendell MJ. Meta-analyses of the associations of respiratory health effects with dampness and mold in homes. Indoor Air. 2007;17:284-296.",
    tipo: "Metaanálisis de estudios observacionales",
    hallazgo: "La humedad y el moho en el hogar se asocian con aumentos de alrededor del 30 al 50 % en síntomas respiratorios y desenlaces relacionados con asma.",
    pmid: "17661925"
  },
  stanojevic2022: {
    cita: "Stanojevic S, et al. ERS/ATS technical standard on interpretive strategies for routine lung function tests. Eur Respir J. 2022;60:2101499.",
    tipo: "Estándar técnico (ERS/ATS)",
    hallazgo: "Recomienda interpretar con límites inferiores de normalidad (puntaje z) y define respuesta broncodilatadora como un cambio del VEF₁ o la CVF mayor al 10 % del valor predicho.",
    pmid: "34949706",
    doi: "10.1183/13993003.01499-2021"
  },
  liu2007: {
    cita: "Liu AH, et al. Development and cross-sectional validation of the Childhood Asthma Control Test. J Allergy Clin Immunol. 2007;119:817-825.",
    tipo: "Estudio de validación",
    hallazgo: "El C-ACT (4 a 11 años, puntaje 0–27) discrimina el control del asma; 19 o menos indica asma no bien controlada (sensibilidad 68 %, especificidad 74 %).",
    pmid: "17353040",
    doi: "10.1016/j.jaci.2006.12.662"
  },
  bisgaard2006chest: {
    cita: "Bisgaard H, et al. Budesonide/formoterol maintenance plus reliever therapy: a new strategy in pediatric asthma. Chest. 2006;130:1733-1743.",
    tipo: "Ensayo clínico aleatorizado (niños de 4 a 11 años)",
    hallazgo: "MART con budesonida-formoterol redujo las crisis que requirieron intervención médica un 70 a 79 % frente a budesonida en dosis más alta o budesonida-formoterol fijo, y la talla creció 1,0 cm más por año que con budesonida fija.",
    pmid: "17166990",
    doi: "10.1378/chest.130.6.1733"
  },
  obyrne2018: {
    cita: "O'Byrne PM, et al. Inhaled combined budesonide-formoterol as needed in mild asthma (SYGMA 1). N Engl J Med. 2018;378:1865-1876.",
    tipo: "Ensayo clínico aleatorizado (12 años o más)",
    hallazgo: "Budesonida-formoterol a demanda redujo las crisis graves frente a terbutalina a demanda (RR 0,36) y las igualó con budesonida diaria, con el 17 % de la dosis de corticoide.",
    pmid: "29768149",
    doi: "10.1056/NEJMoa1715274"
  },
  kelly2012: {
    cita: "Kelly HW, et al. Effect of inhaled glucocorticoids in childhood on adult height (CAMP). N Engl J Med. 2012;367:904-912.",
    tipo: "Seguimiento de ensayo clínico aleatorizado",
    hallazgo: "La talla adulta fue 1,2 cm menor con budesonida que con placebo. La reducción apareció en los primeros 2 años y no fue progresiva ni acumulativa.",
    pmid: "22938716",
    doi: "10.1056/NEJMoa1203229"
  },
  lanier2009: {
    cita: "Lanier B, et al. Omalizumab for the treatment of exacerbations in children with inadequately controlled allergic (IgE-mediated) asthma. J Allergy Clin Immunol. 2009;124:1210-1216.",
    tipo: "Ensayo clínico aleatorizado (6 a 11 años, n = 627)",
    hallazgo: "Omalizumab redujo las crisis clínicamente significativas un 43 % en 52 semanas frente a placebo en asma alérgica no controlada con dosis medias o altas de CI.",
    pmid: "19910033",
    doi: "10.1016/j.jaci.2009.09.021"
  },
  bacharier2021: {
    cita: "Bacharier LB, et al. Dupilumab in children with uncontrolled moderate-to-severe asthma (VOYAGE). N Engl J Med. 2021;385:2230-2240.",
    tipo: "Ensayo clínico aleatorizado (6 a 11 años)",
    hallazgo: "En el fenotipo tipo 2, las crisis graves bajaron de 0,75 a 0,31 por año (reducción relativa 59 %) y el VEF₁ mejoró 5,2 puntos porcentuales más que con placebo.",
    pmid: "34879449",
    doi: "10.1056/NEJMoa2106567"
  },
  jackson2022: {
    cita: "Jackson DJ, et al. Mepolizumab for urban children with exacerbation-prone eosinophilic asthma in the USA (MUPPITS-2). Lancet. 2022;400:502-511.",
    tipo: "Ensayo clínico aleatorizado (6 a 17 años, n = 290)",
    hallazgo: "Mepolizumab redujo las crisis de 1,30 a 0,96 por año (razón 0,73) en niños con asma eosinofílica propensa a crisis.",
    pmid: "35964610",
    doi: "10.1016/S0140-6736(22)01198-9"
  },
  griffiths2013: {
    cita: "Griffiths B, Ducharme FM. Combined inhaled anticholinergics and short-acting beta2-agonists for initial treatment of acute asthma in children. Cochrane Database Syst Rev. 2013;CD000060.",
    tipo: "Revisión sistemática (Cochrane, 20 ECA, n = 2697)",
    hallazgo: "Agregar ipratropio al salbutamol redujo la internación (RR 0,73; IC 95 % 0,63–0,85): de 23 a 17 cada 100 chicos, NNT 16. Evidencia de alta calidad, sobre todo en crisis moderadas y graves.",
    pmid: "23966133",
    doi: "10.1002/14651858.CD000060.pub2"
  },
  griffiths2016: {
    cita: "Griffiths B, Kew KM. Intravenous magnesium sulfate for treating children with acute asthma in the emergency department. Cochrane Database Syst Rev. 2016;CD011050.",
    tipo: "Revisión sistemática (Cochrane)",
    hallazgo: "El sulfato de magnesio IV redujo la internación (OR 0,32; IC 95 % 0,14–0,74) en crisis moderadas a graves, con evidencia muy limitada: 3 estudios y 115 chicos.",
    pmid: "27126744",
    doi: "10.1002/14651858.CD011050.pub2"
  },
  gina2026r: {
    cita: "Global Initiative for Asthma. Asthma management and prevention for adults, adolescents and children 6–11 years. A summary guide for healthcare providers. GINA; 2026.",
    tipo: "Guía resumida (GINA 2026, 6 años en adelante)",
    hallazgo: "Resumen oficial de la estrategia GINA 2026: diagnóstico, evaluación del control y del riesgo, tratamiento por pasos para 6–11 años y para 12 años o más, crisis y tablas de dosis.",
    url: "https://ginasthma.org/reports/"
  },
  gina2026: {
    cita: "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention, 2026. Capítulos 10 a 12 (niños de 5 años o menos).",
    tipo: "Guía / estrategia (GINA)",
    hallazgo: "Diagnóstico de asma en menores de 6 años con tres elementos: patrón compatible, sin causa alternativa probable y respuesta documentada al tratamiento. Con uno o dos, asma sospechada.",
    url: "https://ginasthma.org/2026-gina-strategy-report/"
  },

  /* ───── Dermatología › Exantemas ───── */
  moss2017: {
    cita: "Moss WJ. Measles. Lancet. 2017;390:2490-2502.",
    tipo: "Revisión (seminario)",
    hallazgo: "Fiebre, tos, coriza y conjuntivitis seguidas del exantema característico. La neumonía explica la mayor parte de la morbimortalidad. El manejo incluye vitamina A; la prevención es la vacuna en dos dosis.",
    pmid: "28673424", doi: "10.1016/S0140-6736(17)31463-0"
  },
  huiming2005: {
    cita: "Huiming Y, Chaomin W, Meng M. Vitamin A for treating measles in children. Cochrane Database Syst Rev. 2005;(4):CD001479.",
    tipo: "Revisión sistemática (Cochrane)",
    hallazgo: "En conjunto, sin reducción significativa de mortalidad (RR 0,70; IC 0,42–1,15). Dos dosis de 200.000 UI en días consecutivos redujeron la mortalidad en menores de 2 años (RR 0,18) y la mortalidad por neumonía (RR 0,33). Una sola dosis no mostró beneficio.",
    pmid: "16235283", doi: "10.1002/14651858.CD001479.pub3"
  },
  zerr2005: {
    cita: "Zerr DM, et al. A population-based study of primary human herpesvirus 6 infection. N Engl J Med. 2005;352:768-76.",
    tipo: "Cohorte prospectiva",
    hallazgo: "277 niños seguidos desde el nacimiento: 40 % se infectó con HHV-6 al año y 77 % a los 2 años (pico entre 9 y 21 meses). El 93 % tuvo síntomas; la roséola típica apareció solo en una minoría y no hubo convulsiones.",
    pmid: "15728809", doi: "10.1056/NEJMoa042207"
  },
  young2004: {
    cita: "Young NS, Brown KE. Parvovirus B19. N Engl J Med. 2004;350:586-97.",
    tipo: "Revisión",
    hallazgo: "Revisión clásica del parvovirus B19: eritema infeccioso, artropatía, crisis aplásica transitoria en anemias hemolíticas, anemia crónica en inmunocomprometidos e hidrops fetal.",
    pmid: "14762186", doi: "10.1056/NEJMra030840"
  },
  pazbailey2024: {
    cita: "Paz-Bailey G, Adams LE, Deen J, Anderson KB, Katzelnick LC. Dengue. Lancet. 2024;403:667-682.",
    tipo: "Revisión (seminario)",
    hallazgo: "Actualización sobre virus, respuesta inmune, progresión clínica, vacunas y control del vector en un contexto de expansión geográfica del dengue.",
    pmid: "38280388", doi: "10.1016/S0140-6736(23)02576-X"
  },
  chovel2013: {
    cita: "Chovel-Sella A, et al. Incidence of rash after amoxicillin treatment in children with infectious mononucleosis. Pediatrics. 2013;131:e1424-7.",
    tipo: "Estudio retrospectivo multicéntrico",
    hallazgo: "Con amoxicilina, el exantema apareció en 29,5 % (IC 18,5–42,6 %), muy lejos del 90 % descrito con ampicilina. Con cualquier antibiótico 32,9 % vs 23,1 % sin antibiótico (diferencia no significativa).",
    pmid: "23589810", doi: "10.1542/peds.2012-1575"
  },
  mill2016: {
    cita: "Mill C, et al. Assessing the diagnostic properties of a graded oral provocation challenge for the diagnosis of immediate and nonimmediate reactions to amoxicillin in children. JAMA Pediatr. 2016;170:e160033.",
    tipo: "Cohorte prospectiva",
    hallazgo: "818 niños derivados por sospecha de alergia a amoxicilina: 94,1 % toleró la provocación oral; 2,1 % tuvo reacciones inmediatas leves y 3,8 % no inmediatas. Valor predictivo negativo 89,1 %.",
    pmid: "27043788", doi: "10.1001/jamapediatrics.2016.0033"
  },
  shulman2012: {
    cita: "Shulman ST, et al. Clinical practice guideline for the diagnosis and management of group A streptococcal pharyngitis: 2012 update by the IDSA. Clin Infect Dis. 2012;55:e86-102.",
    tipo: "Guía de práctica clínica (IDSA)",
    hallazgo: "Penicilina o amoxicilina siguen siendo de elección; en alérgicos se suman opciones como cefalosporinas de primera generación (si no fue anafilaxia), clindamicina o macrólidos.",
    pmid: "22965026", doi: "10.1093/cid/cis629"
  },
  mccrindle2017: {
    cita: "McCrindle BW, et al. Diagnosis, treatment, and long-term management of Kawasaki disease: a scientific statement from the American Heart Association. Circulation. 2017;135:e927-e999.",
    tipo: "Guía de práctica clínica (AHA)",
    hallazgo: "Criterios clásicos, algoritmo para la enfermedad incompleta, IGIV 2 g/kg con AAS, intensificación en pacientes de alto riesgo y seguimiento según el compromiso coronario.",
    pmid: "28356445", doi: "10.1161/CIR.0000000000000484"
  },
  kobayashi2012: {
    cita: "Kobayashi T, et al. Efficacy of immunoglobulin plus prednisolone for prevention of coronary artery abnormalities in severe Kawasaki disease (RAISE study). Lancet. 2012;379:1613-20.",
    tipo: "Ensayo clínico aleatorizado",
    hallazgo: "En pacientes japoneses de alto riesgo, sumar prednisolona a IGIV redujo las anomalías coronarias: 3 % vs 23 % (diferencia de riesgo 0,20).",
    pmid: "22405251", doi: "10.1016/S0140-6736(11)61930-2"
  },
  son2021: {
    cita: "Son MBF, et al. Multisystem inflammatory syndrome in children — initial therapy and outcomes. N Engl J Med. 2021;385:23-34.",
    tipo: "Cohorte (vigilancia, emparejamiento por puntaje de propensión)",
    hallazgo: "IGIV más glucocorticoides se asoció con menos disfunción cardiovascular nueva o persistente que IGIV sola; menos disfunción ventricular (8 % vs 17 %) y menos necesidad de terapia adyuvante (34 % vs 70 %).",
    pmid: "34133855", doi: "10.1056/NEJMoa2102605"
  },
  kardaun2013: {
    cita: "Kardaun SH, et al. Drug reaction with eosinophilia and systemic symptoms (DRESS): an original multisystem adverse drug reaction. Results from the prospective RegiSCAR study. Br J Dermatol. 2013;169:1071-80.",
    tipo: "Cohorte prospectiva multicéntrica",
    hallazgo: "Eosinofilia 95 %, compromiso visceral 91 %, fiebre 90 %, linfocitos atípicos 67 %. Antiepilépticos en 35 % de los casos. Mediana de 22 días entre el inicio del fármaco y la reacción.",
    pmid: "23855313", doi: "10.1111/bjd.12501"
  },
  klassen2005: {
    cita: "Klassen TP, Hartling L, Wiebe N, Belseck EM. Acyclovir for treating varicella in otherwise healthy children and adolescents. Cochrane Database Syst Rev. 2005;(4):CD002980.",
    tipo: "Revisión sistemática (Cochrane)",
    hallazgo: "El aciclovir redujo la fiebre en 1,1 días y el número máximo de lesiones, sin diferencias en complicaciones. La importancia clínica en niños sanos sigue siendo incierta.",
    pmid: "16235308", doi: "10.1002/14651858.CD002980.pub3"
  },
  mathes2013: {
    cita: "Mathes EF, et al. «Eczema coxsackium» and unusual cutaneous findings in an enterovirus outbreak. Pediatrics. 2013;132:e149-57.",
    tipo: "Serie de casos multicéntrica",
    hallazgo: "Brote por coxsackie A6: 99 % con erupción vesiculoampollar y erosiva; en 55 % acentuada sobre zonas de dermatitis atópica (eczema coxsackium). Puede confundirse con eccema herpético, impétigo ampollar o vasculitis.",
    pmid: "23776120", doi: "10.1542/peds.2012-3175"
  },
  leung2018: {
    cita: "Leung AKC, Barankin B, Leong KF. Staphylococcal-scalded skin syndrome: evaluation, diagnosis, and management. World J Pediatr. 2018;14:116-120.",
    tipo: "Revisión",
    hallazgo: "Diagnóstico clínico: eritrodermia dolorosa, ampollas, Nikolsky positivo, costras periorificiales y sin compromiso de mucosas. Antibiótico antiestafilocócico IV empírico; vancomicina si no mejora o hay alta prevalencia de SAMR.",
    pmid: "29508362", doi: "10.1007/s12519-018-0150-x"
  },
  ramien2022: {
    cita: "Ramien ML. Stevens-Johnson syndrome in children. Curr Opin Pediatr. 2022;34:341-348.",
    tipo: "Revisión",
    hallazgo: "En niños, el SJS es más a menudo desencadenado por infecciones que por fármacos. Propone distinguir RIME (erupción mucocutánea reactiva a infección) de la necrólisis epidérmica por fármacos.",
    pmid: "35836393", doi: "10.1097/MOP.0000000000001146"
  },
  thompson2006: {
    cita: "Thompson MJ, et al. Clinical recognition of meningococcal disease in children and adolescents. Lancet. 2006;367:397-403.",
    tipo: "Estudio observacional",
    hallazgo: "El exantema hemorrágico, la meningitis y la alteración de conciencia aparecen tarde (mediana 13–22 h). El 72 % tuvo antes signos de sepsis: dolor en piernas, manos y pies fríos, color de piel anormal (mediana 8 h).",
    pmid: "16458763", doi: "10.1016/S0140-6736(06)67932-4"
  },
  brogan2000: {
    cita: "Brogan PA, Raffles A. The management of fever and petechiae: making sense of rash decisions. Arch Dis Child. 2000;83:506-7.",
    tipo: "Auditoría retrospectiva y prospectiva",
    hallazgo: "De 55 niños con fiebre y petequias, 9 % tenía sepsis bacteriana. Propone los criterios ILL: irritabilidad, letargo y relleno capilar lento.",
    pmid: "11087287", doi: "10.1136/adc.83.6.506"
  },
  ozen2019: {
    cita: "Ozen S, et al. European consensus-based recommendations for diagnosis and treatment of immunoglobulin A vasculitis — the SHARE initiative. Rheumatology (Oxford). 2019;58:1607-1616.",
    tipo: "Consenso de expertos (SHARE)",
    hallazgo: "7 recomendaciones diagnósticas y 19 terapéuticas: analgesia, indicaciones no renales de corticoides, seguimiento renal estructurado y tratamiento escalonado de la nefritis.",
    pmid: "30879080", doi: "10.1093/rheumatology/kez041"
  },
  mortureux1998: {
    cita: "Mortureux P, et al. Acute urticaria in infancy and early childhood: a prospective study. Arch Dermatol. 1998;134:319-23.",
    tipo: "Estudio prospectivo",
    hallazgo: "Causa identificada en 91 %: infección (con o sin fármaco) en 81 % y alimentos en 11 %. En general no hace falta laboratorio. El 20–30 % evoluciona a urticaria crónica o recurrente.",
    pmid: "9521030", doi: "10.1001/archderm.134.3.319"
  },
  cardona2020: {
    cita: "Cardona V, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J. 2020;13:100472.",
    tipo: "Guía (WAO)",
    hallazgo: "La adrenalina intramuscular es el tratamiento de primera línea. Tras un episodio: derivación al especialista, educación y autoinyector.",
    pmid: "33204386", doi: "10.1016/j.waojou.2020.100472"
  },
  stricker1992: {
    cita: "Stricker BH, et al. Serum sickness-like reactions to cefaclor. J Clin Epidemiol. 1992;45:1177-84.",
    tipo: "Análisis de notificaciones de farmacovigilancia",
    hallazgo: "En menores de 15 años, el riesgo de reacción tipo enfermedad del suero con cefaclor fue unas 14 veces mayor que con amoxicilina.",
    pmid: "1474414", doi: "10.1016/0895-4356(92)90158-j"
  },
  lerch2018: {
    cita: "Lerch M, Mainetti C, Terziroli Beretta-Piccoli B, Harr T. Current perspectives on erythema multiforme. Clin Rev Allergy Immunol. 2018;54:177-184.",
    tipo: "Revisión",
    hallazgo: "Lesiones en diana de predominio acral, curso autolimitado. El herpes simple es la causa más frecuente; en niños también Mycoplasma pneumoniae. Los fármacos son la segunda causa identificada.",
    pmid: "29352387", doi: "10.1007/s12016-017-8667-7"
  },
  canavan2015: {
    cita: "Canavan TN, et al. Mycoplasma pneumoniae-induced rash and mucositis as a syndrome distinct from Stevens-Johnson syndrome and erythema multiforme: a systematic review. J Am Acad Dermatol. 2015;72:239-45.",
    tipo: "Revisión sistemática",
    hallazgo: "Mucositis oral 94 %, ocular 82 % y urogenital 63 %; piel ausente (34 %) o escasa (47 %). Edad media 11,9 años. Recurrencia 8 %, mortalidad 3 %. Propone el nombre MIRM.",
    pmid: "25592340", doi: "10.1016/j.jaad.2014.06.026"
  },
  mahle2009: {
    cita: "Mahle WT, et al. Role of pulse oximetry in examining newborns for congenital heart disease: a scientific statement from the AHA and AAP. Circulation. 2009;120:447-58.",
    tipo: "Declaración científica (AHA/AAP)",
    hallazgo: "Propone la oximetría de pulso en recién nacidos asintomáticos después de las 24 horas de vida para detectar cardiopatías congénitas críticas que el examen físico no encuentra.",
    pmid: "19581492", doi: "10.1161/CIRCULATIONAHA.109.192576"
  },
  martin2020: {
    cita: "Martin GR, et al. Updated strategies for pulse oximetry screening for critical congenital heart disease. Pediatrics. 2020;146:e20191650.",
    tipo: "Recomendación de panel de expertos",
    hallazgo: "Para pasar, la saturación tiene que ser de 95 % o más en la mano derecha y en un pie (antes alcanzaba con uno de los dos), con una diferencia de 3 % o menos. Si no pasa ni falla, se repite una sola vez.",
    pmid: "32499387", doi: "10.1542/peds.2019-1650"
  },
  plana2018: {
    cita: "Plana MN, et al. Pulse oximetry screening for critical congenital heart defects. Cochrane Database Syst Rev. 2018;3:CD011912.",
    tipo: "Revisión sistemática (Cochrane, 19 estudios, n = 436.758)",
    hallazgo: "Sensibilidad 76,3 % y especificidad 99,9 % para cardiopatías críticas. Los falsos positivos bajan si la prueba se hace después de las 24 horas.",
    pmid: "29494750", doi: "10.1002/14651858.CD011912.pub2"
  },
  hoffman2002: {
    cita: "Hoffman JIE, Kaplan S. The incidence of congenital heart disease. J Am Coll Cardiol. 2002;39:1890-900.",
    tipo: "Revisión de estudios poblacionales",
    hallazgo: "Las formas moderadas y graves aparecen en unos 6 de cada 1000 nacidos vivos; con la válvula aórtica bicúspide, 19 de cada 1000; con las CIV musculares pequeñas y otras lesiones triviales, hasta 75 de cada 1000.",
    pmid: "12084585", doi: "10.1016/s0735-1097(02)01886-7"
  },
  vanderlinde2011: {
    cita: "van der Linde D, et al. Birth prevalence of congenital heart disease worldwide: a systematic review and meta-analysis. J Am Coll Cardiol. 2011;58:2241-7.",
    tipo: "Revisión sistemática y metanálisis",
    hallazgo: "Prevalencia al nacer de 9,1 por 1000 nacidos vivos en el período 1995-2010, en aumento respecto de las décadas previas; la CIV es la más frecuente.",
    pmid: "22078432", doi: "10.1016/j.jacc.2011.08.025"
  },
  frank2011: {
    cita: "Frank JE, Jacobe KM. Evaluation and management of heart murmurs in children. Am Fam Physician. 2011;84:793-800.",
    tipo: "Revisión",
    hallazgo: "La mayoría de los soplos en niños son inocentes. Sugieren patología: soplo holosistólico o diastólico, intensidad de 3/6 o más, calidad áspera, frémito, clic, segundo ruido anormal, y que se intensifique al ponerse de pie.",
    pmid: "22010618"
  },
  lewis1981: {
    cita: "Lewis AB, et al. Side effects of therapy with prostaglandin E1 in infants with critical congenital heart disease. Circulation. 1981;64:893-8.",
    tipo: "Registro multicéntrico (n = 492)",
    hallazgo: "Efectos adversos cardiovasculares 18 %, del sistema nervioso central 16 % y depresión respiratoria 12 % (42 % en menores de 2 kg). Hay que estar preparado para asistir la ventilación.",
    pmid: "7285304", doi: "10.1161/01.cir.64.5.893"
  },
  kantor2013: {
    cita: "Kantor PF, et al. Presentation, diagnosis, and medical management of heart failure in children: Canadian Cardiovascular Society guidelines. Can J Cardiol. 2013;29:1535-52.",
    tipo: "Guía de práctica clínica",
    hallazgo: "En lactantes la insuficiencia cardíaca se presenta como taquipnea, sudoración y cansancio al comer, y poco aumento de peso. Los diuréticos alivian la congestión; los IECA y betabloqueantes, en disfunción ventricular.",
    pmid: "24267800", doi: "10.1016/j.cjca.2013.08.008"
  },
  penny2011: {
    cita: "Penny DJ, Vick GW. Ventricular septal defect. Lancet. 2011;377:1103-12.",
    tipo: "Revisión",
    hallazgo: "Es la cardiopatía congénita más frecuente. Muchas CIV musculares y perimembranosas pequeñas cierran solas; las grandes dan insuficiencia cardíaca en los primeros meses y requieren cierre antes de que se instale la hipertensión pulmonar.",
    pmid: "21349577", doi: "10.1016/S0140-6736(10)61339-6"
  },
  geva2014: {
    cita: "Geva T, Martins JD, Wald RM. Atrial septal defects. Lancet. 2014;383:1921-32.",
    tipo: "Revisión",
    hallazgo: "Suele ser asintomática en la infancia. Desdoblamiento fijo del segundo ruido y soplo sistólico pulmonar por hiperflujo. Las de tipo ostium secundum con bordes adecuados se cierran por cateterismo.",
    pmid: "24725467", doi: "10.1016/S0140-6736(13)62145-5"
  },
  schneider2006: {
    cita: "Schneider DJ, Moore JW. Patent ductus arteriosus. Circulation. 2006;114:1873-82.",
    tipo: "Revisión",
    hallazgo: "En el recién nacido de término, el ductus persistente no cierra espontáneamente. Soplo continuo en maquinaria infraclavicular izquierda y pulsos saltones. Se cierra por cateterismo por el riesgo de endarteritis e insuficiencia cardíaca.",
    pmid: "17060397", doi: "10.1161/CIRCULATIONAHA.105.592063"
  },
  calabro2006: {
    cita: "Calabrò R, Limongelli G. Complete atrioventricular canal. Orphanet J Rare Dis. 2006;1:8.",
    tipo: "Revisión",
    hallazgo: "Fuerte asociación con síndrome de Down. Da insuficiencia cardíaca en la lactancia y la hipertensión pulmonar se vuelve irreversible: la cirugía se hace entre el tercer y el sexto mes.",
    pmid: "16722604", doi: "10.1186/1750-1172-1-8"
  },
  apitz2009: {
    cita: "Apitz C, Webb GD, Redington AN. Tetralogy of Fallot. Lancet. 2009;374:1462-71.",
    tipo: "Revisión",
    hallazgo: "Es la cardiopatía cianótica más frecuente. La reparación completa en el primer año tiene excelente supervivencia; en la adultez preocupan la insuficiencia pulmonar, las arritmias y la muerte súbita.",
    pmid: "19683809", doi: "10.1016/S0140-6736(09)60657-7"
  },
  martins2008: {
    cita: "Martins P, Castela E. Transposition of the great arteries. Orphanet J Rare Dis. 2008;3:27.",
    tipo: "Revisión",
    hallazgo: "Cianosis en las primeras horas de vida, sin soplo y con radiografía casi normal. Necesita mezcla: prostaglandina y, si no alcanza, atrioseptostomía de Rashkind. La corrección es el switch arterial en las primeras semanas.",
    pmid: "18851735", doi: "10.1186/1750-1172-3-27"
  },
  torok2015: {
    cita: "Torok RD, et al. Coarctation of the aorta: management from infancy to adulthood. World J Cardiol. 2015;7:765-75.",
    tipo: "Revisión",
    hallazgo: "La coartación crítica se manifiesta como shock cuando cierra el ductus. En niños mayores, hipertensión en los brazos y pulsos femorales débiles o retrasados. Riesgo de recoartación e hipertensión de por vida.",
    pmid: "26635924", doi: "10.4330/wjc.v7.i11.765"
  },
  ohye2010: {
    cita: "Ohye RG, et al. Comparison of shunt types in the Norwood procedure for single-ventricle lesions. N Engl J Med. 2010;362:1980-92.",
    tipo: "Ensayo clínico aleatorizado multicéntrico (SVR, n = 555)",
    hallazgo: "Supervivencia libre de trasplante a los 12 meses: 74 % con el conducto ventrículo derecho-arteria pulmonar vs 64 % con el shunt de Blalock-Taussig modificado. Después de los 12 meses la diferencia no fue significativa.",
    pmid: "20505177", doi: "10.1056/NEJMoa0912461"
  },
  rychik2019: {
    cita: "Rychik J, et al. Evaluation and management of the child and adult with Fontan circulation: a scientific statement from the AHA. Circulation. 2019;140:e234-e284.",
    tipo: "Declaración científica (AHA)",
    hallazgo: "La circulación de Fontan afecta a casi todos los órganos: hígado, linfáticos (enteropatía perdedora de proteínas, bronquitis plástica), arritmias, trombosis y neurodesarrollo. Propone un seguimiento estructurado de por vida.",
    pmid: "31256636", doi: "10.1161/CIR.0000000000000696"
  },
  abman2015: {
    cita: "Abman SH, et al. Pediatric pulmonary hypertension: guidelines from the AHA and ATS. Circulation. 2015;132:2037-99.",
    tipo: "Guía de práctica clínica (AHA/ATS)",
    hallazgo: "Los cortocircuitos grandes no reparados llevan a enfermedad vascular pulmonar. Con resistencia pulmonar alta e inversión del cortocircuito (Eisenmenger), el cierre ya no está indicado.",
    pmid: "26534956", doi: "10.1161/CIR.0000000000000329"
  },
  bull2022: {
    cita: "Bull MJ, et al. Health supervision for children and adolescents with Down syndrome. Pediatrics. 2022;149:e2022057010.",
    tipo: "Informe clínico (AAP)",
    hallazgo: "Cerca de la mitad tiene cardiopatía congénita (canal AV la más típica). Ecocardiograma a todos los recién nacidos, aunque el examen y el estudio prenatal sean normales.",
    pmid: "35490285", doi: "10.1542/peds.2022-057010"
  },
  mcdonald2015: {
    cita: "McDonald-McGinn DM, et al. 22q11.2 deletion syndrome. Nat Rev Dis Primers. 2015;1:15071.",
    tipo: "Revisión",
    hallazgo: "La microdeleción más frecuente (1 en 1000 fetos). Tríada clásica: cardiopatía, hipocalcemia por hipoparatiroidismo e inmunodeficiencia, con anomalías del paladar y problemas del desarrollo y psiquiátricos.",
    pmid: "27189754", doi: "10.1038/nrdp.2015.71"
  },
  wilson2021: {
    cita: "Wilson WR, et al. Prevention of viridans group streptococcal infective endocarditis: a scientific statement from the AHA. Circulation. 2021;143:e963-e978.",
    tipo: "Declaración científica (AHA)",
    hallazgo: "Mantiene la profilaxis antibiótica solo para procedimientos dentales en pacientes de mayor riesgo: válvula protésica, endocarditis previa, cardiopatía cianótica no reparada o con cortocircuitos residuales, y los primeros 6 meses tras reparar con material protésico.",
    pmid: "33853363", doi: "10.1161/CIR.0000000000000969"
  },
  aap2011: {
    cita: "Subcommittee on Febrile Seizures, AAP. Neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011;127:389-94.",
    tipo: "Guía de práctica clínica (AAP)",
    hallazgo: "Después de una convulsión febril simple, buscar la causa de la fiebre. No se recomiendan de rutina EEG, laboratorio ni neuroimágenes. Punción lumbar si hay signos de meningitis; es opcional entre los 6 y 12 meses con vacunas incompletas o con antibiótico previo.",
    pmid: "21285335", doi: "10.1542/peds.2010-3318"
  },
  offringa2021: {
    cita: "Offringa M, et al. Prophylactic drug management for febrile seizures in children. Cochrane Database Syst Rev. 2021;6:CD003031.",
    tipo: "Revisión sistemática (Cochrane, 32 ensayos, n = 4431)",
    hallazgo: "Las convulsiones febriles afectan al 2-4 % de los niños y recurren en el 30 %. El diazepam intermitente reduce algo las recurrencias, pero ningún fármaco mejora el pronóstico a largo plazo; los antitérmicos no previenen la recurrencia.",
    pmid: "34131913", doi: "10.1002/14651858.CD003031.pub4"
  },
  glauser2016: {
    cita: "Glauser T, et al. Evidence-based guideline: treatment of convulsive status epilepticus in children and adults. Epilepsy Curr. 2016;16:48-61.",
    tipo: "Guía de práctica clínica (American Epilepsy Society)",
    hallazgo: "Algoritmo por tiempos: benzodiacepina como primera línea a los 5 minutos (midazolam IM, lorazepam o diazepam IV); segunda línea a los 20 minutos (fosfenitoína, valproato o levetiracetam); tercera línea a los 40 minutos.",
    pmid: "26900382", doi: "10.5698/1535-7597-16.1.48"
  },
  dalziel2019: {
    cita: "Dalziel SR, et al. Levetiracetam versus phenytoin for second-line treatment of convulsive status epilepticus in children (ConSEPT). Lancet. 2019;393:2135-45.",
    tipo: "Ensayo clínico aleatorizado multicéntrico (n = 233)",
    hallazgo: "El cese de la convulsión a los 5 minutos de la infusión fue de 60 % con fenitoína y 50 % con levetiracetam, sin diferencia significativa. El levetiracetam no fue superior.",
    pmid: "31005386", doi: "10.1016/S0140-6736(19)30722-6"
  },
  kapur2019: {
    cita: "Kapur J, et al. Randomized trial of three anticonvulsant medications for status epilepticus (ESETT). N Engl J Med. 2019;381:2103-13.",
    tipo: "Ensayo clínico aleatorizado (n = 384, niños y adultos)",
    hallazgo: "En estado de mal refractario a benzodiacepinas, levetiracetam (47 %), fosfenitoína (45 %) y valproato (46 %) controlaron la crisis con mejoría de la conciencia en proporciones similares, con efectos adversos parecidos.",
    pmid: "31774955", doi: "10.1056/NEJMoa1905795"
  },
  hirtz2000: {
    cita: "Hirtz D, et al. Practice parameter: evaluating a first nonfebrile seizure in children. Neurology. 2000;55:616-23.",
    tipo: "Guía de práctica clínica (AAN/CNS)",
    hallazgo: "EEG recomendado tras una primera convulsión no provocada. Laboratorio y punción lumbar según la clínica. Neuroimagen (de preferencia RM) programada si hay déficit focal, crisis focal o EEG focal no idiopático.",
    pmid: "10980722", doi: "10.1212/wnl.55.5.616"
  },
  fisher2014: {
    cita: "Fisher RS, et al. ILAE official report: a practical clinical definition of epilepsy. Epilepsia. 2014;55:475-82.",
    tipo: "Definición de consenso (ILAE)",
    hallazgo: "Epilepsia: dos crisis no provocadas separadas por más de 24 horas; una crisis no provocada con riesgo de recurrencia de al menos 60 % en 10 años; o el diagnóstico de un síndrome epiléptico.",
    pmid: "24730690", doi: "10.1111/epi.12550"
  },
  scheffer2017: {
    cita: "Scheffer IE, et al. ILAE classification of the epilepsies. Epilepsia. 2017;58:512-21.",
    tipo: "Documento de posición (ILAE)",
    hallazgo: "Clasificación en tres niveles: tipo de crisis (focal, generalizada, de inicio desconocido), tipo de epilepsia y síndrome; en cada nivel, considerar la etiología (estructural, genética, infecciosa, metabólica, inmune, desconocida) y las comorbilidades.",
    pmid: "28276062", doi: "10.1111/epi.13709"
  },
  glauser2010: {
    cita: "Glauser TA, et al. Ethosuximide, valproic acid, and lamotrigine in childhood absence epilepsy. N Engl J Med. 2010;362:790-9.",
    tipo: "Ensayo clínico aleatorizado doble ciego (n = 453)",
    hallazgo: "A las 16 semanas, libres de fracaso: etosuximida 53 %, ácido valproico 58 % y lamotrigina 29 %. La etosuximida tuvo menos efectos adversos sobre la atención.",
    pmid: "20200383", doi: "10.1056/NEJMoa0902014"
  },
  ocallaghan2017: {
    cita: "O'Callaghan FJK, et al. Safety and effectiveness of hormonal treatment versus hormonal treatment with vigabatrin for infantile spasms (ICISS). Lancet Neurol. 2017;16:33-42.",
    tipo: "Ensayo clínico aleatorizado multicéntrico (n = 377)",
    hallazgo: "Sin espasmos entre los días 14 y 42: 72 % con tratamiento hormonal más vigabatrina vs 57 % con tratamiento hormonal solo.",
    pmid: "27838190", doi: "10.1016/S1474-4422(16)30294-0"
  },
  powers2017: {
    cita: "Powers SW, et al. Trial of amitriptyline, topiramate, and placebo for pediatric migraine (CHAMP). N Engl J Med. 2017;376:115-24.",
    tipo: "Ensayo clínico aleatorizado doble ciego (n = 361)",
    hallazgo: "Reducción de 50 % o más en los días de cefalea: amitriptilina 52 %, topiramato 55 % y placebo 61 %, sin diferencias. Los fármacos tuvieron más efectos adversos.",
    pmid: "27788026", doi: "10.1056/NEJMoa1610384"
  },
  oskoui2019: {
    cita: "Oskoui M, et al. Practice guideline update summary: acute treatment of migraine in children and adolescents. Neurology. 2019;93:487-99.",
    tipo: "Guía de práctica clínica (AAN/AHS)",
    hallazgo: "Ibuprofeno como primera opción para la crisis; paracetamol también es eficaz. En adolescentes, varios triptanes (sumatriptán-naproxeno, zolmitriptán nasal, rizatriptán, almotriptán) son eficaces. Tomarlo temprano.",
    pmid: "31413171", doi: "10.1212/WNL.0000000000008095"
  },
  do2019: {
    cita: "Do TP, et al. Red and orange flags for secondary headaches in clinical practice: SNNOOP10 list. Neurology. 2019;92:134-44.",
    tipo: "Revisión",
    hallazgo: "Lista SNNOOP10 de banderas rojas para cefaleas secundarias: síntomas sistémicos, déficit neurológico, inicio súbito, cambio de patrón, empeoramiento con Valsalva o en decúbito, papiledema, entre otras.",
    pmid: "30587518", doi: "10.1212/WNL.0000000000006697"
  },
  kuppermann2009: {
    cita: "Kuppermann N, et al. Identification of children at very low risk of clinically-important brain injuries after head trauma (PECARN). Lancet. 2009;374:1160-70.",
    tipo: "Cohorte prospectiva multicéntrica (n = 42.412)",
    hallazgo: "Reglas de predicción para menores y mayores de 2 años. Sin ningún criterio, el valor predictivo negativo para lesión cerebral clínicamente importante fue cercano al 100 %: se puede evitar la tomografía.",
    pmid: "19758692", doi: "10.1016/S0140-6736(09)61558-0"
  },
  brouwer2015: {
    cita: "Brouwer MC, et al. Corticosteroids for acute bacterial meningitis. Cochrane Database Syst Rev. 2015;(9):CD004405.",
    tipo: "Revisión sistemática (Cochrane, 25 estudios, n = 4121)",
    hallazgo: "Los corticoides no redujeron significativamente la mortalidad global, pero sí la hipoacusia grave (RR 0,67) y las secuelas neurológicas. En niños, el beneficio auditivo se vio sobre todo con Haemophilus influenzae.",
    pmid: "26362566", doi: "10.1002/14651858.CD004405.pub5"
  },
  venkatesan2013: {
    cita: "Venkatesan A, et al. Case definitions, diagnostic algorithms, and priorities in encephalitis: consensus statement of the International Encephalitis Consortium. Clin Infect Dis. 2013;57:1114-28.",
    tipo: "Consenso internacional",
    hallazgo: "Encefalitis: alteración de conciencia o conducta de 24 horas o más, con al menos dos o tres criterios menores (fiebre, convulsiones, foco neurológico, pleocitosis, neuroimagen o EEG alterados). Aciclovir empírico mientras se descarta herpes.",
    pmid: "23861361", doi: "10.1093/cid/cit458"
  },
  titulaer2013: {
    cita: "Titulaer MJ, et al. Treatment and prognostic factors for long-term outcome in patients with anti-NMDA receptor encephalitis. Lancet Neurol. 2013;12:157-65.",
    tipo: "Cohorte observacional (n = 577, 211 niños)",
    hallazgo: "La mayoría responde a la inmunoterapia; 53 % mejoró en 4 semanas con la primera línea. La segunda línea mejoró el pronóstico cuando la primera fracasó. La recuperación puede llevar hasta 18 meses.",
    pmid: "23290630", doi: "10.1016/S1474-4422(12)70310-1"
  },
  leonhard2019: {
    cita: "Leonhard SE, et al. Diagnosis and management of Guillain-Barré syndrome in ten steps. Nat Rev Neurol. 2019;15:671-83.",
    tipo: "Revisión con recomendaciones de consenso",
    hallazgo: "Debilidad ascendente simétrica con arreflexia. Vigilar la función respiratoria y autonómica. IGIV o plasmaféresis en los que no pueden caminar sin ayuda. Los niños tienen mejor pronóstico.",
    pmid: "31541214", doi: "10.1038/s41582-019-0250-9"
  },
  hughes2014: {
    cita: "Hughes RAC, et al. Intravenous immunoglobulin for Guillain-Barré syndrome. Cochrane Database Syst Rev. 2014;(9):CD002063.",
    tipo: "Revisión sistemática (Cochrane, 12 ensayos)",
    hallazgo: "En la enfermedad grave, la IGIV iniciada dentro de las dos semanas acelera la recuperación tanto como la plasmaféresis. Los corticoides no son útiles.",
    pmid: "25238327", doi: "10.1002/14651858.CD002063.pub6"
  },
  babl2024: {
    cita: "Babl FE, et al. Facial function in Bell palsy in a cohort of children randomized to prednisolone or placebo 12 months after diagnosis. Pediatr Neurol. 2024;153:44-47.",
    tipo: "Seguimiento de ensayo clínico aleatorizado (BellPEDS, n = 187)",
    hallazgo: "A los 6 meses, recuperación de la función facial: 98 % con prednisolona vs 93 % con placebo. Casi todos los niños se recuperan; el beneficio de los corticoides es pequeño e incierto.",
    pmid: "38320457", doi: "10.1016/j.pediatrneurol.2024.01.011"
  },
  petley2020: {
    cita: "Petley E, et al. Investigating ataxia in childhood. Arch Dis Child Educ Pract Ed. 2020;105:214-21.",
    tipo: "Revisión",
    hallazgo: "La ataxia aguda más frecuente es la cerebelitis postinfecciosa, seguida de las intoxicaciones. Neuroimagen urgente si hay signos de hipertensión endocraneana, foco, alteración de conciencia o trauma.",
    pmid: "31645356", doi: "10.1136/archdischild-2018-315893"
  },
  moeschler2014: {
    cita: "Moeschler JB, Shevell M. Comprehensive evaluation of the child with intellectual disability or global developmental delays. Pediatrics. 2014;134:e903-18.",
    tipo: "Informe clínico (AAP)",
    hallazgo: "Primer nivel de estudio: microarray cromosómico y X frágil; pesquisa metabólica según la clínica. Neuroimagen ante microcefalia, macrocefalia, convulsiones o signos focales.",
    pmid: "25157020", doi: "10.1542/peds.2014-1839"
  },
  novak2017: {
    cita: "Novak I, et al. Early, accurate diagnosis and early intervention in cerebral palsy. JAMA Pediatr. 2017;171:897-907.",
    tipo: "Revisión sistemática de guías y revisiones",
    hallazgo: "Antes de los 5 meses corregidos, las herramientas más sensibles son la RM a término (86-89 %), los movimientos generales de Prechtl (98 %) y el examen neurológico de Hammersmith (90 %). Permiten diagnosticar o sospechar parálisis cerebral antes de los 6 meses e intervenir temprano.",
    pmid: "28715518", doi: "10.1001/jamapediatrics.2017.1689"
  },
  hyman2020: {
    cita: "Hyman SL, et al. Identification, evaluation, and management of children with autism spectrum disorder. Pediatrics. 2020;145:e20193447.",
    tipo: "Informe clínico (AAP)",
    hallazgo: "Pesquisa con instrumento validado (M-CHAT) a los 18 y 24 meses. Derivar a intervención temprana sin esperar la confirmación diagnóstica. Estudio genético (microarray) a todos.",
    pmid: "31843864", doi: "10.1542/peds.2019-3447"
  },
  wolraich2019: {
    cita: "Wolraich ML, et al. Clinical practice guideline for the diagnosis, evaluation, and treatment of ADHD in children and adolescents. Pediatrics. 2019;144:e20192528.",
    tipo: "Guía de práctica clínica (AAP)",
    hallazgo: "Diagnóstico con criterios DSM-5 e informes de más de un ámbito (casa y escuela). En preescolares, primero entrenamiento a padres. Desde los 6 años, estimulantes junto con intervenciones conductuales y escolares.",
    pmid: "31570648", doi: "10.1542/peds.2019-2528"
  },
  saudubray2022: {
    cita: "Saudubray JM, Baumgartner MR, García-Cazorla Á, Walter J, eds. Inborn Metabolic Diseases: Diagnosis and Treatment. 7th ed. Berlin: Springer; 2022.",
    tipo: "Libro de referencia",
    hallazgo: "Texto de referencia de los errores congénitos del metabolismo. Propone ordenarlos en tres grupos según su fisiopatología (intoxicación, déficit energético y moléculas complejas) y abordar al paciente según cómo se presenta, la edad y los estudios de primera línea.",
    doi: "10.1007/978-3-662-63123-2"
  },
  saudubray2018: {
    cita: "Saudubray JM, Garcia-Cazorla À. Inborn errors of metabolism overview: pathophysiology, manifestations, evaluation, and management. Pediatr Clin North Am. 2018;65:179-208.",
    tipo: "Revisión",
    hallazgo: "Resume la clasificación en tres grupos y los cuadros de presentación: descompensación aguda neonatal o tardía, síntomas neurológicos crónicos y signos de órgano específicos. Muchos errores congénitos son tratables si se piensan a tiempo.",
    pmid: "29502909", doi: "10.1016/j.pcl.2017.11.002"
  },
  vanwegberg2017: {
    cita: "van Wegberg AMJ, et al. The complete European guidelines on phenylketonuria: diagnosis and treatment. Orphanet J Rare Dis. 2017;12:162.",
    tipo: "Guía de práctica clínica (Europa)",
    hallazgo: "Tratar si la fenilalanina sin tratamiento supera los 360 µmol/L. Meta: 120-360 µmol/L hasta los 12 años y durante el embarazo. Dieta de por vida; probar la respuesta a sapropterina (BH4).",
    pmid: "29025426", doi: "10.1186/s13023-017-0685-2"
  },
  haberle2019: {
    cita: "Häberle J, et al. Suggested guidelines for the diagnosis and management of urea cycle disorders: first revision. J Inherit Metab Dis. 2019;42:1192-230.",
    tipo: "Guía de práctica clínica",
    hallazgo: "Medir el amonio en todo recién nacido o niño con alteración de conciencia sin causa clara. Ante hiperamonemia: suspender proteínas, glucosa en dosis altas, depuradores de amonio (benzoato, fenilbutirato), arginina o citrulina y diálisis si es muy alta o no baja rápido.",
    pmid: "30982989", doi: "10.1002/jimd.12100"
  },
  forny2021: {
    cita: "Forny P, et al. Guidelines for the diagnosis and management of methylmalonic acidaemia and propionic acidaemia: first revision. J Inherit Metab Dis. 2021;44:566-92.",
    tipo: "Guía de práctica clínica",
    hallazgo: "Presentación neonatal con vómitos, letargo, acidosis metabólica con anión gap elevado, cetosis e hiperamonemia. Tratamiento de urgencia anabólico, carnitina, hidroxocobalamina de prueba en la metilmalónica; dieta restringida y vigilancia renal, cardíaca y neurológica.",
    pmid: "33595124", doi: "10.1002/jimd.12370"
  },
  strauss2020: {
    cita: "Strauss KA, et al. Branched-chain α-ketoacid dehydrogenase deficiency (maple syrup urine disease): treatment, biomarkers, and outcomes. Mol Genet Metab. 2020;129:193-206.",
    tipo: "Cohorte (n = 184)",
    hallazgo: "La forma clásica sigue siendo grave: la dieta mantiene el control, pero no evita del todo las secuelas cognitivas y psiquiátricas. El trasplante hepático elimina las crisis, pero no revierte el daño previo.",
    pmid: "31980395", doi: "10.1016/j.ymgme.2020.01.006"
  },
  chinsky2017: {
    cita: "Chinsky JM, et al. Diagnosis and treatment of tyrosinemia type I: a US and Canadian consensus group review and recommendations. Genet Med. 2017;19.",
    tipo: "Consenso",
    hallazgo: "La succinilacetona en sangre u orina es diagnóstica. Nitisinona más dieta restringida en tirosina y fenilalanina desde el diagnóstico; vigilar alfafetoproteína e imágenes hepáticas por riesgo de hepatocarcinoma.",
    pmid: "28771246", doi: "10.1038/gim.2017.101"
  },
  welling2017: {
    cita: "Welling L, et al. International clinical guideline for the management of classical galactosemia: diagnosis, treatment, and follow-up. J Inherit Metab Dis. 2017;40:171-6.",
    tipo: "Guía de práctica clínica internacional",
    hallazgo: "Suspender la lactosa apenas se sospecha, sin esperar la confirmación. Aun con buena dieta pueden aparecer problemas cognitivos, del habla y del movimiento, e insuficiencia ovárica: seguimiento a largo plazo.",
    pmid: "27858262", doi: "10.1007/s10545-016-9990-5"
  },
  morris2017: {
    cita: "Morris AAM, et al. Guidelines for the diagnosis and management of cystathionine beta-synthase deficiency. J Inherit Metab Dis. 2017;40:49-74.",
    tipo: "Guía de práctica clínica",
    hallazgo: "Medir homocisteína total ante luxación del cristalino, trombosis, hábito marfanoide o discapacidad intelectual sin causa. Probar la respuesta a piridoxina; si no responde, dieta pobre en metionina y betaína.",
    pmid: "27778219", doi: "10.1007/s10545-016-9979-0"
  },
  boy2023: {
    cita: "Boy N, et al. Recommendations for diagnosing and managing individuals with glutaric aciduria type 1: third revision. J Inherit Metab Dis. 2023;46:482-519.",
    tipo: "Guía de práctica clínica",
    hallazgo: "Macrocefalia y crisis encefalopática con daño estriatal entre los 3 y 36 meses, desencadenada por infecciones. Con pesquisa neonatal, dieta baja en lisina, carnitina y tratamiento de urgencia en cada enfermedad, la mayoría no tiene crisis.",
    pmid: "36221165", doi: "10.1002/jimd.12566"
  },
  stockler2011: {
    cita: "Stockler S, et al. Pyridoxine dependent epilepsy and antiquitin deficiency. Mol Genet Metab. 2011;104:48-60.",
    tipo: "Revisión con recomendaciones",
    hallazgo: "Convulsiones neonatales o del lactante refractarias que ceden con piridoxina. Ácido α-aminoadípico semialdehído elevado. Probar piridoxina en toda epilepsia temprana refractaria sin causa.",
    pmid: "21704546", doi: "10.1016/j.ymgme.2011.05.014"
  },
  kishnani2014: {
    cita: "Kishnani PS, et al. Diagnosis and management of glycogen storage disease type I: a practice guideline of the ACMG. Genet Med. 2014;16:e1.",
    tipo: "Guía de práctica clínica (ACMG)",
    hallazgo: "Hipoglucemia con ayuno corto, hepatomegalia, lactato, triglicéridos y ácido úrico altos. Evitar el ayuno con tomas frecuentes y almidón de maíz crudo; en el tipo Ib, tratar la neutropenia.",
    pmid: "25356975", doi: "10.1038/gim.2014.128"
  },
  thornton2015: {
    cita: "Thornton PS, et al. Recommendations from the Pediatric Endocrine Society for evaluation and management of persistent hypoglycemia in neonates, infants, and children. J Pediatr. 2015;167:238-45.",
    tipo: "Recomendaciones (Pediatric Endocrine Society)",
    hallazgo: "Tomar la «muestra crítica» durante la hipoglucemia (glucosa, insulina, β-hidroxibutirato, ácidos grasos libres, lactato, amonio, acilcarnitinas, cortisol, GH). Hipoglucemia sin cetonas sugiere hiperinsulinismo o defecto de β-oxidación.",
    pmid: "25957977", doi: "10.1016/j.jpeds.2015.03.057"
  },
  klepper2020: {
    cita: "Klepper J, et al. Glut1 deficiency syndrome (Glut1DS): state of the art in 2020 and recommendations of the international Glut1DS study group. Epilepsia Open. 2020;5:354-65.",
    tipo: "Recomendaciones de consenso",
    hallazgo: "Glucosa baja en el LCR con glucemia normal (cociente menor de 0,45 aproximadamente). La dieta cetogénica es el tratamiento de elección y debe empezar temprano.",
    pmid: "32913944", doi: "10.1002/epi4.12414"
  },
  merritt2018: {
    cita: "Merritt JL, Norris M, Kanungo S. Fatty acid oxidation disorders. Ann Transl Med. 2018;6:473.",
    tipo: "Revisión",
    hallazgo: "Hipoglucemia hipocetósica con el ayuno o las infecciones; las de cadena larga además dan miocardiopatía, arritmias y rabdomiólisis. Diagnóstico por acilcarnitinas; tratamiento: evitar el ayuno y, en las de cadena larga, triglicéridos de cadena media.",
    pmid: "30740404", doi: "10.21037/atm.2018.10.57"
  },
  parikh2017: {
    cita: "Parikh S, et al. Patient care standards for primary mitochondrial disease: a consensus statement from the Mitochondrial Medicine Society. Genet Med. 2017;19.",
    tipo: "Consenso (Mitochondrial Medicine Society)",
    hallazgo: "Recomendaciones para el seguimiento de órganos (corazón, ojos, audición, endocrino, renal), el manejo de las descompensaciones y los fármacos que conviene evitar, como el valproato en los defectos de POLG.",
    pmid: "28749475", doi: "10.1038/gim.2017.107"
  },
  stirnemann2017: {
    cita: "Stirnemann J, et al. A review of Gaucher disease pathophysiology, clinical presentation and treatments. Int J Mol Sci. 2017;18:441.",
    tipo: "Revisión",
    hallazgo: "Esplenomegalia, citopenias y dolor o lesiones óseas (tipo 1); los tipos 2 y 3 suman compromiso neurológico. Tratamiento enzimático sustitutivo o reducción de sustrato en el tipo 1.",
    pmid: "28218669", doi: "10.3390/ijms18020441"
  },
  muenzer2011: {
    cita: "Muenzer J. Overview of the mucopolysaccharidoses. Rheumatology (Oxford). 2011;50 Suppl 5:v4-12.",
    tipo: "Revisión",
    hallazgo: "Enfermedades multisistémicas progresivas: facies tosca, rigidez articular, disostosis, hepatoesplenomegalia, hernias, otitis y apneas; según el tipo, compromiso cognitivo. Hay tratamiento enzimático para varios tipos y trasplante de médula en Hurler.",
    pmid: "22210669", doi: "10.1093/rheumatology/ker394"
  },
  kishnani2006: {
    cita: "Kishnani PS, et al. Pompe disease diagnosis and management guideline. Genet Med. 2006;8:267-88.",
    tipo: "Guía de práctica clínica",
    hallazgo: "La forma infantil se presenta en los primeros meses con hipotonía grave, miocardiopatía hipertrófica, macroglosia y CK elevada. El tratamiento enzimático cambia el pronóstico si empieza temprano.",
    pmid: "16702877", doi: "10.1097/01.gim.0000218152.87434.f3"
  },
  geberhiwot2018: {
    cita: "Geberhiwot T, et al. Consensus clinical management guidelines for Niemann-Pick disease type C. Orphanet J Rare Dis. 2018;13:50.",
    tipo: "Consenso",
    hallazgo: "Ictericia colestática neonatal o esplenomegalia aislada en el lactante; más tarde ataxia, parálisis de la mirada vertical, cataplejía gelástica y deterioro cognitivo. Miglustat en las formas neurológicas.",
    pmid: "29625568", doi: "10.1186/s13023-018-0785-7"
  },
  engelen2012: {
    cita: "Engelen M, et al. X-linked adrenoleukodystrophy (X-ALD): clinical presentation and guidelines for diagnosis, follow-up and management. Orphanet J Rare Dis. 2012;7:51.",
    tipo: "Revisión con recomendaciones",
    hallazgo: "Varones con insuficiencia suprarrenal o con deterioro escolar y conductual por leucodistrofia cerebral. Ácidos grasos de cadena muy larga elevados. Vigilar con RM: el trasplante de médula sirve solo en la fase temprana de la forma cerebral.",
    pmid: "22889154", doi: "10.1186/1750-1172-7-51"
  },
  braverman2016: {
    cita: "Braverman NE, et al. Peroxisome biogenesis disorders in the Zellweger spectrum: an overview of current diagnosis, clinical manifestations, and treatment guidelines. Mol Genet Metab. 2016;117:313-21.",
    tipo: "Revisión con recomendaciones",
    hallazgo: "Desde recién nacidos con hipotonía grave, convulsiones, dismorfias y disfunción hepática hasta formas leves con retinopatía e hipoacusia. Ácidos grasos de cadena muy larga y plasmalógenos alterados.",
    pmid: "26750748", doi: "10.1016/j.ymgme.2015.12.009"
  },
  altassan2019: {
    cita: "Altassan R, et al. International clinical guidelines for the management of phosphomannomutase 2-congenital disorders of glycosylation. J Inherit Metab Dis. 2019;42:5-28.",
    tipo: "Guía de práctica clínica internacional",
    hallazgo: "Compromiso multisistémico con hipotonía, hipoplasia cerebelosa, pezones invertidos, distribución anormal de la grasa, estrabismo y coagulopatía. Pesquisa con isoelectroenfoque de transferrina.",
    pmid: "30740725", doi: "10.1002/jimd.12024"
  }
};

/* Mapas: el general (por edad) y los submapas que se abren desde un tema. */
window.MAPAS = {
  raiz: {
    titulo: "Sibilancias, del lactante al escolar",
    padre: "inicio",
    ruta: ["Pediatría", "Neumonología", "Sibilancias"],
    bajada: "Tres cuadros que suelen verse como uno solo a lo largo de la infancia. El mapa se lee de izquierda a derecha como la edad del niño: tocá cualquier nodo para abrir su teoría, la evidencia, las preguntas PICO, los casos y los ateneos.",
    disposicion: "edad"
  },
  sibilancias: {
    titulo: "Sibilancias recurrentes",
    padre: "raiz",
    tema: "sibilancias",
    ruta: ["Pediatría", "Neumonología", "Sibilancias", "Sibilancias recurrentes"],
    bajada: "Las cuatro preguntas que trae cada familia, en el orden en que suelen aparecer. Basado en el ateneo «Hiperreactividad y sibilancias».",
    disposicion: "columnas",
    columnas: [
      { x: 150, titulo: "Cómo lo nombramos", pregunta: "¿Qué tiene?" },
      { x: 450, titulo: "Durante la crisis", pregunta: "¿Qué hago hoy?" },
      { x: 750, titulo: "Entre crisis", pregunta: "¿Cómo evito la próxima?" },
      { x: 1050, titulo: "Con el tiempo", pregunta: "¿Se le va a pasar?" }
    ]
  },
  gina: {
    titulo: "Guía GINA 2026",
    padre: "asma",
    ruta: ["Pediatría", "Neumonología", "Sibilancias", "Asma", "Guía GINA 2026"],
    bajada: "La guía resumida de GINA 2026 (6 años en adelante) como grafo: cuatro zonas, conectadas por el ciclo evaluar, ajustar y revisar. Elegí un recorrido para seguir a un paciente a través de la guía.",
    disposicion: "zonas",
    zonas: [
      { x: 30, y: 60, w: 300, h: 270, titulo: "Diagnóstico" },
      { x: 30, y: 350, w: 300, h: 270, titulo: "Evaluación" },
      { x: 350, y: 60, w: 500, h: 560, titulo: "Tratamiento", sub: [{ x: 430, y: 168, t: "6 a 11 años" }, { x: 770, y: 168, t: "12 años o más" }] },
      { x: 870, y: 60, w: 300, h: 560, titulo: "Crisis" }
    ],
    recorridos: [
      { id: "nino-nuevo", titulo: "8 años, recién diagnosticado", descripcion: "Síntomas 3 a 4 días por semana, nunca tratado.", pasos: [
        { nodo: "g-dx-criterios", nota: "Documentar síntomas variables y flujo variable antes de iniciar CI." },
        { nodo: "g-dx-flujo", nota: "Espirometría con broncodilatador: VEF₁ +12 % del predicho o más." },
        { nodo: "g-ev-control", nota: "Registrar el control de síntomas de las últimas 4 semanas." },
        { nodo: "g-ev-riesgo", nota: "Buscar factores de riesgo de crisis." },
        { nodo: "g-ni-inicio", nota: "3–4 días por semana: CI diario en dosis baja más SABA o CI-SABA a demanda." },
        { nodo: "g-tx-inhalador", nota: "Elegir el dispositivo con la familia y enseñar la técnica." },
        { nodo: "g-cr-plan", nota: "Plan de acción escrito." },
        { nodo: "g-tx-ciclo", nota: "Revisar en 1 a 3 meses." }
      ] },
      { id: "adolescente-saba", titulo: "14 años, solo salbutamol", descripcion: "Usa salbutamol cuando lo necesita; una consulta en guardia el año pasado.", pasos: [
        { nodo: "g-tx-nosaba", nota: "El SABA solo aumenta el riesgo de crisis graves y de muerte." },
        { nodo: "g-ev-riesgo", nota: "La consulta en guardia del último año es un factor de riesgo." },
        { nodo: "g-ad-inicio", nota: "Síntomas 2 días por semana o menos: CI-formoterol en dosis baja a demanda." },
        { nodo: "g-ad-track1", nota: "Track 1: un solo inhalador para el rescate y, si hace falta, para el mantenimiento." },
        { nodo: "g-tx-dosis", nota: "Budesonida-formoterol 160/4,5: 1 inhalación a demanda; consultar si necesita más de 12 en un día." },
        { nodo: "g-cr-plan", nota: "Plan de acción con el mismo inhalador." },
        { nodo: "g-tx-ciclo", nota: "Revisar en 1 a 3 meses." }
      ] },
      { id: "crisis-guardia", titulo: "10 años, crisis en la guardia", descripcion: "Habla en frases, FR 28, SatO₂ 93 %.", pasos: [
        { nodo: "g-cr-gravedad", nota: "Clasificar: con estos datos, crisis moderada (PRAM 4–7)." },
        { nodo: "g-cr-tratamiento", nota: "Salbutamol 4–6 disparos con aerocámara más ipratropio; oxígeno si hace falta, con objetivo de 92 a 95 %." },
        { nodo: "g-cr-ocs", nota: "Prednisolona 1–2 mg/kg (máximo 40 mg) por 3 a 5 días." },
        { nodo: "g-cr-alta", nota: "Alta si cumple criterios de crisis leve durante 1–2 horas y SatO₂ ≥ 92 %." },
        { nodo: "g-ni-pasos", nota: "Al alta, pasar al paso 4: CI-LABA en dosis media o MART." },
        { nodo: "g-cr-seguimiento", nota: "Control en 2 a 5 días." },
        { nodo: "g-ev-riesgo", nota: "Revisar qué desencadenó la crisis y los factores de riesgo." }
      ] },
      { id: "no-controla", titulo: "No se controla con el tratamiento", descripcion: "Síntomas frecuentes pese a CI diario.", pasos: [
        { nodo: "g-ev-nocontrol", nota: "Investigar antes de cambiar el tratamiento." },
        { nodo: "g-tx-inhalador", nota: "Mirar cómo usa el inhalador y hablar de la adherencia sin juzgar." },
        { nodo: "g-dx-con-ics", nota: "Confirmar que es asma." },
        { nodo: "g-ev-pob", nota: "Buscar comorbilidades y exposiciones." },
        { nodo: "g-ni-pasos", nota: "Considerar subir un paso, con decisión compartida." },
        { nodo: "g-tx-grave", nota: "Si sigue sin control tras 3–6 meses en el paso 4, derivar." }
      ] },
      { id: "bajar", titulo: "Bien controlado hace 3 meses", descripcion: "Sin síntomas ni crisis con el tratamiento actual.", pasos: [
        { nodo: "g-ev-control", nota: "Confirmar el buen control." },
        { nodo: "g-ev-riesgo", nota: "Revisar factores de riesgo antes de bajar." },
        { nodo: "g-tx-bajar", nota: "Elegir un buen momento y bajar la dosis de CI un 25 a 50 %." },
        { nodo: "g-cr-plan", nota: "Actualizar el plan de acción." },
        { nodo: "g-tx-ciclo", nota: "Revisar y esperar 2–3 meses antes de volver a bajar." }
      ] }
    ]
  },
  asma: {
    titulo: "Asma",
    padre: "raiz",
    tema: "asma",
    ruta: ["Pediatría", "Neumonología", "Sibilancias", "Asma"],
    bajada: "Asma desde los 6 años: confirmar el diagnóstico, medir el control, elegir el escalón y manejar la crisis.",
    disposicion: "columnas",
    columnas: [
      { x: 150, titulo: "Diagnóstico", pregunta: "¿Es asma?" },
      { x: 450, titulo: "Control", pregunta: "¿Cómo está hoy y qué riesgo tiene?" },
      { x: 750, titulo: "Tratamiento", pregunta: "¿Qué escalón le corresponde?" },
      { x: 1050, titulo: "Crisis", pregunta: "¿Qué hago en la guardia?" }
    ]
  },
  inicio: {
    titulo: "El Gran Mapa Pediátrico",
    ruta: ["Pediatría"],
    bajada: "Elegí un sistema del cuerpo para entrar en su mapa. Cada mapa reúne teoría, evidencia, preguntas PICO, casos y ateneos; los sistemas en gris se van a ir sumando.",
    disposicion: "cuerpo",
    buscar: "Buscar en todo el mapa: Koplik, IPA, magnesio…",
    pista: "Tocá un sistema para entrar en su mapa.",
    sistemas: [
      { id: "neuro", titulo: "Neurología", detalle: "Las 20 patologías más frecuentes", organo: "cerebro", mapa: "neurologia", color: "var(--neuro)", lado: "izq", y: 30 },
      { id: "neumo", titulo: "Neumonología", detalle: "Bronquiolitis, sibilancias y asma", organo: "pulmones", mapa: "raiz", color: "var(--edad-2)", lado: "izq", y: 186 },
      { id: "gastro", titulo: "Gastroenterología", detalle: "Diarrea, reflujo, dolor abdominal", organo: "digestivo", lado: "izq", y: 498 },
      { id: "cardio", titulo: "Cardiología", detalle: "Soplos y cardiopatías congénitas", organo: "corazon", mapa: "cardiopatias", color: "var(--cardio)", lado: "der", y: 128 },
      { id: "derma", titulo: "Dermatología", detalle: "Exantemas: subtipos y causas", organo: "piel", mapa: "exantemas", color: "var(--derm)", lado: "der", y: 304 },
      { id: "metab", titulo: "Metabolismo", detalle: "Errores congénitos y vías metabólicas", organo: "higado", mapa: "ecm", color: "var(--metab)", lado: "izq", y: 342 },
      { id: "nefro", titulo: "Nefrología", detalle: "Infección urinaria, hematuria", organo: "rinones", lado: "der", y: 480 }
    ]
  },
  exantemas: {
    titulo: "Exantemas",
    padre: "inicio",
    ruta: ["Pediatría", "Dermatología", "Exantemas"],
    bajada: "Los exantemas agrupados por cómo se ven (la lesión que domina) y coloreados por su causa: infecciosa, alérgica o por fármacos, o inflamatoria. Un mismo aspecto puede tener causas muy distintas; las líneas unen los diagnósticos que conviene diferenciar.",
    disposicion: "zonas",
    indice: "Exantemas por tipo de lesión",
    buscar: "Buscar: Koplik, Nikolsky, amoxicilina…",
    pista: "Cada zona agrupa un tipo de lesión. El color del punto indica la causa; un segundo punto chico, que puede tener más de una. Elegí un recorrido para seguir a un paciente.",
    causas: ["infecciosa", "alergica", "inflamatoria"],
    zonas: [
      { x: 30, y: 60, w: 400, h: 300, titulo: "Maculopapular" },
      { x: 30, y: 380, w: 400, h: 240, titulo: "Eritema difuso" },
      { x: 450, y: 60, w: 300, h: 270, titulo: "Cómo abordarlo" },
      { x: 450, y: 350, w: 300, h: 270, titulo: "Vesículas y ampollas" },
      { x: 770, y: 60, w: 400, h: 240, titulo: "Petequias y púrpura" },
      { x: 770, y: 320, w: 400, h: 300, titulo: "Habones y dianas" }
    ],
    recorridos: [
      { id: "fiebre-petequias", titulo: "Fiebre y petequias en la guardia", descripcion: "3 años, fiebre desde hace 12 horas y petequias en el tronco.", pasos: [
        { nodo: "ex-alarma", nota: "Mirar primero cómo está: irritabilidad, letargo, relleno capilar, frecuencia cardíaca, presión, manos y pies fríos." },
        { nodo: "ex-meningococo", nota: "Con signos de sepsis o petequias que se extienden: hemocultivo y ceftriaxona sin esperar estudios." },
        { nodo: "ex-petvir", nota: "Si está bien, las petequias quedan por encima de las mamilas tras tos o vómitos y el laboratorio es normal: observar unas horas." },
        { nodo: "ex-dengue", nota: "En época de brote, pensar en dengue: prueba del lazo, plaquetas y hematocrito." },
        { nodo: "ex-iga", nota: "Púrpura palpable en piernas y glúteos, con buen estado general y plaquetas normales: otro diagnóstico." }
      ] },
      { id: "amoxicilina", titulo: "Exantema mientras toma amoxicilina", descripcion: "2 años, quinto día de amoxicilina por otitis; aparece un exantema maculopapular.", pasos: [
        { nodo: "ex-alarma", nota: "Descartar lo grave: mucosas, ampollas, dolor de piel, edema facial, fiebre alta persistente." },
        { nodo: "ex-viral", nota: "La causa más frecuente es el virus que causó la consulta, no el antibiótico." },
        { nodo: "ex-farmaco", nota: "Exantema tardío y benigno: se puede suspender, pero no rotular como alérgico sin estudiar." },
        { nodo: "ex-urticaria", nota: "Si fueron habones en minutos u horas tras la dosis, contar como posible reacción inmediata." },
        { nodo: "ex-suero", nota: "Si a la semana o dos suma artralgias y edema: reacción tipo enfermedad del suero." },
        { nodo: "ex-mono", nota: "Si tenía faringitis con adenopatías y hepatoesplenomegalia, pensar en mononucleosis." },
        { nodo: "ex-farmaco", nota: "Derivar a alergia para provocación oral: la gran mayoría tolera la amoxicilina." }
      ] },
      { id: "fiebre-5-dias", titulo: "Fiebre de 5 días y exantema", descripcion: "4 años, fiebre de 5 días, ojos rojos y exantema en el tronco.", pasos: [
        { nodo: "ex-kawasaki", nota: "Buscar los cinco criterios; si no están todos, seguir el algoritmo de Kawasaki incompleto." },
        { nodo: "ex-sarampion", nota: "¿Pródromo catarral, Koplik, vacunas incompletas, contacto o viaje? Aislar y notificar." },
        { nodo: "ex-escarlatina", nota: "Exantema áspero con faringitis: test rápido para estreptococo." },
        { nodo: "ex-viral", nota: "El adenovirus puede imitar a Kawasaki: conjuntivitis, faringitis y fiebre alta." },
        { nodo: "ex-misc", nota: "Con dolor abdominal, hipotensión o compromiso cardíaco y antecedente de COVID-19: MIS-C." },
        { nodo: "ex-shock", nota: "Eritrodermia con hipotensión: shock tóxico." }
      ] },
      { id: "lactante-fiebre", titulo: "Lactante: fiebre alta y después exantema", descripcion: "10 meses, tres días de fiebre de 39,5 °C; al ceder aparece un exantema rosado.", pasos: [
        { nodo: "ex-roseola", nota: "Fiebre alta con buen estado y exantema cuando cede: exantema súbito." },
        { nodo: "ex-farmaco", nota: "Si recibió antibiótico durante la fiebre, el exantema no prueba alergia." },
        { nodo: "ex-viral", nota: "Otros virus dan cuadros parecidos; el diagnóstico es clínico." }
      ] },
      { id: "vesiculas-atopia", titulo: "Vesículas en un chico con dermatitis atópica", descripcion: "3 años con dermatitis atópica, fiebre y vesículas sobre las placas de eccema.", pasos: [
        { nodo: "ex-eh", nota: "Vesículas iguales, erosiones en sacabocado y fiebre: eccema herpético. Aciclovir sin demora." },
        { nodo: "ex-mpb", nota: "Coxsackie A6 también se acentúa sobre el eccema; mirar boca, manos, pies y glúteos." },
        { nodo: "ex-varicela", nota: "Lesiones en distintos estadios y de distribución central." },
        { nodo: "ex-ssss", nota: "Piel dolorosa, ampollas flácidas y Nikolsky positivo: piel escaldada." }
      ] }
    ]
  },
  cardiopatias: {
    titulo: "Cardiopatías congénitas",
    padre: "inicio",
    ruta: ["Pediatría", "Cardiología", "Cardiopatías congénitas"],
    bajada: "Las cardiopatías agrupadas por su fisiología, que es lo que decide cómo se presentan: cortocircuito de izquierda a derecha (insuficiencia cardíaca, sin cianosis), cianóticas y obstructivas. Las líneas unen lo que conviene diferenciar o lo que una lleva a la otra.",
    disposicion: "zonas",
    indice: "Cardiopatías por fisiología",
    buscar: "Buscar: Fallot, oximetría, alprostadil…",
    pista: "Cada zona agrupa una fisiología; el color del punto la repite. Un segundo punto chico indica que comparte dos. Elegí un recorrido para seguir a un paciente.",
    causas: ["cortocircuito", "cianotica", "obstructiva"],
    zonas: [
      { x: 30, y: 60, w: 400, h: 290, titulo: "Cortocircuito izquierda-derecha" },
      { x: 450, y: 60, w: 300, h: 290, titulo: "Cómo abordarlo" },
      { x: 770, y: 60, w: 400, h: 290, titulo: "Cianóticas" },
      { x: 30, y: 370, w: 400, h: 250, titulo: "Obstructivas" },
      { x: 450, y: 370, w: 300, h: 250, titulo: "Cuando el corazón no alcanza" },
      { x: 770, y: 370, w: 400, h: 250, titulo: "Síndromes y cuidados" }
    ],
    recorridos: [
      { id: "soplo-control", titulo: "Soplo en el control de salud", descripcion: "3 años, asintomático; en el control se ausculta un soplo sistólico.", pasos: [
        { nodo: "cc-soplo", nota: "Primero decidir si suena inocente: suave, corto, sistólico, que cambia con la posición, en un chico que crece bien." },
        { nodo: "cc-cia", nota: "Soplo pulmonar suave con desdoblamiento fijo del segundo ruido: pensar en CIA, aunque esté asintomático." },
        { nodo: "cc-civ", nota: "Soplo holosistólico áspero en el borde esternal izquierdo: CIV, a menudo pequeña." },
        { nodo: "cc-ep", nota: "Soplo eyectivo con clic en foco pulmonar: estenosis pulmonar." },
        { nodo: "cc-eao", nota: "Soplo eyectivo en foco aórtico que irradia al cuello, con clic: estenosis aórtica o válvula bicúspide." }
      ] },
      { id: "oximetria", titulo: "Oximetría que no pasa", descripcion: "Recién nacido de 30 horas, asintomático: 92 % en la mano derecha y 93 % en el pie, igual al repetir.", pasos: [
        { nodo: "cc-oximetria", nota: "Por debajo de 95 % en mano y pie después de repetir: no pasa. Examen completo y ecocardiograma antes del alta." },
        { nodo: "cc-ductus", nota: "Si empeora o se confirma una lesión dependiente del ductus: prostaglandina sin esperar." },
        { nodo: "cc-tga", nota: "Cianosis sin dificultad respiratoria ni soplo: pensar en transposición." },
        { nodo: "cc-fallot", nota: "Con soplo eyectivo áspero y cianosis variable: tetralogía de Fallot." },
        { nodo: "cc-coartacion", nota: "Una oximetría normal no descarta la coartación: palpar los pulsos femorales y medir presión en brazo y pierna." }
      ] },
      { id: "lactante-come", titulo: "Lactante que suda al comer y no aumenta de peso", descripcion: "2 meses, se cansa con las tomas, transpira, respira rápido y está por debajo de su curva.", pasos: [
        { nodo: "cc-icc", nota: "Taquipnea, sudoración con las tomas, hepatomegalia y mal progreso de peso: insuficiencia cardíaca." },
        { nodo: "cc-civ", nota: "A esta edad cae la resistencia pulmonar y una CIV grande empieza a dar síntomas." },
        { nodo: "cc-canal", nota: "Si tiene síndrome de Down o eje QRS superior en el ECG: canal auriculoventricular." },
        { nodo: "cc-dap", nota: "Soplo continuo y pulsos saltones: ductus persistente grande." },
        { nodo: "cc-hp", nota: "Si no se cierra a tiempo, la hipertensión pulmonar se vuelve irreversible." }
      ] },
      { id: "shock-neonatal", titulo: "Recién nacido en shock en la primera semana", descripcion: "6 días, en casa desde el segundo día; consulta por letargo, mala perfusión y taquipnea. Pulsos femorales casi ausentes.", pasos: [
        { nodo: "cc-ductus", nota: "Shock en la primera o segunda semana sin causa clara: pensar en el cierre del ductus. Prostaglandina mientras se confirma." },
        { nodo: "cc-coartacion", nota: "Pulsos femorales débiles y diferencia de presión entre brazos y piernas: coartación crítica." },
        { nodo: "cc-hlhs", nota: "Pulsos débiles en los cuatro miembros y shock profundo: hipoplasia de cavidades izquierdas." },
        { nodo: "cc-eao", nota: "Estenosis aórtica crítica: bajo gasto con soplo que puede ser suave." }
      ] },
      { id: "down", titulo: "Recién nacido con síndrome de Down", descripcion: "Primer día de vida, diagnóstico clínico de síndrome de Down, examen cardiovascular normal.", pasos: [
        { nodo: "cc-down", nota: "Ecocardiograma a todos, aunque el examen sea normal y el control prenatal no haya mostrado nada." },
        { nodo: "cc-canal", nota: "Es la cardiopatía más típica: puede no tener soplo en los primeros días." },
        { nodo: "cc-civ", nota: "CIV y CIA también son frecuentes." },
        { nodo: "cc-hp", nota: "Tienen hipertensión pulmonar antes y con más frecuencia: no demorar la cirugía." }
      ] }
    ]
  },
  neurologia: {
    titulo: "Neurología: las 20 más frecuentes",
    padre: "inicio",
    ruta: ["Pediatría", "Neurología", "Las 20 más frecuentes"],
    bajada: "Las veinte consultas neurológicas que más se ven en pediatría, agrupadas por cómo llegan: convulsiones, cefalea y trauma, cuadros agudos (infecciones, debilidad, ataxia) y neurodesarrollo. Las líneas unen lo que conviene diferenciar.",
    disposicion: "zonas",
    indice: "Patologías por grupo",
    buscar: "Buscar: status, PECARN, migraña, West…",
    pista: "Cada zona agrupa un motivo de consulta. Empezá por «Cómo abordarlo» o elegí un recorrido para seguir a un paciente.",
    zonas: [
      { x: 30, y: 60, w: 400, h: 560, titulo: "Convulsiones y epilepsia" },
      { x: 450, y: 60, w: 300, h: 250, titulo: "Cómo abordarlo" },
      { x: 770, y: 60, w: 400, h: 250, titulo: "Cefalea y trauma" },
      { x: 450, y: 330, w: 300, h: 290, titulo: "Infección y déficit agudo" },
      { x: 770, y: 330, w: 400, h: 290, titulo: "Neurodesarrollo" }
    ],
    recorridos: [
      { id: "convulsion-fiebre", titulo: "Convulsión con fiebre en la guardia", descripcion: "18 meses, convulsión tónico-clónica generalizada de 2 minutos con 39 °C. Llega somnoliento.", pasos: [
        { nodo: "ne-febril", nota: "Edad típica, generalizada, menos de 15 minutos: probable convulsión febril simple. Esperar que recupere la conciencia." },
        { nodo: "ne-meningitis", nota: "Buscar signos meníngeos, fontanela, petequias y estado de vacunas. Si no recupera o hay signos, punción lumbar." },
        { nodo: "ne-encefalitis", nota: "Si la alteración de conciencia persiste horas o hay foco, pensar en encefalitis: aciclovir empírico." },
        { nodo: "ne-status", nota: "Si la convulsión dura más de 5 minutos, ya es tiempo de tratar como estado de mal." }
      ] },
      { id: "no-para", titulo: "La convulsión que no para", descripcion: "4 años con epilepsia conocida; convulsiona hace 7 minutos al llegar la ambulancia.", pasos: [
        { nodo: "ne-status", nota: "A los 5 minutos, benzodiacepina; a los 10 minutos de la primera dosis, repetir una vez; a los 20, segunda línea." },
        { nodo: "ne-epilepsia", nota: "Una vez controlada, revisar adherencia, niveles y desencadenantes. Indicar midazolam de rescate para la casa." },
        { nodo: "ne-meningitis", nota: "Si es el primer episodio o hay fiebre, descartar infección del sistema nervioso central." }
      ] },
      { id: "primer-episodio", titulo: "Primer episodio sin fiebre", descripcion: "7 años, lo encontraron al despertar con babeo y la hemicara derecha contraída, sin perder la conciencia.", pasos: [
        { nodo: "ne-paroxisticos", nota: "Primero confirmar que fue una crisis: ¿síncope, parasomnia, reflujo? Pedir un video si se repite." },
        { nodo: "ne-primera", nota: "Primera crisis no provocada: EEG, y neuroimagen programada si es focal y el EEG no muestra un síndrome claro." },
        { nodo: "ne-rolandica", nota: "Crisis hemifacial al dormir o al despertar con puntas centrotemporales: epilepsia autolimitada. Suele no requerir tratamiento." },
        { nodo: "ne-epilepsia", nota: "Con una segunda crisis o un síndrome definido ya es epilepsia; decidir tratamiento según el síndrome y la frecuencia." }
      ] },
      { id: "cefalea", titulo: "Cefalea en el consultorio", descripcion: "10 años, cefaleas desde hace 4 meses, dos por semana; la mamá pide una tomografía.", pasos: [
        { nodo: "ne-cefalea-alarma", nota: "Buscar banderas rojas en la historia y en el examen (fondo de ojo incluido). Sin ellas, la neuroimagen no suele ayudar." },
        { nodo: "ne-migrana", nota: "Pulsátil, con náuseas, fotofobia y alivio al dormir: migraña. Ibuprofeno temprano y diario de cefaleas." },
        { nodo: "ne-tec", nota: "Si empezó después de un golpe, pensar en síntomas posconmocionales." }
      ] },
      { id: "desarrollo", titulo: "Lactante que no se sienta", descripcion: "9 meses, no se sienta sin apoyo, poco balbuceo. Nació a las 31 semanas.", pasos: [
        { nodo: "ne-retraso", nota: "Corregir la edad por prematurez y evaluar todas las áreas: ¿es solo motor o global?" },
        { nodo: "ne-pc", nota: "Tono anormal, asimetría o reflejos persistentes con factores de riesgo: sospechar parálisis cerebral y derivar ya a intervención temprana." },
        { nodo: "ne-west", nota: "Si aparecen salvas de flexiones al despertar o pierde pautas: espasmos infantiles, EEG urgente." },
        { nodo: "ne-tea", nota: "Si lo que falta es el contacto social, la atención conjunta o el balbuceo: pesquisa de autismo." }
      ] },
      { id: "no-camina", titulo: "Dejó de caminar de golpe", descripcion: "3 años, una semana después de una varicela camina como borracho y se cae.", pasos: [
        { nodo: "ne-ataxia", nota: "Ataxia de la marcha con conciencia normal tras una virosis: cerebelitis postinfecciosa. Descartar intoxicación." },
        { nodo: "ne-gbs", nota: "Si en realidad no camina por debilidad o dolor en las piernas y faltan los reflejos: Guillain-Barré." },
        { nodo: "ne-encefalitis", nota: "Si hay somnolencia, fiebre o convulsiones: encefalitis, no ataxia aislada." }
      ] }
    ]
  },
  ecm: {
    titulo: "Errores congénitos del metabolismo",
    padre: "inicio",
    ruta: ["Pediatría", "Metabolismo", "Errores congénitos"],
    bajada: "Agrupados en tres grupos según qué falla: sustancias que se acumulan y intoxican (grupo 1), falta de energía (grupo 2) o moléculas complejas que no se arman o no se degradan (grupo 3). En el centro, cómo pensarlos ante un signo y qué hacer en la urgencia. Las vías metabólicas tienen su propio mapa.",
    disposicion: "zonas",
    indice: "Errores congénitos por grupo",
    buscar: "Buscar: amonio, MCAD, Gaucher, olor a jarabe…",
    pista: "El color del punto indica el grupo. Empezá por «Cómo abordarlos» o por un signo de alarma, o abrí el mapa de vías para ver dónde falla cada enfermedad.",
    causas: ["intoxicacion", "energetico", "complejas"],
    zonas: [
      { x: 30, y: 60, w: 400, h: 560, titulo: "Grupo 1 · Intoxicación" },
      { x: 450, y: 60, w: 300, h: 270, titulo: "Cómo abordarlos" },
      { x: 450, y: 350, w: 300, h: 270, titulo: "Pistas en el laboratorio y la clínica" },
      { x: 770, y: 60, w: 400, h: 300, titulo: "Grupo 2 · Déficit energético" },
      { x: 770, y: 380, w: 400, h: 240, titulo: "Grupo 3 · Moléculas complejas" }
    ],
    recorridos: [
      { id: "rn-sepsis", titulo: "Recién nacido «séptico» con cultivos negativos", descripcion: "5 días, sano al nacer, empezó a comer mal, vomita y está letárgico. Hemocultivo negativo a las 48 horas.", pasos: [
        { nodo: "ecm-neonato", nota: "Intervalo libre tras un nacimiento normal y deterioro progresivo: pensar en una intoxicación metabólica además de sepsis." },
        { nodo: "ecm-laboratorio", nota: "Amonio, gases, anión gap, glucemia, cetonas en orina y lactato, ya. Guardar plasma y orina de la crisis." },
        { nodo: "ecm-hiperamonemia", nota: "Amonio muy alto con alcalosis respiratoria y sin cetosis: ciclo de la urea. Con acidosis y cetosis: acidemia orgánica." },
        { nodo: "ecm-emergencia", nota: "Suspender proteínas, glucosa en dosis altas, depuradores, cofactores y diálisis si no baja." },
        { nodo: "ecm-msud", nota: "Si el amonio es normal pero hay cetosis, olor dulce y movimientos de boxeo o pedaleo: jarabe de arce." }
      ] },
      { id: "hipoglucemia-ayuno", titulo: "Hipoglucemia después de un ayuno", descripcion: "18 meses, gastroenteritis, no come hace 14 horas; lo traen somnoliento con glucemia de 35 mg/dL.", pasos: [
        { nodo: "ecm-hipoglucemia", nota: "Antes de dar glucosa, tomar la muestra crítica. La clave: ¿tiene cetonas?" },
        { nodo: "ecm-mcad", nota: "Sin cetonas, con ayuno prolongado y un lactante antes sano: defecto de β-oxidación, sobre todo MCAD." },
        { nodo: "ecm-hiperinsulinismo", nota: "Sin cetonas y con necesidad de mucha glucosa para sostenerlo: hiperinsulinismo." },
        { nodo: "ecm-gsd1", nota: "Con hepatomegalia, ayuno corto, lactato y triglicéridos altos: glucogenosis tipo I." },
        { nodo: "ecm-emergencia", nota: "Glucosa IV sin demora; en defectos de β-oxidación, no usar lípidos." }
      ] },
      { id: "acidosis", titulo: "Acidosis con anión gap alto", descripcion: "8 meses, vómitos e hiperventilación tras una otitis; bicarbonato 9, anión gap 26, cetonuria intensa.", pasos: [
        { nodo: "ecm-acidosis", nota: "Descartar primero lo frecuente: deshidratación, cetoacidosis diabética, intoxicaciones, sepsis con lactato." },
        { nodo: "ecm-pa-mma", nota: "Cetosis desproporcionada, amonio alto, neutropenia o plaquetas bajas: acidemia propiónica o metilmalónica." },
        { nodo: "ecm-mito", nota: "Si domina el lactato con compromiso de varios órganos: defecto mitocondrial o de piruvato." },
        { nodo: "ecm-laboratorio", nota: "Ácidos orgánicos en orina y acilcarnitinas en sangre dan el diagnóstico." }
      ] },
      { id: "hepatomegalia", titulo: "Lactante con hepatomegalia", descripcion: "4 meses, abdomen globuloso, hígado a 6 cm, irritable antes de las tomas.", pasos: [
        { nodo: "ecm-gsd1", nota: "Hígado grande y blando, cara de muñeca, hipoglucemia al espaciar tomas: glucogenosis tipo I." },
        { nodo: "ecm-gsd-otras", nota: "Con transaminasas y CK altas y cetosis: glucogenosis III." },
        { nodo: "ecm-gaucher", nota: "Si domina el bazo con citopenias, pensar en enfermedades lisosomales." },
        { nodo: "ecm-npc", nota: "Antecedente de colestasis neonatal y esplenomegalia: Niemann-Pick C." }
      ] },
      { id: "regresion", titulo: "Pérdida de pautas", descripcion: "3 años, venía bien y en los últimos meses habla peor, se cae y se volvió irritable.", pasos: [
        { nodo: "ecm-regresion", nota: "Regresión siempre es alarma: RM, fondo de ojo, audición y estudios metabólicos dirigidos." },
        { nodo: "ecm-mps", nota: "Facies tosca, rigidez articular, hepatoesplenomegalia: mucopolisacaridosis." },
        { nodo: "ecm-xald", nota: "Varón escolar con conducta y rendimiento en caída, piel oscura: adrenoleucodistrofia." },
        { nodo: "ecm-mito", nota: "Regresión en escalones con las infecciones y lesiones en ganglios basales: Leigh." }
      ] }
    ]
  },
  vias: {
    titulo: "Vías metabólicas",
    padre: "ecm",
    nodosDe: "ecm",
    ruta: ["Pediatría", "Metabolismo", "Errores congénitos", "Vías metabólicas"],
    bajada: "Todas las vías del mapa en un solo esquema, simplificado para la clínica. Cada fila es una vía: los metabolitos en orden, las enzimas arriba de las flechas y, en rojo, el paso que falla en cada enfermedad. Los metabolitos con borde grueso aparecen en más de una vía: pasá el cursor para ver dónde se cruzan.",
    disposicion: "vias",
    indice: "Enfermedades por grupo de vías",
    buscar: "Buscar una enfermedad o enzima: OTC, GALT, MCAD…",
    pista: "Tocá un bloqueo rojo para abrir la enfermedad. El borde del metabolito indica dónde ocurre: punteado verde, mitocondria; violeta, lisosoma; ocre, peroxisoma; azul, retículo y Golgi.",
    grupos: [
      { titulo: "Grupo 2 · Energía: hidratos de carbono", color: "var(--c-ener)", carriles: [
        { titulo: "Glucógeno y glucosa", sub: "Hígado: sostiene la glucemia en el ayuno", pasos: ["Glucógeno", { e: "Desramificante · fosforilasa", ecm: "ecm-gsd-otras", dx: "GSD III, VI, IX" }, "Glucosa-1-P", "Glucosa-6-P", { e: "Glucosa-6-fosfatasa", ecm: "ecm-gsd1", dx: "GSD I" }, "Glucosa en sangre", { e: "GLUT1", ecm: "ecm-glut1", dx: "Déficit de GLUT1" }, "Glucosa en el cerebro"] },
        { titulo: "Regulación", sub: "La insulina frena la lipólisis y la cetogénesis", pasos: ["Célula β", { e: "Exceso de insulina", ecm: "ecm-hiperinsulinismo", dx: "Hiperinsulinismo" }, "Hipoglucemia sin cetonas"] },
        { titulo: "Glucólisis y mitocondria", sub: "Del piruvato al ATP", pasos: ["Glucosa-6-P", "Triosas-P", "Piruvato", { e: "PDH", ecm: "ecm-pdh", dx: "Déficit de PDH" }, "m:Acetil-CoA", "m:Ciclo de Krebs", "m:NADH", { e: "Complejos I-V", ecm: "ecm-mito", dx: "Mitocondrial" }, "m:ATP"] },
        { titulo: "Piruvato carboxilasa", sub: "Gluconeogénesis y anaplerosis", pasos: ["Piruvato", { e: "Piruvato carboxilasa", ecm: "ecm-pdh", dx: "Déficit de PC" }, "m:Oxalacetato", "m:Ciclo de Krebs"] }
      ] },
      { titulo: "Grupo 2 · Energía: grasas", color: "var(--c-ener)", carriles: [
        { titulo: "β-oxidación", sub: "Combustible del ayuno, del corazón y del músculo", pasos: ["Ácidos grasos", "Acil-CoA", { e: "Carnitina · CPT1 · CPT2", ecm: "ecm-lcfaod", dx: "Transporte de carnitina" }, "m:Acil-CoA largo", { e: "VLCAD · LCHAD", ecm: "ecm-lcfaod", dx: "Cadena larga" }, "m:Acil-CoA medio", { e: "MCAD", ecm: "ecm-mcad", dx: "MCAD" }, "m:Acetil-CoA"] },
        { titulo: "Cuerpos cetónicos", sub: "Combustible del cerebro en el ayuno", pasos: ["m:Acetil-CoA", { e: "HMG-CoA sintasa y liasa" }, "Cuerpos cetónicos", "Cerebro y músculo"] }
      ] },
      { titulo: "Grupo 1 · Intoxicación: azúcares", color: "var(--c-tox)", carriles: [
        { titulo: "Galactosa", sub: "De la lactosa de la leche", pasos: ["Galactosa", { e: "GALK" }, "Galactosa-1-P", { e: "GALT", ecm: "ecm-galactosemia", dx: "Galactosemia" }, "Glucosa-1-P"] },
        { titulo: "Fructosa", sub: "Fruta, sacarosa, sorbitol", pasos: ["Fructosa", { e: "Fructoquinasa" }, "Fructosa-1-P", { e: "Aldolasa B", ecm: "ecm-ihf", dx: "Intolerancia a la fructosa" }, "Triosas-P"] }
      ] },
      { titulo: "Grupo 1 · Intoxicación: aminoácidos y amonio", color: "var(--c-tox)", carriles: [
        { titulo: "Fenilalanina y tirosina", pasos: ["Fenilalanina", { e: "PAH · BH4", ecm: "ecm-pku", dx: "Fenilcetonuria" }, "Tirosina", { e: "varios pasos" }, "Fumarilacetoacetato", { e: "FAH", ecm: "ecm-tirosinemia", dx: "Tirosinemia I" }, "Fumarato"] },
        { titulo: "Aminoácidos ramificados", sub: "Leucina, isoleucina, valina", pasos: ["Leu · Ile · Val", { e: "Transaminasa" }, "Cetoácidos", { e: "BCKD", ecm: "ecm-msud", dx: "Jarabe de arce" }, "m:Isovaleril-CoA", { e: "IVD", ecm: "ecm-isovalerica", dx: "Isovalérica" }, "m:Metilcrotonil-CoA"] },
        { titulo: "Propionato", sub: "De Ile, Val, Met, Tre, AG impares y bacterias", pasos: ["m:Propionil-CoA", { e: "PCC · biotina", ecm: "ecm-pa-mma", dx: "Propiónica" }, "m:Metilmalonil-CoA", { e: "MUT · B12", ecm: "ecm-pa-mma", dx: "Metilmalónica" }, "m:Succinil-CoA", "m:Ciclo de Krebs"] },
        { titulo: "Lisina", pasos: ["Lisina · triptófano", "m:Glutaril-CoA", { e: "GCDH", ecm: "ecm-glutarica", dx: "Glutárica tipo 1" }, "m:Crotonil-CoA", "m:Acetil-CoA"] },
        { titulo: "Metionina", pasos: ["Metionina", "Homocisteína", { e: "CBS · B6", ecm: "ecm-homocistinuria", dx: "Homocistinuria" }, "Cistationina", "Cisteína"] },
        { titulo: "Ciclo de la urea", sub: "Elimina el amonio de las proteínas", pasos: ["m:NH₃", { e: "NAGS · CPS1", ecm: "ecm-urea", dx: "NAGS · CPS1" }, "m:Carbamoil-P", { e: "OTC", ecm: "ecm-urea", dx: "OTC" }, "Citrulina", { e: "ASS · ASL", ecm: "ecm-urea", dx: "Citrulinemia · ASL" }, "Arginina", { e: "Arginasa" }, "Urea"] }
      ] },
      { titulo: "Grupo 1 · Cofactores", color: "var(--c-tox)", carriles: [
        { titulo: "Vitaminas", sub: "Epilepsias y crisis que responden a un cofactor", pasos: ["Biotina unida", { e: "Biotinidasa", ecm: "ecm-vitaminas", dx: "Biotinidasa" }, "Biotina libre", "|", "Lisina", { e: "Antiquitina", ecm: "ecm-vitaminas", dx: "Dependencia de piridoxina" }, "Piridoxal-P disponible"] }
      ] },
      { titulo: "Grupo 3 · Moléculas complejas", color: "var(--c-comp)", carriles: [
        { titulo: "Lisosoma (1)", sub: "Degradación de macromoléculas", pasos: ["l:Glucocerebrósido", { e: "Glucocerebrosidasa", ecm: "ecm-gaucher", dx: "Gaucher" }, "Glucosa + ceramida", "|", "l:Glucógeno", { e: "α-glucosidasa ácida", ecm: "ecm-pompe", dx: "Pompe" }, "Glucosa"] },
        { titulo: "Lisosoma (2)", pasos: ["l:Glucosaminoglucanos", { e: "Hidrolasas", ecm: "ecm-mps", dx: "Mucopolisacaridosis" }, "Azúcares", "|", "l:Colesterol", { e: "NPC1 · NPC2", ecm: "ecm-npc", dx: "Niemann-Pick C" }, "Membranas"] },
        { titulo: "Peroxisoma", pasos: ["Ácidos grasos muy largos", { e: "ABCD1", ecm: "ecm-xald", dx: "X-ALD" }, "p:β-oxidación peroxisomal", "|", "Proteínas PEX", { e: "Biogénesis", ecm: "ecm-zellweger", dx: "Zellweger" }, "p:Peroxisoma"] },
        { titulo: "Retículo y Golgi", pasos: ["r:Proteínas", { e: "Glicosilación", ecm: "ecm-cdg", dx: "CDG" }, "r:Glucoproteínas", "|", "7-Dehidrocolesterol", { e: "DHCR7", ecm: "ecm-slo", dx: "Smith-Lemli-Opitz" }, "Colesterol"] }
      ] }
    ]
  }
};

window.NODOS = [
  /* ───────────── TEMAS PRINCIPALES ───────────── */
  {
    id: "bronquiolitis", nivel: 1,
    titulo: "Bronquiolitis",
    tipo: "tema",
    x: 240, y: 300,
    edad: "0 a 2 años",
    resumen: "Primer episodio de sibilancias o crepitantes asociado a una infección viral, en menores de 2 años. Su manejo es de sostén.",
    teoria: [
      { h: "Definición", html: "<p>Primer episodio de obstrucción bronquial (sibilancias y/o crepitantes) en un lactante menor de 2 años, precedido por un cuadro de vía aérea superior. La AAP la restringe a menores de 2 años; muchos trabajos usan el corte de 12 meses.</p>" },
      { h: "Etiología", html: "<p>El <b>VSR</b> causa la mayoría de los casos y predomina en otoño e invierno. También rinovirus, metapneumovirus, parainfluenza, adenovirus, influenza y SARS-CoV-2. Las coinfecciones son frecuentes.</p>" },
      { h: "Fisiopatología", html: "<p>Necrosis del epitelio bronquiolar, edema de la submucosa y tapones de moco y detritos. El resultado es atrapamiento aéreo, atelectasias y alteración ventilación/perfusión con hipoxemia.</p>" },
      { h: "Clínica", html: "<p>Rinorrea y tos, seguidas de taquipnea, tiraje, sibilancias y crepitantes. En menores de 2 meses y prematuros puede debutar con <b>apneas</b>. El pico de gravedad suele estar entre el día 3 y el 5; la tos puede durar 2 a 4 semanas.</p>" },
      { h: "Gravedad: score de Tal modificado", html: `<p>Herramienta usada en Argentina para clasificar la gravedad. Puntaje de 0 a 12.</p>
        <div class="tabla"><table>
          <thead><tr><th>Puntos</th><th>FR &lt; 6 m</th><th>FR ≥ 6 m</th><th>Sibilancias</th><th>Cianosis</th><th>Retracción</th></tr></thead>
          <tbody>
            <tr><td>0</td><td>≤ 40</td><td>≤ 30</td><td>No</td><td>No</td><td>No</td></tr>
            <tr><td>1</td><td>41–55</td><td>31–45</td><td>Fin de espiración</td><td>Perioral al llorar</td><td>Subcostal (+)</td></tr>
            <tr><td>2</td><td>56–70</td><td>46–60</td><td>Toda la espiración</td><td>Perioral en reposo</td><td>Intercostal (++)</td></tr>
            <tr><td>3</td><td>&gt; 70</td><td>&gt; 60</td><td>Inspiración y espiración</td><td>Generalizada en reposo</td><td>Supraclavicular y aleteo (+++)</td></tr>
          </tbody></table></div>
        <p class="nota">Leve ≤ 4 · Moderada 5–8 · Grave ≥ 9</p>` },
      { h: "Factores de riesgo de evolución grave", html: "<ul><li>Edad menor de 3 meses</li><li>Prematurez y displasia broncopulmonar</li><li>Cardiopatía congénita con repercusión hemodinámica</li><li>Inmunodeficiencia, enfermedad neuromuscular</li><li>Desnutrición</li></ul>" },
      { h: "Diagnóstico", html: "<p>Es <b>clínico</b>. La radiografía de tórax y el laboratorio no se piden de rutina; se reservan para cuadros graves, evolución atípica o sospecha de complicación.</p>" },
      { h: "Tratamiento", html: "<p><b>Sostén</b>: desobstrucción nasal, hidratación y alimentación fraccionada, oxígeno si hay hipoxemia (umbral de SatO₂ entre 90 y 92 % según la guía). La CNAF es una opción de rescate cuando falla el oxígeno estándar.</p><p><b>No se recomiendan de rutina</b>: salbutamol, adrenalina, corticoides, solución salina hipertónica en guardia, kinesioterapia respiratoria ni antibióticos. Algunas normativas locales admiten una prueba terapéutica con broncodilatador evaluada con un score objetivo, que se suspende si no hay respuesta.</p>" },
      { h: "Pronóstico", html: "<p>Una proporción relevante presenta luego sibilancias recurrentes, sobre todo tras bronquiolitis por rinovirus o cuando hay atopia. Ver el nodo <a href=\"#sibilancias\">Sibilancias recurrentes</a>.</p>" }
    ],
    diferenciales: [
      { dx:"Primer episodio de asma o sibilancia inducida por virus", claves: "<ul><li>Mayor de 12 meses, atopia personal o familiar, episodios previos.</li><li>Respuesta clara al salbutamol (en la bronquiolitis típica no la hay).</li></ul>", nodo: "sibilancias" },
      { dx:"Neumonía bacteriana", claves: "<ul><li>Fiebre alta y mal estado, taquipnea con foco auscultatorio, sin sibilancias difusas.</li><li>Radiografía con consolidación; reactantes altos.</li></ul>" },
      { dx:"Cardiopatía con insuficiencia cardíaca", claves: "<ul><li>Soplo, hepatomegalia mayor que la esperable, ritmo de galope, mal progreso de peso previo.</li><li>Sudoración con las tomas; cardiomegalia en la radiografía.</li></ul>", nodo: "cc-icc" },
      { dx:"Tos convulsa (pertussis)", claves: "<ul><li>Lactante pequeño con accesos de tos, cianosis o apneas y poco compromiso entre accesos.</li><li>Linfocitosis; contacto con tos prolongada.</li></ul>" },
      { dx:"Aspiración o cuerpo extraño", claves: "<ul><li>Inicio brusco con atragantamiento, asimetría auscultatoria.</li><li>Sin pródromo catarral.</li></ul>" }
    ],
    evidencia: ["ralston2014", "gadomski2014", "paris2018", "plint2009", "melody2022", "harmonie2023", "matisse2023"],
    pico: [
      {
        p: "Lactantes internados en sala general por bronquiolitis con requerimiento de oxígeno",
        i: "Cánula nasal de alto flujo (CNAF) desde el inicio",
        c: "Oxígeno estándar por cánula, con CNAF solo como rescate",
        o: "Escalada del tratamiento (pase a cuidados intensivos o cambio de soporte)",
        respuesta: "La CNAF temprana reduce la escalada (12 % vs 23 %), pero no acorta la internación ni el tiempo de oxígeno. Es razonable empezar con oxígeno estándar y reservar la CNAF para quienes fallan.",
        certeza: "Alta",
        refs: ["paris2018"]
      },
      {
        p: "Lactantes con bronquiolitis que consultan en la guardia",
        i: "Adrenalina nebulizada + dexametasona oral",
        c: "Placebo",
        o: "Internación dentro de los 7 días",
        respuesta: "El grupo combinado tuvo menos internaciones, pero la diferencia dejó de ser significativa al ajustar por comparaciones múltiples. No se recomienda de rutina; es una hipótesis sin confirmar.",
        certeza: "Baja",
        refs: ["plint2009"]
      },
      {
        p: "Lactantes sanos de término o pretérmino tardío que enfrentan su primera temporada de VSR",
        i: "Nirsevimab, dosis única",
        c: "Placebo o sin profilaxis",
        o: "Infección respiratoria baja por VSR con atención médica o internación",
        respuesta: "Reduce la IRAB por VSR con atención médica en alrededor de un 75 % (MELODY) y la internación en alrededor de un 83 % (HARMONIE).",
        certeza: "Alta",
        refs: ["melody2022", "harmonie2023"]
      },
      {
        p: "Lactantes con bronquiolitis",
        i: "Salbutamol inhalado o nebulizado",
        c: "Placebo",
        o: "Saturación, internación, duración de la estadía",
        respuesta: "No mejora ninguno de estos resultados. Puede mejorar transitoriamente un score clínico sin impacto en desenlaces relevantes.",
        certeza: "Moderada",
        refs: ["gadomski2014", "ralston2014"]
      }
    ],
    ateneos: [],
    conexiones: ["vsr", "rinovirus", "prevencion-vsr", "prematurez", "oxigeno", "bo-postinfecciosa", "sibilancias", "saba", "ambiente", "cort-sistemicos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  {
    id: "sibilancias", nivel: 1,
    titulo: "Sibilancias recurrentes",
    tipo: "tema",
    x: 600, y: 300,
    edad: "Menores de 6 años",
    submapa: "sibilancias",
    resumen: "Más de un episodio de sibilancias, al menos uno confirmado, en un menor de 6 años. Es un síndrome con historias distintas, no una sola enfermedad.",
    teoria: [
      { h: "Definición", html: "<p>La ERS (2024) propone: edad de 0 a menos de 6 años, <b>más de un episodio</b> de sibilancias y <b>al menos uno confirmado</b> por un profesional. Definiciones anteriores pedían tres o más episodios en el último año; conviene revisar qué criterio usó cada estudio.</p><p>Después de nombrarlo, registrar cómo está el chico <b>entre episodios</b>: si está bien entre resfríos o si tiene síntomas con el juego, la risa o durante el sueño.</p>" },
      { h: "Tres pacientes que sibilan", html: "<p>Un lactante de 7 meses con su primer episodio, un chico de 18 meses con su cuarto episodio y bien entre resfríos, y una nena de 4 años con tos nocturna y sibilancias al correr pueden sonar igual al auscultarlos. Lo que los distingue es <b>cuándo empezó, cuántas veces pasó y qué ocurre entre episodios</b>. Ver la pestaña Casos.</p>" },
      { h: "Fenotipos", html: "<p><b>Por evolución</b> (Tucson, ALSPAC): trayectorias que solo se asignan mirando hacia atrás, cuando el chico creció.</p><p><b>Por patrón clínico</b> (ERS 2008): <i>episódicas virales</i> o <i>por desencadenantes múltiples</i>. La ERS 2024 advierte que estas etiquetas no reflejan la patología de la vía aérea y predicen mal la respuesta al tratamiento; sirven para buscar bibliografía. Propone sumar <b>rasgos tratables</b>: eosinófilos en sangre, sensibilización a aeroalérgenos, función pulmonar e infección.</p>" },
      { h: "¿Cuándo es asma?", html: "<p>GINA permite diagnosticar asma en menores de 6 años si se reúnen tres elementos: patrón compatible, ausencia de una causa alternativa probable y respuesta documentada al tratamiento. Con uno o dos, se registra <i>asma sospechada</i>. Ver el submapa.</p>" },
      { h: "¿Va a tener asma?", html: "<p>El <a href=\"#ipa\">Índice Predictivo de Asma</a> ayuda a estimar el riesgo. Un IPA negativo hace poco probable el asma en la edad escolar.</p>" },
      { h: "Diagnóstico diferencial", html: "<p>Pensar en otra causa si hay inicio neonatal, falla de crecimiento, sibilancias fijas o unilaterales, vómitos asociados a la alimentación, hipocratismo o falta de respuesta al tratamiento. Ver <a href=\"#dd-sibilancias\">Diagnóstico diferencial</a>.</p>" },
      { h: "Tratamiento del episodio", html: "<p><b>Salbutamol</b> con inhalador de dosis medida y aerocámara. Los corticoides orales no se indican de rutina en preescolares con sibilancias virales; se reservan para episodios graves.</p>" },
      { h: "Tratamiento controlador (≤ 5 años, GINA)", html: `<ol class="pasos">
        <li><b>Paso 1</b> · Considerar CI intermitente en dosis cortas al inicio de los resfríos.</li>
        <li><b>Paso 2</b> · CI diario en dosis bajas durante 3 meses como prueba terapéutica. Alternativas: montelukast o CI intermitente.</li>
        <li><b>Paso 3</b> · Duplicar la dosis baja de CI.</li>
        <li><b>Paso 4</b> · Continuar y derivar a especialista.</li></ol>
        <p>Antes de subir un paso: revisar técnica inhalatoria, adherencia, exposición a humo de tabaco y diagnóstico. El montelukast tiene una advertencia de la FDA (2020) por eventos neuropsiquiátricos.</p>` },
      { h: "Historia natural", html: "<p>Los CI controlan síntomas mientras se usan, pero <b>no modifican</b> la evolución hacia asma (PEAK, Bisgaard 2006).</p>" }
    ],
    diferenciales: [
      { dx:"Asma", claves: "<ul><li>Síntomas también entre infecciones (ejercicio, risa, llanto, noche).</li><li>Atopia, antecedentes familiares; buena respuesta al broncodilatador y al CI.</li></ul>", nodo: "asma" },
      { dx:"Bronquiolitis obliterante postinfecciosa", claves: "<ul><li>Antecedente de una bronquiolitis grave (adenovirus) y síntomas persistentes desde entonces.</li><li>Rales y sibilancias fijos, sin respuesta al broncodilatador; TC con patrón en mosaico.</li></ul>", nodo: "bo-postinfecciosa" },
      { dx:"Fibrosis quística", claves: "<ul><li>Mal progreso de peso, diarrea grasa, infecciones bacterianas a repetición, hipocratismo.</li><li>Test del sudor alterado.</li></ul>" },
      { dx:"Malformaciones de la vía aérea o anillos vasculares", claves: "<ul><li>Sibilancia o estridor desde el nacimiento, monofónica, que no cambia con los episodios.</li><li>Empeora con el llanto o la alimentación.</li></ul>" },
      { dx:"Reflujo gastroesofágico con aspiración", claves: "<ul><li>Síntomas relacionados con las tomas, tos al comer, neumonías recurrentes en el mismo lóbulo.</li></ul>" },
      { dx:"Cuerpo extraño", claves: "<ul><li>Inicio brusco, episodio de atragantamiento, sibilancia unilateral o localizada.</li></ul>" }
    ],
    evidencia: ["makrinioti2024", "gina2026", "martinez1995", "henderson2008", "jackson2008", "lee2024", "zeiger2011", "fitzpatrick2016", "guilbert2006", "bisgaard2006", "brand2008", "castro2000", "bacharier2015", "jartti2006", "panickar2009"],
    pico: [
      {
        p: "Preescolares con sibilancias recurrentes e IPA positivo",
        i: "Fluticasona inhalada diaria durante 2 años",
        c: "Placebo",
        o: "Desarrollo de asma (días libres de síntomas en el año sin tratamiento)",
        respuesta: "No. Mejora el control mientras se usa, pero al suspenderlo no hay diferencia. El CI no previene el asma.",
        certeza: "Alta",
        refs: ["guilbert2006", "bisgaard2006"]
      },
      {
        p: "Preescolares con sibilancias recurrentes y exacerbaciones en el último año",
        i: "Budesonida nebulizada intermitente en altas dosis (1 mg c/12 h por 7 días al inicio de cada cuadro)",
        c: "Budesonida diaria en dosis bajas (0,5 mg/noche)",
        o: "Frecuencia de exacerbaciones que requieren corticoide oral",
        respuesta: "Sin diferencias en exacerbaciones; el esquema intermitente expone a mucho menos corticoide acumulado. Es una alternativa válida en el fenotipo episódico.",
        certeza: "Moderada",
        refs: ["zeiger2011"]
      },
      {
        p: "Preescolares con sibilancias persistentes que necesitan un controlador",
        i: "Elegir el controlador según marcadores de tipo 2 (sensibilización a aeroalérgenos, eosinófilos)",
        c: "Elegir el controlador sin marcadores",
        o: "Probabilidad de responder mejor al CI diario",
        respuesta: "Los niños con sensibilización a aeroalérgenos o eosinófilos ≥ 300/µL tuvieron más probabilidad de responder mejor al CI diario que al montelukast o al CI a demanda.",
        certeza: "Moderada",
        refs: ["fitzpatrick2016"]
      },
      {
        p: "Preescolares con sibilancias que consultan por un episodio agudo",
        i: "Prednisolona oral",
        c: "Placebo",
        o: "Duración de la internación",
        respuesta: "Beneficio modesto. El metaanálisis de datos individuales mostró mejoría del puntaje a las 4 h (no a las 12 h) y 3,2 h menos de internación, con mayor efecto (4,5 h) en quienes tienen antecedentes de sibilancias o asma. Panickar 2009 no había encontrado diferencias. Usarlo según gravedad y respuesta al salbutamol.",
        certeza: "Moderada",
        refs: ["lee2024", "panickar2009", "jartti2006"]
      },
      {
        p: "Preescolares con antecedente de infecciones respiratorias bajas graves",
        i: "Azitromicina al inicio de los síntomas de vía aérea",
        c: "Placebo",
        o: "Progresión a infección respiratoria baja grave",
        respuesta: "Redujo la progresión a cuadros graves. No se adoptó como práctica habitual por el riesgo de resistencia y por falta de replicación.",
        certeza: "Baja",
        refs: ["bacharier2015"]
      }
    ],
    casos: [
      { titulo: "Lactante de 7 meses, primer episodio", html: "<p>Dos días de rinorrea; ahora tos, taquipnea, sibilancias y rales bilaterales. Nunca tuvo un cuadro parecido.</p><p><b>Cómo lo nombramos:</b> bronquiolitis, si encaja con la definición de la SAP. La sibilancia es el ruido; el edema y las secreciones contribuyen al estrechamiento.</p><p><b>Qué evidencia buscar:</b> la de lactantes con primer episodio de bronquiolitis.</p>", nodos: ["bronquiolitis", "sr-terminos"] },
      { titulo: "18 meses, cuarto episodio, bien entre resfríos", html: "<p>Rinorrea, tos y sibilancias, igual que el anterior. Tres episodios previos, uno confirmado por su pediatra. Entre cuadros juega, duerme y respira bien.</p><p><b>Cómo lo nombramos:</b> sibilancias recurrentes asociadas a infecciones, con intervalos asintomáticos. El término histórico <i>episodic viral wheeze</i> sirve para buscar artículos.</p><p><b>Qué evidencia buscar:</b> dos preguntas por separado. Durante la crisis: broncodilatador y corticoide sistémico según gravedad. Entre crisis: si una estrategia preventiva reduce las próximas exacerbaciones.</p>", nodos: ["sr-ers", "sr-cort-oral", "sr-ci-intermitente"] },
      { titulo: "4 años, síntomas también cuando está sana", html: "<p>Tres episodios en seis meses. Entre resfríos se despierta con tos y le silba el pecho al correr. En una crisis previa se documentó mejoría rápida con salbutamol. Sin otra causa probable.</p><p><b>Cómo lo nombramos:</b> reúne los tres criterios de GINA para asma en menores de 6 años.</p><p><b>Qué evidencia buscar:</b> controlador diario en preescolares con síntomas entre episodios, midiendo crisis, despertares y limitación para jugar.</p>", nodos: ["sr-gina5", "sr-patron", "sr-ci-diario"] },
      { titulo: "2 años, sibilancia de un solo lado tras atragantarse", html: "<p>Acceso brusco de tos mientras comía. Desde entonces, sibilancia localizada y menor entrada de aire de ese lado. No venía resfriado.</p><p><b>Qué cambia:</b> inicio brusco, atragantamiento y asimetría ponen primero la sospecha de cuerpo extraño y obligan a una evaluación urgente.</p>", nodos: ["sr-alternativas"] },
      { titulo: "El chico de 18 meses, ahora con 6 años", html: "<p>Si a los 6 años ya no sibila, en la cohorte de Tucson encajaría como sibilancias tempranas transitorias; si sigue sibilando, como persistentes. A los 18 meses ambas historias se veían iguales.</p><p>Una prueba de metacolina positiva documentaría <b>hiperreactividad bronquial</b>: la trayectoria cuenta cuándo sibiló; la prueba mide cómo responde su vía aérea.</p>", nodos: ["sr-trayectorias", "sr-terminos"] }
    ],
    ateneos: [
      { titulo: "Hiperreactividad y sibilancias (Pqhlqh)", fecha: "25 de noviembre de 2026", presenta: "Por completar", url: "" }
    ],
    conexiones: ["bronquiolitis", "asma", "rinovirus", "fenotipos", "ipa", "dd-sibilancias", "bo-postinfecciosa", "saba", "ci", "cort-sistemicos", "ambiente"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  {
    id: "asma", nivel: 1,
    titulo: "Asma",
    tipo: "tema",
    x: 965, y: 300,
    edad: "6 años en adelante",
    submapa: "asma",
    resumen: "Enfermedad inflamatoria crónica de la vía aérea con síntomas y obstrucción variables. A partir de los 6 años se confirma con función pulmonar.",
    teoria: [
      { h: "Definición (GINA)", html: "<p>Enfermedad heterogénea, generalmente con inflamación crónica de la vía aérea. Se define por síntomas respiratorios (sibilancias, disnea, opresión torácica, tos) que varían en el tiempo y en intensidad, junto con limitación variable del flujo aéreo espiratorio.</p>" },
      { h: "Diagnóstico", html: "<p>Historia de síntomas variables más <b>evidencia objetiva</b> de limitación variable del flujo. En niños de 6 años o más: <a href=\"#espirometria\">espirometría</a> con prueba broncodilatadora (aumento del VEF₁ &gt; 12 % del predicho), variabilidad del PEF, o prueba de provocación. La FeNO elevada apoya el diagnóstico de inflamación tipo 2.</p>" },
      { h: "Evaluación del control", html: "<p>En las últimas 4 semanas:</p><ul><li>Síntomas diurnos más de 2 veces por semana</li><li>Despertares nocturnos por asma</li><li>Uso de rescate más de 2 veces por semana</li><li>Limitación de la actividad</li></ul><p class=\"nota\">Ninguno: controlada · 1–2: parcialmente controlada · 3–4: no controlada</p><p>Además evaluar <b>riesgo futuro</b>: crisis previas, internaciones en terapia, mala técnica, baja adherencia, exposición a tabaco.</p>" },
      { h: "Tratamiento escalonado 6 a 11 años (GINA)", html: `<ol class="pasos">
        <li><b>Paso 1</b> · Rescate antiinflamatorio a demanda: CI-formoterol en dosis baja, o CI junto con SABA.</li>
        <li><b>Paso 2</b> · CI diario en dosis baja.</li>
        <li><b>Paso 3</b> · CI en dosis media, o CI-LABA en dosis baja, o budesonida-formoterol en dosis baja como mantenimiento y rescate (MART).</li>
        <li><b>Paso 4</b> · CI-LABA en dosis media, o MART con el doble de la dosis del paso 3. Considerar derivar.</li>
        <li><b>Paso 5</b> · Evaluación fenotípica por especialista y biológicos (anti-IgE, anti-IL-5, anti-IL-4R).</li></ol>
        <p>En adolescentes de 12 años o más, GINA prefiere budesonida-formoterol a demanda (pasos 1–2) y MART (pasos 3–5). El SABA solo ya no se recomienda.</p>` },
      { h: "Crisis asmática", html: "<p>Ver el nodo <a href=\"#crisis\">Crisis asmática</a>.</p>" },
      { h: "Siempre, en cada consulta", html: "<p>Técnica inhalatoria con aerocámara, adherencia, plan de acción escrito, comorbilidades (rinitis, obesidad), control ambiental y vacunación antigripal.</p>" }
    ],
    diferenciales: [
      { dx:"Disfunción de cuerdas vocales (obstrucción laríngea inducible)", claves: "<ul><li>Adolescente, estridor inspiratorio con el ejercicio o el estrés, sin respuesta al broncodilatador.</li><li>Espirometría con curva inspiratoria aplanada.</li></ul>" },
      { dx:"Disnea por desacondicionamiento", claves: "<ul><li>Falta de aire al esfuerzo sin tos ni sibilancias, espirometría normal.</li></ul>" },
      { dx:"Bronquiolitis obliterante y bronquiectasias", claves: "<ul><li>Obstrucción fija sin variabilidad; tos productiva crónica, infecciones recurrentes.</li></ul>", nodo: "bo-postinfecciosa" },
      { dx:"Fibrosis quística o discinesia ciliar primaria", claves: "<ul><li>Tos húmeda diaria, rinosinusitis crónica, otitis recurrentes (discinesia), mal progreso de peso (FQ).</li></ul>" },
      { dx:"Tos psicógena o hábito", claves: "<ul><li>Tos que desaparece durante el sueño, «de bocina», sin otros hallazgos.</li></ul>" }
    ],
    evidencia: ["reddel2022", "stanojevic2022", "sobieraj2018", "bisgaard2006chest", "obyrne2018", "kelly2012", "griffiths2013", "keeney2014", "griffiths2016", "powell2013", "castro2000"],
    casos: [
      { titulo: "8 años, tos de noche y salbutamol tres veces por semana", html: "<p>Desde el invierno se despierta con tos dos noches por semana y usa salbutamol tres veces por semana, sobre todo después de educación física. Nunca tuvo una crisis que requiriera corticoide oral.</p><p><b>Qué hacer:</b> confirmar el diagnóstico con espirometría y prueba broncodilatadora. Con 3 de 4 criterios de GINA, el asma no está controlada: iniciar CI diario en dosis baja (paso 2), revisar la técnica y dar un plan escrito.</p>", nodos: ["sa-espirometria", "sa-control", "sa-escalones"] },
      { titulo: "13 años, solo salbutamol cuando lo necesita", html: "<p>Usa salbutamol una o dos veces por semana; nunca recibió controlador. El año pasado tuvo una consulta en guardia.</p><p><b>Qué hacer:</b> desde los 12 años GINA prefiere budesonida-formoterol en dosis baja a demanda en lugar de salbutamol solo. La crisis del año previo es un factor de riesgo aunque hoy tenga pocos síntomas.</p>", nodos: ["sa-adolescentes", "sa-riesgo"] },
      { titulo: "10 años, crisis grave en la guardia", html: "<p>Habla en palabras sueltas, está sentado hacia adelante, FR 34, SatO₂ 89 %. Usa CI «cuando se acuerda».</p><p><b>Qué hacer:</b> oxígeno, salbutamol con ipratropio, corticoide sistémico en la primera hora; magnesio IV si no responde. Antes del alta: ajustar el controlador, revisar técnica y adherencia, plan escrito y control temprano.</p>", nodos: ["sa-crisis-gravedad", "sa-crisis-broncod", "sa-crisis-mg", "sa-alta"] }
    ],
    pico: [
      {
        p: "Niños de 4 a 11 años con asma persistente",
        i: "CI-formoterol como mantenimiento y rescate (SMART/MART)",
        c: "CI (con o sin LABA) como controlador y SABA como rescate",
        o: "Exacerbaciones",
        respuesta: "SMART redujo las exacerbaciones: RR 0,55 frente a CI en dosis más altas y RR 0,38 frente a CI-LABA en igual dosis. La evidencia en este grupo etario se basa en pocos pacientes.",
        certeza: "Baja a moderada",
        refs: ["sobieraj2018"]
      },
      {
        p: "Niños con crisis asmática en la guardia",
        i: "Dexametasona (1–2 dosis)",
        c: "Prednisona o prednisolona (3–5 días)",
        o: "Recaídas y vómitos",
        respuesta: "Igual eficacia para prevenir recaídas, con menos vómitos y mejor adherencia con dexametasona.",
        certeza: "Moderada",
        refs: ["keeney2014"]
      },
      {
        p: "Niños con crisis asmática grave",
        i: "Sulfato de magnesio nebulizado agregado a salbutamol e ipratropio",
        c: "Placebo nebulizado agregado al mismo esquema",
        o: "Puntaje de gravedad a los 60 minutos",
        respuesta: "Mejora pequeña del puntaje, más marcada en las crisis más graves y de menor evolución. El magnesio intravenoso sigue siendo la opción con más respaldo en la crisis grave refractaria.",
        certeza: "Moderada",
        refs: ["powell2013"]
      }
    ],
    ateneos: [],
    conexiones: ["sibilancias", "ipa", "crisis", "espirometria", "saba", "ci", "ambiente", "rinovirus", "fenotipos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* ───────────── CONCEPTOS ───────────── */
  {
    id: "vsr", nivel: 1, titulo: "Virus sincicial respiratorio", corto: "VSR", tipo: "concepto",
    x: 240, y: 110,
    resumen: "Principal causa de bronquiolitis y de internación por infección respiratoria en lactantes.",
    teoria: [
      { h: "Puntos clave", html: "<ul><li>Circulación estacional, con pico en otoño e invierno.</li><li>Casi todos los niños se infectan antes de los 2 años; la reinfección es habitual.</li><li>Mayor riesgo de cuadro grave en menores de 6 meses, prematuros y cardiópatas.</li><li>Diagnóstico por inmunofluorescencia o PCR cuando cambia la conducta (cohorte de internación, vigilancia).</li></ul>" }
    ],
    evidencia: ["melody2022", "harmonie2023", "matisse2023"],
    pico: [], ateneos: [],
    conexiones: ["bronquiolitis", "prevencion-vsr", "prematurez"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "prevencion-vsr", nivel: 2, titulo: "Prevención del VSR", tipo: "concepto",
    x: 85, y: 205,
    resumen: "Anticuerpos monoclonales para el lactante y vacuna materna.",
    teoria: [
      { h: "Estrategias", html: "<ul><li><b>Nirsevimab</b>: anticuerpo monoclonal de vida media prolongada. Dosis única intramuscular al inicio de la temporada (50 mg si pesa menos de 5 kg, 100 mg si pesa 5 kg o más).</li><li><b>Vacuna materna RSVpreF</b>: entre las semanas 32 y 36 de gestación; los anticuerpos pasan al bebé por vía transplacentaria.</li><li><b>Palivizumab</b>: aplicación mensual; históricamente reservado a grupos de alto riesgo.</li><li>Medidas generales: lavado de manos, lactancia materna, evitar humo de tabaco.</li></ul><p class=\"nota\">Revisar el calendario y los lineamientos nacionales vigentes.</p>" }
    ],
    evidencia: ["melody2022", "harmonie2023", "matisse2023"],
    pico: [], ateneos: [],
    conexiones: ["vsr", "bronquiolitis", "prematurez"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "prematurez", nivel: 3, titulo: "Prematurez y DBP", tipo: "concepto",
    x: 95, y: 420,
    resumen: "Factor de riesgo de bronquiolitis grave y de sibilancias recurrentes.",
    teoria: [
      { h: "Puntos clave", html: "<p>La prematurez y la displasia broncopulmonar (DBP) implican vía aérea de menor calibre y menos anticuerpos maternos transferidos. Aumentan el riesgo de internación por VSR, de apneas y de sibilancias en los primeros años.</p>" }
    ],
    evidencia: [], pico: [], ateneos: [],
    conexiones: ["bronquiolitis", "vsr", "prevencion-vsr"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "oxigeno", nivel: 2, titulo: "Oxigenoterapia y CNAF", tipo: "concepto",
    x: 345, y: 475,
    resumen: "Cuándo indicar oxígeno y qué lugar ocupa la cánula nasal de alto flujo.",
    teoria: [
      { h: "Puntos clave", html: "<ul><li>Bronquiolitis: oxígeno si la SatO₂ es menor de 90–92 % según la guía. No perseguir saturaciones altas ni monitorizar en forma continua a quienes ya no lo necesitan.</li><li>Crisis asmática: objetivo de SatO₂ entre 92 y 95 % (GINA 2026).</li><li>CNAF: aporta flujo calentado y humidificado, con algo de presión positiva. En bronquiolitis su lugar es el rescate tras falla del oxígeno estándar.</li></ul>" }
    ],
    evidencia: ["paris2018", "ralston2014"],
    pico: [], ateneos: [],
    conexiones: ["bronquiolitis", "crisis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "rinovirus", nivel: 2, titulo: "Rinovirus", tipo: "concepto",
    x: 420, y: 135,
    resumen: "Segundo agente de bronquiolitis y principal desencadenante de crisis en preescolares y escolares.",
    teoria: [
      { h: "Puntos clave", html: "<p>Las sibilancias por rinovirus en los primeros años se asocian más fuertemente que las del VSR al desarrollo posterior de asma, sobre todo si hay atopia. También es el principal desencadenante de las crisis asmáticas en edad escolar.</p>" }
    ],
    evidencia: ["jartti2006"],
    pico: [], ateneos: [],
    conexiones: ["bronquiolitis", "sibilancias", "asma"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "bo-postinfecciosa", nivel: 3, titulo: "Bronquiolitis obliterante postinfecciosa", corto: "BO postinfecciosa", tipo: "concepto",
    x: 420, y: 400,
    resumen: "Secuela grave, clásicamente por adenovirus, con obstrucción fija. Diagnóstico diferencial relevante en nuestro medio.",
    teoria: [
      { h: "Puntos clave", html: "<ul><li>Sospechar ante taquipnea, sibilancias, crepitantes e hipoxemia persistentes después de una infección respiratoria grave, típicamente por adenovirus.</li><li>La tomografía de tórax muestra patrón en mosaico y atrapamiento aéreo.</li><li>La obstrucción no responde a broncodilatadores.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Asma", claves: "<ul><li>Variabilidad de síntomas y de la función pulmonar, respuesta al broncodilatador y al CI.</li><li>En BO la obstrucción es fija y hay rales persistentes.</li></ul>", nodo: "asma" },
      { dx:"Fibrosis quística", claves: "<ul><li>Test del sudor positivo, compromiso digestivo y nutricional.</li></ul>" },
      { dx:"Discinesia ciliar primaria", claves: "<ul><li>Dificultad respiratoria neonatal sin causa, rinitis desde el nacimiento, situs inversus en la mitad.</li></ul>" },
      { dx:"Aspiración crónica", claves: "<ul><li>Trastorno deglutorio o neurológico; tos con la alimentación.</li></ul>" }
    ],
    evidencia: [], pico: [], ateneos: [],
    conexiones: ["bronquiolitis", "sibilancias", "dd-sibilancias"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "fenotipos", nivel: 2, titulo: "Fenotipos de sibilancias", tipo: "concepto",
    x: 595, y: 110,
    resumen: "Transitorias, persistentes y de inicio tardío; episódicas virales o por desencadenantes múltiples.",
    teoria: [
      { h: "Dos clasificaciones", html: "<p><b>Tucson (por evolución)</b>: transitorias tempranas, persistentes y de inicio tardío. Útil para investigación; solo se aplica mirando hacia atrás.</p><p><b>ERS 2008 (por patrón clínico)</b>: episódicas virales o por desencadenantes múltiples. Útil para decidir el tratamiento, aunque el fenotipo cambia con el tiempo.</p>" }
    ],
    evidencia: ["martinez1995", "brand2008"],
    pico: [], ateneos: [],
    conexiones: ["sibilancias", "ipa", "asma"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ipa", nivel: 2, titulo: "Índice Predictivo de Asma", corto: "IPA", tipo: "concepto",
    x: 790, y: 165,
    resumen: "Estima el riesgo de asma en edad escolar en un preescolar con sibilancias.",
    teoria: [
      { h: "Criterios (Castro-Rodríguez 2000)", html: `<p>Sibilancias frecuentes (3 o más por año) en los primeros 3 años más:</p>
        <div class="tabla"><table><thead><tr><th>Mayores (1)</th><th>Menores (2)</th></tr></thead>
        <tbody><tr><td>Asma en padre o madre</td><td>Rinitis alérgica</td></tr>
        <tr><td>Dermatitis atópica</td><td>Sibilancias sin resfrío</td></tr>
        <tr><td></td><td>Eosinofilia ≥ 4 %</td></tr></tbody></table></div>
        <p>Positivo con 1 criterio mayor o 2 menores. La versión modificada agrega sensibilización a aeroalérgenos como mayor y sensibilización a alimentos como menor.</p>
        <p class="nota">Su mayor valor está en el valor predictivo negativo; el positivo es modesto.</p>` }
    ],
    evidencia: ["castro2000", "guilbert2006"],
    pico: [], ateneos: [],
    conexiones: ["sibilancias", "asma", "fenotipos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "dd-sibilancias", nivel: 2, titulo: "Diagnóstico diferencial", tipo: "concepto",
    x: 545, y: 480,
    resumen: "Qué más puede sibilar: señales de alarma que obligan a estudiar.",
    teoria: [
      { h: "Causas a considerar", html: "<ul><li>Aspiración de cuerpo extraño</li><li>Trastornos deglutorios y reflujo con aspiración</li><li>Fibrosis quística</li><li>Displasia broncopulmonar</li><li>Bronquiolitis obliterante postinfecciosa</li><li>Malformaciones: anillo vascular, traqueobroncomalacia</li><li>Cardiopatía con hiperflujo pulmonar</li><li>Inmunodeficiencias, discinesia ciliar primaria</li></ul>" },
      { h: "Señales de alarma", html: "<p>Inicio neonatal, falla de crecimiento, sibilancias fijas o unilaterales, tos de comienzo súbito, vómitos con la alimentación, hipocratismo, infecciones recurrentes o falta de respuesta al tratamiento.</p>" }
    ],
    evidencia: ["brand2008"],
    pico: [], ateneos: [],
    conexiones: ["sibilancias", "bo-postinfecciosa"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "saba", nivel: 1, titulo: "Broncodilatadores", tipo: "concepto",
    x: 735, y: 520,
    resumen: "Salbutamol con aerocámara: rescate en sibilancias y asma; sin beneficio demostrado en bronquiolitis.",
    teoria: [
      { h: "Puntos clave", html: "<ul><li>El inhalador de dosis medida con aerocámara es tan eficaz como la nebulización y se prefiere.</li><li>Bronquiolitis: no recomendado de rutina.</li><li>Sibilancias recurrentes y asma: rescate de elección en preescolares.</li><li>Crisis asmática (6 años o más): 4 a 10 disparos según gravedad, cada 20–30 minutos (GINA 2026).</li><li>Ipratropio: agregar en crisis moderadas a graves en la guardia.</li></ul>" }
    ],
    evidencia: ["gadomski2014", "reddel2022"],
    pico: [], ateneos: [],
    conexiones: ["bronquiolitis", "sibilancias", "asma", "crisis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ci", nivel: 1, titulo: "Corticoides inhalados", corto: "CI", tipo: "concepto",
    x: 820, y: 420,
    resumen: "Base del tratamiento controlador. Controlan síntomas, no cambian la historia natural.",
    teoria: [
      { h: "Puntos clave", html: "<ul><li>Controlador de elección en asma persistente y en sibilancias recurrentes por desencadenantes múltiples.</li><li>No previenen la aparición de asma (PEAK).</li><li>El esquema intermitente en altas dosis es una alternativa en preescolares con sibilancias episódicas (MIST).</li><li>Efecto sobre la talla: pequeño y relacionado con la dosis; usar la mínima dosis eficaz.</li><li>Clave: técnica inhalatoria y adherencia.</li></ul>" }
    ],
    evidencia: ["guilbert2006", "zeiger2011", "fitzpatrick2016", "sobieraj2018"],
    pico: [], ateneos: [],
    conexiones: ["sibilancias", "asma"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cort-sistemicos", nivel: 2, titulo: "Corticoides sistémicos", tipo: "concepto",
    x: 950, y: 520,
    resumen: "Indicados en la crisis asmática; sin beneficio en bronquiolitis ni de rutina en preescolares con sibilancias virales.",
    teoria: [
      { h: "Puntos clave", html: "<ul><li>Crisis asmática: prednisona o prednisolona 1–2 mg/kg/día (máximo 40 mg) por 3–5 días, o dexametasona 0,6 mg/kg (máximo 16 mg) en 1–2 dosis.</li><li>Bronquiolitis: no recomendados.</li><li>Preescolares con sibilancias virales: no de rutina; reservar para episodios graves.</li></ul><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" }
    ],
    evidencia: ["keeney2014", "panickar2009", "plint2009"],
    pico: [], ateneos: [],
    conexiones: ["crisis", "sibilancias", "bronquiolitis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "crisis", nivel: 1, titulo: "Crisis asmática", tipo: "concepto",
    x: 1105, y: 395,
    resumen: "Evaluación de la gravedad y tratamiento escalonado en la guardia.",
    teoria: [
      { h: "Evaluación inicial", html: "<p>Signos de gravedad: habla con dificultad o en palabras sueltas, agitación o somnolencia, uso de músculos accesorios, SatO₂ menor de 92 %, tórax silencioso.</p>" },
      { h: "Tratamiento", html: `<ol class="pasos">
        <li>Oxígeno con objetivo de SatO₂ 92–95 % (GINA 2026).</li>
        <li>Salbutamol con aerocámara según gravedad: 4 disparos en la leve, 4–6 en la moderada y 6–10 en la grave, repetidos cada 20–30 minutos.</li>
        <li>Corticoide sistémico en la primera hora.</li>
        <li>Ipratropio en crisis moderadas a graves.</li>
        <li>Sulfato de magnesio IV, 40–50 mg/kg (máximo 2 g) en 20 minutos, si la crisis es grave y no responde.</li>
        <li>Reevaluar a la hora; derivar a cuidados intensivos ante deterioro.</li></ol>` },
      { h: "Al alta", html: "<p>Iniciar o ajustar el controlador, revisar técnica, entregar un plan de acción escrito y control en 2 a 5 días (GINA 2026, niños).</p>" }
    ],
    diferenciales: [
      { dx:"Anafilaxia", claves: "<ul><li>Exposición a alérgeno con urticaria, angioedema, vómitos o hipotensión además del broncoespasmo.</li><li>Tratamiento: adrenalina IM primero.</li></ul>", nodo: "ex-anafilaxia" },
      { dx:"Neumonía", claves: "<ul><li>Fiebre alta, foco, hipoxemia que no mejora con broncodilatadores.</li></ul>" },
      { dx:"Neumotórax", claves: "<ul><li>Dolor torácico brusco, asimetría del murmullo; puede complicar una crisis grave.</li></ul>" },
      { dx:"Cuerpo extraño", claves: "<ul><li>Inicio brusco sin antecedente de asma, asimetría.</li></ul>" },
      { dx:"Laringitis o epiglotitis", claves: "<ul><li>Estridor inspiratorio, tos perruna o disfagia y babeo: es obstrucción alta, no broncoespasmo.</li></ul>" }
    ],
    evidencia: ["keeney2014", "powell2013"],
    pico: [], ateneos: [],
    conexiones: ["asma", "saba", "cort-sistemicos", "oxigeno"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "espirometria", nivel: 2, titulo: "Espirometría", tipo: "concepto",
    x: 1110, y: 195,
    resumen: "Confirma la obstrucción variable en niños de 6 años o más.",
    teoria: [
      { h: "Puntos clave", html: "<ul><li>Factible de forma confiable desde los 5–6 años.</li><li>Prueba broncodilatadora positiva en niños: aumento del VEF₁ mayor al 12 % del predicho.</li><li>Una espirometría normal no descarta asma; repetir con síntomas o usar variabilidad del PEF.</li><li>FeNO: apoya el diagnóstico de inflamación tipo 2.</li></ul>" }
    ],
    evidencia: ["reddel2022"],
    pico: [], ateneos: [],
    conexiones: ["asma"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ambiente", nivel: 3, titulo: "Tabaco y ambiente", tipo: "concepto",
    x: 950, y: 85,
    resumen: "Humo de tabaco, contaminación y alérgenos: factores modificables en los tres cuadros.",
    teoria: [
      { h: "Puntos clave", html: "<ul><li>La exposición al humo de tabaco, prenatal y posnatal, aumenta el riesgo de bronquiolitis grave, de sibilancias y de asma, y empeora el control.</li><li>Preguntar en cada consulta, incluido el vapeo.</li><li>Control de alérgenos solo cuando hay sensibilización demostrada.</li></ul>" }
    ],
    evidencia: ["brand2008"],
    pico: [], ateneos: [],
    conexiones: ["bronquiolitis", "sibilancias", "asma"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* ───────────── SUBMAPA: SIBILANCIAS RECURRENTES ─────────────
     Columnas: cómo lo nombramos · durante la crisis · entre crisis · con el tiempo */

  {
    id: "sr-terminos", nivel: 1, mapa: "sibilancias", titulo: "Sibilancia, broncoespasmo e hiperreactividad", corto: "Sibilancia ≠ broncoespasmo", tipo: "concepto",
    x: 150, y: 165,
    resumen: "Un signo, un mecanismo y una propiedad fisiológica. Confundirlos lleva a tratar el ruido.",
    teoria: [
      { h: "Tres palabras distintas", html: "<ul><li><b>Sibilancia</b>: signo. Ruido musical, habitualmente espiratorio, por paso de aire a través de vías estrechadas. Si la familia dice «le silba el pecho», precisar qué ruido describe.</li><li><b>Broncoespasmo</b>: mecanismo. Contracción del músculo liso bronquial. El estrechamiento también puede deberse a edema y secreciones, como en la bronquiolitis.</li><li><b>Hiperreactividad bronquial</b>: propiedad fisiológica. La vía aérea se estrecha de forma exagerada ante un estímulo; se mide con una prueba de provocación (metacolina).</li></ul>" },
      { h: "Por qué importa", html: "<p>El sonido no dice cuánto del estrechamiento es contracción muscular y cuánto edema y moco. Por eso oír una sibilancia no predice la respuesta al salbutamol: hay que documentarla.</p>" }
    ],
    evidencia: ["henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["sr-gravedad", "sr-salbutamol", "sr-trayectorias"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-ers", nivel: 2, mapa: "sibilancias", titulo: "Definición ERS 2024", tipo: "concepto",
    x: 150, y: 285,
    resumen: "Menor de 6 años, más de un episodio y al menos uno confirmado.",
    teoria: [
      { h: "Criterios", html: "<ol class=\"pasos\"><li>Edad de 0 a menos de 6 años.</li><li>Más de un episodio de sibilancias en la vida.</li><li>Al menos uno confirmado por un profesional.</li></ol>" },
      { h: "Qué cambia respecto de 2008", html: "<p>Las categorías <i>episodic viral wheeze</i> y <i>multiple-trigger wheeze</i> no reflejan la patología de la vía aérea y pueden no predecir la respuesta al tratamiento. Siguen sirviendo para recuperar estudios. La propuesta es describir el patrón entre episodios y sumar rasgos tratables: eosinófilos en sangre, sensibilización a aeroalérgenos, función pulmonar e infección.</p>" }
    ],
    evidencia: ["makrinioti2024", "brand2008"],
    pico: [], ateneos: [],
    conexiones: ["sr-gina5", "sr-patron", "sr-ipa"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-gina5", nivel: 2, mapa: "sibilancias", titulo: "Asma en menores de 6 años", corto: "Asma en ≤ 5 años (GINA)", tipo: "concepto",
    x: 150, y: 405,
    resumen: "Tres elementos juntos: patrón compatible, sin causa alternativa y respuesta documentada al tratamiento.",
    teoria: [
      { h: "Los tres criterios", html: "<ol class=\"pasos\"><li><b>Patrón compatible</b>: episodios recurrentes, o un episodio con síntomas entre crisis. Confirmar al menos una vez que el ruido es una sibilancia.</li><li><b>Sin causa alternativa</b> más probable en la historia y el examen.</li><li><b>Respuesta clínica oportuna</b> al tratamiento antiasmático: durante el episodio con el tratamiento agudo, o con menos síntomas y crisis tras 2 a 3 meses de corticoide inhalado diario.</li></ol><p>Con uno o dos criterios: registrar <b>asma sospechada</b> y seguir la evolución.</p>" },
      { h: "Documentar la respuesta", html: "<p>No es lo mismo «recibió salbutamol» que «documentamos que bajó la frecuencia respiratoria y el tiraje». Lo segundo es lo que cuenta como criterio.</p>" }
    ],
    diferenciales: [
      { dx:"Sibilancias recurrentes inducidas solo por virus", claves: "<ul><li>Síntomas solo con los resfríos, completamente bien entre episodios.</li><li>Muchos dejan de sibilar en la edad escolar.</li></ul>", nodo: "sibilancias" },
      { dx:"Bronquiolitis", claves: "<ul><li>Primer episodio en menores de 12 meses con pródromo catarral y crepitantes.</li></ul>", nodo: "bronquiolitis" },
      { dx:"Bronquitis bacteriana prolongada", claves: "<ul><li>Tos húmeda de más de 4 semanas que mejora con 2 semanas de antibiótico.</li></ul>" },
      { dx:"Causas estructurales o cuerpo extraño", claves: "<ul><li>Síntomas desde el nacimiento, sibilancia monofónica o localizada, retraso de crecimiento.</li></ul>", nodo: "dd-sibilancias" }
    ],
    evidencia: ["gina2026", "makrinioti2024"],
    pico: [], ateneos: [],
    conexiones: ["sr-ers", "sr-alternativas", "sr-gravedad", "sr-ci-diario"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-alternativas", nivel: 2, mapa: "sibilancias", titulo: "Causas alternativas", tipo: "concepto",
    x: 150, y: 525,
    resumen: "Lo que obliga a pensar en otra cosa antes de hablar de asma.",
    teoria: [
      { h: "El ejemplo que no se olvida", html: "<p>Dos años, tos de comienzo brusco mientras comía, menor entrada de aire y sibilancia de un solo lado: la prioridad es descartar con urgencia un <b>cuerpo extraño</b>.</p>" },
      { h: "Señales de alarma", html: "<ul><li>Inicio neonatal o en los primeros meses</li><li>Sibilancias fijas, unilaterales o sin relación con infecciones</li><li>Falla de crecimiento, hipocratismo</li><li>Vómitos o tos asociados a la alimentación</li><li>Infecciones recurrentes o falta de respuesta al tratamiento</li></ul>" }
    ],
    evidencia: ["brand2008", "gina2026"],
    pico: [], ateneos: [],
    conexiones: ["sr-gina5", "dd-sibilancias"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-gravedad", nivel: 1, mapa: "sibilancias", titulo: "Gravedad y respuesta", tipo: "concepto",
    x: 450, y: 185,
    resumen: "Primero cuánto le cuesta respirar; después cuánto cambia con el salbutamol.",
    teoria: [
      { h: "Qué evaluar", html: "<ul><li>Frecuencia respiratoria, tiraje y saturación</li><li>Capacidad para hablar, alimentarse e hidratarse</li><li>Estado de conciencia</li><li>Un score clínico objetivo antes y después del broncodilatador</li></ul>" },
      { h: "Por qué medir antes y después", html: "<p>La respuesta documentada orienta el tratamiento de hoy y, además, es uno de los criterios para diagnosticar asma en menores de 6 años.</p>" }
    ],
    evidencia: ["gina2026"],
    pico: [], ateneos: [],
    conexiones: ["sr-terminos", "sr-salbutamol", "sr-cort-oral", "sr-gina5"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-salbutamol", nivel: 1, mapa: "sibilancias", titulo: "Salbutamol con aerocámara", tipo: "concepto",
    x: 450, y: 335,
    resumen: "Rescate de elección en el preescolar con sibilancias recurrentes.",
    teoria: [
      { h: "Cómo darlo", html: "<ul><li>Inhalador de dosis medida con aerocámara; con máscara facial en menores de 4 años.</li><li>GINA (5 años o menos): 2 disparos de 100 µg cada 20 minutos durante la primera hora si hace falta.</li><li>Reevaluar con el mismo score a los 20–60 minutos.</li></ul><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" }
    ],
    evidencia: ["gina2026", "brand2008"],
    pico: [], ateneos: [],
    conexiones: ["sr-gravedad", "sr-terminos", "saba"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-cort-oral", nivel: 2, mapa: "sibilancias", titulo: "Corticoide oral en la crisis", corto: "Corticoide oral", tipo: "concepto",
    x: 450, y: 485,
    resumen: "Beneficio modesto, mayor en quienes ya tienen historia de sibilancias o asma.",
    teoria: [
      { h: "Qué dice la evidencia", html: "<p>Un metaanálisis de datos individuales (7 ensayos, 1728 chicos de 12 a 71 meses) mostró mejoría del puntaje de sibilancias a las 4 horas, sin diferencia clara a las 12, y una internación 3,2 horas más corta. En quienes tenían antecedentes de sibilancias o asma, 4,5 horas.</p>" },
      { h: "Al lado de la camilla", html: "<ul><li>Valorar gravedad y respuesta al salbutamol primero.</li><li>El beneficio es más plausible si la crisis requiere atención hospitalaria y hay antecedentes.</li><li>Las horas de estadía medidas no dicen cuánto ganaría un chico con una crisis leve en su casa.</li><li>El lactante con su primera bronquiolitis queda fuera de esta evidencia.</li></ul>" }
    ],
    evidencia: ["lee2024", "panickar2009", "jartti2006"],
    pico: [
      {
        p: "Niños de 12 a 71 meses con sibilancias agudas",
        i: "Corticoide oral",
        c: "Placebo",
        o: "Puntaje de sibilancias y duración de la internación",
        respuesta: "Mejoría del puntaje a las 4 h (diferencia de medias −0,31) sin diferencia a las 12 h. Internación 3,2 h más corta; 4,5 h en quienes tenían antecedentes de sibilancias o asma. Posible aumento de vómitos, con estimación imprecisa.",
        certeza: "Moderada",
        refs: ["lee2024"]
      }
    ],
    ateneos: [],
    conexiones: ["sr-gravedad", "sr-rinovirus", "cort-sistemicos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-patron", nivel: 1, mapa: "sibilancias", titulo: "Patrón entre episodios", tipo: "concepto",
    x: 750, y: 165,
    resumen: "La pregunta que más cambia la interpretación: ¿cómo está cuando se le pasa el resfrío?",
    teoria: [
      { h: "Qué preguntar", html: "<ul><li>¿Se despierta con tos?</li><li>¿Le silba el pecho al correr, reír o llorar?</li><li>¿Limita sus juegos?</li><li>¿Cuántos episodios tuvo y cuándo empezaron?</li></ul>" },
      { h: "Cómo usarlo", html: "<p>Un chico que está bien entre resfríos se parece a la población de los estudios de corticoide intermitente. Uno con síntomas entre episodios necesita controlar lo que pasa «un martes cualquiera»: ahí pesa el controlador diario. El patrón puede cambiar de un invierno al siguiente.</p>" }
    ],
    evidencia: ["makrinioti2024", "brand2008"],
    pico: [], ateneos: [],
    conexiones: ["sr-ers", "sr-ci-diario", "sr-ci-intermitente", "sr-ambiente", "sr-trayectorias"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-ci-diario", nivel: 1, mapa: "sibilancias", titulo: "Corticoide inhalado diario", corto: "CI diario", tipo: "concepto",
    x: 750, y: 285,
    resumen: "Controlador de elección cuando hay síntomas entre episodios o crisis frecuentes. Prueba de 2 a 3 meses.",
    teoria: [
      { h: "Cuándo", html: "<p>Patrón compatible con asma y síntomas no controlados, o crisis frecuentes (por ejemplo, tres o más por año). Es una prueba terapéutica: reevaluar a los 2–3 meses y suspender si no hay beneficio claro.</p>" },
      { h: "Dosis bajas en 5 años o menos (GINA)", html: "<div class=\"tabla\"><table><thead><tr><th>Fármaco</th><th>Dosis diaria baja</th></tr></thead><tbody><tr><td>Beclometasona HFA (IDM)</td><td>100 µg</td></tr><tr><td>Budesonida nebulizada</td><td>500 µg</td></tr><tr><td>Fluticasona propionato HFA (IDM)</td><td>50 µg</td></tr></tbody></table></div><p class=\"nota\">Verificar con la tabla de GINA vigente.</p>" },
      { h: "¿Quién responde mejor?", html: "<p>En INFANT, la respuesta preferente al CI diario fue más probable con sensibilización a aeroalérgenos o eosinófilos ≥ 300/µL.</p>" },
      { h: "Antes de subir la dosis", html: "<p>Revisar técnica con aerocámara, adherencia, exposición a humo y diagnóstico.</p>" }
    ],
    evidencia: ["fitzpatrick2016", "zeiger2011", "gina2026"],
    pico: [
      {
        p: "Preescolares con sibilancias persistentes que necesitan un controlador",
        i: "CI diario en dosis bajas",
        c: "Montelukast diario o CI a demanda",
        o: "Probabilidad de mejor respuesta (días controlados, crisis)",
        respuesta: "En conjunto, el CI diario tuvo la mejor respuesta, sobre todo con sensibilización a aeroalérgenos o eosinófilos ≥ 300/µL. Sin esos marcadores, la diferencia entre estrategias fue menos clara.",
        certeza: "Moderada",
        refs: ["fitzpatrick2016"]
      }
    ],
    ateneos: [],
    conexiones: ["sr-patron", "sr-gina5", "sr-ipa", "sr-historia", "ci"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-ci-intermitente", nivel: 2, mapa: "sibilancias", titulo: "Corticoide inhalado intermitente", corto: "CI intermitente", tipo: "concepto",
    x: 750, y: 405,
    resumen: "Alternativa en chicos que están bien entre resfríos y tuvieron crisis importantes.",
    teoria: [
      { h: "MIST en una frase", html: "<p>278 chicos de 12 a 53 meses, IPA modificado positivo, al menos una crisis importante el año previo y pocos síntomas entre episodios. Budesonida diaria en dosis bajas contra 7 días en dosis altas al inicio de cada resfrío: 0,97 vs 0,95 crisis con corticoide oral por chico-año, con 104 mg menos de budesonida acumulada en el esquema intermitente.</p>" },
      { h: "Cómo leerlo", html: "<p>El intervalo de confianza (0,71 a 1,35) no demuestra superioridad del esquema diario ni establece equivalencia. Comparó dos esquemas activos: no dice cuánto aporta cada uno frente a no usar controlador.</p>" }
    ],
    evidencia: ["zeiger2011", "bisgaard2006"],
    pico: [
      {
        p: "Preescolares con sibilancias recurrentes, IPA positivo, bien entre episodios y al menos una crisis importante",
        i: "Budesonida nebulizada intermitente en dosis altas (1 mg c/12 h por 7 días al inicio de cada cuadro)",
        c: "Budesonida diaria en dosis bajas (0,5 mg/noche)",
        o: "Crisis que requieren corticoide oral",
        respuesta: "Tasas casi iguales (razón 0,99; IC 95 % 0,71–1,35), con mucha menos exposición acumulada en el esquema intermitente. Opción razonable en este perfil de paciente.",
        certeza: "Moderada",
        refs: ["zeiger2011"]
      }
    ],
    ateneos: [],
    conexiones: ["sr-patron", "sr-historia"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-ambiente", nivel: 3, mapa: "sibilancias", titulo: "Humedad, humo y hogar", corto: "Humedad y humo", tipo: "concepto",
    x: 750, y: 525,
    resumen: "Factores del hogar que se pueden cambiar: humo de tabaco, sahumerios, humedad y moho.",
    teoria: [
      { h: "Humedad y moho", html: "<p>Un metaanálisis de estudios observacionales asoció la humedad y el moho en el hogar con aumentos de alrededor del 30 al 50 % en síntomas respiratorios y desenlaces de asma. Es una asociación: puede haber confusión con otros factores de la vivienda.</p>" },
      { h: "Qué preguntar y aconsejar", html: "<ul><li>Fumadores en la casa (incluido vapeo), sahumerios, braseros o calefacción a combustión</li><li>Manchas de humedad o moho visible; ventilar y reparar filtraciones</li><li>Control de alérgenos solo si hay sensibilización demostrada</li></ul>" }
    ],
    evidencia: ["fisk2007"],
    pico: [], ateneos: [],
    conexiones: ["sr-patron", "ambiente"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-trayectorias", nivel: 1, mapa: "sibilancias", titulo: "Trayectorias de sibilancias", corto: "Trayectorias", tipo: "concepto",
    x: 1050, y: 165,
    resumen: "Tucson y ALSPAC: historias que solo se pueden nombrar cuando el chico creció.",
    teoria: [
      { h: "Tucson (1995)", html: "<p>826 de 1246 recién nacidos con seguimiento completo. A los 6 años: 51,5 % nunca sibilaron, 19,9 % sibilancias tempranas transitorias, 15,0 % de inicio tardío y 13,7 % persistentes. Las transitorias ya tenían menor función pulmonar antes de enfermar; las persistentes, más asma materna e IgE elevada.</p>" },
      { h: "ALSPAC (2008)", html: "<p>6265 chicos, sibilancias registradas siete veces. Seis trayectorias. Las de inicio intermedio (alrededor de 18 meses) se asociaron fuertemente con atopia (OR 8,36) e hiperreactividad a metacolina.</p>" },
      { h: "El límite", html: "<p>Son descripciones de cohortes, asignadas con el seguimiento completo. No son la probabilidad individual de que a este chico «se le pase».</p>" }
    ],
    evidencia: ["martinez1995", "henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["sr-patron", "sr-terminos", "sr-rinovirus", "fenotipos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-rinovirus", nivel: 3, mapa: "sibilancias", titulo: "Rinovirus y riesgo de asma", corto: "Rinovirus", tipo: "concepto",
    x: 1050, y: 285,
    resumen: "Sibilar con rinovirus en los primeros años se asocia fuertemente con asma a los 6.",
    teoria: [
      { h: "COAST (2008)", html: "<p>259 chicos con antecedentes familiares de alergia o asma, seguidos hasta los 6 años. Sibilancias con rinovirus antes de los 3 años: OR 9,8 de asma; con VSR: OR 2,6. De quienes sibilaron con rinovirus en el tercer año, 26 de 30 tenían asma a los 6.</p>" },
      { h: "Cómo interpretarlo", html: "<p>La cohorte no permite separar si el virus contribuye a la evolución o si pone en evidencia una susceptibilidad previa. Un rinovirus detectado agrega un dato al pronóstico; el diagnóstico y el controlador siguen dependiendo de la historia y la evolución.</p>" }
    ],
    evidencia: ["jackson2008", "jartti2006"],
    pico: [
      {
        p: "Niños con alto riesgo familiar de asma",
        i: "Sibilancias asociadas a rinovirus antes de los 3 años",
        c: "Sibilancias por VSR o sin sibilancias virales",
        o: "Asma a los 6 años",
        respuesta: "Asociación fuerte (OR 9,8 para rinovirus; 2,6 para VSR). Pregunta de pronóstico, no de tratamiento; la población era de alto riesgo y el resultado no es extrapolable sin cuidado.",
        certeza: "Baja",
        refs: ["jackson2008"]
      }
    ],
    ateneos: [],
    conexiones: ["sr-trayectorias", "sr-ipa", "sr-cort-oral", "rinovirus"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-ipa", nivel: 2, mapa: "sibilancias", titulo: "IPA y rasgos tratables", tipo: "concepto",
    x: 1050, y: 405,
    resumen: "Predecir asma (IPA) y predecir respuesta al tratamiento (eosinófilos, sensibilización) son preguntas distintas.",
    teoria: [
      { h: "Dos preguntas", html: "<ul><li><b>¿Va a tener asma?</b> El Índice Predictivo de Asma tiene buen valor predictivo negativo.</li><li><b>¿Qué tratamiento le va a servir?</b> Eosinófilos en sangre ≥ 300/µL y sensibilización a aeroalérgenos se asocian con mejor respuesta al CI diario.</li></ul>" },
      { h: "En la práctica", html: "<p>Un hemograma con eosinófilos y una evaluación de sensibilización (prick test o IgE específica) pueden ayudar a decidir el controlador en el preescolar con sibilancias persistentes.</p>" }
    ],
    evidencia: ["castro2000", "fitzpatrick2016", "makrinioti2024"],
    pico: [], ateneos: [],
    conexiones: ["sr-rinovirus", "sr-ci-diario", "sr-ers", "ipa"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-historia", nivel: 3, mapa: "sibilancias", titulo: "¿El corticoide inhalado cambia la evolución?", corto: "¿El CI cambia la evolución?", tipo: "concepto",
    x: 1050, y: 525,
    resumen: "No. Controla síntomas mientras se usa, pero no previene el asma.",
    teoria: [
      { h: "La evidencia", html: "<ul><li><b>PEAK</b>: 2 años de fluticasona en preescolares con IPA positivo mejoraron el control durante el tratamiento; un año después de suspender no hubo diferencias.</li><li><b>Bisgaard 2006</b>: budesonida intermitente desde el primer episodio no previno las sibilancias persistentes.</li></ul>" },
      { h: "Qué decirle a la familia", html: "<p>El tratamiento busca que el chico esté bien hoy y tenga menos crisis; no cambia si a los 6 años va a tener asma. Por eso se reevalúa y se suspende cuando no aporta.</p>" }
    ],
    evidencia: ["guilbert2006", "bisgaard2006"],
    pico: [], ateneos: [],
    conexiones: ["sr-ci-diario", "sr-ci-intermitente"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* ───────────── SUBMAPA: ASMA (6 AÑOS EN ADELANTE) ─────────────
     Columnas: diagnóstico · control · tratamiento · crisis */

  {
    id: "sa-sintomas", nivel: 1, mapa: "asma", titulo: "Síntomas variables", tipo: "concepto",
    x: 150, y: 165,
    resumen: "Lo que sugiere asma en la historia: síntomas que van y vienen, con desencadenantes típicos.",
    teoria: [
      { h: "Patrón sugestivo", html: "<ul><li>Más de un síntoma: sibilancias, disnea, opresión torácica, tos.</li><li>Varían en el tiempo y en intensidad.</li><li>Peor de noche o al despertar.</li><li>Desencadenados por ejercicio, risa, alérgenos, aire frío o infecciones virales.</li><li>Antecedente personal o familiar de atopia.</li></ul>" },
      { h: "Lo que lo hace menos probable", html: "<p>Tos aislada sin otros síntomas, expectoración crónica, mareos o parestesias con la disnea, dolor torácico, estridor inspiratorio con el ejercicio.</p>" }
    ],
    evidencia: ["reddel2022"],
    pico: [], ateneos: [],
    conexiones: ["sa-espirometria", "sa-diferencial"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-espirometria", nivel: 1, mapa: "asma", titulo: "Espirometría y prueba broncodilatadora", corto: "Espirometría", tipo: "concepto",
    x: 150, y: 285,
    resumen: "La prueba que confirma la obstrucción variable. Una espirometría normal no la descarta.",
    teoria: [
      { h: "Qué buscar", html: "<ul><li>Relación VEF₁/CVF por debajo del límite inferior de normalidad (puntaje z menor a −1,645), no un corte fijo.</li><li>Respuesta broncodilatadora: GINA usa en niños un aumento del VEF₁ mayor al 12 % del predicho; el estándar ERS/ATS 2022 propone un cambio del VEF₁ o la CVF mayor al 10 % del predicho.</li></ul>" },
      { h: "Para recordar", html: "<ul><li>Hacerla antes de iniciar el controlador cuando sea posible: después cuesta más confirmar.</li><li>Si es normal y la sospecha sigue, repetirla con síntomas o usar otra prueba.</li><li>Informar qué ecuaciones de referencia se usaron (por ejemplo, GLI).</li></ul>" }
    ],
    evidencia: ["stanojevic2022", "reddel2022"],
    pico: [], ateneos: [],
    conexiones: ["sa-sintomas", "sa-pruebas", "espirometria"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-pruebas", nivel: 2, mapa: "asma", titulo: "FeNO, PEF y pruebas de provocación", corto: "FeNO, PEF y provocación", tipo: "concepto",
    x: 150, y: 405,
    resumen: "Herramientas para cuando la espirometría no alcanza.",
    teoria: [
      { h: "Opciones", html: "<ul><li><b>Variabilidad del PEF</b>: en niños, una variabilidad diaria promedio mayor al 13 % en 2 semanas apoya el diagnóstico.</li><li><b>Prueba de ejercicio o metacolina</b>: documenta hiperreactividad; se hace en laboratorio de función pulmonar.</li><li><b>FeNO</b>: en niños, más de 35 ppb apoya asma tipo 2 si los síntomas son típicos (GINA 2026). Un valor bajo no descarta asma; varía con la edad, el equipo y la hora del día.</li><li><b>Respuesta a 4 semanas de CI</b>: un aumento del VEF₁ de 12 % del predicho o más también documenta variabilidad.</li><li><b>Eosinófilos y sensibilización</b>: no diagnostican asma, pero orientan el fenotipo.</li></ul>" }
    ],
    evidencia: ["reddel2022"],
    pico: [], ateneos: [],
    conexiones: ["sa-espirometria", "sa-biologicos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-diferencial", nivel: 2, mapa: "asma", titulo: "Si no responde, revisar el diagnóstico", corto: "Revisar el diagnóstico", tipo: "concepto",
    x: 150, y: 525,
    resumen: "En edad escolar y adolescencia, varias cosas se parecen al asma.",
    teoria: [
      { h: "Diagnósticos a considerar", html: "<ul><li>Obstrucción laríngea inducible por ejercicio (disfunción de cuerdas vocales): estridor inspiratorio, sin respuesta al salbutamol.</li><li>Respiración disfuncional o hiperventilación.</li><li>Rinosinusitis crónica con tos.</li><li>Cuerpo extraño, bronquiectasias, fibrosis quística, discinesia ciliar.</li><li>Bronquiolitis obliterante postinfecciosa.</li><li>Cardiopatía.</li></ul>" }
    ],
    evidencia: ["reddel2022"],
    pico: [], ateneos: [],
    conexiones: ["sa-sintomas", "sa-tecnica", "dd-sibilancias"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-control", nivel: 1, mapa: "asma", titulo: "Control de síntomas", tipo: "concepto",
    x: 450, y: 165,
    resumen: "Cuatro preguntas sobre las últimas 4 semanas, o un cuestionario validado.",
    teoria: [
      { h: "GINA: últimas 4 semanas", html: "<ul><li>Síntomas diurnos más de 2 veces por semana</li><li>Despertares nocturnos por asma</li><li>Rescate más de 2 veces por semana (sin contar antes del ejercicio)</li><li>Limitación de la actividad</li></ul><p class=\"nota\">Ninguno: bien controlada · 1–2: parcialmente · 3–4: no controlada</p>" },
      { h: "Cuestionarios", html: "<p><b>C-ACT</b> (4 a 11 años): lo completan el chico y su cuidador; puntaje de 0 a 27, con 19 o menos como asma no bien controlada. Desde los 12 años se usa el ACT.</p>" }
    ],
    evidencia: ["liu2007", "reddel2022"],
    pico: [], ateneos: [],
    conexiones: ["sa-riesgo", "sa-escalones", "sa-tecnica", "sa-comorbilidades"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-riesgo", nivel: 2, mapa: "asma", titulo: "Riesgo futuro de crisis", corto: "Riesgo futuro", tipo: "concepto",
    x: 450, y: 285,
    resumen: "Un chico con pocos síntomas puede tener alto riesgo de crisis.",
    teoria: [
      { h: "Factores de riesgo de crisis (GINA 2026)", html: "<ul><li>Síntomas no controlados (el más importante)</li><li>Uso excesivo de SABA: 3 o más aerosoles de 200 dosis por año; 1 o más por mes se asocia con riesgo de muerte</li><li>CI insuficiente: sin CI, mala adherencia o mala técnica</li><li>Obesidad, rinosinusitis crónica, reflujo sintomático, alergia alimentaria confirmada</li><li>Exposición a alérgenos (si está sensibilizado), humo, vapeo, contaminación</li><li>Problemas psicológicos o socioeconómicos importantes</li><li>VEF₁ bajo (sobre todo &lt; 60 %) o respuesta broncodilatadora grande</li><li>Eosinófilos o FeNO elevados</li><li>Crisis grave en el último año, o intubación o terapia intensiva alguna vez</li></ul>" },
      { h: "Riesgo de obstrucción persistente", html: "<p>Prematurez y bajo peso al nacer, crisis graves sin CI, exposición al humo, VEF₁ bajo al diagnóstico y eosinofilia.</p>" }
    ],
    evidencia: ["reddel2022"],
    pico: [], ateneos: [],
    conexiones: ["sa-control", "sa-mart", "sa-alta"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-tecnica", nivel: 2, mapa: "asma", titulo: "Técnica y adherencia", tipo: "concepto",
    x: 450, y: 405,
    resumen: "La primera causa de asma «que no responde». Revisar antes de subir un escalón.",
    teoria: [
      { h: "En cada consulta", html: "<ul><li>Pedir que muestre cómo usa el inhalador, con la aerocámara.</li><li>Preguntar sin juzgar cuántos días por semana lo usa.</li><li>Elegir un dispositivo que el chico pueda usar bien a su edad.</li><li>Dar un plan de acción escrito.</li></ul>" },
      { h: "Asma difícil o grave", html: "<p>Se habla de <b>asma difícil de tratar</b> cuando no se controla con dosis medias o altas. Recién cuando se corrigieron técnica, adherencia, comorbilidades y diagnóstico, y aun así no se controla, es <b>asma grave</b>.</p>" }
    ],
    evidencia: ["reddel2022"],
    pico: [], ateneos: [],
    conexiones: ["sa-control", "sa-diferencial", "sa-biologicos", "sa-alta"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-comorbilidades", nivel: 3, mapa: "asma", titulo: "Comorbilidades y ambiente", corto: "Comorbilidades", tipo: "concepto",
    x: 450, y: 525,
    resumen: "Rinitis, obesidad, humo y ansiedad empeoran el control.",
    teoria: [
      { h: "Qué buscar", html: "<ul><li>Rinitis alérgica: tratarla mejora los síntomas nasales y la calidad de vida.</li><li>Obesidad: peor control y menor respuesta a CI.</li><li>Humo de tabaco y vapeo, en casa y en el propio adolescente.</li><li>Ansiedad y respiración disfuncional.</li><li>Reflujo: tratarlo solo si hay síntomas digestivos.</li></ul>" }
    ],
    evidencia: ["reddel2022"],
    pico: [], ateneos: [],
    conexiones: ["sa-control", "sa-biologicos", "ambiente"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-escalones", nivel: 1, mapa: "asma", titulo: "Escalones de tratamiento de 6 a 11 años", corto: "Escalones 6 a 11 años", tipo: "concepto",
    x: 750, y: 150,
    resumen: "Cinco pasos de GINA, siempre con CI desde el inicio.",
    teoria: [
      { h: "Pasos (GINA)", html: "<ol class=\"pasos\"><li><b>1</b> · Rescate antiinflamatorio a demanda: CI-formoterol en dosis baja, o CI cada vez que usa SABA.</li><li><b>2</b> · CI diario en dosis baja.</li><li><b>3</b> · CI en dosis media, CI-LABA en dosis baja, o MART con budesonida-formoterol (1 inhalación por día más rescate).</li><li><b>4</b> · CI-LABA en dosis media, o MART con 1 inhalación cada 12 horas más rescate. Considerar derivar.</li><li><b>5</b> · Evaluación por especialista y biológicos.</li></ol>" },
      { h: "Dosis bajas diarias de CI (6 a 11 años)", html: "<div class=\"tabla\"><table><thead><tr><th>Fármaco</th><th>Dosis diaria baja</th></tr></thead><tbody><tr><td>Beclometasona HFA, partícula estándar</td><td>100–200 µg</td></tr><tr><td>Budesonida, polvo seco</td><td>100–200 µg</td></tr><tr><td>Fluticasona propionato</td><td>50–100 µg</td></tr></tbody></table></div><p class=\"nota\">Verificar con la tabla de GINA vigente y el vademécum institucional.</p>" },
      { h: "Subir y bajar", html: "<p>Antes de subir: técnica, adherencia, comorbilidades y diagnóstico. Si está controlada durante 3 meses, considerar bajar un escalón.</p>" }
    ],
    evidencia: ["reddel2022", "sobieraj2018"],
    pico: [], ateneos: [],
    conexiones: ["sa-control", "sa-mart", "sa-seguridad", "sa-alta", "ci"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-mart", nivel: 2, mapa: "asma", titulo: "Mantenimiento y rescate con budesonida-formoterol", corto: "MART", tipo: "concepto",
    x: 750, y: 255,
    resumen: "Un solo inhalador para el día a día y para los síntomas. Menos crisis.",
    teoria: [
      { h: "Cómo funciona", html: "<p>Budesonida-formoterol en dosis fija diaria y, además, una inhalación extra cada vez que tiene síntomas. El rescate lleva corticoide: cuando el chico empeora, recibe más antiinflamatorio sin esperar a la consulta.</p>" },
      { h: "En niños", html: "<p>En 4 a 11 años, el ensayo de Bisgaard mostró 70 a 79 % menos crisis que con CI en dosis más alta o con CI-LABA fijo. El metaanálisis de Sobieraj confirma el beneficio, con pocos pacientes en este grupo etario. Solo funciona con formoterol (inicio rápido); no con salmeterol.</p><p><b>Dosis en 6 a 11 años (GINA 2026)</b>: budesonida-formoterol 80/4,5 µg. Paso 3: 1 inhalación por día más 1 a demanda. Paso 4: 1 inhalación cada 12 horas más 1 a demanda. Consultar si necesita más de 8 inhalaciones en 24 horas.</p>" }
    ],
    evidencia: ["bisgaard2006chest", "sobieraj2018"],
    pico: [
      {
        p: "Niños de 4 a 11 años con asma no controlada con CI",
        i: "Budesonida-formoterol como mantenimiento y rescate (MART)",
        c: "Budesonida en dosis más alta o budesonida-formoterol fijo, con terbutalina de rescate",
        o: "Crisis que requieren intervención médica",
        respuesta: "MART redujo las crisis un 70 a 79 % (0,08 por paciente frente a 0,28 y 0,40) y la talla creció 1 cm más por año que con budesonida en dosis alta. Un solo ensayo grande; el metaanálisis posterior va en la misma dirección.",
        certeza: "Moderada",
        refs: ["bisgaard2006chest", "sobieraj2018"]
      }
    ],
    ateneos: [],
    conexiones: ["sa-escalones", "sa-adolescentes", "sa-riesgo"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-adolescentes", nivel: 2, mapa: "asma", titulo: "Adolescentes: corticoide-formoterol a demanda", corto: "12 años o más", tipo: "concepto",
    x: 750, y: 360,
    resumen: "Desde los 12 años, GINA desaconseja el salbutamol solo y prefiere budesonida-formoterol a demanda.",
    teoria: [
      { h: "Por qué", html: "<p>El uso de salbutamol solo, sin corticoide, se asocia con más crisis y muertes por asma. Budesonida-formoterol a demanda en asma leve redujo las crisis graves un 64 % frente a terbutalina, con resultados parecidos a la budesonida diaria y mucha menos dosis de corticoide.</p>" },
      { h: "En la práctica", html: "<ul><li>Pasos 1–2: budesonida-formoterol en dosis baja a demanda.</li><li>Pasos 3–5: MART con dosis de mantenimiento creciente.</li><li>Útil para adolescentes con mala adherencia al controlador diario.</li></ul>" }
    ],
    evidencia: ["obyrne2018", "reddel2022"],
    pico: [
      {
        p: "Pacientes de 12 años o más con asma leve",
        i: "Budesonida-formoterol a demanda",
        c: "Terbutalina a demanda, o budesonida diaria con terbutalina a demanda",
        o: "Crisis graves y control de síntomas",
        respuesta: "Frente a terbutalina, menos crisis graves (RR 0,36) y mejor control. Frente a budesonida diaria, igual tasa de crisis, control de síntomas algo inferior y una dosis de corticoide 83 % menor.",
        certeza: "Alta",
        refs: ["obyrne2018"]
      }
    ],
    ateneos: [],
    conexiones: ["sa-mart"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-biologicos", nivel: 3, mapa: "asma", titulo: "Asma grave y biológicos", corto: "Biológicos", tipo: "concepto",
    x: 750, y: 465,
    resumen: "Para el asma grave confirmada por especialista, según el fenotipo.",
    teoria: [
      { h: "Antes de pensar en un biológico", html: "<p>Confirmar el diagnóstico, corregir técnica y adherencia, tratar comorbilidades y reducir exposiciones. Muchos casos «graves» son asma difícil de tratar. Derivar a un especialista en asma pediátrica.</p>" },
      { h: "Opciones según GINA 2026", html: "<div class=\"tabla\"><table><thead><tr><th>Fármaco</th><th>Blanco</th><th>Edad</th><th>Para quién</th></tr></thead><tbody><tr><td>Omalizumab</td><td>IgE</td><td>≥ 6 años</td><td>Asma alérgica grave</td></tr><tr><td>Mepolizumab</td><td>IL-5</td><td>≥ 6 años</td><td>Asma eosinofílica grave</td></tr><tr><td>Dupilumab</td><td>Receptor IL-4α</td><td>≥ 6 años</td><td>Tipo 2 o dependiente de corticoide oral; no si eosinófilos ≥ 1500/µL</td></tr><tr><td>Benralizumab, depemokimab</td><td>Receptor IL-5 / IL-5</td><td>≥ 12 años</td><td>Asma eosinofílica grave</td></tr><tr><td>Tezepelumab</td><td>TSLP</td><td>≥ 12 años</td><td>Asma grave</td></tr></tbody></table></div><p>También puede agregarse <b>tiotropio</b> (inhalador de niebla, desde los 6 años).</p><p class=\"nota\">Verificar aprobación y criterios de cobertura locales (ANMAT, financiador).</p>" },
      { h: "Ensayos pediátricos", html: "<ul><li>Omalizumab (6 a 11 años): 43 % menos crisis en 52 semanas.</li><li>Mepolizumab (MUPPITS-2): razón de crisis 0,73.</li><li>Dupilumab (VOYAGE): 59 % menos crisis graves.</li></ul>" }
    ],
    evidencia: ["lanier2009", "jackson2022", "bacharier2021"],
    pico: [
      {
        p: "Niños de 6 a 11 años con asma moderada a grave no controlada y fenotipo tipo 2",
        i: "Dupilumab agregado al tratamiento",
        c: "Placebo",
        o: "Crisis graves y VEF₁",
        respuesta: "Crisis graves de 0,75 a 0,31 por año (reducción relativa 59 %) y VEF₁ 5,2 puntos porcentuales mejor. Eventos adversos graves similares.",
        certeza: "Alta",
        refs: ["bacharier2021"]
      }
    ],
    ateneos: [],
    conexiones: ["sa-escalones", "sa-tecnica", "sa-comorbilidades", "sa-pruebas"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-seguridad", nivel: 3, mapa: "asma", titulo: "Seguridad del corticoide inhalado", corto: "CI y talla", tipo: "concepto",
    x: 750, y: 570,
    resumen: "Efecto pequeño y no progresivo sobre la talla. Usar la dosis mínima eficaz.",
    teoria: [
      { h: "Talla", html: "<p>En CAMP, la talla adulta fue 1,2 cm menor con budesonida que con placebo. La diferencia apareció en los primeros 2 años, sobre todo en prepúberes, y no se acumuló después.</p>" },
      { h: "Qué decirle a la familia", html: "<p>El beneficio en control y crisis supera ese efecto. Se controla la talla en cada visita y se baja la dosis cuando el asma está controlada. La candidiasis oral y la disfonía se previenen con aerocámara y enjuague.</p>" }
    ],
    evidencia: ["kelly2012", "bisgaard2006chest"],
    pico: [
      {
        p: "Niños de 5 a 13 años con asma leve a moderada",
        i: "Budesonida inhalada diaria",
        c: "Placebo",
        o: "Talla adulta",
        respuesta: "Talla adulta 1,2 cm menor (IC 95 % −1,9 a −0,5). La pérdida se produjo en los primeros 2 años y no fue progresiva.",
        certeza: "Alta",
        refs: ["kelly2012"]
      }
    ],
    ateneos: [],
    conexiones: ["sa-escalones", "ci"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-crisis-gravedad", nivel: 1, mapa: "asma", titulo: "Gravedad de la crisis", tipo: "concepto",
    x: 1050, y: 150,
    resumen: "Clasificar en minutos para decidir dónde y cómo tratar.",
    teoria: [
      { h: "Clasificación GINA 2026 (6 años en adelante)", html: "<div class=\"tabla\"><table><thead><tr><th></th><th>Leve</th><th>Moderada</th><th>Grave</th></tr></thead><tbody><tr><td>Habla</td><td>En oraciones, puede acostarse</td><td>En frases, prefiere sentarse</td><td>No puede hablar, beber ni acostarse</td></tr><tr><td>FR</td><td>Normal o algo aumentada</td><td>Aumentada, ≤ 30/min</td><td>&gt; 30/min</td></tr><tr><td>Músculos accesorios</td><td>No o leve</td><td>Sí</td><td>Sí</td></tr><tr><td>Auscultación</td><td>Sibilancias espiratorias leves, buena entrada de aire</td><td>Sibilancias, entrada de aire disminuida</td><td>Tórax silencioso o casi</td></tr><tr><td>SatO₂ (aire)</td><td>≥ 94 %</td><td>≥ 92 %</td><td>&lt; 92 %</td></tr><tr><td>PEF</td><td>&gt; 70 %</td><td>50–70 %</td><td>&lt; 50 %</td></tr><tr><td>PRAM (&lt; 18 años)</td><td>1–3</td><td>4–7</td><td>8–12</td></tr></tbody></table></div><p><b>Riesgo vital inmediato</b>: somnolencia, confusión o cianosis (PRAM 11–12). Si hay anafilaxia, adrenalina primero.</p><p class=\"nota\">GINA 2026 recomienda un score validado como el PRAM en menores de 18 años. La oximetría puede sobreestimar la saturación en piel oscura y es más baja en la altura.</p>" },
      { h: "Antes de tratar", html: "<p>Preguntarse si es asma: neumotórax, anafilaxia, obstrucción laríngea inducible, neumonía, cuerpo extraño o insuficiencia cardíaca pueden parecerse. Revisar qué tratamiento recibió y si tiene factores de riesgo de muerte por asma.</p>" }
    ],
    evidencia: ["reddel2022"],
    pico: [], ateneos: [],
    conexiones: ["sa-crisis-broncod", "crisis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-crisis-broncod", nivel: 1, mapa: "asma", titulo: "Salbutamol e ipratropio", tipo: "concepto",
    x: 1050, y: 255,
    resumen: "Salbutamol repetido en la primera hora; ipratropio en crisis moderadas y graves.",
    teoria: [
      { h: "Esquema", html: "<ul><li><b>Leve</b>: salbutamol 4 disparos (100 µg) con aerocámara, hasta 3 veces cada 20–30 minutos.</li><li><b>Moderada</b>: 4–6 disparos (o 2,5 mg nebulizado), más ipratropio 4 disparos (20 µg) con cada dosis, hasta 3 veces.</li><li><b>Grave</b>: 6–10 disparos (o 5 mg nebulizado) cada 20–30 minutos, ipratropio, oxígeno y corticoide sistémico; derivar.</li><li>Oxígeno para SatO₂ de 92 a 95 %. Dar de a un disparo, agitando el aerosol antes de cada uno.</li></ul><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" }
    ],
    evidencia: ["griffiths2013"],
    pico: [
      {
        p: "Niños de 18 meses a 18 años con crisis asmática en la guardia",
        i: "Ipratropio inhalado agregado al salbutamol",
        c: "Salbutamol solo",
        o: "Internación",
        respuesta: "Menos internaciones: RR 0,73 (IC 95 % 0,63–0,85), de 23 a 17 cada 100 chicos (NNT 16). Además, mejor función pulmonar y menos náuseas y temblor.",
        certeza: "Alta",
        refs: ["griffiths2013"]
      }
    ],
    ateneos: [],
    conexiones: ["sa-crisis-gravedad", "sa-crisis-cort", "sa-crisis-mg", "saba"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-crisis-cort", nivel: 2, mapa: "asma", titulo: "Corticoide sistémico en la crisis", corto: "Corticoide sistémico", tipo: "concepto",
    x: 1050, y: 360,
    resumen: "En la primera hora. Dexametasona o prednisolona, con eficacia similar.",
    teoria: [
      { h: "Opciones", html: "<ul><li>Prednisona o prednisolona 1–2 mg/kg/día (máximo 40 mg) por 3–5 días.</li><li>Dexametasona 0,6 mg/kg (máximo 16 mg), 1 o 2 dosis.</li></ul><p>La dexametasona tiene igual eficacia para prevenir recaídas y causa menos vómitos.</p><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" }
    ],
    evidencia: ["keeney2014"],
    pico: [], ateneos: [],
    conexiones: ["sa-crisis-broncod", "sa-alta", "cort-sistemicos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-crisis-mg", nivel: 3, mapa: "asma", titulo: "Sulfato de magnesio", tipo: "concepto",
    x: 1050, y: 465,
    resumen: "En la crisis grave que no responde al tratamiento inicial.",
    teoria: [
      { h: "Uso", html: "<ul><li>IV: 40–50 mg/kg (máximo 2 g) en 20 minutos, con monitoreo de presión arterial.</li><li>Nebulizado: beneficio pequeño, mayor en las crisis más graves (MAGNETIC).</li></ul>" },
      { h: "Qué tan sólida es la evidencia", html: "<p>El magnesio IV redujo la internación en una revisión Cochrane, pero con solo 3 estudios y 115 chicos. Es razonable en la crisis grave, sin esperar un efecto grande.</p>" }
    ],
    evidencia: ["griffiths2016", "powell2013"],
    pico: [
      {
        p: "Niños con crisis asmática moderada a grave en la guardia",
        i: "Sulfato de magnesio IV",
        c: "Placebo",
        o: "Internación",
        respuesta: "Menos internaciones (OR 0,32; IC 95 % 0,14–0,74), con evidencia muy limitada (3 estudios, 115 chicos) y heterogeneidad moderada.",
        certeza: "Baja",
        refs: ["griffiths2016"]
      }
    ],
    ateneos: [],
    conexiones: ["sa-crisis-broncod", "crisis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sa-alta", nivel: 1, mapa: "asma", titulo: "Alta y plan de acción", corto: "Alta y seguimiento", tipo: "concepto",
    x: 1050, y: 570,
    resumen: "Cada crisis es una señal de que el tratamiento de base no alcanza.",
    teoria: [
      { h: "Antes de irse", html: "<ul><li>Iniciar o subir el controlador; no dar el alta solo con salbutamol.</li><li>Revisar la técnica con el dispositivo que va a usar en casa.</li><li>Completar el corticoide oral indicado.</li><li>Entregar un plan de acción escrito: qué hacer si empeora y cuándo volver.</li><li>Control clínico en 2 a 5 días (GINA 2026, niños).</li></ul>" }
    ],
    evidencia: ["reddel2022"],
    pico: [], ateneos: [],
    conexiones: ["sa-crisis-cort", "sa-riesgo", "sa-escalones", "sa-tecnica"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  /* ───────────── GRAFO: GUÍA GINA 2026 (6 años en adelante) ─────────────
     Zonas: diagnóstico · evaluación · tratamiento · crisis. Fuente: GINA 2026, guía resumida. */

  {
    id: "g-dx-criterios", nivel: 1, mapa: "gina", titulo: "Dos rasgos que definen el asma", corto: "Qué define el asma", tipo: "concepto",
    x: 180, y: 120, fuente: "GINA 2026, guía resumida, págs. 6–7",
    resumen: "Síntomas respiratorios variables y flujo espiratorio variable, documentados antes de empezar el CI.",
    teoria: [
      { h: "Los dos rasgos", html: "<ol class=\"pasos\"><li><b>Síntomas típicos y variables</b>: sibilancias, disnea, opresión torácica o tos que cambian en frecuencia e intensidad, empeoran de noche o al despertar, con ejercicio, risa, alérgenos, aire frío o infecciones virales.</li><li><b>Flujo espiratorio variable</b>, actual o previo.</li></ol>" },
      { h: "Documentarlo", html: "<p>La evidencia del diagnóstico debe quedar escrita en la historia clínica. En atención primaria, entre el 25 y el 35 % de las personas con diagnóstico de asma podrían no tenerla.</p>" },
      { h: "Cuando no está claro", html: "<p>Si otros diagnósticos son poco probables, se puede tratar empíricamente con CI y revisar la respuesta en 1 a 3 meses, con espirometría o PEF si es posible. Si el cuadro es grave, tratarlo como crisis.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-dx-flujo", "g-dx-biomarcadores", "g-dx-tos", "g-ni-inicio", "g-ad-inicio"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-dx-flujo", nivel: 2, mapa: "gina", titulo: "Flujo espiratorio variable", tipo: "concepto",
    x: 100, y: 200, fuente: "GINA 2026, guía resumida, pág. 8 (tabla 1)",
    resumen: "Cinco maneras de documentarlo, con puntos de corte distintos para niños.",
    teoria: [
      { h: "Criterios en niños (6 a 17 años)", html: "<div class=\"tabla\"><table><thead><tr><th>Prueba</th><th>Positiva si</th></tr></thead><tbody><tr><td>Respuesta broncodilatadora</td><td>VEF₁ +12 % del predicho o más (PEF +15 %)</td></tr><tr><td>Variabilidad diaria del PEF en 2 semanas</td><td>&gt; 13 %</td></tr><tr><td>Respuesta a 4 semanas de CI</td><td>VEF₁ +12 % del predicho (PEF +15 %)</td></tr><tr><td>Prueba de provocación</td><td>Positiva (metacolina, ejercicio, manitol, etc.)</td></tr><tr><td>Variación entre visitas</td><td>VEF₁ ±12 % (PEF ±15 %)</td></tr></tbody></table></div>" },
      { h: "Detalles prácticos", html: "<ul><li>Comparar el VEF₁ 10–15 minutos antes y después de 200–400 µg de salbutamol.</li><li>Suspender SABA 4 horas y LABA de dos tomas diarias 24 horas antes, si es seguro.</li><li>Durante una infección viral puede no haber respuesta broncodilatadora.</li><li>El PEF es menos confiable que la espirometría: usar siempre el mismo equipo y registrar el mejor de tres.</li></ul>" }
    ],
    evidencia: ["gina2026r", "stanojevic2022"], pico: [], ateneos: [],
    conexiones: ["g-dx-criterios", "g-dx-con-ics", "g-ev-funcion", "sa-espirometria"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-dx-biomarcadores", nivel: 3, mapa: "gina", titulo: "FeNO y eosinófilos", tipo: "concepto",
    x: 260, y: 200, fuente: "GINA 2026, guía resumida, pág. 8",
    resumen: "Apoyan el diagnóstico de asma tipo 2 si los síntomas son típicos. Valores bajos no la descartan.",
    teoria: [
      { h: "Cuándo usarlos", html: "<p>Si no hay espirometría ni PEF, o las pruebas son negativas, un FeNO elevado (niños: más de 35 ppb; adolescentes y adultos: más de 50 ppb) o eosinófilos por encima del rango de referencia apoyan el diagnóstico de asma tipo 2.</p>" },
      { h: "Cuidado al interpretarlos", html: "<ul><li>Pueden estar elevados por otras causas.</li><li>Valores bajos no descartan asma.</li><li>Varían con el sexo, la edad, el equipo y la hora: los eosinófilos son más altos a la mañana y el FeNO más bajo temprano.</li><li>Un FeNO alto en alguien que ya usa CI obliga a revisar adherencia y técnica antes de subir de paso.</li></ul>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-dx-criterios", "g-ev-riesgo", "g-tx-grave"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-dx-con-ics", nivel: 3, mapa: "gina", titulo: "Confirmar el diagnóstico en quien ya usa CI", corto: "Si ya usa CI", tipo: "concepto",
    x: 100, y: 280, fuente: "GINA 2026, guía resumida, pág. 9",
    resumen: "Subir o bajar el tratamiento y volver a medir.",
    teoria: [
      { h: "Dos caminos", html: "<ul><li><b>Síntomas frecuentes y función pulmonar &lt; 70 % del predicho</b>: subir un paso y repetir la función pulmonar en 1–2 meses. Si mejoran los síntomas y la función, se confirma.</li><li><b>Pocos síntomas y función &gt; 70 %</b>: bajar el CI y repetir en 2–4 semanas, con plan de acción escrito y control estrecho.</li></ul>" },
      { h: "Si la función es normal", html: "<p>Repetir la prueba broncodilatadora con síntomas, o después de suspender los broncodilatadores el tiempo indicado. Si sigue sin haber variabilidad, buscar otros diagnósticos.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-dx-flujo", "g-ev-nocontrol"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-dx-tos", nivel: 3, mapa: "gina", titulo: "Tos como único síntoma", tipo: "concepto",
    x: 260, y: 280, fuente: "GINA 2026, guía resumida, pág. 9",
    resumen: "El asma variante tos existe, pero la tos crónica tiene muchas otras causas.",
    teoria: [
      { h: "Asma variante tos", html: "<p>Tos con hiperreactividad demostrada por prueba de provocación; la prueba broncodilatadora puede ser negativa. Se trata con CI, como cualquier asma.</p>" },
      { h: "Otras causas de tos seca persistente", html: "<p>Síndrome de tos de vía aérea superior (goteo posnasal), sinusitis crónica, reflujo, obstrucción laríngea inducible y bronquitis eosinofílica. Derivar si la tos persiste.</p>" }
    ],
    diferenciales: [
      { dx:"Bronquitis bacteriana prolongada", claves: "<ul><li>Tos húmeda, no seca, de más de 4 semanas; responde a antibiótico.</li></ul>" },
      { dx:"Rinosinusitis y goteo posnasal", claves: "<ul><li>Tos sobre todo al acostarse y al despertar, rinorrea posterior, carraspeo.</li></ul>" },
      { dx:"Tos postinfecciosa o pertussis", claves: "<ul><li>Después de una virosis, mejora sola en semanas; accesos con estridor inspiratorio o vómitos en la pertussis.</li></ul>" },
      { dx:"Tos por hábito", claves: "<ul><li>Desaparece al dormir y al distraerse, tos repetitiva y llamativa.</li></ul>" },
      { dx:"Reflujo gastroesofágico", claves: "<ul><li>Pirosis o regurgitación asociadas; la evidencia de que cause tos aislada en niños es débil.</li></ul>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-dx-criterios"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-ev-control", nivel: 1, mapa: "gina", titulo: "Control de síntomas", tipo: "concepto",
    x: 100, y: 410, fuente: "GINA 2026, guía resumida, pág. 12 (tabla 2A)",
    resumen: "Cuatro preguntas sobre las últimas 4 semanas. Evaluar en cada visita y al menos una vez por año.",
    teoria: [
      { h: "En las últimas 4 semanas", html: "<ul><li>¿Síntomas diurnos más de 2 veces por semana?</li><li>¿Algún despertar nocturno por asma?</li><li>¿Rescate con SABA más de 2 veces por semana? (sin contar antes del ejercicio; no aplica a quien usa CI-formoterol como rescate)</li><li>¿Alguna limitación de la actividad?</li></ul><p class=\"nota\">Ninguna: bien controlada · 1–2: parcialmente · 3–4: no controlada</p>" },
      { h: "Cuándo reevaluar", html: "<p>En cada visita. Los momentos clave son después de una crisis y cuando necesita una receta nueva.</p>" }
    ],
    evidencia: ["gina2026r", "liu2007"], pico: [], ateneos: [],
    conexiones: ["g-ev-riesgo", "g-ev-funcion", "g-tx-ciclo", "g-ni-inicio", "g-ad-inicio", "sa-control"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-ev-riesgo", nivel: 1, mapa: "gina", titulo: "Factores de riesgo", tipo: "concepto",
    x: 260, y: 410, fuente: "GINA 2026, guía resumida, pág. 12 (tabla 2B)",
    resumen: "Riesgo de crisis, de obstrucción persistente y de efectos adversos. Pueden estar presentes con pocos síntomas.",
    teoria: [
      { h: "Riesgo de crisis", html: "<ul><li>Síntomas no controlados</li><li>Uso excesivo de SABA (3 o más aerosoles de 200 dosis por año)</li><li>CI insuficiente: sin CI, mala adherencia o mala técnica</li><li>Obesidad, rinosinusitis crónica, reflujo, alergia alimentaria confirmada, embarazo</li><li>Alérgenos (si hay sensibilización), humo, vapeo, contaminación</li><li>Problemas psicológicos o socioeconómicos importantes</li><li>VEF₁ bajo (&lt; 60 %) o respuesta broncodilatadora grande</li><li>Eosinófilos o FeNO altos</li><li>Crisis grave en el último año; intubación o terapia intensiva alguna vez</li></ul>" },
      { h: "Riesgo de obstrucción persistente", html: "<p>Prematurez, bajo peso al nacer y aumento rápido de peso en el lactante, tos productiva frecuente, crisis graves sin CI, humo o químicos, VEF₁ bajo al diagnóstico, eosinofilia.</p>" },
      { h: "Riesgo de efectos adversos", html: "<p>Sistémicos: cursos frecuentes de corticoide oral, CI en dosis altas por tiempo prolongado, inhibidores del citocromo P450. Locales: CI en dosis altas o mala técnica.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-ev-control", "g-tx-nosaba", "g-dx-biomarcadores", "g-cr-seguimiento", "g-tx-bajar", "sa-riesgo"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-ev-funcion", nivel: 3, mapa: "gina", titulo: "Función pulmonar en el seguimiento", corto: "Función pulmonar", tipo: "concepto",
    x: 100, y: 490, fuente: "GINA 2026, guía resumida, pág. 11",
    resumen: "Antes de iniciar CI, a los 3–6 meses y después cada 1–2 años.",
    teoria: [
      { h: "Cuándo medir", html: "<p>Antes de empezar el CI, 3 a 6 meses después, y luego al menos cada 1 a 2 años. Más seguido si hay alto riesgo de crisis o de deterioro de la función.</p>" },
      { h: "Cuando no coincide con los síntomas", html: "<p>Pocos síntomas con mala función, o buena función con muchos síntomas: investigar otras condiciones.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-ev-control", "g-dx-flujo"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-ev-gravedad", nivel: 3, mapa: "gina", titulo: "Asma leve, difícil de tratar y grave", corto: "Leve, difícil o grave", tipo: "concepto",
    x: 260, y: 490, fuente: "GINA 2026, guía resumida, pág. 13",
    resumen: "La gravedad se define por el tratamiento que necesita, y se evalúa después de meses de tratamiento.",
    teoria: [
      { h: "Definiciones", html: "<ul><li><b>Leve</b>: se controla con CI-formoterol a demanda o con CI diario en dosis baja.</li><li><b>Difícil de tratar</b>: no controlada pese a CI-LABA en dosis media o alta, o necesita dosis altas. Muchas veces por técnica, adherencia, tabaco, comorbilidades o diagnóstico equivocado.</li><li><b>Grave</b>: no controlada pese a buena adherencia a CI-LABA en dosis alta optimizado y manejo de factores asociados.</li></ul>" },
      { h: "Hablar de «asma leve»", html: "<p>Las familias suelen entender «leve» como «no necesita tratamiento». Explicar que con pocos síntomas también puede haber crisis graves o fatales si solo usa SABA, y que el CI reduce ese riesgo entre la mitad y dos tercios.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-ev-nocontrol", "g-tx-grave", "g-tx-nosaba"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-ev-nocontrol", nivel: 2, mapa: "gina", titulo: "Si no está controlada: qué revisar", corto: "Si no está controlada", tipo: "concepto",
    x: 100, y: 570, fuente: "GINA 2026, guía resumida, pág. 14 (figura 2)",
    resumen: "Buscar la causa antes de cambiar el tratamiento. Siempre técnica y adherencia primero.",
    teoria: [
      { h: "En orden", html: "<ol class=\"pasos\"><li><b>Mirar cómo usa el inhalador</b> con una lista de control del dispositivo; corregir y volver a verificar.</li><li><b>Hablar de la adherencia</b> con empatía y explorar barreras.</li><li><b>Confirmar el diagnóstico</b>: si la función es normal con síntomas, considerar bajar el CI a la mitad y repetir en 2–3 semanas.</li><li><b>Quitar factores de riesgo</b>: tabaco, betabloqueantes, AINE, alérgenos.</li><li><b>Tratar comorbilidades</b>: rinitis, obesidad, reflujo, ansiedad o depresión.</li><li><b>Considerar subir un paso</b> por un tiempo, con decisión compartida.</li><li><b>Derivar</b> si sigue sin control tras 3–6 meses en el paso 4, o antes si es grave o hay dudas diagnósticas.</li></ol>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-tx-inhalador", "g-dx-con-ics", "g-ev-pob", "g-ni-pasos", "g-tx-grave", "g-ev-gravedad"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-ev-pob", nivel: 3, mapa: "gina", titulo: "Comorbilidades y situaciones especiales", corto: "Comorbilidades", tipo: "concepto",
    x: 260, y: 570, fuente: "GINA 2026, guía resumida, págs. 31–33",
    resumen: "Rinitis, obesidad, reflujo, alergia alimentaria, cirugía, virus respiratorios.",
    teoria: [
      { h: "Lo más frecuente en pediatría", html: "<ul><li><b>Rinitis alérgica</b>: tratarla con corticoide intranasal, además del asma.</li><li><b>Obesidad</b>: el asma es más difícil de controlar; bajar 5–10 % de peso puede mejorar el control.</li><li><b>Reflujo</b>: tratarlo solo si da síntomas; el reflujo asintomático rara vez descontrola el asma.</li><li><b>Alergia alimentaria confirmada</b>: es factor de riesgo de muerte por asma. Plan de anafilaxia y adrenalina disponible.</li></ul>" },
      { h: "Otras situaciones", html: "<ul><li><b>Virus respiratorios</b>: seguir con el CI durante la infección; vacunas al día (neumococo, pertussis, COVID-19, influenza, VSR según edad). Evitar nebulizar si hay infección: usar aerosol con aerocámara.</li><li><b>Cirugía</b>: mantener el CI; hidrocortisona intraoperatoria si usa CI en dosis altas o recibió corticoide oral más de 2 semanas en los últimos 6 meses.</li><li><b>Embarazo</b> (adolescentes): no suspender el CI; controlar cada 4–6 semanas.</li></ul>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-ev-nocontrol", "g-ev-riesgo", "sa-comorbilidades"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-tx-ciclo", nivel: 1, mapa: "gina", titulo: "Evaluar, ajustar, revisar", tipo: "tema", edad: "El ciclo de la guía",
    x: 600, y: 280, fuente: "GINA 2026, guía resumida, pág. 18 (figura 4)",
    resumen: "El centro de la guía: un ciclo continuo de decisión compartida con el paciente y su familia.",
    teoria: [
      { h: "Evaluar", html: "<p>Confirmar el diagnóstico si hace falta, control de síntomas y factores de riesgo, técnica inhalatoria y adherencia, comorbilidades, preferencias y objetivos del chico y su familia.</p>" },
      { h: "Ajustar", html: "<p>Tratar factores de riesgo y comorbilidades, estrategias no farmacológicas, medicación con CI, educación y plan de acción.</p>" },
      { h: "Revisar", html: "<p>Síntomas, crisis, efectos adversos, función pulmonar, satisfacción. En general: 1 a 3 meses después de iniciar, luego cada 3 a 12 meses, y dentro de la semana después de una crisis.</p>" },
      { h: "Revisar más seguido si", html: "<p>Hubo asma casi fatal, una crisis muy grave en el último año, usa o dejó hace poco el corticoide oral, o usa SABA en exceso (más de un aerosol por mes).</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-ev-control", "g-ev-riesgo", "g-tx-inhalador", "g-ni-pasos", "g-ad-track1", "g-tx-bajar", "g-tx-air"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-tx-nosaba", nivel: 1, mapa: "gina", titulo: "Nunca SABA solo", tipo: "concepto",
    x: 440, y: 105, fuente: "GINA 2026, guía resumida, pág. 15",
    resumen: "Todo paciente de 6 años o más recibe un tratamiento que incluya CI, aunque tenga pocos síntomas.",
    teoria: [
      { h: "Por qué", html: "<ul><li>Cualquier paciente puede tener una crisis grave, aun con asma que parece leve.</li><li>El SABA solo se asocia con más crisis, peor función pulmonar y más muertes.</li><li>El uso regular de SABA aumenta la inflamación y la hiperreactividad, y reduce la respuesta al broncodilatador.</li><li>3 o más aerosoles por año: más crisis graves. 12 o más (quizás menos): más riesgo de muerte.</li><li>La nebulización de SABA en casa también se asocia con mayor mortalidad.</li></ul>" },
      { h: "Empezar pronto", html: "<p>El CI en dosis baja desde el diagnóstico se asocia con mejor función pulmonar que esperar 2–4 años con síntomas. Quien tiene una crisis grave sin CI queda con peor función a largo plazo.</p>" }
    ],
    evidencia: ["gina2026r", "reddel2022"], pico: [], ateneos: [],
    conexiones: ["g-tx-air", "g-ev-riesgo", "g-ev-gravedad"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-tx-air", nivel: 2, mapa: "gina", titulo: "Rescate antiinflamatorio (AIR)", corto: "Rescate antiinflamatorio", tipo: "concepto",
    x: 600, y: 105, fuente: "GINA 2026, guía resumida, págs. 15, 21 y 38",
    resumen: "El rescate que además trae corticoide: CI-formoterol o CI-SABA.",
    teoria: [
      { h: "Qué es", html: "<p>Un inhalador de rescate que combina CI con un broncodilatador de acción rápida. Cada vez que el chico tiene síntomas, recibe también antiinflamatorio.</p>" },
      { h: "Opciones", html: "<ul><li><b>CI-formoterol en dosis baja</b> (budesonida-formoterol o beclometasona-formoterol): el preferido. En adultos y adolescentes reduce consultas de urgencia o internaciones un 65 % frente a SABA solo y un 37 % frente a CI diario con SABA. En niños de 6 a 11 años, en el paso 1, reduce las crisis.</li><li><b>CI-SABA</b> (budesonida-salbutamol, beclometasona-salbutamol): alternativa en adultos y adolescentes; poca evidencia en niños. No sirve para MART.</li><li><b>CI cada vez que se usa SABA</b>, en inhaladores separados, si no hay combinaciones.</li></ul>" },
      { h: "Otros usos", html: "<p>El CI-formoterol puede usarse antes del ejercicio o antes o durante una exposición a alérgenos.</p>" }
    ],
    evidencia: ["gina2026r", "obyrne2018"], pico: [], ateneos: [],
    conexiones: ["g-tx-nosaba", "g-ad-track1", "g-ni-pasos", "g-tx-ciclo", "g-tx-dosis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-tx-inhalador", nivel: 2, mapa: "gina", titulo: "Elegir y enseñar el inhalador", corto: "Elegir el inhalador", tipo: "concepto",
    x: 760, y: 105, fuente: "GINA 2026, guía resumida, págs. 16–17 y 20 (figura 3)",
    resumen: "Cinco preguntas para elegir, y verificar la técnica en cada oportunidad.",
    teoria: [
      { h: "Cinco preguntas", html: "<ol class=\"pasos\"><li>¿Qué clase de medicación necesita este paciente?</li><li>¿Qué inhaladores hay disponibles y a qué costo?</li><li>¿Cuáles puede usar bien después de entrenarlo?</li><li>¿Cuál tiene menor impacto ambiental?</li><li>¿Está conforme? Revisar la técnica seguido.</li></ol>" },
      { h: "Técnica", html: "<ul><li>Con aerosol presurizado, siempre aerocámara.</li><li>Pedir que muestre cómo lo usa y comparar con una lista del dispositivo.</li><li>Demostrar el paso incorrecto y volver a verificar, hasta 2–3 veces.</li></ul>" },
      { h: "Adherencia", html: "<p>Preguntar con empatía: «La mayoría no usa el inhalador exactamente como se indicó. En las últimas 4 semanas, ¿cuántos días por semana lo usó?». Revisar fechas de receta, contador de dosis y dispensación.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-tx-ciclo", "g-ev-nocontrol", "g-ad-track2"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-ni-inicio", nivel: 2, mapa: "gina", titulo: "Tratamiento inicial de 6 a 11 años", corto: "Inicio 6 a 11 años", tipo: "concepto",
    x: 430, y: 215, fuente: "GINA 2026, guía resumida, pág. 28 (tabla 4)",
    resumen: "Según la frecuencia de los síntomas al diagnóstico.",
    teoria: [
      { h: "Tabla 4", html: "<div class=\"tabla\"><table><thead><tr><th>Al diagnóstico</th><th>Iniciar con</th></tr></thead><tbody><tr><td>Síntomas 2 días por semana o menos</td><td>CI-formoterol o CI-SABA en dosis baja a demanda, o CI cada vez que usa SABA</td></tr><tr><td>Síntomas 3–4 días por semana</td><td>CI diario en dosis baja, más SABA o CI-SABA a demanda</td></tr><tr><td>Casi todos los días, despertares semanales o función baja</td><td>CI diario en dosis baja o media, o MART en dosis baja</td></tr><tr><td>Diarios, despertares semanales y función baja o crisis reciente</td><td>CI-LABA en dosis media con SABA, o MART en dosis baja</td></tr><tr><td>Debut con crisis</td><td>Tratar la crisis; luego CI-LABA en dosis media o MART en dosis baja</td></tr></tbody></table></div>" },
      { h: "Antes de empezar", html: "<p>Registrar la evidencia del diagnóstico, el control y los factores de riesgo; medir la función pulmonar si es posible; enseñar la técnica; programar el control.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-ni-pasos", "g-dx-criterios", "g-ev-control", "g-cr-tratamiento"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-ni-pasos", nivel: 1, mapa: "gina", titulo: "Pasos de tratamiento de 6 a 11 años", corto: "Pasos 6 a 11 años", tipo: "concepto",
    x: 430, y: 345, fuente: "GINA 2026, guía resumida, págs. 29–31 (figura 8)",
    resumen: "Cinco pasos; desde el paso 2, CI todos los días.",
    teoria: [
      { h: "Controlador preferido por paso", html: "<ol class=\"pasos\"><li><b>1</b> · CI-formoterol en dosis baja a demanda, o CI-SABA a demanda.</li><li><b>2</b> · CI diario en dosis baja.</li><li><b>3</b> · CI en dosis media, o CI-LABA en dosis baja, o MART en dosis baja.</li><li><b>4</b> · CI-LABA en dosis media, o MART (el doble de la dosis del paso 3, todavía baja). Considerar derivar.</li><li><b>5</b> · Derivar para evaluación del fenotipo; considerar tiotropio o biológicos.</li></ol><p>Rescate: CI-formoterol (si usa MART), CI-SABA, o SABA si no hay rescate antiinflamatorio.</p>" },
      { h: "Otras opciones con menos evidencia", html: "<ul><li>Montelukast en lugar del CI en el paso 2, o agregado en pasos 3–5: menos eficaz; riesgo de efectos neuropsiquiátricos.</li><li>Tiotropio agregado en el paso 4.</li><li>Inmunoterapia sublingual en pasos 1–3 con sensibilización relevante y asma estable.</li></ul>" },
      { h: "Subir y bajar", html: "<p>Antes de subir, revisar adherencia, técnica, factores de riesgo y comorbilidades. Si después de MART a demanda necesita más, el paso siguiente es MART en dosis baja. Considerar bajar tras 2–3 meses de buen control.</p>" }
    ],
    evidencia: ["gina2026r", "bisgaard2006chest"], pico: [], ateneos: [],
    conexiones: ["g-ni-inicio", "g-tx-dosis", "g-tx-grave", "g-tx-otros", "g-tx-air", "g-tx-ciclo", "g-cr-alta", "sa-escalones"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-ad-inicio", nivel: 2, mapa: "gina", titulo: "Tratamiento inicial desde los 12 años", corto: "Inicio 12 años o más", tipo: "concepto",
    x: 770, y: 215, fuente: "GINA 2026, guía resumida, pág. 22 (tabla 3)",
    resumen: "Track 1 preferido: CI-formoterol según la frecuencia de los síntomas.",
    teoria: [
      { h: "Tabla 3 (Track 1, preferido)", html: "<div class=\"tabla\"><table><thead><tr><th>Al diagnóstico</th><th>Iniciar con</th></tr></thead><tbody><tr><td>Síntomas 2 días por semana o menos</td><td>CI-formoterol en dosis baja a demanda</td></tr><tr><td>Menos de 3–5 días por semana, función normal o poco reducida</td><td>CI-formoterol en dosis baja a demanda</td></tr><tr><td>Casi todos los días, despertares semanales o función baja</td><td>MART en dosis baja</td></tr><tr><td>Diarios, con función baja o crisis reciente</td><td>MART en dosis media</td></tr><tr><td>Debut con crisis</td><td>Tratar la crisis (corticoide oral si es grave); luego MART en dosis media</td></tr></tbody></table></div><p>En Track 2 las opciones equivalentes usan CI o CI-LABA diario con rescate CI-SABA o SABA.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-ad-track1", "g-ad-track2", "g-dx-criterios", "g-ev-control"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-ad-track1", nivel: 1, mapa: "gina", titulo: "Track 1: CI-formoterol como rescate", corto: "Track 1", tipo: "concepto",
    x: 770, y: 345, fuente: "GINA 2026, guía resumida, págs. 23–24 (figuras 5 y 6)",
    resumen: "El camino preferido desde los 12 años: un solo inhalador para el rescate y el mantenimiento.",
    teoria: [
      { h: "Pasos", html: "<ol class=\"pasos\"><li><b>1–2</b> · Solo rescate: CI-formoterol en dosis baja a demanda.</li><li><b>3</b> · MART en dosis baja.</li><li><b>4</b> · MART en dosis media.</li><li><b>5</b> · Derivar; considerar LAMA, CI-formoterol en dosis alta, biológicos.</li></ol>" },
      { h: "Por qué es el preferido", html: "<p>Reduce las crisis graves frente a cualquier esquema con SABA como rescate, con un control de síntomas similar. Es más simple: un medicamento, un dispositivo y una técnica en los pasos 1 a 4.</p>" },
      { h: "Ojo", html: "<p>No usar CI-formoterol como rescate si el mantenimiento es un CI-LABA con otro LABA (salmeterol, vilanterol): ahí el rescate es SABA o CI-SABA.</p>" }
    ],
    evidencia: ["gina2026r", "obyrne2018", "sobieraj2018"], pico: [], ateneos: [],
    conexiones: ["g-ad-inicio", "g-ad-track2", "g-tx-dosis", "g-tx-air", "g-tx-ciclo", "g-tx-grave", "g-cr-plan", "g-cr-seguimiento", "sa-adolescentes"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-ad-track2", nivel: 2, mapa: "gina", titulo: "Track 2: rescate CI-SABA o SABA", corto: "Track 2", tipo: "concepto",
    x: 810, y: 440, fuente: "GINA 2026, guía resumida, pág. 25 (figura 7)",
    resumen: "La alternativa cuando no hay CI-formoterol, o si el paciente está estable y adherente con su esquema.",
    teoria: [
      { h: "Pasos", html: "<ol class=\"pasos\"><li><b>1</b> · CI-SABA a demanda, o CI cada vez que usa SABA.</li><li><b>2</b> · CI diario en dosis baja.</li><li><b>3</b> · CI-LABA en dosis baja.</li><li><b>4</b> · CI-LABA en dosis media.</li><li><b>5</b> · Derivar; CI-LABA en dosis alta, LAMA, biológicos.</li></ol><p>Rescate: CI-SABA si está disponible; si no, SABA.</p>" },
      { h: "Antes de elegirlo", html: "<p>Pensar si el paciente va a usar el CI diario. Con baja adherencia, termina en tratamiento con SABA solo y más riesgo de crisis: en ese caso Track 1 es más seguro.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-ad-track1", "g-ad-inicio", "g-tx-dosis", "g-tx-inhalador"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-tx-dosis", nivel: 3, mapa: "gina", titulo: "Tablas de dosis de CI y de AIR/MART", corto: "Tablas de dosis", tipo: "concepto",
    x: 600, y: 440, fuente: "GINA 2026, guía resumida, págs. 44–45 (tablas 6 y 7)",
    resumen: "Dosis baja, media y alta de cada CI, y cómo usar el CI-formoterol según edad y paso.",
    teoria: [
      { h: "CI en 6 a 11 años: dosis diaria total (µg)", html: "<div class=\"tabla\"><table><thead><tr><th>CI</th><th>Baja</th><th>Media</th><th>Alta</th></tr></thead><tbody><tr><td>Beclometasona (aerosol)</td><td>100–200</td><td>&gt;200–400</td><td>&gt;400</td></tr><tr><td>Beclometasona extrafina</td><td>50–100</td><td>&gt;100–200</td><td>&gt;200</td></tr><tr><td>Budesonida (polvo seco)</td><td>100–200</td><td>&gt;200–400</td><td>&gt;400</td></tr><tr><td>Budesonida (nebulizada)</td><td>250–500</td><td>&gt;500–1000</td><td>&gt;1000</td></tr><tr><td>Ciclesonida</td><td>80</td><td>&gt;80–160</td><td>&gt;160</td></tr><tr><td>Fluticasona furoato</td><td>50</td><td>—</td><td>—</td></tr><tr><td>Fluticasona propionato</td><td>50–100</td><td>&gt;100–200</td><td>&gt;200</td></tr><tr><td>Mometasona (aerosol)</td><td>100</td><td>200</td><td>—</td></tr></tbody></table></div><p class=\"nota\">Son rangos de dosis, no equivalencias. La mayor parte del beneficio se logra con dosis bajas.</p>" },
      { h: "CI-formoterol (AIR y MART)", html: "<div class=\"tabla\"><table><thead><tr><th></th><th>6 a 11 años</th><th>12 años o más</th></tr></thead><tbody><tr><td>Inhalador</td><td>Budesonida-formoterol 80/4,5 (o beclometasona-formoterol 100/6)</td><td>Budesonida-formoterol 160/4,5 (o beclometasona-formoterol 100/6)</td></tr><tr><td>Pasos 1–2 (solo rescate)</td><td>1 inhalación a demanda</td><td>1 inhalación a demanda</td></tr><tr><td>Paso 3 (MART)</td><td>1 por día + 1 a demanda</td><td>1 cada 12 h (o 1 por día) + 1 a demanda</td></tr><tr><td>Paso 4 (MART)</td><td>1 cada 12 h + 1 a demanda</td><td>2 cada 12 h + 1 a demanda</td></tr><tr><td>Paso 5</td><td>MART no recomendado</td><td>2 cada 12 h + 1 a demanda</td></tr><tr><td>Consultar si en 24 h necesita</td><td>más de 8 inhalaciones</td><td>más de 12 inhalaciones</td></tr></tbody></table></div><p class=\"nota\">Si los síntomas no mejoran en unos minutos, puede tomar otra inhalación; no hay que esperar horas entre dosis.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-ni-pasos", "g-ad-track1", "g-ad-track2", "g-tx-air"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-tx-bajar", nivel: 2, mapa: "gina", titulo: "Bajar de escalón", tipo: "concepto",
    x: 430, y: 455, fuente: "GINA 2026, guía resumida, págs. 27 y 31",
    resumen: "Tras 2–3 meses de buen control: buscar el paso más bajo que controle síntomas y crisis.",
    teoria: [
      { h: "Cómo", html: "<ul><li>Elegir un buen momento: sin infección respiratoria ni viajes.</li><li>Revisar factores de riesgo y registrar síntomas y función antes de bajar.</li><li>Reducir el CI un 25 a 50 %, con un inhalador de menor concentración o menos inhalaciones.</li><li>Plan de acción escrito, seguimiento cercano y esperar 2–3 meses antes de volver a bajar.</li><li>No suspender del todo el CI en adolescentes.</li></ul>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-tx-ciclo", "g-ev-riesgo"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-tx-grave", nivel: 3, mapa: "gina", titulo: "Paso 5: asma grave", corto: "Asma grave (paso 5)", tipo: "concepto",
    x: 500, y: 565, fuente: "GINA 2026, guía resumida, págs. 26, 30 y 40–42",
    resumen: "Derivar a un especialista en asma pediátrica para evaluar el fenotipo y agregar tratamiento.",
    teoria: [
      { h: "Antes", html: "<p>Confirmar técnica y adherencia con el tratamiento del paso 4 y manejar los factores asociados.</p>" },
      { h: "Opciones en 6 a 11 años", html: "<ul><li>Tiotropio agregado.</li><li>Omalizumab: asma alérgica grave.</li><li>Mepolizumab: asma eosinofílica grave.</li><li>Dupilumab: asma eosinofílica o tipo 2 grave, o dependiente de corticoide oral (no si eosinófilos ≥ 1500/µL).</li></ul><p>Desde los 12 años se suman benralizumab, depemokimab y tezepelumab.</p>" },
      { h: "Corticoide oral de mantenimiento", html: "<p>Solo como último recurso, en la menor dosis posible, controlando supresión suprarrenal y osteoporosis.</p>" }
    ],
    evidencia: ["gina2026r", "lanier2009", "jackson2022", "bacharier2021"], pico: [], ateneos: [],
    conexiones: ["g-ni-pasos", "g-ad-track1", "g-ev-nocontrol", "g-ev-gravedad", "g-dx-biomarcadores", "g-tx-otros", "sa-biologicos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-tx-otros", nivel: 3, mapa: "gina", titulo: "Otras opciones y tratamientos no recomendados", corto: "Otras y no recomendadas", tipo: "concepto",
    x: 720, y: 565, fuente: "GINA 2026, guía resumida, págs. 19, 27, 31 y 40",
    resumen: "Montelukast, inmunoterapia, medidas no farmacológicas, y lo que GINA desaconseja.",
    teoria: [
      { h: "Con indicaciones específicas o menos evidencia", html: "<ul><li><b>Montelukast</b>: menos eficaz que el CI, sobre todo para prevenir crisis; alerta por efectos graves en el ánimo y la conducta, conversarlo con la familia.</li><li><b>Inmunoterapia sublingual</b>: en sensibilización relevante con asma estable no controlada; no si el VEF₁ es bajo.</li></ul>" },
      { h: "No farmacológicas con buena evidencia", html: "<p>Evitar el humo de tabaco y el vapeo (también en autos y habitaciones de los chicos), actividad física regular, programas escolares de automanejo. Evitar alérgenos solo si hay sensibilización; no evitar el ejercicio ni la risa.</p>" },
      { h: "No recomendados", html: "<p>Salbutamol oral, teofilina oral, adrenalina oral, fenoterol inhalado, SABA en forma regular y corticoide oral de mantenimiento salvo como último recurso.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-ni-pasos", "g-tx-grave"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-cr-plan", nivel: 1, mapa: "gina", titulo: "Plan de acción escrito", tipo: "concepto",
    x: 1020, y: 115, fuente: "GINA 2026, guía resumida, págs. 21 y 33–34",
    resumen: "Escrito, digital o con dibujos; nunca solo verbal. Dice qué hacer cuando empeora y cuándo consultar.",
    teoria: [
      { h: "Qué incluye", html: "<p>La medicación habitual, cuándo y cómo aumentarla, y cuándo buscar atención urgente.</p>" },
      { h: "Según el rescate que usa", html: "<ul><li><b>CI-formoterol</b> (MART en niños, Track 1 en adolescentes): dosis extra cuando tiene síntomas, sin dejar el mantenimiento. Consultar si empeora rápido, no mejora en 2–3 días, o supera el máximo diario.</li><li><b>SABA</b> (niños de 6 a 11): SABA cuando lo necesita y aumentar el CI de mantenimiento por 1–2 semanas. Consultar si necesita SABA de nuevo antes de 3 horas o si empeora.</li></ul>" },
      { h: "Corticoide oral en el plan", html: "<p>Puede indicarse si empeora durante 2–3 días pese a más rescate, empeora rápido, tiene función &lt; 60 % o antecedentes de crisis súbitas graves. Niños: prednisolona 1–2 mg/kg/día (máximo 40 mg) por 3–5 días. Avisar al médico antes de empezarlo si es posible.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-cr-gravedad", "g-cr-ocs", "g-ad-track1", "g-tx-ciclo"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-cr-gravedad", nivel: 2, mapa: "gina", titulo: "Gravedad de la crisis", tipo: "concepto",
    x: 950, y: 215, fuente: "GINA 2026, guía resumida, págs. 35–36 (figura 9)",
    resumen: "Leve, moderada o grave; en menores de 18 años, con el PRAM.",
    teoria: [
      { h: "Clasificación", html: "<div class=\"tabla\"><table><thead><tr><th></th><th>Leve</th><th>Moderada</th><th>Grave</th></tr></thead><tbody><tr><td>Habla</td><td>Oraciones</td><td>Frases</td><td>No puede hablar ni beber</td></tr><tr><td>FR</td><td>Normal o algo alta</td><td>≤ 30/min</td><td>&gt; 30/min</td></tr><tr><td>SatO₂ (aire)</td><td>≥ 94 %</td><td>≥ 92 %</td><td>&lt; 92 %</td></tr><tr><td>PEF</td><td>&gt; 70 %</td><td>50–70 %</td><td>&lt; 50 %</td></tr><tr><td>PRAM</td><td>1–3</td><td>4–7</td><td>8–12</td></tr></tbody></table></div><p><b>Riesgo vital</b>: somnolencia, confusión, cianosis (PRAM 11–12).</p>" },
      { h: "Antes de clasificar", html: "<p>¿Es asma? Descartar neumotórax, anafilaxia, obstrucción laríngea, neumonía, cuerpo extraño. ¿Qué tratamiento recibió? ¿Tiene factores de riesgo de muerte por asma?</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-cr-tratamiento", "g-cr-plan", "sa-crisis-gravedad"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-cr-tratamiento", nivel: 1, mapa: "gina", titulo: "Tratamiento de la crisis", tipo: "concepto",
    x: 1090, y: 295, fuente: "GINA 2026, guía resumida, págs. 35–36 (figura 9)",
    resumen: "Salbutamol con aerocámara según gravedad, ipratropio, oxígeno y corticoide sistémico.",
    teoria: [
      { h: "Por gravedad", html: "<div class=\"tabla\"><table><thead><tr><th></th><th>Salbutamol (100 µg/disparo)</th><th>Además</th></tr></thead><tbody><tr><td>Leve</td><td>4 disparos, hasta 3 veces cada 20–30 min</td><td>Corticoide oral no siempre</td></tr><tr><td>Moderada</td><td>4–6 disparos (o 2,5 mg nebulizado), hasta 3 veces</td><td>Ipratropio 4 disparos con cada dosis; corticoide oral</td></tr><tr><td>Grave</td><td>6–10 disparos (o 5 mg nebulizado) cada 20–30 min</td><td>Ipratropio, oxígeno, corticoide sistémico, monitoreo continuo; derivar</td></tr></tbody></table></div><p>Oxígeno con objetivo de SatO₂ <b>92–95 %</b>. Si hay anafilaxia, adrenalina primero.</p>" },
      { h: "Cómo dar el aerosol", html: "<p>Con aerocámara, de a un disparo, agitando antes de cada uno. Si está muy disneico, respiración corriente en vez de apnea.</p>" },
      { h: "No hacer de rutina", html: "<p>Radiografía de tórax, gases en sangre, antibióticos. No usar sedantes.</p>" },
      { h: "Reevaluar a la hora", html: "<p>Saturación, FR, músculos accesorios, entrada de aire, PEF y el score clínico.</p>" }
    ],
    evidencia: ["gina2026r", "griffiths2013"], pico: [], ateneos: [],
    conexiones: ["g-cr-gravedad", "g-cr-ocs", "g-cr-alta", "g-ni-inicio", "sa-crisis-broncod"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-cr-ocs", nivel: 2, mapa: "gina", titulo: "Corticoide oral", tipo: "concepto",
    x: 950, y: 375, fuente: "GINA 2026, guía resumida, págs. 34–35 y 42",
    resumen: "Puede salvar vidas en la crisis grave, pero cada curso suma efectos adversos.",
    teoria: [
      { h: "Dosis", html: "<p>Niños: prednisolona 1–2 mg/kg/día (máximo 40 mg) a la mañana, por 3–5 días. Si dura menos de 2 semanas, no hace falta descenso gradual.</p>" },
      { h: "Cada curso cuenta", html: "<p>Los cursos cortos se asocian con trastornos del sueño, reflujo, hiperglucemia y cambios de ánimo, y acumulados aumentan el riesgo de diabetes, osteoporosis, cataratas y otras condiciones. Para necesitar menos cursos: optimizar el tratamiento inhalado, la técnica y la adherencia.</p>" },
      { h: "Derivar", html: "<p>Si recibió más de un curso de corticoide oral en el último año.</p>" }
    ],
    evidencia: ["gina2026r", "keeney2014"], pico: [], ateneos: [],
    conexiones: ["g-cr-tratamiento", "g-cr-plan", "g-cr-alta"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-cr-alta", nivel: 2, mapa: "gina", titulo: "Criterios de alta", tipo: "concepto",
    x: 1090, y: 455, fuente: "GINA 2026, guía resumida, págs. 35–36",
    resumen: "Criterios de crisis leve durante 1–2 horas, saturación ≥ 92 % y recursos en casa.",
    teoria: [
      { h: "Para irse a casa", html: "<ul><li>Síntomas y signos de crisis leve durante al menos 1–2 horas después del último salbutamol.</li><li>SatO₂ ≥ 92 % en aire ambiente.</li><li>PEF en mejora y &gt; 70 %.</li><li>Recursos adecuados en el hogar.</li></ul>" },
      { h: "Antes de que se vaya", html: "<ul><li>Iniciar o subir el tratamiento con CI. En 6 a 11 años: CI-LABA en dosis media con rescate, o MART. Desde los 12: preferir MART.</li><li>Rescate solo a demanda, no en forma regular.</li><li>Entrenar la técnica y reforzar la adherencia.</li><li>Completar el corticoide oral.</li><li>Plan de acción escrito para los próximos días y medicación suficiente hasta el control.</li></ul>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-cr-tratamiento", "g-cr-seguimiento", "g-ni-pasos", "g-cr-ocs"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "g-cr-seguimiento", nivel: 3, mapa: "gina", titulo: "Seguimiento después de la crisis", corto: "Seguimiento", tipo: "concepto",
    x: 1000, y: 560, fuente: "GINA 2026, guía resumida, págs. 35–37",
    resumen: "Control en 2 a 5 días en niños; la crisis es una señal para revisar todo el tratamiento.",
    teoria: [
      { h: "En el control", html: "<ul><li>¿Se está resolviendo? ¿Hay que seguir el corticoide o enviarlo a la guardia?</li><li>Confirmar que sigue con CI y que usa el rescate solo cuando lo necesita.</li><li>Técnica, adherencia, plan de acción.</li><li>Preguntar qué creen que desencadenó la crisis; revisar exposiciones y vacunas.</li><li>Desde los 12 años, preferir cambiar a Track 1.</li><li>Próximo control en 2–3 meses.</li></ul>" },
      { h: "Derivar", html: "<p>Si tuvo más de una crisis en el año pese a CI-LABA en dosis media o alta, o más de un curso de corticoide oral, o consultas repetidas en guardia.</p>" }
    ],
    evidencia: ["gina2026r"], pico: [], ateneos: [],
    conexiones: ["g-cr-alta", "g-ev-riesgo", "g-ad-track1", "sa-alta"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* ───── Dermatología › Exantemas ───── */
  {
    id: "ex-abordaje", nivel: 1, mapa: "exantemas", titulo: "Cómo abordar un exantema", corto: "Abordaje", tipo: "tema", edad: "El punto de partida", color: "var(--derm)",
    x: 600, y: 145,
    resumen: "Tres preguntas ordenan casi todo: qué lesión domina, cómo está el chico y qué pasó antes (fiebre, fármacos, contactos, vacunas).",
    teoria: [
      { h: "1. ¿Cómo está?", html: "<p>Antes de mirar la piel, mirar al paciente: estado general, perfusión, presión, frecuencia cardíaca, mucosas y dolor de piel. Un chico que se ve mal con un exantema es una urgencia hasta que se demuestre lo contrario (ver <a href=\"#ex-alarma\">señales de alarma</a>).</p>" },
      { h: "2. ¿Qué lesión domina?", html: "<div class=\"tabla\"><table><thead><tr><th>Lesión</th><th>Ejemplos</th></tr></thead><tbody><tr><td>Máculas y pápulas</td><td>Sarampión, rubéola, roséola, parvovirus, dengue, fármacos</td></tr><tr><td>Eritema difuso</td><td>Escarlatina, shock tóxico, Kawasaki, MIS-C, DRESS</td></tr><tr><td>Vesículas y ampollas</td><td>Varicela, mano-pie-boca, eccema herpético, piel escaldada, SJS/NET</td></tr><tr><td>Petequias y púrpura</td><td>Meningococo, virus, vasculitis por IgA, dengue</td></tr><tr><td>Habones y dianas</td><td>Urticaria, anafilaxia, enfermedad del suero, eritema multiforme</td></tr></tbody></table></div><p>Ver si la lesión desaparece con la vitropresión (eritema) o no (petequia o púrpura) es el primer paso.</p>" },
      { h: "3. ¿Qué pasó antes?", html: "<ul><li><b>Cronología fiebre–exantema:</b> el exantema que aparece cuando cede la fiebre sugiere roséola; el que llega después de 3–4 días de pródromo catarral, sarampión.</li><li><b>Fármacos de las últimas 8 semanas:</b> los exantemas por fármacos aparecen de días (morbiliforme) a semanas (DRESS) después del inicio.</li><li><b>Vacunas, contactos, brotes y viajes:</b> sarampión, rubéola, varicela, dengue.</li><li><b>Enantema:</b> Koplik, lengua aframbuesada, vesículas en el paladar, mucositis.</li><li><b>Distribución y progresión:</b> cefalocaudal (sarampión), centrípeta (varicela), acral (mano-pie-boca, eritema multiforme), pliegues (escarlatina, piel escaldada).</li></ul>" },
      { h: "Tres familias de causas", html: "<p><b>Infecciosas</b> (la gran mayoría en pediatría: virus, estreptococo, estafilococo, meningococo), <b>alérgicas o por fármacos</b> (urticaria, exantema morbiliforme, enfermedad del suero, DRESS, SJS/NET) e <b>inflamatorias</b> (Kawasaki, MIS-C, vasculitis por IgA). A menudo se superponen: un virus puede desencadenar urticaria o eritema multiforme, y un antibiótico dado durante una infección viral suele cargar con la culpa del exantema.</p>" }
    ],
    evidencia: ["mortureux1998", "mill2016"], pico: [], ateneos: [],
    conexiones: ["ex-alarma", "ex-sarampion", "ex-escarlatina", "ex-varicela", "ex-meningococo", "ex-urticaria", "ex-farmaco"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-alarma", nivel: 1, mapa: "exantemas", titulo: "Señales de alarma", tipo: "concepto",
    x: 600, y: 285,
    resumen: "Los signos que cambian la conducta en minutos: petequias con fiebre, dolor de piel, ampollas, mucosas, hipotensión.",
    teoria: [
      { h: "Qué buscar y en qué pensar", html: "<div class=\"tabla\"><table><thead><tr><th>Signo</th><th>Pensar en</th></tr></thead><tbody><tr><td>Fiebre con petequias o púrpura, mal estado</td><td><a href=\"#ex-meningococo\">Meningococcemia</a>, sepsis</td></tr><tr><td>Eritrodermia con hipotensión</td><td><a href=\"#ex-shock\">Shock tóxico</a></td></tr><tr><td>Piel dolorosa, ampollas, Nikolsky positivo</td><td><a href=\"#ex-ssss\">Piel escaldada</a>, <a href=\"#ex-sjs\">SJS/NET</a></td></tr><tr><td>Dos o más mucosas comprometidas</td><td><a href=\"#ex-sjs\">SJS/NET</a>, <a href=\"#ex-mirm\">MIRM/RIME</a></td></tr><tr><td>Edema facial, adenopatías, eosinofilia, hepatitis semanas después de un fármaco</td><td><a href=\"#ex-dress\">DRESS</a></td></tr><tr><td>Fiebre de 5 días o más</td><td><a href=\"#ex-kawasaki\">Kawasaki</a>, <a href=\"#ex-misc\">MIS-C</a></td></tr><tr><td>Compromiso respiratorio o circulatorio tras una exposición</td><td><a href=\"#ex-anafilaxia\">Anafilaxia</a></td></tr></tbody></table></div>" },
      { h: "Pacientes de más riesgo", html: "<ul><li>Lactantes pequeños, sobre todo menores de 3 meses con fiebre.</li><li>Inmunocomprometidos (varicela, herpes, sarampión graves).</li><li>Dermatitis atópica extensa (eccema herpético, sobreinfección).</li><li>Sin vacunas o con esquema incompleto.</li></ul>" }
    ],
    evidencia: ["thompson2006", "brogan2000"], pico: [], ateneos: [],
    conexiones: ["ex-meningococo", "ex-sjs", "ex-ssss", "ex-shock", "ex-kawasaki", "ex-anafilaxia", "ex-dress"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Maculopapular */
  {
    id: "ex-sarampion", nivel: 1, mapa: "exantemas", titulo: "Sarampión", tipo: "concepto", causa: "infecciosa",
    x: 100, y: 125,
    resumen: "Pródromo de fiebre, tos, coriza y conjuntivitis; Koplik; exantema que empieza detrás de las orejas y baja.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Incubación de 10 a 12 días.</li><li>Pródromo de 3 a 4 días: fiebre alta, tos, coriza y conjuntivitis.</li><li>Manchas de Koplik (puntos blanquecinos en la mucosa yugal) uno o dos días antes del exantema.</li><li>Exantema maculopapular que empieza en la línea del pelo y detrás de las orejas, baja hacia el tronco y las extremidades y tiende a confluir; deja descamación fina.</li><li>Contagia desde 4 días antes hasta 4 días después del exantema.</li></ul>" },
      { h: "Complicaciones", html: "<p>Otitis, diarrea, laringitis, neumonía (la principal causa de muerte), encefalitis aguda y, años después, panencefalitis esclerosante subaguda. Más graves en lactantes, desnutridos e inmunocomprometidos.</p>" },
      { h: "Qué hacer", html: "<ul><li><b>Aislamiento respiratorio</b> y <b>notificación inmediata</b> ante la sospecha, sin esperar la confirmación.</li><li>Laboratorio según normas del Ministerio de Salud (serología IgM, PCR en hisopado y orina).</li><li><b>Vitamina A</b> en dos dosis separadas por 24 horas: 50.000 UI en menores de 6 meses, 100.000 UI de 6 a 11 meses y 200.000 UI desde los 12 meses.</li><li>Control de contactos: vacuna dentro de las 72 horas o gammaglobulina en los que no pueden vacunarse, dentro de los 6 días.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Rubéola", claves: "<ul><li>Pródromo leve o ausente, adenopatías retroauriculares y occipitales, exantema que dura 3 días y no confluye.</li></ul>", nodo: "ex-rubeola" },
      { dx:"Kawasaki", claves: "<ul><li>Labios rojos y fisurados, lengua aframbuesada, edema de manos y pies; sin Koplik ni tos con coriza.</li></ul>", nodo: "ex-kawasaki" },
      { dx:"Exantema por fármacos", claves: "<ul><li>Antecedente de un fármaco iniciado 4–14 días antes, prurito, sin pródromo catarral.</li></ul>", nodo: "ex-farmaco" },
      { dx:"Dengue", claves: "<ul><li>Viaje o brote, fiebre alta con dolor retroocular y mialgias, plaquetas bajas; sin coriza ni conjuntivitis marcada.</li></ul>", nodo: "ex-dengue" },
      { dx:"Escarlatina", claves: "<ul><li>Exantema áspero en papel de lija con faringitis, sin catarro ni conjuntivitis.</li></ul>", nodo: "ex-escarlatina" }
    ],
    evidencia: ["moss2017", "huiming2005"],
    pico: [
      { p: "Niños con sarampión", i: "Vitamina A (dos dosis)", c: "Placebo", o: "Mortalidad y neumonía",
        respuesta: "En el conjunto de los ensayos la mortalidad no bajó de forma significativa, pero dos dosis de 200.000 UI redujeron la mortalidad en menores de 2 años y la mortalidad por neumonía. Una dosis única no mostró beneficio. Por eso se indican dos dosis.",
        certeza: "Moderada", refs: ["huiming2005"] }
    ],
    ateneos: [],
    conexiones: ["ex-rubeola", "ex-kawasaki", "ex-farmaco", "ex-dengue"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-rubeola", nivel: 2, mapa: "exantemas", titulo: "Rubéola", tipo: "concepto", causa: "infecciosa",
    x: 230, y: 125,
    resumen: "Exantema leve y fugaz con adenopatías retroauriculares y occipitales. Lo grave es el contagio a embarazadas.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Pródromo leve o ausente en niños.</li><li>Adenopatías retroauriculares, occipitales y cervicales posteriores, a veces antes del exantema.</li><li>Exantema maculopapular rosado, cefalocaudal, que dura unos 3 días y no confluye tanto como el del sarampión.</li><li>En adolescentes, artralgias.</li></ul>" },
      { h: "Por qué importa", html: "<p>La infección en el primer trimestre del embarazo puede causar el síndrome de rubéola congénita (cataratas, sordera, cardiopatía). Ante la sospecha: aislamiento, notificación y preguntar por embarazadas entre los contactos.</p>" }
    ],
    diferenciales: [
      { dx:"Sarampión", claves: "<ul><li>Pródromo de 3–4 días con fiebre alta, tos, coriza, conjuntivitis y Koplik; aspecto de enfermo.</li></ul>", nodo: "ex-sarampion" },
      { dx:"Parvovirus B19", claves: "<ul><li>Mejillas abofeteadas y exantema reticulado en los brazos; artralgias en adolescentes, sin adenopatías occipitales.</li></ul>", nodo: "ex-parvo" },
      { dx:"Exantemas virales inespecíficos", claves: "<ul><li>Sin adenopatías típicas; solo la serología o PCR confirma (importa por las embarazadas).</li></ul>", nodo: "ex-viral" }
    ],
    evidencia: ["moss2017"], pico: [], ateneos: [],
    conexiones: ["ex-parvo"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-roseola", nivel: 2, mapa: "exantemas", titulo: "Exantema súbito (roséola)", corto: "Exantema súbito", tipo: "concepto", causa: "infecciosa",
    x: 360, y: 125,
    resumen: "Lactante con 3 a 5 días de fiebre alta y buen estado; cuando la fiebre cede, aparece un exantema rosado.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Herpesvirus humano 6 (y a veces 7), entre los 6 y los 24 meses.</li><li>Fiebre alta de 3 a 5 días con buen estado general; puede haber irritabilidad, diarrea y fontanela tensa.</li><li>Al ceder la fiebre, máculas y pápulas rosadas en tronco y cuello que desaparecen en 1 o 2 días.</li><li>Puede haber pápulas en el paladar blando (manchas de Nagayama).</li></ul>" },
      { h: "Lo que enseña la cohorte de Zerr", html: "<p>La infección por HHV-6 es casi universal a los 2 años y casi siempre da síntomas, pero la roséola típica aparece en una minoría. Muchas fiebres sin foco del lactante son HHV-6.</p>" },
      { h: "Trampa frecuente", html: "<p>Si durante la fiebre recibió un antibiótico, el exantema que aparece al ceder la fiebre suele interpretarse como alergia. Antes de rotular, ver <a href=\"#ex-farmaco\">exantema por fármacos</a>.</p>" }
    ],
    diferenciales: [
      { dx:"Exantema por amoxicilina", claves: "<ul><li>Si recibió antibiótico durante la fiebre: la roséola aparece al ceder la fiebre, el exantema por fármacos no depende de ella.</li></ul>", nodo: "ex-farmaco" },
      { dx:"Sarampión", claves: "<ul><li>En el sarampión el exantema llega con la fiebre más alta, no cuando cede.</li></ul>", nodo: "ex-sarampion" },
      { dx:"Infección urinaria o bacteriemia", claves: "<ul><li>Fiebre alta sin foco en el lactante: si no aparece el exantema o el estado se deteriora, buscar foco bacteriano.</li></ul>" }
    ],
    evidencia: ["zerr2005"], pico: [], ateneos: [],
    conexiones: ["ex-farmaco", "ex-viral"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-parvo", nivel: 2, mapa: "exantemas", titulo: "Eritema infeccioso (parvovirus B19)", corto: "Eritema infeccioso", tipo: "concepto", causa: "infecciosa",
    x: 100, y: 210,
    resumen: "Mejillas abofeteadas y luego un exantema en encaje en los miembros. Cuando aparece el exantema ya no contagia.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Escolares, en brotes de fin de invierno y primavera.</li><li>Primero, eritema intenso de las mejillas con palidez peribucal.</li><li>Días después, exantema reticulado (en encaje) en brazos, piernas y tronco, que puede reaparecer durante semanas con el calor o el ejercicio.</li><li>Variante: síndrome papular-purpúrico en guantes y calcetines.</li></ul>" },
      { h: "A quién afecta más", html: "<ul><li><b>Anemias hemolíticas</b> (esferocitosis, drepanocitosis): crisis aplásica transitoria.</li><li><b>Inmunocomprometidos:</b> anemia crónica.</li><li><b>Embarazadas:</b> anemia fetal e hidrops.</li></ul><p>Cuando aparece el exantema el chico ya no contagia y puede ir a la escuela.</p>" }
    ],
    diferenciales: [
      { dx:"Rubéola", claves: "<ul><li>Adenopatías occipitales, sin mejillas abofeteadas.</li></ul>", nodo: "ex-rubeola" },
      { dx:"Lupus", claves: "<ul><li>Eritema malar respetando el surco nasogeniano, compromiso sistémico, citopenias, anticuerpos.</li></ul>" },
      { dx:"Fotosensibilidad o dermatitis de contacto", claves: "<ul><li>Distribución en zonas expuestas o de contacto, sin pródromo viral.</li></ul>" }
    ],
    evidencia: ["young2004"], pico: [], ateneos: [],
    conexiones: ["ex-petvir", "ex-rubeola"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-viral", nivel: 1, mapa: "exantemas", titulo: "Exantemas virales inespecíficos", corto: "Viral inespecífico", tipo: "concepto", causa: "infecciosa",
    x: 230, y: 210,
    resumen: "La causa más frecuente de exantema en la infancia: enterovirus, adenovirus y otros virus respiratorios.",
    teoria: [
      { h: "Cómo se presenta", html: "<p>Exantema maculopapular, a veces petequial o urticariano, con fiebre y síntomas respiratorios o digestivos. Se autolimita en días. El diagnóstico es clínico y por exclusión de lo grave.</p>" },
      { h: "Imitadores", html: "<ul><li><b>Adenovirus:</b> fiebre alta, conjuntivitis y faringitis; puede imitar a <a href=\"#ex-kawasaki\">Kawasaki</a>.</li><li><b>Enterovirus:</b> en verano y otoño; puede dar petequias o <a href=\"#ex-mpb\">mano-pie-boca</a>.</li><li><b>Gianotti-Crosti:</b> pápulas en cara, glúteos y extremidades que respetan el tronco, tras distintos virus.</li></ul>" },
      { h: "El problema del antibiótico", html: "<p>Muchos chicos con un exantema viral están tomando un antibiótico, y el exantema termina rotulado como alergia. La mayoría de esas etiquetas son falsas (ver <a href=\"#ex-farmaco\">exantema por fármacos</a>).</p>" }
    ],
    diferenciales: [
      { dx:"Exantema por fármacos", claves: "<ul><li>Fármaco iniciado días antes, prurito intenso, eosinofilia.</li></ul>", nodo: "ex-farmaco" },
      { dx:"Kawasaki", claves: "<ul><li>Fiebre de 5 días o más con cambios en mucosas, extremidades, conjuntivas y adenopatía.</li></ul>", nodo: "ex-kawasaki" },
      { dx:"Sarampión", claves: "<ul><li>Pródromo catarral intenso, Koplik, vacunación incompleta: aislar y notificar.</li></ul>", nodo: "ex-sarampion" },
      { dx:"Meningococcemia temprana", claves: "<ul><li>Puede empezar maculopapular: fiebre con mal estado o lesiones que no desaparecen a la vitropresión.</li></ul>", nodo: "ex-meningococo" }
    ],
    evidencia: ["mortureux1998", "mill2016"], pico: [], ateneos: [],
    conexiones: ["ex-urticaria", "ex-farmaco", "ex-mpb", "ex-kawasaki"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-dengue", nivel: 2, mapa: "exantemas", titulo: "Dengue", tipo: "concepto", causa: "infecciosa",
    x: 360, y: 210,
    resumen: "Fiebre alta con dolor retroocular y muscular; el exantema llega al bajar la fiebre, que es también cuando aparecen las complicaciones.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Fase febril de 2 a 7 días: fiebre alta, cefalea, dolor retroocular, mialgias, náuseas.</li><li>Exantema maculopapular o eritema difuso con «islas blancas en un mar rojo», a menudo en la defervescencia o la convalecencia; puede picar.</li><li>Petequias y prueba del lazo positiva.</li></ul>" },
      { h: "Señales de alarma", html: "<p>Dolor abdominal intenso, vómitos persistentes, acumulación de líquidos, sangrado de mucosas, letargo o irritabilidad, hepatomegalia y aumento del hematocrito con caída rápida de las plaquetas. Aparecen sobre todo cuando baja la fiebre (fase crítica).</p>" },
      { h: "Qué hacer", html: "<ul><li>Notificar. Antígeno NS1 o PCR en los primeros días; serología después.</li><li>Paracetamol para la fiebre; <b>evitar AINE y aspirina</b>.</li><li>Hidratación oral y control diario de hematocrito y plaquetas en la fase crítica.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Exantemas virales", claves: "<ul><li>Sin epidemiología de dengue, sin plaquetopenia ni hemoconcentración.</li></ul>", nodo: "ex-viral" },
      { dx:"Chikungunya y Zika", claves: "<ul><li>Chikungunya: artralgias intensas. Zika: conjuntivitis no purulenta, fiebre baja.</li></ul>" },
      { dx:"Meningococcemia", claves: "<ul><li>Petequias con mal estado y shock rápido, sin el patrón de fases del dengue.</li></ul>", nodo: "ex-meningococo" },
      { dx:"Leptospirosis", claves: "<ul><li>Exposición a agua o roedores, mialgias en pantorrillas, sufusión conjuntival, compromiso renal y hepático.</li></ul>" }
    ],
    evidencia: ["pazbailey2024"], pico: [], ateneos: [],
    conexiones: ["ex-petvir", "ex-meningococo"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-mono", nivel: 2, mapa: "exantemas", titulo: "Mononucleosis y amoxicilina", corto: "Mononucleosis + amoxicilina", tipo: "concepto", causa: ["infecciosa", "alergica"],
    x: 105, y: 300,
    resumen: "El virus de Epstein-Barr puede dar exantema por sí solo, y más si se da amoxicilina; casi nunca es una alergia verdadera.",
    teoria: [
      { h: "Cómo se presenta", html: "<p>Fiebre, faringitis exudativa, adenopatías cervicales posteriores, hepatoesplenomegalia y edema palpebral. Si recibe amoxicilina (a menudo porque se pensó en estreptococo), puede aparecer un exantema maculopapular intenso y pruriginoso a los 7–10 días.</p>" },
      { h: "Cuánto ocurre hoy", html: "<p>Con ampicilina se describía hasta un 90 %. Con amoxicilina, en una serie pediátrica fue del 29,5 %, y sin antibiótico del 23 %.</p>" },
      { h: "Qué hacer", html: "<p>Suspender el antibiótico si no hacía falta. No rotular como alérgico a la penicilina sin una evaluación: la reacción suele deberse a la infección y no se repite.</p>" }
    ],
    diferenciales: [
      { dx:"Faringitis estreptocócica", claves: "<ul><li>Sin adenopatías posteriores ni hepatoesplenomegalia; test rápido positivo. Pueden coexistir.</li></ul>", nodo: "ex-escarlatina" },
      { dx:"Exantema por fármacos (alergia verdadera)", claves: "<ul><li>Sin cuadro de mononucleosis; si fue con amoxicilina durante una mononucleosis, casi nunca es alergia.</li></ul>", nodo: "ex-farmaco" },
      { dx:"Infección aguda por CMV, toxoplasma o VIH", claves: "<ul><li>Síndrome mononucleósico con anticuerpos heterófilos negativos; considerar en adolescentes.</li></ul>" },
      { dx:"Leucemia", claves: "<ul><li>Citopenias, blastos, dolor óseo, adenopatías que no ceden.</li></ul>" }
    ],
    evidencia: ["chovel2013", "shulman2012"],
    pico: [
      { p: "Niños con mononucleosis", i: "Amoxicilina", c: "Sin antibiótico", o: "Exantema",
        respuesta: "El exantema con amoxicilina (29,5 %) es mucho menos frecuente que lo descrito con ampicilina (90 %), y no fue significativamente distinto del observado sin antibióticos (23 %). La mononucleosis por sí sola explica buena parte de los exantemas.",
        certeza: "Baja", refs: ["chovel2013"] }
    ],
    ateneos: [],
    conexiones: ["ex-farmaco", "ex-escarlatina"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-farmaco", nivel: 1, mapa: "exantemas", titulo: "Exantema morbiliforme por fármacos", corto: "Morbiliforme por fármacos", tipo: "concepto", causa: "alergica",
    x: 335, y: 300,
    resumen: "La reacción a fármacos más común: máculas y pápulas que aparecen días después de empezar. Casi siempre benigna, y muchas veces ni siquiera es por el fármaco.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Aparece entre 4 y 14 días después de iniciar el fármaco (antes si ya lo había recibido).</li><li>Máculas y pápulas pruriginosas que empiezan en el tronco y se extienden.</li><li>Sin mucosas, sin ampollas, sin compromiso sistémico.</li><li>En niños, los betalactámicos son los más involucrados.</li></ul>" },
      { h: "¿Es alergia o es el virus?", html: "<p>La mayoría de los niños con exantema durante un antibiótico tiene una infección viral. En una cohorte de 818 niños derivados por sospecha de alergia a la amoxicilina, el 94 % toleró la provocación oral.</p>" },
      { h: "Qué hacer", html: "<ul><li>Descartar <a href=\"#ex-alarma\">señales de reacción grave</a>: mucosas, ampollas, dolor de piel, edema facial, fiebre alta, eosinofilia o hepatitis.</li><li>Suspender o cambiar el fármaco si sigue siendo necesario tratar; antihistamínico para el prurito.</li><li>Registrar lo que pasó (fecha, dosis, tiempo hasta la reacción, foto) y <b>derivar a alergia</b> para provocación oral en lugar de rotular para siempre.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Exantema viral", claves: "<ul><li>Pródromo y fiebre antes del fármaco; contactos enfermos. Es la causa más frecuente en niños.</li></ul>", nodo: "ex-viral" },
      { dx:"DRESS", claves: "<ul><li>Fiebre alta, edema facial, adenopatías, eosinofilia, hepatitis; 2 a 8 semanas después del fármaco.</li></ul>", nodo: "ex-dress" },
      { dx:"Stevens-Johnson", claves: "<ul><li>Dolor de piel, ampollas, Nikolsky positivo y dos o más mucosas.</li></ul>", nodo: "ex-sjs" },
      { dx:"Enfermedad del suero", claves: "<ul><li>Urticaria o lesiones policíclicas con artralgias y edema, 1 a 3 semanas después (cefaclor).</li></ul>", nodo: "ex-suero" }
    ],
    evidencia: ["mill2016", "mortureux1998"],
    pico: [
      { p: "Niños con exantema benigno durante un tratamiento con amoxicilina", i: "Provocación oral graduada", c: "Evitar la amoxicilina de por vida", o: "Confirmar o descartar la alergia",
        respuesta: "El 94 % de los niños toleró la provocación; las reacciones fueron leves. La provocación oral es segura y permite retirar la etiqueta en la gran mayoría.",
        certeza: "Moderada", refs: ["mill2016"] }
    ],
    casos: [
      { titulo: "La etiqueta que no era", html: "<p>Niño de 2 años, quinto día de amoxicilina por otitis media. Aparecen máculas y pápulas en el tronco, sin fiebre, sin mucosas, con buen estado general. Se suspende el antibiótico y la familia se va con la indicación de consultar a alergia. Meses después, la provocación oral es negativa y la etiqueta se retira.</p><p><b>Para discutir:</b> ¿qué datos hubieran cambiado la conducta? ¿Cómo se registra la reacción para que sirva después?</p>", nodos: ["ex-viral", "ex-urticaria"] }
    ],
    ateneos: [],
    conexiones: ["ex-dress", "ex-sjs", "ex-urticaria", "ex-suero"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Eritema difuso */
  {
    id: "ex-escarlatina", nivel: 1, mapa: "exantemas", titulo: "Escarlatina", tipo: "concepto", causa: "infecciosa",
    x: 100, y: 450,
    resumen: "Estreptococo del grupo A: exantema áspero como papel de lija, lengua aframbuesada y descamación de manos y pies después.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Entre los 3 y los 15 años, con faringitis y fiebre.</li><li>Exantema eritematoso de pápulas finas, áspero al tacto, que empieza en el cuello y los pliegues.</li><li>Líneas de Pastia en los pliegues, palidez alrededor de la boca, lengua aframbuesada.</li><li>Descamación de manos y pies a los 7 a 10 días.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Confirmar con test rápido o cultivo de fauces.</li><li>Amoxicilina por 10 días (o penicilina). En alérgicos: cefalosporina de primera generación si no fue anafilaxia, o clindamicina; macrólido según resistencia local.</li><li>Vuelve a la escuela tras 12 a 24 horas de antibiótico.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Kawasaki", claves: "<ul><li>Fiebre de 5 días o más, conjuntivitis sin secreción, edema de manos y pies, sin respuesta al antibiótico.</li></ul>", nodo: "ex-kawasaki" },
      { dx:"Shock tóxico", claves: "<ul><li>Eritrodermia con hipotensión y falla de órganos.</li></ul>", nodo: "ex-shock" },
      { dx:"Síndrome de piel escaldada", claves: "<ul><li>Piel dolorosa, ampollas flácidas, Nikolsky positivo, costras periorificiales.</li></ul>", nodo: "ex-ssss" },
      { dx:"Exantema viral o por fármacos", claves: "<ul><li>Sin faringitis exudativa ni lengua aframbuesada; test rápido negativo.</li></ul>", nodo: "ex-viral" }
    ],
    evidencia: ["shulman2012"], pico: [], ateneos: [],
    conexiones: ["ex-kawasaki", "ex-shock", "ex-ssss"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-shock", nivel: 3, mapa: "exantemas", titulo: "Síndrome de shock tóxico", corto: "Shock tóxico", tipo: "concepto", causa: "infecciosa",
    x: 235, y: 450,
    resumen: "Fiebre, hipotensión y eritrodermia como quemadura de sol por toxinas de estafilococo o estreptococo. Una urgencia.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Fiebre alta, hipotensión y compromiso de varios órganos (renal, hepático, plaquetas, sensorio).</li><li>Eritrodermia difusa, hiperemia conjuntival y de mucosas.</li><li>Descamación de palmas y plantas 1 a 2 semanas después.</li></ul>" },
      { h: "Focos a buscar", html: "<p><b>Estafilococo:</b> heridas, quemaduras, tapones nasales, tampones. <b>Estreptococo:</b> varicela sobreinfectada, fascitis, infecciones de partes blandas; suele tener dolor desproporcionado.</p>" },
      { h: "Qué hacer", html: "<ul><li>Reanimación con fluidos y cuidados intensivos.</li><li>Remover o drenar el foco.</li><li>Antibiótico antiestafilocócico (vancomicina si hay riesgo de SAMR) más <b>clindamicina</b> para frenar la producción de toxinas; considerar IGIV en los casos graves.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Meningococcemia", claves: "<ul><li>Petequias y púrpura en lugar de eritrodermia difusa.</li></ul>", nodo: "ex-meningococo" },
      { dx:"Escarlatina", claves: "<ul><li>Mismo exantema pero buen estado general y sin hipotensión.</li></ul>", nodo: "ex-escarlatina" },
      { dx:"MIS-C o Kawasaki con shock", claves: "<ul><li>Antecedente de COVID-19, compromiso cardíaco y gastrointestinal, marcadores inflamatorios muy altos.</li></ul>", nodo: "ex-misc" },
      { dx:"Sepsis con eritema difuso", claves: "<ul><li>Foco infeccioso claro, sin el patrón de descamación posterior de palmas y plantas.</li></ul>" }
    ],
    evidencia: [], pico: [], ateneos: [],
    conexiones: ["ex-ssss", "ex-misc", "ex-varicela"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-kawasaki", nivel: 1, mapa: "exantemas", titulo: "Enfermedad de Kawasaki", corto: "Kawasaki", tipo: "concepto", causa: "inflamatoria",
    x: 365, y: 450,
    resumen: "Vasculitis de vasos medianos: fiebre de 5 días o más con conjuntivitis, labios rojos, exantema, cambios en manos y pies y adenopatía. Riesgo de aneurismas coronarios.",
    teoria: [
      { h: "Criterios clásicos", html: "<p>Fiebre de 5 días o más y al menos 4 de estos 5:</p><ol><li>Conjuntivitis bilateral sin secreción.</li><li>Labios rojos y agrietados, lengua aframbuesada, eritema faríngeo.</li><li>Exantema polimorfo (nunca vesicular).</li><li>Eritema y edema de manos y pies; descamación periungueal en la fase subaguda.</li><li>Adenopatía cervical, en general unilateral, de 1,5 cm o más.</li></ol><p>En la Argentina, el eritema o la costra sobre la cicatriz de la BCG es una pista útil.</p>" },
      { h: "Kawasaki incompleto", html: "<p>Fiebre de 5 días o más con 2 o 3 criterios (o lactantes con fiebre de 7 días o más sin explicación): si la PCR es de 3 mg/dL o más o la eritrosedimentación de 40 mm/h o más, buscar los criterios de laboratorio complementarios (anemia, plaquetas altas después del día 7, albúmina baja, transaminasas altas, leucocitosis, piuria). Con 3 o más, o con un ecocardiograma alterado, se trata.</p>" },
      { h: "Tratamiento", html: "<ul><li><b>IGIV 2 g/kg</b> en una infusión, idealmente dentro de los 10 primeros días de fiebre.</li><li><b>Aspirina</b> en dosis moderada o alta hasta que esté afebril, después dosis baja hasta el control ecocardiográfico.</li><li>En pacientes de alto riesgo de compromiso coronario, considerar sumar corticoides desde el inicio.</li><li>Ecocardiograma al diagnóstico, a la 1–2 semanas y a las 4–6 semanas.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Adenovirus", claves: "<ul><li>Conjuntivitis exudativa, faringitis exudativa, PCR para adenovirus positiva; marcadores menos altos.</li></ul>", nodo: "ex-viral" },
      { dx:"Escarlatina", claves: "<ul><li>Responde al antibiótico en 24–48 horas; test rápido positivo; sin conjuntivitis.</li></ul>", nodo: "ex-escarlatina" },
      { dx:"Sarampión", claves: "<ul><li>Koplik, tos y coriza intensas, vacunación incompleta.</li></ul>", nodo: "ex-sarampion" },
      { dx:"MIS-C", claves: "<ul><li>Mayor de 5 años, dolor abdominal, shock, disfunción ventricular, linfopenia y plaquetas bajas.</li></ul>", nodo: "ex-misc" },
      { dx:"Reacción a fármacos (DRESS, enfermedad del suero)", claves: "<ul><li>Fármaco reciente, eosinofilia, hepatitis.</li></ul>", nodo: "ex-dress" }
    ],
    evidencia: ["mccrindle2017", "kobayashi2012"],
    pico: [
      { p: "Niños con Kawasaki de alto riesgo", i: "IGIV más prednisolona", c: "IGIV sola", o: "Anomalías coronarias",
        respuesta: "En el ensayo RAISE (pacientes japoneses con puntaje de Kobayashi alto), sumar prednisolona redujo las anomalías coronarias del 23 % al 3 %. No está claro que los puntajes de riesgo japoneses funcionen igual en otras poblaciones.",
        certeza: "Moderada", refs: ["kobayashi2012", "mccrindle2017"] }
    ],
    casos: [
      { titulo: "Fiebre de cinco días", html: "<p>Niña de 3 años con 5 días de fiebre, conjuntivas rojas sin secreción, labios fisurados y un exantema en el tronco. Tiene una adenopatía cervical de 2 cm y la cicatriz de la BCG enrojecida. PCR 9 mg/dL.</p><p><b>Para discutir:</b> ¿cumple criterios clásicos? ¿Qué diagnósticos diferenciales hay que descartar antes de la IGIV?</p>", nodos: ["ex-sarampion", "ex-escarlatina", "ex-viral"] }
    ],
    ateneos: [],
    conexiones: ["ex-misc", "ex-viral", "ex-sarampion"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-misc", nivel: 3, mapa: "exantemas", titulo: "Síndrome inflamatorio multisistémico (MIS-C)", corto: "MIS-C", tipo: "concepto", causa: "inflamatoria",
    x: 150, y: 560,
    resumen: "De 2 a 6 semanas después de una infección por SARS-CoV-2: fiebre, compromiso digestivo, shock y disfunción cardíaca. Se parece a Kawasaki, pero en chicos más grandes.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Escolares y adolescentes, con antecedente o serología de COVID-19.</li><li>Fiebre persistente, dolor abdominal, vómitos, diarrea.</li><li>Exantema, conjuntivitis y cambios mucosos parecidos a Kawasaki.</li><li>Hipotensión, disfunción ventricular, aneurismas coronarios.</li><li>Inflamación muy alta, linfopenia, plaquetas bajas, troponina y BNP elevados.</li></ul>" },
      { h: "Tratamiento", html: "<p>IGIV más glucocorticoides desde el inicio, aspirina en dosis baja y anticoagulación según el riesgo. Hoy es mucho menos frecuente que en 2020–2021.</p>" }
    ],
    diferenciales: [
      { dx:"Kawasaki", claves: "<ul><li>Menores de 5 años, aneurismas coronarios más frecuentes, sin shock ni compromiso gastrointestinal predominante.</li></ul>", nodo: "ex-kawasaki" },
      { dx:"Sepsis bacteriana o shock tóxico", claves: "<ul><li>Foco infeccioso, cultivos positivos, eritrodermia.</li></ul>", nodo: "ex-shock" },
      { dx:"Apendicitis o abdomen agudo", claves: "<ul><li>Dolor localizado con signos peritoneales; ecografía. El MIS-C puede simularlo.</li></ul>" },
      { dx:"Miocarditis viral", claves: "<ul><li>Disfunción cardíaca sin el cuadro multisistémico ni los marcadores inflamatorios tan altos.</li></ul>" }
    ],
    evidencia: ["son2021"],
    pico: [
      { p: "Niños con MIS-C", i: "IGIV más glucocorticoides", c: "IGIV sola", o: "Disfunción cardiovascular nueva o persistente",
        respuesta: "En un estudio observacional grande con emparejamiento, el tratamiento combinado se asoció con menos disfunción cardiovascular y menos necesidad de terapia adyuvante.",
        certeza: "Baja", refs: ["son2021"] }
    ],
    ateneos: [],
    conexiones: ["ex-kawasaki", "ex-shock"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-dress", nivel: 3, mapa: "exantemas", titulo: "DRESS", tipo: "concepto", causa: "alergica",
    x: 330, y: 560,
    resumen: "Reacción grave a fármacos semanas después de empezar: exantema extenso, edema facial, fiebre, adenopatías, eosinofilia y compromiso de órganos.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Entre 2 y 8 semanas después de iniciar el fármaco (mediana de 22 días en RegiSCAR).</li><li>Exantema morbiliforme que progresa a eritrodermia, con edema facial.</li><li>Fiebre alta y adenopatías.</li><li>Eosinofilia, linfocitos atípicos, hepatitis; a veces compromiso renal, pulmonar o cardíaco.</li></ul>" },
      { h: "Fármacos más involucrados", html: "<p>Antiepilépticos aromáticos (carbamazepina, fenitoína, fenobarbital, lamotrigina), sulfonamidas, vancomicina y otros antibióticos. En niños puede asociarse a la reactivación de HHV-6.</p>" },
      { h: "Qué hacer", html: "<ul><li>Suspender el fármaco sospechoso; no reintroducirlo.</li><li>Corticoides sistémicos si hay compromiso de órganos.</li><li>Seguimiento de meses: recaídas y enfermedades autoinmunes tardías (tiroiditis, diabetes).</li></ul>" }
    ],
    diferenciales: [
      { dx:"Exantema morbiliforme simple por fármacos", claves: "<ul><li>Sin fiebre alta, edema facial, adenopatías ni compromiso de órganos.</li></ul>", nodo: "ex-farmaco" },
      { dx:"Mononucleosis o infección viral", claves: "<ul><li>Linfocitos atípicos también en DRESS: la clave es el fármaco 2–8 semanas antes y la eosinofilia.</li></ul>", nodo: "ex-mono" },
      { dx:"Kawasaki", claves: "<ul><li>Sin fármaco desencadenante, cambios en labios y extremidades.</li></ul>", nodo: "ex-kawasaki" },
      { dx:"Linfohistiocitosis hemofagocítica", claves: "<ul><li>Citopenias, ferritina muy alta, hipofibrinogenemia.</li></ul>" }
    ],
    evidencia: ["kardaun2013"], pico: [], ateneos: [],
    conexiones: ["ex-sjs", "ex-farmaco"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Vesículas y ampollas */
  {
    id: "ex-varicela", nivel: 1, mapa: "exantemas", titulo: "Varicela", tipo: "concepto", causa: "infecciosa",
    x: 525, y: 420,
    resumen: "Vesículas como gotas de rocío en distintos estadios, de distribución central y muy pruriginosas.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Incubación de 10 a 21 días.</li><li>Máculas que pasan a pápulas, vesículas y costras; conviven lesiones en distintos estadios.</li><li>Empieza en el tronco y la cara, con lesiones en el cuero cabelludo y las mucosas.</li><li>Contagia desde 1 o 2 días antes del exantema hasta que todas las lesiones estén en costra.</li></ul>" },
      { h: "Complicaciones", html: "<p>Sobreinfección por estreptococo o estafilococo (celulitis, fascitis, <a href=\"#ex-shock\">shock tóxico</a>), neumonía, ataxia cerebelosa, encefalitis. Fiebre que reaparece o lesión que duele y se extiende: pensar en sobreinfección invasiva.</p>" },
      { h: "Tratamiento", html: "<ul><li>Sintomático en niños sanos: paracetamol, antihistamínicos, uñas cortas.</li><li><b>Evitar la aspirina</b> (síndrome de Reye) y preferir no usar ibuprofeno.</li><li>Aciclovir oral en mayores de 12 años, enfermedad crónica de piel o pulmón, tratamiento con corticoides o aspirina crónica; aciclovir IV en inmunocomprometidos.</li><li>Prevención: vacuna del Calendario Nacional; profilaxis posexposición en contactos de riesgo.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Mano-pie-boca", claves: "<ul><li>Vesículas en manos, pies, boca y glúteos, sin lesiones en distintos estadios en el tronco.</li></ul>", nodo: "ex-mpb" },
      { dx:"Picaduras o prurigo", claves: "<ul><li>Pápulas con punto central, agrupadas en zonas expuestas, sin fiebre ni lesiones en el cuero cabelludo.</li></ul>" },
      { dx:"Eccema herpético", claves: "<ul><li>Vesículas iguales y erosiones en sacabocado sobre placas de dermatitis atópica.</li></ul>", nodo: "ex-eh" },
      { dx:"Impétigo ampollar", claves: "<ul><li>Ampollas flácidas que dejan costras melicéricas, sin fiebre ni distribución generalizada.</li></ul>" }
    ],
    evidencia: ["klassen2005"],
    pico: [
      { p: "Niños sanos con varicela", i: "Aciclovir oral", c: "Placebo", o: "Fiebre, lesiones y complicaciones",
        respuesta: "Acorta la fiebre en un día y reduce el número de lesiones, sin cambiar las complicaciones. Por eso no se indica de rutina en niños sanos.",
        certeza: "Moderada", refs: ["klassen2005"] }
    ],
    ateneos: [],
    conexiones: ["ex-eh", "ex-mpb", "ex-shock"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-mpb", nivel: 2, mapa: "exantemas", titulo: "Mano-pie-boca", tipo: "concepto", causa: "infecciosa",
    x: 680, y: 420,
    resumen: "Enterovirus: aftas en la boca y vesículas ovaladas en manos, pies y glúteos. El coxsackie A6 da formas extensas.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Menores de 5 años, en verano y otoño, en brotes en jardines.</li><li>Fiebre, dolor al tragar, aftas en el paladar y la lengua.</li><li>Vesículas ovaladas con halo rojo en palmas, plantas y glúteos.</li><li>Semanas después pueden caerse las uñas (onicomadesis).</li></ul>" },
      { h: "Formas atípicas (coxsackie A6)", html: "<p>Lesiones más extensas, ampollares y erosivas, en la cara, los miembros y el tronco. En más de la mitad se acentúan sobre la dermatitis atópica (<i>eczema coxsackium</i>) y pueden confundirse con <a href=\"#ex-eh\">eccema herpético</a>, impétigo o vasculitis.</p>" },
      { h: "Qué hacer", html: "<p>Analgesia e hidratación; vigilar la ingesta. El enterovirus 71 puede dar complicaciones neurológicas: consultar si hay vómitos, decaimiento, temblor o mioclonías.</p>" }
    ],
    diferenciales: [
      { dx:"Varicela", claves: "<ul><li>Lesiones en distintos estadios, centrípetas, cuero cabelludo; sin predominio acral.</li></ul>", nodo: "ex-varicela" },
      { dx:"Gingivoestomatitis herpética", claves: "<ul><li>Encías inflamadas y sangrantes, vesículas en labios y boca anterior, sin lesiones en manos y pies.</li></ul>" },
      { dx:"Herpangina", claves: "<ul><li>Vesículas solo en paladar blando y faringe posterior.</li></ul>" },
      { dx:"Eritema multiforme", claves: "<ul><li>Dianas fijas acrales de 3 zonas, no vesículas ovaladas.</li></ul>", nodo: "ex-em" }
    ],
    evidencia: ["mathes2013"], pico: [], ateneos: [],
    conexiones: ["ex-eh", "ex-viral"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-eh", nivel: 3, mapa: "exantemas", titulo: "Eccema herpético", tipo: "concepto", causa: "infecciosa",
    x: 525, y: 505,
    resumen: "Herpes simple sobre la dermatitis atópica: vesículas iguales y erosiones en sacabocado, con fiebre. Necesita aciclovir.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Chico con dermatitis atópica que empeora de golpe, con fiebre y malestar.</li><li>Vesículas umbilicadas, todas en el mismo estadio, que dejan erosiones redondas en sacabocado y costras hemorrágicas.</li><li>Más en cara y cuello, pero puede extenderse.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li><b>Aciclovir</b> sin esperar la confirmación: oral en formas localizadas y con buen estado; IV en lactantes, formas extensas o con compromiso general.</li><li>Oftalmología si hay lesiones cerca del ojo.</li><li>Buscar sobreinfección estafilocócica.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Impétigo sobreinfectando el eccema", claves: "<ul><li>Costras melicéricas y pústulas, sin vesículas monomorfas ni erosiones en sacabocado; responde a antibiótico.</li></ul>" },
      { dx:"Varicela", claves: "<ul><li>Lesiones en distintos estadios en todo el cuerpo, no limitadas a las placas de eccema.</li></ul>", nodo: "ex-varicela" },
      { dx:"Eccema coxsackium (mano-pie-boca)", claves: "<ul><li>Vesículas sobre el eccema con compromiso de boca, manos y pies.</li></ul>", nodo: "ex-mpb" },
      { dx:"Brote de dermatitis atópica", claves: "<ul><li>Sin vesículas umbilicadas ni fiebre; mejora con corticoide tópico.</li></ul>" }
    ],
    evidencia: ["mathes2013"], pico: [], ateneos: [],
    conexiones: ["ex-ssss"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-ssss", nivel: 2, mapa: "exantemas", titulo: "Síndrome de piel escaldada estafilocócica", corto: "Piel escaldada (SSSS)", tipo: "concepto", causa: "infecciosa",
    x: 680, y: 505,
    resumen: "Toxinas exfoliativas del estafilococo: eritema doloroso, ampollas flácidas y Nikolsky positivo, sin compromiso de mucosas.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Sobre todo menores de 5 años.</li><li>Fiebre, irritabilidad y piel muy dolorosa al tacto.</li><li>Eritema que empieza en la cara y los pliegues, con ampollas flácidas y descamación en sábana.</li><li>Costras alrededor de la boca, los ojos y la nariz.</li><li><b>Sin compromiso de mucosas</b>: es lo que lo separa de <a href=\"#ex-sjs\">SJS/NET</a>.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Internación, analgesia, cuidado de la piel como un quemado y control de líquidos.</li><li>Antibiótico antiestafilocócico IV (por ejemplo, cefalotina); clindamicina para frenar la toxina.</li><li>Vancomicina si no mejora, está grave o el SAMR es frecuente en la comunidad.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Stevens-Johnson y NET", claves: "<ul><li>Compromiso de mucosas (en SSSS no hay), fármaco previo; despegamiento más profundo en la biopsia.</li></ul>", nodo: "ex-sjs" },
      { dx:"Escarlatina", claves: "<ul><li>Exantema áspero sin ampollas ni dolor cutáneo intenso.</li></ul>", nodo: "ex-escarlatina" },
      { dx:"Quemaduras o maltrato", claves: "<ul><li>Distribución con bordes netos, patrón de inmersión o salpicadura, historia inconsistente.</li></ul>" },
      { dx:"Impétigo ampollar", claves: "<ul><li>Lesiones localizadas, sin eritrodermia dolorosa ni fiebre.</li></ul>" }
    ],
    evidencia: ["leung2018"], pico: [], ateneos: [],
    conexiones: ["ex-sjs", "ex-escarlatina"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-sjs", nivel: 2, mapa: "exantemas", titulo: "Stevens-Johnson y necrólisis epidérmica tóxica", corto: "SJS / NET", tipo: "concepto", causa: ["alergica", "infecciosa"],
    x: 600, y: 580,
    resumen: "Necrosis de la epidermis con compromiso de mucosas. En adultos casi siempre por fármacos; en niños, a menudo por infecciones.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Pródromo de fiebre y malestar; luego máculas oscuras o dianas atípicas que se vuelven ampollas.</li><li>Compromiso de dos o más mucosas: ojos, boca, genitales.</li><li>Nikolsky positivo; dolor de piel.</li><li>SJS si se despega menos del 10 % de la superficie corporal, NET si más del 30 %.</li></ul>" },
      { h: "Causas", html: "<p><b>Fármacos</b> (de 4 días a 8 semanas después de empezar): anticonvulsivantes (carbamazepina, lamotrigina, fenitoína, fenobarbital), sulfonamidas, AINE, alopurinol. <b>Infecciones</b>, sobre todo <i>Mycoplasma pneumoniae</i>: por eso hoy se propone distinguir la erupción reactiva a infecciones (<a href=\"#ex-mirm\">RIME</a>) de la necrólisis por fármacos.</p>" },
      { h: "Qué hacer", html: "<ul><li>Suspender todo fármaco no imprescindible.</li><li>Internación en unidad de quemados o terapia intensiva.</li><li><b>Oftalmología desde el primer día</b> para prevenir secuelas.</li><li>Las terapias inmunomoduladoras (ciclosporina, IGIV, etanercept, corticoides) tienen evidencia limitada en niños.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Eritema multiforme mayor", claves: "<ul><li>Dianas típicas acrales, casi siempre tras herpes; menos del 10 % de superficie, sin fármaco desencadenante.</li></ul>", nodo: "ex-em" },
      { dx:"MIRM / RIME", claves: "<ul><li>Mucositis intensa con poca o ninguna lesión de piel, con Mycoplasma u otra infección respiratoria.</li></ul>", nodo: "ex-mirm" },
      { dx:"Piel escaldada estafilocócica", claves: "<ul><li>Sin mucosas, despegamiento superficial, lactantes y preescolares.</li></ul>", nodo: "ex-ssss" },
      { dx:"Kawasaki", claves: "<ul><li>Labios rojos y fisurados sin erosiones ni ampollas; conjuntivitis sin secreción.</li></ul>", nodo: "ex-kawasaki" }
    ],
    evidencia: ["ramien2022"], pico: [], ateneos: [],
    conexiones: ["ex-mirm", "ex-em"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Petequias y púrpura */
  {
    id: "ex-meningococo", nivel: 1, mapa: "exantemas", titulo: "Meningococcemia", tipo: "concepto", causa: "infecciosa",
    x: 850, y: 150,
    resumen: "Petequias que no desaparecen con la presión, en un chico que se ve mal. Los signos tempranos son los de sepsis, no el exantema.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Primeras horas: fiebre y síntomas inespecíficos.</li><li>Alrededor de las 8 horas: dolor en las piernas, manos y pies fríos, color de piel anormal.</li><li>Después: petequias y púrpura que se extienden, meningismo, alteración de la conciencia.</li></ul><p>El exantema puede empezar maculopapular y en algunos casos no aparece.</p>" },
      { h: "Qué hacer", html: "<ul><li>Ante la sospecha: hemocultivo y <b>ceftriaxona inmediata</b>, sin esperar la punción lumbar ni los resultados.</li><li>Reanimación con fluidos y manejo del shock.</li><li>Notificación y quimioprofilaxis de contactos cercanos.</li><li>Prevención: vacuna antimeningocócica del Calendario Nacional.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Petequias en contexto viral", claves: "<ul><li>Buen estado, petequias por encima de las mamilas tras tos o vómitos, laboratorio normal, no progresan.</li></ul>", nodo: "ex-petvir" },
      { dx:"Vasculitis por IgA", claves: "<ul><li>Púrpura palpable en piernas y glúteos con buen estado, plaquetas normales, dolor abdominal o artritis.</li></ul>", nodo: "ex-iga" },
      { dx:"Púrpura trombocitopénica inmune", claves: "<ul><li>Niño sano con petequias y hematomas, plaquetas muy bajas, sin fiebre.</li></ul>" },
      { dx:"Leucemia", claves: "<ul><li>Petequias con palidez, hepatoesplenomegalia, dolor óseo, citopenias.</li></ul>" },
      { dx:"Maltrato", claves: "<ul><li>Petequias en zonas no expuestas al roce, patrón de objeto, historia inconsistente.</li></ul>" }
    ],
    evidencia: ["thompson2006", "brogan2000"], pico: [], ateneos: [],
    conexiones: ["ex-petvir", "ex-iga"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-petvir", nivel: 2, mapa: "exantemas", titulo: "Petequias en contexto viral", corto: "Petequias virales", tipo: "concepto", causa: "infecciosa",
    x: 1090, y: 150,
    resumen: "La mayoría de los niños con fiebre y petequias tiene un virus. El desafío es reconocer al que no.",
    teoria: [
      { h: "Cuándo tranquiliza", html: "<ul><li>Buen estado general, sin criterios ILL (irritabilidad, letargo, relleno capilar lento).</li><li>Petequias solo en el territorio de la vena cava superior, tras tos o vómitos.</li><li>No se extienden durante la observación.</li><li>Leucocitos y PCR normales.</li></ul>" },
      { h: "Causas frecuentes", html: "<p>Enterovirus, adenovirus, virus respiratorios, Epstein-Barr; el parvovirus B19 da el síndrome papular-purpúrico en guantes y calcetines.</p>" },
      { h: "Qué hacer", html: "<p>Observar de 4 a 6 horas con controles; si hay cualquier duda o el laboratorio es anormal, tratar como <a href=\"#ex-meningococo\">enfermedad meningocócica</a>. En una auditoría, el 9 % de los niños con fiebre y petequias tenía sepsis bacteriana.</p>" }
    ],
    diferenciales: [
      { dx:"Meningococcemia", claves: "<ul><li>Mal estado, petequias que se extienden por debajo de las mamilas, taquicardia, relleno lento, leucocitosis o leucopenia, PCR alta.</li></ul>", nodo: "ex-meningococo" },
      { dx:"Púrpura trombocitopénica inmune", claves: "<ul><li>Plaquetas muy bajas, hematomas y sangrado mucoso.</li></ul>" },
      { dx:"Vasculitis por IgA", claves: "<ul><li>Púrpura palpable en miembros inferiores.</li></ul>", nodo: "ex-iga" }
    ],
    evidencia: ["brogan2000"], pico: [], ateneos: [],
    conexiones: ["ex-parvo", "ex-dengue"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-iga", nivel: 2, mapa: "exantemas", titulo: "Vasculitis por IgA (Schönlein-Henoch)", corto: "Vasculitis por IgA", tipo: "concepto", causa: "inflamatoria",
    x: 970, y: 235,
    resumen: "La vasculitis más frecuente en la infancia: púrpura palpable en piernas y glúteos con plaquetas normales, dolor abdominal, artritis y a veces nefritis.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Entre los 3 y los 10 años, a menudo después de una infección respiratoria.</li><li>Púrpura palpable en piernas y glúteos, con plaquetas y coagulación normales.</li><li>Dolor abdominal (cuidado con la invaginación), artralgias o artritis de tobillos y rodillas.</li><li>Hematuria o proteinuria en un tercio a la mitad de los casos.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Analgesia; reposo relativo.</li><li>Corticoides para el dolor abdominal intenso, la orquitis y otras complicaciones no renales; no previenen la nefritis.</li><li>Control de orina y presión arterial durante al menos 6 meses; derivar a nefrología si hay proteinuria significativa, hipertensión o caída del filtrado.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Púrpura trombocitopénica inmune", claves: "<ul><li>Petequias no palpables y plaquetas bajas; sin artritis ni dolor abdominal.</li></ul>" },
      { dx:"Meningococcemia", claves: "<ul><li>Fiebre y mal estado, distribución generalizada, progresión rápida.</li></ul>", nodo: "ex-meningococo" },
      { dx:"Abdomen agudo (invaginación)", claves: "<ul><li>El dolor abdominal puede preceder a la púrpura; la invaginación ileoileal es una complicación.</li></ul>" },
      { dx:"Edema hemorrágico agudo del lactante", claves: "<ul><li>Menores de 2 años, lesiones en medallón en cara y extremidades con edema, buen estado, sin compromiso renal.</li></ul>" }
    ],
    evidencia: ["ozen2019"], pico: [], ateneos: [],
    conexiones: ["ex-urticaria", "ex-suero"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Habones y dianas */
  {
    id: "ex-urticaria", nivel: 1, mapa: "exantemas", titulo: "Urticaria aguda", tipo: "concepto", causa: ["infecciosa", "alergica"],
    x: 860, y: 395,
    resumen: "Habones que aparecen y desaparecen en menos de 24 horas. En niños, la causa más común es una infección viral, no un alimento.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Habones pruriginosos que cambian de forma y lugar; cada uno dura menos de 24 horas.</li><li>Puede haber angioedema.</li><li><b>Urticaria multiforme:</b> habones anulares con centro violáceo, edema de manos y pies; parece eritema multiforme, pero las lesiones son migratorias.</li></ul>" },
      { h: "Causas", html: "<p>En un estudio prospectivo en niños pequeños, la infección (con o sin fármaco) explicó el 81 % y los alimentos el 11 %. Si los habones aparecen en minutos a 2 horas tras un alimento o un fármaco, pensar en reacción inmediata.</p>" },
      { h: "Qué hacer", html: "<ul><li>Antihistamínicos H1 de segunda generación (cetirizina, levocetirizina, desloratadina).</li><li>Corticoides orales cortos solo en casos intensos.</li><li>Sin laboratorio de rutina.</li><li>Buscar compromiso respiratorio, circulatorio o digestivo: si lo hay, es <a href=\"#ex-anafilaxia\">anafilaxia</a>.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Anafilaxia", claves: "<ul><li>Urticaria más compromiso respiratorio, circulatorio o gastrointestinal: adrenalina.</li></ul>", nodo: "ex-anafilaxia" },
      { dx:"Eritema multiforme", claves: "<ul><li>Lesiones fijas más de 7 días, dianas con centro oscuro o ampolla; la urticaria cambia en horas.</li></ul>", nodo: "ex-em" },
      { dx:"Urticaria multiforme", claves: "<ul><li>Habones anulares con centro violáceo que cambian en horas, edema acral, niño de buen estado: es urticaria, no eritema multiforme.</li></ul>" },
      { dx:"Enfermedad del suero", claves: "<ul><li>Fiebre, artralgias y edema, 1 a 3 semanas tras un fármaco.</li></ul>", nodo: "ex-suero" }
    ],
    evidencia: ["mortureux1998"], pico: [], ateneos: [],
    conexiones: ["ex-anafilaxia", "ex-suero", "ex-em"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-anafilaxia", nivel: 2, mapa: "exantemas", titulo: "Anafilaxia", tipo: "concepto", causa: "alergica",
    x: 1090, y: 395,
    resumen: "Reacción alérgica sistémica grave. La piel suele avisar, pero lo que define es el compromiso respiratorio o circulatorio. Adrenalina intramuscular primero.",
    teoria: [
      { h: "Cuándo es anafilaxia", html: "<ul><li>Inicio agudo con piel o mucosas (habones, prurito, angioedema) <b>y</b> compromiso respiratorio, hipotensión o síntomas digestivos graves.</li><li>O hipotensión, broncoespasmo o compromiso laríngeo después de exponerse a un alérgeno conocido o muy probable, aun sin piel.</li></ul>" },
      { h: "Qué hacer", html: "<ol><li><b>Adrenalina 1 mg/mL intramuscular, 0,01 mg/kg</b> en la cara anterolateral del muslo (máximo 0,5 mg); repetir a los 5–15 minutos si hace falta.</li><li>Posición acostado con piernas elevadas (sentado si tiene dificultad respiratoria).</li><li>Oxígeno, acceso venoso y fluidos.</li><li>Antihistamínicos y corticoides son complementarios: no reemplazan a la adrenalina.</li></ol><p>Al alta: indicación de autoinyector, plan escrito y derivación a alergia.</p>" }
    ],
    diferenciales: [
      { dx:"Urticaria aislada", claves: "<ul><li>Solo piel, sin compromiso respiratorio, circulatorio ni digestivo.</li></ul>", nodo: "ex-urticaria" },
      { dx:"Crisis asmática", claves: "<ul><li>Broncoespasmo sin urticaria, angioedema ni hipotensión, sin exposición a alérgeno.</li></ul>", nodo: "crisis" },
      { dx:"Síncope vasovagal", claves: "<ul><li>Palidez, bradicardia y recuperación rápida al acostarse, sin urticaria ni broncoespasmo.</li></ul>", nodo: "ne-paroxisticos" },
      { dx:"Aspiración de cuerpo extraño", claves: "<ul><li>Atragantamiento con tos o estridor bruscos, sin lesiones cutáneas.</li></ul>" }
    ],
    evidencia: ["cardona2020"], pico: [], ateneos: [],
    conexiones: ["ex-urticaria"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-suero", nivel: 3, mapa: "exantemas", titulo: "Reacción tipo enfermedad del suero", corto: "Tipo enfermedad del suero", tipo: "concepto", causa: "alergica",
    x: 975, y: 470,
    resumen: "1 a 3 semanas después de un antibiótico: fiebre, habones o lesiones anulares violáceas y artralgias con edema.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Entre 1 y 3 semanas después de empezar el fármaco.</li><li>Lesiones urticarianas o anulares con centro violáceo; edema de manos, pies y cara.</li><li>Artralgias o artritis que pueden impedir caminar; fiebre.</li><li>A diferencia de la enfermedad del suero verdadera, sin complemento bajo ni compromiso renal.</li></ul>" },
      { h: "Causas", html: "<p>Cefaclor sobre todo (unas 14 veces más riesgo que con amoxicilina en niños), amoxicilina y otros betalactámicos, TMP-SMX.</p>" },
      { h: "Qué hacer", html: "<p>Suspender el fármaco; antihistamínicos y AINE; corticoides cortos si es intenso. Evitar ese fármaco y derivar a alergia.</p>" }
    ],
    diferenciales: [
      { dx:"Urticaria aguda", claves: "<ul><li>Sin fiebre ni artralgias; aparece en minutos u horas.</li></ul>", nodo: "ex-urticaria" },
      { dx:"Artritis idiopática juvenil sistémica", claves: "<ul><li>Fiebre en picos diaria, exantema evanescente asalmonado con la fiebre, artritis que persiste.</li></ul>" },
      { dx:"Vasculitis por IgA", claves: "<ul><li>Púrpura palpable en piernas con dolor abdominal y artritis, sin fármaco previo.</li></ul>", nodo: "ex-iga" },
      { dx:"DRESS", claves: "<ul><li>Compromiso de órganos (hepatitis), eosinofilia, edema facial, 2 a 8 semanas tras el fármaco.</li></ul>", nodo: "ex-dress" }
    ],
    evidencia: ["stricker1992"], pico: [], ateneos: [],
    conexiones: ["ex-em", "ex-farmaco"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-em", nivel: 2, mapa: "exantemas", titulo: "Eritema multiforme", tipo: "concepto", causa: "infecciosa",
    x: 870, y: 560,
    resumen: "Lesiones en diana fijas, acrales, casi siempre tras un herpes simple. No es una forma leve de Stevens-Johnson.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Dianas típicas de tres zonas (centro oscuro o con ampolla, anillo pálido, halo rojo), en manos, pies y extremidades.</li><li>Las lesiones quedan fijas 7 días o más (a diferencia de la urticaria multiforme).</li><li>Menor: sin mucosas o con poca afectación oral. Mayor: con compromiso de mucosas.</li></ul>" },
      { h: "Causas", html: "<p>Herpes simple en la mayoría; en niños también <i>Mycoplasma pneumoniae</i>. Los fármacos son menos frecuentes.</p>" },
      { h: "Qué hacer", html: "<p>Sintomático: antihistamínicos, cuidado de la boca. En formas recurrentes por herpes, profilaxis oral con aciclovir.</p>" }
    ],
    diferenciales: [
      { dx:"Urticaria multiforme", claves: "<ul><li>Lesiones que cambian en horas, anulares sin ampolla ni necrosis central, prurito.</li></ul>", nodo: "ex-urticaria" },
      { dx:"Stevens-Johnson", claves: "<ul><li>Máculas atípicas en el tronco, ampollas, dolor, fármaco previo y más de una mucosa.</li></ul>", nodo: "ex-sjs" },
      { dx:"MIRM / RIME", claves: "<ul><li>Mucositis grave con escasa piel, Mycoplasma.</li></ul>", nodo: "ex-mirm" },
      { dx:"Enfermedad del suero", claves: "<ul><li>Lesiones urticarianas violáceas con artralgias y edema tras un fármaco.</li></ul>", nodo: "ex-suero" }
    ],
    evidencia: ["lerch2018"], pico: [], ateneos: [],
    conexiones: ["ex-mirm", "ex-sjs"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ex-mirm", nivel: 3, mapa: "exantemas", titulo: "Mucositis por Mycoplasma (MIRM / RIME)", corto: "MIRM / RIME", tipo: "concepto", causa: "infecciosa",
    x: 1080, y: 560,
    resumen: "Mucositis intensa con poca o ninguna lesión de piel, en escolares con neumonía o tos por Mycoplasma.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Escolares y adolescentes, a menudo varones, con tos, fiebre o neumonía.</li><li>Mucositis oral (94 %), ocular (82 %) y urogenital (63 %).</li><li>Piel ausente o escasa en la mayoría.</li><li>Hoy se usa también RIME (erupción mucocutánea reactiva a infecciones), porque otros gérmenes dan el mismo cuadro.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Analgesia, hidratación y nutrición (a veces por sonda).</li><li>Oftalmología temprana.</li><li>Macrólido para el Mycoplasma; corticoides o IGIV en casos graves, con evidencia limitada.</li><li>No rotularlo como alergia a fármacos.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Stevens-Johnson", claves: "<ul><li>Piel más comprometida con ampollas y despegamiento; fármaco desencadenante.</li></ul>", nodo: "ex-sjs" },
      { dx:"Gingivoestomatitis herpética", claves: "<ul><li>Compromete encías, sin conjuntivitis ni genitales; menores de 5 años.</li></ul>" },
      { dx:"Kawasaki", claves: "<ul><li>Labios rojos sin erosiones, conjuntivitis sin secreción, fiebre de 5 días o más.</li></ul>", nodo: "ex-kawasaki" },
      { dx:"Enfermedad de Behçet", claves: "<ul><li>Úlceras orales y genitales recurrentes, uveítis; curso crónico.</li></ul>" }
    ],
    evidencia: ["canavan2015", "ramien2022"], pico: [], ateneos: [],
    conexiones: ["ex-sjs"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  /* ───── Cardiología › Cardiopatías congénitas ───── */
  {
    id: "cc-abordaje", nivel: 1, mapa: "cardiopatias", titulo: "Cómo pensar una cardiopatía", corto: "Abordaje", tipo: "tema", edad: "El punto de partida", color: "var(--cardio)",
    x: 600, y: 130,
    resumen: "Más que memorizar lesiones, conviene preguntarse qué hace la sangre: si sobra flujo al pulmón, si falta oxígeno o si algo obstruye la salida.",
    teoria: [
      { h: "Qué tan frecuentes son", html: "<p>Alrededor de 9 de cada 1000 recién nacidos tienen una cardiopatía congénita; las moderadas y graves son unas 6 de cada 1000. La más frecuente es la CIV. Cerca de una cuarta parte son <b>críticas</b>: necesitan cirugía o cateterismo en el primer año.</p>" },
      { h: "Tres fisiologías", html: "<div class=\"tabla\"><table><thead><tr><th>Fisiología</th><th>Cómo se presenta</th><th>Ejemplos</th></tr></thead><tbody><tr><td>Cortocircuito izquierda-derecha</td><td>Sin cianosis; insuficiencia cardíaca a partir de las 4–8 semanas, cuando baja la resistencia pulmonar</td><td><a href=\"#cc-civ\">CIV</a>, <a href=\"#cc-cia\">CIA</a>, <a href=\"#cc-dap\">ductus</a>, <a href=\"#cc-canal\">canal AV</a></td></tr><tr><td>Cianóticas</td><td>Cianosis que no mejora con oxígeno</td><td><a href=\"#cc-fallot\">Fallot</a>, <a href=\"#cc-tga\">transposición</a>, <a href=\"#cc-fontan\">ventrículo único</a></td></tr><tr><td>Obstructivas</td><td>Soplo eyectivo; las críticas, shock cuando cierra el ductus</td><td><a href=\"#cc-coartacion\">coartación</a>, <a href=\"#cc-eao\">estenosis aórtica</a>, <a href=\"#cc-ep\">estenosis pulmonar</a>, <a href=\"#cc-hlhs\">hipoplasia izquierda</a></td></tr></tbody></table></div>" },
      { h: "Cuándo aparecen", html: "<ul><li><b>Primeras horas:</b> cianosis (transposición, atresia pulmonar).</li><li><b>Primera o segunda semana:</b> shock al cerrar el ductus (coartación, hipoplasia izquierda, estenosis aórtica crítica).</li><li><b>1 a 3 meses:</b> insuficiencia cardíaca por cortocircuitos grandes.</li><li><b>Cualquier edad:</b> un soplo en un control (CIA, CIV pequeña, estenosis valvulares leves).</li></ul>" },
      { h: "Qué pedir", html: "<p>Saturación en mano derecha y pie, presión en los cuatro miembros, pulsos femorales, ECG y radiografía de tórax orientan; el <b>ecocardiograma</b> hace el diagnóstico. Ante un recién nacido grave, la prostaglandina va antes que el ecocardiograma.</p>" }
    ],
    evidencia: ["vanderlinde2011", "hoffman2002"], pico: [], ateneos: [],
    casos: [
      { titulo: "Recién nacido con cianosis a las 6 horas", html: "<p>Término, parto normal. A las 6 horas la enfermera nota los labios azulados. Respira tranquilo, sin soplo. Saturación de 78 % que no sube con oxígeno al 100 %.</p><p><b>Cómo pensarlo:</b> cianosis sin dificultad respiratoria y que no responde al oxígeno orienta a una cardiopatía cianótica, sobre todo transposición. Iniciar prostaglandina y pedir ecocardiograma urgente; puede necesitar atrioseptostomía.</p>", nodos: ["cc-tga", "cc-ductus"] },
      { titulo: "Lactante de 6 semanas que respira rápido", html: "<p>Nacido de término, oximetría normal al alta. Ahora tarda 40 minutos en cada toma, transpira, respira a 70 por minuto y aumentó 300 g en un mes. Soplo holosistólico 3/6 en borde esternal izquierdo, hígado a 3 cm.</p><p><b>Cómo pensarlo:</b> la oximetría no detecta cortocircuitos de izquierda a derecha. Al bajar la resistencia pulmonar, una CIV grande da insuficiencia cardíaca: diuréticos, más calorías y derivación para cierre.</p>", nodos: ["cc-civ", "cc-icc"] }
    ],
    conexiones: ["cc-soplo", "cc-oximetria", "cc-ductus", "cc-civ", "cc-fallot", "cc-coartacion", "cc-icc"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-soplo", nivel: 1, mapa: "cardiopatias", titulo: "Soplo: inocente o patológico", corto: "Soplo inocente o no", tipo: "concepto",
    x: 520, y: 225,
    resumen: "La mayoría de los soplos en la infancia son inocentes. Unos pocos rasgos indican que hay que estudiarlo.",
    teoria: [
      { h: "Soplos inocentes frecuentes", html: "<ul><li><b>Soplo de Still:</b> vibratorio, musical, en el borde esternal izquierdo bajo, entre los 2 y 7 años.</li><li><b>Eyectivo pulmonar:</b> suave, en el foco pulmonar, en niños y adolescentes delgados.</li><li><b>Zumbido venoso:</b> continuo, debajo de las clavículas, desaparece al acostarse o al girar el cuello.</li><li><b>Estenosis de ramas pulmonares periféricas:</b> en recién nacidos, irradia a axilas y espalda, desaparece hacia los 6 meses.</li></ul><p>Las características: sistólicos (salvo el zumbido venoso), cortos, de 1/6 a 2/6, sin frémito, cambian con la posición y aumentan con fiebre o ejercicio.</p>" },
      { h: "Qué hace pensar que no es inocente", html: "<ul><li>Holosistólico o diastólico.</li><li>Intensidad de 3/6 o más, frémito.</li><li>Calidad áspera; clic de eyección.</li><li>Segundo ruido anormal (desdoblamiento fijo, único o muy fuerte).</li><li>Aumenta al ponerse de pie (miocardiopatía hipertrófica).</li><li>Síntomas: cansancio al comer, mal progreso de peso, síncope, dolor de pecho con el esfuerzo, cianosis.</li><li>Pulsos femorales débiles, síndrome genético asociado.</li></ul>" },
      { h: "Qué hacer", html: "<p>Si suena inocente y el chico está bien, se puede tranquilizar a la familia sin estudios. Ante cualquier rasgo patológico, o en un recién nacido, derivar a cardiología con ecocardiograma. El ECG y la radiografía rara vez cambian la conducta en un soplo aislado.</p>" }
    ],
    diferenciales: [
      { dx:"Soplo de Still (inocente)", claves: "<ul><li>Vibratorio o musical, borde esternal izquierdo bajo, 2 a 7 años, disminuye al ponerse de pie.</li></ul>" },
      { dx:"Comunicación interventricular", claves: "<ul><li>Holosistólico, áspero, a menudo con frémito, no cambia con la posición.</li></ul>", nodo: "cc-civ" },
      { dx:"Comunicación interauricular", claves: "<ul><li>Soplo pulmonar suave más desdoblamiento fijo del segundo ruido.</li></ul>", nodo: "cc-cia" },
      { dx:"Estenosis pulmonar o aórtica", claves: "<ul><li>Eyectivo con clic; el aórtico irradia al cuello, el pulmonar a la espalda.</li></ul>", nodo: "cc-ep" },
      { dx:"Miocardiopatía hipertrófica", claves: "<ul><li>Soplo que aumenta al ponerse de pie o con Valsalva; síncope o dolor con el esfuerzo, antecedente de muerte súbita familiar.</li></ul>" }
    ],
    evidencia: ["frank2011"], pico: [], ateneos: [],
    conexiones: ["cc-cia", "cc-civ", "cc-ep", "cc-eao"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-oximetria", nivel: 1, mapa: "cardiopatias", titulo: "Oximetría de pulso al recién nacido", corto: "Oximetría neonatal", tipo: "concepto",
    x: 680, y: 225,
    resumen: "Saturación en mano derecha y un pie después de las 24 horas: encuentra cardiopatías críticas que el examen no detecta.",
    teoria: [
      { h: "Cómo se hace", html: "<ul><li>Después de las 24 horas de vida (o antes del alta si es antes), con el bebé tranquilo y caliente.</li><li>Sensor en la <b>mano derecha</b> (preductal) y en <b>un pie</b> (posductal).</li></ul>" },
      { h: "Cómo se interpreta (algoritmo 2020)", html: "<div class=\"tabla\"><table><thead><tr><th>Resultado</th><th>Criterio</th></tr></thead><tbody><tr><td>Pasa</td><td>95 % o más en mano <b>y</b> pie, con diferencia de 3 % o menos</td></tr><tr><td>Repetir una vez, a la hora</td><td>90–94 % en mano y pie, o diferencia de más de 3 %</td></tr><tr><td>No pasa</td><td>Menos de 90 % en cualquiera, o persiste el resultado intermedio al repetir</td></tr></tbody></table></div><p>Si no pasa: examen completo, buscar causas no cardíacas (infección, problema respiratorio) y ecocardiograma antes del alta.</p>" },
      { h: "Lo que no detecta", html: "<p>Detecta 3 de cada 4 cardiopatías críticas. Se le escapan sobre todo las <b>obstrucciones del lado izquierdo</b> (coartación, interrupción del arco), en las que la saturación puede ser normal. No reemplaza al examen: pulsos femorales y presión en los cuatro miembros.</p>" }
    ],
    evidencia: ["martin2020", "plana2018", "mahle2009"],
    pico: [
      { p: "Recién nacidos asintomáticos", i: "Oximetría de pulso", c: "Examen físico solo", o: "Detección de cardiopatías congénitas críticas",
        respuesta: "La oximetría tiene una sensibilidad de 76 % y una especificidad de 99,9 %; combinada con el examen físico detecta más casos que el examen solo, con muy pocos falsos positivos si se hace después de las 24 horas.",
        certeza: "Moderada", refs: ["plana2018"] }
    ],
    ateneos: [],
    conexiones: ["cc-ductus", "cc-tga", "cc-coartacion"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-ductus", nivel: 1, mapa: "cardiopatias", titulo: "Recién nacido grave: lesiones dependientes del ductus", corto: "Dependientes del ductus", tipo: "concepto",
    x: 600, y: 310,
    resumen: "Si la circulación pulmonar o la sistémica depende del ductus, el bebé se descompensa cuando se cierra. La prostaglandina lo reabre.",
    teoria: [
      { h: "Dos formas de depender del ductus", html: "<ul><li><b>Flujo pulmonar dependiente:</b> cianosis progresiva (atresia pulmonar, estenosis pulmonar crítica, Fallot grave, atresia tricuspídea).</li><li><b>Flujo sistémico dependiente:</b> shock, acidosis, pulsos débiles (coartación crítica, interrupción del arco, estenosis aórtica crítica, hipoplasia de cavidades izquierdas).</li><li>La <b>transposición</b> necesita el ductus y el foramen oval para mezclar la sangre.</li></ul><p>Suelen presentarse entre los 2 y 14 días de vida, a veces ya en casa, y se confunden con sepsis.</p>" },
      { h: "Prostaglandina E1 (alprostadil)", html: "<ul><li>Dosis de inicio habitual: 0,05 a 0,1 µg/kg/min IV; una vez abierto el ductus, bajar a la menor dosis eficaz (0,01–0,03 µg/kg/min).</li><li>Efectos adversos: apnea (sobre todo en menores de 2 kg y con dosis altas), fiebre, vasodilatación, hipotensión.</li><li>Tener todo listo para asistir la ventilación; no demorarla por esperar el ecocardiograma.</li></ul><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" },
      { h: "Además", html: "<p>Evitar el oxígeno en exceso en los dependientes del flujo sistémico (aumenta el flujo pulmonar y roba circulación sistémica). Corregir acidosis, hipoglucemia e hipocalcemia. Inotrópicos si hay disfunción ventricular. Traslado a un centro con cirugía cardiovascular.</p>" }
    ],
    diferenciales: [
      { dx:"Sepsis neonatal", claves: "<ul><li>Factores de riesgo infecciosos, reactantes altos; pulsos simétricos. Ante la duda, cubrir las dos cosas: antibióticos y prostaglandina.</li></ul>" },
      { dx:"Error congénito del metabolismo", claves: "<ul><li>Encefalopatía con hiperamonemia o acidosis con cetosis; pulsos normales, sin soplo ni diferencia de saturación.</li></ul>", nodo: "ecm-neonato" },
      { dx:"Hipertensión pulmonar persistente del recién nacido", claves: "<ul><li>Cianosis con diferencia pre y posductal en las primeras horas, antecedente de meconio o asfixia, corazón estructuralmente normal.</li></ul>" },
      { dx:"Enfermedad respiratoria", claves: "<ul><li>Dificultad respiratoria marcada, la saturación mejora con oxígeno, radiografía alterada.</li></ul>" }
    ],
    evidencia: ["lewis1981", "mahle2009"], pico: [], ateneos: [],
    conexiones: ["cc-coartacion", "cc-hlhs", "cc-tga", "cc-fallot", "cc-eao"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Cortocircuito izquierda-derecha */
  {
    id: "cc-civ", nivel: 1, mapa: "cardiopatias", titulo: "Comunicación interventricular (CIV)", corto: "CIV", tipo: "concepto", causa: "cortocircuito",
    x: 110, y: 140,
    resumen: "La cardiopatía congénita más frecuente. Las chicas cierran solas y suenan fuerte; las grandes dan insuficiencia cardíaca a los 1–3 meses.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li><b>Pequeña (restrictiva):</b> soplo holosistólico áspero, fuerte (a veces con frémito), en el borde esternal izquierdo; asintomática.</li><li><b>Grande:</b> el soplo puede ser más suave; a partir de las 4–8 semanas, taquipnea, sudoración con las tomas, mal progreso de peso, hepatomegalia e infecciones respiratorias a repetición.</li><li>Tipos: perimembranosa (la más común en las series quirúrgicas), muscular (la más común al nacer), de entrada y de salida.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Pequeñas: control; muchas musculares y algunas perimembranosas cierran en los primeros años.</li><li>Grandes: tratamiento de la <a href=\"#cc-icc\">insuficiencia cardíaca</a> y cierre quirúrgico, en general antes del año, para evitar la <a href=\"#cc-hp\">hipertensión pulmonar</a> irreversible.</li><li>Las perimembranosas y de salida se controlan por insuficiencia aórtica.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Soplo inocente", claves: "<ul><li>Suave, corto, cambia con la posición, sin frémito; la CIV es holosistólica y áspera.</li></ul>", nodo: "cc-soplo" },
      { dx:"Insuficiencia mitral", claves: "<ul><li>Soplo holosistólico en el ápex con irradiación a la axila.</li></ul>" },
      { dx:"Canal auriculoventricular", claves: "<ul><li>Síndrome de Down, eje QRS superior en el ECG.</li></ul>", nodo: "cc-canal" },
      { dx:"Estenosis pulmonar", claves: "<ul><li>Soplo eyectivo, no holosistólico, con clic, en foco pulmonar.</li></ul>", nodo: "cc-ep" }
    ],
    evidencia: ["penny2011"], pico: [], ateneos: [],
    conexiones: ["cc-cia", "cc-canal", "cc-icc", "cc-hp", "cc-fallot"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-cia", nivel: 1, mapa: "cardiopatias", titulo: "Comunicación interauricular (CIA)", corto: "CIA", tipo: "concepto", causa: "cortocircuito",
    x: 320, y: 140,
    resumen: "Silenciosa en la infancia: soplo suave en foco pulmonar y desdoblamiento fijo del segundo ruido.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Casi siempre asintomática; se descubre por un soplo o una radiografía.</li><li>Soplo sistólico eyectivo suave en el foco pulmonar (por hiperflujo, no por la CIA) y <b>desdoblamiento fijo del segundo ruido</b>.</li><li>Tipos: ostium secundum (la más frecuente), ostium primum (parte del <a href=\"#cc-canal\">canal AV</a>), seno venoso y del seno coronario.</li><li>El foramen oval permeable no es una CIA.</li></ul>" },
      { h: "Qué hacer", html: "<p>Las pequeñas pueden cerrar solas. Las que dilatan las cavidades derechas se cierran en edad preescolar o escolar: por cateterismo (dispositivo) si es ostium secundum con bordes adecuados; por cirugía los demás tipos. Sin cerrar, en la adultez dan arritmias, insuficiencia cardíaca e hipertensión pulmonar.</p>" }
    ],
    diferenciales: [
      { dx:"Soplo eyectivo pulmonar inocente", claves: "<ul><li>Segundo ruido con desdoblamiento normal que varía con la respiración.</li></ul>", nodo: "cc-soplo" },
      { dx:"Estenosis pulmonar leve", claves: "<ul><li>Clic de eyección y soplo más áspero, segundo ruido normal o débil.</li></ul>", nodo: "cc-ep" },
      { dx:"Retorno venoso pulmonar anómalo parcial", claves: "<ul><li>Mismo hiperflujo derecho; se ve en el ecocardiograma, a menudo con CIA seno venoso.</li></ul>" }
    ],
    evidencia: ["geva2014"], pico: [], ateneos: [],
    conexiones: ["cc-canal", "cc-soplo"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-dap", nivel: 2, mapa: "cardiopatias", titulo: "Ductus arterioso persistente", corto: "Ductus persistente", tipo: "concepto", causa: "cortocircuito",
    x: 110, y: 270,
    resumen: "En el niño de término no cierra solo: soplo continuo en maquinaria y pulsos saltones. El del prematuro es otro problema.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Soplo continuo en maquinaria debajo de la clavícula izquierda; en el lactante a veces solo sistólico.</li><li>Pulsos saltones, presión diferencial amplia.</li><li>Si es grande: insuficiencia cardíaca, como la CIV grande.</li></ul>" },
      { h: "Qué hacer", html: "<p>En niños de término, cierre por cateterismo (dispositivo o coil) cuando es audible o hemodinámicamente significativo, por el riesgo de insuficiencia cardíaca, hipertensión pulmonar y endarteritis. En prematuros, la conducta (expectante, farmacológica o cierre) es distinta y depende de la repercusión.</p>" }
    ],
    diferenciales: [
      { dx:"Zumbido venoso", claves: "<ul><li>Soplo continuo que desaparece al acostarse o al girar el cuello.</li></ul>", nodo: "cc-soplo" },
      { dx:"Fístula arteriovenosa coronaria", claves: "<ul><li>Soplo continuo en una localización atípica.</li></ul>" },
      { dx:"CIV con insuficiencia aórtica", claves: "<ul><li>Soplo sistólico y diastólico separados (en vaivén), no continuo.</li></ul>", nodo: "cc-civ" }
    ],
    evidencia: ["schneider2006"], pico: [], ateneos: [],
    conexiones: ["cc-civ", "cc-icc"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-canal", nivel: 2, mapa: "cardiopatias", titulo: "Canal auriculoventricular", corto: "Canal AV", tipo: "concepto", causa: "cortocircuito",
    x: 320, y: 270,
    resumen: "CIA ostium primum, CIV de entrada y una válvula AV común. La cardiopatía típica del síndrome de Down.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Forma completa: insuficiencia cardíaca en los primeros meses, con mal progreso de peso.</li><li>Puede no tener soplo en los primeros días porque la resistencia pulmonar todavía es alta.</li><li>ECG: <b>eje QRS superior</b> (desviado a la izquierda), una pista útil.</li><li>Forma parcial (CIA ostium primum con hendidura mitral): parecida a una CIA.</li></ul>" },
      { h: "Qué hacer", html: "<p>Diuréticos como puente y cirugía correctora entre el 3.º y el 6.º mes, antes de que la <a href=\"#cc-hp\">hipertensión pulmonar</a> se vuelva irreversible. En el síndrome de Down la hipertensión pulmonar aparece antes.</p>" }
    ],
    diferenciales: [
      { dx:"Comunicación interventricular", claves: "<ul><li>Eje QRS normal, sin síndrome de Down ni insuficiencia de la válvula AV.</li></ul>", nodo: "cc-civ" },
      { dx:"Comunicación interauricular ostium secundum", claves: "<ul><li>Sin compromiso ventricular, eje QRS a la derecha.</li></ul>", nodo: "cc-cia" },
      { dx:"Hipertensión pulmonar del síndrome de Down sin cardiopatía", claves: "<ul><li>Corazón estructuralmente normal; causa respiratoria (obstrucción de la vía aérea, apnea).</li></ul>", nodo: "cc-hp" }
    ],
    evidencia: ["calabro2006"], pico: [], ateneos: [],
    conexiones: ["cc-down", "cc-hp", "cc-icc"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Cianóticas */
  {
    id: "cc-fallot", nivel: 1, mapa: "cardiopatias", titulo: "Tetralogía de Fallot", corto: "Fallot", tipo: "concepto", causa: "cianotica",
    x: 850, y: 140,
    resumen: "CIV, obstrucción al tracto de salida del ventrículo derecho, aorta cabalgada e hipertrofia del VD. Cianosis variable y crisis hipoxémicas.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>La cardiopatía cianótica más frecuente.</li><li>La cianosis depende de cuánto obstruye la salida del VD: desde «Fallot rosado» hasta cianosis neonatal dependiente del ductus.</li><li>Soplo eyectivo áspero en el borde esternal izquierdo (por la estenosis, no por la CIV); segundo ruido único.</li><li>Radiografía: corazón «en bota» con poca trama vascular pulmonar.</li><li>Asociado a la deleción <a href=\"#cc-22q11\">22q11.2</a>, sobre todo con arco aórtico derecho.</li></ul>" },
      { h: "Crisis hipoxémica", html: "<p>Llanto, hiperpnea, cianosis creciente y el soplo que <b>se apaga</b> (pasa menos sangre por la salida del VD). Qué hacer:</p><ul><li>Calmar, en brazos con las rodillas contra el pecho.</li><li>Oxígeno.</li><li>Morfina, volumen IV.</li><li>Si no cede: betabloqueante IV o fenilefrina, y avisar a cardiología.</li></ul><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" },
      { h: "Tratamiento", html: "<p>Reparación completa en el primer año (cierre de la CIV y ampliación de la salida del VD). Seguimiento de por vida: insuficiencia pulmonar, arritmias y muerte súbita en la adultez.</p>" }
    ],
    diferenciales: [
      { dx:"Transposición de las grandes arterias", claves: "<ul><li>Cianosis intensa en las primeras horas, sin soplo; radiografía en «huevo».</li><li>Fallot: soplo eyectivo áspero y corazón «en bota».</li></ul>", nodo: "cc-tga" },
      { dx:"Atresia pulmonar con septum íntegro o estenosis pulmonar crítica", claves: "<ul><li>Cianosis neonatal dependiente del ductus, sin el soplo de la CIV.</li></ul>", nodo: "cc-ep" },
      { dx:"Crisis hipoxémica o convulsión", claves: "<ul><li>En la crisis el soplo se apaga, hay hiperpnea y cianosis creciente; no es un evento neurológico.</li></ul>", nodo: "ne-paroxisticos" },
      { dx:"Cianosis no cardíaca", claves: "<ul><li>Enfermedad pulmonar (mejora con oxígeno), metahemoglobinemia (sangre achocolatada, saturación cerca de 85 % sin respuesta).</li></ul>" }
    ],
    evidencia: ["apitz2009"], pico: [], ateneos: [],
    conexiones: ["cc-tga", "cc-22q11", "cc-civ"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-tga", nivel: 1, mapa: "cardiopatias", titulo: "Transposición de las grandes arterias", corto: "Transposición", tipo: "concepto", causa: "cianotica",
    x: 1080, y: 140,
    resumen: "Cianosis intensa en las primeras horas, sin dificultad respiratoria ni soplo. Necesita mezclar sangre: prostaglandina y a veces Rashkind.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>La aorta sale del VD y la pulmonar del VI: dos circulaciones en paralelo. Sobrevive mientras se mezclen por el foramen oval, el ductus o una CIV.</li><li>Cianosis en las primeras horas que no mejora con oxígeno; respira tranquilo; a menudo sin soplo.</li><li>Puede haber <b>cianosis diferencial invertida</b>: saturación más alta en el pie que en la mano derecha.</li><li>Radiografía: «huevo sobre un hilo», a veces normal.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Prostaglandina para abrir el ductus.</li><li>Si la mezcla sigue siendo insuficiente: <b>atrioseptostomía con balón (Rashkind)</b> urgente.</li><li>Corrección con el switch arterial (Jatene) en las primeras semanas de vida.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Hipertensión pulmonar persistente del recién nacido", claves: "<ul><li>Antecedente de meconio, asfixia o sepsis; diferencia de saturación preductal mayor que posductal (al revés que en la TGA con cianosis diferencial invertida).</li></ul>" },
      { dx:"Tetralogía de Fallot", claves: "<ul><li>Soplo eyectivo áspero, cianosis más tardía y variable.</li></ul>", nodo: "cc-fallot" },
      { dx:"Enfermedad pulmonar", claves: "<ul><li>Dificultad respiratoria importante y mejoría con oxígeno.</li></ul>" },
      { dx:"Metahemoglobinemia", claves: "<ul><li>Cianosis con pO₂ normal, sangre achocolatada, exposición a nitritos o anestésicos.</li></ul>" }
    ],
    evidencia: ["martins2008"], pico: [], ateneos: [],
    conexiones: ["cc-ductus", "cc-fallot"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-fontan", nivel: 3, mapa: "cardiopatias", titulo: "Ventrículo único y circulación de Fontan", corto: "Ventrículo único (Fontan)", tipo: "concepto", causa: "cianotica",
    x: 965, y: 270,
    resumen: "Cuando no se pueden tener dos ventrículos, se conecta la sangre venosa directo a los pulmones en tres etapas.",
    teoria: [
      { h: "Qué cardiopatías llevan a este camino", html: "<p>Hipoplasia de cavidades izquierdas, atresia tricuspídea, ventrículo de doble entrada y otras con un solo ventrículo funcional.</p>" },
      { h: "Las tres etapas", html: "<ol><li><b>Neonatal:</b> asegurar un flujo pulmonar y sistémico estable (Norwood, shunt, banding o stent ductal).</li><li><b>4–6 meses:</b> Glenn bidireccional (vena cava superior a la pulmonar).</li><li><b>2–5 años:</b> Fontan (vena cava inferior a la pulmonar). La sangre llega al pulmón sin bomba.</li></ol>" },
      { h: "El paciente con Fontan", html: "<p>Saturación algo baja, presión venosa alta. Riesgos de por vida: enfermedad hepática, enteropatía perdedora de proteínas, bronquitis plástica, arritmias, trombosis y problemas del neurodesarrollo. Ante deshidratación o una infección, compensan mal: consultar temprano con su equipo de cardiología.</p>" }
    ],
    evidencia: ["rychik2019", "ohye2010"], pico: [], ateneos: [],
    conexiones: ["cc-hlhs"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Obstructivas */
  {
    id: "cc-coartacion", nivel: 1, mapa: "cardiopatias", titulo: "Coartación de aorta", corto: "Coartación", tipo: "concepto", causa: "obstructiva",
    x: 110, y: 450,
    resumen: "Shock en el recién nacido cuando cierra el ductus; en el niño mayor, hipertensión en los brazos y pulsos femorales débiles.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li><b>Crítica neonatal:</b> en la primera o segunda semana, mala perfusión, acidosis, pulsos femorales ausentes. Puede pasar la oximetría.</li><li><b>Niño mayor o adolescente:</b> asintomática; hipertensión arterial, pulsos femorales débiles o retrasados respecto del radial, presión en los brazos mayor que en las piernas (más de 10–20 mmHg).</li><li>Asociaciones: válvula aórtica bicúspide, síndrome de Turner.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Neonatal: prostaglandina y cirugía.</li><li>Niños mayores: cirugía o angioplastia con stent según edad y anatomía.</li><li>Seguimiento de por vida: recoartación e hipertensión arterial aun después de una buena reparación.</li></ul><p>Palpar los pulsos femorales y medir la presión en un brazo y una pierna en todo niño con hipertensión.</p>" }
    ],
    diferenciales: [
      { dx:"Hipertensión arterial esencial o renal", claves: "<ul><li>Pulsos femorales normales y presión igual en brazos y piernas; buscar causa renal en niños pequeños.</li></ul>" },
      { dx:"Sepsis o error metabólico (forma neonatal)", claves: "<ul><li>Pulsos simétricos; la coartación crítica tiene pulsos femorales débiles o ausentes.</li></ul>", nodo: "ecm-neonato" },
      { dx:"Hipoplasia de cavidades izquierdas", claves: "<ul><li>Pulsos débiles en los cuatro miembros, no solo en las piernas.</li></ul>", nodo: "cc-hlhs" },
      { dx:"Estenosis aórtica", claves: "<ul><li>Soplo eyectivo con clic irradiado al cuello; pulsos pequeños pero simétricos.</li></ul>", nodo: "cc-eao" }
    ],
    evidencia: ["torok2015"], pico: [], ateneos: [],
    conexiones: ["cc-hlhs", "cc-eao", "cc-ductus"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-hlhs", nivel: 2, mapa: "cardiopatias", titulo: "Hipoplasia de cavidades izquierdas", corto: "Hipoplasia izquierda", tipo: "concepto", causa: ["obstructiva", "cianotica"],
    x: 320, y: 450,
    resumen: "El lado izquierdo no alcanza para sostener la circulación sistémica: depende del ductus y termina en un Fontan.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Hoy se diagnostica a menudo antes de nacer.</li><li>Si no: shock con pulsos débiles en los cuatro miembros cuando cierra el ductus, con cianosis leve.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Prostaglandina, evitar el exceso de oxígeno y la hiperventilación (aumentan el flujo pulmonar a costa del sistémico).</li><li>Paliación en tres etapas: Norwood (o procedimiento híbrido), Glenn y <a href=\"#cc-fontan\">Fontan</a>. En el ensayo SVR, el conducto VD-arteria pulmonar dio mejor supervivencia al año que el shunt de Blalock-Taussig.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Coartación crítica", claves: "<ul><li>Pulsos braquiales presentes y femorales ausentes.</li></ul>", nodo: "cc-coartacion" },
      { dx:"Sepsis neonatal", claves: "<ul><li>Shock sin diferencia de pulsos ni cardiopatía en el ecocardiograma.</li></ul>" },
      { dx:"Miocarditis neonatal o miocardiopatía", claves: "<ul><li>Corazón dilatado con mala función pero anatomía normal.</li></ul>" }
    ],
    evidencia: ["ohye2010", "rychik2019"],
    pico: [
      { p: "Recién nacidos con ventrículo único que van a Norwood", i: "Conducto ventrículo derecho-arteria pulmonar", c: "Shunt de Blalock-Taussig modificado", o: "Supervivencia sin trasplante",
        respuesta: "A los 12 meses la supervivencia sin trasplante fue mejor con el conducto (74 % vs 64 %). Después del año la diferencia dejó de ser significativa.",
        certeza: "Moderada", refs: ["ohye2010"] }
    ],
    ateneos: [],
    conexiones: ["cc-fontan", "cc-eao", "cc-ductus"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-eao", nivel: 2, mapa: "cardiopatias", titulo: "Estenosis aórtica", tipo: "concepto", causa: "obstructiva",
    x: 110, y: 560,
    resumen: "Soplo eyectivo en foco aórtico que irradia al cuello, con clic. La crítica del recién nacido da bajo gasto; la del escolar, síncope o dolor con el esfuerzo.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Casi siempre valvular, a menudo sobre una válvula bicúspide.</li><li>Soplo sistólico eyectivo en el foco aórtico que irradia al cuello; clic de eyección; frémito supraesternal.</li><li>Síntomas de alarma: síncope, dolor de pecho o disnea con el esfuerzo.</li><li>Crítica neonatal: dependiente del ductus.</li></ul>" },
      { h: "Qué hacer", html: "<p>Valvuloplastia con balón o cirugía según la gravedad. Las moderadas y graves restringen el deporte competitivo hasta la evaluación de cardiología. La válvula bicúspide se controla de por vida (estenosis, insuficiencia, dilatación de la aorta).</p>" }
    ],
    diferenciales: [
      { dx:"Soplo inocente", claves: "<ul><li>Sin clic ni frémito, no irradia al cuello.</li></ul>", nodo: "cc-soplo" },
      { dx:"Miocardiopatía hipertrófica obstructiva", claves: "<ul><li>Soplo que aumenta de pie o con Valsalva, sin clic; pulso bífido.</li></ul>" },
      { dx:"Estenosis aórtica supravalvular (Williams)", claves: "<ul><li>Facies de duende, hipercalcemia, personalidad muy sociable; sin clic de eyección.</li></ul>", nodo: "cc-down" }
    ],
    evidencia: [], pico: [], ateneos: [],
    conexiones: ["cc-ep", "cc-soplo"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-ep", nivel: 2, mapa: "cardiopatias", titulo: "Estenosis pulmonar", tipo: "concepto", causa: "obstructiva",
    x: 320, y: 560,
    resumen: "Soplo eyectivo en foco pulmonar con clic. Las leves no progresan; las graves se resuelven con valvuloplastia.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Soplo sistólico eyectivo en el foco pulmonar, que irradia a la espalda, con clic que varía con la respiración.</li><li>Leve: asintomática y sin progresión.</li><li>Crítica neonatal: cianosis dependiente del ductus.</li><li>Asociada al síndrome de Noonan (válvula displásica).</li></ul>" },
      { h: "Qué hacer", html: "<p>Valvuloplastia con balón cuando el gradiente es moderado o grave; da buenos resultados y suele evitar la cirugía.</p>" }
    ],
    diferenciales: [
      { dx:"Soplo eyectivo pulmonar inocente", claves: "<ul><li>Sin clic, suave, segundo ruido normal.</li></ul>", nodo: "cc-soplo" },
      { dx:"Comunicación interauricular", claves: "<ul><li>Desdoblamiento fijo del segundo ruido.</li></ul>", nodo: "cc-cia" },
      { dx:"Estenosis de ramas pulmonares del recién nacido", claves: "<ul><li>Soplo suave que irradia a axilas y espalda y desaparece hacia los 6 meses.</li></ul>", nodo: "cc-soplo" }
    ],
    evidencia: [], pico: [], ateneos: [],
    conexiones: ["cc-fallot"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Cuando el corazón no alcanza */
  {
    id: "cc-icc", nivel: 1, mapa: "cardiopatias", titulo: "Insuficiencia cardíaca en el lactante", corto: "Insuficiencia cardíaca", tipo: "concepto",
    x: 600, y: 450,
    resumen: "Taquipnea, sudoración y cansancio con las tomas, mal progreso de peso y hepatomegalia. Casi siempre por un cortocircuito grande.",
    teoria: [
      { h: "Cómo se reconoce", html: "<ul><li>Tarda mucho en comer, se cansa y transpira con las tomas.</li><li>Taquipnea, tiraje, a veces sibilancias o rales (se confunde con bronquiolitis).</li><li>Taquicardia, hepatomegalia, ritmo de galope.</li><li>Mal progreso de peso. Los edemas periféricos son raros en lactantes.</li></ul>" },
      { h: "Causas según la edad", html: "<ul><li><b>Primera semana:</b> lesiones obstructivas izquierdas dependientes del ductus, arritmias, asfixia.</li><li><b>1 a 3 meses:</b> cortocircuitos grandes (CIV, canal AV, ductus) al bajar la resistencia pulmonar.</li><li><b>Cualquier edad:</b> miocarditis, miocardiopatías, taquicardia supraventricular sostenida, origen anómalo de la coronaria izquierda.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Diuréticos (furosemida) para la congestión.</li><li>Más calorías: fórmula o leche materna fortificada, tomas más cortas y frecuentes, sonda si no alcanza.</li><li>Tratar anemia e infecciones.</li><li>El tratamiento de fondo es corregir el defecto.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Bronquiolitis", claves: "<ul><li>Pródromo catarral, sibilancias y crepitantes difusos; sin hepatomegalia progresiva ni galope.</li><li>Una cardiopatía puede descompensarse con una bronquiolitis: si hay soplo o cardiomegalia, ecocardiograma.</li></ul>", nodo: "bronquiolitis" },
      { dx:"Neumonía", claves: "<ul><li>Fiebre, foco auscultatorio, consolidación en la radiografía.</li></ul>" },
      { dx:"Sepsis", claves: "<ul><li>Fiebre o hipotermia, mala perfusión sin cardiomegalia.</li></ul>" },
      { dx:"Taquicardia supraventricular", claves: "<ul><li>Frecuencia cardíaca fija mayor de 220 por minuto en el lactante, sin variabilidad.</li></ul>" },
      { dx:"Miocarditis", claves: "<ul><li>Antecedente viral, ritmo de galope, arritmias, troponina alta, corazón estructuralmente normal.</li></ul>" }
    ],
    evidencia: ["kantor2013"], pico: [], ateneos: [],
    conexiones: ["cc-hp", "cc-civ", "cc-canal"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-hp", nivel: 2, mapa: "cardiopatias", titulo: "Hipertensión pulmonar y Eisenmenger", corto: "Hipertensión pulmonar", tipo: "concepto",
    x: 600, y: 560,
    resumen: "Un cortocircuito grande sin cerrar daña los vasos pulmonares. Si la resistencia supera la sistémica, el cortocircuito se invierte y aparece la cianosis.",
    teoria: [
      { h: "Cómo pasa", html: "<p>El hiperflujo y la presión alta sostenidos remodelan las arteriolas pulmonares. Al principio es reversible; con los meses (antes en el síndrome de Down), la resistencia queda fija. Cuando supera la sistémica, el cortocircuito se invierte: <b>síndrome de Eisenmenger</b>, con cianosis, policitemia y dedos en palillo de tambor.</p>" },
      { h: "Pistas", html: "<ul><li>Un lactante con CIV grande que «mejora» (menos taquipnea, el soplo se acorta) puede estar subiendo la resistencia pulmonar.</li><li>Segundo ruido fuerte y único.</li></ul>" },
      { h: "Qué hacer", html: "<p>Prevenir: cerrar los cortocircuitos grandes a tiempo. Con Eisenmenger ya instalado, el cierre está contraindicado y se usan vasodilatadores pulmonares en centros especializados.</p>" }
    ],
    diferenciales: [
      { dx:"Hipertensión pulmonar por enfermedad respiratoria", claves: "<ul><li>Displasia broncopulmonar, apnea obstructiva, hipoventilación: mejora tratando la causa.</li></ul>", nodo: "prematurez" },
      { dx:"Hipertensión pulmonar idiopática", claves: "<ul><li>Sin cortocircuito ni enfermedad pulmonar; disnea, síncope con el esfuerzo.</li></ul>" },
      { dx:"Estenosis de venas pulmonares", claves: "<ul><li>Prematuros o asociada a otras cardiopatías, progresiva, en el ecocardiograma.</li></ul>" }
    ],
    evidencia: ["abman2015"], pico: [], ateneos: [],
    conexiones: ["cc-down", "cc-canal"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Síndromes y cuidados */
  {
    id: "cc-down", nivel: 2, mapa: "cardiopatias", titulo: "Síndrome de Down y corazón", corto: "Síndrome de Down", tipo: "concepto",
    x: 870, y: 450,
    resumen: "Cerca de la mitad tiene una cardiopatía, sobre todo canal AV. Ecocardiograma a todos al nacer.",
    teoria: [
      { h: "Qué cardiopatías", html: "<p>Canal auriculoventricular (la más típica), CIV, CIA, ductus y, menos frecuente, Fallot.</p>" },
      { h: "Qué hacer", html: "<ul><li><b>Ecocardiograma neonatal a todos</b>, aunque el examen y la ecografía fetal sean normales: el canal AV puede no tener soplo al principio.</li><li>La hipertensión pulmonar aparece antes y con más frecuencia: no demorar la cirugía.</li><li>También pueden tener hipertensión pulmonar sin cardiopatía (apnea obstructiva, vía aérea).</li></ul>" },
      { h: "Otros síndromes que conviene recordar", html: "<div class=\"tabla\"><table><thead><tr><th>Síndrome</th><th>Cardiopatía típica</th></tr></thead><tbody><tr><td>Deleción 22q11.2</td><td>Troncales y arco: Fallot, truncus, interrupción del arco</td></tr><tr><td>Turner</td><td>Coartación, válvula aórtica bicúspide</td></tr><tr><td>Williams</td><td>Estenosis aórtica supravalvular, estenosis de ramas pulmonares</td></tr><tr><td>Noonan</td><td>Estenosis pulmonar, miocardiopatía hipertrófica</td></tr><tr><td>Marfan</td><td>Dilatación de la raíz aórtica</td></tr></tbody></table></div>" }
    ],
    evidencia: ["bull2022"], pico: [], ateneos: [],
    conexiones: ["cc-canal", "cc-hp", "cc-22q11"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-22q11", nivel: 2, mapa: "cardiopatias", titulo: "Deleción 22q11.2 (DiGeorge)", corto: "Deleción 22q11.2", tipo: "concepto",
    x: 1080, y: 450,
    resumen: "Cardiopatía troncal o del arco, hipocalcemia e inmunodeficiencia. Pedir el estudio ante Fallot, truncus o interrupción del arco.",
    teoria: [
      { h: "Cuándo pensarlo", html: "<ul><li>Cardiopatía conotroncal: Fallot (sobre todo con arco aórtico derecho o atresia pulmonar), truncus arterioso, interrupción del arco aórtico tipo B.</li><li>Hipocalcemia neonatal (convulsiones), infecciones por linfopenia T.</li><li>Paladar hendido o insuficiencia velofaríngea, rasgos faciales sutiles, trastornos del aprendizaje y psiquiátricos más adelante.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Estudio genético (microarray o FISH).</li><li>Calcio, PTH y recuento de linfocitos T antes de la cirugía.</li><li>Sangre irradiada y sin vacunas vivas hasta evaluar la inmunidad.</li><li>Seguimiento multidisciplinario.</li></ul>" }
    ],
    evidencia: ["mcdonald2015"], pico: [], ateneos: [],
    conexiones: ["cc-fallot"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "cc-endocarditis", nivel: 2, mapa: "cardiopatias", titulo: "Profilaxis de endocarditis", corto: "Profilaxis de endocarditis", tipo: "concepto",
    x: 965, y: 560,
    resumen: "Hoy se indica a muy pocos: solo pacientes de mayor riesgo y solo para procedimientos dentales. Lo que más protege es la salud bucal.",
    teoria: [
      { h: "Quiénes la necesitan", html: "<ul><li>Válvula protésica o material protésico usado para reparar una válvula.</li><li>Endocarditis previa.</li><li>Cardiopatía cianótica no reparada, incluidos los shunts y conductos paliativos.</li><li>Los primeros 6 meses después de reparar con material protésico (cirugía o cateterismo).</li><li>Defecto residual junto a un parche o dispositivo protésico.</li><li>Trasplante cardíaco con valvulopatía.</li></ul><p>No la necesitan: CIV, CIA o ductus sin reparar o reparados hace más de 6 meses sin residuo, soplos inocentes, prolapso mitral.</p>" },
      { h: "Cuándo y cómo", html: "<p>Solo para procedimientos dentales que manipulan la encía o la región periapical. Amoxicilina 50 mg/kg VO (máximo 2 g) 30–60 minutos antes; en alérgicos, azitromicina o clindamicina según la normativa local.</p><p>Más importante que la profilaxis: higiene bucal y controles odontológicos regulares.</p><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" }
    ],
    evidencia: ["wilson2021"],
    pico: [
      { p: "Niños con cardiopatía de alto riesgo que van a un procedimiento dental", i: "Profilaxis antibiótica", c: "Sin profilaxis", o: "Endocarditis infecciosa",
        respuesta: "No hay ensayos aleatorizados. La AHA mantiene la profilaxis solo en el grupo de mayor riesgo, porque la bacteriemia diaria por cepillado y masticación supera a la de un procedimiento aislado.",
        certeza: "Baja", refs: ["wilson2021"] }
    ],
    ateneos: [],
    conexiones: ["cc-fontan"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  /* ───── Neurología › Las 20 más frecuentes ───── */
  {
    id: "ne-abordaje", nivel: 1, mapa: "neurologia", titulo: "Cómo abordar la consulta neurológica", corto: "Abordaje", tipo: "tema", edad: "El punto de partida", color: "var(--neuro)",
    x: 600, y: 150,
    resumen: "Tres preguntas ordenan la consulta: ¿es agudo o crónico?, ¿hay algo que no espera? y ¿dónde está la lesión?",
    teoria: [
      { h: "1. ¿Qué no puede esperar?", html: "<ul><li>Convulsión que dura más de 5 minutos: <a href=\"#ne-status\">estado de mal</a>.</li><li>Fiebre con alteración de conciencia, rigidez de nuca o petequias: <a href=\"#ne-meningitis\">meningitis</a> o <a href=\"#ne-encefalitis\">encefalitis</a>.</li><li>Cefalea con signos de hipertensión endocraneana o foco: <a href=\"#ne-cefalea-alarma\">cefalea secundaria</a>.</li><li>Debilidad ascendente con compromiso respiratorio o autonómico: <a href=\"#ne-gbs\">Guillain-Barré</a>.</li><li>Trauma con Glasgow menor de 15 o fractura palpable: <a href=\"#ne-tec\">TEC</a>.</li><li>Lactante con espasmos en salvas: <a href=\"#ne-west\">síndrome de West</a>, EEG en días.</li></ul>" },
      { h: "2. ¿Agudo, recurrente o progresivo?", html: "<div class=\"tabla\"><table><thead><tr><th>Curso</th><th>Pensar en</th></tr></thead><tbody><tr><td>Agudo</td><td>Infección, trauma, intoxicación, ACV, inflamación postinfecciosa</td></tr><tr><td>Episódico, con normalidad entre episodios</td><td>Epilepsia, migraña, eventos paroxísticos no epilépticos</td></tr><tr><td>Estático</td><td>Parálisis cerebral, discapacidad intelectual</td></tr><tr><td>Progresivo o con pérdida de pautas</td><td>Tumor, hidrocefalia, enfermedad metabólica o degenerativa: siempre derivar</td></tr></tbody></table></div>" },
      { h: "3. ¿Dónde está?", html: "<p>Un examen dirigido ubica el problema: conciencia y conducta (corteza), pares craneales y fondo de ojo (tronco, presión endocraneana), tono, fuerza y reflejos (primera o segunda motoneurona), coordinación y marcha (cerebelo), perímetro cefálico en todo lactante. La regresión del desarrollo nunca es normal.</p>" }
    ],
    evidencia: ["scheffer2017"], pico: [], ateneos: [],
    casos: [
      { titulo: "Lactante de 5 meses con «sustos» al despertar", html: "<p>La mamá cuenta que desde hace dos semanas, al despertar, flexiona la cabeza y los brazos varias veces seguidas, como asustado. Dejó de sonreír tanto. Tiene manchas hipocrómicas en el tronco.</p><p><b>Cómo pensarlo:</b> salvas de espasmos con estancamiento del desarrollo son un síndrome de West hasta que se demuestre lo contrario; las manchas hipocrómicas sugieren esclerosis tuberosa. EEG en días, no en semanas: el tiempo hasta el tratamiento cambia el pronóstico.</p>", nodos: ["ne-west", "ne-retraso"] },
      { titulo: "Escolar con cefalea que lo despierta", html: "<p>8 años, cefalea hace 3 semanas, peor a la mañana, con vómitos. Lo despierta de noche. En el examen, marcha algo inestable.</p><p><b>Cómo pensarlo:</b> cefalea reciente y progresiva, que lo despierta, con vómitos matinales y un signo cerebeloso: tiene varias banderas rojas. Neuroimagen urgente (RM o, si no está disponible, TC).</p>", nodos: ["ne-cefalea-alarma", "ne-ataxia"] }
    ],
    conexiones: ["ne-febril", "ne-status", "ne-cefalea-alarma", "ne-meningitis", "ne-retraso", "ne-tec"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Convulsiones y epilepsia */
  {
    id: "ne-febril", nivel: 1, mapa: "neurologia", titulo: "Convulsión febril", tipo: "concepto",
    x: 120, y: 140,
    resumen: "Entre los 6 meses y 5 años, con fiebre y sin infección del sistema nervioso. La simple es benigna y no requiere estudios.",
    teoria: [
      { h: "Simple o compleja", html: "<div class=\"tabla\"><table><thead><tr><th>Simple</th><th>Compleja</th></tr></thead><tbody><tr><td>Generalizada</td><td>Focal</td></tr><tr><td>Menos de 15 minutos</td><td>15 minutos o más</td></tr><tr><td>Una sola en 24 horas</td><td>Se repite en 24 horas</td></tr></tbody></table></div><p>Afecta al 2–4 % de los niños; recurre en un 30 %. El riesgo de epilepsia posterior es apenas mayor que el de la población general tras una simple.</p>" },
      { h: "Qué estudiar", html: "<ul><li>Buscar la causa de la fiebre.</li><li><b>Punción lumbar</b> si hay signos meníngeos o la conciencia no se recupera; considerarla entre los 6 y 12 meses con vacunas incompletas o si venía con antibiótico.</li><li>No pedir de rutina EEG, laboratorio ni neuroimágenes en la simple.</li><li>En la compleja, individualizar: más estudios si hay foco persistente o no recupera.</li></ul>" },
      { h: "Qué decirle a la familia", html: "<ul><li>No daña el cerebro ni causa retraso.</li><li>Qué hacer si se repite: de costado, no meter nada en la boca, cronometrar, consultar si dura más de 5 minutos.</li><li>Los antitérmicos dan confort, pero no previenen la recurrencia.</li><li>Medicación de rescate (midazolam bucal o intranasal, diazepam rectal) solo si hubo crisis prolongadas o lejos de un centro.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Meningitis o encefalitis", claves: "<ul><li>Menores de 12 meses con vacunas incompletas, signos meníngeos, fontanela abombada, no recupera la conciencia, crisis compleja.</li></ul>", nodo: "ne-meningitis" },
      { dx:"Escalofríos o delirio febril", claves: "<ul><li>Temblor fino sin pérdida de conciencia o alucinaciones con la fiebre; responde a estímulos.</li></ul>", nodo: "ne-paroxisticos" },
      { dx:"Síncope febril o anóxico", claves: "<ul><li>Palidez y caída con pocas sacudidas, recuperación muy rápida.</li></ul>", nodo: "ne-paroxisticos" },
      { dx:"Epilepsia con crisis febriles (síndrome de Dravet)", claves: "<ul><li>Crisis febriles prolongadas, hemiclónicas y repetidas en el primer año; luego crisis sin fiebre y regresión.</li></ul>", nodo: "ne-epilepsia" }
    ],
    evidencia: ["aap2011", "offringa2021"],
    pico: [
      { p: "Niños con convulsiones febriles", i: "Diazepam intermitente durante la fiebre", c: "Placebo o nada", o: "Recurrencia de convulsiones",
        respuesta: "Reduce algo las recurrencias, pero con efectos adversos (somnolencia, ataxia) y sin mejorar el pronóstico a largo plazo. Los antitérmicos no previenen la recurrencia. No se recomienda la profilaxis de rutina.",
        certeza: "Moderada", refs: ["offringa2021"] }
    ],
    ateneos: [],
    conexiones: ["ne-meningitis", "ne-status", "ne-primera"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-primera", nivel: 1, mapa: "neurologia", titulo: "Primera convulsión sin fiebre", corto: "Primera convulsión", tipo: "concepto",
    x: 330, y: 140,
    resumen: "Confirmar que fue una crisis, buscar si fue provocada y pedir un EEG. La mayoría no necesita tratamiento tras el primer episodio.",
    teoria: [
      { h: "Provocada o no provocada", html: "<p><b>Provocada (sintomática aguda):</b> hipoglucemia, hiponatremia, hipocalcemia, trauma, intoxicación, infección del SNC. Se trata la causa.</p><p><b>No provocada:</b> sin desencadenante agudo. El riesgo de una segunda es de alrededor de 40–50 % en dos años; mayor si el EEG es anormal, si hay causa estructural o si fue durante el sueño.</p>" },
      { h: "Qué pedir", html: "<ul><li><b>EEG</b> en todos (idealmente con sueño).</li><li>Laboratorio (glucemia, ionograma, calcio) si hay vómitos, diarrea, deshidratación o no recupera.</li><li>Neuroimagen urgente si no recupera, hay déficit focal persistente o trauma. Programada (RM) si la crisis fue focal o el EEG muestra un foco que no es de un síndrome autolimitado, o en menores de 1 año.</li></ul>" },
      { h: "Tratar o no", html: "<p>Tras una primera crisis no provocada en general no se trata. Se considera si el riesgo de recurrencia es alto (lesión estructural, EEG epileptiforme) o si una nueva crisis tendría consecuencias graves. Dar pautas de seguridad (natación, altura, baño) y un plan de rescate.</p>" }
    ],
    diferenciales: [
      { dx:"Síncope", claves: "<ul><li>De pie, calor, sangre; pródromo con visión borrosa y palidez; pocas sacudidas, recuperación inmediata.</li></ul>", nodo: "ne-paroxisticos" },
      { dx:"Crisis provocada", claves: "<ul><li>Hipoglucemia, hiponatremia, trauma, intoxicación o infección del SNC: buscar la causa.</li></ul>" },
      { dx:"Arritmia (QT largo)", claves: "<ul><li>Pérdida de conciencia con el ejercicio, el susto o el agua; antecedentes familiares de muerte súbita: ECG.</li></ul>" },
      { dx:"Crisis psicógenas", claves: "<ul><li>Ojos cerrados con resistencia a abrirlos, movimientos asincrónicos, duración larga, adolescentes.</li></ul>" }
    ],
    evidencia: ["hirtz2000", "fisher2014"], pico: [], ateneos: [],
    conexiones: ["ne-epilepsia", "ne-paroxisticos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-status", nivel: 1, mapa: "neurologia", titulo: "Estado de mal epiléptico", corto: "Estado de mal", tipo: "concepto",
    x: 120, y: 260,
    resumen: "Toda convulsión que dura más de 5 minutos se trata como estado de mal: benzodiacepina, y a los 20 minutos, segunda línea.",
    teoria: [
      { h: "El reloj", html: "<div class=\"tabla\"><table><thead><tr><th>Tiempo</th><th>Qué hacer</th></tr></thead><tbody><tr><td>0–5 min</td><td>ABC, oxígeno, monitor, glucemia capilar, acceso venoso</td></tr><tr><td>5 min</td><td><b>Benzodiacepina:</b> midazolam IM, intranasal o bucal (0,2 mg/kg, máx. 10 mg), o lorazepam IV (0,1 mg/kg, máx. 4 mg), o diazepam IV (0,15–0,2 mg/kg, máx. 10 mg) o rectal (0,5 mg/kg). Se puede repetir una vez.</td></tr><tr><td>20 min</td><td><b>Segunda línea:</b> levetiracetam (60 mg/kg, máx. 4,5 g), fosfenitoína (20 mg EF/kg) o fenitoína (20 mg/kg), o valproato (40 mg/kg). Fenobarbital (20 mg/kg) si no hay otro.</td></tr><tr><td>40 min</td><td>Refractario: terapia intensiva, intubación, infusión de midazolam o anestésicos, EEG continuo</td></tr></tbody></table></div><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" },
      { h: "Errores frecuentes", html: "<ul><li>Dar más de dos dosis de benzodiacepina: aumenta la depresión respiratoria sin más eficacia.</li><li>Demorar la segunda línea.</li><li>Olvidar la glucemia.</li><li>Valproato en menores de 2 años o con sospecha de enfermedad metabólica o hepática.</li><li>No buscar la causa: infección, trauma, intoxicación, suspensión de la medicación.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Crisis psicógenas no epilépticas", claves: "<ul><li>Ojos cerrados, movimientos que cambian, sin cianosis ni desaturación; ESETT mostró que 1 de cada 10 «estados de mal» lo eran.</li></ul>" },
      { dx:"Encefalitis o meningitis", claves: "<ul><li>Fiebre, signos meníngeos, alteración de conciencia previa a las crisis.</li></ul>", nodo: "ne-encefalitis" },
      { dx:"Hipoglucemia o trastornos electrolíticos", claves: "<ul><li>Siempre medir glucemia; sodio y calcio en lactantes.</li></ul>", nodo: "ecm-hipoglucemia" },
      { dx:"Posturas de descerebración por hipertensión endocraneana", claves: "<ul><li>Extensión de los miembros con bradicardia, hipertensión y pupilas anormales: es herniación, no convulsión.</li></ul>" }
    ],
    evidencia: ["glauser2016", "dalziel2019", "kapur2019"],
    pico: [
      { p: "Niños con estado de mal convulsivo que no cedió con benzodiacepinas", i: "Levetiracetam", c: "Fenitoína o fosfenitoína", o: "Cese de la convulsión",
        respuesta: "Eficacia similar: alrededor de la mitad cede con cualquiera de ellos. El levetiracetam se infunde más rápido y tiene menos efectos adversos graves, por eso muchos centros lo prefieren.",
        certeza: "Alta", refs: ["dalziel2019", "kapur2019"] }
    ],
    ateneos: [],
    conexiones: ["ne-epilepsia", "ne-meningitis", "ne-encefalitis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-epilepsia", nivel: 1, mapa: "neurologia", titulo: "Epilepsia: definición y clasificación", corto: "Epilepsia", tipo: "concepto",
    x: 330, y: 260,
    resumen: "Dos crisis no provocadas, o una con alto riesgo de repetirse, o un síndrome epiléptico. Clasificar por tipo de crisis, tipo de epilepsia, síndrome y causa.",
    teoria: [
      { h: "Cuándo es epilepsia", html: "<ul><li>Dos crisis no provocadas separadas por más de 24 horas.</li><li>Una crisis no provocada con riesgo de recurrencia de 60 % o más (por ejemplo, lesión estructural con EEG epileptiforme).</li><li>Diagnóstico de un síndrome epiléptico.</li></ul>" },
      { h: "Cómo se clasifica (ILAE)", html: "<ol><li><b>Tipo de crisis:</b> focal (con o sin alteración de la conciencia), generalizada o de inicio desconocido.</li><li><b>Tipo de epilepsia:</b> focal, generalizada, combinada o desconocida.</li><li><b>Síndrome:</b> por ejemplo, <a href=\"#ne-ausencias\">ausencias infantiles</a>, <a href=\"#ne-rolandica\">autolimitada con puntas centrotemporales</a>, <a href=\"#ne-west\">espasmos infantiles</a>.</li></ol><p>En cada nivel: etiología (estructural, genética, infecciosa, metabólica, inmune, desconocida) y comorbilidades (aprendizaje, conducta, sueño).</p>" },
      { h: "Tratamiento: principios", html: "<ul><li>Elegir el fármaco según el síndrome, la edad y el sexo.</li><li>Monoterapia a la menor dosis eficaz.</li><li>Si fracasan dos fármacos bien elegidos, es farmacorresistente: derivar a un centro de epilepsia (cirugía, dieta cetogénica).</li><li>Plan de rescate escrito y pautas de seguridad para la escuela.</li></ul>" }
    ],
    evidencia: ["fisher2014", "scheffer2017"], pico: [], ateneos: [],
    conexiones: ["ne-ausencias", "ne-rolandica", "ne-west"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-ausencias", nivel: 2, mapa: "neurologia", titulo: "Epilepsia de ausencias infantil", corto: "Ausencias", tipo: "concepto",
    x: 120, y: 390,
    resumen: "Escolares que «se quedan colgados» muchas veces por día, unos segundos. La hiperventilación las provoca en el consultorio.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Entre los 4 y 10 años; más en niñas.</li><li>Desconexión brusca de 5 a 15 segundos, mirada fija, a veces parpadeo o automatismos; vuelve enseguida sin confusión.</li><li>Decenas de veces por día; a menudo se consulta por bajo rendimiento escolar o «está distraído».</li><li><b>Hiperventilar 3 minutos</b> en el consultorio las reproduce en la mayoría.</li><li>EEG: punta-onda generalizada a 3 Hz.</li></ul>" },
      { h: "Tratamiento", html: "<p><b>Etosuximida</b> como primera opción: igual de eficaz que el valproato y con menos efectos sobre la atención; la lamotrigina es menos eficaz. La mayoría remite en la adolescencia. Diferenciar de la distracción del TDAH: las ausencias interrumpen hasta la conversación y no se cortan al llamarlo.</p>" }
    ],
    diferenciales: [
      { dx:"Distracción o desconexión normal", claves: "<ul><li>Se interrumpe al llamarlo o tocarlo; no ocurre en medio de una frase ni al hiperventilar.</li></ul>", nodo: "ne-tdah" },
      { dx:"Crisis focales con alteración de conciencia", claves: "<ul><li>Más largas (más de 30 segundos), con automatismos y confusión posterior.</li></ul>", nodo: "ne-epilepsia" },
      { dx:"Déficit de GLUT1", claves: "<ul><li>Ausencias que empiezan antes de los 4 años o no responden al tratamiento.</li></ul>", nodo: "ecm-glut1" }
    ],
    evidencia: ["glauser2010"],
    pico: [
      { p: "Niños con epilepsia de ausencias infantil", i: "Etosuximida", c: "Ácido valproico o lamotrigina", o: "Libres de fracaso terapéutico a las 16 semanas",
        respuesta: "Etosuximida (53 %) y valproico (58 %) fueron similares y superiores a lamotrigina (29 %). La etosuximida tuvo menos efectos adversos sobre la atención: es la primera elección.",
        certeza: "Alta", refs: ["glauser2010"] }
    ],
    ateneos: [],
    conexiones: ["ne-tdah", "ne-paroxisticos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-rolandica", nivel: 3, mapa: "neurologia", titulo: "Epilepsia autolimitada con puntas centrotemporales", corto: "Epilepsia rolándica", tipo: "concepto",
    x: 330, y: 390,
    resumen: "La epilepsia focal más frecuente en escolares: crisis hemifaciales al dormir, con babeo y sin poder hablar. Se cura sola en la adolescencia.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Entre los 4 y 10 años.</li><li>Crisis durante el sueño o al despertar: parestesias y clonías de una hemicara, babeo, dificultad para hablar con conciencia conservada; a veces generaliza.</li><li>Desarrollo y examen normales.</li><li>EEG: puntas centrotemporales que aumentan con el sueño.</li></ul>" },
      { h: "Qué hacer", html: "<p>Con un examen y EEG típicos, no hace falta neuroimagen. Muchos no necesitan tratamiento si las crisis son pocas y nocturnas; se trata si son frecuentes o molestas. Remite antes de los 16 años. Vigilar dificultades de lenguaje y aprendizaje.</p>" }
    ],
    diferenciales: [
      { dx:"Epilepsia focal estructural", claves: "<ul><li>Examen neurológico anormal, crisis diurnas frecuentes, EEG no típico: pedir RM.</li></ul>", nodo: "ne-epilepsia" },
      { dx:"Tics o mioclonías del sueño", claves: "<ul><li>Sin babeo ni imposibilidad para hablar con conciencia conservada.</li></ul>", nodo: "ne-paroxisticos" },
      { dx:"Encefalopatía con punta-onda continua del sueño", claves: "<ul><li>Regresión del lenguaje o de la conducta con EEG con descargas casi continuas durante el sueño.</li></ul>" }
    ],
    evidencia: ["scheffer2017"], pico: [], ateneos: [],
    conexiones: ["ne-primera"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-west", nivel: 2, mapa: "neurologia", titulo: "Espasmos infantiles (síndrome de West)", corto: "Espasmos infantiles", tipo: "concepto",
    x: 120, y: 520,
    resumen: "Lactante de 3 a 12 meses con salvas de espasmos al despertar y estancamiento del desarrollo. Es una urgencia: EEG y tratamiento en días.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Espasmos breves en flexión o extensión, en salvas, al despertar; se confunden con cólicos o con el reflejo de Moro.</li><li>Estancamiento o regresión del desarrollo, menos sonrisa y contacto.</li><li>EEG: hipsarritmia.</li><li>Causas: esclerosis tuberosa (buscar manchas hipocrómicas), encefalopatía hipóxico-isquémica, malformaciones, trisomía 21, genéticas; a veces desconocida.</li></ul>" },
      { h: "Tratamiento", html: "<ul><li>Tratamiento hormonal (prednisolona en dosis altas o ACTH), y sumar <b>vigabatrina</b> mejora la respuesta.</li><li>En la esclerosis tuberosa, vigabatrina como primera elección.</li><li>Cuanto antes se trata, mejor el pronóstico del desarrollo.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Cólicos o reflujo", claves: "<ul><li>Relacionados con las tomas, sin salvas al despertar ni estancamiento del desarrollo.</li></ul>", nodo: "ne-paroxisticos" },
      { dx:"Mioclonías benignas del lactante", claves: "<ul><li>Desarrollo normal y EEG normal; se resuelven solas.</li></ul>", nodo: "ne-paroxisticos" },
      { dx:"Reflejo de Moro o sobresaltos", claves: "<ul><li>Desencadenados por estímulos, no en salvas, en un lactante con desarrollo normal.</li></ul>" },
      { dx:"Dependencia de piridoxina", claves: "<ul><li>Puede presentarse con espasmos; probar piridoxina si no hay causa clara.</li></ul>", nodo: "ecm-vitaminas" }
    ],
    evidencia: ["ocallaghan2017"],
    pico: [
      { p: "Lactantes con espasmos infantiles", i: "Tratamiento hormonal más vigabatrina", c: "Tratamiento hormonal solo", o: "Cese de los espasmos (días 14 a 42)",
        respuesta: "Más lactantes quedaron sin espasmos con la combinación (72 % vs 57 %), con efectos adversos graves similares.",
        certeza: "Moderada", refs: ["ocallaghan2017"] }
    ],
    ateneos: [],
    conexiones: ["ne-retraso", "ne-paroxisticos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-paroxisticos", nivel: 2, mapa: "neurologia", titulo: "Eventos paroxísticos no epilépticos", corto: "Lo que no es epilepsia", tipo: "concepto",
    x: 330, y: 520,
    resumen: "Espasmo del sollozo, síncope, parasomnias, reflujo, tics: son más frecuentes que la epilepsia y se diagnostican con una buena historia y un video.",
    teoria: [
      { h: "Los más frecuentes según la edad", html: "<div class=\"tabla\"><table><thead><tr><th>Edad</th><th>Evento</th><th>Pista</th></tr></thead><tbody><tr><td>Lactante</td><td>Sandifer (reflujo), mioclonías benignas del sueño, estremecimientos</td><td>Relación con las tomas o el sueño; se frenan al despertarlo o sujetarlo</td></tr><tr><td>6 meses – 5 años</td><td><b>Espasmo del sollozo</b> (cianótico o pálido)</td><td>Siempre hay un desencadenante: llanto, enojo, golpe. Pausa en espiración y después pérdida de conciencia</td></tr><tr><td>Preescolar</td><td>Terrores nocturnos, vértigo paroxístico benigno</td><td>Primera parte de la noche; no recuerda</td></tr><tr><td>Escolar y adolescente</td><td><b>Síncope</b>, tics, crisis psicógenas, migraña</td><td>De pie, calor, sangre; pródromo con visión borrosa y palidez; recuperación rápida</td></tr></tbody></table></div>" },
      { h: "Claves", html: "<ul><li>Pedir un <b>video</b>: suele resolver la duda.</li><li>En el síncope pueden aparecer sacudidas breves: no es epilepsia. ECG en todo síncope (QT largo, preexcitación); preocupa el que ocurre durante el ejercicio.</li><li>En el espasmo del sollozo, controlar la ferritina: el hierro reduce los episodios.</li><li>No pedir EEG «por las dudas»: hallazgos inespecíficos llevan a diagnósticos falsos de epilepsia.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Crisis epiléptica", claves: "<ul><li>Sin desencadenante, cianosis durante el evento, mordedura lateral de la lengua, confusión posterior prolongada.</li></ul>", nodo: "ne-primera" },
      { dx:"Arritmia cardíaca", claves: "<ul><li>Síncope con el ejercicio o acostado, palpitaciones, antecedente de muerte súbita familiar: ECG y cardiología.</li></ul>" },
      { dx:"Hipoglucemia", claves: "<ul><li>Episodios en ayunas con sudoración y confusión: medir glucemia en el episodio.</li></ul>", nodo: "ecm-hipoglucemia" },
      { dx:"Migraña con aura o variantes", claves: "<ul><li>Vértigo paroxístico, tortícolis paroxística, síntomas visuales seguidos de cefalea.</li></ul>", nodo: "ne-migrana" }
    ],
    evidencia: [], pico: [], ateneos: [],
    conexiones: ["ne-primera", "ne-migrana"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Cefalea y trauma */
  {
    id: "ne-migrana", nivel: 1, mapa: "neurologia", titulo: "Migraña", tipo: "concepto",
    x: 850, y: 140,
    resumen: "La cefalea primaria recurrente más frecuente. En niños dura menos y suele ser bilateral. Ibuprofeno temprano; los preventivos no superaron al placebo.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Crisis de 2 a 72 horas, pulsátil, moderada o intensa, que empeora con la actividad.</li><li>Náuseas o vómitos, fotofobia y fonofobia; el niño busca acostarse y mejora al dormir.</li><li>En niños puede ser bilateral (frontal) y más corta.</li><li>Aura visual en una minoría.</li><li>Antecedentes familiares en la mayoría.</li><li>Equivalentes en los más chicos: vómitos cíclicos, dolor abdominal recurrente, vértigo paroxístico.</li></ul>" },
      { h: "Tratamiento de la crisis", html: "<ul><li><b>Ibuprofeno</b> 10 mg/kg como primera opción; paracetamol 15 mg/kg como alternativa. Tomarlo apenas empieza.</li><li>Adolescentes: triptanes (sumatriptán-naproxeno, zolmitriptán nasal, rizatriptán).</li><li>En la guardia: hidratación, ketorolac, metoclopramida o proclorperazina.</li><li>Evitar el uso de analgésicos más de 10–15 días por mes (cefalea por abuso).</li></ul><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" },
      { h: "Prevención", html: "<p>Primero los hábitos: sueño regular, no saltear comidas, hidratación, actividad física, manejo del estrés, diario de cefaleas. En el ensayo CHAMP, amitriptilina y topiramato no fueron mejores que el placebo (que mejoró al 61 %). La terapia cognitivo-conductual tiene evidencia favorable.</p>" }
    ],
    diferenciales: [
      { dx:"Cefalea tensional", claves: "<ul><li>Opresiva, bilateral, leve a moderada, sin náuseas ni empeoramiento con la actividad.</li></ul>", nodo: "ne-cefalea-alarma" },
      { dx:"Cefalea secundaria", claves: "<ul><li>Banderas rojas: despierta de noche, empeora con Valsalva, examen anormal, cambio de patrón.</li></ul>", nodo: "ne-cefalea-alarma" },
      { dx:"Sinusitis", claves: "<ul><li>Rinorrea purulenta, congestión y dolor facial; la «cefalea sinusal» recurrente casi siempre es migraña.</li></ul>" },
      { dx:"Cefalea por abuso de analgésicos", claves: "<ul><li>Cefalea casi diaria en quien toma analgésicos más de 10–15 días por mes.</li></ul>" }
    ],
    evidencia: ["oskoui2019", "powers2017"],
    pico: [
      { p: "Niños y adolescentes con migraña frecuente", i: "Amitriptilina o topiramato", c: "Placebo", o: "Reducción de 50 % o más de los días de cefalea",
        respuesta: "Sin diferencias: 52 % con amitriptilina, 55 % con topiramato y 61 % con placebo, con más efectos adversos con los fármacos. El efecto placebo y las medidas generales son grandes en esta edad.",
        certeza: "Alta", refs: ["powers2017"] }
    ],
    ateneos: [],
    conexiones: ["ne-cefalea-alarma", "ne-paroxisticos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-cefalea-alarma", nivel: 1, mapa: "neurologia", titulo: "Cefalea: banderas rojas", corto: "Cefalea con alarma", tipo: "concepto",
    x: 1090, y: 140,
    resumen: "Lo que obliga a buscar una causa secundaria y pedir neuroimagen. Sin banderas rojas, la tomografía no ayuda.",
    teoria: [
      { h: "Banderas rojas", html: "<ul><li>Cefalea que despierta de noche o aparece al levantarse, con vómitos.</li><li>Empeora con la tos, el esfuerzo o el decúbito.</li><li>Inicio súbito, «la peor de su vida».</li><li>Progresiva en frecuencia o intensidad, o cambio de patrón.</li><li>Examen anormal: papiledema, déficit focal, ataxia, alteración de la conciencia o de la conducta.</li><li>Fiebre y rigidez de nuca; síntomas sistémicos.</li><li>Menores de 3–5 años (no saben describirla).</li><li>Válvula de derivación, inmunodepresión, neurofibromatosis.</li></ul>" },
      { h: "Qué hacer", html: "<p>Siempre: presión arterial y <b>fondo de ojo</b>. Con banderas rojas, neuroimagen (RM de preferencia; TC si es urgente y no hay RM). Otras causas secundarias frecuentes y benignas: infecciones virales, sinusitis, cefalea postraumática, abuso de analgésicos. Considerar hipertensión endocraneana idiopática en adolescentes con sobrepeso o con tetraciclinas.</p>" }
    ],
    diferenciales: [
      { dx:"Migraña", claves: "<ul><li>Patrón recurrente estable, examen normal entre crisis, antecedentes familiares.</li></ul>", nodo: "ne-migrana" },
      { dx:"Hipertensión endocraneana idiopática", claves: "<ul><li>Adolescente con sobrepeso o con tetraciclinas o vitamina A; papiledema con RM normal, presión de apertura alta.</li></ul>" },
      { dx:"Hipertensión arterial", claves: "<ul><li>Medir siempre la presión en un niño con cefalea.</li></ul>" },
      { dx:"Intoxicación por monóxido de carbono", claves: "<ul><li>Varios convivientes con cefalea, peor en casa y en invierno, mejor al salir.</li></ul>" }
    ],
    evidencia: ["do2019"], pico: [], ateneos: [],
    conexiones: ["ne-migrana", "ne-meningitis", "ne-tec"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-tec", nivel: 1, mapa: "neurologia", titulo: "Traumatismo de cráneo leve", corto: "TEC leve", tipo: "concepto",
    x: 970, y: 250,
    resumen: "La mayoría no necesita tomografía. Las reglas PECARN separan a los de muy bajo riesgo de los que hay que estudiar u observar.",
    teoria: [
      { h: "Reglas PECARN (Glasgow 14–15)", html: "<div class=\"tabla\"><table><thead><tr><th></th><th>Menores de 2 años</th><th>2 años o más</th></tr></thead><tbody><tr><td><b>TC</b></td><td>Glasgow 14 u otra alteración mental; fractura palpable</td><td>Glasgow 14 u otra alteración mental; signos de fractura de base</td></tr><tr><td><b>Observar o TC</b> (según cantidad de hallazgos, evolución y preferencia)</td><td>Hematoma no frontal, pérdida de conciencia de 5 segundos o más, mecanismo grave, no actúa normal según los padres</td><td>Pérdida de conciencia, vómitos, mecanismo grave, cefalea intensa</td></tr><tr><td><b>Sin TC</b></td><td>Ninguno de los anteriores</td><td>Ninguno de los anteriores</td></tr></tbody></table></div><p>Sin ningún hallazgo, el riesgo de lesión importante es menor de 0,05 %. Mecanismo grave: accidente de tránsito con eyección o vuelco, peatón o ciclista sin casco atropellado, caída de más de 90 cm (menores de 2 años) o 1,5 m (mayores), impacto con objeto de alta energía.</p>" },
      { h: "Al alta", html: "<ul><li>Pautas de alarma: vómitos repetidos, somnolencia, cefalea creciente, convulsión, cambio de conducta.</li><li>Conmoción: reposo relativo 24–48 horas y regreso gradual a la escuela y al deporte; no volver al deporte con síntomas.</li><li>Pensar en maltrato si la historia no coincide con las lesiones o con el desarrollo, sobre todo en lactantes.</li></ul>" }
    ],
    evidencia: ["kuppermann2009"], pico: [], ateneos: [],
    conexiones: ["ne-cefalea-alarma"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Infección y déficit agudo */
  {
    id: "ne-meningitis", nivel: 1, mapa: "neurologia", titulo: "Meningitis bacteriana", corto: "Meningitis", tipo: "concepto",
    x: 530, y: 400,
    resumen: "Fiebre con rigidez de nuca, alteración de conciencia o petequias. Antibiótico sin demora; la dexametasona reduce la sordera.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Niños: fiebre, cefalea, vómitos, rigidez de nuca, fotofobia, alteración de conciencia, convulsiones; petequias en la meningocócica.</li><li>Lactantes: irritabilidad, rechazo del alimento, fontanela abombada, letargo; la rigidez de nuca puede faltar.</li><li>Gérmenes: neumococo y meningococo (después del mes); estreptococo grupo B, E. coli y Listeria en neonatos.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Hemocultivo y punción lumbar si está estable y no hay contraindicaciones (inestabilidad, signos de hipertensión endocraneana, coagulopatía). <b>No demorar el antibiótico</b> por la punción ni por la TC.</li><li>Empírico desde el mes: ceftriaxona 100 mg/kg/día (máx. 4 g) más vancomicina según la resistencia local. Menores de 1 mes: ampicilina más cefotaxima o gentamicina.</li><li><b>Dexametasona</b> 0,15 mg/kg cada 6 horas por 2 a 4 días, con la primera dosis antes del antibiótico o junto con él.</li><li>Quimioprofilaxis de contactos en la meningocócica y por Hib.</li><li>Control auditivo antes del alta.</li></ul><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" }
    ],
    diferenciales: [
      { dx:"Meningitis viral", claves: "<ul><li>Buen estado, LCR con menos de 500–1000 células y predominio linfocitario, glucosa normal, procalcitonina baja.</li></ul>" },
      { dx:"Encefalitis", claves: "<ul><li>Predomina la alteración de conducta o de conciencia y las convulsiones sobre los signos meníngeos.</li></ul>", nodo: "ne-encefalitis" },
      { dx:"Meningismo por otras causas", claves: "<ul><li>Neumonía de lóbulo superior, adenitis cervical, absceso retrofaríngeo: rigidez sin LCR inflamatorio.</li></ul>" },
      { dx:"Hemorragia subaracnoidea", claves: "<ul><li>Cefalea brusca e intensa sin fiebre al inicio; TC.</li></ul>" }
    ],
    evidencia: ["brouwer2015"],
    pico: [
      { p: "Niños con meningitis bacteriana", i: "Dexametasona junto con el antibiótico", c: "Antibiótico solo", o: "Mortalidad, hipoacusia y secuelas",
        respuesta: "No redujo la mortalidad global, pero sí la hipoacusia grave (RR 0,67) y las secuelas neurológicas a corto plazo; en niños, el beneficio se vio sobre todo con Haemophilus influenzae. En países de bajos ingresos no mostró beneficio.",
        certeza: "Moderada", refs: ["brouwer2015"] }
    ],
    ateneos: [],
    conexiones: ["ne-encefalitis", "ne-febril"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-encefalitis", nivel: 2, mapa: "neurologia", titulo: "Encefalitis", tipo: "concepto",
    x: 680, y: 400,
    resumen: "Alteración de la conciencia o de la conducta por más de 24 horas, con fiebre, convulsiones o foco. Aciclovir empírico; pensar también en la autoinmune.",
    teoria: [
      { h: "Cuándo pensarlo", html: "<ul><li>Alteración de conciencia, letargo o cambio de conducta de 24 horas o más.</li><li>Con fiebre, convulsiones, déficit focal, pleocitosis en el LCR, neuroimagen o EEG alterados.</li><li>Infecciosa: herpes simple (la más grave tratable), enterovirus, otros virus.</li><li><b>Autoinmune anti-NMDA:</b> cambios de conducta o psiquiátricos, trastornos del movimiento (discinesias orofaciales), convulsiones, alteración autonómica, mutismo; en niñas y adolescentes buscar teratoma de ovario.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li><b>Aciclovir IV</b> empírico apenas se sospecha, hasta descartar herpes por PCR en LCR (repetir la PCR si fue temprana y la sospecha sigue).</li><li>RM y EEG.</li><li>Anticuerpos anti-NMDA en LCR y suero si la causa infecciosa no se confirma.</li><li>Inmunoterapia temprana en la autoinmune (corticoides, IGIV o plasmaféresis; segunda línea con rituximab).</li></ul>" }
    ],
    diferenciales: [
      { dx:"Meningitis bacteriana", claves: "<ul><li>Signos meníngeos con LCR purulento; la conciencia puede alterarse pero predominan la fiebre y la rigidez.</li></ul>", nodo: "ne-meningitis" },
      { dx:"Encefalomielitis aguda diseminada", claves: "<ul><li>Dos semanas tras una infección o vacuna; lesiones de sustancia blanca multifocales en la RM; responde a corticoides.</li></ul>" },
      { dx:"Intoxicación", claves: "<ul><li>Sin fiebre ni pleocitosis; antecedente de exposición, signos tóxicos (pupilas, frecuencia cardíaca).</li></ul>" },
      { dx:"Encefalopatía metabólica", claves: "<ul><li>Amonio alto, hipoglucemia, acidosis; LCR normal.</li></ul>", nodo: "ecm-hiperamonemia" },
      { dx:"Estado de mal no convulsivo", claves: "<ul><li>Alteración de conciencia con EEG con actividad epiléptica continua.</li></ul>", nodo: "ne-status" }
    ],
    evidencia: ["venkatesan2013", "titulaer2013"], pico: [], ateneos: [],
    conexiones: ["ne-status", "ne-ataxia"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-gbs", nivel: 1, mapa: "neurologia", titulo: "Síndrome de Guillain-Barré", corto: "Guillain-Barré", tipo: "concepto",
    x: 530, y: 500,
    resumen: "Debilidad simétrica ascendente con arreflexia, días a semanas después de una infección. Vigilar la respiración; IGIV si no camina.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Dolor en piernas o espalda (frecuente en niños, a veces el primer síntoma), negativa a caminar.</li><li>Debilidad simétrica que asciende, con reflejos disminuidos o ausentes.</li><li>Puede comprometer pares craneales, respiración y sistema autonómico (arritmias, presión lábil).</li><li>Antecedente de infección respiratoria o diarrea (Campylobacter) en las semanas previas.</li><li>LCR: proteínas altas con células normales (puede ser normal la primera semana).</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Internar y medir la función respiratoria seriada (capacidad vital, contar en una espiración), la deglución, la presión y el ritmo.</li><li><b>IGIV</b> 2 g/kg en 2 a 5 días (o plasmaféresis) si no puede caminar sin ayuda o progresa rápido.</li><li>Los corticoides no sirven.</li><li>Analgesia y rehabilitación. La mayoría de los niños se recupera bien.</li></ul>" },
      { h: "Diferenciar de", html: "<p>Mielitis transversa (nivel sensitivo, retención urinaria), compresión medular, botulismo del lactante, miositis aguda benigna (dolor en pantorrillas con CPK alta y reflejos conservados), <a href=\"#ne-ataxia\">ataxia aguda</a>.</p>" }
    ],
    diferenciales: [
      { dx:"Mielitis transversa", claves: "<ul><li>Nivel sensitivo, retención urinaria precoz, reflejos aumentados después de la fase aguda; RM medular.</li></ul>" },
      { dx:"Compresión medular", claves: "<ul><li>Dolor de espalda localizado, nivel sensitivo, esfínteres; RM urgente.</li></ul>" },
      { dx:"Miositis aguda benigna", claves: "<ul><li>Dolor en pantorrillas tras influenza, marcha en puntas de pie, CK muy alta, reflejos conservados.</li></ul>" },
      { dx:"Botulismo del lactante", claves: "<ul><li>Constipación, ptosis, pupilas lentas, debilidad descendente, miel o polvo.</li></ul>" },
      { dx:"Ataxia aguda", claves: "<ul><li>Inestabilidad sin debilidad ni arreflexia.</li></ul>", nodo: "ne-ataxia" }
    ],
    evidencia: ["leonhard2019", "hughes2014"],
    pico: [
      { p: "Pacientes con Guillain-Barré grave", i: "IGIV iniciada en las primeras dos semanas", c: "Plasmaféresis", o: "Mejoría de la discapacidad a las 4 semanas",
        respuesta: "La IGIV acelera la recuperación tanto como la plasmaféresis y es más simple de administrar en niños.",
        certeza: "Moderada", refs: ["hughes2014"] }
    ],
    ateneos: [],
    conexiones: ["ne-ataxia", "ne-bell"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-ataxia", nivel: 2, mapa: "neurologia", titulo: "Ataxia aguda", tipo: "concepto",
    x: 680, y: 500,
    resumen: "Preescolar que de golpe camina como borracho, días después de una virosis: casi siempre cerebelitis postinfecciosa. Descartar intoxicación.",
    teoria: [
      { h: "Causas", html: "<ul><li><b>Cerebelitis postinfecciosa</b> (la más frecuente): entre 1 y 6 años, 1 a 3 semanas después de varicela u otra virosis; ataxia de la marcha y del tronco, nistagmo, con conciencia normal. Se resuelve en semanas.</li><li><b>Intoxicaciones</b>: benzodiacepinas, antiepilépticos, antihistamínicos, alcohol.</li><li>Otras: encefalomielitis aguda diseminada (con alteración de conciencia o foco), Guillain-Barré (variante Miller Fisher), tumor de fosa posterior, trauma, opsoclono-mioclono (neuroblastoma), migraña basilar, laberintitis.</li></ul>" },
      { h: "Cuándo estudiar", html: "<p>Neuroimagen urgente si hay alteración de conciencia, foco, signos de hipertensión endocraneana, trauma, ataxia asimétrica o curso progresivo. Pesquisa toxicológica si no hay pródromo viral claro.</p>" }
    ],
    diferenciales: [
      { dx:"Intoxicación", claves: "<ul><li>Sin pródromo viral, inicio brusco, somnolencia, nistagmo; benzodiacepinas, antiepilépticos, alcohol.</li></ul>" },
      { dx:"Tumor de fosa posterior", claves: "<ul><li>Curso progresivo, cefalea matinal con vómitos, signos de hipertensión endocraneana.</li></ul>", nodo: "ne-cefalea-alarma" },
      { dx:"Guillain-Barré (Miller Fisher)", claves: "<ul><li>Oftalmoplejía, ataxia y arreflexia.</li></ul>", nodo: "ne-gbs" },
      { dx:"Laberintitis o vértigo", claves: "<ul><li>Vértigo rotatorio con náuseas, nistagmo horizontal, sin ataxia de tronco.</li></ul>" },
      { dx:"Encefalomielitis aguda diseminada", claves: "<ul><li>Alteración de conciencia o signos focales además de la ataxia.</li></ul>", nodo: "ne-encefalitis" }
    ],
    evidencia: ["petley2020"], pico: [], ateneos: [],
    conexiones: ["ne-encefalitis", "ne-gbs"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-bell", nivel: 2, mapa: "neurologia", titulo: "Parálisis facial periférica", corto: "Parálisis facial", tipo: "concepto",
    x: 605, y: 580,
    resumen: "Compromete toda la hemicara, también la frente. En niños casi siempre se recupera sola; descartar otitis, Lyme e hipertensión.",
    teoria: [
      { h: "Central o periférica", html: "<p><b>Periférica:</b> toda la hemicara, no puede arrugar la frente ni cerrar el ojo. <b>Central:</b> respeta la frente; obliga a buscar una lesión cerebral.</p>" },
      { h: "Qué buscar", html: "<ul><li>Otitis media aguda o colesteatoma.</li><li>Herpes zóster ótico (vesículas en el conducto: Ramsay Hunt).</li><li>Hipertensión arterial, leucemia, trauma.</li><li>Bilateral o con otros pares: Guillain-Barré, Lyme.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li><b>Proteger el ojo</b>: lágrimas artificiales de día y gel y oclusión de noche.</li><li>Corticoides: en niños el beneficio es pequeño; el ensayo BellPEDS no mostró diferencias significativas. Pueden considerarse en las formas completas.</li><li>Control evolutivo; derivar si no mejora en 3 a 4 semanas.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Parálisis facial central", claves: "<ul><li>Respeta la frente; buscar lesión cerebral.</li></ul>" },
      { dx:"Otitis media aguda o colesteatoma", claves: "<ul><li>Otalgia, otorrea, tímpano alterado.</li></ul>" },
      { dx:"Síndrome de Ramsay Hunt", claves: "<ul><li>Vesículas en el conducto auditivo o pabellón, dolor intenso.</li></ul>" },
      { dx:"Guillain-Barré", claves: "<ul><li>Parálisis facial bilateral con debilidad y arreflexia.</li></ul>", nodo: "ne-gbs" },
      { dx:"Hipertensión arterial o leucemia", claves: "<ul><li>Presión alta, citopenias o adenopatías.</li></ul>" }
    ],
    evidencia: ["babl2024"],
    pico: [
      { p: "Niños con parálisis de Bell", i: "Prednisolona", c: "Placebo", o: "Recuperación de la función facial a los 6 meses",
        respuesta: "Recuperación casi universal en ambos grupos (98 % vs 93 %), sin diferencia significativa. La decisión puede compartirse con la familia.",
        certeza: "Moderada", refs: ["babl2024"] }
    ],
    ateneos: [],
    conexiones: ["ne-gbs"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Neurodesarrollo */
  {
    id: "ne-retraso", nivel: 1, mapa: "neurologia", titulo: "Retraso global del desarrollo", corto: "Retraso del desarrollo", tipo: "concepto",
    x: 850, y: 410,
    resumen: "Retraso significativo en dos o más áreas antes de los 5 años. Buscar la causa: microarray, X frágil y, según la clínica, imágenes y metabólico.",
    teoria: [
      { h: "Cómo reconocerlo", html: "<ul><li>Pesquisa del desarrollo en cada control (con prueba estandarizada como la PRUNAPE).</li><li>Retraso en dos o más áreas: motora gruesa y fina, lenguaje, cognitiva, social, adaptativa.</li><li>Corregir la edad por prematurez hasta los 2 años.</li><li><b>Regresión</b> (pérdida de pautas adquiridas): siempre es una alarma.</li></ul>" },
      { h: "Qué estudiar", html: "<ul><li>Audición y visión en todos.</li><li>Primer nivel genético: microarray cromosómico y X frágil.</li><li>Neuroimagen (RM) si hay microcefalia, macrocefalia, convulsiones, signos focales o regresión.</li><li>Estudios metabólicos si hay regresión, consanguinidad, crisis metabólicas u organomegalias.</li><li>Tiroides y plomo según el contexto.</li></ul>" },
      { h: "Qué hacer", html: "<p>Derivar a estimulación temprana <b>en cuanto se detecta</b>, sin esperar el diagnóstico etiológico. A partir de los 5 años, con evaluación cognitiva confiable, se habla de discapacidad intelectual.</p>" }
    ],
    diferenciales: [
      { dx:"Hipoacusia", claves: "<ul><li>Retraso del lenguaje con el resto normal: audiometría o potenciales evocados siempre.</li></ul>" },
      { dx:"Trastorno del espectro autista", claves: "<ul><li>Lo que falta es el contacto social y la comunicación, con motor relativamente conservado.</li></ul>", nodo: "ne-tea" },
      { dx:"Parálisis cerebral", claves: "<ul><li>Predominio motor con alteración del tono y factores de riesgo perinatales.</li></ul>", nodo: "ne-pc" },
      { dx:"Enfermedad neuromuscular", claves: "<ul><li>Retraso motor aislado con hipotonía, debilidad y reflejos disminuidos; CK (Duchenne en varones).</li></ul>" },
      { dx:"Error congénito del metabolismo", claves: "<ul><li>Regresión, crisis con infecciones, visceromegalias, hipotonía grave o rasgos toscos.</li></ul>", nodo: "ecm-regresion" }
    ],
    evidencia: ["moeschler2014"], pico: [], ateneos: [],
    conexiones: ["ne-pc", "ne-tea", "ne-west"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-pc", nivel: 2, mapa: "neurologia", titulo: "Parálisis cerebral", tipo: "concepto",
    x: 1090, y: 410,
    resumen: "Trastorno motor permanente por una lesión no progresiva del cerebro inmaduro. Se puede sospechar antes de los 6 meses.",
    teoria: [
      { h: "Cuándo sospecharla", html: "<ul><li>Factores de riesgo: prematurez, encefalopatía hipóxico-isquémica, ACV perinatal, infecciones congénitas.</li><li>Tono anormal (hipotonía axial con hipertonía de miembros), asimetría (preferencia de mano antes del año), reflejos primitivos que persisten, retraso motor.</li><li>Antes de los 5 meses corregidos: RM, evaluación de movimientos generales de Prechtl y examen de Hammersmith (HINE) detectan la mayoría.</li></ul>" },
      { h: "Tipos", html: "<p>Espástica (la más frecuente: hemiparesia, diplejía, cuadriparesia), discinética, atáxica y mixta. Se clasifica la función motora con el GMFCS (niveles I a V).</p>" },
      { h: "Qué hacer", html: "<ul><li>Intervención temprana específica, sin esperar al diagnóstico definitivo («alto riesgo de PC»).</li><li>Seguimiento de comorbilidades: epilepsia, discapacidad intelectual, visión, audición, deglución y nutrición, caderas (displasia), escoliosis, dolor y sueño.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Enfermedad neurodegenerativa o metabólica", claves: "<ul><li>Pérdida de pautas: la parálisis cerebral no progresa.</li></ul>", nodo: "ecm-regresion" },
      { dx:"Paraparesia espástica hereditaria", claves: "<ul><li>Espasticidad progresiva de los miembros inferiores sin lesión perinatal; antecedentes familiares.</li></ul>" },
      { dx:"Lesión medular", claves: "<ul><li>Nivel sensitivo, compromiso esfinteriano, miembros superiores normales.</li></ul>" },
      { dx:"Distonía que responde a levodopa", claves: "<ul><li>Distonía con fluctuación diurna (peor a la tarde), sin factores de riesgo perinatal: probar levodopa.</li></ul>" }
    ],
    evidencia: ["novak2017"], pico: [], ateneos: [],
    conexiones: ["ne-retraso"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-tea", nivel: 2, mapa: "neurologia", titulo: "Trastorno del espectro autista", corto: "TEA", tipo: "concepto",
    x: 850, y: 540,
    resumen: "Dificultades en la comunicación social y conductas restringidas o repetitivas. Pesquisa a los 18 y 24 meses; intervención sin esperar el diagnóstico.",
    teoria: [
      { h: "Señales tempranas", html: "<ul><li>Poco contacto visual, no responde al nombre, no señala para mostrar (atención conjunta), no comparte intereses.</li><li>Retraso o pérdida del lenguaje.</li><li>Movimientos repetitivos, juego poco funcional (alinear objetos), intereses restringidos, rigidez ante los cambios.</li><li>Hipo o hipersensibilidad sensorial.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Pesquisa con instrumento validado (<b>M-CHAT-R/F</b>) a los 18 y 24 meses, y siempre que haya preocupación de la familia.</li><li>Evaluar la audición.</li><li>Derivar en paralelo a evaluación diagnóstica e intervención temprana.</li><li>Estudio genético (microarray; X frágil en varones).</li><li>Atender comorbilidades: sueño, alimentación selectiva, constipación, TDAH, ansiedad, epilepsia.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Hipoacusia", claves: "<ul><li>No responde al nombre pero sí a sonidos fuera de su vista; audiometría.</li></ul>" },
      { dx:"Trastorno del lenguaje", claves: "<ul><li>Busca comunicarse con gestos y contacto visual, juego simbólico conservado.</li></ul>" },
      { dx:"Discapacidad intelectual", claves: "<ul><li>Social acorde a su nivel cognitivo global.</li></ul>", nodo: "ne-retraso" },
      { dx:"Síndrome de Rett o regresión metabólica", claves: "<ul><li>Pérdida de habilidades motoras, estereotipias de manos, microcefalia adquirida.</li></ul>", nodo: "ecm-regresion" },
      { dx:"Privación o maltrato", claves: "<ul><li>Contexto social de riesgo; mejora rápida con un entorno adecuado.</li></ul>" }
    ],
    evidencia: ["hyman2020"], pico: [], ateneos: [],
    conexiones: ["ne-tdah", "ne-retraso"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ne-tdah", nivel: 2, mapa: "neurologia", titulo: "TDAH", tipo: "concepto",
    x: 1090, y: 540,
    resumen: "Inatención, hiperactividad o impulsividad en más de un ámbito, que afectan el funcionamiento. Diagnóstico clínico con informes de la casa y la escuela.",
    teoria: [
      { h: "Diagnóstico", html: "<ul><li>Síntomas antes de los 12 años, por al menos 6 meses, en dos o más ámbitos (casa, escuela), con impacto funcional.</li><li>Cuestionarios estandarizados a padres y docentes (por ejemplo, Vanderbilt o SNAP-IV).</li><li>Descartar y buscar comorbilidades: problemas de audición o visión, trastornos del aprendizaje, ansiedad, depresión, trastornos del sueño (apnea), ausencias, situaciones de estrés o maltrato.</li></ul>" },
      { h: "Tratamiento", html: "<ul><li><b>Preescolares (4–5 años):</b> primero entrenamiento conductual para padres; fármacos solo si no alcanza.</li><li><b>Desde los 6 años:</b> estimulantes (metilfenidato) junto con intervenciones conductuales y apoyos escolares.</li><li>Antes de iniciar, preguntar por síntomas cardíacos y antecedentes de muerte súbita.</li><li>Controlar peso, talla, presión y frecuencia cardíaca.</li></ul>" }
    ],
    diferenciales: [
      { dx:"Trastornos del aprendizaje", claves: "<ul><li>Dificultad en un área específica (lectura, cálculo) sin síntomas fuera de la escuela.</li></ul>" },
      { dx:"Problemas de sueño (apnea obstructiva)", claves: "<ul><li>Ronquido, pausas respiratorias, somnolencia diurna.</li></ul>" },
      { dx:"Ansiedad o depresión", claves: "<ul><li>Inicio reciente, preocupaciones, ánimo bajo, cambios en el apetito.</li></ul>" },
      { dx:"Ausencias", claves: "<ul><li>Desconexiones breves que no se cortan al llamarlo; hiperventilar las provoca.</li></ul>", nodo: "ne-ausencias" },
      { dx:"Hipoacusia o déficit visual", claves: "<ul><li>Parece no prestar atención porque no oye o no ve bien.</li></ul>" }
    ],
    evidencia: ["wolraich2019"], pico: [], ateneos: [],
    conexiones: ["ne-tea", "ne-ausencias"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  /* ───── Metabolismo › Errores congénitos ───── */
  {
    id: "ecm-abordaje", nivel: 1, mapa: "ecm", titulo: "Cómo pensar un error congénito", corto: "Abordaje", tipo: "tema", edad: "El punto de partida", color: "var(--metab)",
    x: 600, y: 125,
    resumen: "Son raros uno a uno, pero frecuentes en conjunto. La clave es pensarlos: ante un chico que se descompensa sin explicación, pedir amonio, gases, glucemia, cetonas y lactato.",
    teoria: [
      { h: "Tres grupos según qué falla", html: "<div class=\"tabla\"><table><thead><tr><th>Grupo</th><th>Qué pasa</th><th>Cómo se presenta</th></tr></thead><tbody><tr><td><b>1 · Intoxicación</b></td><td>Se acumula un compuesto tóxico antes del bloqueo (aminoácidos, ácidos orgánicos, amonio, azúcares)</td><td>Intervalo libre, después descompensación aguda o recurrente, ligada a la ingesta, el ayuno o las infecciones. Muchas son tratables con dieta y depuración</td></tr><tr><td><b>2 · Déficit energético</b></td><td>Falta energía en hígado, músculo, corazón o cerebro</td><td>Hipoglucemia, acidosis láctica, miocardiopatía, hipotonía, falla multiorgánica; a veces desde el nacimiento</td></tr><tr><td><b>3 · Moléculas complejas</b></td><td>No se arman o no se degradan moléculas grandes (lisosoma, peroxisoma, glicosilación)</td><td>Síntomas progresivos y permanentes, sin relación con la comida; dismorfias, visceromegalias, regresión</td></tr></tbody></table></div>" },
      { h: "Cuándo sospecharlos", html: "<ul><li>Recién nacido sano que se deteriora después de unas horas o días (<a href=\"#ecm-neonato\">cuadro «séptico»</a>).</li><li>Descompensaciones con el ayuno, las infecciones o un cambio de dieta.</li><li><a href=\"#ecm-hipoglucemia\">Hipoglucemia</a>, <a href=\"#ecm-hiperamonemia\">hiperamonemia</a>, <a href=\"#ecm-acidosis\">acidosis con anión gap alto</a> o lactato alto sin causa clara.</li><li>Encefalopatía, ataxia o convulsiones recurrentes o refractarias; <a href=\"#ecm-regresion\">pérdida de pautas</a>.</li><li>Hepatomegalia, esplenomegalia, miocardiopatía, cataratas, luxación del cristalino.</li><li>Consanguinidad, hermanos muertos sin diagnóstico, olor raro.</li></ul>" },
      { h: "Regla de oro", html: "<p>Lo tratable primero: hipoglucemia, hiperamonemia, acidemias orgánicas, galactosemia, defectos de β-oxidación y epilepsias dependientes de vitaminas tienen tratamiento que cambia el pronóstico si empieza en horas. <b>Guardar plasma y orina de la crisis</b> antes de corregir.</p>" }
    ],
    diferenciales: [],
    evidencia: ["saudubray2022", "saudubray2018"], pico: [], ateneos: [],
    casos: [
      { titulo: "Recién nacido de 4 días con apneas", html: "<p>Término, alta a las 48 horas. Al cuarto día deja de comer, está hipotónico y tiene apneas. Hemograma normal, PCR negativa. Gases: pH 7,49, pCO₂ 28.</p><p><b>Cómo pensarlo:</b> alcalosis respiratoria en un recién nacido encefalopático es la pista de la hiperamonemia. El amonio vuelve en 950 µmol/L: ciclo de la urea hasta demostrar lo contrario. Suspender proteínas, glucosa en dosis altas, depuradores y preparar la diálisis.</p>", nodos: ["ecm-hiperamonemia", "ecm-urea", "ecm-emergencia"] },
      { titulo: "Lactante de 6 meses: ictericia y vómitos al pasar a fórmula", html: "<p>Con leche materna estaba bien; al incorporar puré de frutas empieza con vómitos, rechazo del alimento, hepatomegalia y tiempo de protrombina prolongado.</p><p><b>Cómo pensarlo:</b> la relación con la fruta (fructosa y sacarosa) orienta a intolerancia hereditaria a la fructosa; si hubiera empezado con la leche en la primera semana, galactosemia o tirosinemia.</p>", nodos: ["ecm-ihf", "ecm-galactosemia", "ecm-tirosinemia"] }
    ],
    conexiones: ["ecm-neonato", "ecm-laboratorio", "ecm-emergencia", "ecm-hipoglucemia", "ecm-hiperamonemia", "ecm-acidosis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-neonato", nivel: 1, mapa: "ecm", titulo: "El recién nacido que se descompensa", corto: "Recién nacido grave", tipo: "concepto",
    x: 520, y: 210,
    resumen: "Nace bien, se deteriora a las horas o días: rechazo del alimento, vómitos, letargo, hipotonía, apneas, convulsiones. Parece sepsis.",
    teoria: [
      { h: "Patrones", html: "<ul><li><b>Encefalopatía con intervalo libre</b> (grupo 1): ciclo de la urea, acidemias orgánicas, jarabe de arce.</li><li><b>Hipoglucemia y hepatopatía</b>: galactosemia, tirosinemia, glucogenosis, defectos de β-oxidación, hiperinsulinismo.</li><li><b>Acidosis láctica y falla multiorgánica desde el nacimiento</b> (grupo 2): mitocondriales, piruvato carboxilasa o PDH.</li><li><b>Convulsiones refractarias</b>: dependencia de piridoxina, hiperglicinemia no cetósica, déficit de sulfito oxidasa o de cofactor de molibdeno.</li><li><b>Hipotonía grave y dismorfias</b> (grupo 3): Zellweger, CDG.</li></ul>" },
      { h: "Qué hacer en la primera hora", html: "<ul><li>Tratar como sepsis (cultivos y antibióticos), pero pedir a la vez amonio, gases, anión gap, glucemia, lactato, cetonas en orina, función hepática y coagulación.</li><li>Guardar plasma, orina y gota seca de la crisis.</li><li>Si hay hiperamonemia o acidosis grave: suspender proteínas y <a href=\"#ecm-emergencia\">tratamiento de urgencia</a>; contactar al centro de metabolismo.</li></ul>" }
    ],
    diferenciales: [
      { dx: "Sepsis neonatal", claves: "<ul><li>Factores de riesgo perinatales (rotura prolongada de membranas, fiebre materna, estreptococo B).</li><li>Leucocitosis o leucopenia, PCR alta, hemocultivo positivo.</li><li>El amonio puede subir algo, pero rara vez por encima de 150–200 µmol/L.</li></ul>" },
      { dx: "Cardiopatía dependiente del ductus", nodo: "cc-ductus", claves: "<ul><li>Shock en la primera o segunda semana con pulsos femorales débiles, soplo o cianosis.</li><li>Acidosis láctica por bajo gasto, sin hiperamonemia.</li><li>Mejora con prostaglandina.</li></ul>" },
      { dx: "Encefalopatía hipóxico-isquémica", claves: "<ul><li>Síntomas desde el nacimiento, sin intervalo libre.</li><li>Antecedente de asfixia: Apgar bajo, acidosis en cordón, falla multiorgánica temprana.</li></ul>" },
      { dx: "Hemorragia intracraneana o maltrato", claves: "<ul><li>Fontanela abombada, signos focales, anemia.</li><li>Ecografía transfontanelar o TC.</li></ul>" }
    ],
    evidencia: ["saudubray2022", "haberle2019"], pico: [], ateneos: [],
    conexiones: ["ecm-laboratorio", "ecm-hiperamonemia", "ecm-emergencia"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-laboratorio", nivel: 1, mapa: "ecm", titulo: "Estudios de primera línea", corto: "Primeros estudios", tipo: "concepto",
    x: 680, y: 210,
    resumen: "Amonio, gases con anión gap, glucemia, lactato, cetonas y función hepática orientan en minutos. Aminoácidos, ácidos orgánicos y acilcarnitinas confirman.",
    teoria: [
      { h: "En la urgencia", html: "<div class=\"tabla\"><table><thead><tr><th>Estudio</th><th>Qué orienta</th></tr></thead><tbody><tr><td>Amonio (muestra sin torniquete, en hielo, procesar ya)</td><td>Ciclo de la urea, acidemias orgánicas, hiperinsulinismo-hiperamonemia</td></tr><tr><td>Gases y anión gap</td><td>Acidosis con anión gap alto: orgánicas, láctica, cetósica. Alcalosis respiratoria: hiperamonemia</td></tr><tr><td>Glucemia y cetonas (sangre u orina)</td><td>Hipoglucemia sin cetonas: hiperinsulinismo, β-oxidación. Cetosis en un recién nacido: siempre anormal</td></tr><tr><td>Lactato (y piruvato)</td><td>Mitocondriales, PDH, PC, glucogenosis I, gluconeogénesis</td></tr><tr><td>Hepatograma, coagulación, CK, ácido úrico, hemograma</td><td>Hepatopatía, rabdomiólisis, glucogenosis, neutropenia de las orgánicas</td></tr></tbody></table></div>" },
      { h: "Estudios específicos", html: "<ul><li><b>Aminoácidos en plasma:</b> PKU, MSUD, ciclo de la urea, tirosinemia, homocistinuria.</li><li><b>Ácidos orgánicos en orina:</b> propiónica, metilmalónica, isovalérica, glutárica, succinilacetona.</li><li><b>Acilcarnitinas y carnitina:</b> defectos de β-oxidación y acidemias orgánicas.</li><li>Según la sospecha: ácido orótico en orina, galactosa-1-P, transferrina (CDG), ácidos grasos de cadena muy larga, enzimas lisosomales, panel genético o exoma.</li></ul>" }
    ],
    diferenciales: [],
    evidencia: ["saudubray2022", "thornton2015"], pico: [], ateneos: [],
    conexiones: ["ecm-hipoglucemia", "ecm-hiperamonemia", "ecm-acidosis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-emergencia", nivel: 1, mapa: "ecm", titulo: "Tratamiento de urgencia", corto: "Urgencia metabólica", tipo: "concepto",
    x: 520, y: 290,
    resumen: "Frenar el catabolismo con glucosa en dosis altas, sacar lo tóxico de la dieta, depurar y dar cofactores. Sin esperar el diagnóstico definitivo.",
    teoria: [
      { h: "Pasos", html: "<ol><li><b>Suspender proteínas</b> (y galactosa o fructosa si se sospechan) por 24–48 horas.</li><li><b>Glucosa IV</b> que aporte 8–10 mg/kg/min en lactantes (más en recién nacidos), con electrolitos; insulina si hay hiperglucemia. No usar lípidos si se sospecha un defecto de β-oxidación.</li><li><b>Hiperamonemia:</b> benzoato de sodio y fenilbutirato de sodio, arginina; ácido carglúmico si se sospecha NAGS o acidemia orgánica. Hemodiálisis si el amonio es muy alto o no baja en pocas horas.</li><li><b>Cofactores de prueba:</b> hidroxocobalamina, biotina, tiamina, piridoxina; carnitina en acidemias orgánicas.</li><li>Corregir acidosis, deshidratación e infección; evitar soluciones hipotónicas.</li><li>Reintroducir proteínas en 24–48 horas para evitar el catabolismo.</li></ol><p class=\"nota\">Dosis y protocolos: verificar con el centro de metabolismo y el vademécum institucional.</p>" },
      { h: "Plan para la casa", html: "<p>Todo paciente con un error congénito descompensable necesita una <b>carta de emergencia</b> con el diagnóstico, qué hacer en la guardia y el contacto del equipo, y un plan de «dieta de enfermedad» para las infecciones.</p>" }
    ],
    diferenciales: [],
    evidencia: ["haberle2019", "forny2021", "saudubray2022"], pico: [], ateneos: [],
    conexiones: ["ecm-hiperamonemia", "ecm-urea", "ecm-pa-mma"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-pesquisa", nivel: 2, mapa: "ecm", titulo: "Pesquisa neonatal", tipo: "concepto",
    x: 680, y: 290,
    resumen: "Detecta antes de los síntomas varias enfermedades tratables. Un resultado normal no descarta: si la clínica sugiere, estudiar igual.",
    teoria: [
      { h: "Qué detecta", html: "<p>En la Argentina la ley obliga a pesquisar fenilcetonuria, hipotiroidismo congénito, galactosemia, hiperplasia suprarrenal, fibrosis quística, déficit de biotinidasa y otras según la jurisdicción. Con espectrometría de masas en tándem se suman aminoacidopatías, acidemias orgánicas y defectos de β-oxidación.</p>" },
      { h: "Cómo usarla", html: "<ul><li>Tomar la muestra entre las 36 horas y el quinto día (antes, con alimentación escasa, aumentan los falsos negativos).</li><li>Un resultado alterado es urgente: algunos bebés ya están enfermos cuando llega (MSUD, acidemias orgánicas, galactosemia).</li><li>Muchas enfermedades no están en el panel o pueden dar falsos negativos: la clínica manda.</li></ul>" }
    ],
    diferenciales: [],
    evidencia: ["saudubray2022"], pico: [], ateneos: [],
    conexiones: ["ecm-pku", "ecm-galactosemia", "ecm-mcad"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Pistas */
  {
    id: "ecm-hipoglucemia", nivel: 1, mapa: "ecm", titulo: "Hipoglucemia: ¿hay cetonas?", corto: "Hipoglucemia", tipo: "concepto",
    x: 530, y: 420,
    resumen: "La muestra crítica durante la hipoglucemia y una pregunta ordenan todo: si hay cetonas o no, y si hay hepatomegalia.",
    teoria: [
      { h: "Muestra crítica", html: "<p>Antes de corregir: glucosa, β-hidroxibutirato, ácidos grasos libres, insulina, péptido C, cortisol, GH, lactato, amonio, acilcarnitinas, aminoácidos; primera orina para ácidos orgánicos y cetonas.</p>" },
      { h: "Cómo se ordena", html: "<div class=\"tabla\"><table><thead><tr><th>Patrón</th><th>Pensar en</th></tr></thead><tbody><tr><td>Sin cetonas, ácidos grasos bajos</td><td><a href=\"#ecm-hiperinsulinismo\">Hiperinsulinismo</a></td></tr><tr><td>Sin cetonas, ácidos grasos altos</td><td><a href=\"#ecm-mcad\">MCAD</a> y otros <a href=\"#ecm-lcfaod\">defectos de β-oxidación</a> o de cetogénesis</td></tr><tr><td>Con cetonas, hepatomegalia, lactato alto</td><td><a href=\"#ecm-gsd1\">Glucogenosis I</a>, defectos de gluconeogénesis</td></tr><tr><td>Con cetonas, hepatomegalia, CK y transaminasas altas</td><td><a href=\"#ecm-gsd-otras\">Glucogenosis III, VI, IX</a></td></tr><tr><td>Con cetonas, sin hepatomegalia, niño delgado de 1–5 años</td><td>Hipoglucemia cetósica idiopática (diagnóstico de exclusión), déficit de cortisol o GH</td></tr><tr><td>Con hepatopatía tras introducir un azúcar</td><td><a href=\"#ecm-galactosemia\">Galactosemia</a>, <a href=\"#ecm-ihf\">intolerancia a la fructosa</a></td></tr></tbody></table></div>" }
    ],
    diferenciales: [
      { dx: "Hipoglucemia cetósica idiopática", claves: "<ul><li>La causa más frecuente entre los 18 meses y 5 años: niño delgado, a la mañana después de un ayuno o con una infección.</li><li>Cetonas altas, sin hepatomegalia, examen normal.</li><li>Diagnóstico de exclusión: si se repite, estudiar.</li></ul>" },
      { dx: "Hiperinsulinismo", nodo: "ecm-hiperinsulinismo", claves: "<ul><li>Sin cetonas y con ácidos grasos bajos; insulina detectable durante la hipoglucemia.</li><li>Necesita mucha glucosa (más de 8–10 mg/kg/min) para sostenerse.</li><li>Respuesta al glucagón con suba de la glucemia.</li></ul>" },
      { dx: "Defecto de β-oxidación", nodo: "ecm-mcad", claves: "<ul><li>Sin cetonas con ácidos grasos altos (cociente ácidos grasos/β-hidroxibutirato alto).</li><li>Tras un ayuno prolongado o una infección.</li><li>Acilcarnitinas alteradas; a veces hiperamonemia leve y hepatomegalia.</li></ul>" },
      { dx: "Déficit hormonal (cortisol, GH)", claves: "<ul><li>Micropene, ictericia prolongada, defectos de línea media (hipopituitarismo).</li><li>Hiperpigmentación, hiponatremia e hiperpotasemia (insuficiencia suprarrenal).</li><li>Cortisol y GH bajos en la muestra crítica.</li></ul>" },
      { dx: "Intoxicación", claves: "<ul><li>Alcohol, sulfonilureas, betabloqueantes, insulina ajena.</li><li>Inicio brusco en un niño sano; insulina alta con péptido C bajo sugiere insulina exógena.</li></ul>" }
    ],
    evidencia: ["thornton2015", "saudubray2022"], pico: [], ateneos: [],
    conexiones: ["ecm-hiperinsulinismo", "ecm-mcad", "ecm-gsd1", "ecm-gsd-otras"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-hiperamonemia", nivel: 1, mapa: "ecm", titulo: "Hiperamonemia", tipo: "concepto",
    x: 680, y: 420,
    resumen: "Medir amonio en toda encefalopatía sin causa clara. Con alcalosis respiratoria y sin cetosis, ciclo de la urea; con acidosis y cetosis, acidemia orgánica.",
    teoria: [
      { h: "Valores", html: "<p>Normal: menos de 50 µmol/L (hasta 100–110 en recién nacidos). Por encima de 150–200 en un neonato, o de 100 después, buscar la causa. La muestra debe ser de flujo libre, en hielo y procesada enseguida: si no, da falsamente alto.</p>" },
      { h: "Cómo orientarse", html: "<div class=\"tabla\"><table><thead><tr><th>Hallazgos</th><th>Pensar en</th></tr></thead><tbody><tr><td>Alcalosis respiratoria, sin cetosis, glucemia normal</td><td><a href=\"#ecm-urea\">Ciclo de la urea</a> (citrulina y ácido orótico ordenan cuál)</td></tr><tr><td>Acidosis con anión gap alto, cetosis, neutropenia</td><td><a href=\"#ecm-pa-mma\">Acidemias orgánicas</a></td></tr><tr><td>Hipoglucemia sin cetonas, hepatomegalia</td><td><a href=\"#ecm-lcfaod\">Defectos de β-oxidación</a></td></tr><tr><td>Hipoglucemia con amonio moderadamente alto y estable</td><td>Hiperinsulinismo-hiperamonemia (GDH)</td></tr><tr><td>Falla hepática</td><td>Tirosinemia, galactosemia, mitocondriales, infecciones</td></tr></tbody></table></div>" },
      { h: "Qué hacer", html: "<p>Es una urgencia neurológica: el pronóstico depende de cuánto tiempo y cuán alto estuvo. Ver <a href=\"#ecm-emergencia\">tratamiento de urgencia</a>; diálisis si no baja rápido.</p>" }
    ],
    diferenciales: [
      { dx: "Muestra mal tomada", claves: "<ul><li>Torniquete prolongado, sangre hemolizada, demora en procesar.</li><li>Paciente que está bien: repetir bien tomada antes de actuar.</li></ul>" },
      { dx: "Hiperamonemia transitoria del recién nacido", claves: "<ul><li>Prematuros, a menudo con dificultad respiratoria en las primeras 24 horas.</li><li>Síntomas antes de iniciar la alimentación, sin intervalo libre.</li></ul>" },
      { dx: "Falla hepática", claves: "<ul><li>Coagulopatía grave, ictericia, transaminasas muy altas.</li><li>Infecciones (herpes neonatal, enterovirus), tóxicos, hepatopatías metabólicas.</li></ul>" },
      { dx: "Fármacos", claves: "<ul><li>Valproato (sobre todo con déficit de carnitina o defectos del ciclo de la urea subyacentes), quimioterápicos (asparaginasa).</li></ul>" },
      { dx: "Infección urinaria por gérmenes productores de ureasa", claves: "<ul><li>Uropatía obstructiva o vejiga neurogénica con Proteus.</li></ul>" }
    ],
    evidencia: ["haberle2019"], pico: [], ateneos: [],
    conexiones: ["ecm-urea", "ecm-pa-mma", "ecm-emergencia"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-acidosis", nivel: 1, mapa: "ecm", titulo: "Acidosis metabólica con anión gap alto", corto: "Acidosis con anión gap", tipo: "concepto",
    x: 530, y: 510,
    resumen: "Lo frecuente primero (deshidratación, cetoacidosis diabética, intoxicación, sepsis); si no cierra, cetonas, lactato y amonio separan las causas metabólicas.",
    teoria: [
      { h: "Ordenar por el anión que sobra", html: "<ul><li><b>Cetonas muy altas:</b> cetoacidosis diabética, ayuno, acidemias orgánicas (propiónica, metilmalónica, isovalérica), MSUD, defectos de cetólisis.</li><li><b>Lactato alto:</b> hipoperfusión o hipoxia; si la perfusión es buena: mitocondriales, PDH, PC, glucogenosis I, gluconeogénesis.</li><li><b>Ni cetonas ni lactato que lo expliquen:</b> ácidos orgánicos (pedir en orina), tóxicos (metanol, etilenglicol, salicilatos), insuficiencia renal.</li></ul>" },
      { h: "Pistas metabólicas", html: "<p>Cetosis en un recién nacido, acidosis desproporcionada a la enfermedad, recurrencia con cada infección, olor raro, neutropenia o trombocitopenia, hiperamonemia asociada.</p>" }
    ],
    diferenciales: [
      { dx: "Cetoacidosis diabética", claves: "<ul><li>Hiperglucemia y glucosuria; poliuria y polidipsia previas.</li><li>Las acidemias orgánicas también pueden dar hiperglucemia transitoria: si la cetosis es desproporcionada o hay hiperamonemia, pensar en ellas.</li></ul>" },
      { dx: "Deshidratación por gastroenteritis o ayuno", claves: "<ul><li>Pérdidas evidentes, mejora rápida con hidratación y glucosa.</li><li>Si la acidosis no mejora con el tratamiento o se repite, estudiar.</li></ul>" },
      { dx: "Intoxicación", claves: "<ul><li>Salicilatos (alcalosis respiratoria asociada, acúfenos), metanol, etilenglicol (gap osmolar alto).</li></ul>" },
      { dx: "Acidemia orgánica", nodo: "ecm-pa-mma", claves: "<ul><li>Cetosis desproporcionada, hiperamonemia, neutropenia y plaquetopenia.</li><li>Ácidos orgánicos en orina y acilcarnitinas diagnósticos.</li></ul>" },
      { dx: "Acidosis láctica primaria", nodo: "ecm-mito", claves: "<ul><li>Lactato alto con buena perfusión, en reposo, que no baja.</li><li>Compromiso de varios órganos (cerebro, corazón, músculo, hígado, riñón).</li></ul>" }
    ],
    evidencia: ["saudubray2022", "forny2021"], pico: [], ateneos: [],
    conexiones: ["ecm-pa-mma", "ecm-mito", "ecm-msud"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-hepatopatia", nivel: 2, mapa: "ecm", titulo: "Hepatopatía en el lactante", corto: "Hepatopatía", tipo: "concepto",
    x: 680, y: 510,
    resumen: "Falla hepática con coagulopatía, ictericia o hepatomegalia en los primeros meses: galactosemia, tirosinemia, intolerancia a la fructosa y mitocondriales encabezan la lista metabólica.",
    teoria: [
      { h: "Según la edad y la dieta", html: "<ul><li><b>Primera semana, con leche:</b> <a href=\"#ecm-galactosemia\">galactosemia</a> (cataratas, sepsis por E. coli).</li><li><b>Semanas a meses, coagulopatía desproporcionada:</b> <a href=\"#ecm-tirosinemia\">tirosinemia I</a>.</li><li><b>Al introducir fruta o sacarosa:</b> <a href=\"#ecm-ihf\">intolerancia a la fructosa</a>.</li><li><b>Con lactato alto y compromiso neurológico:</b> <a href=\"#ecm-mito\">mitocondriales</a> (depleción de ADN mitocondrial).</li><li><b>Colestasis con esplenomegalia:</b> <a href=\"#ecm-npc\">Niemann-Pick C</a>.</li><li><b>Hepatomegalia sin falla:</b> glucogenosis.</li></ul>" }
    ],
    diferenciales: [
      { dx: "Infecciones congénitas o adquiridas", claves: "<ul><li>Herpes simple neonatal (vesículas, falla hepática con transaminasas muy altas), CMV, enterovirus, sepsis.</li></ul>" },
      { dx: "Atresia de vías biliares", claves: "<ul><li>Ictericia que persiste más de 2 semanas con bilirrubina directa alta, acolia y coluria.</li><li>Buen estado general al principio; no hay falla de síntesis temprana.</li></ul>" },
      { dx: "Hemocromatosis neonatal (aloinmune)", claves: "<ul><li>Falla hepática desde el nacimiento o in utero, ferritina muy alta, depósitos de hierro extrahepáticos.</li></ul>" },
      { dx: "Linfohistiocitosis hemofagocítica", claves: "<ul><li>Fiebre, citopenias, hipertrigliceridemia, ferritina muy alta, fibrinógeno bajo.</li></ul>" }
    ],
    evidencia: ["saudubray2022"], pico: [], ateneos: [],
    conexiones: ["ecm-galactosemia", "ecm-tirosinemia", "ecm-ihf"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-regresion", nivel: 2, mapa: "ecm", titulo: "Regresión neurológica", corto: "Pérdida de pautas", tipo: "concepto",
    x: 605, y: 590,
    resumen: "Perder lo adquirido nunca es normal. Pensar en enfermedades lisosomales, peroxisomales y mitocondriales; muchas tienen tratamiento si se detectan temprano.",
    teoria: [
      { h: "Pistas que orientan", html: "<ul><li><b>Visceromegalias, facies tosca, disostosis:</b> lisosomales (<a href=\"#ecm-mps\">MPS</a>, <a href=\"#ecm-gaucher\">Gaucher</a>, <a href=\"#ecm-npc\">NPC</a>).</li><li><b>Leucodistrofia en la RM:</b> <a href=\"#ecm-xald\">X-ALD</a>, leucodistrofia metacromática, Krabbe.</li><li><b>Regresión en escalones con infecciones, lactato alto, ganglios basales:</b> <a href=\"#ecm-mito\">mitocondriales</a> (Leigh), <a href=\"#ecm-glutarica\">glutárica tipo 1</a>.</li><li><b>Mancha rojo cereza:</b> gangliosidosis, Niemann-Pick, sialidosis.</li><li><b>Parálisis de la mirada vertical:</b> NPC.</li><li><b>Convulsiones mioclónicas con pérdida visual:</b> lipofuscinosis ceroideas.</li></ul>" },
      { h: "Estudios", html: "<p>RM con espectroscopía, fondo de ojo, audición, EEG; lactato, amonio, aminoácidos, ácidos orgánicos, ácidos grasos de cadena muy larga, enzimas lisosomales; exoma o panel según el cuadro.</p>" }
    ],
    diferenciales: [
      { dx: "Síndrome de Rett", claves: "<ul><li>Niña con desarrollo inicial normal, regresión entre los 6 y 18 meses, pérdida del uso de las manos con estereotipias (lavado de manos), desaceleración del perímetro cefálico.</li></ul>" },
      { dx: "Trastorno del espectro autista con regresión", nodo: "ne-tea", claves: "<ul><li>Pérdida del lenguaje y del contacto social entre los 15 y 24 meses, sin pérdida motora ni signos neurológicos.</li></ul>" },
      { dx: "Encefalopatía epiléptica", nodo: "ne-west", claves: "<ul><li>Regresión asociada a convulsiones frecuentes (espasmos, Landau-Kleffner con pérdida del lenguaje).</li></ul>" },
      { dx: "Tumor o hidrocefalia", claves: "<ul><li>Signos de hipertensión endocraneana, foco, aumento del perímetro cefálico: neuroimagen urgente.</li></ul>" },
      { dx: "Déficit de B12 en el lactante", claves: "<ul><li>Lactante amamantado por madre vegetariana o con anemia perniciosa: hipotonía, regresión, anemia macrocítica. Tratable.</li></ul>" }
    ],
    evidencia: ["saudubray2022"], pico: [], ateneos: [],
    conexiones: ["ecm-mps", "ecm-xald", "ecm-mito", "ecm-npc"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Grupo 1 · Intoxicación */
  {
    id: "ecm-pku", nivel: 1, mapa: "ecm", titulo: "Fenilcetonuria", corto: "Fenilcetonuria (PKU)", tipo: "concepto", causa: "intoxicacion",
    x: 110, y: 130,
    resumen: "Déficit de fenilalanina hidroxilasa. Sin tratamiento, discapacidad intelectual; con pesquisa y dieta desde las primeras semanas, desarrollo normal.",
    teoria: [
      { h: "Qué pasa", html: "<p>La fenilalanina no se convierte en tirosina y se acumula; es tóxica para el cerebro en desarrollo. No da descompensaciones agudas: el daño es lento y silencioso.</p>" },
      { h: "Sin tratamiento", html: "<ul><li>Discapacidad intelectual, convulsiones, problemas de conducta, microcefalia.</li><li>Piel y pelo claros, eccema, olor «a ratón».</li></ul>" },
      { h: "Tratamiento", html: "<ul><li>Dieta restringida en fenilalanina con fórmula especial sin fenilalanina, de por vida.</li><li>Meta: 120–360 µmol/L hasta los 12 años; probar respuesta a sapropterina (BH4).</li><li><b>Fenilcetonuria materna:</b> la fenilalanina alta en el embarazo daña al feto (microcefalia, cardiopatía): control estricto antes de concebir.</li></ul>" }
    ],
    diferenciales: [
      { dx: "Hiperfenilalaninemia leve", claves: "<ul><li>Fenilalanina menor de 360 µmol/L sin tratamiento: en general no requiere dieta, solo seguimiento.</li></ul>" },
      { dx: "Defectos de síntesis o reciclado de BH4", claves: "<ul><li>Fenilalanina alta con deterioro neurológico pese a la dieta (distonía, convulsiones), porque también faltan dopamina y serotonina.</li><li>Pterinas en orina y actividad de DHPR en todo recién nacido con fenilalanina alta.</li></ul>" },
      { dx: "Tirosinemia transitoria del recién nacido", claves: "<ul><li>Prematuros: tirosina alta (y a veces fenilalanina), se resuelve sola.</li></ul>" }
    ],
    evidencia: ["vanwegberg2017"], pico: [], ateneos: [],
    conexiones: ["ecm-pesquisa", "ecm-tirosinemia"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-msud", nivel: 1, mapa: "ecm", titulo: "Enfermedad de la orina con olor a jarabe de arce", corto: "Jarabe de arce (MSUD)", tipo: "concepto", causa: "intoxicacion",
    x: 320, y: 130,
    resumen: "Déficit de la deshidrogenasa de cetoácidos ramificados. Recién nacido con encefalopatía, cetosis, olor dulce y movimientos de «boxeo» o pedaleo, con amonio normal.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Forma clásica: entre el día 4 y 7, rechazo del alimento, letargo, alternancia de hipotonía e hipertonía, movimientos estereotipados de boxeo o pedaleo, edema cerebral.</li><li>Olor a jarabe de arce o azúcar quemada en orina y cerumen.</li><li>Cetosis; amonio normal o apenas alto; la leucina muy alta es la tóxica.</li><li>Formas intermitentes: ataxia y encefalopatía con las infecciones.</li></ul>" },
      { h: "Tratamiento", html: "<p>Urgencia: bajar la leucina con anabolismo intenso (glucosa e insulina, fórmula sin aminoácidos ramificados, suplementar isoleucina y valina) y diálisis si es muy alta. Vigilar edema cerebral e hiponatremia. A largo plazo, dieta; el trasplante hepático evita las crisis.</p>" }
    ],
    diferenciales: [
      { dx: "Sepsis o meningitis neonatal", nodo: "ne-meningitis", claves: "<ul><li>Fiebre o hipotermia, LCR inflamatorio, cultivos positivos; sin olor característico ni cetosis marcada.</li></ul>" },
      { dx: "Acidemias orgánicas", nodo: "ecm-pa-mma", claves: "<ul><li>Acidosis más intensa, hiperamonemia y citopenias.</li><li>En MSUD la acidosis es moderada y el amonio suele ser normal.</li></ul>" },
      { dx: "Encefalopatía epiléptica neonatal", claves: "<ul><li>Convulsiones como síntoma principal, EEG con patrón de brote-supresión; aminoácidos normales.</li></ul>" }
    ],
    evidencia: ["strauss2020"], pico: [], ateneos: [],
    conexiones: ["ecm-pa-mma", "ecm-isovalerica", "ecm-acidosis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-pa-mma", nivel: 1, mapa: "ecm", titulo: "Acidemias propiónica y metilmalónica", corto: "Propiónica y metilmalónica", tipo: "concepto", causa: "intoxicacion",
    x: 110, y: 220,
    resumen: "Bloqueos en la vía del propionato. Recién nacido con vómitos, letargo, acidosis con cetosis intensa, hiperamonemia y citopenias.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li><b>Neonatal:</b> tras un intervalo libre, rechazo del alimento, vómitos, letargo, coma; acidosis con anión gap alto, cetonuria, hiperamonemia, neutropenia y plaquetopenia, hiperlactacidemia.</li><li><b>Tardía:</b> crisis con las infecciones, retraso de crecimiento, vómitos crónicos, hipotonía.</li><li><b>Complicaciones:</b> lesión de ganglios basales, pancreatitis, miocardiopatía y QT largo (propiónica), insuficiencia renal (metilmalónica).</li></ul>" },
      { h: "Diagnóstico y tratamiento", html: "<ul><li>Ácidos orgánicos en orina (metilcitrato, 3-hidroxipropionato, ácido metilmalónico) y acilcarnitinas (propionilcarnitina C3 alta).</li><li>Urgencia: anabolismo, suspender proteínas, carnitina, ácido carglúmico para la hiperamonemia, <b>hidroxocobalamina de prueba</b> (algunas metilmalónicas responden), diálisis si no mejora.</li><li>Crónico: dieta pobre en precursores, carnitina, metronidazol intermitente (baja el propionato de las bacterias intestinales), trasplante hepático o hepatorrenal en casos seleccionados.</li></ul><p class=\"nota\">Verificar dosis con el centro de metabolismo.</p>" }
    ],
    diferenciales: [
      { dx: "Defectos del ciclo de la urea", nodo: "ecm-urea", claves: "<ul><li>Hiperamonemia con alcalosis respiratoria, sin acidosis ni cetosis marcada; hemograma normal.</li></ul>" },
      { dx: "Déficit de B12 o defectos de cobalamina", claves: "<ul><li>Ácido metilmalónico alto <b>con homocisteína alta</b> y anemia megaloblástica: déficit nutricional (madre vegana) o defectos de cobalamina C.</li></ul>" },
      { dx: "Déficit de holocarboxilasa o biotinidasa", nodo: "ecm-vitaminas", claves: "<ul><li>Varias carboxilasas a la vez: acidosis láctica más ácidos orgánicos múltiples, alopecia, dermatitis; responde a biotina.</li></ul>" },
      { dx: "Sepsis con acidosis", claves: "<ul><li>Cetosis menos marcada; amonio normal o poco alto; mejora con el tratamiento de la infección.</li></ul>" }
    ],
    evidencia: ["forny2021"], pico: [], ateneos: [],
    conexiones: ["ecm-urea", "ecm-isovalerica", "ecm-vitaminas", "ecm-emergencia"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-isovalerica", nivel: 3, mapa: "ecm", titulo: "Acidemia isovalérica", corto: "Isovalérica", tipo: "concepto", causa: "intoxicacion",
    x: 320, y: 220,
    resumen: "Bloqueo en la degradación de la leucina. Igual que las otras acidemias orgánicas, con un dato clave: olor a «pies sudados».",
    teoria: [
      { h: "Cómo se presenta", html: "<p>Neonatal grave o crisis intermitentes con las infecciones: vómitos, letargo, acidosis con cetosis, hiperamonemia, citopenias. Olor característico a pies sudados o queso. Isovalerilglicina en orina y C5 en acilcarnitinas.</p>" },
      { h: "Tratamiento", html: "<p>Dieta pobre en leucina, glicina y carnitina (forman conjugados que se eliminan por orina). Con tratamiento, buen pronóstico.</p>" }
    ],
    diferenciales: [
      { dx: "Acidemias propiónica y metilmalónica", nodo: "ecm-pa-mma", claves: "<ul><li>Cuadro similar sin el olor; el perfil de ácidos orgánicos y acilcarnitinas (C3 en vez de C5) los separa.</li></ul>" },
      { dx: "Acidemia glutárica tipo 2", claves: "<ul><li>También huele a pies sudados, pero con hipoglucemia hipocetósica y defecto múltiple de acil-CoA deshidrogenasas.</li></ul>" }
    ],
    evidencia: ["saudubray2022"], pico: [], ateneos: [],
    conexiones: ["ecm-msud"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-urea", nivel: 1, mapa: "ecm", titulo: "Defectos del ciclo de la urea", corto: "Ciclo de la urea", tipo: "concepto", causa: "intoxicacion",
    x: 110, y: 310,
    resumen: "El amonio no se transforma en urea. Recién nacido encefalopático con alcalosis respiratoria, o crisis de vómitos, ataxia y conducta rara con las proteínas.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li><b>Neonatal:</b> a las 24–72 horas, rechazo del alimento, vómitos, letargo, hiperventilación con alcalosis respiratoria, convulsiones, coma.</li><li><b>Tardía (incluidas las niñas portadoras de OTC):</b> vómitos cíclicos, cefalea, ataxia, conducta extraña, psicosis o encefalopatía tras comidas ricas en proteínas, infecciones, cirugía, posparto o corticoides; aversión espontánea a la carne.</li><li>OTC es la más frecuente y está ligada al X.</li></ul>" },
      { h: "Qué orienta a cuál", html: "<div class=\"tabla\"><table><thead><tr><th>Citrulina</th><th>Ácido orótico</th><th>Pensar en</th></tr></thead><tbody><tr><td>Baja</td><td>Alto</td><td>OTC</td></tr><tr><td>Baja</td><td>Normal o bajo</td><td>CPS1 o NAGS</td></tr><tr><td>Muy alta</td><td>Alto</td><td>Citrulinemia (ASS)</td></tr><tr><td>Alta, con ácido argininosuccínico</td><td>Alto</td><td>ASL (pelo quebradizo, hepatopatía)</td></tr><tr><td>Arginina alta</td><td>Alto</td><td>Arginasa: diplejía espástica progresiva más que crisis</td></tr></tbody></table></div>" },
      { h: "Tratamiento", html: "<p>Ver <a href=\"#ecm-emergencia\">urgencia</a>. Crónico: dieta restringida en proteínas con aminoácidos esenciales, depuradores de amonio, arginina o citrulina, carglumato en NAGS; trasplante hepático en las formas graves.</p>" }
    ],
    diferenciales: [
      { dx: "Acidemias orgánicas", nodo: "ecm-pa-mma", claves: "<ul><li>Acidosis metabólica con cetosis intensa y citopenias junto a la hiperamonemia.</li></ul>" },
      { dx: "Intolerancia a proteínas con lisinuria", claves: "<ul><li>Aversión a proteínas, hiperamonemia posprandial, retraso de crecimiento, esplenomegalia y compromiso pulmonar; lisina, arginina y ornitina altas en orina.</li></ul>" },
      { dx: "Síndrome HHH", claves: "<ul><li>Hiperornitinemia, hiperamonemia y homocitrulinuria: crisis de hiperamonemia con paraparesia espástica progresiva.</li></ul>" },
      { dx: "Encefalopatía por valproato", claves: "<ul><li>Hiperamonemia al iniciar o subir valproato; puede desenmascarar un defecto del ciclo de la urea (sobre todo OTC).</li></ul>" },
      { dx: "Migraña o vómitos cíclicos", nodo: "ne-migrana", claves: "<ul><li>Episodios estereotipados sin alteración de conciencia ni ataxia; amonio normal durante la crisis. Medirlo una vez evita perder un OTC tardío.</li></ul>" }
    ],
    evidencia: ["haberle2019"], pico: [], ateneos: [],
    conexiones: ["ecm-hiperamonemia", "ecm-pa-mma", "ecm-emergencia"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-glutarica", nivel: 2, mapa: "ecm", titulo: "Acidemia glutárica tipo 1", corto: "Glutárica tipo 1", tipo: "concepto", causa: "intoxicacion",
    x: 320, y: 310,
    resumen: "Lactante con macrocefalia que, con una infección entre los 3 y 36 meses, hace una crisis encefalopática y queda con distonía por daño del estriado.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Macrocefalia desde los primeros meses; RM con espacios subdurales y fisuras de Silvio amplias (opérculo abierto).</li><li>Crisis encefalopática aguda con una infección o vacuna febril: pérdida de pautas y distonía grave irreversible.</li><li>Hematomas subdurales que pueden confundirse con maltrato.</li><li>Glutarilcarnitina (C5DC) en acilcarnitinas, ácido glutárico y 3-OH-glutárico en orina.</li></ul>" },
      { h: "Tratamiento", html: "<p>Detectada por pesquisa: dieta baja en lisina, carnitina y un plan de urgencia agresivo en cada enfermedad hasta los 6 años. Así la mayoría no sufre la crisis.</p>" }
    ],
    diferenciales: [
      { dx: "Maltrato infantil (trauma craneal abusivo)", claves: "<ul><li>Hematomas subdurales con hemorragias retinianas extensas, fracturas, otras lesiones e historia inconsistente.</li><li>En glutárica: macrocefalia con opérculos abiertos y ácidos orgánicos alterados. Pedir ácidos orgánicos ante subdurales sin explicación.</li></ul>" },
      { dx: "Macrocefalia benigna familiar", claves: "<ul><li>Padres con perímetro cefálico grande, desarrollo normal, sin opérculos abiertos ni lesiones de ganglios basales.</li></ul>" },
      { dx: "Encefalitis o síndrome de Leigh", nodo: "ecm-mito", claves: "<ul><li>Lesiones de ganglios basales con lactato alto (Leigh) o pleocitosis (encefalitis); ácidos orgánicos sin ácido glutárico.</li></ul>" }
    ],
    evidencia: ["boy2023"], pico: [], ateneos: [],
    conexiones: ["ecm-regresion", "ecm-mito"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-tirosinemia", nivel: 2, mapa: "ecm", titulo: "Tirosinemia tipo I", corto: "Tirosinemia I", tipo: "concepto", causa: "intoxicacion",
    x: 110, y: 400,
    resumen: "Falla hepática del lactante con coagulopatía desproporcionada, tubulopatía y raquitismo. La succinilacetona da el diagnóstico; la nitisinona cambió el pronóstico.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li><b>Aguda (primeros meses):</b> falla hepática con coagulopatía grave y transaminasas apenas altas, hipoglucemia, ascitis, olor a repollo.</li><li><b>Crónica:</b> hepatomegalia, cirrosis, tubulopatía de Fanconi con raquitismo hipofosfatémico, crisis neurológicas tipo porfiria (dolor, neuropatía).</li><li>Riesgo alto de hepatocarcinoma.</li><li>Alfafetoproteína muy alta; <b>succinilacetona</b> en sangre u orina es diagnóstica.</li></ul>" },
      { h: "Tratamiento", html: "<p>Nitisinona (bloquea la vía antes de los metabolitos tóxicos) más dieta baja en tirosina y fenilalanina. Seguimiento con alfafetoproteína e imágenes; trasplante si hay hepatocarcinoma o falla que no responde.</p>" }
    ],
    diferenciales: [
      { dx: "Galactosemia", nodo: "ecm-galactosemia", claves: "<ul><li>Inicio en la primera semana con la leche, cataratas, sepsis por E. coli; sin succinilacetona.</li></ul>" },
      { dx: "Tirosinemia transitoria neonatal", claves: "<ul><li>Prematuro o con dieta hiperproteica, tirosina alta sin succinilacetona y sin hepatopatía.</li></ul>" },
      { dx: "Hepatopatía mitocondrial", nodo: "ecm-mito", claves: "<ul><li>Lactato alto, compromiso neurológico (hipotonía, nistagmo); la tirosina puede subir por el daño hepático pero falta la succinilacetona.</li></ul>" }
    ],
    evidencia: ["chinsky2017"], pico: [], ateneos: [],
    conexiones: ["ecm-hepatopatia", "ecm-galactosemia", "ecm-pku"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-galactosemia", nivel: 1, mapa: "ecm", titulo: "Galactosemia clásica", corto: "Galactosemia", tipo: "concepto", causa: "intoxicacion",
    x: 320, y: 400,
    resumen: "Déficit de GALT. En la primera semana de lactancia: vómitos, ictericia, hepatopatía, cataratas y sepsis por E. coli. Sacar la lactosa sin esperar la confirmación.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Días después de empezar la leche (materna o de fórmula): rechazo del alimento, vómitos, ictericia, hepatomegalia, coagulopatía, hipoglucemia.</li><li>Cataratas en «gota de aceite».</li><li><b>Sepsis por E. coli</b>: un dato clásico.</li><li>Tubulopatía, sustancias reductoras en orina.</li></ul>" },
      { h: "Tratamiento y pronóstico", html: "<ul><li>Fórmula sin lactosa (de soja o elemental) apenas se sospecha.</li><li>Aun con dieta, pueden aparecer problemas cognitivos, del habla (apraxia), temblor e insuficiencia ovárica prematura: seguimiento.</li><li>La variante Duarte en general no requiere dieta.</li></ul>" }
    ],
    diferenciales: [
      { dx: "Sepsis neonatal", claves: "<ul><li>Si la sepsis es por E. coli con hepatopatía e ictericia, pedir galactosa-1-P o GALT antes de transfundir (la transfusión altera la prueba).</li></ul>" },
      { dx: "Tirosinemia I", nodo: "ecm-tirosinemia", claves: "<ul><li>Inicio en semanas a meses, coagulopatía desproporcionada, succinilacetona positiva, sin cataratas.</li></ul>" },
      { dx: "Ictericia por leche materna o hemólisis", claves: "<ul><li>Bilirrubina indirecta con buen estado general, sin hepatopatía ni coagulopatía.</li></ul>" },
      { dx: "Déficit de galactoquinasa", claves: "<ul><li>Solo cataratas, sin compromiso hepático ni sepsis.</li></ul>" }
    ],
    evidencia: ["welling2017"], pico: [], ateneos: [],
    conexiones: ["ecm-hepatopatia", "ecm-tirosinemia", "ecm-ihf", "ecm-pesquisa"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-ihf", nivel: 2, mapa: "ecm", titulo: "Intolerancia hereditaria a la fructosa", corto: "Intolerancia a la fructosa", tipo: "concepto", causa: "intoxicacion",
    x: 110, y: 490,
    resumen: "Déficit de aldolasa B. Vómitos, hipoglucemia y hepatopatía al introducir fruta, jugos o sacarosa. Los que sobreviven aprenden a rechazar lo dulce.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Asintomático con leche materna; los síntomas aparecen con la fruta, la sacarosa o fórmulas con sacarosa.</li><li>Agudo: vómitos, palidez, sudoración, hipoglucemia, letargo; crónico: retraso de crecimiento, hepatomegalia, tubulopatía.</li><li>Aversión a lo dulce; dientes sin caries.</li><li>Peligro: infusiones con fructosa, sorbitol o sacarosa (también en jarabes y medicamentos).</li></ul>" },
      { h: "Tratamiento", html: "<p>Eliminar fructosa, sacarosa y sorbitol; suplementar vitamina C. Diagnóstico genético (gen ALDOB), sin necesidad de prueba de sobrecarga.</p>" }
    ],
    diferenciales: [
      { dx: "Galactosemia", nodo: "ecm-galactosemia", claves: "<ul><li>Empieza con la leche, en la primera semana, no al introducir fruta; cataratas.</li></ul>" },
      { dx: "Reflujo o alergia a la proteína de leche", claves: "<ul><li>Vómitos sin hipoglucemia ni hepatopatía; sin relación con la fruta o el azúcar.</li></ul>" },
      { dx: "Malabsorción de fructosa", claves: "<ul><li>Dolor abdominal, distensión y diarrea con fruta en niños mayores; sin hipoglucemia ni daño hepático. Es intestinal, no hepática.</li></ul>" }
    ],
    evidencia: ["saudubray2022"], pico: [], ateneos: [],
    conexiones: ["ecm-galactosemia", "ecm-hepatopatia"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-homocistinuria", nivel: 2, mapa: "ecm", titulo: "Homocistinuria clásica", corto: "Homocistinuria", tipo: "concepto", causa: "intoxicacion",
    x: 320, y: 490,
    resumen: "Déficit de cistationina β-sintasa. Luxación del cristalino hacia abajo, hábito marfanoide, trombosis y discapacidad intelectual. Probar piridoxina.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Miopía y <b>luxación del cristalino</b> (hacia abajo y adentro) desde la infancia.</li><li>Talla alta, extremidades largas, osteoporosis, escoliosis.</li><li><b>Trombosis</b> arteriales y venosas (ACV, TEP), sobre todo con cirugías o inmovilización.</li><li>Discapacidad intelectual y trastornos psiquiátricos variables.</li><li>Homocisteína total muy alta (más de 100 µmol/L) y metionina alta.</li></ul>" },
      { h: "Tratamiento", html: "<p>Piridoxina en dosis altas (la mitad responde). Si no responde: dieta pobre en metionina, betaína; folato y B12. Profilaxis de trombosis en situaciones de riesgo.</p>" }
    ],
    diferenciales: [
      { dx: "Síndrome de Marfan", claves: "<ul><li>Luxación del cristalino <b>hacia arriba</b>, dilatación de la raíz aórtica, inteligencia normal, homocisteína normal.</li></ul>" },
      { dx: "Defectos de remetilación (cobalamina C, MTHFR)", claves: "<ul><li>Homocisteína alta con <b>metionina baja o normal</b>; anemia megaloblástica, compromiso neurológico temprano, a veces microangiopatía.</li></ul>" },
      { dx: "Déficit nutricional de B12 o folato", claves: "<ul><li>Homocisteína moderadamente alta, anemia macrocítica, contexto dietario; corrige con la vitamina.</li></ul>" }
    ],
    evidencia: ["morris2017"], pico: [], ateneos: [],
    conexiones: ["ecm-vitaminas"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-vitaminas", nivel: 2, mapa: "ecm", titulo: "Errores que responden a vitaminas", corto: "Dependientes de vitaminas", tipo: "concepto", causa: "intoxicacion",
    x: 215, y: 575,
    resumen: "Convulsiones neonatales o del lactante refractarias, o crisis metabólicas, que ceden con un cofactor. Probar piridoxina, piridoxal fosfato, biotina y ácido folínico.",
    teoria: [
      { h: "Los principales", html: "<ul><li><b>Dependencia de piridoxina</b> (antiquitina): convulsiones neonatales o en los primeros meses, refractarias, a veces ya in utero; ceden con piridoxina IV o VO. Ácido α-aminoadípico semialdehído elevado.</li><li><b>Dependencia de piridoxal fosfato</b> (PNPO): similar, en prematuros; responde a piridoxal-5-fosfato.</li><li><b>Déficit de biotinidasa:</b> convulsiones, hipotonía, alopecia, dermatitis periorificial, hipoacusia, ataxia; acidosis láctica. Biotina de por vida; está en la pesquisa.</li><li><b>Folato cerebral:</b> responde al ácido folínico.</li></ul>" },
      { h: "Qué hacer", html: "<p>En toda epilepsia temprana refractaria sin causa clara: guardar muestras y dar una prueba de piridoxina (con monitoreo, puede dar apnea), piridoxal fosfato, biotina y ácido folínico.</p><p class=\"nota\">Verificar dosis con neurología y metabolismo.</p>" }
    ],
    diferenciales: [
      { dx: "Encefalopatía hipóxico-isquémica", claves: "<ul><li>Antecedente de asfixia, convulsiones en las primeras 24 horas que disminuyen con los días.</li></ul>" },
      { dx: "Hiperglicinemia no cetósica", claves: "<ul><li>Hipotonía profunda, hipo, apneas, brote-supresión en el EEG; cociente glicina LCR/plasma alto; no responde a vitaminas.</li></ul>" },
      { dx: "Epilepsias genéticas (canalopatías)", claves: "<ul><li>KCNQ2, SCN2A, STXBP1: panel genético; no responden a la prueba de vitaminas.</li></ul>" },
      { dx: "Espasmos infantiles", nodo: "ne-west", claves: "<ul><li>Lactante de 3 a 12 meses con salvas e hipsarritmia; la dependencia de piridoxina puede presentarse así, por eso conviene probarla.</li></ul>" }
    ],
    evidencia: ["stockler2011"], pico: [], ateneos: [],
    conexiones: ["ecm-pa-mma", "ecm-homocistinuria"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  /* Grupo 2 · Déficit energético */
  {
    id: "ecm-gsd1", nivel: 1, mapa: "ecm", titulo: "Glucogenosis tipo I (von Gierke)", corto: "Glucogenosis I", tipo: "concepto", causa: "energetico",
    x: 850, y: 125,
    resumen: "Déficit de glucosa-6-fosfatasa. Lactante con hepatomegalia enorme, cara de muñeca, hipoglucemia a las 3–4 horas de ayuno y lactato, triglicéridos y ácido úrico altos.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Entre los 3 y 6 meses, cuando se espacian las tomas: irritabilidad, sudoración o convulsiones antes de comer.</li><li>Hepatomegalia grande con abdomen prominente, cara redonda, extremidades delgadas, talla baja.</li><li>Laboratorio: hipoglucemia con <b>lactato alto</b>, hipertrigliceridemia, hiperuricemia; cetonas bajas o moderadas.</li><li><b>Tipo Ib:</b> además neutropenia, infecciones y enfermedad inflamatoria intestinal.</li><li>A largo plazo: adenomas hepáticos, enfermedad renal, osteoporosis.</li></ul>" },
      { h: "Tratamiento", html: "<p>Evitar el ayuno: tomas frecuentes de día, alimentación nocturna continua o <b>almidón de maíz crudo</b> desde el año; limitar fructosa y galactosa. En Ib, factor estimulante de colonias o empagliflozina para la neutropenia.</p>" }
    ],
    diferenciales: [
      { dx: "Glucogenosis III, VI y IX", nodo: "ecm-gsd-otras", claves: "<ul><li>Hipoglucemia más leve y con <b>cetosis</b>; lactato y ácido úrico normales.</li><li>Transaminasas altas; en la III, CK alta y miopatía.</li></ul>" },
      { dx: "Déficit de fructosa-1,6-bisfosfatasa", claves: "<ul><li>Hipoglucemia con acidosis láctica en el ayuno, pero sin hepatomegalia persistente entre episodios.</li></ul>" },
      { dx: "Hiperinsulinismo", nodo: "ecm-hiperinsulinismo", claves: "<ul><li>Sin hepatomegalia, sin lactato alto; hipoglucemia sin cetonas y con altos requerimientos de glucosa.</li></ul>" },
      { dx: "Hepatopatías con hepatomegalia", nodo: "ecm-hepatopatia", claves: "<ul><li>Colestasis, falla de síntesis o esplenomegalia orientan a otras causas (lisosomales, NPC, infecciosas).</li></ul>" }
    ],
    evidencia: ["kishnani2014"], pico: [], ateneos: [],
    conexiones: ["ecm-gsd-otras", "ecm-hipoglucemia", "ecm-hiperinsulinismo"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-gsd-otras", nivel: 2, mapa: "ecm", titulo: "Glucogenosis hepáticas III, VI y IX", corto: "Glucogenosis III, VI, IX", tipo: "concepto", causa: "energetico",
    x: 1090, y: 125,
    resumen: "Hepatomegalia con hipoglucemia cetósica más leve que la tipo I. La III suma miopatía y miocardiopatía.",
    teoria: [
      { h: "Cómo se presentan", html: "<ul><li><b>III (desramificante):</b> hepatomegalia, transaminasas altas, hipoglucemia cetósica; CK alta, debilidad y miocardiopatía en la IIIa.</li><li><b>VI y IX (fosforilasa y su quinasa):</b> hepatomegalia y retraso de crecimiento leves; la IX es ligada al X y frecuente. Mejoran con la edad.</li><li>Lactato y ácido úrico normales.</li></ul>" },
      { h: "Tratamiento", html: "<p>Comidas frecuentes con almidones complejos, dieta rica en proteínas, almidón de maíz nocturno si hace falta; control cardiológico en la III.</p>" }
    ],
    diferenciales: [
      { dx: "Glucogenosis I", nodo: "ecm-gsd1", claves: "<ul><li>Hipoglucemia más grave y temprana con lactato, triglicéridos y ácido úrico altos y cetonas bajas.</li></ul>" },
      { dx: "Hipoglucemia cetósica idiopática", claves: "<ul><li>Sin hepatomegalia ni transaminasas altas.</li></ul>" },
      { dx: "Enfermedad de Pompe", nodo: "ecm-pompe", claves: "<ul><li>Miocardiopatía hipertrófica e hipotonía grave sin hipoglucemia; la glucogenosis III puede parecerse en el músculo.</li></ul>" }
    ],
    evidencia: ["saudubray2022"], pico: [], ateneos: [],
    conexiones: ["ecm-gsd1", "ecm-pompe"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-hiperinsulinismo", nivel: 2, mapa: "ecm", titulo: "Hiperinsulinismo congénito", corto: "Hiperinsulinismo", tipo: "concepto", causa: "energetico",
    x: 850, y: 190,
    resumen: "La causa más frecuente de hipoglucemia persistente en el recién nacido y el lactante. Hipoglucemia grave sin cetonas que necesita mucha glucosa.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Hipoglucemia grave desde los primeros días, con convulsiones; a menudo macrosómico.</li><li>Requerimiento de glucosa de más de 8–10 mg/kg/min.</li><li>Durante la hipoglucemia: insulina detectable, β-hidroxibutirato y ácidos grasos bajos, respuesta al glucagón.</li><li>Variante con amonio alto estable (GDH): hipoglucemias con las proteínas.</li><li>Transitorio en hijos de madre diabética, asfixia, pequeños para la edad gestacional.</li></ul>" },
      { h: "Tratamiento", html: "<p>Glucosa, diazóxido (primera línea), octreotide; PET con F-DOPA para formas focales, que se curan con cirugía. El daño cerebral por hipoglucemia es el principal riesgo.</p>" }
    ],
    diferenciales: [
      { dx: "Defectos de β-oxidación", nodo: "ecm-mcad", claves: "<ul><li>También sin cetonas, pero con ácidos grasos libres altos y acilcarnitinas alteradas; insulina suprimida.</li></ul>" },
      { dx: "Hipopituitarismo", claves: "<ul><li>Micropene, ictericia prolongada, defectos de línea media; cortisol y GH bajos.</li></ul>" },
      { dx: "Hipoglucemia transitoria neonatal", claves: "<ul><li>Hijo de madre diabética o pequeño para la edad gestacional, resuelve en días; si persiste más de 48–72 horas o requiere mucha glucosa, estudiar.</li></ul>" },
      { dx: "Síndrome de Beckwith-Wiedemann", claves: "<ul><li>Macroglosia, onfalocele, hemihipertrofia, visceromegalias, con hiperinsulinismo.</li></ul>" }
    ],
    evidencia: ["thornton2015"], pico: [], ateneos: [],
    conexiones: ["ecm-hipoglucemia", "ecm-mcad"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-glut1", nivel: 2, mapa: "ecm", titulo: "Déficit de GLUT1", corto: "Déficit de GLUT1", tipo: "concepto", causa: "energetico",
    x: 1090, y: 190,
    resumen: "La glucosa no entra bien al cerebro. Epilepsia temprana, trastornos del movimiento que empeoran en ayunas y glucosa baja en el LCR con glucemia normal.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Convulsiones refractarias en el lactante o epilepsia de ausencias de inicio antes de los 4 años.</li><li>Movimientos oculares anormales en el lactante, ataxia, distonía paroxística inducida por el ejercicio, microcefalia adquirida, discapacidad intelectual.</li><li>Síntomas peores antes de comer y mejores después.</li></ul>" },
      { h: "Diagnóstico y tratamiento", html: "<p>Punción lumbar en ayunas con glucemia simultánea: glucosa en LCR baja (cociente menor de 0,45 aproximadamente) con lactato normal o bajo. Genética SLC2A1. <b>Dieta cetogénica</b> lo antes posible.</p>" }
    ],
    diferenciales: [
      { dx: "Epilepsia de ausencias infantil", nodo: "ne-ausencias", claves: "<ul><li>Ausencias antes de los 4 años o refractarias a etosuximida y valproato obligan a descartar GLUT1.</li></ul>" },
      { dx: "Meningitis bacteriana", nodo: "ne-meningitis", claves: "<ul><li>También glucosa baja en el LCR, pero con pleocitosis, proteínas altas y fiebre.</li></ul>" },
      { dx: "Ataxia episódica genética", claves: "<ul><li>Episodios de ataxia sin relación con el ayuno, glucosa en LCR normal.</li></ul>" }
    ],
    evidencia: ["klepper2020"], pico: [], ateneos: [],
    conexiones: ["ecm-mito"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-mcad", nivel: 1, mapa: "ecm", titulo: "Déficit de MCAD", corto: "MCAD", tipo: "concepto", causa: "energetico",
    x: 850, y: 255,
    resumen: "El defecto de β-oxidación más frecuente. Lactante sano que tras un ayuno o una gastroenteritis hace hipoglucemia sin cetonas, encefalopatía o muerte súbita.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Entre los 3 meses y 3 años, con una infección y poca ingesta: vómitos, letargo, convulsiones, coma.</li><li>Hipoglucemia hipocetósica, hepatomegalia, amonio y transaminasas algo altos.</li><li>Puede presentarse como muerte súbita o síndrome tipo Reye.</li><li>Acilcarnitinas: octanoilcarnitina (C8) alta. Está en la pesquisa ampliada.</li></ul>" },
      { h: "Tratamiento", html: "<p>Evitar el ayuno (límites según la edad), carta de emergencia y glucosa IV temprana cuando no puede comer. Entre crisis el chico es normal.</p>" }
    ],
    diferenciales: [
      { dx: "Hipoglucemia cetósica idiopática", claves: "<ul><li>Cetonas altas durante la hipoglucemia; en MCAD faltan.</li></ul>" },
      { dx: "Síndrome de Reye", claves: "<ul><li>Encefalopatía con hepatopatía y amonio alto tras una virosis y aspirina; ante un «Reye» siempre pedir acilcarnitinas.</li></ul>" },
      { dx: "Defectos de cadena larga", nodo: "ecm-lcfaod", claves: "<ul><li>Suman miocardiopatía, arritmias, rabdomiólisis y, en LCHAD, retinopatía; acilcarnitinas de cadena larga.</li></ul>" },
      { dx: "Muerte súbita del lactante", claves: "<ul><li>Ante una muerte súbita, guardar sangre en papel de filtro y bilis para acilcarnitinas: puede orientar a los hermanos.</li></ul>" }
    ],
    evidencia: ["merritt2018"], pico: [], ateneos: [],
    conexiones: ["ecm-lcfaod", "ecm-hipoglucemia", "ecm-pesquisa"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-lcfaod", nivel: 2, mapa: "ecm", titulo: "Defectos de β-oxidación de cadena larga y de carnitina", corto: "Cadena larga y carnitina", tipo: "concepto", causa: "energetico",
    x: 1090, y: 255,
    resumen: "VLCAD, LCHAD, CPT2, déficit primario de carnitina. Hipoglucemia hipocetósica más corazón y músculo: miocardiopatía, arritmias y rabdomiólisis con el ejercicio.",
    teoria: [
      { h: "Cómo se presentan", html: "<ul><li><b>Lactante:</b> hipoglucemia hipocetósica, hepatomegalia, miocardiopatía, arritmias, muerte súbita.</li><li><b>Niño mayor y adolescente:</b> dolor muscular y orina oscura (rabdomiólisis) con el ejercicio, el ayuno, el frío o la fiebre.</li><li><b>LCHAD:</b> retinopatía, neuropatía; la madre puede haber tenido hígado graso agudo o HELLP en el embarazo.</li><li><b>Déficit primario de carnitina:</b> miocardiopatía dilatada progresiva que responde a carnitina.</li></ul>" },
      { h: "Tratamiento", html: "<p>Evitar el ayuno, dieta pobre en grasas de cadena larga con <b>triglicéridos de cadena media</b> (no en defectos de cadena media), triheptanoína; carnitina en el déficit primario. En la crisis: glucosa IV, no lípidos, hidratación para la rabdomiólisis.</p>" }
    ],
    diferenciales: [
      { dx: "Miocarditis o miocardiopatía dilatada idiopática", claves: "<ul><li>Antecedente viral, troponinas altas; acilcarnitinas y carnitina normales. Siempre pedirlas en una miocardiopatía del lactante.</li></ul>" },
      { dx: "Pompe infantil", nodo: "ecm-pompe", claves: "<ul><li>Miocardiopatía hipertrófica con macroglosia e hipotonía, sin hipoglucemia.</li></ul>" },
      { dx: "Rabdomiólisis por otras causas", claves: "<ul><li>Miositis viral (gemelos dolorosos tras influenza), ejercicio extremo, trauma, McArdle (calambres desde el inicio del ejercicio con «segundo aire»).</li></ul>" },
      { dx: "MCAD", nodo: "ecm-mcad", claves: "<ul><li>Hipoglucemia sin compromiso cardíaco ni muscular; C8 alta.</li></ul>" }
    ],
    evidencia: ["merritt2018"], pico: [], ateneos: [],
    conexiones: ["ecm-mcad", "ecm-pompe"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-pdh", nivel: 2, mapa: "ecm", titulo: "Déficit de PDH y de piruvato carboxilasa", corto: "PDH y piruvato carboxilasa", tipo: "concepto", causa: "energetico",
    x: 850, y: 320,
    resumen: "El piruvato no entra al ciclo de Krebs. Acidosis láctica con cociente lactato/piruvato normal, malformaciones cerebrales y Leigh.",
    teoria: [
      { h: "Cómo se presentan", html: "<ul><li><b>PDH</b> (ligada al X, E1α): acidosis láctica neonatal, hipotonía, agenesia del cuerpo calloso, quistes, Leigh; ataxia intermitente en formas leves. Cociente lactato/piruvato normal (menor de 20).</li><li><b>Piruvato carboxilasa:</b> acidosis láctica con hipoglucemia, cetosis e hiperamonemia (forma francesa grave), o retraso con acidosis leve.</li></ul>" },
      { h: "Tratamiento", html: "<p>PDH: <b>dieta cetogénica</b> (las cetonas entran al Krebs sin pasar por la PDH), tiamina de prueba. Evitar cargas grandes de glucosa, que empeoran la acidosis.</p>" }
    ],
    diferenciales: [
      { dx: "Defectos de la cadena respiratoria", nodo: "ecm-mito", claves: "<ul><li>Cociente lactato/piruvato <b>alto</b> (mayor de 25), compromiso multiorgánico.</li></ul>" },
      { dx: "Acidosis láctica secundaria", claves: "<ul><li>Shock, hipoxia, convulsiones prolongadas, sepsis: mejora al corregir la causa.</li></ul>" },
      { dx: "Encefalopatía hipóxico-isquémica", claves: "<ul><li>Antecedente perinatal; sin malformaciones cerebrales; el lactato se normaliza en días.</li></ul>" }
    ],
    evidencia: ["saudubray2022"], pico: [], ateneos: [],
    conexiones: ["ecm-mito"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-mito", nivel: 1, mapa: "ecm", titulo: "Enfermedades mitocondriales", corto: "Mitocondriales", tipo: "concepto", causa: "energetico",
    x: 1090, y: 320,
    resumen: "Fallas de la cadena respiratoria: cualquier síntoma, en cualquier órgano, a cualquier edad. Pensarlas cuando se suman órganos sin relación entre sí.",
    teoria: [
      { h: "Cuándo pensarlas", html: "<ul><li>Compromiso de dos o más órganos sin relación (cerebro, músculo, corazón, ojo, oído, riñón, hígado, endocrino).</li><li><b>Síndrome de Leigh:</b> regresión en escalones con las infecciones, lesiones simétricas en ganglios basales y tronco.</li><li>Lactato alto en sangre o LCR, con cociente lactato/piruvato alto.</li><li>Oftalmoplejía, ptosis, retinopatía, sordera neurosensorial, diabetes, tubulopatía, miocardiopatía.</li><li>Episodios tipo ACV (MELAS), depleción de ADN mitocondrial con falla hepática.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>Diagnóstico genético (ADN mitocondrial y nuclear; exoma o genoma); biopsia muscular en casos seleccionados.</li><li>Tratamiento de soporte: evitar el ayuno, tratar rápido las infecciones, cofactores según el caso.</li><li><b>Evitar valproato</b> (sobre todo en POLG) y anestesia prolongada con propofol.</li><li>Seguimiento cardiológico, oftalmológico, auditivo y endocrino.</li></ul>" }
    ],
    diferenciales: [
      { dx: "Déficit de PDH", nodo: "ecm-pdh", claves: "<ul><li>Acidosis láctica con cociente lactato/piruvato normal, malformaciones cerebrales.</li></ul>" },
      { dx: "Acidemia glutárica tipo 1", nodo: "ecm-glutarica", claves: "<ul><li>Lesión estriatal aguda con una infección en un lactante con macrocefalia; ácidos orgánicos diagnósticos.</li></ul>" },
      { dx: "Encefalitis o encefalomielitis aguda diseminada", nodo: "ne-encefalitis", claves: "<ul><li>Fiebre, pleocitosis, lesiones de sustancia blanca asimétricas; lactato normal.</li></ul>" },
      { dx: "Déficit de tiamina o biotina-tiamina", claves: "<ul><li>Lesiones de ganglios basales tipo Leigh que responden a biotina y tiamina: probarlas siempre.</li></ul>" }
    ],
    evidencia: ["parikh2017"], pico: [], ateneos: [],
    conexiones: ["ecm-pdh", "ecm-regresion", "ecm-acidosis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* Grupo 3 · Moléculas complejas */
  {
    id: "ecm-gaucher", nivel: 2, mapa: "ecm", titulo: "Enfermedad de Gaucher", corto: "Gaucher", tipo: "concepto", causa: "complejas",
    x: 840, y: 440,
    resumen: "Déficit de glucocerebrosidasa. Esplenomegalia grande, plaquetopenia, anemia y dolor óseo. Tratable con enzima.",
    teoria: [
      { h: "Tipos", html: "<ul><li><b>Tipo 1</b> (sin compromiso neurológico, el más frecuente): esplenomegalia, hepatomegalia, citopenias, sangrado, crisis de dolor óseo, necrosis avascular, retraso puberal.</li><li><b>Tipo 2</b> (lactante): neurológico agudo, letal.</li><li><b>Tipo 3:</b> visceral más neurológico lento, con apraxia oculomotora.</li></ul>" },
      { h: "Diagnóstico y tratamiento", html: "<p>Actividad de glucocerebrosidasa en leucocitos o gota seca, genética GBA, quitotriosidasa y lyso-Gb1 como marcadores. Tratamiento enzimático sustitutivo o reducción de sustrato en los tipos 1 y 3.</p>" }
    ],
    diferenciales: [
      { dx: "Leucemia o linfoma", claves: "<ul><li>Citopenias con blastos, adenopatías, síntomas B; esplenomegalia de evolución más rápida. Gaucher se diagnostica a veces por error en un aspirado de médula.</li></ul>" },
      { dx: "Niemann-Pick A/B (déficit de esfingomielinasa ácida)", claves: "<ul><li>Hepatoesplenomegalia con compromiso pulmonar intersticial y dislipemia; mancha rojo cereza en la forma A.</li></ul>" },
      { dx: "Hipertensión portal", claves: "<ul><li>Esplenomegalia con várices, antecedente de cateterismo umbilical (trombosis portal) o hepatopatía crónica.</li></ul>" }
    ],
    evidencia: ["stirnemann2017"], pico: [], ateneos: [],
    conexiones: ["ecm-npc", "ecm-mps"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-pompe", nivel: 2, mapa: "ecm", titulo: "Enfermedad de Pompe", corto: "Pompe", tipo: "concepto", causa: "complejas",
    x: 970, y: 440,
    resumen: "Glucogenosis lisosomal (tipo II). La forma infantil: lactante muy hipotónico con miocardiopatía hipertrófica, macroglosia y CK alta.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li><b>Infantil clásica</b> (primeros meses): hipotonía grave («bebé flácido»), macroglosia, miocardiopatía hipertrófica con PR corto y QRS grande, hepatomegalia moderada, CK alta; sin hipoglucemia. Sin tratamiento, muerte antes del año.</li><li><b>Tardía:</b> miopatía de cinturas e insuficiencia respiratoria en niños, adolescentes o adultos.</li></ul>" },
      { h: "Tratamiento", html: "<p>Tratamiento enzimático (alglucosidasa o avalglucosidasa alfa) cuanto antes; el estado CRIM negativo empeora la respuesta y requiere inmunomodulación.</p>" }
    ],
    diferenciales: [
      { dx: "Atrofia muscular espinal tipo 1", claves: "<ul><li>Hipotonía y debilidad con fasciculaciones linguales y arreflexia, mirada alerta, corazón normal, CK normal.</li></ul>" },
      { dx: "Miocardiopatía hipertrófica de otras causas", claves: "<ul><li>Hijo de madre diabética (transitoria), Noonan, mitocondriales; sin macroglosia ni hipotonía grave.</li></ul>" },
      { dx: "Hipotiroidismo congénito", claves: "<ul><li>Macroglosia, hipotonía, ictericia prolongada; TSH alta, corazón sin hipertrofia grave.</li></ul>" },
      { dx: "Defectos de cadena larga", nodo: "ecm-lcfaod", claves: "<ul><li>Miocardiopatía con hipoglucemia hipocetósica y acilcarnitinas alteradas.</li></ul>" }
    ],
    evidencia: ["kishnani2006"], pico: [], ateneos: [],
    conexiones: ["ecm-gsd-otras", "ecm-lcfaod"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-mps", nivel: 2, mapa: "ecm", titulo: "Mucopolisacaridosis", corto: "Mucopolisacaridosis", tipo: "concepto", causa: "complejas",
    x: 1100, y: 440,
    resumen: "Acumulación de glucosaminoglucanos: facies tosca, rigidez articular, deformidades óseas, hernias, otitis y hepatoesplenomegalia; según el tipo, regresión.",
    teoria: [
      { h: "Tipos principales", html: "<ul><li><b>MPS I (Hurler):</b> facies tosca, opacidad corneal, giba lumbar, hepatoesplenomegalia, hernias, retraso desde el segundo año.</li><li><b>MPS II (Hunter):</b> ligada al X, sin opacidad corneal, a veces pápulas en la espalda.</li><li><b>MPS III (Sanfilippo):</b> rasgos físicos leves con trastorno de conducta grave, hiperactividad, insomnio y regresión.</li><li><b>MPS IV (Morquio):</b> displasia esquelética grave, laxitud articular, inteligencia normal, inestabilidad cervical.</li><li><b>MPS VI:</b> como Hurler sin compromiso cognitivo.</li></ul>" },
      { h: "Diagnóstico y tratamiento", html: "<p>Glucosaminoglucanos en orina, enzima en gota seca o leucocitos, genética. Tratamiento enzimático en I, II, IV, VI y VII; trasplante de médula en Hurler antes de los 2 años y medio. Atención a la vía aérea y la columna cervical en anestesias.</p>" }
    ],
    diferenciales: [
      { dx: "Hipotiroidismo", claves: "<ul><li>Facies tosca y macroglosia, pero sin disostosis ni visceromegalias; TSH alta.</li></ul>" },
      { dx: "Displasias esqueléticas", claves: "<ul><li>Talla baja desproporcionada sin facies tosca ni hepatoesplenomegalia; glucosaminoglucanos normales.</li></ul>" },
      { dx: "Artritis idiopática juvenil", claves: "<ul><li>Rigidez articular <b>con</b> inflamación, dolor y reactantes altos; en las MPS la rigidez no es inflamatoria.</li></ul>" },
      { dx: "TDAH o autismo (frente a Sanfilippo)", nodo: "ne-tdah", claves: "<ul><li>Sanfilippo tiene hiperactividad grave con trastorno del sueño, rasgos toscos sutiles, hirsutismo y luego regresión.</li></ul>" }
    ],
    evidencia: ["muenzer2011"], pico: [], ateneos: [],
    conexiones: ["ecm-regresion", "ecm-gaucher"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-npc", nivel: 3, mapa: "ecm", titulo: "Niemann-Pick tipo C", corto: "Niemann-Pick C", tipo: "concepto", causa: "complejas",
    x: 840, y: 520,
    resumen: "Colesterol atrapado en el lisosoma. Colestasis neonatal o esplenomegalia aislada; más tarde ataxia, parálisis de la mirada vertical y cataplejía.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li><b>Neonatal:</b> ictericia colestática prolongada, hepatoesplenomegalia, ascitis fetal.</li><li><b>Infancia:</b> esplenomegalia aislada durante años.</li><li><b>Escolar:</b> torpeza, ataxia, <b>parálisis de la mirada vertical supranuclear</b>, cataplejía gelástica (caídas al reír), disartria, deterioro escolar, convulsiones.</li><li>Oxisteroles y lyso-esfingomielina 509 en plasma; genética NPC1 o NPC2.</li></ul>" },
      { h: "Tratamiento", html: "<p>Miglustat enlentece el deterioro neurológico; arimoclomol aprobado en algunos países. Soporte multidisciplinario.</p>" }
    ],
    diferenciales: [
      { dx: "Atresia de vías biliares u otras colestasis", claves: "<ul><li>Acolia persistente; en NPC la colestasis suele mejorar sola y queda la esplenomegalia.</li></ul>" },
      { dx: "Gaucher tipo 3", nodo: "ecm-gaucher", claves: "<ul><li>Apraxia oculomotora horizontal más que parálisis vertical; enzima baja.</li></ul>" },
      { dx: "Ataxias progresivas de otro origen", claves: "<ul><li>Ataxia-telangiectasia (telangiectasias, alfafetoproteína alta, infecciones), Friedreich (arreflexia, pie cavo, miocardiopatía).</li></ul>" }
    ],
    evidencia: ["geberhiwot2018"], pico: [], ateneos: [],
    conexiones: ["ecm-gaucher", "ecm-hepatopatia", "ecm-regresion"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-xald", nivel: 2, mapa: "ecm", titulo: "Adrenoleucodistrofia ligada al X", corto: "Adrenoleucodistrofia (X-ALD)", tipo: "concepto", causa: "complejas",
    x: 970, y: 520,
    resumen: "Varón escolar con caída del rendimiento y cambios de conducta, o con insuficiencia suprarrenal. Ácidos grasos de cadena muy larga altos; el trasplante sirve solo si se detecta temprano.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li><b>Cerebral infantil</b> (4–10 años): deterioro escolar, déficit de atención, trastorno visual o auditivo, luego compromiso motor y convulsiones; leucodistrofia parieto-occipital con realce en la RM.</li><li><b>Insuficiencia suprarrenal</b> aislada (Addison): puede ser la primera manifestación; piel oscura.</li><li>Adrenomieloneuropatía en adultos; mujeres portadoras con síntomas tardíos.</li></ul>" },
      { h: "Qué hacer", html: "<p>Ácidos grasos de cadena muy larga en plasma, genética ABCD1. En varones afectados sin síntomas: RM seriada y control suprarrenal; trasplante de médula o terapia génica en la fase temprana de la forma cerebral. Estudiar a todos los varones de la familia.</p>" }
    ],
    diferenciales: [
      { dx: "TDAH", nodo: "ne-tdah", claves: "<ul><li>Síntomas desde siempre, sin pérdida de habilidades ni signos neurológicos. En X-ALD el chico <b>venía bien y empeora</b>.</li></ul>" },
      { dx: "Encefalomielitis aguda diseminada", claves: "<ul><li>Inicio agudo tras una infección, lesiones asimétricas, buena respuesta a corticoides.</li></ul>" },
      { dx: "Otras leucodistrofias", claves: "<ul><li>Metacromática (arilsulfatasa A, neuropatía), Krabbe (irritabilidad en el lactante), Alexander (macrocefalia, compromiso frontal).</li></ul>" },
      { dx: "Insuficiencia suprarrenal autoinmune", claves: "<ul><li>Anticuerpos antisuprarrenales positivos, otras autoinmunidades; en todo varón con Addison pedir ácidos grasos de cadena muy larga.</li></ul>" }
    ],
    evidencia: ["engelen2012"], pico: [], ateneos: [],
    conexiones: ["ecm-zellweger", "ecm-regresion"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-zellweger", nivel: 3, mapa: "ecm", titulo: "Espectro de Zellweger", corto: "Zellweger", tipo: "concepto", causa: "complejas",
    x: 1100, y: 520,
    resumen: "Los peroxisomas no se forman. Recién nacido muy hipotónico, con frente amplia, fontanela grande, convulsiones, hepatopatía y quistes renales.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li><b>Grave neonatal:</b> hipotonía profunda, succión débil, convulsiones, frente alta, fontanela grande, raíz nasal plana, hepatomegalia con colestasis, quistes renales, calcificaciones puntiformes en rótulas.</li><li><b>Formas leves:</b> retraso, retinopatía, hipoacusia neurosensorial, defectos del esmalte.</li><li>Ácidos grasos de cadena muy larga altos, plasmalógenos bajos, ácidos biliares anormales.</li></ul>" },
      { h: "Tratamiento", html: "<p>De soporte: vitaminas liposolubles, ácido cólico, audífonos, control de convulsiones y suprarrenal.</p>" }
    ],
    diferenciales: [
      { dx: "Síndrome de Down", claves: "<ul><li>Hipotonía y dismorfias, pero con cariotipo alterado y sin hepatopatía ni convulsiones neonatales.</li></ul>" },
      { dx: "Atrofia muscular espinal y miopatías congénitas", claves: "<ul><li>Hipotonía con debilidad, sin dismorfias ni hepatopatía; EMG o CK y genética.</li></ul>" },
      { dx: "Trastornos congénitos de la glicosilación", nodo: "ecm-cdg", claves: "<ul><li>Hipotonía multisistémica con pezones invertidos, distribución anormal de la grasa e hipoplasia cerebelosa; transferrina alterada.</li></ul>" }
    ],
    evidencia: ["braverman2016"], pico: [], ateneos: [],
    conexiones: ["ecm-xald", "ecm-cdg"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-cdg", nivel: 3, mapa: "ecm", titulo: "Trastornos congénitos de la glicosilación", corto: "Glicosilación (CDG)", tipo: "concepto", causa: "complejas",
    x: 905, y: 595,
    resumen: "Las proteínas no reciben sus azúcares. Pensarlos ante compromiso de muchos órganos con hipotonía, hipoplasia cerebelosa, pezones invertidos y grasa mal distribuida.",
    teoria: [
      { h: "PMM2-CDG, el más frecuente", html: "<ul><li>Lactante con hipotonía, estrabismo, retraso, hipoplasia cerebelosa.</li><li>Pezones invertidos, almohadillas de grasa en glúteos.</li><li>Episodios tipo ACV, trombosis, coagulopatía (factores XI, antitrombina, proteína C bajos), hepatopatía, derrame pericárdico.</li></ul>" },
      { h: "Diagnóstico", html: "<p>Isoelectroenfoque de transferrina como pesquisa (puede ser normal en algunos tipos), luego panel genético. Algunos son tratables (MPI-CDG con manosa).</p>" }
    ],
    diferenciales: [
      { dx: "Mitocondriales", nodo: "ecm-mito", claves: "<ul><li>Multisistémicas con lactato alto; transferrina normal.</li></ul>" },
      { dx: "Ataxias congénitas no progresivas", claves: "<ul><li>Hipoplasia cerebelosa sin compromiso de otros órganos ni coagulopatía.</li></ul>" },
      { dx: "Zellweger", nodo: "ecm-zellweger", claves: "<ul><li>Hipotonía con dismorfias y hepatopatía; ácidos grasos de cadena muy larga altos.</li></ul>" }
    ],
    evidencia: ["altassan2019"], pico: [], ateneos: [],
    conexiones: ["ecm-zellweger", "ecm-mito"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ecm-slo", nivel: 3, mapa: "ecm", titulo: "Síndrome de Smith-Lemli-Opitz", corto: "Smith-Lemli-Opitz", tipo: "concepto", causa: "complejas",
    x: 1035, y: 595,
    resumen: "Defecto de la síntesis de colesterol. Microcefalia, sindactilia del 2.º y 3.er dedo del pie, ptosis, genitales ambiguos y discapacidad intelectual.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Microcefalia, ptosis, nariz corta con narinas antevertidas, micrognatia, paladar hendido.</li><li><b>Sindactilia en Y del 2.º y 3.er dedo del pie</b>, polidactilia.</li><li>Hipospadias o genitales ambiguos en varones.</li><li>Retraso, conducta autista, autoagresión, problemas de alimentación, fotosensibilidad.</li><li>7-dehidrocolesterol alto en plasma (el colesterol puede ser normal).</li></ul>" },
      { h: "Tratamiento", html: "<p>Suplemento de colesterol; mejora el crecimiento y algunas conductas.</p>" }
    ],
    diferenciales: [
      { dx: "Otros síndromes polimalformativos (trisomías)", claves: "<ul><li>Cariotipo o microarray alterados; 7-dehidrocolesterol normal.</li></ul>" },
      { dx: "Trastorno del espectro autista", nodo: "ne-tea", claves: "<ul><li>Ante TEA con malformaciones, microcefalia o sindactilia de los pies, pedir 7-dehidrocolesterol.</li></ul>" }
    ],
    evidencia: ["saudubray2022"], pico: [], ateneos: [],
    conexiones: ["ecm-cdg"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  }
];

