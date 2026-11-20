/*
  El Gran Mapa Pediátrico — contenido del prototipo
  Áreas: Neumonología › Sibilancias del lactante al escolar; Dermatología › Exantemas

  Cómo está organizado:
  - REFS: bibliografía verificada en PubMed (PMID y, cuando lo tenemos, DOI). Cada nodo la cita por su clave.
  - NODOS: cada tema o concepto del mapa.
      tipo: "tema" (nodo grande) o "concepto" (nodo chico)
      x, y: posición en el mapa (lienzo de 1200 × 640)
      teoria: secciones { h: título, html: texto }
      evidencia: claves de REFS
      pico: preguntas { p, i, c, o, respuesta, certeza, refs }
      ateneos: { titulo, fecha, presenta, url }
      causa: "infecciosa" | "alergica" | "inflamatoria" (o una lista) — colorea el punto en mapas con leyenda de causas
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
      { id: "neuro", titulo: "Neurología", detalle: "Convulsiones, cefalea, desarrollo", organo: "cerebro", lado: "izq", y: 40 },
      { id: "neumo", titulo: "Neumonología", detalle: "Bronquiolitis, sibilancias y asma", organo: "pulmones", mapa: "raiz", color: "var(--edad-2)", lado: "izq", y: 216 },
      { id: "gastro", titulo: "Gastroenterología", detalle: "Diarrea, reflujo, dolor abdominal", organo: "digestivo", lado: "izq", y: 392 },
      { id: "cardio", titulo: "Cardiología", detalle: "Soplos y cardiopatías congénitas", organo: "corazon", lado: "der", y: 128 },
      { id: "derma", titulo: "Dermatología", detalle: "Exantemas: subtipos y causas", organo: "piel", mapa: "exantemas", color: "var(--derm)", lado: "der", y: 304 },
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
    evidencia: ["canavan2015", "ramien2022"], pico: [], ateneos: [],
    conexiones: ["ex-sjs"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  }
];

