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
    hallazgo: "Define el Índice Predictivo de Asma (IPA), en versión estricta (sibilancias frecuentes en los primeros 3 años) y laxa (cualquier sibilancia). Con el índice estricto positivo, el 76 % tuvo asma activa en algún momento entre los 6 y 13 años; con el negativo, más del 95 % nunca la tuvo. Con el laxo positivo, el 59 %.",
    pmid: "11029352",
    doi: "10.1164/ajrccm.162.4.9912111"
  },
  bisgaard2005: {
    cita: "Bisgaard H, et al. Montelukast reduces asthma exacerbations in 2- to 5-year-old children with intermittent asthma (PREVIA). Am J Respir Crit Care Med. 2005;171:315-322.",
    tipo: "Ensayo clínico aleatorizado controlado con placebo (n = 549)",
    hallazgo: "Montelukast diario por 12 meses en preescolares con crisis asociadas a infecciones y pocos síntomas entre episodios: 1,60 vs 2,34 crisis por año (reducción del 31,9 %). Financiado por el fabricante.",
    pmid: "15542792",
    doi: "10.1164/rccm.200407-894OC"
  },
  nwokoro2014: {
    cita: "Nwokoro C, et al. Intermittent montelukast in children aged 10 months to 5 years with wheeze (WAIT trial). Lancet Respir Med. 2014;2:796-803.",
    tipo: "Ensayo clínico aleatorizado controlado con placebo (n = 1358)",
    hallazgo: "Montelukast intermitente (al inicio de cada episodio) no redujo en forma significativa las consultas no programadas por sibilancias (IRR 0,88; IC 95 % 0,77–1,01). Posible subgrupo respondedor según el genotipo ALOX5 5/5.",
    pmid: "25212745",
    doi: "10.1016/S2213-2600(14)70186-9"
  },
  brodlie2015: {
    cita: "Brodlie M, et al. Leukotriene receptor antagonists as maintenance and intermittent therapy for episodic viral wheeze in children. Cochrane Database Syst Rev. 2015;(10):CD008202.",
    tipo: "Revisión sistemática Cochrane (5 ensayos, 3741 participantes)",
    hallazgo: "En sibilancias episódicas virales, ni el montelukast diario (OR 1,20) ni el intermitente (OR 0,77) redujeron en forma significativa los episodios que requieren corticoide oral. Si se usa, como prueba terapéutica con seguimiento.",
    pmid: "26482324",
    doi: "10.1002/14651858.CD008202.pub2"
  },
  glockler2019: {
    cita: "Glockler-Lauf SD, et al. Montelukast and neuropsychiatric events in children with asthma: a nested case-control study. J Pediatr. 2019;209:176-182.",
    tipo: "Casos y controles anidado (Ontario, 5 a 18 años)",
    hallazgo: "Los chicos con un evento neuropsiquiátrico nuevo tuvieron casi el doble de probabilidad de haber recibido montelukast el año previo (OR 1,91; IC 95 % 1,15–3,18). Lo más frecuente: ansiedad y trastornos del sueño.",
    pmid: "30905424",
    doi: "10.1016/j.jpeds.2019.02.009"
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
    hallazgo: "Prevenir asma ≠ controlar asma. Dos años de fluticasona en preescolares con IPA positivo mejoraron el control durante el tratamiento, pero no modificaron los síntomas al año de suspenderlo.",
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
    hallazgo: "CI diario vs montelukast diario vs CI a demanda, en cruzado. La mejor respuesta al CI diario la predijo la sensibilización a aeroalérgenos, y fue aún más probable si además había eosinófilos ≥ 300/µL. La historia de crisis y el sexo no la predijeron.",
    pmid: "27777180",
    doi: "10.1016/j.jaci.2016.09.028"
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
  ducharme2009: {
    cita: "Ducharme FM, et al. Preemptive use of high-dose fluticasone for virus-induced wheezing in young children. N Engl J Med. 2009;360:339-353.",
    tipo: "Ensayo clínico aleatorizado (n = 129)",
    hallazgo: "Fluticasona 750 µg cada 12 h desde el inicio de cada resfrío (hasta 10 días) en chicos de 1 a 6 años: 8 % frente a 18 % de los resfríos terminaron con corticoide oral (OR 0,49). Menor ganancia de talla y peso; los autores no lo recomiendan hasta conocer los efectos a largo plazo.",
    pmid: "19164187",
    doi: "10.1056/NEJMoa0808907"
  },
  foster2018: {
    cita: "Foster SJ, et al. Oral prednisolone in preschool children with virus-associated wheeze: a prospective, randomised, double-blind, placebo-controlled trial. Lancet Respir Med. 2018;6:97-106.",
    tipo: "Ensayo clínico aleatorizado (n = 605)",
    hallazgo: "Prednisolona 1 mg/kg/día por 3 días en chicos de 24 a 72 meses atendidos en guardia: llegaron antes a estar en condiciones de alta (mediana 370 frente a 540 minutos). Sin eventos adversos serios.",
    pmid: "29373235",
    doi: "10.1016/S2213-2600(18)30008-0"
  },
  kaiser2016: {
    cita: "Kaiser SV, et al. Preventing exacerbations in preschoolers with recurrent wheeze: a meta-analysis. Pediatrics. 2016;137:e20154496.",
    tipo: "Metaanálisis (22 ECA, n = 4550)",
    hallazgo: "CI diario frente a placebo: menos crisis con corticoide sistémico (RR 0,70; NNT 9), más claro en asma persistente. En sibilancias virales o intermitentes, CI intermitente en dosis alta frente a placebo: RR 0,65; NNT 6.",
    pmid: "27230765",
    doi: "10.1542/peds.2015-4496"
  },
  sirianansopa2023: {
    cita: "Sirianansopa K, Ruangnapa K, Prasertsan P, et al. Probability of successful inhaled corticosteroids cessation in preschool wheezers: a predictive score. Eur J Pediatr. 2023;182:237-244.",
    tipo: "Cohorte retrospectiva (n = 131), un centro de Tailandia",
    hallazgo: "Más de la mitad de los preescolares pudo suspender el CI después de la prueba terapéutica. Fue menos probable con oxígeno en la primera semana de vida, rinitis alérgica, eosinófilos > 500/mm³ o más de 6 meses de CI previo. Propone un puntaje simple, todavía sin validación externa.",
    pmid: "36289097",
    doi: "10.1007/s00431-022-04679-2"
  },
  thanatcharoenkul2026: {
    cita: "Thanatcharoenkul N, Anuntaseree W, Sirianansopa K, et al. Time to cessation of inhaled corticosteroid therapy in transient wheezers. Pediatr Allergy Immunol Pulmonol. 2026;39:36-43.",
    tipo: "Cohorte retrospectiva (n = 162), un centro de Tailandia",
    hallazgo: "En sibilantes transitorios que recibieron CI (más de 3 episodios por año), la mediana hasta suspenderlo fue de 16 meses. Los menores de 2 años tardaron el doble (razón de tiempo 2,0) y la rinitis no alérgica lo alargó un 38 %. Los autores aclaran que refleja decisiones médicas y es probablemente un techo.",
    pmid: "42332903",
    doi: "10.1177/2151321X261463343"
  },
  murphy2009: {
    cita: "Murphy KR, Zeiger RS, Kosinski M, et al. Test for respiratory and asthma control in kids (TRACK): a caregiver-completed questionnaire for preschool-aged children. J Allergy Clin Immunol. 2009;123:833-839.",
    tipo: "Estudio de desarrollo y validación de un cuestionario (n = 486 cuidadores)",
    hallazgo: "TRACK: 5 preguntas que contestan los padres de menores de 5 años (síntomas, limitación y despertares en las últimas 4 semanas, rescate en 3 meses y corticoide oral en el año). Discriminó bien el control según las guías (área bajo la curva 0,82–0,88) y clasificó bien a cerca del 80 %.",
    pmid: "19348922",
    doi: "10.1016/j.jaci.2009.01.058"
  },
  ducharme2008: {
    cita: "Ducharme FM, et al. The Pediatric Respiratory Assessment Measure: a valid clinical score for assessing acute asthma severity from toddlers to teenagers. J Pediatr. 2008;152:476-480.",
    tipo: "Estudio de validación (cohorte prospectiva, 2 a 17 años)",
    hallazgo: "El PRAM al triaje y después del primer broncodilatador se asoció con la internación. Buena respuesta al cambio (0,7), consistencia interna (alfa 0,71) y acuerdo entre evaluadores (r 0,78) en todas las edades.",
    pmid: "18346499",
    doi: "10.1016/j.jpeds.2007.08.034"
  },
  bizzintino2011: {
    cita: "Bizzintino J, et al. Association between human rhinovirus C and severity of acute asthma in children. Eur Respir J. 2011;37:1037-1042.",
    tipo: "Estudio observacional (n = 128, 2 a 16 años, guardia)",
    hallazgo: "Rinovirus en el 87,5 % de las crisis que llegaron al hospital; el grupo C en el 59,4 %, con puntajes de gravedad más altos que los grupos A y B y que otros virus.",
    pmid: "20693244",
    doi: "10.1183/09031936.00092410"
  },
  stokholm2016: {
    cita: "Stokholm J, et al. Azithromycin for episodes with asthma-like symptoms in young children aged 1-3 years: a randomised, double-blind, placebo-controlled trial. Lancet Respir Med. 2016;4:19-26.",
    tipo: "Ensayo clínico aleatorizado (72 chicos, 158 episodios)",
    hallazgo: "Azitromicina 10 mg/kg/día por 3 días acortó el episodio de 7,7 a 3,4 días (63 %), más si se empezaba antes del día 6. Excluyó signos de neumonía y no evaluó resistencia bacteriana.",
    pmid: "26704020",
    doi: "10.1016/S2213-2600(15)00500-7"
  },
  gaillard2021: {
    cita: "Gaillard EA, et al. European Respiratory Society clinical practice guidelines for the diagnosis of asthma in children aged 5-16 years. Eur Respir J. 2021;58:2004173.",
    tipo: "Guía de práctica clínica (ERS, GRADE)",
    hallazgo: "Recomienda espirometría, prueba broncodilatadora y FeNO como pruebas de primera línea, y no diagnosticar asma solo por la historia ni por una única prueba anormal.",
    pmid: "33863747",
    doi: "10.1183/13993003.04173-2020"
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
  gina2026reporte: {
    cita: "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. Reporte completo, actualización 2026.",
    tipo: "Guía / estrategia (GINA), reporte completo",
    hallazgo: "Estrategia global para el diagnóstico, la evaluación, el tratamiento y la prevención del asma en todas las edades, con 14 capítulos y apéndices de biomarcadores y medicamentos.",
    url: "https://ginasthma.org/2026-gina-strategy-report/"
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
  },
  bradley2011: {
    cita: "Bradley JS, Byington CL, Shah SS, et al. The management of community-acquired pneumonia in infants and children older than 3 months of age: clinical practice guidelines by the PIDS and the IDSA. Clin Infect Dis. 2011;53:e25-e76.",
    tipo: "Guía de práctica clínica (PIDS/IDSA)",
    hallazgo: "No hace falta radiografía de rutina en el niño que se trata ambulatoriamente; sí ante hipoxemia, dificultad respiratoria importante, fracaso del tratamiento o internación. En preescolares el antibiótico no se requiere de rutina (la causa suele ser viral). Primera línea: amoxicilina en dosis altas.",
    pmid: "21880587", doi: "10.1093/cid/cir531"
  },
  sap2021irab: {
    cita: "Comités de Neumonología, Infectología, Medicina Interna Pediátrica y Pediatría Ambulatoria (SAP). Recomendaciones para el manejo de las infecciones respiratorias agudas bajas en menores de 2 años. Actualización 2021. Arch Argent Pediatr. 2021;119(4):S171-S197.",
    tipo: "Recomendaciones nacionales (SAP)",
    hallazgo: "Marco argentino para las IRAB en menores de 2 años, con la bronquiolitis y la neumonía como entidades principales. Antibiótico empírico cuando no puede descartarse una neumonía bacteriana; no de rutina ante un cuadro compatible con infección viral.",
    pmid: "34309327", doi: "10.5546/aap.2021.S171"
  },
  shah2017: {
    cita: "Shah SN, Bachur RG, Simel DL, Neuman MI. Does this child have pneumonia? The Rational Clinical Examination systematic review. JAMA. 2017;318:462-471.",
    tipo: "Revisión sistemática de exactitud diagnóstica",
    hallazgo: "23 cohortes (13 833 niños). Ningún síntoma aislado diagnostica neumonía. La fiebre, la taquipnea (LR 1,5) y la auscultación pesan poco. Lo que más suma: SatO₂ ≤ 96 % (LR 2,8) y aumento del trabajo respiratorio, con quejido, aleteo o tiraje (LR 2,1). Una SatO₂ > 96 % la hace menos probable (LR 0,47).",
    pmid: "28763554", doi: "10.1001/jama.2017.9039"
  },
  andronikou2017: {
    cita: "Andronikou S, Lambert E, Halton J, et al. Guidelines for the use of chest radiographs in community-acquired pneumonia in children and adolescents. Pediatr Radiol. 2017;47:1405-1411.",
    tipo: "Guía (radiología pediátrica)",
    hallazgo: "La radiografía no distingue de forma confiable una neumonía viral de una bacteriana. Se reserva para casos seleccionados.",
    pmid: "29043422", doi: "10.1007/s00247-017-3944-4"
  },
  cao2013: {
    cita: "Cao AMY, Choy JP, Mohanakrishnan LN, Bain RF, van Driel ML. Chest radiographs for acute lower respiratory tract infections. Cochrane Database Syst Rev. 2013;(12):CD009119.",
    tipo: "Revisión sistemática (Cochrane)",
    hallazgo: "Dos ensayos (uno con 522 niños ambulatorios en Sudáfrica). Hacer radiografía no mejoró el tiempo de recuperación. Ambos excluyeron a los pacientes graves.",
    pmid: "24369343", doi: "10.1002/14651858.CD009119.pub2"
  },
  vandemaat2021: {
    cita: "van de Maat JS, Garcia Perez D, Driessen GJA, et al. The influence of chest X-ray results on antibiotic prescription for childhood pneumonia in the emergency department. Eur J Pediatr. 2021;180:2765-2772.",
    tipo: "Análisis secundario de un ensayo por conglomerados (8 guardias, Países Bajos)",
    hallazgo: "597 niños de 1 mes a 5 años con fiebre y tos o disnea. Se hizo radiografía al 18 %. Hacerla se asoció con más antibiótico aun ajustando por la clínica y por el resultado (OR 7,25); el hallazgo de la placa no se asoció con la prescripción.",
    pmid: "33754207", doi: "10.1007/s00431-021-03996-2"
  },
  lipshaw2021: {
    cita: "Lipshaw MJ, Florin TA, Krueger S, et al. Factors associated with antibiotic prescribing and outcomes for pediatric pneumonia in the emergency department. Pediatr Emerg Care. 2021;37:e1033-e1038.",
    tipo: "Cohorte prospectiva (guardia pediátrica)",
    hallazgo: "En el 35 % de los niños el médico ya pensaba dar antibiótico antes de la radiografía. Esa intención predijo la prescripción (OR 6,4) más que la neumonía radiográfica (OR 3,5).",
    pmid: "31290801", doi: "10.1097/PEC.0000000000001892"
  },
  fancourt2017: {
    cita: "Fancourt N, Deloria Knoll M, Barger-Kamate B, et al. Standardized interpretation of chest radiographs in cases of pediatric pneumonia from the PERCH study. Clin Infect Dis. 2017;64(Suppl 3):S253-S261.",
    tipo: "Estudio de concordancia (PERCH)",
    hallazgo: "Aun con lectores entrenados y criterios OMS, persistió el desacuerdo; la concordancia fue mejor para la consolidación que para los otros infiltrados.",
    pmid: "28575359", doi: "10.1093/cid/cix082"
  },
  cherian2005: {
    cita: "Cherian T, Mulholland EK, Carlin JB, et al. Standardized interpretation of paediatric chest radiographs for the diagnosis of pneumonia in epidemiological studies. Bull World Health Organ. 2005;83:353-359.",
    tipo: "Metodología OMS",
    hallazgo: "Define la neumonía radiográfica «de punto final» (consolidación o derrame asociado a infiltrado) y los «otros infiltrados». Se pensó para comparar estudios y ensayos de vacunas, no para decidir el tratamiento de cada paciente.",
    pmid: "15976876"
  },
  geanacopoulos2025: {
    cita: "Geanacopoulos AT, Monuteaux MC, Nelson KA, et al. Radiographic uncertainty and antibiotic prescribing in pediatric pneumonia. Pediatrics. 2025;156(5):e2025073473.",
    tipo: "Cohorte prospectiva (guardia pediátrica)",
    hallazgo: "Clasificó los informes radiológicos en negativos, equívocos y compatibles con neumonía. Los equívocos fueron una minoría, pero en ellos se indicó antibiótico con mucha más frecuencia que en los negativos (alrededor de 71 % frente a 8 %; 95 % en los compatibles): la incertidumbre de la placa empuja a tratar.",
    pmid: "41101769", doi: "10.1542/peds.2025-073473"
  },
  moreno2006: {
    cita: "Moreno L, Krishnan JA, Duran P, Ferrero F. Development and validation of a clinical prediction rule to distinguish bacterial from viral pneumonia in children. Pediatr Pulmonol. 2006;41:331-337.",
    tipo: "Desarrollo y validación de una regla de predicción (Argentina)",
    hallazgo: "Bacterial Pneumonia Score: temperatura axilar ≥ 39 °C (3 puntos), edad ≥ 9 meses (2), neutrófilos ≥ 8000/mm³ (2), cayados ≥ 5 % (1) y la radiografía (−3 a 7). Con ≥ 4 puntos: sensibilidad 100 % y especificidad 93,8 % en niños internados con etiología identificada.",
    pmid: "16493666", doi: "10.1002/ppul.20364"
  },
  karakachoff2008: {
    cita: "Karakachoff M, Battagliotti C, Maciel J, Gamba N. Validación de un método para predecir etiología en niños con neumonía. Arch Argent Pediatr. 2008;106:126-131.",
    tipo: "Validación externa (Argentina)",
    hallazgo: "En 82 niños internados, el BPS ≥ 4 tuvo sensibilidad 94 % y valor predictivo negativo 95 %, pero especificidad de solo 34 %. Sirve más para descartar la causa bacteriana que para confirmarla.",
    pmid: "18661037", doi: "10.1590/S0325-00752008000200006"
  },
  jain2015: {
    cita: "Jain S, Williams DJ, Arnold SR, et al. Community-acquired pneumonia requiring hospitalization among U.S. children. N Engl J Med. 2015;372:835-845.",
    tipo: "Vigilancia poblacional prospectiva (estudio EPIC)",
    hallazgo: "2222 niños internados con neumonía radiográfica: se halló algún virus en el 66 % y bacterias en el 8 %. El VSR fue más frecuente en menores de 5 años (37 % frente a 8 %) y Mycoplasma en los de 5 años o más (19 % frente a 3 %).",
    pmid: "25714161", doi: "10.1056/NEJMoa1405870"
  },
  perch2019: {
    cita: "Pneumonia Etiology Research for Child Health (PERCH) Study Group. Causes of severe pneumonia requiring hospital admission in children without HIV infection from Africa and Asia: the PERCH multi-country case-control study. Lancet. 2019;394:757-779.",
    tipo: "Casos y controles multicéntrico",
    hallazgo: "En niños de 1 a 59 meses con neumonía grave, los virus explicaron el 61 % de los casos (VSR 31 %), las bacterias el 27 % y la tuberculosis el 6 %. Las bacterias pesaron más en los casos muy graves.",
    pmid: "31257127", doi: "10.1016/S0140-6736(19)30721-4"
  },
  williams2022: {
    cita: "Williams DJ, Creech CB, Walter EB, et al. Short- vs standard-course outpatient antibiotic therapy for community-acquired pneumonia in children: the SCOUT-CAP randomized clinical trial. JAMA Pediatr. 2022;176:253-261.",
    tipo: "Ensayo clínico aleatorizado, doble ciego",
    hallazgo: "380 niños de 6 a 71 meses con neumonía no grave que mejoraban: 5 días de antibiótico fueron tan buenos como 10, sin diferencias en la respuesta clínica ni en los efectos adversos.",
    pmid: "35040920", doi: "10.1001/jamapediatrics.2021.5547"
  },
  bielicki2021: {
    cita: "Bielicki JA, Stöhr W, Barratt S, et al. Effect of amoxicillin dose and treatment duration on the need for antibiotic re-treatment in children with community-acquired pneumonia: the CAP-IT randomized clinical trial. JAMA. 2021;326:1713-1724.",
    tipo: "Ensayo clínico aleatorizado factorial de no inferioridad",
    hallazgo: "824 niños de 6 meses o más dados de alta con amoxicilina. La dosis menor (35–50 mg/kg/día) no fue inferior a la mayor (70–90) y 3 días no fueron inferiores a 7 en la necesidad de retratamiento. Con 3 días la tos duró un poco más.",
    pmid: "34726708", doi: "10.1001/jama.2021.17843"
  },
  little2021: {
    cita: "Little P, Francis NA, Stuart B, et al. Antibiotics for lower respiratory tract infection in children presenting in primary care in England (ARTIC PC): a double-blind, randomised, placebo-controlled trial. Lancet. 2021;398:1417-1426.",
    tipo: "Ensayo clínico aleatorizado, controlado con placebo",
    hallazgo: "432 niños de 6 meses a 12 años con infección respiratoria baja no complicada, sin sospecha clínica de neumonía. La amoxicilina no acortó los síntomas, ni en general ni en los subgrupos con fiebre, signos en el tórax o mal estado.",
    pmid: "34562391", doi: "10.1016/S0140-6736(21)01431-8"
  },
  hazir2008: {
    cita: "Hazir T, Fox LM, Nisar YB, et al. Ambulatory short-course high-dose oral amoxicillin for treatment of severe pneumonia in children: a randomised equivalency trial. Lancet. 2008;371:49-56.",
    tipo: "Ensayo clínico aleatorizado de equivalencia (Pakistán)",
    hallazgo: "2037 niños de 3 a 59 meses con neumonía con tiraje (grave según la OMS de entonces). Amoxicilina oral en dosis altas en el domicilio fue equivalente a internar y dar ampicilina parenteral (fracaso 7,5 % frente a 8,6 %). Fundamentó el cambio de la clasificación OMS de 2014.",
    pmid: "18177775", doi: "10.1016/S0140-6736(08)60071-9"
  },
  dutron2026: {
    cita: "Dutron S, Pissarra J, Deguet A, et al. Consensus definition for community-acquired pneumonia in children using a Delphi approach. Pediatr Infect Dis J. 2026.",
    tipo: "Consenso Delphi (países con alto acceso a la salud)",
    hallazgo: "Neumonía presunta = 3 criterios mayores (fiebre, taquipnea y consolidación focal en la radiografía) más 3 de 5 menores (crepitantes focales, PCR > 80 mg/L, alteración del estado general, tos, síndrome de condensación). Exige radiografía.",
    pmid: "42750427", doi: "10.1097/INF.0000000000005408"
  },
  ricci2015: {
    cita: "Ricci V, Delgado Nunes V, Murphy MS, Cunningham S; Guideline Development Group. Bronchiolitis in children: summary of NICE guidance. BMJ. 2015;350:h2305.",
    tipo: "Resumen de guía (NICE)",
    hallazgo: "Bronquiolitis en menores de 2 años (sobre todo en el primer año): pródromo catarral y después tos persistente con taquipnea o tiraje y sibilancias o crepitantes. En el Reino Unido los crepitantes pesan tanto como la sibilancia.",
    pmid: "26037525", doi: "10.1136/bmj.h2305"
  },
  shi2024: {
    cita: "Shi C, Xu X, Xu Y. Systematic review and meta-analysis of the accuracy of lung ultrasound and chest radiography in diagnosing community acquired pneumonia in children. Pediatr Pulmonol. 2024;59:3130-3147.",
    tipo: "Revisión sistemática y metaanálisis de exactitud diagnóstica",
    hallazgo: "30 estudios, 4546 niños. Ecografía pulmonar: sensibilidad 94 % y especificidad 86 %; radiografía: 89 % y 91 %. La ecografía sumó más sensibilidad, sin radiación.",
    pmid: "39239917", doi: "10.1002/ppul.27221"
  },
  meyersauteur2024: {
    cita: "Meyer Sauteur PM. Childhood community-acquired pneumonia. Eur J Pediatr. 2024;183:1129-1136.",
    tipo: "Revisión narrativa",
    hallazgo: "Con las vacunas conjugadas contra neumococo y Hib, hoy predominan los virus y Mycoplasma. Ni la clínica, ni el laboratorio, ni la radiografía distinguen con seguridad la causa bacteriana de la viral.",
    pmid: "38112800", doi: "10.1007/s00431-023-05366-6"
  },
  rowlands2024: {
    cita: "Rowlands RS, Meyer Sauteur PM, Beeton ML; ESGMAC MyCOVID Study Team. Mycoplasma pneumoniae: not a typical respiratory pathogen. J Med Microbiol. 2024;73.",
    tipo: "Revisión",
    hallazgo: "Causa importante de neumonía en escolares y adultos jóvenes, con brotes cada 1 a 4 años (uno grande en 2023–2024, tras la pandemia). Manifestaciones extrapulmonares y resistencia a macrólidos en aumento, sobre todo en Asia.",
    pmid: "39475213", doi: "10.1099/jmm.0.001910"
  },
  kilgore2016: {
    cita: "Kilgore PE, Salim AM, Zervos MJ, Schmitt HJ. Pertussis: microbiology, disease, treatment, and prevention. Clin Microbiol Rev. 2016;29:449-486.",
    tipo: "Revisión",
    hallazgo: "En lactantes pequeños la tos convulsa puede presentarse con apneas o cianosis más que con el gallo; la leucocitosis con linfocitosis marca riesgo. Macrólidos como tratamiento y profilaxis; vacunación en el embarazo para proteger al recién nacido.",
    pmid: "27029594", doi: "10.1128/CMR.00083-15"
  },
  tormoehlen2014: {
    cita: "Tormoehlen LM, Tekulve KJ, Nañagas KA. Hydrocarbon toxicity: a review. Clin Toxicol (Phila). 2014;52:479-489.",
    tipo: "Revisión",
    hallazgo: "La neumonitis por hidrocarburos depende de la aspiración (baja viscosidad, alta volatilidad), no de lo absorbido por el intestino. No inducir el vómito; los síntomas aparecen en las primeras horas.",
    pmid: "24911841", doi: "10.3109/15563650.2014.923904"
  },
  chiang2005: {
    cita: "Chiang YC, Shyur SD, Huang LH, et al. Chlamydia trachomatis pneumonia: experience in a medical center. Acta Paediatr Taiwan. 2005;46:284-288.",
    tipo: "Serie de casos",
    hallazgo: "Neumonía afebril del lactante de 1 a 3 meses: tos en staccato, taquipnea, a veces conjuntivitis previa y eosinofilia; infiltrados intersticiales bilaterales con hiperinsuflación.",
    pmid: "16640002"
  },
  oms2014imci: {
    cita: "Organización Mundial de la Salud. Revised WHO classification and treatment of childhood pneumonia at health facilities: evidence summaries. Ginebra: OMS; 2014.",
    tipo: "Guía OMS (AIEPI)",
    hallazgo: "Reclasifica la neumonía en dos categorías. «Neumonía» (respiración rápida o tiraje) se trata con amoxicilina oral en el domicilio; «neumonía grave» (un signo general de peligro) se deriva con antibiótico parenteral."
  },
  proa2023: {
    cita: "Ministerio de Salud de la Nación. Directrices para la implementación de Programas para la Optimización del uso de los Antimicrobianos (PROA) en establecimientos de salud. Buenos Aires; 2023.",
    tipo: "Directriz nacional",
    hallazgo: "Los PROA empiezan por medir cómo se prescribe. Buscan la indicación pertinente y el fármaco, la dosis, la vía y la duración adecuados."
  },
  jorrobaron2025: {
    cita: "Jorro-Baron F, Echave C, Rodriguez V, et al. Improving antibiotic use in pediatric hospitals in Argentina: a quality improvement study. Hosp Pediatr. 2025;15:e230-e239.",
    tipo: "Estudio de mejora de la calidad (2 hospitales argentinos)",
    hallazgo: "Un programa de optimización de antibióticos en internación pediátrica, con las IRAB como causa frecuente, aumentó el uso de antibióticos de espectro reducido (grupo Acceso de la OMS: de 30,7 % a 37,9 %).",
    pmid: "40335064", doi: "10.1542/hpeds.2024-008046"
  },
  /*hs-refs*/
  wainwright2003: {"cita": "Wainwright C, et al. A multicenter, randomized, double-blind, controlled trial of nebulized epinephrine in infants with acute bronchiolitis. N Engl J Med. 2003;349:27-35.", "tipo": "Ensayo clínico aleatorizado (n = 194)", "hallazgo": "En lactantes internados con bronquiolitis, la adrenalina nebulizada no acortó la internación ni el tiempo hasta estar en condiciones de alta.", "pmid": "12840089", "doi": "10.1056/NEJMoa022226"},
  corneli2007: {"cita": "Corneli HM, et al. A multicenter, randomized, controlled trial of dexamethasone for bronchiolitis. N Engl J Med. 2007;357:331-9.", "tipo": "Ensayo clínico aleatorizado (n = 600)", "hallazgo": "Una dosis de dexametasona oral (1 mg/kg) en la guardia no redujo las internaciones (39,7 % frente a 41,0 %) ni mejoró el estado respiratorio a las 4 horas.", "pmid": "17652648", "doi": "10.1056/NEJMoa071255"},
  schuh2014: {"cita": "Schuh S, et al. Effect of oximetry on hospitalization in bronchiolitis: a randomized clinical trial. JAMA. 2014;312:712-8.", "tipo": "Ensayo clínico aleatorizado (n = 213)", "hallazgo": "Con oxímetros que mostraban 3 puntos más que el valor real, se internó el 25 % frente al 41 % con valores reales, sin más consultas no programadas.", "pmid": "25138332", "doi": "10.1001/jama.2014.8637"},
  cunningham2015: {"cita": "Cunningham S, et al. Oxygen saturation targets in infants with bronchiolitis (BIDS): a double-blind, randomised, equivalence trial. Lancet. 2015;386:1041-8.", "tipo": "Ensayo de equivalencia (n = 615)", "hallazgo": "En internados con bronquiolitis, el objetivo de saturación ≥ 90 % fue equivalente a ≥ 94 % en tiempo hasta resolver la tos (15 días en ambos grupos) y igual de seguro.", "pmid": "26382998", "doi": "10.1016/S0140-6736(15)00163-4"},
  stein1999: {"cita": "Stein RT, et al. Respiratory syncytial virus in early life and risk of wheeze and allergy by age 13 years. Lancet. 1999;354:541-5.", "tipo": "Cohorte de nacimiento (Tucson)", "hallazgo": "La infección respiratoria baja por VSR antes de los 3 años se asoció con más sibilancias hasta los 11 años (OR 4,3 de sibilancias frecuentes a los 6), pero no a los 13, y no con atopia.", "pmid": "10470697", "doi": "10.1016/S0140-6736(98)10321-5"},
  sigurs2005: {"cita": "Sigurs N, et al. Severe respiratory syncytial virus bronchiolitis in infancy and asthma and allergy at age 13. Am J Respir Crit Care Med. 2005;171:137-41.", "tipo": "Cohorte con controles (n = 140)", "hallazgo": "Los internados por bronquiolitis por VSR tuvieron más asma o sibilancias recurrentes a los 13 años (43 % frente a 8 %) y más sensibilización a alérgenos.", "pmid": "15516534", "doi": "10.1164/rccm.200406-730OC"},
  kusel2007: {"cita": "Kusel MM, et al. Early-life respiratory viral infections, atopic sensitization, and risk of subsequent development of persistent asthma. J Allergy Clin Immunol. 2007;119:1105-10.", "tipo": "Cohorte de alto riesgo (n = 198)", "hallazgo": "Las infecciones respiratorias bajas con sibilancias o fiebre en el primer año se asociaron con sibilancias y asma a los 5 años solo en los niños sensibilizados antes de los 2 años.", "pmid": "17353039", "doi": "10.1016/j.jaci.2006.12.669"},
  blanken2013: {"cita": "Blanken MO, et al. Respiratory syncytial virus and recurrent wheeze in healthy preterm infants. N Engl J Med. 2013;368:1791-9.", "tipo": "Ensayo clínico aleatorizado (n = 429)", "hallazgo": "En prematuros sanos de 33 a 35 semanas, el palivizumab redujo un 61 % los días con sibilancias en el primer año y las sibilancias recurrentes (11 % frente a 21 %).", "pmid": "23656644", "doi": "10.1056/NEJMoa1211917"},
  scheltema2018: {"cita": "Scheltema NM, et al. Respiratory syncytial virus prevention and asthma in healthy preterm infants: a randomised controlled trial. Lancet Respir Med. 2018;6:257-264.", "tipo": "Seguimiento de ensayo aleatorizado (n = 395)", "hallazgo": "A los 6 años, el palivizumab en la infancia redujo el asma informada por los padres (14 % frente a 24 %) por menos sibilancias infrecuentes, pero no el asma diagnosticada por médicos ni la función pulmonar.", "pmid": "29500030", "doi": "10.1016/S2213-2600(18)30055-9"},
  rosas2023: {"cita": "Rosas-Salazar C, et al. Respiratory syncytial virus infection during infancy and asthma during childhood in the USA (INSPIRE): a population-based, prospective birth cohort study. Lancet. 2023;401:1669-1680.", "tipo": "Cohorte de nacimiento poblacional (n = 1741)", "hallazgo": "En lactantes sanos de término, no tener VSR en el primer año se asoció con un 26 % menos de asma a los 5 años (RR ajustado 0,74); se estimó que el 15 % de los casos podría prevenirse.", "pmid": "37086744", "doi": "10.1016/S0140-6736(23)00811-5"},
  martinez1988: {"cita": "Martinez FD, et al. Diminished lung function as a predisposing factor for wheezing respiratory illness in infants. N Engl J Med. 1988;319:1112-7.", "tipo": "Cohorte de nacimiento (n = 124)", "hallazgo": "Los lactantes con la función pulmonar más baja al nacer, medida antes de cualquier infección, tuvieron más riesgo de un primer episodio de sibilancias en el primer año.", "pmid": "3173442", "doi": "10.1056/NEJM198810273191702"},
  sears2003: {"cita": "Sears MR, et al. A longitudinal, population-based, cohort study of childhood asthma followed to adulthood. N Engl J Med. 2003;349:1414-22.", "tipo": "Cohorte de nacimiento poblacional (n = 613)", "hallazgo": "A los 26 años, el 14,5 % tenía sibilancias persistentes desde la infancia y el 12,4 % recayó tras una remisión. Predijeron persistencia o recaída la sensibilización a ácaros, la hiperreactividad bronquial, el sexo femenino, fumar y el inicio temprano.", "pmid": "14534334", "doi": "10.1056/NEJMoa022363"},
  mcgeachie2016: {"cita": "McGeachie MJ, et al. Patterns of Growth and Decline in Lung Function in Persistent Childhood Asthma. N Engl J Med. 2016;374:1842-1852.", "tipo": "Cohorte de seguimiento de un ensayo (CAMP, n = 684)", "hallazgo": "El 75 % de los niños con asma persistente tuvo un patrón anormal de crecimiento o declinación pulmonar; a los 26 años, el 11 % cumplía criterios espirométricos de obstrucción fija, más en los de crecimiento reducido.", "pmid": "27168434", "doi": "10.1056/NEJMoa1513737"},
  belgrave2018: {"cita": "Belgrave DCM, et al. Lung function trajectories from pre-school age to adulthood and their associations with early life factors: a retrospective analysis of three population-based birth cohort studies. Lancet Respir Med. 2018;6:526-534.", "tipo": "Análisis de 3 cohortes de nacimiento (n = 2436)", "hallazgo": "Cuatro trayectorias de VEF₁ de la infancia a la adultez; la persistentemente baja (5 %) se asoció con sibilancias recurrentes con crisis graves, sensibilización temprana y humo de tabaco. La mayoría de los lactantes con función baja no siguió en la trayectoria baja.", "pmid": "29628377", "doi": "10.1016/S2213-2600(18)30099-7"},
  guilbert2004: {"cita": "Guilbert TW, et al. Atopic characteristics of children with recurrent wheezing at high risk for the development of childhood asthma. J Allergy Clin Immunol. 2004;114:1282-7.", "tipo": "Estudio descriptivo de la cohorte PEAK (n = 285)", "hallazgo": "En niños de 2 a 3 años con IPA modificado positivo, el 61 % estaba sensibilizado a alimentos o aeroalérgenos; la eosinofilia y la IgE total fueron los marcadores más ligados a sensibilización a aeroalérgenos.", "pmid": "15577824", "doi": "10.1016/j.jaci.2004.09.020"},
  smit2015: {"cita": "Smit HA, et al. Childhood asthma prediction models: a systematic review. Lancet Respir Med. 2015;3:973-84.", "tipo": "Revisión sistemática (12 modelos)", "hallazgo": "De 12 modelos para predecir asma escolar en preescolares con síntomas, algunos confirmaban mejor y otros descartaban mejor, pero ninguno se destacó en ambas cosas a la vez.", "pmid": "26597131", "doi": "10.1016/S2213-2600(15)00428-2"},
  brand2014: {"cita": "Brand PL, et al. Classification and pharmacological treatment of preschool wheezing: changes since 2008. Eur Respir J. 2014;43:1172-7.", "tipo": "Consenso internacional (actualización ERS)", "hallazgo": "Los patrones episódico viral y por múltiples desencadenantes cambian con el tiempo y con el tratamiento. Corticoide inhalado también en el episódico frecuente o grave; todo controlador como prueba; corticoide oral solo en crisis graves internadas.", "pmid": "24525447", "doi": "10.1183/09031936.00199913"},
  camp2000: {"cita": "Childhood Asthma Management Program Research Group. Long-term effects of budesonide or nedocromil in children with asthma. N Engl J Med. 2000;343:1054-63.", "tipo": "Ensayo clínico aleatorizado (n = 1041)", "hallazgo": "En escolares con asma leve a moderada, 4 a 6 años de budesonida no cambiaron el VEF₁ posbroncodilatador frente a placebo, pero mejoraron el control, la hiperreactividad y redujeron las internaciones; la talla fue 1,1 cm menor, sobre todo el primer año.", "pmid": "11027739", "doi": "10.1056/NEJM200010123431501"},
  castro2009: {"cita": "Castro-Rodriguez JA, et al. Efficacy of inhaled corticosteroids in infants and preschoolers with recurrent wheezing and asthma: a systematic review with meta-analysis. Pediatrics. 2009;123:e519-25.", "tipo": "Revisión sistemática y metaanálisis (29 ECA, n = 3592)", "hallazgo": "En lactantes y preescolares con sibilancias recurrentes o asma, el corticoide inhalado redujo las crisis (18,0 % frente a 32,1 %) y mejoró síntomas y función pulmonar; el efecto fue mayor en quienes tenían diagnóstico de asma.", "pmid": "19254986", "doi": "10.1542/peds.2008-2867"},
  oommen2003: {"cita": "Oommen A, et al. Efficacy of a short course of parent-initiated oral prednisolone for viral wheeze in children aged 1-5 years: randomised controlled trial. Lancet. 2003;362:1433-8.", "tipo": "Ensayo clínico aleatorizado (n = 217)", "hallazgo": "La prednisolona oral iniciada por los padres en el siguiente episodio de sibilancias virales no mejoró los síntomas ni redujo internaciones en niños de 1 a 5 años, ni siquiera con marcadores de eosinófilos altos.", "pmid": "14602435", "doi": "10.1016/S0140-6736(03)14685-5"},
  /*/hs-refs*/
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
  "art-henderson2008": {
    titulo: "Henderson 2008: seis fenotipos de sibilancias",
    padre: "sibilancias",
    articulo: "henderson2008",
    ruta: ["Pediatría", "Neumonología", "Sibilancias", "Sibilancias recurrentes", "Henderson 2008"],
    bajada: "Mapa de un artículo: la cohorte ALSPAC (Thorax 2008) siguió a más de 6000 chicos desde el nacimiento y encontró seis trayectorias de sibilancias. Se lee de izquierda a derecha como el artículo: qué preguntaron, cómo lo hicieron, qué encontraron y qué significa. Resumen propio; los números vienen del texto completo.",
    disposicion: "columnas",
    pista: "Cada columna es una parte del artículo. Las líneas unen las ideas que conviene leer juntas. Tocá un nodo para ver el detalle y la cita.",
    buscar: "Buscar en el artículo: atopia, metacolina, Tucson…",
    columnas: [
      { x: 150, titulo: "La pregunta", pregunta: "¿Qué querían saber?" },
      { x: 450, titulo: "Cómo lo hicieron", pregunta: "¿Con quiénes y qué midieron?" },
      { x: 750, titulo: "Qué encontraron", pregunta: "¿Cuáles son las seis trayectorias?" },
      { x: 1050, titulo: "Qué significa", pregunta: "¿Qué me llevo a la consulta?" }
    ]
  },
  /*gr-mapas*/
  "gina-reporte": {"titulo": "GINA 2026 · Reporte completo", "padre": "asma", "ruta": ["Pediatría", "Neumonología", "Sibilancias", "Asma", "GINA 2026 completo"], "bajada": "Los 14 capítulos del reporte completo de GINA 2026 (298 páginas), no la guía resumida. Cada nodo resume un capítulo y abre su submapa. Resumen propio, en borrador: verificar contra el texto original antes de usarlo en la práctica.", "disposicion": "columnas", "pista": "Tocá un capítulo para ver su resumen y abrir su submapa. Las líneas unen capítulos que conviene leer juntos.", "buscar": "Buscar en el reporte: MART, PRAM, biológicos…", "columnas": [{"x": 150, "titulo": "6 años o más: entender", "pregunta": "¿Qué es, cómo lo diagnostico y evalúo?"}, {"x": 450, "titulo": "6 años o más: tratar", "pregunta": "¿Qué indico y cómo manejo la crisis?"}, {"x": 750, "titulo": "Situaciones especiales", "pregunta": "¿Qué cambia en cada contexto?"}, {"x": 1050, "titulo": "5 años o menos y prevención", "pregunta": "¿Cómo es en los más chicos?"}]},
  "gr-c1": {"titulo": "Cap. 1 · Definición y diagnóstico (6 años o más)", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 1 Diagnóstico"], "bajada": "Qué es el asma, cómo se diagnostica antes de tratar, cómo se confirma si ya recibe corticoide inhalado y qué cambia en situaciones particulares. Adultos, adolescentes y niños de 6 a 11 años.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "Qué es", "pregunta": "¿Cómo se define?"}, {"x": 450, "titulo": "Diagnóstico inicial", "pregunta": "¿Qué necesito para decir asma?"}, {"x": 750, "titulo": "Confirmar", "pregunta": "¿Y si ya está tratado o hay dudas?"}, {"x": 1050, "titulo": "Otros contextos", "pregunta": "¿Qué cambia según el paciente?"}]},
  "gr-c2": {"titulo": "Cap. 2 · Evaluación del asma (6 años o más)", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 2 Evaluación"], "bajada": "Cómo evaluar en cada consulta: control de síntomas y riesgo futuro por separado, función pulmonar, gravedad y cómo distinguir el asma no controlada del asma grave.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "Qué evaluar", "pregunta": "¿Qué miro en cada consulta?"}, {"x": 450, "titulo": "Síntomas", "pregunta": "¿Cómo está hoy?"}, {"x": 750, "titulo": "Riesgo", "pregunta": "¿Qué le puede pasar?"}, {"x": 1050, "titulo": "Gravedad", "pregunta": "¿Es grave o está mal controlado?"}]},
  "gr-c3": {"titulo": "Cap. 3 · Principios del tratamiento (6 años o más)", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 3 Principios"], "bajada": "La relación con el paciente, el objetivo a largo plazo, la remisión, el ciclo evaluar-ajustar-revisar, los factores de riesgo modificables, las medidas no farmacológicas y cuándo derivar.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "La relación", "pregunta": "¿Cómo trabajamos juntos?"}, {"x": 450, "titulo": "El objetivo", "pregunta": "¿Adónde queremos llegar?"}, {"x": 750, "titulo": "Cómo decidir", "pregunta": "¿Cómo ajusto el tratamiento?"}, {"x": 1050, "titulo": "Más allá de los remedios", "pregunta": "¿Qué más ayuda y cuándo derivo?"}]},
  "gr-c4": {"titulo": "Cap. 4 · Medicamentos y pasos de tratamiento (6 años o más)", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 4 Medicamentos"], "bajada": "El capítulo más largo del reporte: por qué nunca SABA solo, qué es el rescate antiinflamatorio, los dos tracks de adolescentes y adultos, los pasos en niños de 6 a 11 años, cómo subir y bajar, inmunoterapia y vacunas.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "Las bases", "pregunta": "¿Qué vale para todos?"}, {"x": 450, "titulo": "Niños de 6 a 11 años", "pregunta": "¿Qué indico en cada paso?"}, {"x": 750, "titulo": "12 años o más", "pregunta": "¿Track 1 o track 2?"}, {"x": 1050, "titulo": "Ajustar y sumar", "pregunta": "¿Cuándo subo, bajo o agrego?"}]},
  "gr-c5": {"titulo": "Cap. 5 · Educación y automanejo guiado", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 5 Automanejo"], "bajada": "Las habilidades que hacen que el tratamiento funcione: elegir y usar bien el inhalador, la adherencia, la información, el automanejo con plan escrito y los controles regulares.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "El inhalador", "pregunta": "¿Cuál elijo y cómo lo usa?"}, {"x": 450, "titulo": "Adherencia", "pregunta": "¿Lo está usando?"}, {"x": 750, "titulo": "Automanejo", "pregunta": "¿Qué hace cuando empeora?"}, {"x": 1050, "titulo": "Sostenerlo", "pregunta": "¿Cómo lo acompaño en el tiempo?"}]},
  "gr-c6": {"titulo": "Cap. 6 · Comorbilidades y poblaciones especiales", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 6 Comorbilidades"], "bajada": "Lo que se suma al asma y empeora los síntomas o el control (obesidad, reflujo, ansiedad, alergia alimentaria, rinitis y sinusitis) y cómo cambia el manejo en adolescentes, deportistas, embarazo, cirugía y otros contextos.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "Comorbilidades", "pregunta": "¿Qué más le pasa?"}, {"x": 450, "titulo": "Vía aérea superior y alergia", "pregunta": "¿Nariz, senos o alimentos?"}, {"x": 750, "titulo": "Etapas y actividades", "pregunta": "¿Adolescente, deportista, embarazada?"}, {"x": 1050, "titulo": "Situaciones puntuales", "pregunta": "¿Y si…?"}]},
  "gr-c7": {"titulo": "Cap. 7 · Asma, EPOC o ambas (adultos)", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 7 Asma y EPOC"], "bajada": "Capítulo de adultos, sobre todo de 40 años o más: cómo distinguir asma de EPOC y qué tratamiento inicial es seguro cuando hay rasgos de ambas. En pediatría sirve sobre todo para entender por qué nunca broncodilatadores de acción larga sin CI.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "Por qué importa", "pregunta": "¿Para qué separar asma y EPOC?"}, {"x": 450, "titulo": "Diagnóstico", "pregunta": "¿Cómo lo distingo?"}, {"x": 750, "titulo": "Tratamiento inicial", "pregunta": "¿Qué es seguro?"}, {"x": 1050, "titulo": "Seguimiento", "pregunta": "¿Cuándo derivo?"}]},
  "gr-c8": {"titulo": "Cap. 8 · Asma difícil de tratar y grave", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 8 Asma grave"], "bajada": "El árbol de decisión para adolescentes y adultos: confirmar el diagnóstico y corregir lo modificable, evaluar el fenotipo tipo 2, elegir y evaluar biológicos y sostener el cuidado. Los biológicos aprobados desde los 6 años aparecen en cada nodo.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "Definir", "pregunta": "¿Es difícil o es grave?"}, {"x": 450, "titulo": "Optimizar", "pregunta": "¿Qué corrijo antes?"}, {"x": 750, "titulo": "Fenotipo y biológicos", "pregunta": "¿Hay inflamación tipo 2? ¿Qué biológico?"}, {"x": 1050, "titulo": "Seguir", "pregunta": "¿Respondió? ¿Cómo sigo?"}]},
  "gr-c9": {"titulo": "Cap. 9 · Crisis de asma (6 años o más)", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 9 Crisis"], "bajada": "La crisis desde los 6 años: quién tiene riesgo de morir, el plan de acción en casa, los flujogramas nuevos de 2026 para atención primaria y guardia, qué no hacer y qué dejar armado al alta.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "Antes", "pregunta": "¿Quién corre más riesgo?"}, {"x": 450, "titulo": "En casa", "pregunta": "¿Qué hace la familia?"}, {"x": 750, "titulo": "En la consulta y la guardia", "pregunta": "¿Cómo la trato?"}, {"x": 1050, "titulo": "Después", "pregunta": "¿Qué dejo armado?"}]},
  "gr-c10": {"titulo": "Cap. 10 · Diagnóstico de asma (5 años o menos)", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 10 Diagnóstico ≤ 5"], "bajada": "El diagnóstico en los más chicos es clínico y tiene tres criterios: episodios agudos de sibilancias recurrentes, ninguna otra causa probable y respuesta oportuna al tratamiento. Con uno o dos criterios, «asma sospechada».", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "El contexto", "pregunta": "¿Por qué es difícil?"}, {"x": 450, "titulo": "Criterio 1", "pregunta": "¿Tiene episodios de sibilancias?"}, {"x": 750, "titulo": "Criterio 2", "pregunta": "¿Puede ser otra cosa?"}, {"x": 1050, "titulo": "Criterio 3 y pruebas", "pregunta": "¿Responde al tratamiento?"}]},
  "gr-c11": {"titulo": "Cap. 11 · Evaluación y tratamiento (5 años o menos)", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 11 Tratamiento ≤ 5"], "bajada": "Cómo evaluar el control en los más chicos, qué hablar sobre remisión, los cuatro pasos de tratamiento con SABA y CI diario, las dosis bajas de CI, cómo revisar la respuesta, la aerocámara según la edad y la educación de la familia.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "Evaluar", "pregunta": "¿Cómo está y qué riesgo tiene?"}, {"x": 450, "titulo": "Pasos", "pregunta": "¿Qué indico?"}, {"x": 750, "titulo": "Ajustar", "pregunta": "¿Subo, bajo o suspendo?"}, {"x": 1050, "titulo": "Cómo dárselo", "pregunta": "¿Con qué dispositivo y qué enseño?"}]},
  "gr-c12": {"titulo": "Cap. 12 · Crisis en 5 años o menos", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 12 Crisis ≤ 5"], "bajada": "La crisis en los más chicos: cómo se reconoce, qué hace la familia en casa, gravedad y PRAM, los flujogramas nuevos de 2026 para atención primaria y guardia, cuándo derivar al hospital, dosis y qué dejar armado al alta.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "En casa", "pregunta": "¿Qué hace la familia?"}, {"x": 450, "titulo": "Evaluar", "pregunta": "¿Qué tan grave es?"}, {"x": 750, "titulo": "Tratar", "pregunta": "¿Qué doy y cuándo derivo?"}, {"x": 1050, "titulo": "Después", "pregunta": "¿Qué dejo armado?"}]},
  "gr-c13": {"titulo": "Cap. 13 · Prevención primaria del asma", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 13 Prevención"], "bajada": "Qué factores del embarazo y la primera infancia se asocian con más o menos asma, qué se le puede aconsejar a una familia y qué se sabe de la prevención en adultos.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "Dieta", "pregunta": "¿Lo que come la madre o el bebé?"}, {"x": 450, "titulo": "Ambiente", "pregunta": "¿Alérgenos, humo, microbios, virus?"}, {"x": 750, "titulo": "Otros factores", "pregunta": "¿Remedios, estrés, peso, prematurez?"}, {"x": 1050, "titulo": "Qué aconsejar", "pregunta": "¿Qué le digo a la familia?"}]},
  "gr-c14": {"titulo": "Cap. 14 · Implementación y apéndices", "padre": "gina-reporte", "ruta": ["Pediatría", "Neumonología", "Asma", "GINA 2026 completo", "Cap. 14 y apéndices"], "bajada": "Cómo llevar la estrategia a un sistema de salud, más los dos apéndices del reporte: biomarcadores tipo 2 (eosinófilos y FeNO) y el resumen de las clases de medicamentos.", "disposicion": "columnas", "columnas": [{"x": 150, "titulo": "Implementar", "pregunta": "¿Cómo se lleva a la práctica?"}, {"x": 450, "titulo": "Qué funciona", "pregunta": "¿Qué intervenciones rinden más?"}, {"x": 750, "titulo": "Apéndice A", "pregunta": "¿Cómo leo eosinófilos y FeNO?"}, {"x": 1050, "titulo": "Apéndice B", "pregunta": "¿Qué hace cada medicamento?"}]},
  /*/gr-mapas*/
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
      { id: "neumo", titulo: "Neumonología", detalle: "Bronquiolitis, sibilancias, asma y neumonía", organo: "pulmones", mapa: "raiz", color: "var(--edad-2)", lado: "izq", y: 186 },
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
  },
  irab: {
    titulo: "IRAB y neumonía",
    padre: "raiz",
    tema: "irab",
    ruta: ["Pediatría", "Neumonología", "IRAB y neumonía"],
    bajada: "Las infecciones respiratorias agudas bajas en tres zonas: qué nombre le ponemos (y por qué cada país usa otro), la neumonía adquirida en la comunidad, de la sospecha a la radiografía y el antibiótico, y las neumonitis según el germen. El color del punto indica qué tipo de agente la causa.",
    disposicion: "zonas",
    indice: "IRAB por zona",
    buscar: "Buscar: taquipnea, Rx equívoca, Mycoplasma, Chlamydia…",
    pista: "Cada zona responde una pregunta distinta. El color del punto indica el tipo de agente; un segundo punto chico, que puede tener más de uno. Elegí un recorrido para seguir a un paciente.",
    causas: ["viral", "bacteriana", "atipica", "otra"],
    zonas: [
      { x: 30, y: 60, w: 360, h: 560, titulo: "¿Cómo lo llamamos?" },
      { x: 410, y: 60, w: 440, h: 560, titulo: "Neumonía adquirida en la comunidad" },
      { x: 870, y: 60, w: 300, h: 560, titulo: "Neumonitis y gérmenes" }
    ],
    recorridos: [
      { id: "fiebre-taquipnea", titulo: "14 meses, fiebre y taquipnea en la guardia", descripcion: "Dos días de fiebre de 39 °C y tos; FR 52, SatO₂ 95 %, leve tiraje subcostal, crepitantes en la base derecha.", pasos: [
        { nodo: "nac-clinica", nota: "Lo que más pesa es la saturación de 95 % y el trabajo respiratorio, no la taquipnea ni la auscultación por separado." },
        { nodo: "irab-oms", nota: "Para la OMS ya es «neumonía» (respiración rápida y tiraje); sin signos de peligro, se trata en el domicilio." },
        { nodo: "nac-rx", nota: "Si está estable, la radiografía no es obligatoria para tratar. Se pide si hay hipoxemia, dificultad importante, mala evolución o se interna." },
        { nodo: "nac-etiologia", nota: "A esta edad la causa más probable es un virus, aunque haya crepitantes." },
        { nodo: "nac-atb", nota: "Si no puede descartarse la causa bacteriana: amoxicilina en dosis altas, 5 días." },
        { nodo: "nac-internacion", nota: "Pautas de alarma claras y control en 48 horas." }
      ] },
      { id: "rx-equivoca", titulo: "La Rx dice «infiltrado peribronquial»", descripcion: "3 años, fiebre y tos. Se pidió una radiografía y el informe es dudoso.", pasos: [
        { nodo: "nac-rx-lectura", nota: "Engrosamiento peribronquial y opacidades parcheadas no son consolidación: es una placa equívoca." },
        { nodo: "nac-rx-atb", nota: "Ante una placa equívoca se tiende a dar antibiótico; la decisión debería volver a la clínica." },
        { nodo: "nac-bps", nota: "El BPS ayuda a descartar la causa bacteriana, con cautela fuera de la internación." },
        { nodo: "nac-etiologia", nota: "Patrón intersticial o peribronquial: más compatible con virus o atípicos." },
        { nodo: "nac-atb", nota: "Si se decide tratar, amoxicilina y un plan de control; si no, pautas de alarma." }
      ] },
      { id: "lactante-afebril", titulo: "7 semanas, tos en accesos y sin fiebre", descripcion: "Tos desde hace 10 días que empeora, en accesos; está afebril y entre los accesos se lo ve bien.", pasos: [
        { nodo: "neu-que", nota: "Sin fiebre y con tos que domina el cuadro, pensar en neumonitis y en tos convulsa antes que en una neumonía típica." },
        { nodo: "neu-pertussis", nota: "Accesos con cianosis, apneas o vómitos y linfocitosis: tos convulsa. Es lo más urgente de descartar." },
        { nodo: "neu-afebril", nota: "Tos en staccato, taquipnea, conjuntivitis previa y eosinofilia: neumonitis afebril del lactante." },
        { nodo: "neu-chlamydia", nota: "La causa clásica es Chlamydia trachomatis transmitida en el parto." },
        { nodo: "neu-viral", nota: "El VSR y otros virus también dan cuadros afebriles a esta edad." }
      ] },
      { id: "escolar-tos", titulo: "8 años, tos de 10 días y cefalea", descripcion: "Febrícula, cefalea, tos seca persistente; buen estado general. Crepitantes difusos; hermano con cuadro parecido.", pasos: [
        { nodo: "neu-mycoplasma", nota: "Escolar, comienzo gradual, tos que domina, contactos con lo mismo: Mycoplasma pneumoniae." },
        { nodo: "nac-etiologia", nota: "Desde los 5 años Mycoplasma pasa a ser una causa principal." },
        { nodo: "nac-atb", nota: "La amoxicilina no lo cubre; si se trata, macrólido." },
        { nodo: "nac-complicaciones", nota: "Si la fiebre persiste pese al tratamiento, buscar complicaciones y repensar el diagnóstico." }
      ] },
      { id: "nombres", titulo: "La misma tos, cinco nombres", descripcion: "Un lactante de 11 meses con su primer cuadro de tos, rales y sibilancias, contado en distintos países.", pasos: [
        { nodo: "irab-paraguas", nota: "En Argentina es una IRAB; el nombre preciso depende de la definición que se use." },
        { nodo: "irab-bronquiolitis-def", nota: "SAP y AAP: bronquiolitis. Con la definición australiana (menores de 12 meses) también." },
        { nodo: "irab-oms", nota: "Para la OMS, si respira rápido es «neumonía»." },
        { nodo: "irab-etiquetas", nota: "En otro servicio puede figurar como síndrome bronquial obstructivo o bronquitis." },
        { nodo: "irab-lrti", nota: "En un artículo británico, «lower respiratory tract infection»." },
        { nodo: "irab-investigar", nota: "Antes de aplicar un estudio, mirar qué definición usó." }
      ] }
    ]
  },
  /*hs-mapas*/
  "historia": {"titulo": "Historia de las sibilancias: el diálogo de los artículos", "padre": "raiz", "ruta": ["Pediatría", "Neumonología", "Sibilancias", "Historia de las ideas"], "bajada": "Cómo se fue armando lo que hoy sabemos sobre bronquiolitis, sibilancias recurrentes, IPA y asma, de Tucson a los rasgos tratables. Cada punto es un artículo: tocalo para ver qué aportó, qué sigue vigente, qué se superó y cómo se hizo el estudio. Las flechas muestran cómo un artículo le responde a otro. Parte de la bibliografía del ateneo «¿Por qué hacemos lo que hacemos?» (noviembre de 2026), ampliada.", "disposicion": "historia", "ancho": 1460, "alto": 1422, "eras": [{"desde": 1987, "hasta": 2000, "x0": 250, "x1": 450, "titulo": "1988–1999 · Las cohortes", "pregunta": "¿Todo lactante que sibila tiene asma?"}, {"desde": 2000, "hasta": 2010, "x0": 450, "x1": 860, "titulo": "2000–2009 · Predecir y tratar temprano", "pregunta": "¿Podemos cambiar la historia?"}, {"desde": 2010, "hasta": 2020, "x0": 860, "x1": 1225, "titulo": "2010–2019 · Los matices", "pregunta": "¿A quién le sirve cada cosa?"}, {"desde": 2020, "hasta": 2027, "x0": 1225, "x1": 1440, "titulo": "2020–2026 · Rasgos y prevención", "pregunta": "¿Tratar mecanismos y prevenir el virus?"}], "anios": [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025], "hilos": [{"id": "br", "titulo": "Bronquiolitis", "sub": "Qué hacer con el lactante", "color": "var(--c-irab)", "y": 104, "alto": 198}, {"id": "vi", "titulo": "Virus y asma", "sub": "¿Causa o marcador?", "color": "var(--c-vir)", "y": 310, "alto": 198}, {"id": "hn", "titulo": "Historia natural", "sub": "¿Qué pasa con el tiempo?", "color": "var(--perox)", "y": 516, "alto": 144}, {"id": "pr", "titulo": "Predecir y clasificar", "sub": "¿Quién tendrá asma?", "color": "var(--c-ale)", "y": 668, "alto": 144}, {"id": "ma", "titulo": "Tratamiento de mantenimiento", "sub": "¿Qué controlador y para quién?", "color": "var(--edad-3)", "y": 820, "alto": 252}, {"id": "cr", "titulo": "La crisis", "sub": "¿Qué hago hoy?", "color": "var(--c-inf)", "y": 1080, "alto": 198}], "pista": "Cada fila es un hilo de preguntas y cada punto, un artículo ubicado en su año. Las flechas van del artículo más viejo al que le respondió. Pasá el cursor o tocá un artículo para ver con quiénes dialoga. En el celular, deslizá el mapa hacia los costados.", "buscar": "Buscar: Tucson, IPA, rinovirus, prednisolona…", "indice": "Artículos por hilo", "recorridos": [{"id": "experto", "titulo": "La historia en 12 artículos", "descripcion": "El hilo que un neumonólogo pediatra suele tener en la cabeza, de la vía aérea chica a los rasgos tratables.", "pasos": [{"nodo": "h-martinez1988", "nota": "Antes del virus, muchos lactantes ya tenían la vía aérea más chica."}, {"nodo": "h-martinez1995", "nota": "No todo lactante que sibila tiene asma: transitorios, persistentes y tardíos."}, {"nodo": "h-castro2000", "nota": "El IPA lleva Tucson al consultorio, sobre todo para tranquilizar cuando es negativo."}, {"nodo": "h-camp2000", "nota": "En el escolar, el corticoide inhalado controla pero no cambia la historia."}, {"nodo": "h-guilbert2006", "nota": "En el preescolar de alto riesgo, tampoco previene el asma."}, {"nodo": "h-jackson2008", "nota": "El rinovirus, más que el VSR, marca al niño que tendrá asma."}, {"nodo": "h-brand2008", "nota": "La ERS clasifica por el patrón actual: episódico viral o múltiples desencadenantes."}, {"nodo": "h-ducharme2009", "nota": "El corticoide inhalado intermitente en dosis alta sirve en las crisis virales más graves."}, {"nodo": "h-panickar2009", "nota": "El corticoide oral de rutina no sirve en la crisis leve a moderada."}, {"nodo": "h-brand2014", "nota": "La ERS se corrige: los patrones cambian y todo controlador es una prueba."}, {"nodo": "h-fitzpatrick2016", "nota": "La sensibilización y los eosinófilos predicen quién responde al corticoide inhalado."}, {"nodo": "h-makrinioti2024", "nota": "Del fenotipo clínico al rasgo tratable."}]}, {"id": "ci", "titulo": "¿El corticoide inhalado cambia la historia?", "descripcion": "Treinta años de una misma pregunta.", "pasos": [{"nodo": "h-camp2000", "nota": "Escolares: mejor control, misma función pulmonar a largo plazo."}, {"nodo": "h-guilbert2006", "nota": "Preescolares con IPA positivo: no previene el asma al suspenderlo."}, {"nodo": "h-bisgaard2006", "nota": "Lactantes con tratamiento intermitente desde el primer episodio: tampoco."}, {"nodo": "h-castro2009", "nota": "Pero mientras se usa, reduce las crisis casi a la mitad."}, {"nodo": "h-zeiger2011", "nota": "Diario o intermitente: resultados similares con menos fármaco."}, {"nodo": "h-fitzpatrick2016", "nota": "La pregunta cambia: ¿a quién le sirve?"}, {"nodo": "h-mcgeachie2016", "nota": "Algunos niños con asma nunca alcanzan la función pulmonar esperada."}]}, {"id": "virus", "titulo": "Del VSR al asma: ¿causa o marcador?", "descripcion": "Cohortes, ensayos y la prevención que viene.", "pasos": [{"nodo": "h-martinez1988", "nota": "La vía aérea chica precede al virus."}, {"nodo": "h-stein1999", "nota": "El VSR aumenta las sibilancias hasta los 11 años, sin alergia."}, {"nodo": "h-sigurs2005", "nota": "El VSR grave sí se asocia con asma alérgica a los 13."}, {"nodo": "h-kusel2007", "nota": "El virus pesa cuando coincide con la sensibilización temprana."}, {"nodo": "h-jackson2008", "nota": "El rinovirus predice el asma más que el VSR."}, {"nodo": "h-blanken2013", "nota": "Prevenir el VSR reduce las sibilancias del primer año."}, {"nodo": "h-scheltema2018", "nota": "Pero no el asma diagnosticada a los 6 años."}, {"nodo": "h-rosas2023", "nota": "En término, no tener VSR se asocia con menos asma."}, {"nodo": "h-melody2022", "nota": "Con el nirsevimab, la pregunta se podrá responder."}]}, {"id": "oral", "titulo": "Corticoide oral en la crisis del preescolar", "descripcion": "Un péndulo de veinte años.", "pasos": [{"nodo": "h-oommen2003", "nota": "Iniciado por los padres en casa: no sirve."}, {"nodo": "h-panickar2009", "nota": "En el hospital, en la crisis leve a moderada: tampoco."}, {"nodo": "h-brand2014", "nota": "La ERS lo reserva para internados graves."}, {"nodo": "h-foster2018", "nota": "En la guardia, acorta algo la estadía."}, {"nodo": "h-lee2024", "nota": "Beneficio chico, mayor con antecedentes de sibilancias o asma."}]}, {"id": "bronq", "titulo": "Bronquiolitis: menos es más", "descripcion": "Cómo se fue quitando lo que no servía.", "pasos": [{"nodo": "h-wainwright2003", "nota": "Adrenalina en internados: no acorta la internación."}, {"nodo": "h-corneli2007", "nota": "Dexametasona en guardia: no evita internaciones."}, {"nodo": "h-plint2009", "nota": "La combinación parecía servir, pero no resistió."}, {"nodo": "h-ralston2014", "nota": "La AAP desaconseja broncodilatadores, corticoides y estudios de rutina."}, {"nodo": "h-schuh2014", "nota": "El número del oxímetro empuja a internar."}, {"nodo": "h-cunningham2015", "nota": "Una saturación de 90 % o más es segura."}, {"nodo": "h-paris2018", "nota": "El alto flujo sirve cuando el oxígeno estándar no alcanza."}, {"nodo": "h-melody2022", "nota": "Y la prevención con nirsevimab cambia el problema."}]}, {"id": "fenotipos", "titulo": "Del fenotipo clínico al rasgo tratable", "descripcion": "Cómo cambió la forma de clasificar al niño que sibila.", "pasos": [{"nodo": "h-martinez1995", "nota": "Fenotipos definidos mirando hacia atrás a los 6 años."}, {"nodo": "h-castro2000", "nota": "Un índice para anticiparlos."}, {"nodo": "h-henderson2008", "nota": "Fenotipos que surgen de los datos: seis patrones."}, {"nodo": "h-brand2008", "nota": "Fenotipos por el patrón actual."}, {"nodo": "h-smit2015", "nota": "Ningún índice predice bien en las dos direcciones."}, {"nodo": "h-brand2014", "nota": "Los patrones cambian con el tiempo."}, {"nodo": "h-fitzpatrick2016", "nota": "Los biomarcadores predicen la respuesta."}, {"nodo": "h-makrinioti2024", "nota": "Rasgos tratables en lugar de fenotipos."}]}]},
  /*/hs-mapas*/
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
    ateneos: [
      { titulo: "¿Por qué hacemos lo que hacemos? Diagnóstico y tratamiento del paciente sibilante", fecha: "25 de noviembre de 2026" }
    ],
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
      { h: "Definición", html: "<p>La ERS (2024) propone: edad de 0 a menos de 6 años, <b>más de un episodio</b> de sibilancias y <b>al menos uno confirmado</b> por un profesional. Antes no había un criterio único: muchos estudios pedían tres o más episodios en el último año. Ese número no es la definición del síndrome; se parece al umbral de «sibilancias frecuentes» del <a href=\"#ipa\">IPA</a>, que es un índice de <i>riesgo</i>. Conviene revisar qué criterio usó cada estudio.</p><p class=\"nota\">Borrador: falta la fuente de «tres o más episodios»; verificar contra el texto original.</p><p>Después de nombrarlo, registrar cómo está el chico <b>entre episodios</b>: si está bien entre resfríos o si tiene síntomas con el juego, la risa o durante el sueño.</p>" },
      { h: "Tres pacientes que sibilan", html: "<p>Un lactante de 7 meses con su primer episodio, un chico de 18 meses con su cuarto episodio y bien entre resfríos, y una nena de 4 años con tos nocturna y sibilancias al correr pueden sonar igual al auscultarlos. Lo que los distingue es <b>cuándo empezó, cuántas veces pasó y qué ocurre entre episodios</b>. Ver la pestaña Casos.</p>" },
      { h: "Fenotipos", html: "<p><b>Por evolución</b> (Tucson, ALSPAC): trayectorias que solo se asignan mirando hacia atrás, cuando el chico creció.</p><p><b>Por patrón clínico</b> (ERS 2008): <i>episódicas virales</i> o <i>por desencadenantes múltiples</i>. La ERS 2024 advierte que estas etiquetas no reflejan la patología de la vía aérea y predicen mal la respuesta al tratamiento; sirven para buscar bibliografía. Propone sumar <b>rasgos tratables</b>: eosinófilos en sangre, sensibilización a aeroalérgenos, función pulmonar e infección.</p><p>La clasificación ERS 2008 es <b>descriptiva</b>: ayuda a hablar del mismo chico, pero no alcanza sola para elegir el controlador.</p>" },
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
      { h: "Montelukast", html: "<p>Es la alternativa al CI en el paso 2, con menos eficacia. En sibilancias episódicas virales la evidencia es pobre: el uso diario redujo crisis en un ensayo financiado por el fabricante (PREVIA), pero la revisión Cochrane no mostró menos episodios con corticoide oral, y el uso intermitente no fue mejor que placebo (WAIT). Tiene advertencia de la FDA por efectos neuropsiquiátricos. Ver <a href=\"#sr-montelukast\">Montelukast</a>.</p>" },
      { h: "Historia natural", html: "<p><b>Prevenir asma ≠ controlar asma.</b> Los CI controlan síntomas mientras se usan, pero <b>no modifican</b> la evolución hacia asma (PEAK, Bisgaard 2006).</p>" }
    ],
    diferenciales: [
      { dx:"Asma", claves: "<ul><li>Síntomas también entre infecciones (ejercicio, risa, llanto, noche).</li><li>Atopia, antecedentes familiares; buena respuesta al broncodilatador y al CI.</li></ul>", nodo: "asma" },
      { dx:"Bronquiolitis obliterante postinfecciosa", claves: "<ul><li>Antecedente de una bronquiolitis grave (adenovirus) y síntomas persistentes desde entonces.</li><li>Rales y sibilancias fijos, sin respuesta al broncodilatador; TC con patrón en mosaico.</li></ul>", nodo: "bo-postinfecciosa" },
      { dx:"Fibrosis quística", claves: "<ul><li>Mal progreso de peso, diarrea grasa, infecciones bacterianas a repetición, hipocratismo.</li><li>Test del sudor alterado.</li></ul>" },
      { dx:"Malformaciones de la vía aérea o anillos vasculares", claves: "<ul><li>Sibilancia o estridor desde el nacimiento, monofónica, que no cambia con los episodios.</li><li>Empeora con el llanto o la alimentación.</li></ul>" },
      { dx:"Reflujo gastroesofágico con aspiración", claves: "<ul><li>Síntomas relacionados con las tomas, tos al comer, neumonías recurrentes en el mismo lóbulo.</li></ul>" },
      { dx:"Cuerpo extraño", claves: "<ul><li>Inicio brusco, episodio de atragantamiento, sibilancia unilateral o localizada.</li></ul>" }
    ],
    evidencia: ["makrinioti2024", "gina2026", "martinez1995", "henderson2008", "jackson2008", "lee2024", "zeiger2011", "fitzpatrick2016", "guilbert2006", "bisgaard2006", "brand2008", "castro2000", "bacharier2015", "jartti2006", "panickar2009", "bisgaard2005", "brodlie2015", "nwokoro2014", "glockler2019", "ducharme2009", "foster2018", "kaiser2016", "bizzintino2011", "stokholm2016"],
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
        respuesta: "La sensibilización a aeroalérgenos predijo la mejor respuesta al CI diario frente al montelukast o al CI a demanda; con sensibilización y eosinófilos ≥ 300/µL juntos, la probabilidad fue aún mayor. La historia de crisis no la predijo.",
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
      { titulo: "¿Por qué hacemos lo que hacemos? Diagnóstico y tratamiento del paciente sibilante", fecha: "25 de noviembre de 2026" }
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
    evidencia: ["reddel2022", "stanojevic2022", "sobieraj2018", "bisgaard2006chest", "obyrne2018", "kelly2012", "griffiths2013", "keeney2014", "griffiths2016", "powell2013", "castro2000", "gaillard2021"],
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
    conexiones: ["vsr", "bronquiolitis", "prematurez", "sr-vsr-asma"],
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
      { h: "Puntos clave", html: "<ul><li>Bronquiolitis: oxígeno si la SatO₂ es menor de 90–92 % según la guía. No perseguir saturaciones altas ni monitorizar en forma continua a quienes ya no lo necesitan.</li><li>Crisis asmática: objetivo de SatO₂ entre 92 y 95 % (GINA 2026).</li><li>El número no es todo: con un oxímetro que mostraba 3 puntos más de lo real, se internó el 25 % de los lactantes con bronquiolitis leve a moderada en lugar del 41 % (Schuh 2014). Apuntar a una SatO₂ de 90 % fue tan seguro y eficaz como apuntar a 94 % (Cunningham 2015).</li><li>CNAF: aporta flujo calentado y humidificado, con algo de presión positiva. En bronquiolitis su lugar es el rescate tras falla del oxígeno estándar.</li></ul>" }
    ],
    evidencia: ["paris2018", "ralston2014", "schuh2014", "cunningham2015"],
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
      { h: "Dos clasificaciones", html: "<p><b>Tucson (por evolución)</b>: transitorias tempranas, persistentes y de inicio tardío. Útil para investigación; solo se aplica mirando hacia atrás.</p><p><b>ERS 2008 (por patrón clínico)</b>: episódicas virales o por desencadenantes múltiples. Es <b>descriptiva</b>: el fenotipo cambia con el tiempo, y la ERS 2024 advierte que predice mal la respuesta al tratamiento. Para elegir el controlador conviene mirar <b>rasgos tratables</b>: síntomas entre episodios, sensibilización a aeroalérgenos y eosinófilos.</p><p class=\"nota\">Borrador: verificar contra el texto original.</p>" }
    ],
    evidencia: ["martinez1995", "henderson2008", "brand2008", "makrinioti2024"],
    pico: [], ateneos: [],
    conexiones: ["sibilancias", "ipa", "asma"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "ipa", nivel: 2, titulo: "Índice Predictivo de Asma", corto: "IPA", tipo: "concepto",
    x: 790, y: 165,
    resumen: "Estima el riesgo de asma en edad escolar en un preescolar con sibilancias.",
    teoria: [
      { h: "Criterios (Castro-Rodríguez 2000)", html: `<p>Sibilancias <b>frecuentes</b> en los primeros 3 años (versión estricta; la laxa acepta cualquier sibilancia) más:</p>
        <div class="tabla"><table><thead><tr><th>Mayores (1)</th><th>Menores (2)</th></tr></thead>
        <tbody><tr><td>Asma en padre o madre</td><td>Rinitis alérgica</td></tr>
        <tr><td>Dermatitis atópica</td><td>Sibilancias sin resfrío</td></tr>
        <tr><td></td><td>Eosinofilia ≥ 4 %</td></tr></tbody></table></div>
        <p>Positivo con 1 criterio mayor o 2 menores. La versión modificada agrega sensibilización a aeroalérgenos como mayor y sensibilización a alimentos como menor.</p>
        <p>«Sibilancias frecuentes» es un criterio de <b>riesgo</b> del índice, no la definición de sibilancias recurrentes. Muchas adaptaciones lo traducen como 3 o más episodios por año.</p>
        <p class="nota">Revisar la fila de eosinofilia (≥ 4 %) y la definición de «frecuentes» contra el artículo original: el resumen no las detalla.</p>` },
      { h: "Cuánto rinde (Castro-Rodríguez 2000)", html: `<div class="tabla"><table><thead><tr><th></th><th>IPA estricto</th><th>IPA laxo</th></tr></thead>
        <tbody><tr><td>Positivo: tuvo asma activa entre los 6 y 13 años</td><td>76 %</td><td>59 %</td></tr>
        <tr><td>Negativo: nunca tuvo asma activa en ese período</td><td>más del 95 %</td><td>—</td></tr>
        <tr><td>Riesgo frente al índice negativo</td><td>4,3 a 9,8 veces</td><td>2,6 a 5,5 veces</td></tr></tbody></table></div>
        <p>Su mayor valor está en el negativo: un IPA estricto negativo hace muy poco probable el asma escolar. El positivo es modesto.</p>
        <p class="nota">Cifras del resumen del artículo, que reporta proporciones con asma y no valores predictivos con ese nombre. Verificar contra el texto original.</p>` }
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
      { h: "Puntos clave", html: "<ul><li>Controlador de elección en asma persistente.</li><li>En preescolares, la indicación se apoya en <b>rasgos tratables</b> más que en la etiqueta del fenotipo: síntomas entre episodios o crisis frecuentes, sensibilización a aeroalérgenos y, sobre todo si se suman, eosinófilos ≥ 300/µL (INFANT).</li><li><b>Prevenir asma ≠ controlar asma</b>: controlan síntomas mientras se usan, pero no previenen la aparición de asma (PEAK).</li><li>El esquema intermitente en altas dosis es una alternativa en preescolares con sibilancias episódicas (MIST).</li><li>Efecto sobre la talla: pequeño y relacionado con la dosis; usar la mínima dosis eficaz.</li><li>Clave: técnica inhalatoria y adherencia.</li></ul><p class=\"nota\">Borrador: verificar contra el texto original.</p>" }
    ],
    evidencia: ["guilbert2006", "zeiger2011", "fitzpatrick2016", "sobieraj2018", "makrinioti2024"],
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
      { h: "Qué cambia respecto de 2008", html: "<p>Las categorías <i>episodic viral wheeze</i> y <i>multiple-trigger wheeze</i> no reflejan la patología de la vía aérea y pueden no predecir la respuesta al tratamiento. Siguen sirviendo para recuperar estudios. La propuesta es describir el patrón entre episodios y sumar rasgos tratables: eosinófilos en sangre, sensibilización a aeroalérgenos, función pulmonar e infección.</p>" },
      { h: "El paso intermedio (2014)", html: "<p>Seis años después de 2008, el grupo de la ERS reconoció que el patrón de sibilancias cambia con el tiempo y con el tratamiento, y que en muchos chicos la distinción entre viral episódica y múltiples desencadenantes no es clara. Propuso considerar el CI también en la viral episódica con episodios frecuentes o graves, tomar todo controlador como una prueba con seguimiento cercano y suspenderlo si no hay beneficio (Brand 2014).</p>" }
    ],
    evidencia: ["makrinioti2024", "brand2008", "brand2014"],
    pico: [], ateneos: [
      { titulo: "¿Por qué hacemos lo que hacemos? Diagnóstico y tratamiento del paciente sibilante", fecha: "25 de noviembre de 2026" }
    ],
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
    pico: [], ateneos: [
      { titulo: "¿Por qué hacemos lo que hacemos? Diagnóstico y tratamiento del paciente sibilante", fecha: "25 de noviembre de 2026" }
    ],
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
    x: 450, y: 165,
    resumen: "Primero cuánto le cuesta respirar; después cuánto cambia con el salbutamol.",
    teoria: [
      { h: "Qué evaluar", html: "<ul><li>Frecuencia respiratoria, tiraje y saturación</li><li>Capacidad para hablar, alimentarse e hidratarse</li><li>Estado de conciencia</li><li>Un score clínico objetivo antes y después del broncodilatador: el <b>PRAM</b> está validado desde los 2 años (ver Cap. 12 del reporte GINA)</li></ul>" },
      { h: "Por qué medir antes y después", html: "<p>La respuesta documentada orienta el tratamiento de hoy y, además, es uno de los criterios para diagnosticar asma en menores de 6 años.</p>" }
    ],
    evidencia: ["gina2026", "ducharme2008"],
    pico: [], ateneos: [],
    conexiones: ["sr-terminos", "sr-salbutamol", "sr-cort-oral", "sr-gina5"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-salbutamol", nivel: 1, mapa: "sibilancias", titulo: "Salbutamol con aerocámara", tipo: "concepto",
    x: 450, y: 285,
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
    x: 450, y: 405,
    resumen: "Beneficio modesto, mayor en quienes ya tienen historia de sibilancias o asma.",
    teoria: [
      { h: "Qué dice la evidencia", html: "<p>Un metaanálisis de datos individuales (7 ensayos, 1728 chicos de 12 a 71 meses) mostró mejoría del puntaje de sibilancias a las 4 horas, sin diferencia clara a las 12, y una internación 3,2 horas más corta. En quienes tenían antecedentes de sibilancias o asma, 4,5 horas.</p><p>Los ensayos individuales no coinciden: en Panickar 2009 (chicos internados) no hubo diferencia en la duración de la internación; en Foster 2018 (605 chicos de 2 a 6 años en guardia), con prednisolona 1 mg/kg/día por 3 días llegaron antes a estar en condiciones de alta (mediana 370 frente a 540 minutos).</p>" },
      { h: "Al lado de la camilla", html: "<ul><li>Valorar gravedad y respuesta al salbutamol primero.</li><li>El beneficio es más plausible si la crisis requiere atención hospitalaria y hay antecedentes.</li><li>Las horas de estadía medidas no dicen cuánto ganaría un chico con una crisis leve en su casa.</li><li>El lactante con su primera bronquiolitis queda fuera de esta evidencia.</li></ul>" },
      { h: "En casa y en la crisis leve", html: "<p>La prednisolona iniciada por los padres al comenzar un nuevo episodio viral, en chicos de 1 a 5 años, no mejoró los síntomas ni las internaciones frente a placebo, ni siquiera en quienes tenían más «preparación» eosinofílica (Oommen 2003). La actualización de la ERS de 2014 lo resume: no indicarlo en episodios leves a moderados y reservarlo para crisis graves que requieren internación (Brand 2014).</p>" }
    ],
    evidencia: ["lee2024", "panickar2009", "jartti2006", "foster2018", "oommen2003", "brand2014"],
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
    ateneos: [
      { titulo: "¿Por qué hacemos lo que hacemos? Diagnóstico y tratamiento del paciente sibilante", fecha: "25 de noviembre de 2026" }
    ],
    conexiones: ["sr-gravedad", "sr-rinovirus", "cort-sistemicos", "sr-azitromicina"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-patron", nivel: 1, mapa: "sibilancias", titulo: "Patrón entre episodios", tipo: "concepto",
    x: 750, y: 150,
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
    x: 750, y: 255,
    resumen: "Controlador de elección cuando hay síntomas entre episodios o crisis frecuentes. Prueba de 2 a 3 meses.",
    teoria: [
      { h: "Cuándo", html: "<p>Patrón compatible con asma y síntomas no controlados, o crisis frecuentes (por ejemplo, tres o más por año). Es una prueba terapéutica: reevaluar a los 2–3 meses y suspender si no hay beneficio claro.</p>" },
      { h: "Dosis bajas en 5 años o menos (GINA)", html: "<div class=\"tabla\"><table><thead><tr><th>Fármaco</th><th>Dosis diaria baja</th></tr></thead><tbody><tr><td>Beclometasona HFA (IDM)</td><td>100 µg</td></tr><tr><td>Budesonida nebulizada</td><td>500 µg</td></tr><tr><td>Fluticasona propionato HFA (IDM)</td><td>50 µg</td></tr></tbody></table></div><p class=\"nota\">Verificar con la tabla de GINA vigente.</p>" },
      { h: "¿Quién responde mejor?", html: "<p>En INFANT, la mejor respuesta al CI diario la predijo la <b>sensibilización a aeroalérgenos</b>, y fue aún más probable si además había <b>eosinófilos ≥ 300/µL</b>. La historia de crisis no la predijo. Es un rasgo tratable, no una etiqueta de fenotipo.</p><p class=\"nota\">Medir los eosinófilos con el chico estable. En zonas con parasitosis frecuente una eosinofilia puede ser parasitaria: interpretarla con cuidado. Los puntos de corte no están bien validados para decidir en un chico individual.</p><p class=\"nota\">Borrador: verificar contra el texto original.</p>" },
      { h: "Antes de subir la dosis", html: "<p>Revisar técnica con aerocámara, adherencia, exposición a humo y diagnóstico.</p>" },
      { h: "Seguimiento: cómo medir el control", html: "<p>A los 2–3 meses, además de contar las crisis, sirve un cuestionario validado para menores de 5 años: <b>TRACK</b> (Murphy 2009). Son 5 preguntas para los padres sobre síntomas, despertares y limitación en las últimas 4 semanas, rescates en 3 meses y corticoide oral en el año.</p><p class=\"nota\">Verificar el punto de corte en el cuestionario original antes de usarlo.</p>" },
      { h: "¿Cuándo y cómo suspender?", html: "<p>Muchos preescolares son sibilantes transitorios: el CI controla mientras se usa pero no cambia la evolución, así que conviene plantear la suspensión en cada control, idealmente al terminar el invierno.</p><ul><li><b>Sirianansopa 2023</b> (cohorte, 131 chicos): más de la mitad pudo suspenderlo tras la prueba. Fue más difícil con oxígeno en la primera semana de vida, rinitis alérgica, eosinófilos > 500/mm³ o más de 6 meses de CI.</li><li><b>Thanatcharoenkul 2026</b> (cohorte, 162 sibilantes transitorios): mediana de 16 meses hasta suspender, el doble en los menores de 2 años.</li></ul><p class=\"nota\">Son estudios retrospectivos de un solo centro: orientan, no son reglas. Si no hubo beneficio claro en la prueba, se suspende sin esperar.</p>" }
    ],
    evidencia: ["fitzpatrick2016", "zeiger2011", "gina2026", "kaiser2016", "murphy2009", "sirianansopa2023", "thanatcharoenkul2026"],
    pico: [
      {
        p: "Preescolares con sibilancias persistentes que necesitan un controlador",
        i: "CI diario en dosis bajas",
        c: "Montelukast diario o CI a demanda",
        o: "Probabilidad de mejor respuesta (días controlados, crisis)",
        respuesta: "En conjunto, el CI diario tuvo la mejor respuesta, sobre todo con sensibilización a aeroalérgenos, y más aún si además había eosinófilos ≥ 300/µL. Sin esos marcadores, la diferencia entre estrategias fue menos clara.",
        certeza: "Moderada",
        refs: ["fitzpatrick2016"]
      }
    ],
    ateneos: [
      { titulo: "¿Por qué hacemos lo que hacemos? Diagnóstico y tratamiento del paciente sibilante", fecha: "25 de noviembre de 2026" }
    ],
    conexiones: ["sr-patron", "sr-gina5", "sr-ipa", "sr-historia", "sr-montelukast", "ci"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-ci-intermitente", nivel: 2, mapa: "sibilancias", titulo: "Corticoide inhalado intermitente", corto: "CI intermitente", tipo: "concepto",
    x: 750, y: 360,
    resumen: "Alternativa en chicos que están bien entre resfríos y tuvieron crisis importantes.",
    teoria: [
      { h: "MIST en una frase", html: "<p>278 chicos de 12 a 53 meses, IPA modificado positivo, al menos una crisis importante el año previo y pocos síntomas entre episodios. Budesonida diaria en dosis bajas contra 7 días en dosis altas al inicio de cada resfrío: 0,97 vs 0,95 crisis con corticoide oral por chico-año, con 104 mg menos de budesonida acumulada en el esquema intermitente.</p>" },
      { h: "Cómo leerlo", html: "<p>El intervalo de confianza (0,71 a 1,35) no demuestra superioridad del esquema diario ni establece equivalencia. Comparó dos esquemas activos: no dice cuánto aporta cada uno frente a no usar controlador.</p>" },
      { h: "Frente a placebo", html: "<ul><li><b>Ducharme 2009</b>: fluticasona en dosis muy alta (750 µg cada 12 h) desde el inicio del resfrío redujo el corticoide oral (8 % frente a 18 % de los resfríos), pero con menor ganancia de talla y peso.</li><li><b>Kaiser 2016</b> (metaanálisis): en sibilancias virales o intermitentes, el CI intermitente en dosis alta redujo las crisis con corticoide sistémico (RR 0,65; NNT 6).</li></ul><p>Por eso GINA lo reserva para chicos bien entre resfríos en los que el SABA no alcanza, y solo si se confía en que se va a usar bien.</p>" }
    ],
    evidencia: ["zeiger2011", "bisgaard2006", "ducharme2009", "kaiser2016"],
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
    ateneos: [
      { titulo: "¿Por qué hacemos lo que hacemos? Diagnóstico y tratamiento del paciente sibilante", fecha: "25 de noviembre de 2026" }
    ],
    conexiones: ["sr-patron", "sr-historia"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-ambiente", nivel: 3, mapa: "sibilancias", titulo: "Humedad, humo y hogar", corto: "Humedad y humo", tipo: "concepto",
    x: 750, y: 570,
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
    x: 1050, y: 150,
    resumen: "Tucson y ALSPAC: historias que solo se pueden nombrar cuando el chico creció.",
    teoria: [
      { h: "Tucson (1995)", html: "<p>826 de 1246 recién nacidos con seguimiento completo. A los 6 años: 51,5 % nunca sibilaron, 19,9 % sibilancias tempranas transitorias, 15,0 % de inicio tardío y 13,7 % persistentes. Las transitorias ya tenían menor función pulmonar antes de enfermar; las persistentes, más asma materna e IgE elevada.</p>" },
      { h: "ALSPAC (2008)", html: "<p>6265 chicos, sibilancias registradas siete veces. Seis trayectorias. Las de inicio intermedio (alrededor de 18 meses) se asociaron fuertemente con atopia (OR 8,36) e hiperreactividad a metacolina.</p>" },
      { h: "El límite", html: "<p>Son descripciones de cohortes, asignadas con el seguimiento completo. No son la probabilidad individual de que a este chico «se le pase».</p>" },
      { h: "Función pulmonar (2018)", html: "<p>En tres cohortes (2436 chicos con espirometrías repetidas), el VEF₁ siguió cuatro trayectorias que se mantuvieron desde la edad escolar hasta la adultez temprana. La persistentemente baja (5 %) se asoció con sibilancias persistentes y asma, y en los primeros años con crisis de sibilancias graves, sensibilización alérgica temprana y exposición al humo de tabaco. La mayoría de los lactantes con función baja no terminó en esa trayectoria (Belgrave 2018).</p>" }
    ],
    evidencia: ["martinez1995", "henderson2008", "belgrave2018"],
    pico: [], ateneos: [],
    conexiones: ["sr-patron", "sr-terminos", "sr-rinovirus", "fenotipos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-rinovirus", nivel: 3, mapa: "sibilancias", titulo: "Rinovirus y riesgo de asma", corto: "Rinovirus", tipo: "concepto",
    x: 1050, y: 255,
    resumen: "Sibilar con rinovirus en los primeros años se asocia fuertemente con asma a los 6.",
    teoria: [
      { h: "COAST (2008)", html: "<p>259 chicos con antecedentes familiares de alergia o asma, seguidos hasta los 6 años. Sibilancias con rinovirus antes de los 3 años: OR 9,8 de asma; con VSR: OR 2,6. De quienes sibilaron con rinovirus en el tercer año, 26 de 30 tenían asma a los 6.</p>" },
      { h: "Cómo interpretarlo", html: "<p>La cohorte no permite separar si el virus contribuye a la evolución o si pone en evidencia una susceptibilidad previa. Un rinovirus detectado agrega un dato al pronóstico; el diagnóstico y el controlador siguen dependiendo de la historia y la evolución.</p>" },
      { h: "Rinovirus C", html: "<p>En chicos de 2 a 16 años con crisis que llegaron al hospital, el rinovirus apareció en casi 9 de cada 10 y el grupo C en 6 de cada 10, con crisis más graves que las de los grupos A y B (Bizzintino 2011).</p>" }
    ],
    evidencia: ["jackson2008", "jartti2006", "bizzintino2011"],
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
    conexiones: ["sr-trayectorias", "sr-ipa", "sr-cort-oral", "rinovirus", "sr-vsr-asma"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-ipa", nivel: 2, mapa: "sibilancias", titulo: "IPA y rasgos tratables", tipo: "concepto",
    x: 1050, y: 360,
    resumen: "Predecir asma (IPA) y predecir respuesta al tratamiento (eosinófilos, sensibilización) son preguntas distintas.",
    teoria: [
      { h: "Dos preguntas", html: "<ul><li><b>¿Va a tener asma?</b> El Índice Predictivo de Asma tiene buen valor predictivo negativo.</li><li><b>¿Qué tratamiento le va a servir?</b> La sensibilización a aeroalérgenos, sobre todo junto con eosinófilos ≥ 300/µL, se asocia con mejor respuesta al CI diario (INFANT).</li></ul>" },
      { h: "En la práctica", html: "<p>Un hemograma con eosinófilos y una evaluación de sensibilización (prick test o IgE específica) pueden ayudar a decidir el controlador en el preescolar con sibilancias persistentes.</p>" },
      { h: "Los límites de la predicción", html: "<p>Una revisión sistemática de 12 modelos para predecir asma escolar en preescolares con síntomas encontró que algunos predicen mejor y otros descartan mejor, pero ninguno se destaca en las dos cosas a la vez (Smit 2015). En muchos chicos con sibilancias, anticipar el asma sigue siendo difícil: el índice orienta la conversación con la familia, no decide el tratamiento.</p>" }
    ],
    evidencia: ["castro2000", "fitzpatrick2016", "makrinioti2024", "smit2015"],
    pico: [], ateneos: [
      { titulo: "¿Por qué hacemos lo que hacemos? Diagnóstico y tratamiento del paciente sibilante", fecha: "25 de noviembre de 2026" }
    ],
    conexiones: ["sr-rinovirus", "sr-ci-diario", "sr-ers", "ipa"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-historia", nivel: 3, mapa: "sibilancias", titulo: "¿El corticoide inhalado cambia la evolución?", corto: "¿El CI cambia la evolución?", tipo: "concepto",
    x: 1050, y: 465,
    resumen: "Prevenir asma ≠ controlar asma. El CI controla síntomas mientras se usa, pero no previene el asma.",
    teoria: [
      { h: "Prevenir asma ≠ controlar asma", html: "<p>Son dos objetivos distintos. <b>Controlar</b> es que hoy esté bien y tenga menos crisis: el CI lo logra mientras se usa. <b>Prevenir</b> sería cambiar la historia natural, que a los 6 años tenga o no asma: ningún esquema de CI lo logró.</p>" },
      { h: "La evidencia", html: "<ul><li><b>PEAK</b>: 2 años de fluticasona en preescolares con IPA positivo mejoraron el control durante el tratamiento; un año después de suspender no hubo diferencias.</li><li><b>Bisgaard 2006</b>: budesonida intermitente desde el primer episodio no previno las sibilancias persistentes.</li></ul>" },
      { h: "Qué decirle a la familia", html: "<p>El tratamiento busca que el chico esté bien hoy y tenga menos crisis; no cambia si a los 6 años va a tener asma. Por eso se reevalúa y se suspende cuando no aporta.</p>" }
    ],
    evidencia: ["guilbert2006", "bisgaard2006"],
    pico: [], ateneos: [],
    conexiones: ["sr-ci-diario", "sr-ci-intermitente"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-vsr-asma", nivel: 3, mapa: "sibilancias", titulo: "¿El VSR causa el asma o la anuncia?", corto: "VSR y asma", tipo: "concepto",
    x: 1050, y: 570,
    resumen: "Prevenir el VSR redujo las sibilancias del primer año, pero no el asma diagnosticada a los 6 años.",
    teoria: [
      { h: "La pregunta", html: "<p>Los chicos que tienen una bronquiolitis por VSR sibilan más después. ¿El virus daña la vía aérea o aparece en chicos que ya eran vulnerables? Las cohortes no pueden separarlo; un ensayo que previene el virus sí.</p>" },
      { h: "MAKI (2013 y 2018)", html: "<p>429 prematuros sanos de 32 a 35 semanas recibieron palivizumab o placebo en su primera temporada. En el primer año, los días con sibilancias bajaron un 61 % (Blanken 2013). A los 6 años, el asma «actual» informada por los padres fue menor (14 % frente a 24 %), sobre todo por menos chicos con 1 a 3 episodios, pero el asma diagnosticada por el médico (10 % en ambos grupos) y la función pulmonar fueron iguales (Scheltema 2018).</p>" },
      { h: "Lo que viene", html: "<p>Nirsevimab, en una dosis antes de la temporada, redujo un 74,5 % las infecciones respiratorias bajas por VSR con consulta médica en lactantes sanos de término y prematuros tardíos (Hammitt 2022). Con su uso masivo y el de la vacuna materna, el seguimiento de esas cohortes podrá contestar si menos VSR significa menos asma.</p>" }
    ],
    evidencia: ["blanken2013", "scheltema2018", "melody2022"],
    pico: [], ateneos: [],
    conexiones: ["sr-rinovirus", "sr-trayectorias", "prevencion-vsr", "vsr"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-azitromicina", nivel: 3, mapa: "sibilancias", titulo: "Azitromicina en el episodio", corto: "Azitromicina", tipo: "concepto",
    x: 450, y: 525,
    resumen: "Acortó los episodios y redujo crisis graves en chicos seleccionados. Prometedora, no de rutina.",
    teoria: [
      { h: "Qué mostraron los ensayos", html: "<ul><li><b>COPSAC (Stokholm 2016)</b>: 72 chicos de 1 a 3 años, 158 episodios con síntomas tipo asma. Con azitromicina el episodio duró 3,4 días frente a 7,7 con placebo; el efecto fue mayor si se empezaba antes del sexto día.</li><li><b>APW-RCT (Bacharier 2015)</b>: 443 preescolares con antecedentes de infecciones respiratorias bajas graves recurrentes. Darla al inicio de un resfrío redujo el riesgo de progresar a un cuadro grave (HR 0,64; 5 % frente a 8 % en el primer episodio).</li></ul>" },
      { h: "Por qué no es rutina", html: "<p>Son poblaciones seleccionadas, el beneficio absoluto es chico y la resistencia bacteriana no se estudió bien (COPSAC no la evaluó). No es un tratamiento recomendado de rutina para el preescolar que sibila con los virus.</p>" }
    ],
    evidencia: ["stokholm2016", "bacharier2015"],
    pico: [], ateneos: [],
    conexiones: ["sr-cort-oral", "sr-gravedad", "sr-rinovirus"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "sr-montelukast", nivel: 2, mapa: "sibilancias", titulo: "Montelukast", tipo: "concepto",
    x: 750, y: 465,
    resumen: "Alternativa al CI en el paso 2, menos eficaz. Evidencia pobre en sibilancias episódicas virales y alerta neuropsiquiátrica.",
    teoria: [
      { h: "Dónde lo ubica GINA (≤ 5 años)", html: "<p>Alternativa al CI diario en el paso 2. No es de primera elección: en INFANT, el CI diario fue el que más chicos tuvo como mejor respuesta, sobre todo con sensibilización a aeroalérgenos.</p>" },
      { h: "Qué muestran los ensayos", html: "<ul><li><b>Diario (PREVIA, Bisgaard 2005)</b>: en preescolares con crisis por virus y pocos síntomas entre episodios, 1,60 vs 2,34 crisis por año. Financiado por el fabricante.</li><li><b>Intermitente (WAIT, Nwokoro 2014)</b>: dado al inicio de cada episodio, no redujo en forma significativa las consultas no programadas. Un subgrupo genético (ALOX5 5/5) podría responder.</li><li><b>Cochrane (Brodlie 2015)</b>: en sibilancias episódicas virales, ni el diario ni el intermitente redujeron los episodios que requieren corticoide oral.</li></ul>" },
      { h: "Seguridad", html: "<p>Advertencia de la FDA (2020, recuadro negro) por eventos neuropsiquiátricos: pesadillas, trastornos del sueño, ansiedad, agitación, cambios de conducta y, raramente, ideación suicida. En un estudio de casos y controles en chicos con asma, los eventos neuropsiquiátricos nuevos se asociaron a casi el doble de probabilidad de haber recibido montelukast.</p><p>Avisar a la familia qué observar y suspender si aparecen.</p>" },
      { h: "Si se usa", html: "<p>Como <b>prueba terapéutica</b> con fecha de reevaluación: si no hay beneficio claro, suspender. Antes, revisar técnica inhalatoria y adherencia al CI.</p><p class=\"nota\">Borrador: verificar contra el texto original y con la guía GINA vigente.</p>" }
    ],
    evidencia: ["bisgaard2005", "nwokoro2014", "brodlie2015", "fitzpatrick2016", "glockler2019", "gina2026"],
    pico: [
      {
        p: "Preescolares con sibilancias episódicas virales",
        i: "Montelukast diario o intermitente",
        c: "Placebo",
        o: "Episodios que requieren corticoide oral",
        respuesta: "Sin reducción significativa con ninguno de los dos esquemas (Cochrane). El ensayo PREVIA mostró menos crisis con el uso diario, pero los resultados no se reprodujeron en forma consistente.",
        certeza: "Moderada",
        refs: ["brodlie2015", "bisgaard2005", "nwokoro2014"]
      }
    ],
    ateneos: [],
    conexiones: ["sr-ci-diario", "sr-ci-intermitente", "sr-patron"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* ───────────── MAPA DE ARTÍCULO: HENDERSON 2008 (ALSPAC) ─────────────
     Columnas: la pregunta · cómo lo hicieron · qué encontraron · qué significa.
     Resumen propio a partir del texto completo (acceso libre en Thorax). */

  {
    id: "h08-pregunta", nivel: 1, mapa: "art-henderson2008", titulo: "¿Hay más de tres fenotipos?", tipo: "concepto",
    x: 150, y: 170,
    resumen: "Buscar las trayectorias de sibilancias con los datos, sin fijarlas de antemano, y ver cómo se asocian con atopia y función pulmonar a los 7–9 años.",
    teoria: [
      { h: "El objetivo", html: "<p>Definir fenotipos de sibilancias a partir de <b>los propios datos</b>, con siete mediciones entre el nacimiento y los 7 años, en una cohorte poblacional grande. Después, ver cómo se asocia cada fenotipo con:</p><ul><li>asma diagnosticada por un médico,</li><li>atopia medida con prick test,</li><li>función pulmonar y respuesta a metacolina en la edad escolar.</li></ul>" },
      { h: "Por qué importa", html: "<p>Si los fenotipos se separan antes de los 3 años y tienen causas distintas, cambia en qué momento buscar los factores ambientales que inician el asma.</p>" }
    ],
    evidencia: ["henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["h08-tucson", "h08-cohorte", "h08-lca"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-tucson", nivel: 2, mapa: "art-henderson2008", titulo: "El antecedente: Tucson", tipo: "concepto",
    x: 150, y: 330,
    resumen: "Martinez 1995 propuso tres patrones en los primeros 6 años. Henderson parte de ahí y pregunta si con más mediciones aparecen otros.",
    teoria: [
      { h: "Los tres patrones de Tucson", html: "<ul><li><b>Transitorias tempranas</b>: sibilancias en los primeros 3 años que después se apagan.</li><li><b>No atópicas</b> en edad preescolar.</li><li><b>Mediadas por IgE</b> (asma atópica).</li></ul><p>En Tucson, la atopia se asociaba sobre todo a las persistentes y a las de inicio tardío, y la peor función pulmonar a las persistentes y a las transitorias.</p>" },
      { h: "Qué le faltaba", html: "<p>Las categorías se definían de antemano y con pocas mediciones. Había indicios de que los fenotipos se separan antes de los 3 años.</p>" }
    ],
    evidencia: ["martinez1995", "henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["h08-vs-tucson"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-cohorte", nivel: 1, mapa: "art-henderson2008", titulo: "Cohorte ALSPAC", tipo: "concepto",
    x: 450, y: 150,
    resumen: "Cohorte de nacimiento de Avon (Reino Unido), 1991–92. 6265 chicos con datos de sibilancias en las siete mediciones.",
    teoria: [
      { h: "Quiénes", html: "<p>Embarazadas de Avon con parto previsto entre abril de 1991 y diciembre de 1992: unos 14 000 nacidos vivos. El análisis principal usa a los <b>6265</b> con las siete respuestas completas.</p>" },
      { h: "Cómo se preguntó", html: "<p>Cuestionarios a la madre a los <b>6, 18, 30, 42, 54, 69 y 81 meses</b>: si el chico había tenido sibilancias en los 12 meses previos (6 meses en el primero). A los 91 meses, si un médico le había dicho que tenía asma.</p><p class=\"nota\">Es sibilancia referida por los padres, no auscultada.</p>" }
    ],
    evidencia: ["henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["h08-lca", "h08-mediciones"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-lca", nivel: 1, mapa: "art-henderson2008", titulo: "Análisis de clases latentes", tipo: "concepto",
    x: 450, y: 280,
    resumen: "Agrupa a los chicos según su patrón de sí/no en las siete mediciones. Los fenotipos salen de los datos, pero se construyen mirando hacia atrás.",
    teoria: [
      { h: "La idea", html: "<p>Con siete respuestas de sí o no hay 128 patrones posibles. El análisis de clases latentes busca el <b>menor número de grupos</b> que explique esos patrones. Cada chico recibe una probabilidad de pertenecer a cada grupo.</p><p>Compararon modelos de 3 a 7 clases y el de <b>seis</b> fue el que mejor ajustó.</p>" },
      { h: "La advertencia clave", html: "<p>Las clases se arman <b>a posteriori</b>, con toda la historia de sibilancias ya conocida. Los propios autores aclaran que el método <b>no sirve para predecir</b> la evolución de un chico en particular.</p>" }
    ],
    evidencia: ["henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["h08-seis", "h08-practica"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-mediciones", nivel: 2, mapa: "art-henderson2008", titulo: "Qué midieron en la edad escolar", tipo: "concepto",
    x: 450, y: 420,
    resumen: "Asma diagnosticada por un médico, prick test, espirometría y respuesta a metacolina entre los 7 y los 9 años.",
    teoria: [
      { h: "Desenlaces", html: "<ul><li><b>Asma diagnosticada por un médico</b>, referida por la madre a los 91 meses.</li><li><b>Atopia</b> a los 7–8 años: prick test positivo a ácaro, gato o gramíneas. Esos tres alérgenos detectan casi a todos los sensibilizados de esa población.</li><li><b>Espirometría</b> a los 8–9 años: VEF₁ y FEF25–75 en desvíos estándar ajustados por sexo, edad y talla.</li><li><b>Hiperreactividad bronquial</b>: caída del VEF₁ por dosis de metacolina.</li></ul>" }
    ],
    evidencia: ["henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["h08-intermedia", "h08-limites"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-limites", nivel: 2, mapa: "art-henderson2008", titulo: "Limitaciones", tipo: "concepto",
    x: 450, y: 550,
    resumen: "Solo la mitad tenía datos completos, la sibilancia es referida por los padres y no hay datos de tratamiento.",
    teoria: [
      { h: "Lo que reconocen los autores", html: "<ul><li><b>Pérdidas</b>: solo el 54 % de los chicos con al menos dos respuestas tenía las siete. Los que faltan son de hogares más vulnerables y probablemente tenían más sibilancias transitorias tempranas. Repetido con los 11 678 chicos con datos parciales, el resultado fue parecido.</li><li><b>Sibilancia referida</b> por los padres, que coincide poco con la auscultación. Lo compensan las siete mediciones y la fuerte asociación con el diagnóstico de asma.</li><li><b>Sin datos de tratamiento</b>: los corticoides inhalados pudieron ocultar síntomas y desdibujar las diferencias entre grupos.</li><li>No pueden decir si los fenotipos son enfermedades distintas o grados de la misma.</li></ul>" }
    ],
    evidencia: ["henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["h08-no-entidades"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-seis", nivel: 1, mapa: "art-henderson2008", titulo: "Seis trayectorias", tipo: "concepto",
    x: 750, y: 130,
    resumen: "Nunca o rara vez 59 %, transitoria temprana 16 %, prolongada temprana 9 %, inicio intermedio 3 %, inicio tardío 6 % y persistente 7 %.",
    teoria: [
      { h: "Las seis, con su frecuencia", html: "<table><thead><tr><th>Fenotipo</th><th>%</th><th>Cómo se ve</th></tr></thead><tbody><tr><td>Nunca o rara vez</td><td>59,3</td><td>Tres de cada cuatro nunca sibilaron; el resto, alguna vez aislada.</td></tr><tr><td>Transitoria temprana</td><td>16,3</td><td>Frecuentes hasta los 18 meses; casi nada desde los 42.</td></tr><tr><td>Prolongada temprana</td><td>8,9</td><td>Pico cerca de los 30 meses; se apaga desde los 69.</td></tr><tr><td>Inicio intermedio</td><td>2,7</td><td>Poco hasta los 18 meses; sube rápido y es alta desde los 42.</td></tr><tr><td>Inicio tardío</td><td>6,0</td><td>Baja hasta los 42 meses; después la mitad o más sibila.</td></tr><tr><td>Persistente</td><td>6,9</td><td>Desde los 6 meses y casi siempre presente después.</td></tr></tbody></table>" },
      { h: "Lo nuevo", html: "<p>Dos fenotipos no se habían descrito: <b>prolongada temprana</b> e <b>inicio intermedio</b>.</p>" }
    ],
    evidencia: ["henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["h08-tempranas", "h08-intermedia", "h08-tardia", "h08-persistente"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-tempranas", nivel: 1, mapa: "art-henderson2008", titulo: "Tempranas: transitoria y prolongada", tipo: "concepto",
    x: 750, y: 245,
    resumen: "Sin asociación con atopia. La prolongada tiene más asma (36 %) y peor flujo medio a los 8–9 años que la transitoria (8,5 %).",
    teoria: [
      { h: "Qué las une", html: "<p>Empiezan en el primer año y se apagan antes de la edad escolar. <b>Ninguna se asocia con atopia</b> (OR 0,8 y 0,9) y la hiperreactividad es apenas mayor que en quienes nunca sibilaron.</p>" },
      { h: "Qué las separa", html: "<ul><li><b>Asma diagnosticada a los 7 años</b>: 8,5 % en la transitoria y 36 % en la prolongada.</li><li><b>Función pulmonar</b>: ambas con VEF₁ unos 0,3 desvíos más bajo; la prolongada con más caída del FEF25–75 (−0,54 frente a −0,31).</li></ul><p>Los autores plantean que podrían ser dos grados de lo mismo: más duración, peor pronóstico.</p>" }
    ],
    evidencia: ["henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["h08-ventana", "h08-no-entidades"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-intermedia", nivel: 1, mapa: "art-henderson2008", titulo: "Inicio intermedio (18–42 meses)", tipo: "concepto",
    x: 750, y: 360,
    resumen: "El fenotipo más atópico (OR 8,4) y con más hiperreactividad. El 93 % tenía asma a los 7 años. Es poco frecuente: 2,7 %.",
    teoria: [
      { h: "Los números", html: "<ul><li><b>Atopia</b> en el 62 % (OR 8,4; IC 95 % 5,2 a 13,4), sobre todo a ácaro (OR 11) y gato (OR 15,5).</li><li><b>Asma diagnosticada</b> en el 93 %.</li><li><b>Hiperreactividad</b>, la más alta de todas: 1,76 puntos más de caída del VEF₁ por dosis de metacolina.</li><li><b>Función pulmonar</b>: VEF₁ −0,53 y FEF25–75 −0,69 desvíos.</li></ul>" },
      { h: "Por qué llama la atención", html: "<p>Con los criterios de Tucson, estos chicos habrían quedado dentro de las <b>persistentes</b>. Separarlos muestra que lo más atópico es lo que <b>empieza</b> entre los 18 meses y los 3 años y medio.</p>" }
    ],
    evidencia: ["henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["h08-tardia", "h08-ventana", "h08-vs-tucson"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-tardia", nivel: 2, mapa: "art-henderson2008", titulo: "Inicio tardío (después de 42 meses)", tipo: "concepto",
    x: 750, y: 475,
    resumen: "También atópico (OR 6,6) e hiperreactivo, con la función pulmonar menos afectada. Es el más ligado a gramíneas.",
    teoria: [
      { h: "Los números", html: "<ul><li><b>Atopia</b> en el 56 % (OR 6,6; IC 95 % 4,7 a 9,4). Es el fenotipo con más sensibilización a <b>gramíneas</b>.</li><li><b>Asma diagnosticada</b> en el 76 %.</li><li><b>Hiperreactividad</b> casi tan alta como la del inicio intermedio (1,61).</li><li><b>Función pulmonar</b> poco afectada: VEF₁ −0,21 desvíos.</li></ul>" },
      { h: "Interpretación de los autores", html: "<p>El vínculo con el polen podría reflejar un alérgeno estacional, que aparece más tarde que los de interior.</p>" }
    ],
    evidencia: ["henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["h08-ventana"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-persistente", nivel: 2, mapa: "art-henderson2008", titulo: "Persistente", tipo: "concepto",
    x: 750, y: 590,
    resumen: "Asma en el 92 % y la función pulmonar tan baja como el inicio intermedio, pero menos atopia (OR 3,6). Probablemente sea una mezcla.",
    teoria: [
      { h: "Los números", html: "<ul><li><b>Atopia</b> en el 42 % (OR 3,6), menos que los de inicio intermedio y tardío.</li><li><b>Asma diagnosticada</b> en el 92 %.</li><li><b>Función pulmonar</b>: VEF₁ −0,40 y FEF25–75 −0,68 desvíos.</li><li>Es el fenotipo con más asma y alergia en la madre.</li></ul>" },
      { h: "Una mezcla", html: "<p>Los autores proponen que junta un componente <b>estructural</b> temprano de la vía aérea con sibilancias <b>atópicas</b> que se suman durante la infancia.</p>" }
    ],
    evidencia: ["henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["h08-tempranas", "h08-no-entidades"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-ventana", nivel: 1, mapa: "art-henderson2008", titulo: "Después de los 18 meses", tipo: "concepto",
    x: 1050, y: 160,
    resumen: "Las sibilancias ligadas a atopia e hiperreactividad empiezan después de los 18 meses. Las tempranas solo se asocian si persisten.",
    teoria: [
      { h: "La conclusión del artículo", html: "<p>Los fenotipos con más atopia e hiperreactividad son los que <b>empiezan después de los 18 meses</b>. Las sibilancias que empiezan cerca del nacimiento no se asocian con atopia, salvo que persistan.</p>" },
      { h: "Hipótesis", html: "<p>Habría una <b>ventana crítica</b> en los primeros años, en la que alérgenos e infecciones virales interactúan con la predisposición genética y ponen en marcha las sibilancias atópicas.</p>" }
    ],
    evidencia: ["henderson2008"],
    pico: [], ateneos: [],
    conexiones: ["h08-practica"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-practica", nivel: 1, mapa: "art-henderson2008", titulo: "Para la consulta", tipo: "concepto",
    x: 1050, y: 300,
    resumen: "No sirve para etiquetar a un chico, pero la edad de inicio y la persistencia orientan a buscar sensibilización.",
    teoria: [
      { h: "Qué me llevo", html: "<ul><li>No hay que clasificar a un chico en uno de estos seis grupos: se arman con la historia completa y los autores dicen que no predicen casos individuales.</li><li>Sí orientan dos preguntas de la anamnesis: <b>¿cuándo empezó?</b> y <b>¿sigue?</b></li><li>Sibilancias que empiezan o se mantienen después de los 18 meses: pensar en atopia y buscar sensibilización.</li><li>Sibilancias del primer año que se apagan: en general sin atopia, aunque con algo menos de función pulmonar en la edad escolar.</li></ul><p class=\"nota\">Lectura propia del mapa, no recomendación del artículo. Borrador: verificar contra el texto original.</p>" }
    ],
    evidencia: ["henderson2008", "makrinioti2024"],
    pico: [], ateneos: [],
    conexiones: ["h08-no-entidades"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-vs-tucson", nivel: 2, mapa: "art-henderson2008", titulo: "Qué cambia respecto de Tucson", tipo: "concepto",
    x: 1050, y: 430,
    resumen: "En ALSPAC, el inicio intermedio es lo más atópico y la persistente es menos atópica de lo que sugería Tucson.",
    teoria: [
      { h: "Comparación", html: "<table><thead><tr><th></th><th>Tucson</th><th>ALSPAC</th></tr></thead><tbody><tr><td>Más atopia</td><td>Persistentes y de inicio tardío</td><td>Inicio intermedio, después tardío</td></tr><tr><td>Hiperreactividad</td><td>Solo persistentes (a los 11 años)</td><td>Inicio intermedio y tardío</td></tr><tr><td>Peor función pulmonar</td><td>Persistentes y transitorias</td><td>Prolongada temprana, intermedio y persistente</td></tr><tr><td>Tamaño</td><td>826 chicos</td><td>6265 chicos</td></tr></tbody></table>" }
    ],
    evidencia: ["henderson2008", "martinez1995"],
    pico: [], ateneos: [],
    conexiones: [],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "h08-no-entidades", nivel: 2, mapa: "art-henderson2008", titulo: "Fenotipo ≠ enfermedad", tipo: "concepto",
    x: 1050, y: 560,
    resumen: "Los autores no pueden afirmar que los seis fenotipos sean entidades distintas. La ERS 2024 va en la misma línea.",
    teoria: [
      { h: "Lo que el artículo no resuelve", html: "<p>Los fenotipos describen patrones de síntomas. Que se asocien con desenlaces distintos <b>no prueba</b> que sean enfermedades diferentes. Transitoria y prolongada podrían ser grados de lo mismo, y la persistente parece una mezcla.</p>" },
      { h: "Hoy", html: "<p>La declaración ERS 2024 sostiene que los fenotipos por patrón de síntomas predicen mal la respuesta al tratamiento y propone buscar <b>rasgos tratables</b>, como sensibilización y eosinófilos.</p>" }
    ],
    evidencia: ["henderson2008", "makrinioti2024"],
    pico: [], ateneos: [],
    conexiones: [],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },

  /* ───────────── GINA 2026: REPORTE COMPLETO (generado desde scratchpad/gina/gen.py) ───────────── */
  /*gr-nodos*/
  {"id": "gr-novedades", "nivel": 1, "mapa": "gina-reporte", "titulo": "Qué hay de nuevo en 2026", "tipo": "concepto", "x": 150, "y": 150, "resumen": "Cuatro flujogramas nuevos para la crisis, PRAM recomendado en menores de 18 años, oxígeno solo si SatO₂ < 92 %, SABA más prudente, CI-formoterol en crisis leves, CARE en niños, CI-SABA en el track 2 y nuevos biológicos.", "teoria": [{"h": "Crisis", "html": "<ul><li><b>Cuatro flujogramas nuevos</b>: atención primaria y guardia, para 6 años o más y para 5 años o menos.</li><li>En menores de 18 años, recomendación fuerte de usar un <b>puntaje clínico validado</b> como el PRAM.</li><li><b>Anafilaxia con asma</b>: primero adrenalina, después broncodilatadores.</li><li><b>Oxígeno</b> solo si la SatO₂ es &lt; 92 %. Objetivo máximo de 95 % desde los 6 años; ≥ 92 % en los más chicos.</li><li><b>SABA</b> en dosis más prudentes: el exceso puede dar acidosis láctica e hiperventilación que se confunde con empeoramiento.</li><li><b>CI-formoterol</b> como opción en crisis leves desde los 6 años, para salir con un rescate antiinflamatorio.</li><li>Agitar el aerosol antes de <b>cada</b> disparo; revisar la respuesta antes de repetir.</li><li>Una sola crisis que requiere urgencia o corticoide oral es una <b>bandera roja</b> para revisar el tratamiento. Cuidado del corticoide oral.</li></ul>"}, {"h": "Diagnóstico y tratamiento", "html": "<ul><li>Se mantiene el criterio de respuesta a broncodilatador de ≥ 12 % y ≥ 200 mL; el de &gt; 10 % del predicho subdiagnostica.</li><li><b>Niños de 6 a 11 años</b>: CARE mostró que la budesonida-formoterol a demanda reduce las crisis casi a la mitad frente al SABA. Nuevas sugerencias para el inicio y para pasar del paso 1 al 3.</li><li><b>Track 2</b>: CI-SABA a demanda desde el paso 1 (BATURA).</li><li>En lugar de una «dosis máxima», consultar si se superan ciertas inhalaciones en 24 horas.</li><li>Nuevos biológicos: depemokimab y el primer biosimilar de omalizumab.</li><li>Herramientas nuevas: CAAT y Peds-AIRQ. Vacunas actualizadas (gripe, VSR, COVID-19).</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, «What's new in GINA 2026?» (p. 20–23). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["gr-cap1", "gr-cap9", "gr-cap12"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Novedades 2026"},
  {"id": "gr-cap1", "nivel": 1, "mapa": "gina-reporte", "titulo": "Cap. 1 · Definición y diagnóstico", "tipo": "concepto", "x": 150, "y": 290, "resumen": "Síntomas variables más flujo espiratorio variable documentado, idealmente antes de empezar el CI.", "teoria": [{"h": "En pocas líneas", "html": "<p>Asma = síntomas respiratorios variables + flujo espiratorio variable. Confirmar con espirometría (o PEF) <b>antes de tratar</b>; si ya recibe CI, hay un camino para confirmarlo. FeNO y eosinófilos apoyan, pero no descartan.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["gr-cap2"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "1 · Diagnóstico", "submapa": "gr-c1"},
  {"id": "gr-cap2", "nivel": 1, "mapa": "gina-reporte", "titulo": "Cap. 2 · Evaluación", "tipo": "concepto", "x": 150, "y": 430, "resumen": "Control de síntomas y riesgo futuro por separado. La gravedad se define mirando hacia atrás. Antes de decir «grave», descartar mal control.", "teoria": [{"h": "En pocas líneas", "html": "<p>Cuatro preguntas para el control de síntomas, y aparte los factores de riesgo de crisis. Función pulmonar al inicio, a los 3–6 meses y periódicamente. Evitar la etiqueta «asma leve».</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["gr-cap3"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "2 · Evaluación", "submapa": "gr-c2"},
  {"id": "gr-cap3", "nivel": 1, "mapa": "gina-reporte", "titulo": "Cap. 3 · Principios del tratamiento", "tipo": "concepto", "x": 150, "y": 570, "resumen": "Alianza con la familia, objetivo a largo plazo, remisión, ciclo evaluar-ajustar-revisar, factores modificables, medidas no farmacológicas y derivación.", "teoria": [{"h": "En pocas líneas", "html": "<p>Decisiones compartidas, buena comunicación y el ciclo evaluar, ajustar y revisar. La remisión no es curación. Tratar los factores de riesgo modificables, cuidar el corticoide oral y saber cuándo derivar.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["gr-cap4"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "3 · Principios", "submapa": "gr-c3"},
  {"id": "gr-cap4", "nivel": 1, "mapa": "gina-reporte", "titulo": "Cap. 4 · Medicamentos y pasos", "tipo": "concepto", "x": 450, "y": 150, "resumen": "Nunca SABA solo. Rescate antiinflamatorio. En niños de 6 a 11 años, pasos con AIR, CI diario, CI-LABA o MART. Track 1 preferido desde los 12 años.", "teoria": [{"h": "En pocas líneas", "html": "<p>Todo asma desde los 6 años lleva CI desde el diagnóstico. Rescate antiinflamatorio (CI-formoterol o CI-SABA) en lugar de SABA. Pasos 1–5 con criterios para subir y bajar. Inmunoterapia y vacunas.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["gr-cap5", "gr-cap9"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "4 · Medicamentos", "submapa": "gr-c4"},
  {"id": "gr-cap5", "nivel": 1, "mapa": "gina-reporte", "titulo": "Cap. 5 · Educación y automanejo", "tipo": "concepto", "x": 450, "y": 300, "resumen": "Elegir el inhalador, técnica (hasta 80 % la usa mal), adherencia, información, plan de acción escrito y controles regulares.", "teoria": [{"h": "En pocas líneas", "html": "<p>Elegir, revisar, corregir y confirmar la técnica en cada consulta. Preguntar por la adherencia sin juzgar. Automanejo guiado con autocontrol, plan escrito y revisión regular: reduce entre un tercio y dos tercios las internaciones y las consultas de urgencia.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["gr-cap11"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "5 · Automanejo", "submapa": "gr-c5"},
  {"id": "gr-cap9", "nivel": 1, "mapa": "gina-reporte", "titulo": "Cap. 9 · Crisis (6 años o más)", "tipo": "concepto", "x": 450, "y": 450, "resumen": "Banderas rojas de asma fatal, plan de acción en casa, flujogramas nuevos para atención primaria y guardia (con PRAM), qué no hacer y qué dejar armado al alta.", "teoria": [{"h": "En pocas líneas", "html": "<p>Clasificar la gravedad (PRAM en menores de 18 años) mientras se trata: salbutamol con aerocámara, ipratropio y corticoide oral en las moderadas, oxígeno solo si la SatO₂ es &lt; 92 %. Ni radiografía ni antibióticos de rutina. Al alta, CI siempre y control en 2–5 días en niños.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["gr-cap12"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "9 · Crisis (≥ 6)", "submapa": "gr-c9"},
  {"id": "gr-cap6", "nivel": 1, "mapa": "gina-reporte", "titulo": "Cap. 6 · Comorbilidades y poblaciones", "tipo": "concepto", "x": 750, "y": 150, "resumen": "Obesidad, reflujo, ansiedad, alergia alimentaria, rinitis y sinusitis; adolescentes, deporte, embarazo, COVID-19, cirugía y clima extremo.", "teoria": [{"h": "En pocas líneas", "html": "<p>Las comorbilidades suman síntomas y empeoran el control: tratarlas como rasgos tratables. Adolescentes: atenderlos un rato a solas. Embarazo: no suspender el CI. Alergia alimentaria: adrenalina siempre a mano.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["gr-cap8"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "6 · Comorbilidades", "submapa": "gr-c6"},
  {"id": "gr-cap7", "nivel": 2, "mapa": "gina-reporte", "titulo": "Cap. 7 · Asma, EPOC o ambas", "tipo": "concepto", "x": 750, "y": 300, "resumen": "Capítulo de adultos: distinguir asma de EPOC y nunca usar LABA o LAMA sin CI si hay rasgos de asma.", "teoria": [{"h": "En pocas líneas", "html": "<p>En la EPOC se empieza con LABA más LAMA; en el asma eso está contraindicado. Si hay rasgos de ambas, tratar como asma, con CI, y derivar.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "7 · Asma y EPOC", "submapa": "gr-c7"},
  {"id": "gr-cap8", "nivel": 1, "mapa": "gina-reporte", "titulo": "Cap. 8 · Asma difícil y grave", "tipo": "concepto", "x": 750, "y": 450, "resumen": "Difícil ≠ grave: primero corregir lo básico. Evaluar el fenotipo tipo 2 y elegir un biológico (desde los 6 años: omalizumab, mepolizumab, dupilumab).", "teoria": [{"h": "En pocas líneas", "html": "<p>El asma difícil suele deberse a técnica, adherencia, comorbilidades o exposiciones. La grave es la que sigue sin control pese a todo eso con CI-LABA en dosis alta. Fenotipo tipo 2 con eosinófilos, FeNO y alérgenos; biológico con prueba de al menos 4 meses.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "8 · Asma grave", "submapa": "gr-c8"},
  {"id": "gr-cap14", "nivel": 2, "mapa": "gina-reporte", "titulo": "Cap. 14 · Implementación y apéndices", "tipo": "concepto", "x": 750, "y": 590, "resumen": "Cómo llevar la estrategia a un sistema de salud, y los apéndices de biomarcadores tipo 2 y de clases de medicamentos.", "teoria": [{"h": "En pocas líneas", "html": "<p>Siete pasos para implementar, barreras e intervenciones de alto impacto. Apéndice A: qué modifica los eosinófilos y el FeNO y qué umbrales usar. Apéndice B: indicaciones, dosis y efectos adversos de cada clase de medicamento.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "14 · Implementación", "submapa": "gr-c14"},
  {"id": "gr-cap10", "nivel": 1, "mapa": "gina-reporte", "titulo": "Cap. 10 · Diagnóstico (5 años o menos)", "tipo": "concepto", "x": 1050, "y": 150, "resumen": "Tres criterios: episodios de sibilancias recurrentes, ninguna otra causa probable y respuesta oportuna al tratamiento. Con uno o dos, asma sospechada.", "teoria": [{"h": "En pocas líneas", "html": "<p>≥ 2 episodios de sibilancias en 12 meses (o 1 con síntomas entre episodios), confirmados al menos una vez; descartar otras causas; respuesta a los 20–60 minutos del SABA o con una prueba de CI de 2–3 meses. Un primer episodio en menores de 12 meses suele ser bronquiolitis.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["gr-cap11"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "10 · Diagnóstico (≤ 5)", "submapa": "gr-c10"},
  {"id": "gr-cap11", "nivel": 1, "mapa": "gina-reporte", "titulo": "Cap. 11 · Tratamiento (5 años o menos)", "tipo": "concepto", "x": 1050, "y": 300, "resumen": "SABA para todos; CI diario en dosis baja si no hay control o hubo una crisis que requirió urgencia; duplicar y derivar si no alcanza. Aerocámara con máscara hasta los 3 años.", "teoria": [{"h": "En pocas líneas", "html": "<p>Control con cuatro preguntas. Paso 1 SABA, paso 2 CI diario en dosis baja (prueba de 2–3 meses), paso 3 duplicar, paso 4 derivar. Reevaluar cada 3–6 meses porque muchos remiten. Aerosol con aerocámara, 5–6 respiraciones por disparo.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["gr-cap12"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "11 · Tratamiento (≤ 5)", "submapa": "gr-c11"},
  {"id": "gr-cap12", "nivel": 1, "mapa": "gina-reporte", "titulo": "Cap. 12 · Crisis (5 años o menos)", "tipo": "concepto", "x": 1050, "y": 450, "resumen": "Salbutamol en casa y cuándo consultar; gravedad con PRAM; flujogramas para atención primaria y guardia; dosis de corticoide con máximo de 20 o 30 mg; control en 1–3 días.", "teoria": [{"h": "En pocas líneas", "html": "<p>En casa: 2 disparos de salbutamol, repetibles 2 veces cada 20 minutos; sin corticoide oral iniciado por la familia. Derivar si hay cianosis, FR &gt; 40, SatO₂ &lt; 92 % o falta de respuesta en una hora. Prednisolona 1–2 mg/kg (máximo 20 mg en menores de 2 años; 30 mg de 2 a 5).</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "12 · Crisis (≤ 5)", "submapa": "gr-c12"},
  {"id": "gr-cap13", "nivel": 2, "mapa": "gina-reporte", "titulo": "Cap. 13 · Prevención primaria", "tipo": "concepto", "x": 1050, "y": 590, "resumen": "Sin humo en el embarazo ni después, parto vaginal cuando se pueda, evitar antibióticos de amplio espectro en el primer año, vitamina D en embarazadas con déficit y lactancia por sus otros beneficios.", "teoria": [{"h": "En pocas líneas", "html": "<p>Hay una «ventana» en el embarazo y la primera infancia, pero pocos estudios de intervención. Evitar un solo alérgeno no previene. Los factores de riesgo incluyen tabaco, cesárea, antibióticos, VSR grave, obesidad y prematurez.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "13 · Prevención", "submapa": "gr-c13"},
  {"id": "g1-definicion", "nivel": 1, "mapa": "gr-c1", "titulo": "Definición de asma", "tipo": "concepto", "x": 150, "y": 170, "resumen": "Enfermedad heterogénea con inflamación crónica de la vía aérea, definida por síntomas respiratorios variables y flujo espiratorio variable.", "teoria": [{"h": "La definición", "html": "<p>Dos elementos juntos: <b>síntomas respiratorios</b> (sibilancias, disnea, opresión torácica, tos) que <b>varían</b> en el tiempo y en intensidad, y <b>flujo espiratorio variable</b>. Con los años la obstrucción puede volverse persistente.</p>"}, {"h": "Lo que no alcanza", "html": "<p>La hiperreactividad bronquial y la inflamación suelen estar presentes, pero <b>no son necesarias ni suficientes</b> para el diagnóstico. Afecta al 1–29 % de la población según el país; la mayoría de las muertes ocurre en países de ingresos bajos y medios.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, cap. 1, p. 25–26. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g1-fenotipos", "g1-sintomas"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Definición"},
  {"id": "g1-fenotipos", "nivel": 2, "mapa": "gr-c1", "titulo": "Fenotipos clínicos", "tipo": "concepto", "x": 150, "y": 340, "resumen": "Agrupaciones reconocibles (alérgico, no alérgico, tos, inicio adulto, obstrucción persistente, obesidad). Salvo en el asma grave, predicen poco.", "teoria": [{"h": "Los más comunes", "html": "<ul><li><b>Alérgico</b>: empieza en la infancia, con eccema, rinitis o alergia; responde bien al corticoide inhalado (CI).</li><li><b>No alérgico</b>: menor respuesta a corto plazo al CI.</li><li><b>Variante tos</b>: la tos es el único síntoma.</li><li><b>De inicio adulto</b>, más en mujeres; descartar causa ocupacional.</li><li><b>Con obstrucción persistente</b>, por remodelación.</li><li><b>Con obesidad</b>: mucho síntoma, poca inflamación eosinofílica.</li></ul>"}, {"h": "Para qué sirven", "html": "<p>Fuera del asma grave, los fenotipos no se correlacionan bien con la respuesta al tratamiento. Los biomarcadores de inflamación tipo 2 sí ayudan en el asma difícil y grave.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, cap. 1, p. 26. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g1-biomarcadores"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Fenotipos"},
  {"id": "g1-sintomas", "nivel": 1, "mapa": "gr-c1", "titulo": "Patrón de síntomas", "tipo": "concepto", "x": 450, "y": 150, "resumen": "Más probable si varían, empeoran de noche, con virus, ejercicio, risa o alérgenos, y sobre todo si empeoran al terminar el ejercicio.", "teoria": [{"h": "Aumentan la probabilidad", "html": "<ul><li>Varían en el tiempo y en intensidad.</li><li>Peores de noche o al despertar.</li><li>Desencadenados por resfríos, ejercicio, alérgenos, cambios de clima o risa.</li><li><b>Empeoran después de terminar el ejercicio</b>: casi patognomónico. Otras causas de disnea mejoran al descansar.</li></ul>"}, {"h": "La disminuyen", "html": "<ul><li>Expectoración crónica.</li><li>Disnea con mareos o parestesias.</li><li>Dolor torácico.</li><li>Disnea de esfuerzo con ruido inspiratorio.</li><li>Sibilancia localizada.</li></ul><p>El examen suele ser normal. Los crepitantes y la sibilancia inspiratoria no son de asma.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 1-2 y p. 29–31. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g1-variabilidad", "g1-diferencial"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Síntomas"},
  {"id": "g1-variabilidad", "nivel": 1, "mapa": "gr-c1", "titulo": "Flujo espiratorio variable", "tipo": "concepto", "x": 450, "y": 290, "resumen": "Hay que documentarla con espirometría (o PEF si no hay). En niños: VEF₁ +12 % del predicho tras broncodilatador o PEF +15 %.", "teoria": [{"h": "Criterios en niños de 6 a 11 años", "html": "<table><thead><tr><th>Prueba</th><th>Positiva si</th></tr></thead><tbody><tr><td>Respuesta a broncodilatador (200–400 mcg de salbutamol, a los 10–15 min)</td><td>VEF₁ ≥ 12 % del predicho, o PEF ≥ 15 %</td></tr><tr><td>Variabilidad diaria del PEF (dos veces por día, 2 semanas)</td><td>Promedio &gt; 13 %</td></tr><tr><td>Tras 4 semanas de CI</td><td>VEF₁ ≥ 12 % del predicho, o PEF ≥ 15 %</td></tr><tr><td>Provocación</td><td>Caída del VEF₁ ≥ 20 % con metacolina, o &gt; 12 % del predicho con ejercicio</td></tr><tr><td>Entre visitas</td><td>VEF₁ ≥ 12 % o PEF ≥ 15 %</td></tr></tbody></table>"}, {"h": "Adultos y el criterio de respuesta", "html": "<p>En adultos sigue siendo <b>≥ 12 % y ≥ 200 mL</b> en VEF₁ o CVF. GINA 2026 mantiene este criterio y no adopta el de &gt; 10 % del predicho (ERS/ATS 2022), porque con él se subdiagnostica asma, sobre todo en varones jóvenes.</p><p>Cuanto mayor la variación, o más veces se la ve, más seguro el diagnóstico. Suspender antes el SABA 4 horas y los broncodilatadores de acción larga 24–48 horas. Con PEF, usar el mismo medidor y la mejor de 3 mediciones.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 1-2 (p. 28) y p. 31–32. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g1-por-que", "g1-bajos-recursos"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Variabilidad"},
  {"id": "g1-biomarcadores", "nivel": 2, "mapa": "gr-c1", "titulo": "FeNO y eosinófilos en el diagnóstico", "tipo": "concepto", "x": 450, "y": 440, "resumen": "Si hay síntomas típicos y la espirometría no está o da normal, FeNO > 35 ppb en niños o eosinófilos altos apoyan asma tipo 2. Valores bajos no la descartan.", "teoria": [{"h": "Cómo usarlos", "html": "<p>Apoyan el diagnóstico de <b>asma tipo 2</b> cuando no se pudo documentar la variabilidad: FeNO &gt; 50 ppb en adultos o &gt; 35 ppb en niños, o eosinófilos por encima del rango local.</p><ul><li>Pueden estar altos en otras condiciones (rinitis alérgica, dermatitis atópica, parásitos, bronquitis eosinofílica).</li><li>Valores bajos <b>no descartan</b> asma (por ejemplo, asma con obesidad o neutrofílica).</li><li>Varían con la edad, el sexo y la hora: los eosinófilos son más altos a la mañana y el FeNO, más bajo.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 1-2 y p. 35. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g1-con-ics"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "FeNO y eosinófilos"},
  {"id": "g1-por-que", "nivel": 1, "mapa": "gr-c1", "titulo": "Probar antes de tratar", "tipo": "concepto", "x": 750, "y": 150, "resumen": "Confirmar el diagnóstico antes de iniciar el CI: después es más difícil. En atención primaria, un 25–35 % de los diagnosticados no tiene asma.", "teoria": [{"h": "Por qué confirmar", "html": "<p>Para no tratar de más y no pasar por alto otro diagnóstico. En adultos con diagnóstico reciente, un tercio no tenía asma al reevaluarlos, y un 2 % tenía otra enfermedad cardiorrespiratoria seria. El diagnóstico se confirmaba menos cuando no se había medido la función pulmonar al inicio.</p>"}, {"h": "La regla", "html": "<p>Documentar la variabilidad <b>antes</b> de empezar el tratamiento. Con el CI, los síntomas y la función pulmonar se estabilizan y la prueba puede dar normal. En una urgencia se puede iniciar el tratamiento y programar las pruebas en las semanas siguientes.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 31 y 34. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g1-con-ics", "g1-diferencial"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Probar antes de tratar"},
  {"id": "g1-diferencial", "nivel": 1, "mapa": "gr-c1", "titulo": "Diagnóstico diferencial (6–11 años)", "tipo": "concepto", "x": 750, "y": 290, "resumen": "Rinitis con tos crónica, cuerpo extraño, bronquiectasias, bronquitis bacteriana prolongada, discinesia ciliar, cardiopatía, displasia broncopulmonar y fibrosis quística.", "teoria": [{"h": "Pistas en niños de 6 a 11 años", "html": "<table><thead><tr><th>Si hay…</th><th>Pensar en…</th></tr></thead><tbody><tr><td>Estornudos, picazón, congestión, carraspeo</td><td>Tos crónica de vía aérea superior</td></tr><tr><td>Inicio brusco, sibilancia unilateral</td><td>Cuerpo extraño</td></tr><tr><td>Infecciones a repetición, tos productiva</td><td>Bronquiectasias, bronquitis bacteriana prolongada, inmunodeficiencia</td></tr><tr><td>Lo anterior más sinusitis</td><td>Discinesia ciliar primaria</td></tr><tr><td>Soplo</td><td>Cardiopatía congénita</td></tr><tr><td>Prematurez, síntomas desde el nacimiento</td><td>Displasia broncopulmonar</td></tr><tr><td>Mucha tos y moco, síntomas digestivos</td><td>Fibrosis quística</td></tr></tbody></table><p>A cualquier edad: tuberculosis y tos convulsa. En adolescentes, además: obstrucción laríngea inducible y respiración disfuncional.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 1-3 (p. 30). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Diferencial"},
  {"id": "g1-con-ics", "nivel": 2, "mapa": "gr-c1", "titulo": "Si ya recibe corticoide inhalado", "tipo": "concepto", "x": 750, "y": 430, "resumen": "Repetir la espirometría sin broncodilatador o con síntomas. Si es normal y el VEF₁ es > 70 %, bajar el CI un 25–50 % y reevaluar en 2–4 semanas.", "teoria": [{"h": "Según cómo está", "html": "<ul><li><b>Síntomas y flujo variables</b>: confirmado; evaluar el control.</li><li><b>Síntomas típicos sin variabilidad</b>: repetir sin broncodilatador o con síntomas. Si el VEF₁ es &gt; 70 %, bajar el CI y repetir. Si es &lt; 70 %, subir el CI 1–2 meses; si no responde, derivar.</li><li><b>Pocos síntomas, función normal</b>: bajar el CI. Si reaparecen los síntomas y cae la función, es asma.</li><li><b>Síntomas atípicos</b>: buscar otros diagnósticos.</li></ul>"}, {"h": "Cómo bajar", "html": "<p>Elegir un buen momento (sin infección ni viaje), dar un plan de acción escrito y asegurarse de que tenga medicación para volver a la dosis previa. Bajar el CI un 25–50 % y revisar en 2–4 semanas. Si en la dosis baja no hay cambios ni variabilidad, considerar suspender y seguir al paciente al menos 12 meses.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 1-4 (p. 33) y Box 1-5 (p. 36). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Ya tratado"},
  {"id": "g1-otras-pruebas", "nivel": 3, "mapa": "gr-c1", "titulo": "Otras pruebas", "tipo": "concepto", "x": 750, "y": 560, "resumen": "Provocación bronquial (sensible, poco específica), prick test o IgE específica, e imágenes solo si se sospecha otra causa.", "teoria": [{"h": "Qué aporta cada una", "html": "<ul><li><b>Provocación</b> (metacolina, ejercicio, manitol): moderadamente sensible y poco específica; una prueba negativa en alguien sin CI ayuda a descartar asma.</li><li><b>Atopia</b> (prick test o IgE específica): aumenta la probabilidad de asma alérgica, pero no es específica. El prick test es rápido, barato y sensible.</li><li><b>Imágenes</b>: no de rutina. Sirven para buscar diagnósticos alternativos o malformaciones en el asma difícil.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 34–35. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Otras pruebas"},
  {"id": "g1-tos", "nivel": 1, "mapa": "gr-c1", "titulo": "Tos como único síntoma", "tipo": "concepto", "x": 1050, "y": 170, "resumen": "Asma variante tos: espirometría normal, a veces solo hiperreactividad. En niños, tos seca nocturna y con ejercicio, llanto o risa.", "teoria": [{"h": "Cómo pensarla", "html": "<p>Causas de tos aislada no productiva: asma variante tos, goteo posnasal, reflujo, sinusitis, tos posinfecciosa, obstrucción laríngea inducible y bronquitis eosinofílica.</p><p>En niños, la tos nocturna puede ser lo único que notan los padres; al preguntar, suele aparecer también con ejercicio, llanto o risa. La espirometría suele ser normal y la única alteración puede ser la provocación positiva. Se trata como cualquier asma.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 36–37. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g1-contextos"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Tos sola"},
  {"id": "g1-contextos", "nivel": 2, "mapa": "gr-c1", "titulo": "Otros contextos", "tipo": "concepto", "x": 1050, "y": 330, "resumen": "Ocupacional, atletas, embarazo, adultos mayores, fumadores y obesidad: cada uno tiene trampas propias para el diagnóstico.", "teoria": [{"h": "Resumen", "html": "<ul><li><b>Ocupacional</b>: 5–20 % del asma de inicio adulto. Preguntar si mejora fuera del trabajo.</li><li><b>Atletas</b>: confirmar con provocación; descartar obstrucción laríngea y sobreentrenamiento.</li><li><b>Embarazo</b>: si la historia es compatible y la prueba no confirma, tratar como asma y postergar estudios.</li><li><b>Adultos mayores</b>: subdiagnosticada por mala percepción de la disnea.</li><li><b>Fumadores</b>: puede coexistir con EPOC (ver cap. 7).</li><li><b>Obesidad</b>: confirmar con función pulmonar; el sobrediagnóstico es frecuente.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 37–38. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Otros contextos"},
  {"id": "g1-bajos-recursos", "nivel": 2, "mapa": "gr-c1", "titulo": "Sin espirometría", "tipo": "concepto", "x": 1050, "y": 480, "resumen": "Usar PEF antes que solo los síntomas: mejora ≥ 20 % a los 15 minutos de salbutamol, o mejoría tras 4 semanas de CI.", "teoria": [{"h": "Qué hacer", "html": "<p>GINA no recomienda diagnosticar solo por el cuadro clínico. Si no hay espirometría, usar <b>PEF</b>:</p><ul><li>Mejora ≥ 20 % a los 15 minutos de dos disparos de salbutamol.</li><li>Mejora de síntomas y PEF tras 4 semanas de CI.</li></ul><p>El PEF es menos confiable, pero mejor que nada. La OMS lo considera una herramienta esencial en atención primaria.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 38. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Sin espirometría"},
  {"id": "g2-resumen", "nivel": 1, "mapa": "gr-c2", "titulo": "Las tres cosas a evaluar", "tipo": "concepto", "x": 150, "y": 170, "resumen": "Control (síntomas y riesgo futuro), problemas del tratamiento (técnica, adherencia, plan escrito) y comorbilidades.", "teoria": [{"h": "En cada consulta", "html": "<ol><li><b>Control del asma</b>: síntomas de las últimas 4 semanas y, por separado, factores de riesgo de crisis, de obstrucción persistente y de efectos adversos.</li><li><b>Tratamiento</b>: en qué paso está, técnica inhalatoria, adherencia, efectos adversos, plan de acción escrito, objetivos y preocupaciones.</li><li><b>Comorbilidades</b>: rinitis, rinosinusitis, reflujo, obesidad, apnea del sueño, ansiedad y depresión.</li></ol>"}, {"h": "Cómo describirlo", "html": "<p>Siempre en dos dominios. Por ejemplo: «buen control de síntomas, pero con riesgo aumentado porque tuvo una crisis grave este año».</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 2-1 (p. 40) y p. 42. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g2-sintomas", "g2-riesgo", "g2-ninos"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Qué evaluar"},
  {"id": "g2-ninos", "nivel": 1, "mapa": "gr-c2", "titulo": "Preguntas para niños de 6 a 11 años", "tipo": "concepto", "x": 150, "y": 330, "resumen": "Preguntar al niño y al adulto: síntomas de día y de noche, uso de rescate (sin contar antes del deporte), actividad comparada con sus pares, faltas a la escuela, crisis con virus.", "teoria": [{"h": "Qué preguntar", "html": "<ul><li><b>Día</b>: cuántas veces tose, sibila o se agita; qué lo desencadena.</li><li><b>Noche</b>: tos, despertares, cansancio al día siguiente. Si la única queja es tos nocturna, pensar también en rinitis o reflujo.</li><li><b>Rescate</b>: cuántas veces lo usa; distinguir el uso antes del deporte.</li><li><b>Actividad</b>: deportes y juegos frente a hermanos y compañeros; faltas a la escuela. Escuchar al niño sin que lo interrumpa el adulto.</li><li><b>Crisis</b>: cómo le afectan los virus, consultas de urgencia, si tiene plan escrito.</li></ul>"}, {"h": "Qué revisar", "html": "<ul><li>Talla al menos una vez por año: el asma mal controlada y el primer o segundo año de CI pueden bajar la velocidad de crecimiento.</li><li>Que muestre cómo usa el inhalador.</li><li>Adherencia: si hay medicación en la casa, cuántos días por semana la usa, dónde la guardan.</li><li>Rinitis, eccema, <b>alergia alimentaria confirmada</b> (riesgo de muerte por asma) y obesidad.</li></ul>"}, {"h": "Ojo", "html": "<p>Muchos chicos mal controlados evitan el ejercicio y parecen bien. Los padres suelen notar irritabilidad o cansancio antes que la disnea. Herramientas: c-ACT y ACQ.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 2-3 (p. 44) y p. 45. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g2-sintomas"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "En niños"},
  {"id": "g2-sintomas", "nivel": 1, "mapa": "gr-c2", "titulo": "Control de síntomas: 4 preguntas", "tipo": "concepto", "x": 450, "y": 170, "resumen": "En las últimas 4 semanas: síntomas diurnos > 2 por semana, despertares, SABA > 2 por semana, limitación de la actividad. Ninguna: bien controlado; 1–2: parcial; 3–4: no controlado.", "teoria": [{"h": "La herramienta de GINA", "html": "<table><thead><tr><th>En las últimas 4 semanas</th></tr></thead><tbody><tr><td>¿Síntomas de día más de 2 veces por semana?</td></tr><tr><td>¿Algún despertar por asma?</td></tr><tr><td>¿SABA de rescate más de 2 veces por semana?</td></tr><tr><td>¿Alguna limitación de la actividad?</td></tr></tbody></table><p><b>Ninguna</b>: bien controlado · <b>1–2</b>: parcialmente controlado · <b>3–4</b>: no controlado.</p>"}, {"h": "Matices", "html": "<ul><li>No contar el rescate usado antes del ejercicio.</li><li>Si usa <b>CI-formoterol a demanda</b> como rescate, el uso frecuente ya aporta corticoide: no entra en la pregunta del SABA, pero se tiene en cuenta al ajustar la dosis.</li><li>Preguntar también por todo el período desde la última consulta.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 2-2A (p. 41) y p. 42. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g2-herramientas", "g2-funcion"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Control de síntomas"},
  {"id": "g2-herramientas", "nivel": 2, "mapa": "gr-c2", "titulo": "Cuestionarios", "tipo": "concepto", "x": 450, "y": 330, "resumen": "ACT (20–25 bien controlado), ACQ-5 y, en niños, c-ACT. CAAT para el estado de salud. GINA no recomienda combinar síntomas y crisis en un solo puntaje.", "teoria": [{"h": "Los más usados", "html": "<ul><li><b>ACT</b>: 5–25 puntos. 20–25 bien controlado, 16–19 no bien controlado, 5–15 muy mal controlado. Diferencia mínima importante: 3 puntos.</li><li><b>ACQ-5</b>: 0–6 (más alto, peor). GINA prefiere el ACQ-5 al 6 o 7.</li><li><b>c-ACT</b> (niños de 4 a 11 años), con una parte para el niño y otra para el adulto.</li><li><b>Peds-AIRQ</b> (5–11 años): suma síntomas y crisis, pero un niño «bien controlado» igual puede tener riesgo.</li><li><b>CAAT</b>: estado de salud en adultos, incluye expectoración y energía.</li></ul><p>Ninguno está validado con CI-formoterol o CI-SABA como rescate. No hay herramientas validadas para períodos de más de 4 semanas.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 42–45. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Cuestionarios"},
  {"id": "g2-funcion", "nivel": 2, "mapa": "gr-c2", "titulo": "Función pulmonar en el seguimiento", "tipo": "concepto", "x": 450, "y": 480, "resumen": "Medir al inicio, a los 3–6 meses de CI (mejor valor personal) y después cada 1–2 años. Un VEF₁ bajo predice crisis aunque haya pocos síntomas.", "teoria": [{"h": "Cuándo medir", "html": "<p>Al diagnóstico, a los <b>3–6 meses</b> de tratamiento para registrar el mejor valor personal y después periódicamente; más seguido en pacientes de riesgo. Con el CI, el VEF₁ mejora en días y llega a una meseta a los 2 meses.</p>"}, {"h": "Cómo leerla", "html": "<ul><li><b>VEF₁ bajo</b>, sobre todo &lt; 60 %: más riesgo de crisis y de caída de la función, independientemente de los síntomas. Si hay pocos síntomas, pensar en mala percepción.</li><li><b>VEF₁ normal con muchos síntomas</b>: buscar otra causa.</li><li><b>Respuesta a broncodilatador persistente bajo CI</b>: asma no controlada, mala adherencia o mala técnica.</li><li>En niños, la espirometría es confiable desde los 5 años o más, y muchos no controlados tienen función normal entre crisis.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 47–48. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g2-riesgo"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Función pulmonar"},
  {"id": "g2-riesgo", "nivel": 1, "mapa": "gr-c2", "titulo": "Factores de riesgo de crisis", "tipo": "concepto", "x": 750, "y": 170, "resumen": "Aun con pocos síntomas: crisis grave en el último año, SABA excesivo, CI insuficiente, VEF₁ bajo, exposiciones, comorbilidades, problemas psicosociales y marcadores tipo 2 altos.", "teoria": [{"h": "Los que suman riesgo aunque haya pocos síntomas", "html": "<ul><li><b>Crisis</b>: ≥ 1 grave en el último año; alguna vez intubado o en terapia intensiva.</li><li><b>SABA excesivo</b>: ≥ 3 aerosoles de 200 dosis por año; más mortalidad con ≥ 1 por mes.</li><li><b>CI insuficiente</b>: no indicado, mala adherencia o mala técnica.</li><li><b>Comorbilidades</b>: obesidad, rinosinusitis crónica, reflujo, alergia alimentaria confirmada, embarazo.</li><li><b>Exposiciones</b>: tabaco, cigarrillo electrónico, alérgenos si está sensibilizado, contaminación.</li><li><b>Psicosociales</b>: problemas psicológicos o socioeconómicos graves.</li><li><b>Función</b>: VEF₁ bajo, mucha respuesta al broncodilatador.</li><li><b>Tipo 2</b>: eosinófilos o FeNO altos.</li></ul>"}, {"h": "En niños", "html": "<p>El mayor predictor es haber tenido crisis previas; también el mal control, el esquema subóptimo, la alergia asociada y la pobreza. Una sola crisis en 12 meses obliga a revisar medicación, técnica y plan.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 2-2B (p. 41) y p. 45–46. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g2-persistente", "g2-adversos"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Riesgo de crisis"},
  {"id": "g2-persistente", "nivel": 2, "mapa": "gr-c2", "titulo": "Riesgo de obstrucción persistente", "tipo": "concepto", "x": 750, "y": 340, "resumen": "Prematurez y bajo peso al nacer, tos productiva frecuente, tabaco y tóxicos, VEF₁ inicial bajo, eosinofilia y crisis graves sin CI.", "teoria": [{"h": "Factores", "html": "<ul><li><b>Historia</b>: prematurez, bajo peso al nacer, mucho aumento de peso en el lactante, tos productiva frecuente.</li><li><b>Medicación</b>: no recibir CI después de una crisis grave.</li><li><b>Exposiciones</b>: tabaco, químicos, exposiciones laborales o domésticas.</li><li><b>Estudios</b>: VEF₁ inicial bajo, eosinofilia en esputo o sangre.</li></ul><p>Los chicos con asma persistente pueden crecer menos en función pulmonar y algunos caen más rápido en la adultez temprana.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 2-2B y p. 46. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Obstrucción persistente"},
  {"id": "g2-adversos", "nivel": 2, "mapa": "gr-c2", "titulo": "Riesgo de efectos adversos", "tipo": "concepto", "x": 750, "y": 490, "resumen": "Corticoides orales frecuentes (4–5 ciclos en la vida ya suman daño), CI en dosis altas o potentes, mala técnica e inhibidores del citocromo P450.", "teoria": [{"h": "Qué vigilar", "html": "<ul><li><b>Corticoide oral</b>: a corto plazo, sepsis, trombosis, alteraciones del sueño y del ánimo, hiperglucemia. Con apenas <b>4–5 ciclos en la vida</b> aparecen efectos acumulados: diabetes, osteoporosis, cataratas.</li><li><b>CI en dosis altas</b> por tiempo prolongado: hematomas, osteoporosis, cataratas, glaucoma, supresión suprarrenal. Locales: candidiasis y disfonía.</li><li><b>Interacciones</b>: ketoconazol, itraconazol, ritonavir, claritromicina o eritromicina aumentan los efectos del CI y de salmeterol o vilanterol.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 2-2B y p. 46. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Efectos adversos"},
  {"id": "g2-gravedad", "nivel": 1, "mapa": "gr-c2", "titulo": "Gravedad: se define mirando hacia atrás", "tipo": "concepto", "x": 1050, "y": 170, "resumen": "Se define por el tratamiento que hizo falta para controlar el asma tras varios meses. Grave: no se controla con CI-LABA en dosis altas, o lo necesita.", "teoria": [{"h": "Las categorías", "html": "<ul><li><b>Grave</b>: no se controla pese a CI-LABA en dosis alta optimizado, o lo necesita para no descontrolarse.</li><li><b>Moderada</b>: bien controlada en los pasos 3 o 4.</li><li><b>Leve</b>: bien controlada con CI-formoterol a demanda en dosis baja o con CI en dosis baja más SABA a demanda.</li></ul>"}, {"h": "Por qué evitar «asma leve»", "html": "<p>Es una etiqueta retrospectiva: no sirve para decidir quién recibe pasos 1 o 2. Además genera la idea de que no hay riesgo, cuando <b>hasta el 30 % de las crisis y muertes</b> ocurre en personas con síntomas poco frecuentes. Si se usa, aclarar que el CI reduce mucho ese riesgo.</p><p>La vieja distinción entre «intermitente» y «persistente leve» era arbitraria.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 39 y 48–49. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g2-no-controlada"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Gravedad"},
  {"id": "g2-no-controlada", "nivel": 1, "mapa": "gr-c2", "titulo": "¿Grave o no controlada?", "tipo": "concepto", "x": 1050, "y": 360, "resumen": "Antes de decir «asma grave», descartar mala técnica (hasta 80 %), mala adherencia, diagnóstico equivocado, comorbilidades y exposiciones.", "teoria": [{"h": "Lo que hay que descartar primero", "html": "<ol><li><b>Técnica inhalatoria</b> incorrecta: hasta el 80 % en la comunidad.</li><li><b>Adherencia</b> baja.</li><li><b>Diagnóstico equivocado</b>: obstrucción laríngea inducible, insuficiencia cardíaca, falta de entrenamiento.</li><li><b>Comorbilidades</b>: rinosinusitis, reflujo, obesidad, apnea del sueño.</li><li><b>Exposiciones</b> en la casa o el trabajo, incluido el tabaco.</li></ol><p>El asma no controlada es mucho más frecuente que la grave y suele mejorar más fácil. Para el asma grave, ver el capítulo 8.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 51–52 y Box 2-4. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "¿Grave o no controlada?"},
  {"id": "g3-alianza", "nivel": 1, "mapa": "gr-c3", "titulo": "Alianza con el paciente y la familia", "tipo": "concepto", "x": 150, "y": 170, "resumen": "Decisiones compartidas y buena comunicación mejoran los resultados sin alargar la consulta.", "teoria": [{"h": "Comunicación", "html": "<ul><li>Actitud cordial y atenta; dejar que el paciente cuente sus objetivos, creencias y miedos.</li><li>Empatía y respuesta rápida a las preocupaciones.</li><li>Información personalizada, con devolución y repaso.</li></ul><p>Enseñar a comunicar mejora la satisfacción, los resultados y la adherencia, y reduce el uso de recursos, sin alargar la consulta.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 3-1 (p. 54). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g3-alfabetizacion", "g3-objetivo"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Alianza"},
  {"id": "g3-alfabetizacion", "nivel": 2, "mapa": "gr-c3", "titulo": "Alfabetización en salud", "tipo": "concepto", "x": 150, "y": 330, "resumen": "Ordenar lo más importante primero, palabras simples, números en vez de porcentajes, dibujos y pedir que repitan las indicaciones.", "teoria": [{"h": "Cómo reducir su impacto", "html": "<ul><li>De lo más a lo menos importante.</li><li>Hablar despacio, sin jerga.</li><li>Números en lugar de porcentajes.</li><li>Dibujos, tablas o ejemplos.</li><li><b>«Enseñar de vuelta»</b>: pedir que repitan las indicaciones.</li><li>Que otra persona repita los mensajes clave.</li><li>Atender la comunicación no verbal y facilitar las preguntas.</li></ul><p>La baja alfabetización en salud se asocia con peor control del asma.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 3-1 y p. 54. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Alfabetización"},
  {"id": "g3-objetivo", "nivel": 1, "mapa": "gr-c3", "titulo": "Objetivo a largo plazo", "tipo": "concepto", "x": 450, "y": 150, "resumen": "El mejor resultado posible para cada paciente: buen control de síntomas a largo plazo y mínimo riesgo de crisis, caída de función, corticoide oral y efectos adversos.", "teoria": [{"h": "Los dos componentes", "html": "<ul><li><b>Control de síntomas</b>: pocos o ningún síntoma, sin despertares, actividad física normal.</li><li><b>Riesgo mínimo</b>: sin crisis, función pulmonar estable o mejor, sin corticoide sistémico de mantenimiento, sin efectos adversos.</li></ul>"}, {"h": "Lo que no hay que olvidar", "html": "<p>Los objetivos del paciente pueden ser otros: preguntarlos. Controlar los síntomas <b>no alcanza</b>: con pocos síntomas puede haber crisis graves, desencadenadas por virus, alérgenos o contaminación.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 3-2 (p. 55). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g3-remision", "g3-ciclo"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Objetivo"},
  {"id": "g3-remision", "nivel": 1, "mapa": "gr-c3", "titulo": "Remisión del asma", "tipo": "concepto", "x": 450, "y": 300, "resumen": "Puede ser clínica o completa, con o sin tratamiento. En la infancia es frecuente, pero no es curación: el asma suele volver.", "teoria": [{"h": "Remisión en la infancia", "html": "<p>Las cifras varían según la definición: en un estudio, el 59 % de los preescolares con sibilancias no sibilaba a los 6 años. Predicen remisión: episodios menos frecuentes y más leves, buena función pulmonar y poca hiperreactividad. Predicen persistencia: atopia, asma o alergia en los padres, inicio más tardío de los síntomas, sibilancias sin resfríos y tabaquismo materno o exposición al humo.</p><p><b>Remisión no es curación</b>: el asma suele volver, y quienes remitieron tienen más riesgo de caída acelerada de la función en la adultez. No hay evidencia de que algún tratamiento infantil aumente la remisión, pero el CI reduce mucho la carga actual.</p>"}, {"h": "Cómo hablarlo con la familia", "html": "<ul><li>Si no hay síntomas, buscar actividad de la enfermedad: sibilancias, evitación del ejercicio, función pulmonar.</li><li>Decir «el asma está tranquila por ahora».</li><li>Aclarar que puede volver.</li><li>Defender el tratamiento por sus beneficios actuales, sin prometer efectos sobre el futuro.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 55–57. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Remisión"},
  {"id": "g3-ciclo", "nivel": 1, "mapa": "gr-c3", "titulo": "Ciclo evaluar, ajustar, revisar", "tipo": "concepto", "x": 750, "y": 150, "resumen": "El tratamiento se ajusta en un ciclo continuo según síntomas, riesgo, efectos adversos y preferencias.", "teoria": [{"h": "Los tres pasos", "html": "<ul><li><b>Evaluar</b>: control de síntomas, factores de riesgo, técnica y adherencia, comorbilidades, objetivos; confirmar el diagnóstico si falta.</li><li><b>Ajustar</b>: tratar los factores modificables y las comorbilidades, medidas no farmacológicas, educación y medicación.</li><li><b>Revisar</b>: respuesta, satisfacción, biomarcadores tipo 2 si sigue sin control; reajustar.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 3-3 (p. 58). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g3-poblacion", "g3-riesgos"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Ciclo"},
  {"id": "g3-poblacion", "nivel": 2, "mapa": "gr-c3", "titulo": "Decisiones poblacionales e individuales", "tipo": "concepto", "x": 750, "y": 290, "resumen": "La opción «preferida» es la mejor para la mayoría. Para cada paciente, se suman su fenotipo, sus riesgos, sus preferencias, la técnica y el costo.", "teoria": [{"h": "Dos niveles", "html": "<ul><li><b>Poblacional</b> (guías nacionales, formularios): la opción preferida en cada paso es la mejor para la mayoría según la evidencia, la seguridad y el costo. En adultos y adolescentes, el <b>track 1</b> con CI-formoterol de rescate.</li><li><b>Individual</b>: se agregan las características que predicen riesgo o respuesta, los objetivos y preocupaciones, la técnica con cada dispositivo, la adherencia probable y el costo.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 3-4 (p. 59) y p. 60. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g3-ocs"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Población e individuo"},
  {"id": "g3-ocs", "nivel": 2, "mapa": "gr-c3", "titulo": "Menos efectos adversos y cuidado del corticoide oral", "tipo": "concepto", "x": 750, "y": 430, "resumen": "Track 1 cuando se pueda, buena técnica con aerocámara, enjuagarse, dosis mínima eficaz. El corticoide oral, solo cuando hace falta y en ciclos cortos.", "teoria": [{"h": "Inhalados", "html": "<ul><li>Preferir el track 1, que usa menos CI.</li><li>Buena técnica, con aerocámara si es aerosol.</li><li>Enjuagarse y escupir después del CI.</li><li>Tras 3 meses de buen control, buscar la dosis mínima eficaz.</li><li>Revisar interacciones con inhibidores del citocromo P450.</li></ul>"}, {"h": "Corticoide oral", "html": "<p>Para necesitarlo menos: optimizar el tratamiento inhalado (el rescate antiinflamatorio lo reduce mucho frente al SABA solo), tratar factores de riesgo y comorbilidades. Usarlo solo en crisis moderadas o más graves, en la menor dosis y por el menor tiempo. No hace falta ir bajando la dosis si se usó menos de 2 semanas. Que el plan de acción no lleve a usarlo automáticamente.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 60–61. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Cuidar el corticoide oral"},
  {"id": "g3-riesgos", "nivel": 1, "mapa": "gr-c3", "titulo": "Factores de riesgo modificables", "tipo": "concepto", "x": 750, "y": 570, "resumen": "Ante cualquier riesgo: CI asegurado, rescate antiinflamatorio, plan escrito, más controles y revisar técnica. Además, una medida específica para cada factor.", "teoria": [{"h": "Para todos", "html": "<p>Asegurar un tratamiento con CI; pasar a un rescate antiinflamatorio (CI-formoterol o CI-SABA); plan de acción escrito; controles más frecuentes; revisar técnica y adherencia.</p>"}, {"h": "Medidas específicas", "html": "<table><thead><tr><th>Factor</th><th>Qué hacer</th></tr></thead><tbody><tr><td>Crisis grave en el último año</td><td>Rescate antiinflamatorio; si no hay otra causa, subir el tratamiento o derivar</td></tr><tr><td>Tabaco o vapeo</td><td>Cesación de todos en la casa; considerar más CI</td></tr><tr><td>VEF₁ bajo (&lt; 60 %)</td><td>Técnica y adherencia; prueba de 3 meses con CI alto; derivar si no mejora</td></tr><tr><td>Obesidad</td><td>Plan para bajar de peso; distinguir disnea por desacondicionamiento</td></tr><tr><td>Alergia alimentaria confirmada</td><td>Evitar el alimento, plan de anafilaxia, adrenalina, derivar</td></tr><tr><td>Alérgeno si está sensibilizado</td><td>Medidas simples de evitación; en adolescentes con ácaro, considerar inmunoterapia sublingual</td></tr><tr><td>FeNO alto con CI en dosis media o alta</td><td>Revisar adherencia</td></tr><tr><td>Problemas psicológicos o socioeconómicos</td><td>Salud mental; el esquema con CI más accesible</td></tr></tbody></table><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 3-5 (p. 61–62). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g3-no-farma"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Riesgos modificables"},
  {"id": "g3-no-farma", "nivel": 1, "mapa": "gr-c3", "titulo": "Medidas no farmacológicas", "tipo": "concepto", "x": 1050, "y": 150, "resumen": "Las de más evidencia: dejar de fumar y no exponer a los chicos al humo, actividad física, evitar exposiciones laborales y bajar de peso.", "teoria": [{"h": "Con buena evidencia", "html": "<ul><li><b>Tabaco y vapeo</b>: insistir en dejarlo en cada consulta; que no se fume ni vapee en ambientes o autos que usan los chicos.</li><li><b>Actividad física</b> regular por sus beneficios generales; prevenir el broncoespasmo por ejercicio con CI diario o CI-formoterol antes del ejercicio.</li><li><b>Humedad y moho</b>: remediarlos reduce síntomas.</li><li><b>Obesidad</b>: bajar de peso.</li><li><b>Ejercicios respiratorios</b>: mejoran síntomas y calidad de vida, no las crisis.</li><li>Dieta rica en frutas y verduras.</li></ul>"}, {"h": "Con poca o ninguna evidencia", "html": "<ul><li>Evitar alérgenos de interior como estrategia general: no se recomienda. En chicos sensibilizados a ácaro o mascotas hay algo de beneficio.</li><li>Evitar alimentos solo si la alergia está demostrada.</li><li>AINE: no están contraindicados salvo reacción previa.</li><li>Intervenciones sobre el riesgo social: en EE. UU. redujeron las consultas a guardia e internaciones en chicos.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 3-6 (p. 63–65). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g3-ejercicio", "g3-derivar"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "No farmacológicas"},
  {"id": "g3-ejercicio", "nivel": 2, "mapa": "gr-c3", "titulo": "Broncoespasmo por ejercicio", "tipo": "concepto", "x": 1050, "y": 300, "resumen": "Se previene con CI diario o con CI-formoterol a demanda y antes del ejercicio. Para los episodios que igual aparecen: entrada en calor y SABA o CI-formoterol previo.", "teoria": [{"h": "Cómo manejarlo", "html": "<ul><li>Prevención de base: <b>CI diario</b>, o <b>CI-formoterol en dosis baja</b> a demanda y antes del ejercicio.</li><li>Si igual aparecen síntomas: entrada en calor; SABA, CI-SABA o CI-formoterol antes del ejercicio.</li><li>La natación en jóvenes con asma tiene un pequeño beneficio sobre el control y la función pulmonar.</li><li>Si el broncoespasmo es frecuente pese al tratamiento, revisar el control general.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 3-6 y p. 65–66. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Ejercicio"},
  {"id": "g3-derivar", "nivel": 1, "mapa": "gr-c3", "titulo": "Cuándo derivar", "tipo": "concepto", "x": 1050, "y": 450, "resumen": "Diagnóstico dudoso, sospecha ocupacional, sin control en el paso 4, factores de riesgo de muerte, efectos adversos importantes. En niños, además: dudas en prematuros o sin control con CI en dosis media.", "teoria": [{"h": "Indicaciones", "html": "<ul><li><b>Diagnóstico difícil</b>: signos de infección crónica o causa cardíaca (derivar ya), dudas pese a prueba terapéutica.</li><li><b>Sospecha de asma ocupacional</b>.</li><li><b>Sin control</b> o con crisis o función baja en el paso 4, con buena técnica y adherencia; uso frecuente de guardia.</li><li><b>Riesgo de muerte</b>: crisis casi fatal previa, anafilaxia o alergia alimentaria.</li><li><b>Efectos adversos</b>: corticoide oral a largo plazo o ≥ 2 ciclos por año.</li><li>Sospecha de enfermedad respiratoria exacerbada por aspirina o aspergilosis broncopulmonar alérgica.</li></ul>"}, {"h": "En niños de 6 a 11 años, además", "html": "<ul><li>Dudas diagnósticas, por ejemplo en un ex prematuro que no responde.</li><li>Sin control con <b>CI en dosis media</b> pese a buena técnica y adherencia.</li><li>Sospecha de efectos adversos, como retraso del crecimiento.</li><li>Preocupación por el bienestar del niño.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 3-8 (p. 72). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Derivar"},
  {"id": "g4-no-saba", "nivel": 1, "mapa": "gr-c4", "titulo": "Nunca SABA solo", "tipo": "concepto", "x": 150, "y": 150, "resumen": "A partir de los 6 años, todo asma recibe tratamiento con corticoide inhalado (CI) desde el diagnóstico. El SABA solo aumenta el riesgo de crisis graves y de muerte.", "teoria": [{"h": "Por qué", "html": "<ul><li>Los chicos tratados solo con SABA tienen más riesgo de muerte por asma y de consultas urgentes que con cualquier CI.</li><li>≥ 3 aerosoles de SABA por año (unas 12 inhalaciones por semana) duplica las consultas a guardia en niños.</li><li>Empezar con SABA solo enseña que ese es «el remedio» y empeora la adherencia posterior al CI.</li><li>El CI temprano mejora más la función pulmonar que si se empieza tras 2–4 años de síntomas.</li></ul>"}, {"h": "Tampoco", "html": "<p>SABA o teofilina por vía oral, ni LABA sin CI.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, cap. 4, puntos clave y p. 78 y 106. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g4-terminos", "g4-n-inicio"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Nunca SABA solo"},
  {"id": "g4-terminos", "nivel": 1, "mapa": "gr-c4", "titulo": "Rescate antiinflamatorio y MART", "tipo": "concepto", "x": 150, "y": 290, "resumen": "AIR: un rescate que trae CI en dosis baja y un broncodilatador rápido (CI-formoterol o CI-salbutamol). MART: el mismo CI-formoterol todos los días y como rescate.", "teoria": [{"h": "Los términos", "html": "<ul><li><b>Mantenimiento</b>: lo que se indica todos los días, tenga o no síntomas.</li><li><b>Rescate</b>: se usa a demanda para aliviar síntomas o antes del ejercicio.</li><li><b>Rescate antiinflamatorio (AIR)</b>: CI en dosis baja más broncodilatador rápido, como budesonida-formoterol, beclometasona-formoterol o CI-salbutamol. Usado solo, en los pasos 1–2, se llama «solo AIR».</li><li><b>MART</b>: mantenimiento y rescate con el mismo inhalador de CI-formoterol (también llamado SMART). Solo se puede hacer con CI-formoterol.</li></ul>"}, {"h": "Ojo", "html": "<p>Los CI-LABA con otro LABA (salmeterol, vilanterol) no sirven como rescate. Tampoco usar CI-formoterol como rescate si el mantenimiento es otro CI-LABA.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 4-1 (p. 76). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g4-dosis", "g4-tracks"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "AIR y MART"},
  {"id": "g4-dosis", "nivel": 2, "mapa": "gr-c4", "titulo": "Dosis de CI en niños de 6 a 11 años", "tipo": "concepto", "x": 150, "y": 440, "resumen": "Budesonida 100–200 mcg por día es dosis baja; fluticasona 50–100. La dosis baja da casi todo el beneficio. No es una tabla de equivalencias.", "teoria": [{"h": "Dosis diarias (mcg, dosis medida)", "html": "<table><thead><tr><th>CI</th><th>Baja</th><th>Media</th><th>Alta</th></tr></thead><tbody><tr><td>Beclometasona estándar (aerosol)</td><td>100–200</td><td>&gt; 200–400</td><td>&gt; 400</td></tr><tr><td>Beclometasona extrafina (aerosol)</td><td>50–100</td><td>&gt; 100–200</td><td>&gt; 200</td></tr><tr><td>Budesonida (polvo o aerosol)</td><td>100–200</td><td>&gt; 200–400</td><td>&gt; 400</td></tr><tr><td>Budesonida nebulizada</td><td>250–500</td><td>&gt; 500–1000</td><td>&gt; 1000</td></tr><tr><td>Ciclesonida</td><td>80</td><td>&gt; 80–160</td><td>&gt; 160</td></tr><tr><td>Fluticasona propionato</td><td>50–100</td><td>&gt; 100–200</td><td>&gt; 200</td></tr><tr><td>Fluticasona furoato (polvo)</td><td>50</td><td>—</td><td>—</td></tr></tbody></table>"}, {"h": "Cómo leerla", "html": "<p>No implica la misma potencia: al cambiar de un CI a otro, vigilar la estabilidad. Pocos pacientes necesitan dosis altas, que suman efectos adversos.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 4-2 (p. 77). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Dosis de CI (6–11)"},
  {"id": "g4-n-inicio", "nivel": 1, "mapa": "gr-c4", "titulo": "Con qué empezar (6–11 años)", "tipo": "concepto", "x": 450, "y": 150, "resumen": "Según los síntomas: ≤ 2 días por semana, AIR; 3–4 días, CI diario; casi todos los días, CI-LABA, CI en dosis media o MART; si debuta con una crisis, pasos 3–4 al alta.", "teoria": [{"h": "Tratamiento inicial preferido", "html": "<table><thead><tr><th>Síntomas</th><th>Empezar con</th></tr></thead><tbody><tr><td>≤ 2 días por semana</td><td>CI-formoterol a demanda en dosis baja, o CI más SABA a demanda (combinados, o el CI cada vez que usa el SABA)</td></tr><tr><td>3–4 días por semana</td><td>CI diario en dosis baja más SABA o CI-SABA a demanda</td></tr><tr><td>Casi todos los días, despierta ≥ 1 vez por semana o función baja</td><td>CI-LABA en dosis baja o CI en dosis media, más rescate; o MART con CI-formoterol en dosis baja</td></tr><tr><td>Todos los días, con función baja o crisis reciente</td><td>CI-LABA en dosis media más rescate, o MART en dosis baja</td></tr><tr><td>Debuta con una crisis</td><td>Tratar la crisis; iniciar paso 3 o 4 antes del alta</td></tr></tbody></table>"}, {"h": "Antes y después", "html": "<p>Registrar la evidencia del diagnóstico, el control y la función pulmonar; elegir un inhalador que el chico pueda usar bien. Revisar a los <b>2–3 meses</b> y bajar después de 3 meses de buen control.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 4-10 (p. 102). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g4-n-12"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Inicio (6–11)"},
  {"id": "g4-n-12", "nivel": 1, "mapa": "gr-c4", "titulo": "Pasos 1 y 2 (6–11 años)", "tipo": "concepto", "x": 450, "y": 300, "resumen": "Paso 1: AIR (CI-formoterol o CI más SABA a demanda). Paso 2: CI diario en dosis baja; AIR como alternativa. En CARE, el CI-formoterol a demanda redujo las crisis un 45 % frente al SABA.", "teoria": [{"h": "Paso 1", "html": "<p><b>Rescate antiinflamatorio</b>: CI-formoterol en dosis baja a demanda, o CI más SABA a demanda.</p><ul><li><b>CARE</b> (5–15 años con SABA solo): budesonida-formoterol a demanda, 0,23 frente a 0,41 crisis por año (reducción del 45 %), sin diferencia en la velocidad de crecimiento.</li><li><b>TREXA</b>: tomar CI cada vez que se usa el SABA redujo los fracasos frente al SABA solo, sin afectar la talla.</li><li>La formulación de CARE ya no existe: GINA sugiere <b>budesonida-formoterol 80/4,5 mcg</b> (dosis liberada), 1 inhalación a demanda; consultar si necesita <b>más de 8 en 24 horas</b>.</li></ul>"}, {"h": "Paso 2", "html": "<p>Preferido: <b>CI diario en dosis baja</b> más SABA o CI-SABA a demanda (en START, −40 % de crisis graves). Alternativas: AIR a demanda (sin estudios contra CI diario en este grupo) o montelukast, menos eficaz y con alerta neuropsiquiátrica.</p>"}, {"h": "Si hay que subir desde el paso 1", "html": "<ul><li>Desde CI-formoterol a demanda → MART en dosis baja.</li><li>Desde CI-SABA combinado → CI diario más CI-SABA a demanda.</li><li>Desde CI y SABA separados → CI diario más SABA, con CI extra cada vez que usa SABA.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 105–107 y Box 4-8B. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g4-n-34"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Pasos 1–2 (6–11)"},
  {"id": "g4-n-34", "nivel": 1, "mapa": "gr-c4", "titulo": "Pasos 3 y 4 (6–11 años)", "tipo": "concepto", "x": 450, "y": 450, "resumen": "Paso 3: CI en dosis media, CI-LABA en dosis baja o MART en dosis baja. Paso 4: CI-LABA en dosis media o MART dos veces por día, o derivar.", "teoria": [{"h": "Paso 3: tres opciones preferidas", "html": "<ul><li>CI en <b>dosis media</b> más rescate.</li><li><b>CI-LABA en dosis baja</b> más rescate.</li><li><b>MART</b> con budesonida-formoterol 80/4,5 mcg: 1 inhalación una vez por día más 1 a demanda.</li></ul><p>La respuesta individual varía: conviene probar otra opción del mismo paso antes de subir. Agregar montelukast al CI no supera a agregar LABA.</p>"}, {"h": "Paso 4", "html": "<ul><li>CI-LABA en <b>dosis media</b> más rescate, o MART <b>dos veces por día</b> más 1 a demanda (sigue siendo dosis baja de CI).</li><li>Otras opciones: tiotropio (mejora algo la función y las crisis) o montelukast.</li><li>Considerar derivar.</li></ul><p>MART: no superar <b>8 inhalaciones en 24 horas</b> sin consultar.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 107–108 y Box 4-8B. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g4-n-5"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Pasos 3–4 (6–11)"},
  {"id": "g4-n-5", "nivel": 2, "mapa": "gr-c4", "titulo": "Paso 5 (6–11 años)", "tipo": "concepto", "x": 450, "y": 590, "resumen": "Derivar a un especialista en asma grave. Opciones: tiotropio y biológicos desde los 6 años (omalizumab, mepolizumab, dupilumab).", "teoria": [{"h": "Qué incluye", "html": "<ul><li>Derivar para evaluación y fenotipo.</li><li>Tiotropio agregado si no se controla con CI-LABA en dosis media o alta.</li><li>Biológicos aprobados desde los 6 años: <b>anti-IgE</b> (omalizumab o su biosimilar) en asma alérgica grave; <b>mepolizumab</b> en asma eosinofílica grave; <b>dupilumab</b> en asma tipo 2 o eosinofílica grave. Los tres reducen las crisis graves.</li><li>CI-LABA en dosis alta solo si no hay otra opción.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 108–109. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Paso 5 (6–11)"},
  {"id": "g4-tracks", "nivel": 1, "mapa": "gr-c4", "titulo": "Track 1 y track 2", "tipo": "concepto", "x": 750, "y": 150, "resumen": "Track 1 (preferido): CI-formoterol en dosis baja como rescate en todos los pasos y como mantenimiento desde el paso 3. Track 2: rescate con CI-SABA o SABA.", "teoria": [{"h": "Track 1, el preferido", "html": "<p>Rescate con <b>CI-formoterol en dosis baja</b> en todos los pasos; desde el paso 3, también como mantenimiento (MART).</p><ul><li>Pasos 1–2 (solo AIR): −55 % de crisis graves y −65 % de consultas a guardia o internaciones frente al SABA solo; −37 % de guardia o internación frente a CI diario.</li><li>MART: −32 % de crisis graves frente a la misma dosis de CI-LABA.</li><li>Un solo remedio, un solo inhalador y una sola dosis del paso 1 al 4.</li></ul>"}, {"h": "Track 2, la alternativa", "html": "<p>Rescate con <b>CI-SABA</b> o, si no hay, SABA. Novedad 2026: CI-SABA a demanda en el paso 1 (en BATURA redujo las crisis graves casi a la mitad frente al SABA). Necesita dos inhaladores desde el paso 2: enseñar bien la diferencia. Antes de elegir un rescate con SABA, pensar si va a cumplir con el CI diario.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, cap. 4, puntos clave y Box 4-8A (p. 90). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g4-a-dosis", "g4-a-5"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Tracks"},
  {"id": "g4-a-dosis", "nivel": 1, "mapa": "gr-c4", "titulo": "Dosis de MART en adolescentes", "tipo": "concepto", "x": 750, "y": 300, "resumen": "Budesonida-formoterol 160/4,5 mcg: 1 inhalación a demanda (pasos 1–2), más 1 una o dos veces por día (paso 3) o 2 dos veces por día (pasos 4–5). Consultar si necesita más de 12 en 24 horas.", "teoria": [{"h": "Dosis de 12 a 17 años", "html": "<table><thead><tr><th>Paso</th><th>Budesonida-formoterol 160/4,5 mcg</th></tr></thead><tbody><tr><td>1–2 (solo AIR)</td><td>1 inhalación a demanda</td></tr><tr><td>3 (MART)</td><td>1 dos veces (o una vez) por día más 1 a demanda</td></tr><tr><td>4–5 (MART)</td><td>2 dos veces por día más 1 a demanda</td></tr></tbody></table><p>Consultar si necesita <b>más de 12 inhalaciones en 24 horas</b>. Se puede tomar una inhalación extra a los pocos minutos: no hay que esperar horas como con el SABA. Con aerosol, usar aerocámara.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 4-8B (p. 91). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "MART en adolescentes"},
  {"id": "g4-a-5", "nivel": 2, "mapa": "gr-c4", "titulo": "Paso 5 en adolescentes y adultos", "tipo": "concepto", "x": 750, "y": 450, "resumen": "Derivar para fenotipo. Agregar LAMA o pasar a triple terapia; biológicos según el fenotipo tipo 2. El corticoide oral de mantenimiento, solo como último recurso.", "teoria": [{"h": "Opciones", "html": "<ul><li>Derivar para evaluación y fenotipo (ver capítulo 8).</li><li><b>LAMA agregado</b> o triple CI-LABA-LAMA si no se controla con CI-LABA en dosis media: reduce menos las crisis que los biológicos, pero sirve a quienes no califican.</li><li><b>Biológicos</b> según fenotipo: anti-IgE, anti-IL5/5R (incluido el nuevo depemokimab cada 26 semanas, desde los 12 años), anti-IL4R y anti-TSLP (tezepelumab, desde los 12 años).</li><li>Azitromicina tres veces por semana: solo en adultos y tras consulta con especialista.</li><li>Corticoide oral de mantenimiento en dosis baja: último recurso si no hay biológicos.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 98–100. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Paso 5 (≥ 12)"},
  {"id": "g4-revisar", "nivel": 1, "mapa": "gr-c4", "titulo": "Revisar y subir", "tipo": "concepto", "x": 1050, "y": 150, "resumen": "Control a 1–3 meses del inicio, después cada 3–12 meses y a la semana de una crisis. Antes de subir: confirmar que es asma, revisar técnica, adherencia, exposiciones y comorbilidades.", "teoria": [{"h": "Frecuencia", "html": "<p>Ver al paciente <b>1–3 meses</b> después de empezar y luego cada 3–12 meses; <b>dentro de la semana</b> tras una crisis. El beneficio completo del CI puede tardar 3–4 meses.</p>"}, {"h": "Tres formas de subir", "html": "<ul><li><b>Día a día</b> con AIR: el paciente ajusta las dosis a demanda según los síntomas; reduce la crisis grave en las semanas siguientes.</li><li><b>Por 1–2 semanas</b>: aumentar el CI durante un virus o la temporada de alérgenos, según el plan.</li><li><b>Sostenida</b> (al menos 2–3 meses): si no hay control pese a buena técnica y adherencia.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 110. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g4-bajar"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Revisar y subir"},
  {"id": "g4-bajar", "nivel": 1, "mapa": "gr-c4", "titulo": "Bajar el tratamiento", "tipo": "concepto", "x": 1050, "y": 300, "resumen": "Tras 2–3 meses de buen control con función estable: bajar el CI un 25–50 % cada 3 meses, con plan escrito. No suspender el CI del todo.", "teoria": [{"h": "Principios", "html": "<ul><li>Considerarlo con buen control y función estable por al menos 3 meses; con factores de riesgo, solo con supervisión cercana.</li><li>Elegir un buen momento: sin infección, sin viaje.</li><li>Cada paso es una <b>prueba terapéutica</b>: plan escrito, medicación para volver atrás y control programado.</li><li>Bajar el CI un <b>25–50 % cada 3 meses</b> es seguro para la mayoría.</li><li>Más riesgo al bajar: crisis o guardia en el último año, VEF₁ bajo.</li></ul>"}, {"h": "Ejemplos", "html": "<ul><li>CI diario en dosis baja → CI-formoterol a demanda, o CI cada vez que usa SABA. <b>No suspender el CI.</b></li><li>MART en dosis baja → una vez por día, o solo a demanda.</li><li>CI-LABA: bajar el CI; suspender el LABA puede empeorar.</li></ul><p>Hay pocos estudios de reducción en niños.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 111 y Box 4-13 (p. 112). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g4-biomarcadores"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Bajar"},
  {"id": "g4-biomarcadores", "nivel": 3, "mapa": "gr-c4", "titulo": "Ajustar con FeNO o esputo", "tipo": "concepto", "x": 1050, "y": 430, "resumen": "En niños y adultos jóvenes, ajustar el CI con FeNO redujo las crisis frente a la guía habitual; en adultos, no. GINA sigue recomendando la evaluación clínica.", "teoria": [{"h": "La evidencia", "html": "<ul><li><b>FeNO</b>: en un metaanálisis de 2016 en niños y adultos jóvenes, menos pacientes con ≥ 1 crisis (OR 0,67). En adultos no fumadores, sin beneficio frente a estrategias habituales. Un valor aislado se interpreta con cautela.</li><li><b>Esputo</b>: reduce crisis en adultos con asma moderada a grave, pero pocos centros lo hacen; sin evidencia suficiente en niños.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 113. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Guiado por biomarcadores"},
  {"id": "g4-it-vacunas", "nivel": 1, "mapa": "gr-c4", "titulo": "Inmunoterapia y vacunas", "tipo": "concepto", "x": 1050, "y": 570, "resumen": "Inmunoterapia con alérgenos, como agregado en asma sensibilizada, estable pero no bien controlada. Vacunas: gripe, VSR, COVID-19, neumococo y tos convulsa según el calendario local.", "teoria": [{"h": "Inmunoterapia", "html": "<ul><li><b>Subcutánea</b> (3–5 años): reduce la necesidad de CI. Reacciones graves en &lt; 0,5–0,7 %; el asma no controlada es el principal factor de riesgo. Empezar solo con buen control y 30 minutos de observación tras cada dosis.</li><li><b>Sublingual</b> (ácaro o gramíneas): en adolescentes y adultos con ácaro, parcialmente controlados con CI y VEF₁ &gt; 70 %.</li></ul>"}, {"h": "Vacunas", "html": "<p>Gripe anual en asma moderada a grave, o al menos cuando se vacuna a la población general. Neumococo, tos convulsa, gripe, VSR y COVID-19 según el calendario local. La vacuna materna contra el VSR y el nirsevimab redujeron las internaciones por VSR en lactantes.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 101 y 114–116. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Inmunoterapia y vacunas"},
  {"id": "g5-elegir", "nivel": 1, "mapa": "gr-c5", "titulo": "Elegir el inhalador", "tipo": "concepto", "x": 150, "y": 170, "resumen": "Primero el medicamento; después, entre los dispositivos disponibles, el que el paciente pueda usar bien, prefiera y pueda pagar, considerando el impacto ambiental.", "teoria": [{"h": "Las preguntas, en orden", "html": "<ol><li>¿Qué medicamento necesita? (el track 1 es el preferido).</li><li>¿Qué dispositivos hay para ese medicamento, a qué costo?</li><li>¿Lo puede usar bien después de entrenarlo? Depende de la destreza, la coordinación, el flujo inspiratorio y la edad.</li><li>¿Qué impacto ambiental tiene? Los propelentes de los aerosoles emiten carbono, pero una internación contamina más.</li><li>¿Está conforme? El mejor inhalador es el que prefiere y usa bien.</li></ol><p>Evitar combinar aerosol y polvo seco en el mismo paciente; mejor un solo inhalador combinado que varios.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 5-1, p. 118–120. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g5-tecnica"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Elegir"},
  {"id": "g5-tecnica", "nivel": 1, "mapa": "gr-c5", "titulo": "Técnica: elegir, revisar, corregir, confirmar", "tipo": "concepto", "x": 150, "y": 330, "resumen": "Hasta el 70–80 % usa mal el inhalador. Pedir que lo muestre, corregir con demostración física y volver a revisar: los errores reaparecen a las 4–6 semanas.", "teoria": [{"h": "Los cuatro pasos", "html": "<ul><li><b>Elegir</b>: con aerosol, aerocámara (mejor llegada y menos efectos locales del CI).</li><li><b>Revisar</b> en cada oportunidad: que lo muestre, no preguntar si sabe. Lista de chequeo por dispositivo.</li><li><b>Corregir</b> con demostración física (placebo o video); repetir 2–3 veces en la misma consulta. Cambiar de dispositivo solo si después de varios intentos no puede.</li><li><b>Confirmar</b>: el profesional debe saber demostrar cada inhalador que indica.</li></ul>"}, {"h": "Aerosol con aerocámara", "html": "<ul><li>Preferida: <b>una inhalación lenta y apnea</b>.</li><li>Con disnea o en los más chicos: <b>respiración corriente</b>, 5–6 respiraciones por disparo.</li><li><b>Agitar antes de cada disparo</b>: con 30 segundos de demora la dosis puede ser mucho mayor o menor.</li></ul><p>Revisar la técnica lleva 2–3 minutos y mejora el control. Farmacéuticos y enfermeros entrenados lo hacen muy bien.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 5-2 (p. 119). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g5-adherencia"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Técnica"},
  {"id": "g5-adherencia", "nivel": 1, "mapa": "gr-c5", "titulo": "Adherencia", "tipo": "concepto", "x": 450, "y": 170, "resumen": "Cerca de la mitad no usa el tratamiento como se acordó. Preguntar con empatía y sin juzgar; revisar fechas y contador del inhalador.", "teoria": [{"h": "Cómo detectarla", "html": "<p>Pregunta empática: «Muchos chicos no usan el inhalador todos los días. En las últimas 4 semanas, ¿cuántos días por semana lo usó?». Revisar la fecha de la última receta y el contador de dosis.</p><p>En el asma difícil con FeNO alto, una prueba de supresión con CI en dosis alta por una semana distingue mala adherencia de inflamación resistente.</p>"}, {"h": "Por qué falla", "html": "<ul><li><b>No intencional</b>: no entendió, se olvida, no tiene rutina, costo.</li><li><b>Intencional</b>: cree que no lo necesita, enojo o negación, miedo a los efectos adversos, estigma, insatisfacción, razones culturales, costo.</li><li><b>Del esquema</b>: varias tomas por día, varios inhaladores, dificultad con el dispositivo.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 5-3 (p. 121) y p. 120. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g5-mejorar-adh"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Adherencia"},
  {"id": "g5-mejorar-adh", "nivel": 2, "mapa": "gr-c5", "titulo": "Qué mejora la adherencia", "tipo": "concepto", "x": 450, "y": 340, "resumen": "Decisión compartida, recordatorios electrónicos, CI una vez por día, visitas domiciliarias de enfermería y monitoreo con devolución. En la escuela, tratamiento observado.", "teoria": [{"h": "Intervenciones con resultados", "html": "<ul><li>Decisión compartida sobre medicamento y dosis.</li><li>Recordatorios en el inhalador o el teléfono.</li><li>CI una vez por día en lugar de dos.</li><li>En chicos de alto riesgo, <b>visitas domiciliarias</b> de una enfermera de asma: mejor adherencia y menos ciclos de corticoide oral.</li><li>Tratamiento de mantenimiento <b>observado en la escuela</b> con telemedicina: más días sin síntomas y menos urgencias.</li><li>Intervenciones digitales (Cochrane 2022): mejor adherencia, menos crisis y mejor control.</li></ul><p>Mejorar la adherencia no siempre mejora los resultados clínicos.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 5-3 y p. 121–122. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Mejorar adherencia"},
  {"id": "g5-informacion", "nivel": 1, "mapa": "gr-c5", "titulo": "Qué información dar", "tipo": "concepto", "x": 750, "y": 150, "resumen": "El diagnóstico, para qué sirve cada inhalador, efectos adversos, la importancia del antiinflamatorio, cómo reconocer el empeoramiento y cuándo consultar.", "teoria": [{"h": "Temas", "html": "<ul><li>El diagnóstico.</li><li>Para qué sirve el tratamiento y la diferencia entre rescate y mantenimiento.</li><li>Posibles efectos adversos.</li><li>Prevenir síntomas y crisis: la importancia del antiinflamatorio.</li><li>Cómo reconocer el empeoramiento, qué hacer y cuándo consultar.</li><li>Manejo de las comorbilidades.</li></ul>"}, {"h": "Cómo", "html": "<p>Es un proceso de varias consultas, adaptado a la alfabetización en salud. En los chicos chicos, la educación se dirige al adulto, aunque el niño puede aprender habilidades simples. Los adolescentes tienen dificultades propias y pueden beneficiarse del apoyo entre pares. La información sola mejora el conocimiento, pero no los resultados.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 5-4 (p. 123). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g5-automanejo"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Información"},
  {"id": "g5-automanejo", "nivel": 1, "mapa": "gr-c5", "titulo": "Automanejo guiado: tres componentes", "tipo": "concepto", "x": 750, "y": 300, "resumen": "Autocontrol de síntomas o PEF, plan de acción escrito y controles regulares. Juntos reducen entre un tercio y dos tercios las internaciones, consultas de urgencia y faltas a la escuela.", "teoria": [{"h": "Los tres componentes", "html": "<ol><li><b>Autocontrol</b> de síntomas y, a veces, de PEF.</li><li><b>Plan de acción escrito</b> para reconocer y responder al empeoramiento.</li><li><b>Revisión regular</b> por un profesional.</li></ol><p>En adultos y niños (evidencia A) reduce entre un tercio y dos tercios las internaciones, las consultas de urgencia, las faltas al trabajo o la escuela y los despertares. Funciona igual si el paciente ajusta según el plan o si lo ajusta el médico.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 123. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g5-plan", "g5-pef"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Automanejo"},
  {"id": "g5-plan", "nivel": 1, "mapa": "gr-c5", "titulo": "Plan de acción escrito", "tipo": "concepto", "x": 750, "y": 450, "resumen": "Indica cómo cambiar el tratamiento cuando empeora y cuándo consultar. Con CI-formoterol de rescate, el primer paso es usar más dosis a demanda.", "teoria": [{"h": "Cómo es", "html": "<p>Puede ser impreso, digital o con dibujos. Debe decir cómo cambiar el tratamiento según los síntomas o el PEF y cuándo buscar atención.</p><ul><li>Con <b>SABA</b> de rescate: hay modelos para adultos, niños y baja alfabetización.</li><li>Con <b>CI-formoterol</b> (track 1): el primer paso al empeorar es aumentar las dosis a demanda del mismo inhalador, sin agregar otro.</li></ul><p>En adultos funciona mejor si incluye subir el CI y agregar corticoide oral, y si el PEF se basa en el mejor valor personal. Detalles en el capítulo 9.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 124. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Plan escrito"},
  {"id": "g5-pef", "nivel": 2, "mapa": "gr-c5", "titulo": "Cuándo sirve medir PEF", "tipo": "concepto", "x": 750, "y": 590, "resumen": "Por un tiempo corto: tras una crisis, después de un cambio de tratamiento o para buscar desencadenantes. A largo plazo: mala percepción, crisis súbitas o asma grave.", "teoria": [{"h": "Indicaciones", "html": "<ul><li><b>Corto plazo</b>: seguir la recuperación tras una crisis, evaluar la respuesta a un cambio, objetivar síntomas que parecen excesivos, buscar desencadenantes en casa o en el trabajo.</li><li><b>Largo plazo</b>: mala percepción de la obstrucción, antecedentes de crisis graves súbitas, asma difícil o grave.</li></ul><p>Una planilla apaisada que muestre 2 meses facilita detectar el empeoramiento.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 123–124. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "PEF en casa"},
  {"id": "g5-revision", "nivel": 1, "mapa": "gr-c5", "titulo": "Revisión regular", "tipo": "concepto", "x": 1050, "y": 170, "resumen": "En cada control: dudas, control y riesgo, crisis y cómo respondió, técnica, adherencia y actualizar el plan.", "teoria": [{"h": "Qué incluir", "html": "<ul><li>Preguntar dudas y preocupaciones.</li><li>Evaluar control, factores de riesgo y comorbilidades; repasar las crisis y si usó el plan.</li><li>Mirar cómo usa el inhalador y corregir.</li><li>Adherencia y sus barreras.</li><li>Actualizar el plan si cambió el control o el tratamiento.</li></ul><p>La telemedicina sirve más en el asma grave que en la bien controlada en pasos bajos.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 125. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g5-escuela"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Revisión"},
  {"id": "g5-escuela", "nivel": 1, "mapa": "gr-c5", "titulo": "Programas escolares", "tipo": "concepto", "x": 1050, "y": 340, "resumen": "Los programas de automanejo en la escuela (5–18 años) redujeron un 30 % las consultas a guardia, además de internaciones y días de actividad reducida.", "teoria": [{"h": "La evidencia", "html": "<p>Una revisión sistemática de programas escolares con habilidades de automanejo para chicos de 5 a 18 años, la mayoría en EE. UU. y Canadá, encontró un <b>30 % menos de consultas a guardia</b> y menos internaciones y días de actividad reducida.</p><p>También pueden enseñar educadores, farmacéuticos, enfermeros y agentes comunitarios entrenados.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 123 y 125. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Escuela"},
  {"id": "g6-obesidad", "nivel": 1, "mapa": "gr-c6", "titulo": "Obesidad", "tipo": "concepto", "x": 150, "y": 150, "resumen": "Factor de riesgo de asma infantil, sobre todo en niñas. Confirmar el diagnóstico con función pulmonar. El CI sigue siendo esencial; sumar descenso de peso.", "teoria": [{"h": "Qué tener en cuenta", "html": "<ul><li>El sobrepeso y la obesidad aumentan el riesgo de asma y sibilancias en la infancia, más en niñas.</li><li>El asma cuesta más de controlar: otro tipo de inflamación, apnea del sueño, reflujo, factores mecánicos y desacondicionamiento.</li><li>Registrar el IMC de todos y <b>confirmar el asma con función pulmonar</b>: hay sobre y subdiagnóstico. Un FeNO bajo no descarta asma en obesos.</li></ul>"}, {"h": "Manejo", "html": "<p>El CI es esencial, aunque la respuesta puede ser menor. Incluir el descenso de peso en el plan: el ejercicio solo no alcanza; un descenso del 5–10 % ya mejora el control. Los mayores efectos se ven con cirugía bariátrica (adultos).</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 126–127. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g6-reflujo"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Obesidad"},
  {"id": "g6-reflujo", "nivel": 2, "mapa": "gr-c6", "titulo": "Reflujo gastroesofágico", "tipo": "concepto", "x": 150, "y": 300, "resumen": "Causa común de tos seca. No sirve buscarlo de rutina en el asma no controlada; si hay síntomas de reflujo, prueba empírica de tratamiento.", "teoria": [{"h": "Cómo encararlo", "html": "<ul><li>Pensarlo ante tos seca en un asmático confirmado.</li><li>El reflujo <b>asintomático</b> no explica un asma mal controlada: no buscarlo de rutina.</li><li>Con síntomas de reflujo, prueba empírica con inhibidor de la bomba de protones, como en la población general.</li><li>Los inhibidores de la bomba dan beneficios pequeños en la función pulmonar y ninguno en otros resultados del asma.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 127. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Reflujo"},
  {"id": "g6-ansiedad", "nivel": 2, "mapa": "gr-c6", "titulo": "Ansiedad y depresión", "tipo": "concepto", "x": 150, "y": 450, "resumen": "Más frecuentes en el asma, y se asocian con peor control, peor adherencia y más consultas de urgencia. Las crisis de pánico se confunden con asma.", "teoria": [{"h": "Qué hacer", "html": "<ul><li>Estar atento, sobre todo con antecedentes.</li><li>Ayudar a distinguir los síntomas de ansiedad de los del asma.</li><li>Derivar a salud mental cuando corresponda.</li><li>Hay poca evidencia de ensayos sobre intervenciones psicológicas en niños y adolescentes con asma.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 128. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Ansiedad"},
  {"id": "g6-alimentos", "nivel": 1, "mapa": "gr-c6", "titulo": "Alergia alimentaria y anafilaxia", "tipo": "concepto", "x": 450, "y": 150, "resumen": "Rara vez desencadena asma, pero el asma es un fuerte factor de riesgo de anafilaxia grave o fatal. Llevar adrenalina siempre; en la crisis con anafilaxia, adrenalina primero.", "teoria": [{"h": "Por qué importa", "html": "<p>Los alimentos desencadenan asma en menos del 2 %. Pero en quien tiene alergia alimentaria confirmada, el asma aumenta mucho el riesgo de reacciones graves o fatales, que a menudo se presentan como asma grave. Casi todas las muertes por anafilaxia en una serie de EE. UU. tenían asma; maní y frutos secos fueron los más frecuentes. Los niños con alergia alimentaria tienen cuatro veces más probabilidad de tener asma.</p>"}, {"h": "Qué hacer", "html": "<ul><li>Evaluar asma en todo chico con alergia alimentaria; derivar a alergia.</li><li><b>Adrenalina siempre a mano</b>, autoinyectable o intranasal (la intranasal no sirve en niños pequeños), y enseñar a usarla.</li><li>Marcar en la historia clínica como alto riesgo, asma bien controlada, plan escrito y saber distinguir asma de anafilaxia.</li><li>Si llega con asma y signos de anafilaxia: <b>adrenalina primero</b>, después broncodilatadores.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 128–129. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g6-rinitis"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Alergia alimentaria"},
  {"id": "g6-rinitis", "nivel": 1, "mapa": "gr-c6", "titulo": "Rinitis alérgica", "tipo": "concepto", "x": 450, "y": 310, "resumen": "La mayoría de los asmáticos tiene rinitis, y el 10–40 % de quienes tienen rinitis alérgica tiene asma. Corticoide intranasal; considerar inmunoterapia.", "teoria": [{"h": "Vía aérea única", "html": "<p>Casi todos los pacientes con asma, alérgica o no, tienen rinitis. Puede ser estacional (pólenes) o perenne (ácaros, mascotas). La variación con la estación o la exposición sugiere rinitis alérgica.</p>"}, {"h": "Tratamiento", "html": "<p><b>Corticoide intranasal</b>. Tratar la rinitis se asoció con menos internaciones y consultas por asma, aunque el beneficio sobre el asma se vio sobre todo en quienes no recibían CI. La inmunoterapia con alérgenos es una opción en algunos pacientes con rinitis y asma.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 129. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g6-sinusitis"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Rinitis"},
  {"id": "g6-sinusitis", "nivel": 2, "mapa": "gr-c6", "titulo": "Rinosinusitis crónica", "tipo": "concepto", "x": 450, "y": 460, "resumen": "Síntomas nasales por más de 12 semanas, con o sin pólipos. Se asocia con asma más grave. Lavados salinos y corticoide nasal; los biológicos mejoran los pólipos.", "teoria": [{"h": "Qué saber", "html": "<ul><li>Crónica: síntomas casi todos los días durante ≥ 12 semanas. Con o sin pólipos nasales.</li><li>Se asocia con asma más grave, sobre todo con pólipos.</li><li>Diagnóstico con nasofibroscopía o tomografía de senos. Los pólipos orientan la elección del biológico en el asma grave.</li><li>Tratamiento escalonado: <b>lavados salinos y corticoide nasal</b>; antibióticos orales si hacen falta; minimizar el corticoide oral.</li><li>Anti-IL4R y anti-IL5 mejoran los pólipos y el asma. La cirugía endoscópica mejora la calidad de vida, pero no el asma.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 129–130. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Rinosinusitis"},
  {"id": "g6-adolescentes", "nivel": 1, "mapa": "gr-c6", "titulo": "Adolescentes", "tipo": "concepto", "x": 750, "y": 150, "resumen": "Adherencia al CI de apenas 28–36 %. Atenderlos un rato a solas, acordar confidencialidad, transición gradual al automanejo según madurez, no según edad.", "teoria": [{"h": "Lo particular", "html": "<ul><li>Cambios físicos, emocionales y sociales rápidos; más conductas de riesgo (tabaco) que sus pares sanos.</li><li>Adherencia al CI: 28 % en adolescentes y adultos jóvenes, 36 % en menores de 18 años.</li><li>La remisión es más frecuente en varones.</li></ul>"}, {"h": "Cómo atenderlos", "html": "<ul><li>Verlos <b>un rato sin el adulto</b> para hablar de tabaco, adherencia y salud mental, con confidencialidad acordada.</li><li>Transición al automanejo y al sistema de adultos según madurez, con herramientas formales de preparación hacia los 11–13 años.</li><li>Les importa más el corto plazo; esquemas adaptados a su vida.</li><li>En asma leve, el CI-formoterol a demanda redujo las crisis graves frente al SABA solo, sin tratamiento diario, y con mejor crecimiento en talla que el CI diario en los más jóvenes.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 133–134. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g6-eib"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Adolescentes"},
  {"id": "g6-eib", "nivel": 1, "mapa": "gr-c6", "titulo": "Broncoespasmo por ejercicio y deportistas", "tipo": "concepto", "x": 750, "y": 310, "resumen": "Distinguirlo de la falta de entrenamiento, la obesidad o la obstrucción laríngea. CI regular y entrada en calor lo reducen; el CI-formoterol antes del ejercicio sirve en el asma leve.", "teoria": [{"h": "Broncoespasmo por ejercicio", "html": "<ul><li>Los síntomas empeoran típicamente al terminar el ejercicio. Si aparecen durante, pensar en desacondicionamiento, obesidad u obstrucción laríngea inducible.</li><li>El CI regular y la entrada en calor lo reducen. SABA o LABA previos lo previenen, pero con uso diario aparece tolerancia.</li><li>En asma leve, el CI-formoterol a demanda y antes del ejercicio fue no inferior al CI diario: no hace falta otro SABA.</li><li>Si aparece pese al tratamiento, suele indicar mal control.</li></ul>"}, {"h": "Deportistas de alto rendimiento", "html": "<p>Más asma, rinitis, tos y obstrucción laríngea. Evitar entrenar con frío extremo, contaminación o cloro alto; asegurar el antiinflamatorio. La Agencia Mundial Antidopaje permite CI-formoterol hasta 54 mcg de formoterol por día.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 134–135. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Ejercicio y deporte"},
  {"id": "g6-embarazo", "nivel": 1, "mapa": "gr-c6", "titulo": "Embarazo", "tipo": "concepto", "x": 750, "y": 470, "resumen": "No suspender el CI: las crisis dañan más al bebé que los medicamentos. El CI materno podría reducir el asma en los hijos.", "teoria": [{"h": "Qué pasa", "html": "<p>Un tercio empeora, un tercio mejora y un tercio sigue igual; las crisis son más frecuentes en el segundo trimestre. Las crisis y el mal control se asocian con prematurez, bajo peso, mortalidad perinatal y preeclampsia.</p>"}, {"h": "Qué hacer", "html": "<ul><li><b>No suspender el CI</b> ni antes ni durante el embarazo; no priorizar bajar el tratamiento hasta después del parto.</li><li>CI, agonistas beta-2 y montelukast no aumentan las malformaciones.</li><li>Controlar cada 4–6 semanas.</li><li>En la crisis, tratar enérgicamente con SABA, oxígeno y corticoide sistémico temprano.</li><li>Si recibió dosis altas de SABA en las 48 horas previas al parto, controlar la glucemia del recién nacido (sobre todo prematuro) durante 24 horas.</li></ul><p>En un estudio, los hijos de madres que usaron CI tuvieron más de un 50 % menos de asma a los 4–6 años.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 135–136. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Embarazo"},
  {"id": "g6-covid", "nivel": 2, "mapa": "gr-c6", "titulo": "Infecciones virales y COVID-19", "tipo": "concepto", "x": 1050, "y": 150, "resumen": "El asma bien controlada no aumenta el riesgo de COVID-19 grave. Seguir con el CI; evitar nebulizar (usar aerosol con aerocámara) y no compartir inhaladores.", "teoria": [{"h": "Puntos prácticos", "html": "<ul><li>Más riesgo de COVID-19 grave si necesitó corticoide oral recientemente.</li><li>Seguir con todo el tratamiento, incluidos biológicos o corticoide oral si los recibe.</li><li>Evitar nebulizadores: transmiten partículas virales. Usar aerosol con aerocámara y máscara si hace falta; no compartir inhaladores ni aerocámaras.</li><li>Nirmatrelvir con ritonavir interactúa con salmeterol y vilanterol: considerar pasar a CI solo o CI-formoterol durante el tratamiento y 5 días más.</li><li>Vacunas al día contra COVID-19 y gripe; se pueden dar el mismo día.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 130–132. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "COVID-19"},
  {"id": "g6-aerd-abpa", "nivel": 3, "mapa": "gr-c6", "titulo": "Aspirina y aspergilosis", "tipo": "concepto", "x": 1050, "y": 300, "resumen": "Enfermedad respiratoria exacerbada por aspirina (pólipos más crisis con AINE) y aspergilosis broncopulmonar alérgica (sibilancias, infiltrados migratorios, bronquiectasias).", "teoria": [{"h": "Enfermedad exacerbada por aspirina", "html": "<p>Congestión y anosmia, luego rinosinusitis con pólipos que recidivan, asma y crisis minutos a horas después de aspirina o AINE. 7 % del asma en adultos y 15 % del asma grave. Evitar AINE inhibidores de COX-1; el paracetamol o un inhibidor de COX-2 pueden usarse bajo supervisión. El CI es la base; la desensibilización es una opción de especialista.</p>"}, {"h": "Aspergilosis broncopulmonar alérgica", "html": "<p>Hipersensibilidad a <i>Aspergillus fumigatus</i>: sibilancias recurrentes, infiltrados fugaces y bronquiectasias, a veces tapones marrones. Más frecuente en asma o fibrosis quística. Diagnóstico con criterios combinados (reactividad inmediata, IgE total, IgG específica, imágenes, eosinófilos). Tratamiento: corticoide oral en curso descendente de unos 4 meses; itraconazol en casos seleccionados (interactúa con el CI). Omalizumab ayuda a quienes no responden. Derivar.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 137–139. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "AERD y ABPA"},
  {"id": "g6-cirugia-viajes", "nivel": 2, "mapa": "gr-c6", "titulo": "Cirugía, viajes y clima extremo", "tipo": "concepto", "x": 1050, "y": 450, "resumen": "Optimizar el control antes de una cirugía programada; hidrocortisona perioperatoria si recibió CI en dosis altas o corticoide oral > 2 semanas en los últimos 6 meses.", "teoria": [{"h": "Cirugía", "html": "<p>Optimizar el control antes de una cirugía programada, sobre todo con mal control, crisis previas u obstrucción persistente. Si recibió CI en dosis altas prolongadas o corticoide oral por más de 2 semanas en los últimos 6 meses: <b>hidrocortisona perioperatoria</b> por riesgo de crisis suprarrenal.</p>"}, {"h": "Viajes en avión", "html": "<p>Optimizar antes, llevar toda la medicación y la aerocámara en la cabina, y una copia del plan de acción.</p>"}, {"h": "Clima extremo", "html": "<p>Olas de calor, frío, incendios y tormentas aumentan las consultas a guardia y las internaciones. Barbijo contra el humo de incendios, refugiarse en ambientes climatizados y alertas al teléfono.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 139–140. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Cirugía y viajes"},
  {"id": "g7-etiquetas", "nivel": 1, "mapa": "gr-c7", "titulo": "Por qué siguen importando las etiquetas", "tipo": "concepto", "x": 150, "y": 200, "resumen": "LABA y LAMA sin CI son el inicio en la EPOC, pero están contraindicados en el asma por riesgo de crisis graves y muerte.", "teoria": [{"h": "La diferencia clave", "html": "<p>Asma y EPOC son etiquetas amplias que se superponen. Pero el tratamiento es opuesto en un punto: en la EPOC se empieza con <b>LABA y LAMA sin CI</b>; en el asma eso está <b>contraindicado</b> por el riesgo de crisis graves y muerte. El CI reduce la mortalidad y las internaciones en el asma, también cuando hay EPOC.</p>"}, {"h": "Asma + EPOC", "html": "<p>Término descriptivo, no una enfermedad: obstrucción persistente con rasgos de ambas. Entre 9 y 55 % según los criterios. Tienen más síntomas, más crisis, más caída de la función y más mortalidad que con asma o EPOC solas.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, cap. 7, puntos clave y Box 7-1 (p. 143). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g7-diagnostico"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Etiquetas"},
  {"id": "g7-diagnostico", "nivel": 1, "mapa": "gr-c7", "titulo": "Diagnóstico en pasos", "tipo": "concepto", "x": 450, "y": 200, "resumen": "Historia (patrón de síntomas, asma previa, tabaco y otras exposiciones), espirometría para ver obstrucción persistente y variabilidad, y descartar otras enfermedades.", "teoria": [{"h": "Los pasos", "html": "<ol><li><b>Historia</b>: síntomas variables o persistentes, diagnóstico de asma en la infancia o actual, tabaco y otras exposiciones.</li><li><b>Espirometría</b>: confirma la obstrucción persistente (VEF₁/CVF posbroncodilatador &lt; 0,7 o por debajo del límite inferior normal) y la variabilidad. El PEF seriado ayuda, pero es menos confiable.</li><li>Clasificar: asma típica, EPOC típica, rasgos de ambas, u otras (bronquiectasias, enfermedad intersticial, insuficiencia cardíaca).</li></ol><p>En niños y adultos jóvenes, la enfermedad crónica de la vía aérea más probable es el asma.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 142–145 y Box 7-3. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g7-tratamiento"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Diagnóstico"},
  {"id": "g7-tratamiento", "nivel": 1, "mapa": "gr-c7", "titulo": "Tratamiento inicial seguro", "tipo": "concepto", "x": 750, "y": 200, "resumen": "Asma, o rasgos de asma y EPOC: tratar como asma, con CI. EPOC sola: según GOLD (LAMA más LABA, con CI según crisis y eosinófilos).", "teoria": [{"h": "Según el cuadro", "html": "<ul><li><b>Asma</b>: CI solo o con LABA. Nunca LABA o LAMA sin CI.</li><li><b>Rasgos de ambas</b>: tratar como asma, con CI. Nunca broncodilatadores de acción larga solos.</li><li><b>EPOC</b>: según GOLD: LAMA más LABA y SABA a demanda; agregar CI según las crisis y los eosinófilos; evitar dosis altas de CI por el riesgo de neumonía.</li></ul>"}, {"h": "Para todos", "html": "<p>Educación en técnica inhalatoria y adherencia, dejar de fumar, vacunas, actividad física y manejo de comorbilidades.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, cap. 7, puntos clave y Box 7-2. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g7-derivar"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Tratamiento"},
  {"id": "g7-derivar", "nivel": 1, "mapa": "gr-c7", "titulo": "Derivar", "tipo": "concepto", "x": 1050, "y": 200, "resumen": "Se recomienda derivar para estudios adicionales a quienes tienen asma + EPOC, porque tienen peores resultados.", "teoria": [{"h": "Cuándo", "html": "<p>Derivar a especialista a los pacientes con rasgos de asma y EPOC, o cuando el diagnóstico es dudoso, para estudios adicionales y fenotipo: suelen tener peores resultados que con una sola de las dos.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 142 y 146–148. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Derivar"},
  {"id": "g8-definiciones", "nivel": 1, "mapa": "gr-c8", "titulo": "No controlada, difícil y grave", "tipo": "concepto", "x": 150, "y": 200, "resumen": "Difícil: no controlada pese a CI-LABA en dosis media o alta, o que la necesita. Grave: sigue sin control pese a buena adherencia, dosis alta optimizada y factores corregidos. Afecta al 3–10 %.", "teoria": [{"h": "Tres escalones", "html": "<ul><li><b>No controlada</b>: mal control de síntomas, o ≥ 2 crisis por año con corticoide oral, o ≥ 1 internación por año.</li><li><b>Difícil de tratar</b>: no controlada pese a CI en dosis media o alta con un segundo controlador, o que necesita dosis altas. <i>No significa «paciente difícil»</i>: muchas veces es técnica, adherencia o tabaco.</li><li><b>Grave</b>: subgrupo que sigue sin control pese a buena adherencia, CI-LABA en dosis alta optimizado y manejo de factores contribuyentes, o que empeora al bajar. No es grave si mejora mucho al corregir la técnica y la adherencia.</li></ul><p>En Países Bajos, un 3,7 % del total de asmáticos tenía asma grave.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 149–150. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g8-confirmar"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Definiciones"},
  {"id": "g8-confirmar", "nivel": 1, "mapa": "gr-c8", "titulo": "Confirmar y corregir lo básico", "tipo": "concepto", "x": 450, "y": 150, "resumen": "Confirmar que es asma, revisar técnica y adherencia, comorbilidades, exposiciones, efectos adversos y medicamentos que empeoran. Revaluar en 3–6 meses.", "teoria": [{"h": "Antes de hablar de asma grave", "html": "<ul><li>Confirmar el diagnóstico (cap. 1).</li><li>Técnica inhalatoria y adherencia.</li><li>Comorbilidades: rinosinusitis, obesidad, reflujo, apnea, ansiedad, obstrucción laríngea inducible.</li><li>Exposiciones en casa o en el trabajo: tabaco, alérgenos, irritantes.</li><li>Medicamentos: betabloqueantes, AINE.</li><li>Sobreuso de SABA.</li></ul>"}, {"h": "Optimizar", "html": "<p>Educación, pasar a MART si no lo usa, tratar comorbilidades y factores, medidas no farmacológicas, considerar dosis alta de CI-LABA por 3–6 meses. Si no mejora, derivar.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 8-2 a 8-3, p. 152–158. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g8-estudiar"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Lo básico"},
  {"id": "g8-estudiar", "nivel": 2, "mapa": "gr-c8", "titulo": "Estudios en asma grave", "tipo": "concepto", "x": 450, "y": 330, "resumen": "Buscar otras enfermedades de la vía aérea, efectos del corticoide (densitometría, cortisol) y, si los eosinófilos son ≥ 300, parásitos (Strongyloides) antes de corticoides o biológicos.", "teoria": [{"h": "Qué buscar", "html": "<ul><li>Otras enfermedades: enfermedad exacerbada por aspirina, pólipos, obstrucción laríngea, apnea, aspergilosis broncopulmonar alérgica, bronquiectasias, traqueobroncomalacia, infecciones (tuberculosis, micobacterias atípicas).</li><li>Efectos adversos: <b>densitometría ósea</b>, cortisol matinal por insuficiencia suprarrenal.</li><li>Eosinófilos ≥ 300/µL: buscar y tratar <b>parásitos</b> (Strongyloides suele ser asintomático y puede diseminarse con corticoides o biológicos).</li><li>Eosinófilos ≥ 1500/µL: pensar en granulomatosis eosinofílica con poliangeítis.</li></ul>"}, {"h": "Además", "html": "<p>Apoyo psicológico y social, equipo multidisciplinario y ofrecer registros o ensayos clínicos.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 158–160. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g8-tipo2"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Estudios"},
  {"id": "g8-tipo2", "nivel": 1, "mapa": "gr-c8", "titulo": "¿Hay inflamación tipo 2?", "tipo": "concepto", "x": 750, "y": 150, "resumen": "Pensar en inflamación tipo 2 resistente si, con CI en dosis alta: eosinófilos ≥ 150/µL, FeNO ≥ 20 ppb, eosinófilos en esputo ≥ 2 % o asma desencadenada por alérgenos.", "teoria": [{"h": "Criterios para la evaluación inicial", "html": "<ul><li>Eosinófilos en sangre ≥ 150/µL.</li><li>FeNO ≥ 20 ppb.</li><li>Eosinófilos en esputo ≥ 2 %.</li><li>Asma claramente desencadenada por alérgenos.</li></ul><p>No son los criterios de elegibilidad para biológicos, que varían según el producto y el país.</p>"}, {"h": "Cómo medir bien", "html": "<ul><li>El corticoide oral suprime los marcadores: medir antes, o 1–2 semanas después de un ciclo, o con la menor dosis posible.</li><li>Un solo valor bajo no descarta: repetir hasta 3 veces.</li><li>Los eosinófilos son más altos a la mañana y el FeNO, a la tarde.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 160–161. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g8-sin-t2", "g8-biologicos"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Fenotipo tipo 2"},
  {"id": "g8-sin-t2", "nivel": 2, "mapa": "gr-c8", "titulo": "Sin inflamación tipo 2", "tipo": "concepto", "x": 750, "y": 300, "resumen": "Revisar lo básico, evitar exposiciones, más estudios (esputo, tomografía, broncoscopía, laringoscopía). Opciones: LAMA, azitromicina (adultos), anti-TSLP y, como último recurso, corticoide oral en dosis baja.", "teoria": [{"h": "Qué hacer", "html": "<ul><li>Volver a revisar diagnóstico, técnica, adherencia, comorbilidades y efectos adversos.</li><li>Evitar tabaco, contaminación, alérgenos e irritantes.</li><li>Estudios adicionales: esputo inducido, tomografía de alta resolución, broncoscopía, laringoscopía funcional.</li><li>Agregados: LAMA; azitromicina en adultos (antes, buscar micobacterias atípicas y medir el QTc); anti-TSLP.</li><li>Último recurso: corticoide oral en dosis baja, en días alternos si se puede.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 161–162. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Sin tipo 2"},
  {"id": "g8-biologicos", "nivel": 1, "mapa": "gr-c8", "titulo": "Elegir un biológico", "tipo": "concepto", "x": 750, "y": 450, "resumen": "Anti-IgE (desde 6 años), anti-IL5/5R (mepolizumab desde 6 años), anti-IL4R (dupilumab desde 6 años) y anti-TSLP (desde 12). Elegir según elegibilidad, predictores de respuesta, comorbilidades y practicidad.", "teoria": [{"h": "Las cuatro clases", "html": "<table><thead><tr><th>Clase</th><th>Edad</th><th>Para quién</th><th>Mejor respuesta si…</th></tr></thead><tbody><tr><td><b>Anti-IgE</b> (omalizumab, biosimilar)</td><td>≥ 6 años</td><td>Asma alérgica grave con sensibilización e IgE en rango</td><td>La IgE basal no predice; −44 % de crisis graves</td></tr><tr><td><b>Anti-IL5/5R</b> (mepolizumab ≥ 6; benralizumab y depemokimab ≥ 12; reslizumab ≥ 18)</td><td>≥ 6 años (mepolizumab)</td><td>Asma eosinofílica grave</td><td>Eosinófilos altos y más crisis previas; −47 a 54 % de crisis</td></tr><tr><td><b>Anti-IL4R</b> (dupilumab)</td><td>≥ 6 años</td><td>Asma tipo 2 o eosinofílica grave, o dependiente de corticoide oral</td><td>Eosinófilos y FeNO altos, también en niños; −56 % de crisis. No si eosinófilos &gt; 1500</td></tr><tr><td><b>Anti-TSLP</b> (tezepelumab)</td><td>≥ 12 años</td><td>Asma grave con o sin marcadores tipo 2</td><td>Eosinófilos y FeNO altos, pólipos; −30 a 70 % de crisis</td></tr></tbody></table>"}, {"h": "Cómo elegir", "html": "<p>Criterios locales de cobertura, predictores de respuesta, comorbilidades tipo 2 con indicación propia (dermatitis atópica, pólipos, urticaria, alergia alimentaria, esofagitis eosinofílica) y aspectos prácticos: costo, vía, frecuencia y preferencia.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 8-4 (p. 154), p. 162–166 y Box 8-6. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g8-respuesta"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Biológicos"},
  {"id": "g8-respuesta", "nivel": 1, "mapa": "gr-c8", "titulo": "Evaluar la respuesta", "tipo": "concepto", "x": 1050, "y": 200, "resumen": "Prueba de al menos 4 meses (6 con depemokimab). Si la respuesta es dudosa, extender a 6–12 meses; si no responde, suspender y probar otro.", "teoria": [{"h": "Cómo evaluar", "html": "<p>No hay criterios únicos de buena respuesta: mirar crisis, control de síntomas, función pulmonar, intensidad del tratamiento (corticoide oral), comorbilidades tipo 2 y satisfacción. Revisar a los 3–4 meses y luego cada 3–6 meses. En los que responden bien puede haber remisión clínica con tratamiento.</p>"}, {"h": "Si responde", "html": "<ul><li>Reducir primero el <b>corticoide oral</b>, controlando el cortisol matinal.</li><li>Después, los agregados inhalados como el LAMA; luego considerar bajar el CI-LABA tras 3–6 meses estable. <b>Nunca suspender del todo el CI</b>.</li><li>Pensar en suspender el biológico recién después de 12 meses y con buen control con CI en dosis media.</li></ul>"}, {"h": "Si no responde", "html": "<p>Suspender el biológico, volver a revisar lo básico, más estudios, considerar otro biológico o las opciones sin tipo 2.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 166–168. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g8-seguir"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Respuesta"},
  {"id": "g8-seguir", "nivel": 2, "mapa": "gr-c8", "titulo": "Cuidado compartido continuo", "tipo": "concepto", "x": 1050, "y": 400, "resumen": "Colaboración entre el paciente, atención primaria y especialistas; controles cada 3–6 meses de síntomas, crisis, función, comorbilidades, técnica, adherencia y efectos adversos.", "teoria": [{"h": "En cada control (cada 3–6 meses)", "html": "<ul><li>Control de síntomas, crisis y función pulmonar.</li><li>Comorbilidades y factores de riesgo.</li><li>Técnica, adherencia y necesidad de cada agregado.</li><li>Efectos adversos, sobre todo del corticoide oral.</li><li>Necesidades sociales y emocionales.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 168–169. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Seguimiento"},
  {"id": "g9-desencadenantes", "nivel": 2, "mapa": "gr-c9", "titulo": "Qué desencadena las crisis", "tipo": "concepto", "x": 150, "y": 150, "resumen": "Virus (rinovirus, gripe, VSR, adenovirus, tos convulsa), alérgenos, alergia alimentaria, contaminación, la vuelta a clases en otoño y la mala adherencia al CI.", "teoria": [{"h": "Desencadenantes comunes", "html": "<ul><li>Infecciones virales: rinovirus, gripe, adenovirus, tos convulsa, VSR.</li><li>Alérgenos: pólenes, esporas de hongos.</li><li>Alergia alimentaria.</li><li>Contaminación ambiental.</li><li>Cambios de estación y <b>vuelta a la escuela en otoño</b>.</li><li>Mala adherencia al CI.</li><li>Epidemias por tormentas eléctricas con polen.</li></ul><p>Las crisis graves pueden ocurrir en asmas leves o bien controladas.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 171–172. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g9-banderas"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Desencadenantes"},
  {"id": "g9-banderas", "nivel": 1, "mapa": "gr-c9", "titulo": "Banderas rojas de asma fatal", "tipo": "concepto", "x": 150, "y": 330, "resumen": "Intubación previa, internación o varias consultas a guardia en el último año, corticoide oral actual o reciente, sin CI, SABA excesivo, problemas psicosociales, alergia alimentaria y mala percepción.", "teoria": [{"h": "Factores asociados con asma fatal o casi fatal", "html": "<ul><li>Crisis casi fatal con intubación.</li><li>Internación o varias consultas a guardia en el último año (aunque también muere gente sin antecedentes).</li><li>Uso actual o reciente de corticoide oral.</li><li>No usar CI; mala adherencia o falta de plan escrito.</li><li><b>SABA excesivo</b>: riesgo extremo con más de un aerosol por mes, o con SABA nebulizado.</li><li>Enfermedad psiquiátrica o problemas psicosociales.</li><li><b>Alergia alimentaria</b> o anafilaxia previa.</li><li>Mala percepción de la obstrucción; hiperreactividad grave.</li></ul><p>Marcarlos en la historia clínica y pedir que consulten temprano.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 9-1 (p. 172). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g9-plan"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Riesgo de muerte"},
  {"id": "g9-plan", "nivel": 1, "mapa": "gr-c9", "titulo": "Plan de acción en casa", "tipo": "concepto", "x": 450, "y": 170, "resumen": "Según el rescate: con CI-formoterol, más inhalaciones del mismo; con SABA y CI de mantenimiento, cuadruplicar el CI por 1–2 semanas. Consultar si no responde en 2–3 días o si se superan ciertas inhalaciones por día.", "teoria": [{"h": "Qué cambiar según el tratamiento", "html": "<ul><li><b>CI-formoterol</b> (solo AIR o MART): 1 inhalación cada vez que la necesite, sin dejar el mantenimiento. Consultar si necesita más de 8 inhalaciones en 24 horas (niños de 6 a 11) o más de 12 (desde los 12 años).</li><li><b>CI-SABA</b>: 2 inhalaciones a demanda; consultar si necesita más de 6 dosis en 24 horas.</li><li><b>SABA con CI de mantenimiento</b>: considerar cuadruplicar el CI por 1–2 semanas.</li><li><b>SABA</b>: 2 inhalaciones cada 4–6 horas si hace falta; consultar si necesita más de 12 en 24 horas.</li></ul><p class=\"nota\">Las cifras de CI-SABA, de cuadruplicar el CI y de SABA vienen de la tabla de planes para adolescentes y adultos (Box 9-2).</p>"}, {"h": "Corticoide oral desde casa", "html": "<p>Si no responde en 2–3 días, empeora rápido, el PEF cae por debajo del 60 % o tiene antecedentes de crisis súbitas. Niños: <b>prednisolona 1–2 mg/kg/día (máximo 40 mg) por 3–5 días</b>, o dexametasona 0,3–0,6 mg/kg (máximo 12 mg) en total por 1–2 días. No hace falta ir bajando la dosis si dura menos de 2 semanas.</p><p>Después de una crisis autotratada, control en 1–2 semanas.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 9-2 (p. 174) y p. 177–178. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g9-ocs"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Plan en casa"},
  {"id": "g9-ocs", "nivel": 2, "mapa": "gr-c9", "titulo": "Cuidado del corticoide oral", "tipo": "concepto", "x": 450, "y": 370, "resumen": "Salva vidas en la crisis grave, pero 4–5 ciclos en la vida ya aumentan la diabetes, las cataratas y la osteoporosis. Una crisis grave obliga a revisar el tratamiento.", "teoria": [{"h": "Cómo usar menos", "html": "<ul><li>Optimizar el tratamiento inhalado, sobre todo con AIR o MART.</li><li>Tratar los factores modificables y las comorbilidades.</li><li>Educación, técnica y adherencia.</li><li>Plan de acción que muestre cómo subir lo inhalado antes de pensar en el corticoide oral.</li><li>Usarlo solo cuando está indicado, en la menor dosis y por el menor tiempo.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 9-3 (p. 177). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Cuidar el corticoide"},
  {"id": "g9-gravedad", "nivel": 1, "mapa": "gr-c9", "titulo": "Gravedad de la crisis", "tipo": "concepto", "x": 750, "y": 130, "resumen": "Leve: habla en oraciones, SatO₂ ≥ 94 %, PEF > 70 %, PRAM 1–3. Moderada: frases, SatO₂ ≥ 92 %, PEF 50–70 %, PRAM 4–7. Grave: no habla, SatO₂ < 92 %, FR > 30, PEF < 50 %, PRAM 8–12.", "teoria": [{"h": "Criterios (6 años o más)", "html": "<table><thead><tr><th></th><th>Leve</th><th>Moderada</th><th>Grave</th></tr></thead><tbody><tr><td>Habla</td><td>Oraciones, puede acostarse</td><td>Frases, prefiere sentado</td><td>No puede hablar, comer ni acostarse</td></tr><tr><td>FR</td><td>Normal o algo aumentada</td><td>Aumentada, ≤ 30</td><td>&gt; 30</td></tr><tr><td>Músculos accesorios</td><td>No o leve</td><td>Sí</td><td>Sí</td></tr><tr><td>SatO₂ (aire)</td><td>≥ 94 %</td><td>≥ 92 %</td><td>&lt; 92 %</td></tr><tr><td>PEF</td><td>&gt; 70 %</td><td>50–70 %</td><td>&lt; 50 %</td></tr><tr><td>PRAM (&lt; 18 años)</td><td>1–3</td><td>4–7</td><td>8–12</td></tr></tbody></table><p><b>Amenaza la vida</b>: somnolencia, confusión, cianosis, tórax silencioso (PRAM 11–12).</p>"}, {"h": "Evaluar al mismo tiempo que se trata", "html": "<p>¿Es asma? (neumotórax, anafilaxia, obstrucción laríngea, neumonía, insuficiencia cardíaca, cuerpo extraño). ¿Qué recibió ya? ¿Tiene banderas rojas? En menores de 18 años, <b>puntaje validado como el PRAM</b> (recomendación fuerte). Medir PEF o VEF₁ siempre que se pueda. La oximetría puede sobreestimar la saturación en pieles oscuras.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 9-4 (p. 180) y Box 9-6 (p. 186). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g9-primaria", "g9-guardia"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Gravedad"},
  {"id": "g9-primaria", "nivel": 1, "mapa": "gr-c9", "titulo": "Tratamiento en atención primaria", "tipo": "concepto", "x": 750, "y": 290, "resumen": "Leve: salbutamol 4 disparos (o budesonida-formoterol 2 inhalaciones) y revisar. Moderada: salbutamol 4–6 disparos hasta 3 veces, ipratropio, corticoide oral. Grave: derivar ya, tratando en el traslado.", "teoria": [{"h": "Según la gravedad", "html": "<ul><li><b>Leve</b>: salbutamol 4 disparos con aerocámara, o budesonida-formoterol 160/4,5 mcg 2 inhalaciones. Evaluar y, solo si hace falta, repetir una vez a los 30–60 minutos.</li><li><b>Moderada</b>: salbutamol 4–6 disparos (o 2,5 mg nebulizado) hasta 3 veces cada 20–30 minutos; ipratropio 4 disparos si hay; <b>corticoide oral</b>.</li><li><b>Grave o amenaza la vida</b>: <b>derivar ya</b>. Mientras tanto: salbutamol 6–10 disparos (o 5 mg nebulizado) cada 20–30 minutos, ipratropio, oxígeno con objetivo de 92–95 %, corticoide sistémico y monitoreo continuo. Si hay anafilaxia, adrenalina primero.</li></ul>"}, {"h": "Revisar a la hora o antes", "html": "<p>Saturación, FR, músculos accesorios, entrada de aire, PEF y PRAM. Si mejora, evaluar el alta; si empeora o no mejora, derivar. <b>Agitar el salbutamol antes de cada disparo</b>; un disparo por vez, con respiración corriente si está muy disneico.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 9-4 (p. 180). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g9-alta"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Atención primaria"},
  {"id": "g9-guardia", "nivel": 1, "mapa": "gr-c9", "titulo": "Tratamiento en la guardia", "tipo": "concepto", "x": 750, "y": 450, "resumen": "Igual estructura, con corticoide sistémico en todas salvo las más leves (dentro de la primera hora) y magnesio intravenoso en las graves. Con riesgo vital: nebulizar, oxígeno al 100 %, pedir terapia intensiva.", "teoria": [{"h": "Puntos clave", "html": "<ul><li><b>Corticoide sistémico</b> en todas las crisis salvo las más leves, idealmente en la primera hora; la vía oral es tan eficaz como la intravenosa. Niños: prednisolona 1–2 mg/kg (máximo 40 mg).</li><li><b>Ipratropio</b> con SABA en crisis moderadas a graves: menos internaciones. En chicos ya internados, no suma.</li><li><b>Magnesio intravenoso</b>: no de rutina; sí si no responde y sigue hipoxémico, o si en niños el VEF₁ no llega al 60 % tras la primera hora.</li><li><b>Oxígeno</b> solo si la SatO₂ es &lt; 92 %, con objetivo de 92–95 %.</li><li><b>CI en dosis alta</b> en la primera hora: en niños podría reducir internaciones.</li></ul>"}, {"h": "Riesgo vital", "html": "<p>Somnolencia, confusión, cianosis o tórax silencioso: salbutamol e ipratropio nebulizados, oxígeno al 100 % con máscara con reservorio, corticoide sistémico, magnesio intravenoso, acceso venoso, radiografía, gases y llamar a terapia intensiva pediátrica o anestesia. Vigilar la toxicidad por SABA.</p>"}, {"h": "Internar si", "html": "<p>No mejora, SatO₂ &lt; 92 % en aire, necesita SABA más seguido que cada 1–2 horas, disnea que sigue 4–6 horas después del corticoide, o hay problemas de adherencia o seguimiento o banderas rojas. El estado a la hora de tratamiento predice mejor que el estado al llegar.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 9-6 (p. 186) y p. 184–190. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g9-no-hacer"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Guardia"},
  {"id": "g9-no-hacer", "nivel": 2, "mapa": "gr-c9", "titulo": "Qué no hacer", "tipo": "concepto", "x": 750, "y": 590, "resumen": "Ni radiografía ni antibióticos de rutina, ni aminofilina, ni sedantes. Cuidado con la toxicidad por SABA: acidosis láctica e hiperventilación que parece empeoramiento.", "teoria": [{"h": "Lista", "html": "<ul><li><b>Radiografía de tórax</b>: no de rutina; solo si se sospecha una complicación u otro diagnóstico, o no responde.</li><li><b>Antibióticos</b>: no, salvo evidencia clara de infección pulmonar.</li><li><b>Aminofilina o teofilina intravenosa</b>: no; poca eficacia y efectos graves.</li><li><b>Sedantes</b>: deben evitarse, se asociaron con muertes evitables.</li><li><b>SABA intravenoso</b>: no de rutina.</li><li><b>Heliox, ventilación no invasiva o montelukast</b>: evidencia débil; no de rutina.</li><li><b>Toxicidad por SABA</b>: taquicardia, hipopotasemia, arritmias, acidosis láctica e hiperventilación. Se puede confundir con empeoramiento y llevar a dar todavía más SABA.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 179–190. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Qué no hacer"},
  {"id": "g9-alta", "nivel": 1, "mapa": "gr-c9", "titulo": "Qué dejar armado al alta", "tipo": "concepto", "x": 1050, "y": 170, "resumen": "Confirmar y documentar el diagnóstico, iniciar o subir el CI (MART si se puede), rescate solo a demanda, entrenar la técnica, completar el corticoide oral y control en 2–5 días en niños.", "teoria": [{"h": "Antes de irse", "html": "<ul><li><b>Documentar el diagnóstico</b>: la crisis es una oportunidad para medir la función antes y después del broncodilatador.</li><li><b>CI siempre</b>: iniciarlo o aumentarlo. Desde los 12 años, de preferencia MART con CI-formoterol en el paso 4. Con CI o CI-LABA y SABA, aumentar el CI por 2–4 semanas.</li><li><b>Rescate solo a demanda</b>, no fijo: el SABA regular aun por 1–2 semanas empeora el asma o enmascara el deterioro. El ipratropio no sirve después de las primeras 1–2 horas.</li><li><b>Corticoide oral</b>: niños, prednisolona 1–2 mg/kg/día (máximo 40 mg) por 3–5 días, o dexametasona 0,3–0,6 mg/kg (máximo 12 mg) por 1–2 días.</li><li>Técnica inhalatoria, plan escrito y medicación suficiente.</li></ul>"}, {"h": "Criterios de alta", "html": "<p>Cumple criterios de crisis leve durante 1–2 horas después del último salbutamol, SatO₂ ≥ 92 % en aire, PEF &gt; 70 % y recursos adecuados en casa.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 9-4, Box 9-5 (p. 183) y p. 190. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g9-control"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Alta"},
  {"id": "g9-control", "nivel": 1, "mapa": "gr-c9", "titulo": "Control después de la crisis", "tipo": "concepto", "x": 1050, "y": 380, "resumen": "Control en 2–5 días en niños (2–7 en adultos). Una sola crisis con urgencia o corticoide oral es una bandera roja: revisar todo y derivar si ya hubo otra en el año.", "teoria": [{"h": "En el control", "html": "<ul><li>¿Se resolvió? ¿Se puede suspender el corticoide oral?</li><li>Confirmar que sigue con el CI. Desde los 12 años, pasar a MART si no lo usa.</li><li>Rescate solo a demanda.</li><li>Técnica, adherencia y factores de riesgo modificables.</li><li>Plan de acción: ¿lo entendió? ¿lo usó? ¿hay que cambiarlo?</li><li><b>Derivar</b> si tuvo más de un ciclo de corticoide oral en el último año.</li><li>Próximo control en 2–3 meses.</li></ul><p>Después de una internación o guardia, MART reduce un 32 % el riesgo de otra crisis grave en 12 meses frente a la misma dosis de CI o CI-LABA con SABA.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 9-4, Box 9-5 y p. 188–191. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Control"},
  {"id": "g10-contexto", "nivel": 1, "mapa": "gr-c10", "titulo": "Sibilancias y asma en los más chicos", "tipo": "concepto", "x": 150, "y": 170, "resumen": "Muchos chicos sibilan con los resfríos (6–8 por año). Los viejos «fenotipos de sibilancias» predicen poco y algunos solo se aplican mirando hacia atrás.", "teoria": [{"h": "Lo que hay que saber", "html": "<ul><li>El asma es la enfermedad crónica más frecuente de la infancia; en hasta la mitad de los asmáticos empieza en la niñez, y antes en los varones.</li><li>Ninguna intervención demostró prevenir el asma ni cambiar su evolución a largo plazo.</li><li>La atopia está presente en la mayoría de los chicos con asma mayores de 3 años; la sensibilización múltiple temprana es uno de los principales factores de riesgo.</li><li>Los resfríos son 6–8 por año a esta edad, y la sibilancia es inespecífica.</li></ul>"}, {"h": "Los fenotipos clásicos", "html": "<p><b>Por síntomas</b>: episódicas virales frente a desencadenantes múltiples. <b>Por evolución</b>: transitorias, persistentes y de inicio tardío. Tienen poco valor clínico: mezclan otras enfermedades, predicen mal y algunas solo se aplican en retrospectiva. El objetivo inmediato es diagnosticar a cada chico.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 192–193. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g10-criterios"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Contexto"},
  {"id": "g10-criterios", "nivel": 1, "mapa": "gr-c10", "titulo": "Los tres criterios", "tipo": "concepto", "x": 150, "y": 350, "resumen": "1) Episodios agudos de sibilancias recurrentes; 2) sin otra causa probable; 3) respuesta oportuna al tratamiento. Los tres = asma; uno o dos = asma sospechada.", "teoria": [{"h": "Diagnóstico", "html": "<ol><li><b>Episodios agudos de sibilancias recurrentes</b>: ≥ 2 en los últimos 12 meses, o 1 con síntomas entre episodios.</li><li><b>Ninguna otra causa probable</b>, salvo una infección viral concurrente.</li><li><b>Respuesta oportuna</b> al SABA (con o sin corticoide oral) o a una prueba con CI de 2–3 meses.</li></ol><p>«Confirmado» significa documentado por un profesional (preferido) o descrito o imitado de forma convincente por la familia.</p>"}, {"h": "Asma sospechada", "html": "<p>Si se cumplen uno o dos criterios: registrar «asma sospechada», considerar tratamiento y reevaluar periódicamente.</p>"}, {"h": "Menos probable si", "html": "<ul><li>Es menor de 12 meses y es su <b>primer episodio</b> (suele ser bronquiolitis).</li><li>El único síntoma es tos productiva.</li><li>Se documentó falta de respuesta al SABA o al CI.</li><li>Los signos son atípicos.</li></ul><p>Los antecedentes personales o familiares de alergia apoyan, pero no son necesarios ni específicos.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 10-1 y 10-2 (p. 194–195). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g10-episodios", "g10-diferencial", "g10-respuesta"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Tres criterios"},
  {"id": "g10-episodios", "nivel": 1, "mapa": "gr-c10", "titulo": "Episodios agudos de sibilancias", "tipo": "concepto", "x": 450, "y": 170, "resumen": "Episodios con sibilancia espiratoria, tiraje o respiración difícil que duran más de 24 horas. Confirmar la sibilancia al menos una vez: verla, oír una grabación o que los padres sepan distinguirla.", "teoria": [{"h": "Definición", "html": "<p>Síntomas como sibilancia espiratoria, uso de músculos accesorios, respiración rápida, pesada o difícil, que duran <b>más de 24 horas</b>. Pueden darse con o sin resfrío, o con alérgenos o irritantes.</p>"}, {"h": "Confirmar que es sibilancia", "html": "<p>Los padres llaman «silbido» a cualquier ruido: congestión nasal, carraspeo, estridor o secreciones. Hay que confirmarla al menos una vez: un profesional que la escuche, un video o audio, o padres que demostraron saber distinguirla. En algunas culturas no existe la palabra.</p><p>La sibilancia audible sin estetoscopio es el signo más frecuente y específico a esta edad.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 197. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g10-intervalo"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Episodios"},
  {"id": "g10-intervalo", "nivel": 1, "mapa": "gr-c10", "titulo": "Síntomas entre episodios", "tipo": "concepto", "x": 450, "y": 340, "resumen": "Tos seca o accesos de tos, respiración pesada o falta de aire durante el sueño o al reír, llorar o jugar, que duran minutos u horas. En lactantes, el llanto y la risa equivalen al ejercicio.", "teoria": [{"h": "Qué preguntar", "html": "<ul><li>Sin resfrío, ¿tose o silba al correr, reír o llorar, o durmiendo?</li><li>¿Se despierta por tos o falta de aire?</li><li>¿Para de correr o deja de jugar antes que otros chicos?</li></ul>"}, {"h": "Tos y actividad", "html": "<p>La tos del asma es seca, recurrente y suele acompañarse de sibilancias; durante un virus puede volverse húmeda. La tos nocturna o con ejercicio, risa o llanto fuera de un resfrío apoya el diagnóstico.</p><p>Los chicos mal controlados evitan jugar fuerte y los padres a veces no lo notan.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 197–198. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g10-preguntas"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Entre episodios"},
  {"id": "g10-preguntas", "nivel": 2, "mapa": "gr-c10", "titulo": "Preguntas a la familia", "tipo": "concepto", "x": 450, "y": 500, "resumen": "Cómo empieza y evoluciona un episodio, cuándo empeora, qué se ve (tiraje, labios azules), qué lo desencadena, cuánto dura, síntomas entre episodios y qué tratamientos recibió.", "teoria": [{"h": "Guía de preguntas", "html": "<ul><li>¿Cómo empieza un episodio típico? ¿Silba? Pedir que lo imite o lo grabe.</li><li>¿Empeora al reír, llorar, jugar o durmiendo?</li><li>¿Se le hunde la piel del cuello o entre las costillas? ¿Respira rápido? ¿Labios azulados?</li><li>¿Qué lo desencadena: resfrío, aire frío, animales, correr?</li><li>¿Cuánto dura: minutos o hasta 24 horas?</li><li>¿Qué recibió? ¿Rescate con o sin aerocámara, corticoide, CI diario? ¿Mejoró? ¿En cuánto tiempo? (20–60 minutos es típico de asma).</li><li>¿Eccema, alergia alimentaria, rinitis? ¿Familiares directos con asma o alergia?</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 10-3 (p. 196). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Preguntas"},
  {"id": "g10-diferencial", "nivel": 1, "mapa": "gr-c10", "titulo": "Diagnóstico diferencial (≤ 5 años)", "tipo": "concepto", "x": 750, "y": 170, "resumen": "Cuanto más chico, más probable otro diagnóstico. Resfrío, reflujo, cuerpo extraño, tos convulsa, bronquitis bacteriana prolongada, malacias, cardiopatía, displasia, fibrosis quística, discinesia ciliar, anillo vascular, inmunodeficiencia.", "teoria": [{"h": "Pistas", "html": "<table><thead><tr><th>Si hay…</th><th>Pensar en…</th></tr></thead><tbody><tr><td>Tos y congestión &lt; 10 días, sin sibilancias</td><td>Infección viral alta</td></tr><tr><td>Tos al comer, infecciones a repetición</td><td>Reflujo, trastorno deglutorio</td></tr><tr><td>Inicio brusco, sibilancia unilateral</td><td>Cuerpo extraño (también tuberculosis)</td></tr><tr><td>Accesos de tos prolongados, estridor, vómitos</td><td>Tos convulsa</td></tr><tr><td>Tos húmeda persistente</td><td>Bronquitis bacteriana prolongada, tuberculosis</td></tr><tr><td>Ruido al llorar o comer, tos áspera</td><td>Traqueo o laringomalacia</td></tr><tr><td>Soplo, falla de crecimiento</td><td>Cardiopatía congénita</td></tr><tr><td>Prematurez, síntomas desde el nacimiento</td><td>Displasia broncopulmonar</td></tr><tr><td>Mucha tos y moco, síntomas digestivos, falla de crecimiento</td><td>Fibrosis quística</td></tr><tr><td>Dificultad respiratoria neonatal, otitis crónica, rinorrea desde el nacimiento</td><td>Discinesia ciliar primaria</td></tr><tr><td>Ruido respiratorio y dificultad para comer</td><td>Anillo vascular</td></tr><tr><td>Fiebre e infecciones recurrentes</td><td>Inmunodeficiencia primaria</td></tr></tbody></table><p>Imágenes y laboratorio no son necesarios de rutina. La infección viral durante los episodios no descarta asma.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 10-4 (p. 199) y p. 198. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g10-derivar"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Diferencial"},
  {"id": "g10-derivar", "nivel": 1, "mapa": "gr-c10", "titulo": "Cuándo derivar", "tipo": "concepto", "x": 750, "y": 380, "resumen": "Falla de crecimiento, síntomas neonatales, vómitos con los síntomas respiratorios, sibilancia continua o estridor, sin respuesta al tratamiento, sin relación con resfríos, signos focales o hipocratismo. También lactantes con ≥ 2 episodios.", "teoria": [{"h": "Señales de otro diagnóstico", "html": "<ul><li>Falla de crecimiento.</li><li>Síntomas neonatales o muy tempranos.</li><li>Vómitos asociados a los síntomas respiratorios.</li><li>Sibilancia continua, estridor recurrente o tos perruna (malacia).</li><li>Sin respuesta a CI, corticoide oral o SABA.</li><li>Sin relación con desencadenantes típicos como los resfríos.</li><li>Signos pulmonares o cardiovasculares focales, hipocratismo.</li></ul><p>Considerar derivar a menores de 12 meses con ≥ 2 episodios de sibilancias, y siempre que haya dudas o mala respuesta a una prueba bien hecha de 2–3 meses.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 10-5 (p. 199) y p. 198. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Derivar"},
  {"id": "g10-respuesta", "nivel": 1, "mapa": "gr-c10", "titulo": "Respuesta al tratamiento", "tipo": "concepto", "x": 1050, "y": 150, "resumen": "Mejoría a los 20–60 minutos del SABA, o a las 3–4 horas de SABA más corticoide oral en crisis más graves, o menos episodios y síntomas durante una prueba de 2–3 meses con CI diario.", "teoria": [{"h": "Tres formas de documentarla", "html": "<ul><li><b>En una consulta por un episodio</b>: mejoría confirmada a los <b>20–60 minutos</b> del SABA o, en episodios más graves, a las <b>3–4 horas</b> de SABA más corticoide oral.</li><li><b>En casa</b>: la familia observa mejoría a los 20–60 minutos del SABA.</li><li><b>Prueba con CI diario por 2–3 meses</b> más SABA a demanda: menos episodios o menos síntomas entre episodios.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 10-2 y p. 200. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g10-prueba-ci"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Respuesta"},
  {"id": "g10-prueba-ci", "nivel": 1, "mapa": "gr-c10", "titulo": "Prueba con SABA o con CI", "tipo": "concepto", "x": 1050, "y": 320, "resumen": "Con episodios leves poco frecuentes: SABA a demanda por 2–3 meses. Con ≥ 1 episodio que requirió urgencia, corticoide oral o internación, o síntomas > 2 veces por semana: CI diario (fluticasona 100–250 mcg/día) por 2–3 meses.", "teoria": [{"h": "Prueba con SABA a demanda", "html": "<p>Para chicos con episodios leves poco frecuentes, sin consultas de urgencia: SABA con aerocámara (y máscara si hace falta) cuando aparecen los síntomas, por hasta 2–3 meses. Control en 2–3 meses. Si no responde, revisar la técnica y pensar en otros diagnósticos.</p>"}, {"h": "Prueba con CI diario", "html": "<p>Para chicos con ≥ 1 episodio en el último año que requirió atención aguda, corticoide oral o internación, o con síntomas más de 2 veces por semana: <b>fluticasona 100–250 mcg/día</b> o equivalente con aerocámara por 2–3 meses, idealmente en la temporada en que más síntomas tiene.</p><ul><li>Si mejora claramente y se cumplen los otros dos criterios: asma. Bajar a la dosis mínima eficaz.</li><li>Si no responde: revisar adherencia y técnica; pensar en otro diagnóstico o en asma grave y derivar.</li><li>Si los síntomas vuelven al suspender, eso también apoya el diagnóstico.</li></ul><p>En ensayos, el CI diario redujo un 40 % las crisis y un 30 % las que requieren corticoide oral.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 200–201. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g10-pruebas"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Prueba terapéutica"},
  {"id": "g10-pruebas", "nivel": 2, "mapa": "gr-c10", "titulo": "Pruebas complementarias", "tipo": "concepto", "x": 1050, "y": 500, "resumen": "Ninguna diagnostica por sí sola. Sensibilización alérgica (frecuente desde los 3 años), radiografía solo si hay dudas, oscilometría desde los 3 años y FeNO como herramienta de investigación.", "teoria": [{"h": "Qué aporta cada una", "html": "<ul><li><b>Sensibilización</b> (prick test o IgE específica): presente en la mayoría de los asmáticos de 3 años o más; su ausencia no descarta.</li><li><b>Radiografía de tórax</b>: rara vez; ayuda a descartar malformaciones, tuberculosis o cuerpo extraño.</li><li><b>Función pulmonar</b>: la espirometría suele ser posible recién a los 5–6 años. La <b>oscilometría</b> (respiración corriente, desde los 3 años) evalúa la respuesta al broncodilatador, pero faltan valores de referencia estandarizados.</li><li><b>FeNO</b>: poco disponible; sigue siendo de investigación a esta edad.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 201. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Pruebas"},
  {"id": "g11-control", "nivel": 1, "mapa": "gr-c11", "titulo": "Control en 5 años o menos", "tipo": "concepto", "x": 150, "y": 150, "resumen": "En las últimas 4 semanas: síntomas diurnos > 2 por semana, despertares o tos nocturna, SABA > 2 por semana, juega menos o se cansa. Ninguna: bien; 1–2: parcial; 3–4: no controlado.", "teoria": [{"h": "Las cuatro preguntas", "html": "<table><thead><tr><th>En las últimas 4 semanas</th></tr></thead><tbody><tr><td>¿Síntomas de día más de 2 veces por semana?</td></tr><tr><td>¿Algún despertar o tos nocturna por asma?</td></tr><tr><td>¿SABA más de 2 veces por semana? (sin contar antes del ejercicio)</td></tr><tr><td>¿Corre o juega menos que otros chicos, se cansa al caminar o jugar?</td></tr></tbody></table><p><b>Ninguna</b>: bien controlado · <b>1–2</b>: parcialmente · <b>3–4</b>: no controlado.</p>"}, {"h": "Ojo", "html": "<p>Los padres pueden no saber cuántas veces tuvo síntomas, o no reconocerlos como asma; a veces cuentan irritabilidad, cansancio o cambios de ánimo. Pocas herramientas validadas en menores de 4 años: c-ACT (4–11 años) y TRACK (preescolares). Medir la talla al menos una vez por año.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 11-1 (p. 204) y p. 203. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g11-riesgo"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Control"},
  {"id": "g11-riesgo", "nivel": 1, "mapa": "gr-c11", "titulo": "Riesgo futuro (≤ 5 años)", "tipo": "concepto", "x": 150, "y": 320, "resumen": "Crisis en los próximos meses: ≥ 1 episodio grave en el último año, mal control, inicio de su temporada (sobre todo otoño), humo y alérgenos de interior, problemas psicosociales, mala adherencia o técnica, contaminación.", "teoria": [{"h": "Riesgo de crisis en los próximos meses", "html": "<ul><li>≥ 1 episodio grave en el último año (guardia, internación o corticoide oral).</li><li>Síntomas no controlados.</li><li>Comienzo de su temporada habitual de crisis, sobre todo otoño.</li><li>Exposiciones de interior: humo de tabaco, contaminación, alérgenos (ácaro, cucaracha, mascotas, hongos), sobre todo junto con virus.</li><li>Problemas psicológicos o socioeconómicos de la familia.</li><li>Mala adherencia al CI o mala técnica.</li><li>Contaminación exterior.</li></ul>"}, {"h": "Otros riesgos", "html": "<ul><li><b>Obstrucción persistente</b>: asma grave con varias internaciones, antecedente de bronquiolitis.</li><li><b>Efectos adversos</b>: corticoide oral frecuente, CI en dosis altas o potentes, mala técnica; con máscara o nebulizador, no proteger la piel y los ojos (limpiar la cara después).</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 11-1 (p. 204). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g11-remision"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Riesgo"},
  {"id": "g11-remision", "nivel": 2, "mapa": "gr-c11", "titulo": "¿Se le va a pasar?", "tipo": "concepto", "x": 150, "y": 490, "resumen": "La remisión es frecuente pero no es curación. Los índices predictivos (IPA, PIAMA, Leicester) tienen poca precisión. Decir «el asma está tranquila por ahora».", "teoria": [{"h": "Qué decirle a la familia", "html": "<ul><li>Si no hay síntomas, buscar actividad de la enfermedad: sibilancias, evitar jugar, función pulmonar.</li><li>Decir «el asma está tranquila por ahora»; si se usa «remisión», explicar que no es curación.</li><li>Avisar que puede volver más adelante.</li><li>Defender el tratamiento por sus beneficios actuales (menos crisis, escuela, juego), sin prometer efectos sobre el futuro.</li></ul>"}, {"h": "Predicción", "html": "<p>Solo tres herramientas tienen validación externa: el <b>Índice Predictivo de Asma</b> (Tucson), PIAMA (Países Bajos) y Leicester (Reino Unido). Una revisión sistemática mostró poca precisión, con sensibilidad y valor predictivo positivo variables.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 204–205. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Remisión"},
  {"id": "g11-pasos", "nivel": 1, "mapa": "gr-c11", "titulo": "Los cuatro pasos (≤ 5 años)", "tipo": "concepto", "x": 450, "y": 150, "resumen": "Paso 1: SABA a demanda. Paso 2: CI diario en dosis baja. Paso 3: duplicar la dosis baja y considerar derivar. Paso 4: seguir y derivar a especialista.", "teoria": [{"h": "Resumen", "html": "<table><thead><tr><th>Paso</th><th>Preferido</th><th>Otras opciones</th></tr></thead><tbody><tr><td>1</td><td>SABA a demanda (todos)</td><td>CI en dosis alta intermitente en sibilancias virales con atopia, si no alcanza el SABA</td></tr><tr><td>2</td><td>CI diario en dosis baja + SABA</td><td>Montelukast diario; CI intermitente a demanda o episódico</td></tr><tr><td>3</td><td>Duplicar la dosis baja de CI + SABA; considerar derivar</td><td>Agregar montelukast al CI</td></tr><tr><td>4</td><td>Seguir el tratamiento y <b>derivar</b></td><td>Según el especialista: montelukast, LAMA o CI-LABA (pocos datos en menores de 4 años)</td></tr></tbody></table><p>No hay estudios de MART en menores de 5 años. Los jarabes broncodilatadores no se recomiendan.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 11-2 (p. 207) y p. 209–211. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g11-paso1", "g11-paso2"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Pasos"},
  {"id": "g11-paso1", "nivel": 1, "mapa": "gr-c11", "titulo": "Paso 1: SABA a demanda", "tipo": "concepto", "x": 450, "y": 300, "resumen": "Todos los chicos con asma o asma sospechada tienen SABA inhalado. Si lo necesita más de 2 veces por semana durante un mes, probar CI diario. Consultar si necesita más de 4 disparos en menos de 4 horas.", "teoria": [{"h": "Cómo", "html": "<ul><li>SABA por aerosol con aerocámara, con boquilla o máscara según la edad.</li><li>Puede ser el único tratamiento si los síntomas aparecen ≤ 2 veces por semana.</li><li>Síntomas &gt; 2 veces por semana durante un mes: pasar al paso 2.</li><li>Si necesita <b>más de 4 disparos de salbutamol en menos de 4 horas</b>, buscar atención urgente.</li></ul>"}, {"h": "Otras opciones", "html": "<p>En sibilancias virales intermitentes sin síntomas entre episodios, sobre todo con atopia (IPA modificado positivo), si el SABA no alcanza, se puede considerar CI en dosis alta intermitente, solo si el médico confía en que se usará bien. El CI-formoterol a demanda se estudió desde los 5 años (CARE); hay un estudio en curso de 2 a 5 años.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 209. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Paso 1"},
  {"id": "g11-paso2", "nivel": 1, "mapa": "gr-c11", "titulo": "Paso 2: CI diario en dosis baja", "tipo": "concepto", "x": 450, "y": 460, "resumen": "Indicado si los síntomas no están controlados (SABA > 2 veces por semana) o hubo ≥ 1 crisis en el año que requirió urgencia, corticoide oral o internación. Probar 2–3 meses.", "teoria": [{"h": "Indicación", "html": "<p>CI diario en dosis baja más SABA a demanda si:</p><ul><li>Los síntomas no están bien controlados (rescate más de 2 veces por semana en promedio), o</li><li>Hubo ≥ 1 episodio en 12 meses que requirió atención aguda, corticoide oral o internación.</li></ul><p>También puede indicarse en asma viral recurrente. Darlo al menos 2–3 meses para ver si funciona.</p>"}, {"h": "Alternativas", "html": "<ul><li><b>Montelukast</b>: reduce algo los síntomas en asma persistente; en sibilancias virales recurrentes, ni el diario ni el intermitente redujeron las crisis con corticoide oral. Alerta neuropsiquiátrica.</li><li>CI a demanda o episódico en dosis alta, pero primero probar el CI diario en dosis baja.</li><li>Si no alcanza el control, probar otra opción del paso 2 antes de subir.</li></ul>"}, {"h": "Crecimiento", "html": "<p>El efecto del CI sobre la velocidad de crecimiento aparece en los primeros 1–2 años, no es progresivo y en el único estudio a largo plazo la diferencia en la talla adulta fue del 0,7 %. El asma mal controlada también afecta la talla.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 208–210. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g11-dosis", "g11-subir"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Paso 2"},
  {"id": "g11-dosis", "nivel": 2, "mapa": "gr-c11", "titulo": "Dosis bajas de CI (≤ 5 años)", "tipo": "concepto", "x": 450, "y": 600, "resumen": "Fluticasona propionato 50 mcg/día (desde 4 años), budesonida nebulizada 500 mcg/día (desde 1 año), beclometasona 100 mcg/día (desde 5 años). En niños, aerosol siempre con aerocámara.", "teoria": [{"h": "Dosis diaria baja (mcg) y edad con datos", "html": "<table><thead><tr><th>CI</th><th>Dosis baja</th><th>Desde</th></tr></thead><tbody><tr><td>Beclometasona estándar (aerosol)</td><td>100</td><td>5 años</td></tr><tr><td>Beclometasona extrafina (aerosol)</td><td>50</td><td>5 años</td></tr><tr><td>Budesonida nebulizada</td><td>500</td><td>1 año</td></tr><tr><td>Fluticasona propionato (aerosol)</td><td>50</td><td>4 años</td></tr><tr><td>Mometasona (aerosol)</td><td>100</td><td>5 años</td></tr></tbody></table><p>Budesonida en aerosol o polvo: pendiente de revisión. Fluticasona furoato y ciclesonida: poco estudiadas a esta edad.</p>"}, {"h": "Ojo", "html": "<p>No es una tabla de equivalencias. Muchos ensayos usaron dosis más altas (fluticasona unos 200 mcg/día). Una vez confirmado el asma, buscar la dosis mínima eficaz.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 11-3 (p. 208). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Dosis bajas"},
  {"id": "g11-subir", "nivel": 1, "mapa": "gr-c11", "titulo": "Antes de subir y pasos 3–4", "tipo": "concepto", "x": 750, "y": 170, "resumen": "Si a los 2–3 meses no hay control: confirmar que es asma, revisar técnica y adherencia, exposiciones, y probar otra opción del mismo paso. Después, duplicar la dosis baja y derivar.", "teoria": [{"h": "Antes de subir", "html": "<ul><li>Confirmar que los síntomas son de asma y no otra condición.</li><li>Revisar y corregir la técnica; considerar otro dispositivo.</li><li>Confirmar la adherencia.</li><li>Preguntar por alérgenos y humo.</li><li>Probar otra opción del mismo paso.</li></ul>"}, {"h": "Pasos 3 y 4", "html": "<p><b>Paso 3</b>: duplicar la dosis baja de CI y evaluar en 2–3 meses. Derivar si sigue sin control, con crisis o con efectos adversos. <b>Paso 4</b>: volver a revisar técnica, adherencia, ambiente y diagnóstico, y <b>derivar</b>. El mejor tratamiento en este grupo no está establecido.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 210–211. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g11-revisar"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Subir"},
  {"id": "g11-revisar", "nivel": 1, "mapa": "gr-c11", "titulo": "Revisar y bajar", "tipo": "concepto", "x": 750, "y": 360, "resumen": "En cada visita: control, riesgo, efectos adversos y talla. Muchos remiten, así que reevaluar la necesidad de CI cada 3–6 meses. Si tiene asma estacional, suspender unas 4 semanas después de la temporada, con plan escrito.", "teoria": [{"h": "En cada control", "html": "<ul><li>Control de síntomas, factores de riesgo y efectos adversos.</li><li>Talla al menos una vez por año.</li><li>Reevaluar la necesidad de tratamiento cada 3–6 meses, porque los síntomas remiten en muchos chicos.</li><li>Con buena respuesta por 2–3 meses, considerar bajar la dosis.</li><li>Asma estacional: se puede suspender el CI unas 4 semanas después de que termina la temporada, con un plan escrito para reconocer y tratar el empeoramiento.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 211. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Revisar"},
  {"id": "g11-dispositivo", "nivel": 1, "mapa": "gr-c11", "titulo": "Aerocámara según la edad", "tipo": "concepto", "x": 1050, "y": 170, "resumen": "0–3 años: aerosol con aerocámara y máscara. 4–5 años: con boquilla. Respiración corriente, 5–6 respiraciones por disparo, un disparo por vez, agitar antes de cada uno.", "teoria": [{"h": "Qué dispositivo", "html": "<table><thead><tr><th>Edad</th><th>Preferido</th><th>Alternativa</th></tr></thead><tbody><tr><td>0–3 años</td><td>Aerosol + aerocámara con máscara</td><td>Nebulizador con máscara</td></tr><tr><td>4–5 años</td><td>Aerosol + aerocámara con boquilla</td><td>Aerocámara con máscara o nebulizador</td></tr></tbody></table>"}, {"h": "Técnica", "html": "<ul><li><b>Un disparo por vez</b>, agitando antes de cada uno; varios disparos juntos reducen mucho la dosis.</li><li>Inhalar enseguida: esperar más de 30 segundos cambia la dosis.</li><li><b>5–6 respiraciones</b> por disparo.</li><li>Máscara bien ajustada a nariz y boca; limpiar la piel después. Pasar a boquilla en cuanto pueda.</li><li>Ver que la válvula se mueva.</li><li>Carga estática: lavar con detergente sin enjuagar y dejar secar al aire.</li><li>Aerocámaras de menos de 350 mL serían preferibles en los más chicos.</li></ul><p>El nebulizador queda para los pocos que no pueden usar la aerocámara; dispersa virus hasta 1 metro.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 11-4 (p. 212) y p. 211–212. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g11-educacion"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Dispositivo"},
  {"id": "g11-educacion", "nivel": 1, "mapa": "gr-c11", "titulo": "Educación de la familia y plan escrito", "tipo": "concepto", "x": 1050, "y": 380, "resumen": "Información básica, técnica inhalatoria, adherencia y un plan de acción escrito con señales de alarma, qué medicamentos dar y cuándo y dónde consultar, con teléfonos.", "teoria": [{"h": "Contenido", "html": "<ul><li>Información básica sobre el asma y lo que la influye.</li><li>Entrenamiento en la técnica inhalatoria.</li><li>La importancia de la adherencia.</li><li><b>Plan de acción escrito</b>: cómo reconocer el empeoramiento, qué medicamentos dar, cuándo y cómo buscar atención (con teléfonos de emergencias, guardias y ambulancia).</li></ul><p>Lo clave: acuerdo con la familia sobre los objetivos y seguimiento cercano. Los tratamientos para iniciar en casa están en el capítulo 12.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 213. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Educación"},
  {"id": "g12-reconocer", "nivel": 1, "mapa": "gr-c12", "titulo": "Cómo empieza una crisis", "tipo": "concepto", "x": 150, "y": 150, "resumen": "Síntomas de resfrío, más sibilancias y falta de aire, más tos sobre todo dormido, decaimiento, comer peor y poca respuesta al rescate.", "teoria": [{"h": "Primeras señales", "html": "<ul><li>Inicio de una infección respiratoria.</li><li>Aumento agudo o subagudo de las sibilancias y la falta de aire.</li><li>Más tos, sobre todo dormido.</li><li>Letargo o menos tolerancia al juego.</li><li>Problemas para alimentarse.</li><li>Poca respuesta al rescate.</li></ul><p>En chicos de 2 a 5 años, la combinación de más tos de día, sibilancias de día y SABA de noche predijo cerca del 70 % de las crisis del día siguiente; ningún síntoma aislado lo hizo.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 214–215. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g12-casa"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Reconocer"},
  {"id": "g12-casa", "nivel": 1, "mapa": "gr-c12", "titulo": "Tratamiento inicial en casa", "tipo": "concepto", "x": 150, "y": 310, "resumen": "Salbutamol 2 disparos con aerocámara, un disparo por vez; repetir hasta 2 veces más cada 20 minutos. Consultar el mismo día si necesita ≥ 4 disparos en 4 horas o más de 3 veces en 12 horas.", "teoria": [{"h": "Qué hace la familia", "html": "<p><b>Salbutamol 2 disparos</b> (100 mcg por disparo) con aerocámara y boquilla o máscara, un disparo por vez con respiración corriente. Se puede repetir <b>hasta 2 veces más cada 20 minutos</b>. Si mejora, mantenerlo en reposo y observarlo.</p>"}, {"h": "Consultar ya si", "html": "<ul><li>Está muy agitado (tiraje subcostal o intercostal, cianosis), somnoliento o empeora.</li><li>El broncodilatador no lo alivia rápido.</li><li>El alivio dura menos de 4 horas o cada vez menos.</li><li>Es menor de 12 meses y necesita SABA repetido durante varias horas.</li></ul><p><b>El mismo día</b> si necesita ≥ 4 disparos en 4 horas o SABA más de 3 veces en las primeras 12 horas.</p>"}, {"h": "Lo que no se recomienda", "html": "<ul><li><b>Corticoide oral iniciado por la familia</b>: evidencia débil y riesgo de efectos acumulados.</li><li>CI en dosis alta episódico: solo si el médico confía en que se usará bien.</li><li>Montelukast al inicio del resfrío: evidencia contradictoria.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 215–216. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g12-gravedad"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "En casa"},
  {"id": "g12-gravedad", "nivel": 1, "mapa": "gr-c12", "titulo": "Gravedad (≤ 5 años)", "tipo": "concepto", "x": 450, "y": 150, "resumen": "Leve: frases, SatO₂ ≥ 94 %, FR normal. Moderada: SatO₂ ≥ 92 %, FR ≤ 40, tiraje. Grave: no habla ni toma, SatO₂ < 92 %, FR > 40, tórax silencioso. Amenaza la vida: somnolencia, confusión, cianosis.", "teoria": [{"h": "Criterios", "html": "<table><thead><tr><th></th><th>Leve</th><th>Moderada</th><th>Grave</th></tr></thead><tbody><tr><td>Conciencia</td><td>Normal</td><td>Normal</td><td>Normal (somnoliento o confuso = amenaza la vida)</td></tr><tr><td>Cianosis central</td><td>No</td><td>No</td><td>Puede haber</td></tr><tr><td>SatO₂ (aire)</td><td>≥ 94 %</td><td>≥ 92 %</td><td>&lt; 92 %</td></tr><tr><td>Habla</td><td>Oraciones (frases en los más chicos)</td><td>Frases</td><td>Palabras, no puede tomar</td></tr><tr><td>FR</td><td>≤ 40</td><td>Aumentada, ≤ 40</td><td>&gt; 40</td></tr><tr><td>Tiraje</td><td>No</td><td>Algo</td><td>Sí, a veces escalenos</td></tr><tr><td>Entrada de aire</td><td>Normal</td><td>Disminuida</td><td>Tórax silencioso</td></tr><tr><td>PRAM</td><td>1–3</td><td>4–7</td><td>8–10 (11–12: amenaza la vida)</td></tr></tbody></table>"}, {"h": "Ojo", "html": "<p>La saturación &lt; 92 % antes del tratamiento se asocia con internación. Agitación, somnolencia y confusión son signos de hipoxemia cerebral. Un tórax silencioso indica ventilación mínima. La oximetría puede sobreestimar la saturación en pieles oscuras.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 12-1 (p. 217). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g12-pram", "g12-primaria"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Gravedad"},
  {"id": "g12-pram", "nivel": 1, "mapa": "gr-c12", "titulo": "PRAM", "tipo": "concepto", "x": 450, "y": 360, "resumen": "Puntaje de 0 a 12 (2 a 17 años) con saturación, tiraje supraesternal, escalenos, entrada de aire y sibilancias. 0–3 leve, 4–7 moderada, 8–12 grave. GINA 2026 recomienda fuertemente un puntaje validado en menores de 18 años.", "teoria": [{"h": "Los cinco ítems", "html": "<table><thead><tr><th>Ítem</th><th>Puntos</th></tr></thead><tbody><tr><td>SatO₂: ≥ 95 % / 92–94 % / &lt; 92 %</td><td>0 / 1 / 2</td></tr><tr><td>Tiraje supraesternal: no / sí</td><td>0 / 2</td></tr><tr><td>Contracción de escalenos: no / sí</td><td>0 / 2</td></tr><tr><td>Entrada de aire: normal / ↓ en bases / ↓ en bases y vértices / mínima o ausente</td><td>0 / 1 / 2 / 3</td></tr><tr><td>Sibilancias: no / solo espiratorias / inspiratorias / audibles sin estetoscopio o tórax silencioso</td><td>0 / 1 / 2 / 3</td></tr></tbody></table><p><b>0–3</b> leve · <b>4–7</b> moderada · <b>8–12</b> grave. Si hay asimetría, puntúa el lado o las zonas más afectadas.</p>"}, {"h": "Cómo usarlo", "html": "<p>Validado contra la internación y la oscilometría. Otra opción validada es el PAS. Es una guía y no reemplaza la evaluación clínica. Hay un módulo de entrenamiento en línea del CHU Sainte-Justine.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 12-2 (p. 218). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte", "ducharme2008"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "PRAM"},
  {"id": "g12-primaria", "nivel": 1, "mapa": "gr-c12", "titulo": "Atención primaria (≤ 5 años)", "tipo": "concepto", "x": 750, "y": 150, "resumen": "Leve: salbutamol 4 disparos y revisar. Moderada: 4 disparos hasta 3 veces, ipratropio, corticoide oral. Grave: derivar ya, con salbutamol cada 20 minutos, ipratropio, oxígeno y corticoide.", "teoria": [{"h": "Según la gravedad", "html": "<ul><li><b>Leve</b>: salbutamol 4 disparos con aerocámara (o 2,5 mg nebulizado). Evaluar y, solo si hace falta, repetir una vez a los 30–60 minutos.</li><li><b>Moderada</b>: salbutamol 4 disparos hasta 3 veces cada 20–30 minutos; ipratropio 4 disparos con cada dosis si hay; <b>corticoide oral</b>.</li><li><b>Grave</b>: <b>derivar</b> y tratar ya: adrenalina IM primero si hay anafilaxia; salbutamol 4–6 disparos (o 2,5 mg nebulizado) cada 20 minutos; ipratropio; oxígeno con objetivo ≥ 92 %; corticoide sistémico; monitoreo continuo.</li></ul>"}, {"h": "Revisar a la hora o antes", "html": "<p>Saturación, FR, tiraje, entrada de aire y PRAM. Si empeora o no mejora, derivar. Si mejora y cumple criterios de crisis leve durante 1–2 horas después del último salbutamol, con SatO₂ ≥ 92 % y recursos en casa, evaluar el alta. Pensar en bronquiolitis (sobre todo en menores de 12 meses con crepitantes), crup o cuerpo extraño.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 12-5 (p. 221). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g12-derivar", "g12-dosis"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Atención primaria"},
  {"id": "g12-derivar", "nivel": 1, "mapa": "gr-c12", "titulo": "Derivar al hospital", "tipo": "concepto", "x": 750, "y": 320, "resumen": "Cianosis, no puede hablar ni tomar, FR > 40, SatO₂ < 92 %, tórax silencioso; sin respuesta a 4–6 disparos cada 20 minutos por 1 hora; taquipnea que persiste; o una familia que no puede manejarlo en casa.", "teoria": [{"h": "Indicaciones de traslado inmediato", "html": "<ul><li><b>En la evaluación</b>: cianosis, no puede hablar ni tomar, FR &gt; 40, SatO₂ &lt; 92 % en aire, tórax silencioso con disnea.</li><li><b>Sin respuesta</b> a 4–6 disparos de salbutamol cada 20 minutos hasta 3 veces en 1 hora, o taquipnea que persiste tras 3 dosis aunque mejoren otros signos.</li><li><b>Entorno social</b> que impide el tratamiento o familia que no puede manejarlo.</li></ul><p>También: paro o inminencia de paro, falta de supervisión, o recaída grave dentro de 48 horas. Menores de 2 años: menor umbral por el riesgo de deshidratación y fatiga. Durante el traslado: salbutamol, oxígeno y corticoide sistémico.</p><p class=\"nota\">FR normal: &lt; 50 de 2 a 12 meses; &lt; 40 de 1 a 5 años.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 12-3 (p. 219). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g12-guardia"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Derivar"},
  {"id": "g12-dosis", "nivel": 1, "mapa": "gr-c12", "titulo": "Dosis en la crisis (≤ 5 años)", "tipo": "concepto", "x": 750, "y": 470, "resumen": "Salbutamol ≥ 4 disparos o 2,5 mg nebulizado. Prednisolona 1–2 mg/kg (máximo 20 mg en menores de 2 años; 30 mg de 2 a 5) o dexametasona 0,3–0,6 mg/kg (máximo 12 mg). Ipratropio 4 disparos. Magnesio intravenoso 40–50 mg/kg en la guardia.", "teoria": [{"h": "Medicamentos iniciales", "html": "<table><thead><tr><th>Medicamento</th><th>Dosis</th></tr></thead><tbody><tr><td>Oxígeno</td><td>Por cánula o máscara para SatO₂ ≥ 92 %</td></tr><tr><td>Salbutamol</td><td>≥ 4 disparos de 100 mcg con aerocámara, uno por vez, o 2,5 mg nebulizado; en crisis moderadas o graves, cada 20 minutos hasta 3 veces</td></tr><tr><td>Prednisolona oral</td><td>1–2 mg/kg; máximo 20 mg en menores de 2 años y 30 mg de 2 a 5 años; 3–5 días</td></tr><tr><td>Dexametasona oral</td><td>0,3–0,6 mg/kg (máximo 12 mg) en total por 1–2 días; da menos vómitos</td></tr><tr><td>Metilprednisolona IV</td><td>1 mg/kg cada 6 horas el día 1</td></tr><tr><td>Ipratropio</td><td>4 disparos de 20 mcg (o 0,25 mg nebulizado) con el SABA, hasta 3 veces</td></tr><tr><td>Sulfato de magnesio IV (guardia)</td><td>40–50 mg/kg (máximo 2 g) en 10–20 minutos, desde los 2 años, en crisis grave</td></tr></tbody></table><p>Aerosol con aerocámara: 5–6 respiraciones por disparo y agitar antes de cada uno.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 12-4 (p. 220). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Dosis"},
  {"id": "g12-guardia", "nivel": 2, "mapa": "gr-c12", "titulo": "En la guardia (≤ 5 años)", "tipo": "concepto", "x": 750, "y": 600, "resumen": "Descartar crup, bronquiolitis, cuerpo extraño o cetoacidosis. Con riesgo vital, salbutamol, ipratropio, oxígeno y corticoide ya, y pedir terapia intensiva. Si está muy agitado, nebulizar con oxígeno sin demorar.", "teoria": [{"h": "Puntos clave", "html": "<ul><li>Considerar otras causas: crup, bronquiolitis, cuerpo extraño, cetoacidosis diabética.</li><li>Evaluar con el PRAM.</li><li>Riesgo vital (somnolencia, confusión, cianosis, PRAM 11–12): salbutamol, ipratropio, oxígeno y corticoide sistémico de inmediato; pedir ayuda a terapia intensiva o anestesia.</li><li>Si está muy agitado: salbutamol 2,5 mg nebulizado con oxígeno sin esperar la evaluación completa.</li><li>Para la mayoría, aerosol con aerocámara: más eficiente y cómodo que el nebulizador.</li><li>Oxígeno si SatO₂ &lt; 92 %, objetivo ≥ 92 %.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 224–226 y Box 12-7. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Guardia"},
  {"id": "g12-alta", "nivel": 1, "mapa": "gr-c12", "titulo": "Qué dejar armado al alta", "tipo": "concepto", "x": 1050, "y": 170, "resumen": "Documentar el diagnóstico si se confirmó; salbutamol a demanda (volver si lo necesita antes de 4 horas); iniciar o subir el CI si la crisis fue moderada o grave o hay síntomas entre episodios; completar el corticoide oral.", "teoria": [{"h": "Antes de irse", "html": "<ul><li><b>Documentar el asma</b> si se confirmó: sibilancia observada, sin otra causa y respuesta al SABA.</li><li><b>Salbutamol</b> con aerocámara, 2 inhalaciones a demanda, no fijo. Volver a la guardia si lo necesita otra vez dentro de las 4 horas.</li><li><b>CI</b>: iniciar, seguir o aumentar si la crisis fue moderada o grave, o si hay síntomas entre episodios (≥ 2 días por semana).</li><li><b>Corticoide oral</b> si se empezó: completar 3–5 días de prednisolona o 1–2 días de dexametasona.</li><li>Técnica con aerocámara, plan de acción, medicación suficiente y recursos en casa.</li></ul>"}, {"h": "Qué contribuyó", "html": "<p>Virus, humo, contaminación, alérgenos de interior, CI insuficiente o mala adherencia, mala técnica y problemas psicosociales.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 12-5 y Box 12-6 (p. 223). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g12-control"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Alta"},
  {"id": "g12-control", "nivel": 1, "mapa": "gr-c12", "titulo": "Control en 1–3 días", "tipo": "concepto", "x": 1050, "y": 400, "resumen": "Control en 1–3 días y otro en 2–3 meses. Consultar antes si no mejora en 24–48 horas. Derivar si ya tuvo otra crisis en el año o más de un ciclo de corticoide oral.", "teoria": [{"h": "En el control", "html": "<ul><li>¿Se está resolviendo? ¿Cuánto SABA usa? Si empeora, derivar.</li><li>Confirmar que sigue con el CI; revisar técnica y adherencia.</li><li>Factores de riesgo y educación de la familia.</li><li>Plan de acción: ¿lo entendieron? ¿lo usaron bien?</li><li><b>Derivar</b> si tuvo más de un ciclo de corticoide oral en el último año, o si ya había tenido una crisis en los últimos 12 meses.</li><li>Próximo control en <b>2–3 meses</b>: una crisis aumenta el riesgo de otra en el año.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 12-6 (p. 223) y p. 215. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Control"},
  {"id": "g13-dieta", "nivel": 1, "mapa": "gr-c13", "titulo": "Dieta de la madre y del bebé", "tipo": "concepto", "x": 150, "y": 200, "resumen": "Ningún alimento en el embarazo aumenta claramente el riesgo. La lactancia reduce las sibilancias tempranas, pero no se puede prometer que prevenga el asma. Demorar la alimentación complementaria no sirve.", "teoria": [{"h": "Lo que se sabe", "html": "<ul><li><b>Dieta materna</b>: ningún alimento aumenta claramente el riesgo de asma.</li><li><b>Lactancia</b>: reduce las sibilancias en los primeros años, pero quizás no el asma persistente. Recomendarla por sus otros beneficios.</li><li><b>Alimentación complementaria</b>: demorarla no reduce la alergia ni el asma. Introducir maní temprano puede prevenir la alergia al maní en lactantes de alto riesgo.</li><li><b>Vitamina D</b> en el embarazo: dos ensayos combinados mostraron un 25 % menos de asma o sibilancias recurrentes de 0 a 3 años.</li><li><b>Aceite de pescado</b>: resultados inconsistentes.</li><li><b>Probióticos</b>: evidencia insuficiente.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 230–231. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g13-aconsejar"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Dieta"},
  {"id": "g13-alergenos", "nivel": 1, "mapa": "gr-c13", "titulo": "Alérgenos y contaminación", "tipo": "concepto", "x": 450, "y": 150, "resumen": "La sensibilización es el mejor predictor de asma persistente. Evitar un solo alérgeno no previene; las intervenciones múltiples podrían. El tabaco en el embarazo y vivir cerca de avenidas aumentan el riesgo.", "teoria": [{"h": "Alérgenos", "html": "<p>La sensibilización alérgica, sobre todo a alérgenos de interior, es el mejor predictor de asma persistente. Las intervenciones contra <b>un solo alérgeno</b> no redujeron el asma; las <b>múltiples</b> (Isla de Wight, estudio canadiense) se asociaron con menos asma, sin saber qué componente sirvió. La inmunoterapia sublingual con gramíneas en chicos con rinitis no redujo los diagnósticos de asma.</p>"}, {"h": "Humo y contaminación", "html": "<p>El tabaquismo materno en el embarazo es la exposición más directa y pesa más en los chicos pequeños. Vivir cerca de una avenida y la exposición prenatal a NO₂, SO₂ y PM10 aumentan el riesgo.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 231. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g13-microbios"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Alérgenos y humo"},
  {"id": "g13-microbios", "nivel": 1, "mapa": "gr-c13", "titulo": "Microbios, parto y VSR", "tipo": "concepto", "x": 450, "y": 330, "resumen": "Menos asma en chicos criados en granjas y nacidos por parto vaginal. La internación por VSR en los primeros 6 meses triplica el diagnóstico de asma. El palivizumab redujo las sibilancias del primer año, pero no el asma diagnosticada.", "teoria": [{"h": "Hipótesis de la higiene y la biodiversidad", "html": "<p>Menos asma en chicos criados en granjas con contacto con establos. Más asma en nacidos por cesárea que por parto vaginal, quizás por diferencias en la microbiota intestinal.</p>"}, {"h": "VSR", "html": "<ul><li>La infección por VSR en el lactante se asocia con sibilancias recurrentes a los 5 años.</li><li>Internarse por VSR en los primeros 6 meses se asocia con el triple de diagnósticos de asma hasta los 25 años, más si un padre tiene asma o la madre rinitis.</li><li>Palivizumab en prematuros: menos sibilancias en el primer año, pero sin cambios en el asma diagnosticada ni en la función pulmonar a los 6 años.</li><li>La vacuna materna y el nirsevimab redujeron el VSR grave; se estudia si podrían reducir el asma infantil.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 231–232. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g13-aconsejar"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Microbios y VSR"},
  {"id": "g13-otros", "nivel": 1, "mapa": "gr-c13", "titulo": "Antibióticos, estrés, obesidad y prematurez", "tipo": "concepto", "x": 750, "y": 200, "resumen": "Antibióticos en el embarazo y la primera infancia, paracetamol, estrés materno, obesidad materna y del niño, prematurez y bajo peso se asocian con más asma. Las vacunas no aumentan el riesgo.", "teoria": [{"h": "Factores asociados con más asma", "html": "<ul><li><b>Antibióticos</b> en el embarazo y en lactantes (no todos los estudios lo muestran).</li><li><b>Paracetamol</b>, aunque puede estar confundido por las infecciones.</li><li>Ácido fólico en dosis mayores a las recomendadas: aumento pequeño, muy superado por su beneficio contra los defectos del tubo neural. Seguir las recomendaciones habituales.</li><li><b>Estrés materno</b> en el embarazo o en los primeros años.</li><li><b>Obesidad materna</b>: cada kg/m² de IMC suma un 2–3 % de riesgo de asma infantil.</li><li><b>Sobrepeso u obesidad del niño</b>, sobre todo en niñas.</li><li><b>Prematurez</b> (&lt; 37 semanas) y <b>bajo peso</b> (&lt; 2,5 kg).</li></ul><p>No hay evidencia de que las vacunas aumenten el riesgo de asma.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 232–233. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g13-aconsejar"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Otros factores"},
  {"id": "g13-aconsejar", "nivel": 1, "mapa": "gr-c13", "titulo": "Qué aconsejar a la familia", "tipo": "concepto", "x": 1050, "y": 170, "resumen": "Nada de humo en el embarazo ni después, corregir el déficit de vitamina D en embarazadas con asma, favorecer el parto vaginal, evitar antibióticos de amplio espectro en el primer año y lactancia por sus otros beneficios.", "teoria": [{"h": "Consejos para menores de 6 años", "html": "<ul><li>Que no estén expuestos al <b>humo de tabaco</b> en el embarazo ni después del nacimiento.</li><li>Detectar y corregir la <b>insuficiencia de vitamina D</b> en embarazadas con asma (o que planean embarazarse): podría reducir las sibilancias tempranas.</li><li>Favorecer el <b>parto vaginal</b> cuando sea posible.</li><li>Evitar <b>antibióticos de amplio espectro</b> en el primer año cuando sea posible.</li><li><b>Lactancia</b>, no para prevenir alergia o asma, sino por sus otros beneficios.</li></ul><p>Quizás lo más importante: un espacio de conversación que baje el estrés y deje que la familia decida con comodidad.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 13-1 (p. 233). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g13-adultos"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Consejos"},
  {"id": "g13-adultos", "nivel": 2, "mapa": "gr-c13", "titulo": "Prevención en adultos", "tipo": "concepto", "x": 1050, "y": 400, "resumen": "Exposiciones laborales (5–20 % del asma de inicio adulto), tabaco y vapeo, contaminación de interior, productos de limpieza, tráfico y obesidad.", "teoria": [{"h": "Factores", "html": "<ul><li><b>Laborales</b>: 5–20 % del asma de inicio adulto. Preguntar si mejora fuera del trabajo; eliminar el agente y retirar al sensibilizado; derivar.</li><li>Tabaco o vapeo; humo ajeno y contaminación de interior.</li><li>Productos de limpieza domésticos.</li><li>Contaminación por tráfico.</li><li>Sobrepeso u obesidad.</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, p. 233–234. Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Adultos"},
  {"id": "g14-pasos", "nivel": 1, "mapa": "gr-c14", "titulo": "Pasos para implementar", "tipo": "concepto", "x": 150, "y": 200, "resumen": "Grupo multidisciplinario, diagnóstico de situación, adaptar las recomendaciones al contexto local, barreras y facilitadores, plan con metas y evaluación continua.", "teoria": [{"h": "Siete pasos", "html": "<ol><li>Formar un grupo multidisciplinario (atención primaria, especialistas, enfermería, farmacia, pacientes, comunidad).</li><li>Evaluar la situación actual: crisis, internaciones, muertes, brechas.</li><li>Elegir y adaptar las recomendaciones clave al contexto local, considerando también el impacto ambiental.</li><li>Identificar barreras y facilitadores.</li><li>Elegir un marco de implementación.</li><li>Plan paso a paso: población, resultados medibles, recursos, plazos, tareas.</li><li>Revisar los resultados y ajustar.</li></ol><p>GINA es una estrategia basada en evidencia que se actualiza cada año, no una guía formal: hay que adaptarla al lugar.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 14-2 (p. 236). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": ["g14-barreras"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Pasos"},
  {"id": "g14-barreras", "nivel": 2, "mapa": "gr-c14", "titulo": "Barreras", "tipo": "concepto", "x": 150, "y": 420, "resumen": "En los profesionales: no conocer o no compartir las recomendaciones, resistencia al cambio, falta de tiempo. En los pacientes: baja alfabetización en salud, creencias, miedos y barreras culturales y económicas.", "teoria": [{"h": "Ejemplos", "html": "<table><thead><tr><th>Profesionales</th><th>Pacientes</th></tr></thead><tbody><tr><td>No conocen las recomendaciones</td><td>Baja alfabetización en salud</td></tr><tr><td>No acuerdan o no creen que funcionen</td><td>Poca comprensión del asma y su manejo</td></tr><tr><td>Resistencia al cambio</td><td>No acuerdan con las recomendaciones</td></tr><tr><td>Barreras organizativas y económicas</td><td>Barreras culturales y económicas</td></tr><tr><td>Falta de tiempo y recursos</td><td>Influencia de pares</td></tr><tr><td>Temas médico-legales; mala codificación</td><td>Creencias, miedos y conceptos erróneos</td></tr></tbody></table><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 14-3 (p. 237). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Barreras"},
  {"id": "g14-impacto", "nivel": 1, "mapa": "gr-c14", "titulo": "Intervenciones de alto impacto", "tipo": "concepto", "x": 450, "y": 200, "resumen": "CI gratis tras una internación, CI temprano con automanejo, menos humo, listas de chequeo en atención primaria, planes escritos y modelos de atención pediátrica en red.", "teoria": [{"h": "Ejemplos", "html": "<ul><li><b>CI gratuito</b> para pacientes con internación reciente o asma grave.</li><li>CI temprano, automanejo guiado, menos exposición al humo y más acceso a educación.</li><li>Lista de chequeo en atención primaria que recuerde evaluar el control y el tratamiento.</li><li>Planes de acción escritos individualizados dentro de la educación.</li><li>Un modelo de atención basado en evidencia para el asma pediátrica aguda y crónica, aplicado en varios hospitales.</li></ul><p>Evaluar siempre con indicadores de proceso y de resultado.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Box 14-4 (p. 237). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Alto impacto"},
  {"id": "g14-biomarcadores", "nivel": 1, "mapa": "gr-c14", "titulo": "Eosinófilos y FeNO: cómo leerlos", "tipo": "concepto", "x": 750, "y": 200, "resumen": "Varían con la edad, el sexo, la hora, el tabaco, los alérgenos y los corticoides. FeNO alto: > 50 ppb sin CI, ≥ 25 con dosis media, ≥ 20 con dosis alta. Eosinófilos ≥ 150 sugieren tipo 2 en asma grave; ≥ 300 es un umbral habitual para biológicos.", "teoria": [{"h": "Umbrales (adolescentes y adultos)", "html": "<ul><li><b>Eosinófilos</b>: para diagnóstico, por encima del rango local. En asma grave con CI en dosis alta, ≥ 150/µL sugiere inflamación tipo 2; ≥ 300/µL es un umbral común para biológicos.</li><li><b>FeNO</b>: no hay valores de referencia poblacionales. Alto si &gt; 50 ppb sin CI, ≥ 25 ppb con CI en dosis media y ≥ 20 ppb con dosis alta. En niños, &gt; 35 ppb apoya el diagnóstico.</li></ul>"}, {"h": "Qué los modifica", "html": "<table><thead><tr><th></th><th>Eosinófilos</th><th>FeNO</th></tr></thead><tbody><tr><td>Más altos</td><td>Varones, temprano a la mañana, fumadores, parásitos, alergias, exposición a alérgenos</td><td>Varones, a la tarde, alergias, unas 24 horas después de un alérgeno</td></tr><tr><td>Más bajos</td><td>Corticoides (sobre todo orales), algunos fenotipos</td><td>Fumadores, broncoconstricción, respuesta alérgica temprana, corticoides</td></tr></tbody></table><p>Interpretarlos con cautela y, para evaluar biológicos, repetirlos hasta 3 veces.</p><p class=\"nota\">Fuente: GINA 2026, reporte completo, Apéndice A (p. 238–242). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Biomarcadores"},
  {"id": "g14-medicamentos", "nivel": 1, "mapa": "gr-c14", "titulo": "Clases de medicamentos", "tipo": "concepto", "x": 1050, "y": 200, "resumen": "Rescate antiinflamatorio (CI-formoterol, CI-SABA), mantenimiento (CI, CI-LABA, montelukast), agregados (LAMA, biológicos) y SABA. Cada uno con indicaciones, dosis y efectos adversos.", "teoria": [{"h": "Resumen del apéndice", "html": "<ul><li><b>CI-formoterol en dosis baja</b>: rescate del track 1, solo o en MART. Consultar si se necesitan más de 12 inhalaciones en 24 horas (adolescentes y adultos) o más de 8 (niños de 6 a 11).</li><li><b>CI-SABA</b> (budesonida-salbutamol): rescate del track 2, 2 inhalaciones; consultar si necesita más de 6 dosis en 24 horas. No sirve para MART.</li><li><b>CI</b>: el antiinflamatorio más eficaz. Efectos locales: candidiasis y disfonía (aerocámara y enjuague).</li><li><b>CI-LABA</b>: agregar LABA mejora más y más rápido que duplicar el CI. LABA o LAMA <b>nunca sin CI</b> en el asma.</li><li><b>Montelukast</b>: menos eficaz que el CI solo y que el CI-LABA como agregado; alerta por cambios de conducta y ánimo, incluida ideación suicida.</li><li><b>LAMA</b>: tiotropio desde los 6 años; triples desde 12 o 18 años según el producto.</li><li><b>Biológicos</b>: anti-IgE y mepolizumab desde los 6 años, entre otros (ver cap. 8).</li></ul><p class=\"nota\">Fuente: GINA 2026, reporte completo, Apéndice B (p. 243–247). Resumen propio: verificar contra el texto original.</p>"}], "evidencia": ["gina2026reporte"], "pico": [], "ateneos": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}, "corto": "Medicamentos"},
  /*/gr-nodos*/

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
    evidencia: ["stanojevic2022", "reddel2022", "gaillard2021"],
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
    evidencia: ["reddel2022", "gaillard2021"],
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
  },

  /* ───────────── IRAB Y NEUMONÍA (submapa irab) ───────────── */
  {
    id: "irab", nivel: 1,
    titulo: "IRAB y neumonía",
    tipo: "tema",
    color: "var(--c-irab)",
    x: 330, y: 140,
    edad: "0 a 5 años",
    submapa: "irab",
    resumen: "Infecciones respiratorias agudas bajas: la bronquiolitis, la neumonía y las neumonitis comparten síntomas, y cada país las nombra distinto. El submapa ordena las definiciones, la NAC y los gérmenes.",
    teoria: [
      { h: "Por qué va al lado de la bronquiolitis", html: "<p>Fiebre, tos, taquipnea, tiraje y rales aparecen en la bronquiolitis, en la neumonía viral, en la bacteriana y en las neumonitis. <b>Ningún hallazgo aislado las separa</b>: el diagnóstico surge de la edad, la forma de comienzo, la saturación y el trabajo respiratorio, y de cómo evoluciona.</p>" },
      { h: "Qué hay en el submapa", html: "<ul><li><b>¿Cómo lo llamamos?</b> IRAB, bronquiolitis, neumonía OMS, SBO, LRTI: qué incluye cada nombre.</li><li><b>Neumonía adquirida en la comunidad:</b> clínica, radiografía, etiología, BPS, antibiótico, internación y complicaciones.</li><li><b>Neumonitis y gérmenes:</b> Mycoplasma, Chlamydia, tos convulsa, virus, inmunocomprometidos y aspiración.</li></ul>" }
    ],
    diferenciales: [
      { dx: "Bronquiolitis", nodo: "bronquiolitis", claves: "<ul><li>Menor de 2 años, primer episodio, pródromo catarral, sibilancias o rales difusos y simétricos.</li><li>La fiebre alta, la focalidad o el mal estado general orientan a neumonía.</li></ul>" },
      { dx: "Sibilancias recurrentes o crisis asmática", nodo: "sibilancias", claves: "<ul><li>Episodios previos, sibilancias difusas, respuesta clara al broncodilatador.</li><li>Atelectasias en la placa que se confunden con neumonía.</li></ul>" }
    ],
    evidencia: ["sap2021irab", "bradley2011"], pico: [], ateneos: [],
    conexiones: ["bronquiolitis", "vsr", "sibilancias"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "irab-paraguas", nivel: 1, mapa: "irab", titulo: "IRAB: un paraguas, no un diagnóstico", corto: "IRAB, el paraguas", tipo: "concepto",
    x: 210, y: 140,
    resumen: "Infección respiratoria aguda baja: agrupa cuadros distintos por debajo de la laringe. Sirve para organizar la atención y la vigilancia, no para decidir un tratamiento.",
    teoria: [
      { h: "Qué incluye", html: "<p>En Argentina, IRAB es el término de las recomendaciones de la SAP y de la vigilancia epidemiológica. Abarca la <b>bronquiolitis</b> y la <b>neumonía</b> como entidades principales y, según la fuente, también la bronquitis, el síndrome bronquial obstructivo, la tos convulsa o la influenza.</p><p>Las recomendaciones de la SAP de 2021 se refieren a <b>menores de 2 años</b>.</p>" },
      { h: "Por qué confunde", html: "<ul><li>No es una enfermedad: es un nivel anatómico más un tiempo de evolución.</li><li>Los límites cambian con cada definición: la edad de la bronquiolitis, si la neumonía exige radiografía o no, si un primer episodio con sibilancias cuenta como bronquiolitis o como «neumonía» OMS.</li><li>Un mismo niño puede recibir nombres distintos en la guardia, en la historia clínica, en la notificación y en un artículo.</li></ul>" },
      { h: "Lo práctico", html: "<p>Usar IRAB como punto de partida y después <b>nombrar el cuadro concreto</b>: bronquiolitis, neumonía (con o sin radiografía), neumonitis, coqueluche. Cada nombre tiene su evidencia y su conducta.</p>" }
    ],
    diferenciales: [
      { dx: "Infección respiratoria alta", claves: "<ul><li>Rinitis, faringitis u otitis sin taquipnea, tiraje ni hallazgos auscultatorios bajos.</li><li>La tos puede ser por goteo posnasal.</li></ul>" },
      { dx: "Laringitis (crup)", claves: "<ul><li>Estridor inspiratorio, tos perruna y disfonía: obstrucción alta, no baja.</li></ul>" }
    ],
    evidencia: ["sap2021irab"], pico: [], ateneos: [],
    conexiones: ["irab-oms", "irab-neumonia-def", "irab-bronquiolitis-def", "irab-etiquetas"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "irab-oms", nivel: 1, mapa: "irab", titulo: "La neumonía de la OMS: contar respiraciones", corto: "Neumonía OMS (AIEPI)", tipo: "concepto",
    x: 110, y: 250,
    resumen: "Tos o dificultad para respirar con respiración rápida o tiraje. Muy sensible y pensada para bajar la mortalidad donde no hay radiografía; incluye muchas bronquiolitis.",
    teoria: [
      { h: "La definición", html: "<div class=\"tabla\"><table><thead><tr><th>Edad</th><th>Respiración rápida</th></tr></thead><tbody><tr><td>Menos de 2 meses</td><td>60 o más por minuto</td></tr><tr><td>2 a 11 meses</td><td>50 o más por minuto</td></tr><tr><td>12 a 59 meses</td><td>40 o más por minuto</td></tr></tbody></table></div><p>Se cuenta durante un minuto completo, con el niño tranquilo.</p>" },
      { h: "Clasificación de 2014", html: "<ul><li><b>Neumonía:</b> respiración rápida y/o tiraje subcostal, sin signos de peligro. Amoxicilina oral en el domicilio.</li><li><b>Neumonía grave:</b> cualquier signo general de peligro (no puede beber ni mamar, vomita todo, convulsiones, letargo, estridor en reposo, desnutrición grave) o SatO₂ menor de 90 %. Derivar y antibiótico parenteral.</li><li>El cambio se apoyó en ensayos como el de Hazir: la neumonía con tiraje tratada en casa con amoxicilina oral evolucionó igual que internada.</li></ul>" },
      { h: "Para qué sirve y para qué no", html: "<p>Es una herramienta de <b>salud pública</b>: que un agente de salud sin radiografía ni laboratorio no deje sin tratar a un niño que puede morir. Por eso prioriza la sensibilidad.</p><p>En un hospital con acceso a la salud, aplicada al pie de la letra, rotula como neumonía a muchos lactantes con bronquiolitis o sibilancias y lleva a dar antibiótico de más.</p>" }
    ],
    diferenciales: [
      { dx: "Bronquiolitis", nodo: "bronquiolitis", claves: "<ul><li>Cumple la definición OMS (taquipnea, tiraje), pero es viral y no necesita antibiótico.</li><li>Sibilancias o rales difusos, pródromo catarral, menor de 2 años.</li></ul>" },
      { dx: "Crisis de sibilancias", nodo: "sr-salbutamol", claves: "<ul><li>Taquipnea que mejora tras el broncodilatador: reevaluar antes de clasificar como neumonía.</li></ul>" },
      { dx: "Taquipnea por fiebre o acidosis", claves: "<ul><li>La fiebre aumenta la frecuencia respiratoria; recontar con la temperatura más baja.</li><li>Respiración profunda sin tiraje ni hallazgos pulmonares: pensar en acidosis (deshidratación, cetoacidosis, metabólica).</li></ul>", nodo: "ecm-acidosis" }
    ],
    evidencia: ["oms2014imci", "hazir2008", "shah2017"],
    pico: [
      { p: "Niños de 3 a 59 meses con neumonía con tiraje, sin signos de peligro", i: "Amoxicilina oral en dosis altas en el domicilio", c: "Internación con ampicilina parenteral", o: "Fracaso del tratamiento al día 6",
        respuesta: "Equivalentes: fracaso de 7,5 % en domicilio y 8,6 % internados. Base de la clasificación OMS de 2014.",
        certeza: "Moderada", refs: ["hazir2008"] }
    ],
    ateneos: [],
    conexiones: ["irab-neumonia-def", "irab-bronquiolitis-def", "nac-clinica"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "irab-neumonia-def", nivel: 1, mapa: "irab", titulo: "¿Qué es neumonía? Cuatro definiciones", corto: "Definir neumonía", tipo: "concepto",
    x: 310, y: 250,
    resumen: "No existe un patrón de referencia único. Clínica OMS, radiológica OMS, IDSA y el consenso Delphi de 2026 miden cosas distintas.",
    teoria: [
      { h: "Las cuatro", html: "<div class=\"tabla\"><table><thead><tr><th>Definición</th><th>Qué exige</th><th>Para qué sirve</th></tr></thead><tbody><tr><td><b>OMS clínica</b></td><td>Tos o dificultad respiratoria con respiración rápida o tiraje</td><td>Detectar y tratar sin radiografía</td></tr><tr><td><b>OMS radiológica</b> (de punto final)</td><td>Consolidación, o derrame pleural asociado a infiltrado</td><td>Comparar estudios y ensayos de vacunas</td></tr><tr><td><b>IDSA/PIDS 2011</b></td><td>Signos y síntomas de infección parenquimatosa adquirida fuera del hospital, en un niño previamente sano</td><td>Guía de manejo en países de altos ingresos</td></tr><tr><td><b>Delphi 2026</b></td><td>3 mayores (fiebre, taquipnea, consolidación en la radiografía) más 3 de 5 menores (crepitantes focales, PCR > 80 mg/L, mal estado general, tos, síndrome de condensación)</td><td>Práctica e investigación en países con alto acceso a la salud</td></tr></tbody></table></div>" },
      { h: "Dos niveles", html: "<p>Conviene separar la <b>sospecha clínica</b> (que se puede aplicar a todos, con o sin placa) de la <b>clasificación radiográfica</b> (que solo existe si se hizo la placa). Mezclarlas lleva a círculos: si la definición exige radiografía, los niños tratados sin placa quedan afuera.</p>" },
      { h: "Neumonía, bronconeumonía, neumonitis", html: "<ul><li><b>Neumonía:</b> infección del parénquima con ocupación alveolar.</li><li><b>Bronconeumonía:</b> término anatomopatológico y radiológico (focos parcheados alrededor de los bronquios). No indica una causa.</li><li><b>Neumonitis:</b> inflamación de predominio intersticial; se usa para cuadros virales, atípicos o no infecciosos.</li></ul>" }
    ],
    diferenciales: [
      { dx: "Atelectasia", claves: "<ul><li>Opacidad con pérdida de volumen (desplazamiento de cisuras, mediastino o diafragma), frecuente en bronquiolitis y asma.</li><li>Sin fiebre alta ni mal estado; cambia de lugar en placas sucesivas.</li></ul>" },
      { dx: "Timo normal", claves: "<ul><li>Opacidad mediastínica superior en lactantes (signo de la vela), sin clínica respiratoria baja.</li></ul>" }
    ],
    evidencia: ["dutron2026", "cherian2005", "bradley2011", "shah2017"], pico: [], ateneos: [],
    conexiones: ["irab-investigar", "nac", "nac-rx-lectura", "neu-que"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "irab-bronquiolitis-def", nivel: 1, mapa: "irab", titulo: "Bronquiolitis: ¿hasta los 12 o los 24 meses?", corto: "Límites de la bronquiolitis", tipo: "concepto",
    x: 110, y: 370,
    resumen: "La SAP, la AAP y NICE la definen hasta los 2 años; la guía australiana y varios ensayos europeos, hasta los 12 meses. Unos piden sibilancias; NICE acepta crepitantes.",
    teoria: [
      { h: "Cómo la define cada uno", html: "<div class=\"tabla\"><table><thead><tr><th>Fuente</th><th>Edad</th><th>Lo que pide</th></tr></thead><tbody><tr><td>SAP (Argentina)</td><td>Menores de 2 años</td><td>Primer episodio de sibilancias con signos de infección viral</td></tr><tr><td>AAP (EE. UU.)</td><td>1 a 23 meses</td><td>Rinitis y tos que progresan a taquipnea, sibilancias, rales y tiraje</td></tr><tr><td>NICE (Reino Unido)</td><td>Menores de 2 años, sobre todo el primer año</td><td>Pródromo catarral; tos con taquipnea o tiraje, y sibilancias <b>o crepitantes</b></td></tr><tr><td>Australasia y muchos ensayos europeos</td><td>Menores de 12 meses</td><td>Cuadro viral con dificultad respiratoria; el segundo año se considera aparte</td></tr></tbody></table></div>" },
      { h: "Por qué importa", html: "<ul><li>Un niño de 18 meses con su tercer episodio de sibilancias es «bronquiolitis» para unos y «sibilancias recurrentes» o asma preescolar para otros. Responde distinto al broncodilatador y al corticoide.</li><li>Los ensayos que dicen que «nada sirve en bronquiolitis» incluyeron sobre todo lactantes pequeños con primer episodio.</li><li>Donde se acepta «solo crepitantes», crece la superposición con la neumonía viral.</li></ul>" }
    ],
    diferenciales: [
      { dx: "Sibilancias recurrentes", nodo: "sibilancias", claves: "<ul><li>Segundo episodio o más, en general después del año; antecedentes de atopia o respuesta al broncodilatador.</li></ul>" },
      { dx: "Neumonía", nodo: "nac", claves: "<ul><li>Fiebre alta, mal estado, hallazgos focales o asimétricos, SatO₂ baja desproporcionada.</li></ul>" }
    ],
    evidencia: ["ralston2014", "ricci2015", "sap2021irab"], pico: [], ateneos: [],
    conexiones: ["irab-etiquetas", "irab-investigar"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "irab-etiquetas", nivel: 2, mapa: "irab", titulo: "SBO, bronquitis y otras etiquetas", corto: "Etiquetas vagas", tipo: "concepto",
    x: 310, y: 370,
    resumen: "Síndrome bronquial obstructivo, bronquitis, broncoespasmo, «reactive airway disease», «wheezy bronchitis»: nombres que describen el ruido y no la causa.",
    teoria: [
      { h: "Las etiquetas más usadas", html: "<ul><li><b>Síndrome bronquial obstructivo (SBO):</b> muy usado en Argentina y Chile para cualquier cuadro con sibilancias. Junta bronquiolitis, sibilancias recurrentes y asma.</li><li><b>Bronquitis aguda / «bronquitis obstructiva»:</b> tos con roncus, en general viral. En niños no necesita antibiótico.</li><li><b>«Reactive airway disease»</b> (EE. UU.) y <b>«wheezy bronchitis»</b> (Reino Unido, histórica): evitan decir asma o bronquiolitis.</li><li><b>«Hiperreactividad bronquial»</b> usada como diagnóstico: en sentido estricto es un hallazgo de laboratorio (prueba de provocación), no un cuadro clínico.</li><li><b>«Neumonía viral»</b> o <b>«neumonitis»</b>: para algunos, sinónimo de bronquiolitis con infiltrados.</li></ul>" },
      { h: "Qué hacer con ellas", html: "<p>Al escribir la historia clínica, usar el nombre más preciso que se pueda sostener. Al leer un artículo, traducir la etiqueta a la población real: edad, número de episodio, si hubo radiografía.</p>" }
    ],
    diferenciales: [
      { dx: "Cuerpo extraño", nodo: "sr-alternativas", claves: "<ul><li>Sibilancia unilateral tras atragantamiento: no rotular como SBO.</li></ul>" }
    ],
    evidencia: ["little2021"], pico: [], ateneos: [],
    conexiones: ["irab-lrti", "sr-terminos"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "irab-lrti", nivel: 2, mapa: "irab", titulo: "LRTI y «chest infection» en el Reino Unido", corto: "LRTI británica", tipo: "concepto",
    x: 110, y: 490,
    resumen: "En la atención primaria británica, la infección respiratoria baja es una categoría clínica amplia; se separa la «no complicada» (sin sospecha de neumonía), que no necesita antibiótico.",
    teoria: [
      { h: "Cómo la usan", html: "<p><b>Lower respiratory tract infection</b> o <i>chest infection</i>: tos aguda con al menos un síntoma o signo bajo (expectoración, disnea, sibilancias, dolor torácico), sin otra explicación. Incluye la bronquitis aguda; la neumonía es un subgrupo con sospecha clínica o radiológica.</p>" },
      { h: "Lo que mostró ARTIC PC", html: "<p>En 432 niños de 6 meses a 12 años con LRTI no complicada, sin sospecha de neumonía, la amoxicilina no acortó los síntomas frente a placebo, tampoco en los que tenían fiebre, signos en el tórax o se veían mal. Conclusión del ensayo: pautas de alarma y no antibiótico para la mayoría.</p>" }
    ],
    diferenciales: [
      { dx: "Neumonía", nodo: "nac", claves: "<ul><li>Hipoxemia, aumento del trabajo respiratorio, mal estado o hallazgos focales: salir de la «LRTI no complicada».</li></ul>" }
    ],
    evidencia: ["little2021"],
    pico: [
      { p: "Niños de 6 meses a 12 años con infección respiratoria baja no complicada, sin sospecha de neumonía", i: "Amoxicilina 50 mg/kg/día por 7 días", c: "Placebo", o: "Duración de los síntomas moderados o peores",
        respuesta: "Sin diferencia: 5 días con amoxicilina frente a 6 con placebo (HR 1,13; IC 95 % 0,90 a 1,42), también en los subgrupos.",
        certeza: "Alta", refs: ["little2021"] }
    ],
    ateneos: [],
    conexiones: ["irab-investigar"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "irab-investigar", nivel: 2, mapa: "irab", titulo: "Al leer evidencia: ¿qué definición usaron?", corto: "Definición y evidencia", tipo: "concepto",
    x: 310, y: 490,
    resumen: "La misma palabra cubre poblaciones distintas. Antes de aplicar un estudio, mirar edad, episodio, si exigió radiografía y dónde se hizo.",
    teoria: [
      { h: "Preguntas para cada artículo", html: "<ol class=\"pasos\"><li><b>Edad:</b> ¿menores de 12 o de 24 meses? ¿Incluye escolares?</li><li><b>Definición:</b> ¿clínica (OMS), radiológica (OMS de punto final) o del médico tratante?</li><li><b>Episodio:</b> ¿primero o recurrente?</li><li><b>Ámbito:</b> ¿atención primaria, guardia, internación? ¿País de bajos o altos ingresos?</li><li><b>Etiología:</b> ¿hubo confirmación microbiológica?</li></ol>" },
      { h: "Ejemplos", html: "<ul><li>PERCH y la OMS estudiaron neumonía grave en países de ingresos bajos: más bacterias y tuberculosis que en una guardia de Buenos Aires.</li><li>EPIC incluyó niños internados con neumonía radiográfica en EE. UU.</li><li>ARTIC PC, en cambio, excluyó la sospecha de neumonía.</li></ul>" }
    ],
    diferenciales: [],
    evidencia: ["perch2019", "jain2015", "little2021", "dutron2026"], pico: [], ateneos: [],
    conexiones: ["nac-etiologia"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "nac", nivel: 1, mapa: "irab", titulo: "Neumonía adquirida en la comunidad", corto: "NAC", tipo: "concepto", causa: ["viral", "bacteriana"],
    x: 630, y: 150,
    resumen: "Infección aguda del parénquima pulmonar adquirida fuera del hospital, viral o bacteriana. El problema de la guardia no es tratarla: es decidir quién la tiene y quién necesita antibiótico.",
    teoria: [
      { h: "Definición y peso", html: "<p>Infección aguda del parénquima pulmonar adquirida en la comunidad, en un niño previamente sano, de causa viral o bacteriana. Es una de las principales causas infecciosas de muerte en menores de 5 años en el mundo; en nuestro medio, una de las primeras causas de internación pediátrica en invierno.</p>" },
      { h: "Las tres incertidumbres", html: "<ol class=\"pasos\"><li><b>Diagnóstica:</b> ningún signo aislado la confirma y la radiografía tiene variabilidad entre lectores.</li><li><b>Etiológica:</b> ni la clínica, ni el laboratorio, ni la placa separan con seguridad virus de bacteria.</li><li><b>Terapéutica:</b> de ahí surge la variabilidad en pedir radiografía y en indicar antibiótico.</li></ol>" },
      { h: "El recorrido en la guardia", html: "<ol class=\"pasos\"><li>¿Es una IRAB baja? Contar la frecuencia respiratoria, mirar el trabajo respiratorio, medir la saturación.</li><li>¿Hay gravedad? Signos de peligro, SatO₂ menor de 92 %, mal estado.</li><li>¿Necesito una placa? Solo si cambia la conducta.</li><li>¿Puede ser bacteriana? Edad, fiebre alta, aspecto tóxico, foco, laboratorio si se pidió.</li><li>Tratar o no, y con qué. Pautas de alarma y control.</li></ol>" },
      { h: "Una pregunta abierta en la CEP del HIBA", html: "<p>Hay una tesis de la Maestría en Investigación Clínica del Hospital Italiano en marcha sobre este tema. Es un estudio transversal en niños de 3 a 59 meses atendidos en la guardia con sospecha de NAC, que analiza cómo se combinan la radiografía y el antibiótico y cuánto antibiótico reciben los episodios con placa negativa o equívoca. Ver <a href=\"#nac-rx-atb\">Rx y antibiótico</a>.</p>" }
    ],
    diferenciales: [
      { dx: "Bronquiolitis", nodo: "bronquiolitis", claves: "<ul><li>Menor de 2 años, pródromo catarral, hallazgos difusos y simétricos (sibilancias, rales), fiebre baja o ausente.</li><li>Epidemia de VSR en la comunidad.</li></ul>" },
      { dx: "Crisis asmática con atelectasia", nodo: "crisis", claves: "<ul><li>Episodios previos, sibilancias difusas, mejora con broncodilatador.</li><li>Opacidad con pérdida de volumen en la placa.</li></ul>" },
      { dx: "Aspiración de cuerpo extraño", nodo: "sr-alternativas", claves: "<ul><li>Atragantamiento, inicio brusco, hallazgos unilaterales persistentes, neumonía que se repite en el mismo lugar.</li></ul>" },
      { dx: "Insuficiencia cardíaca", nodo: "cc-icc", claves: "<ul><li>Lactante con taquipnea, sudoración con la alimentación, mal progreso de peso, hepatomegalia, soplo; cardiomegalia en la placa.</li></ul>" },
      { dx: "Tuberculosis", claves: "<ul><li>Neumonía que no responde, adenopatías hiliares, contacto adulto con tos crónica, pérdida de peso.</li></ul>" },
      { dx: "Tos convulsa", nodo: "neu-pertussis", claves: "<ul><li>Lactante sin fiebre con accesos de tos, apneas o cianosis y linfocitosis.</li></ul>" }
    ],
    evidencia: ["bradley2011", "sap2021irab", "meyersauteur2024", "dutron2026"], pico: [], ateneos: [],
    conexiones: ["nac-clinica", "nac-etiologia", "nac-rx", "nac-atb", "nac-internacion"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "nac-clinica", nivel: 1, mapa: "irab", titulo: "¿Tiene neumonía? Lo que pesa en el examen", corto: "La clínica", tipo: "concepto",
    x: 480, y: 140,
    resumen: "La hipoxemia (SatO₂ ≤ 96 %) y el aumento del trabajo respiratorio pesan más que la taquipnea o la auscultación. Una saturación normal la hace menos probable.",
    teoria: [
      { h: "La revisión de JAMA (2017)", html: "<div class=\"tabla\"><table><thead><tr><th>Hallazgo</th><th>LR</th><th>Lectura</th></tr></thead><tbody><tr><td>SatO₂ ≤ 96 %</td><td>2,8</td><td>El que más suma</td></tr><tr><td>Quejido, aleteo o tiraje</td><td>2,1</td><td>Suma</td></tr><tr><td>Fiebre > 37,5 °C</td><td>1,7–1,8</td><td>Poco</td></tr><tr><td>FR > 40/min</td><td>1,5</td><td>Poco</td></tr><tr><td>Auscultación (crepitantes, hipoventilación)</td><td>—</td><td>No se asoció</td></tr><tr><td>SatO₂ > 96 %</td><td>0,47</td><td>Resta</td></tr></tbody></table></div><p>Patrón de referencia: infiltrado en la radiografía. Prevalencia de neumonía radiográfica en los estudios norteamericanos: alrededor del 19 %.</p>" },
      { h: "Datos que se asocian con infiltrado", html: "<p>Además del quejido, el tiraje y la hipoxemia: antecedente de fiebre, crepitantes, taquipnea y la <b>impresión clínica global</b>. Ninguno decide solo; juntos ordenan la probabilidad.</p>" },
      { h: "Neumonía oculta", html: "<p>Fiebre alta (de más de 5 días o con leucocitosis marcada) y tos <b>sin</b> taquipnea ni signos bajos: entre 5 y 19 % tienen un infiltrado en la placa. Es una de las situaciones en que la radiografía sí está indicada aunque el examen sea normal.</p>" }
    ],
    diferenciales: [
      { dx: "Bronquiolitis", nodo: "bronquiolitis", claves: "<ul><li>También hipoxemia y tiraje, pero con sibilancias y rales difusos, en lactantes, durante la epidemia.</li></ul>" },
      { dx: "Sepsis o infección grave sin foco", claves: "<ul><li>Taquipnea por acidosis o fiebre con mal relleno capilar y taquicardia desproporcionada; buscar otro foco.</li></ul>" }
    ],
    evidencia: ["shah2017", "bradley2011"],
    pico: [
      { p: "Niños con sospecha de neumonía", i: "SatO₂ ≤ 96 % o aumento del trabajo respiratorio", c: "Ausencia del hallazgo", o: "Neumonía radiográfica",
        respuesta: "Hipoxemia moderada LR 2,8; trabajo respiratorio aumentado LR 2,1; SatO₂ > 96 % LR 0,47. Taquipnea y auscultación aportan poco.",
        certeza: "Moderada", refs: ["shah2017"] }
    ],
    ateneos: [],
    conexiones: ["nac-rx", "irab-oms"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "nac-etiologia", nivel: 1, mapa: "irab", titulo: "Etiología según la edad", corto: "Etiología", tipo: "concepto", causa: ["viral", "bacteriana", "atipica"],
    x: 780, y: 140,
    resumen: "En menores de 5 años predominan los virus (VSR primero). Neumococo es la bacteria principal; Mycoplasma crece desde los 5 años.",
    teoria: [
      { h: "Qué dicen los grandes estudios", html: "<ul><li><b>EPIC (EE. UU., internados):</b> virus en el 66 %, bacterias en el 8 %. VSR en el 37 % de los menores de 5 años; Mycoplasma en el 19 % de los de 5 años o más.</li><li><b>PERCH (África y Asia, neumonía grave):</b> virus 61 % (VSR 31 %), bacterias 27 %, tuberculosis 6 %. Las bacterias pesaron más en los casos muy graves.</li><li>Con las vacunas conjugadas contra neumococo y Hib, el peso de las bacterias bajó.</li></ul>" },
      { h: "Por edad", html: "<div class=\"tabla\"><table><thead><tr><th>Edad</th><th>Más frecuentes</th><th>No olvidar</th></tr></thead><tbody><tr><td>1 a 3 meses</td><td>VSR y otros virus</td><td>Chlamydia trachomatis, tos convulsa, estreptococo grupo B si es muy pequeño</td></tr><tr><td>3 meses a 5 años</td><td>Virus (VSR, rinovirus, metapneumovirus, influenza, adenovirus)</td><td>Neumococo; S. aureus si es necrotizante o tras influenza</td></tr><tr><td>5 años o más</td><td>Mycoplasma, neumococo, virus</td><td>Chlamydophila pneumoniae; tuberculosis</td></tr></tbody></table></div>" },
      { h: "Qué sugiere bacteria", html: "<p>Fiebre de 39 °C o más, aspecto tóxico, consolidación lobar, derrame, neutrofilia marcada o PCR muy alta. Ninguno es definitivo: la coinfección virus-bacteria es frecuente y la detección de un virus en el hisopado no descarta bacteria.</p>" }
    ],
    diferenciales: [],
    evidencia: ["jain2015", "perch2019", "meyersauteur2024"], pico: [], ateneos: [],
    conexiones: ["nac-bps", "neu-mycoplasma", "neu-viral"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "nac-rx", nivel: 1, mapa: "irab", titulo: "Radiografía de tórax: cuándo sí", corto: "¿Pedir Rx?", tipo: "concepto",
    x: 480, y: 260,
    resumen: "No se necesita para tratar a un niño estable en forma ambulatoria. Sí ante hipoxemia, dificultad importante, fracaso del tratamiento, internación o fiebre prolongada sin foco.",
    teoria: [
      { h: "Indicaciones (PIDS/IDSA 2011)", html: "<ul><li>Hipoxemia sospechada o documentada, o dificultad respiratoria importante.</li><li>Fracaso del tratamiento antibiótico inicial: buscar derrame, necrosis, absceso.</li><li>Niño que se interna.</li><li>Fiebre prolongada y tos aun sin taquipnea (neumonía oculta).</li><li><b>No de rutina</b> para confirmar la neumonía en el niño que se trata ambulatoriamente, ni para control si evoluciona bien.</li></ul>" },
      { h: "Por qué no siempre", html: "<ul><li>No distingue virus de bacteria.</li><li>Hay desacuerdo entre lectores, sobre todo fuera de la consolidación.</li><li>En el ensayo pediátrico de la revisión Cochrane (522 niños ambulatorios) hacerla no mejoró la recuperación.</li><li>Radiación, tiempo y costos.</li><li>Y un efecto menos visible: <b>pedirla se asocia con dar más antibiótico</b>, independientemente del resultado.</li></ul>" },
      { h: "Ecografía pulmonar", html: "<p>En un metaanálisis de 30 estudios, la ecografía tuvo sensibilidad de 94 % y especificidad de 86 % (radiografía: 89 % y 91 %). Sin radiación y repetible, pero depende del operador y tampoco dice la causa.</p>" }
    ],
    diferenciales: [],
    evidencia: ["bradley2011", "cao2013", "andronikou2017", "vandemaat2021", "shi2024"],
    pico: [
      { p: "Niños ambulatorios con infección respiratoria baja, sin enfermedad grave", i: "Radiografía de tórax además del juicio clínico", c: "Juicio clínico solo", o: "Tiempo de recuperación",
        respuesta: "Sin diferencia: mediana de recuperación de 7 días en ambos grupos. Evidencia limitada (un ensayo pediátrico).",
        certeza: "Baja", refs: ["cao2013"] }
    ],
    ateneos: [],
    conexiones: ["nac-rx-lectura", "nac-rx-atb"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "nac-rx-lectura", nivel: 2, mapa: "irab", titulo: "Leer la Rx: compatible, equívoca o negativa", corto: "Leer la Rx", tipo: "concepto",
    x: 630, y: 270,
    resumen: "La consolidación es lo único que los lectores reconocen con buena concordancia. Los infiltrados peribronquiales o parcheados son la zona gris.",
    teoria: [
      { h: "Tres categorías", html: "<div class=\"tabla\"><table><thead><tr><th>Categoría</th><th>Qué se ve</th></tr></thead><tbody><tr><td><b>Compatible con neumonía</b></td><td>Consolidación (opacidad densa o confluente, con o sin broncograma aéreo) o derrame pleural asociado a infiltrado: la neumonía «de punto final» de la OMS</td></tr><tr><td><b>Equívoca</b></td><td>Otros infiltrados: opacidades lineales o parcheadas, engrosamiento peribronquial, atelectasias menores; placa técnicamente subóptima</td></tr><tr><td><b>Negativa</b></td><td>Sin consolidación, infiltrados ni derrame</td></tr></tbody></table></div><p>Categorías usadas por Geanacopoulos (2025) sobre informes radiológicos.</p>" },
      { h: "Cuánto pesa cada una", html: "<p>En la cohorte de Geanacopoulos, la mayoría de las placas fueron negativas (alrededor de 73 %), las equívocas cerca de 14 % y las compatibles 13 %.</p>" },
      { h: "Trampas", html: "<ul><li><b>Atelectasia</b> en bronquiolitis o asma: opacidad con pérdida de volumen.</li><li><b>Timo</b> en el lactante.</li><li>Placa espirada o rotada que simula infiltrados.</li><li>La consolidación «redonda» del niño pequeño que parece una masa.</li><li>La placa puede ser normal al comienzo y la consolidación aparecer después.</li></ul>" }
    ],
    diferenciales: [],
    evidencia: ["cherian2005", "fancourt2017", "geanacopoulos2025"], pico: [], ateneos: [],
    conexiones: ["nac-rx-atb", "nac-bps", "irab-neumonia-def"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "nac-rx-atb", nivel: 1, mapa: "irab", titulo: "Radiografía y antibiótico: la evidencia", corto: "Rx y antibiótico", tipo: "concepto",
    x: 780, y: 260,
    resumen: "La decisión de dar antibiótico depende más de la impresión clínica previa que del resultado de la placa. Con placa equívoca se trata con frecuencia.",
    teoria: [
      { h: "Tres estudios que lo muestran", html: "<ul><li><b>van de Maat 2021</b> (8 guardias, Países Bajos): hacer la radiografía se asoció con más antibiótico aun ajustando por la clínica y por el resultado (OR 7,25). El hallazgo de la placa no se asoció con la prescripción.</li><li><b>Lipshaw 2021</b>: la intención de tratar antes de ver la placa predijo el antibiótico (OR 6,4) con más fuerza que la neumonía radiográfica (OR 3,5).</li><li><b>Geanacopoulos 2025</b>: antibiótico en cerca del 8 % de las placas negativas, 71 % de las equívocas y 95 % de las compatibles.</li></ul>" },
      { h: "Qué significa para la práctica", html: "<ul><li>Antes de pedir la placa, preguntarse: <b>¿qué voy a hacer distinto según el resultado?</b></li><li>Una placa equívoca no convierte el cuadro en bacteriano: volver a la clínica (estado general, saturación, fiebre, evolución).</li><li>La discordancia entre placa y conducta no prueba por sí sola una prescripción inadecuada: la clínica puede justificarla.</li></ul>" },
      { h: "Medir la propia práctica", html: "<p>Los programas de optimización de antimicrobianos (PROA) empiezan por describir cómo se prescribe. En Argentina, un estudio de mejora de calidad en dos hospitales pediátricos aumentó el uso de antibióticos de espectro reducido. Caracterizar la combinación placa-antibiótico en la propia guardia es el primer paso para mejorarla.</p>" }
    ],
    diferenciales: [],
    evidencia: ["vandemaat2021", "lipshaw2021", "geanacopoulos2025", "proa2023", "jorrobaron2025"],
    pico: [
      { p: "Niños de 3 a 59 meses en la guardia con sospecha de NAC y radiografía negativa o equívoca", i: "Placa equívoca", c: "Placa negativa", o: "Indicación de antibiótico",
        respuesta: "En la cohorte de Geanacopoulos, alrededor de 71 % de las equívocas recibió antibiótico frente a 8 % de las negativas. En la CEP del HIBA está en curso un estudio transversal que busca estimarlo localmente.",
        certeza: "Baja", refs: ["geanacopoulos2025"] }
    ],
    ateneos: [],
    conexiones: ["nac-atb"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "nac-eco", nivel: 3, mapa: "irab", titulo: "Ecografía pulmonar", corto: "Ecografía", tipo: "concepto",
    x: 480, y: 380,
    resumen: "Sensible para consolidación y derrame, sin radiación. Útil en manos entrenadas; no reemplaza la clínica ni dice la causa.",
    teoria: [
      { h: "Qué muestra", html: "<ul><li>Consolidación subpleural con broncograma aéreo (dinámico en la neumonía, estático en la atelectasia).</li><li>Derrame pleural y si tiene tabiques: mejor que la radiografía para el derrame.</li><li>Líneas B confluentes en cuadros intersticiales o virales.</li></ul>" },
      { h: "Exactitud", html: "<p>Metaanálisis de 30 estudios (4546 niños): sensibilidad 94 %, especificidad 86 %. La radiografía: 89 % y 91 %.</p><p>Las consolidaciones pequeñas que no llegan a la pleura se pueden perder.</p>" }
    ],
    diferenciales: [],
    evidencia: ["shi2024"], pico: [], ateneos: [],
    conexiones: ["nac-rx", "nac-complicaciones"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "nac-bps", nivel: 2, mapa: "irab", titulo: "Bacterial Pneumonia Score (BPS)", corto: "BPS", tipo: "concepto",
    x: 630, y: 380,
    resumen: "Regla argentina que suma temperatura, edad, neutrófilos, cayados y radiografía. Con ≥ 4 sugiere bacteria; útil sobre todo para descartarla.",
    teoria: [
      { h: "Cómo se calcula", html: "<div class=\"tabla\"><table><thead><tr><th>Variable</th><th>Puntos</th></tr></thead><tbody><tr><td>Temperatura axilar ≥ 39 °C</td><td>3</td></tr><tr><td>Edad ≥ 9 meses</td><td>2</td></tr><tr><td>Neutrófilos ≥ 8000/mm³</td><td>2</td></tr><tr><td>Cayados ≥ 5 %</td><td>1</td></tr><tr><td>Radiografía (infiltrado, localización, derrame, absceso o neumatocele, atelectasia)</td><td>−3 a 7</td></tr></tbody></table></div><p>Rango total de −3 a 15. <b>4 o más</b> sugiere neumonía bacteriana.</p>" },
      { h: "Cuánto rinde", html: "<ul><li><b>Desarrollo (Moreno 2006):</b> sensibilidad 100 %, especificidad 93,8 %, valor predictivo negativo 100 %.</li><li><b>Validación externa (Karakachoff 2008):</b> sensibilidad 94 %, valor predictivo negativo 95 %, pero especificidad 34 %.</li><li>Ambos en niños <b>internados</b> con etiología identificada: aplicarlo en la guardia, en cuadros leves, requiere cautela.</li><li>Necesita hemograma y radiografía, que no se piden de rutina.</li></ul>" }
    ],
    diferenciales: [],
    evidencia: ["moreno2006", "karakachoff2008"], pico: [], ateneos: [],
    conexiones: ["nac-atb"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "nac-atb", nivel: 1, mapa: "irab", titulo: "Antibiótico: cuándo, cuál y cuánto", corto: "Antibiótico", tipo: "concepto", causa: "bacteriana",
    x: 780, y: 380,
    resumen: "No de rutina en el preescolar con cuadro viral. Si se trata: amoxicilina en dosis altas por 5 días. Macrólido solo si se sospecha un atípico.",
    teoria: [
      { h: "¿A quién?", html: "<ul><li>SAP (menores de 2 años): antibiótico empírico cuando no puede descartarse una causa bacteriana; no de rutina ante un cuadro compatible con infección viral.</li><li>PIDS/IDSA: el preescolar con NAC ambulatoria no requiere antibiótico de rutina, porque la mayoría es viral.</li><li>En la LRTI sin sospecha de neumonía, la amoxicilina no acorta los síntomas (ARTIC PC).</li></ul>" },
      { h: "Ambulatorio", html: "<ul><li><b>Amoxicilina</b> 80–90 mg/kg/día, en 2 o 3 tomas (máximo 4 g/día). Es la primera línea en el niño sano y vacunado.</li><li><b>Duración: 5 días</b> si mejora (SCOUT-CAP). En CAP-IT, 3 días y dosis más bajas no fueron inferiores en retratamiento.</li><li>Sospecha de atípico (escolar, comienzo gradual): <b>azitromicina</b> 10 mg/kg el día 1 y 5 mg/kg los días 2 a 5.</li><li>Alergia no grave a penicilina: cefalosporina oral; reacción grave: macrólido o según infectología.</li></ul>" },
      { h: "Internado", html: "<ul><li>Vacunación completa y sin complicaciones: <b>ampicilina</b> 150–200 mg/kg/día cada 6 horas.</li><li>Vacunación incompleta, gravedad o complicación: <b>ceftriaxona</b> 50–100 mg/kg/día.</li><li>Sospecha de S. aureus (necrosis, neumatoceles, postinfluenza): agregar cobertura según la epidemiología local.</li><li>Pasar a vía oral cuando mejora y tolera.</li></ul><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" }
    ],
    diferenciales: [],
    evidencia: ["bradley2011", "sap2021irab", "williams2022", "bielicki2021", "little2021"],
    pico: [
      { p: "Niños de 6 a 71 meses con NAC no grave que mejoran", i: "5 días de antibiótico", c: "10 días", o: "Respuesta clínica, síntomas y efectos adversos",
        respuesta: "Sin diferencias; la estrategia corta resultó al menos tan buena.", certeza: "Alta", refs: ["williams2022"] },
      { p: "Niños de 6 meses o más dados de alta con amoxicilina por NAC", i: "Dosis menor (35–50 mg/kg/día) y 3 días", c: "Dosis mayor (70–90 mg/kg/día) y 7 días", o: "Retratamiento a 28 días",
        respuesta: "No inferior en dosis ni en duración (alrededor de 12,5 % en todos los grupos). Con 3 días la tos duró un poco más (12 frente a 10 días).", certeza: "Moderada", refs: ["bielicki2021"] }
    ],
    ateneos: [],
    conexiones: ["nac-internacion", "neu-mycoplasma"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "nac-oculta", nivel: 3, mapa: "irab", titulo: "Neumonía oculta", corto: "Neumonía oculta", tipo: "concepto", causa: "bacteriana",
    x: 480, y: 500,
    resumen: "Fiebre alta y leucocitosis sin signos respiratorios: entre 5 y 19 % tienen infiltrado. La tos y la fiebre prolongada son la pista.",
    teoria: [
      { h: "Cuándo pensarla", html: "<ul><li>Fiebre alta sin foco claro, a veces con leucocitosis marcada (más de 20 000/mm³).</li><li>Fiebre de más de 5 días con tos, aunque no haya taquipnea ni dificultad.</li><li>Dolor abdominal con fiebre: la neumonía de base puede simular un abdomen agudo.</li><li>Neumonía de lóbulo superior con meningismo.</li></ul>" },
      { h: "Qué hacer", html: "<p>Radiografía de tórax. Es una de las pocas indicaciones con examen pulmonar normal.</p>" }
    ],
    diferenciales: [
      { dx: "Infección urinaria", claves: "<ul><li>Causa más frecuente de fiebre sin foco en lactantes: orina antes que placa si no hay tos.</li></ul>" },
      { dx: "Apendicitis", claves: "<ul><li>Dolor que empieza periumbilical y migra a la fosa ilíaca derecha, sin tos ni taquipnea.</li></ul>" }
    ],
    evidencia: ["bradley2011"], pico: [], ateneos: [],
    conexiones: ["nac-clinica", "nac-rx"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "nac-internacion", nivel: 1, mapa: "irab", titulo: "Gravedad: cuándo internar", corto: "Internar", tipo: "concepto",
    x: 630, y: 500,
    resumen: "Hipoxemia, dificultad respiratoria importante, aspecto tóxico, menor de 3 a 6 meses con sospecha bacteriana, intolerancia oral o un contexto que no asegura el control.",
    teoria: [
      { h: "Criterios de internación", html: "<ul><li>SatO₂ menor de 90–92 % (según la guía) con aire ambiente.</li><li>Dificultad respiratoria moderada a grave: quejido, aleteo, tiraje marcado, apneas, FR muy alta.</li><li>Aspecto tóxico, deshidratación o no tolera la vía oral.</li><li>Lactante menor de 3 a 6 meses con sospecha de neumonía bacteriana.</li><li>Patógeno de sospecha más agresiva (S. aureus extrahospitalario).</li><li>Complicación: derrame, necrosis, absceso.</li><li>Familia que no puede asegurar el tratamiento o el control.</li></ul>" },
      { h: "Signos de peligro OMS", html: "<p>No puede beber ni mamar, vomita todo, convulsiones, letargo o inconsciencia, estridor en reposo, desnutrición grave: neumonía grave.</p>" },
      { h: "Al alta", html: "<p>Pautas de alarma claras (respira más rápido o con esfuerzo, labios morados, no come, fiebre que no cede en 48 a 72 horas) y control a las 48 horas.</p>" }
    ],
    diferenciales: [],
    evidencia: ["bradley2011", "oms2014imci"], pico: [], ateneos: [],
    conexiones: ["nac-complicaciones", "oxigeno"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "nac-complicaciones", nivel: 2, mapa: "irab", titulo: "Mala evolución y complicaciones", corto: "Complicaciones", tipo: "concepto", causa: "bacteriana",
    x: 780, y: 500,
    resumen: "Fiebre que persiste más de 48 a 72 horas con tratamiento: buscar derrame o empiema, neumonía necrotizante, absceso o un diagnóstico equivocado.",
    teoria: [
      { h: "Qué buscar", html: "<ul><li><b>Derrame paraneumónico y empiema:</b> hipoventilación con matidez, dolor pleurítico; ecografía para ver cantidad y tabiques.</li><li><b>Neumonía necrotizante y absceso:</b> neumococo (serotipos como el 3 y el 19A) y S. aureus.</li><li><b>Neumatoceles</b>, típicos de S. aureus.</li><li>Bacteriemia, sepsis, síndrome urémico hemolítico asociado a neumococo (raro).</li></ul>" },
      { h: "Si no mejora, repensar", html: "<ul><li>¿Es un virus o un atípico? (la amoxicilina no cubre Mycoplasma).</li><li>¿Dosis o adherencia insuficientes?</li><li>¿Cuerpo extraño, tuberculosis, malformación o inmunodeficiencia de base?</li></ul>" }
    ],
    diferenciales: [
      { dx: "Tuberculosis", claves: "<ul><li>Adenopatías hiliares, contacto adulto, evolución subaguda; PPD o IGRA, jugo gástrico o esputo.</li></ul>" },
      { dx: "Malformación pulmonar congénita", claves: "<ul><li>Neumonías repetidas en el mismo lóbulo, imagen que no se normaliza: secuestro, malformación adenomatoidea quística.</li></ul>" }
    ],
    evidencia: ["bradley2011"], pico: [], ateneos: [],
    conexiones: ["nac-eco"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "neu-que", nivel: 1, mapa: "irab", titulo: "Neumonitis: qué llamamos así", corto: "¿Qué es neumonitis?", tipo: "concepto",
    x: 1025, y: 140,
    resumen: "Inflamación de predominio intersticial: virus, bacterias atípicas, Pneumocystis y causas no infecciosas (aspiración, hidrocarburos). La pista es la edad y el contexto.",
    teoria: [
      { h: "Qué la distingue de la neumonía típica", html: "<div class=\"tabla\"><table><thead><tr><th></th><th>Neumonía típica (lobar)</th><th>Neumonitis</th></tr></thead><tbody><tr><td>Comienzo</td><td>Brusco, fiebre alta</td><td>Gradual, fiebre baja o ausente</td></tr><tr><td>Tos</td><td>Puede faltar al inicio</td><td>Domina el cuadro</td></tr><tr><td>Examen</td><td>Foco: hipoventilación, soplo</td><td>Rales difusos, a veces sibilancias</td></tr><tr><td>Radiografía</td><td>Consolidación</td><td>Infiltrado intersticial bilateral, hiperinsuflación</td></tr><tr><td>Laboratorio</td><td>Neutrofilia, PCR alta</td><td>Variable; eosinofilia en Chlamydia, linfocitosis en tos convulsa</td></tr></tbody></table></div><p>Es una orientación, no una regla: hay superposición.</p>" },
      { h: "El germen según la edad y el contexto", html: "<ul><li><b>1 a 4 meses, afebril:</b> Chlamydia trachomatis, CMV, Ureaplasma; tos convulsa.</li><li><b>Lactantes y preescolares:</b> VSR, metapneumovirus, parainfluenza, influenza, adenovirus.</li><li><b>Escolares:</b> Mycoplasma pneumoniae y Chlamydophila pneumoniae.</li><li><b>Inmunocomprometidos o expuestos a VIH:</b> Pneumocystis jirovecii, CMV.</li><li><b>No infecciosa:</b> aspiración (trastorno deglutorio, reflujo), hidrocarburos, hipersensibilidad (aves, moho), fármacos.</li></ul>" }
    ],
    diferenciales: [],
    evidencia: ["meyersauteur2024", "jain2015"], pico: [], ateneos: [],
    conexiones: ["neu-afebril", "neu-mycoplasma", "neu-viral", "neu-aspirativa", "irab-neumonia-def"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "neu-afebril", nivel: 1, mapa: "irab", titulo: "Neumonitis afebril del lactante", corto: "Afebril del lactante", tipo: "concepto", causa: ["atipica", "viral"],
    x: 960, y: 250,
    resumen: "Lactante de 1 a 4 meses con tos en staccato, taquipnea y sin fiebre, que empeora en días o semanas. Chlamydia trachomatis es la causa clásica; también CMV y Ureaplasma.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Edad típica: 2 a 12 semanas, comienzo gradual.</li><li>Tos en staccato (seca, entrecortada, repetitiva), taquipnea, rales difusos; sibilancias poco frecuentes.</li><li><b>Sin fiebre</b> o con febrícula; buen estado general relativo.</li><li>Antecedente de conjuntivitis neonatal en la mitad de los casos por Chlamydia.</li><li>Eosinofilia en sangre periférica.</li><li>Radiografía: hiperinsuflación con infiltrados intersticiales bilaterales.</li></ul>" },
      { h: "Gérmenes", html: "<ul><li><b>Chlamydia trachomatis</b> (transmisión en el parto).</li><li><b>CMV</b>: congénito o perinatal; más grave en prematuros.</li><li><b>Ureaplasma urealyticum</b>.</li><li><b>Pneumocystis</b> si hay exposición al VIH o inmunodeficiencia.</li></ul>" }
    ],
    diferenciales: [
      { dx: "Tos convulsa", nodo: "neu-pertussis", claves: "<ul><li>Accesos con cianosis o apneas, vómitos tras la tos, bien entre accesos, linfocitosis (no eosinofilia).</li><li>Es lo más urgente de descartar.</li></ul>" },
      { dx: "Bronquiolitis", nodo: "bronquiolitis", claves: "<ul><li>Pródromo catarral, contexto epidémico, sibilancias; evolución en días, no en semanas.</li></ul>" },
      { dx: "Trastorno deglutorio o reflujo con aspiración", nodo: "neu-aspirativa", claves: "<ul><li>Tos o atoro con la alimentación, infiltrados en lóbulos posteriores o derechos.</li></ul>" },
      { dx: "Cardiopatía con hiperflujo pulmonar", nodo: "cc-icc", claves: "<ul><li>Taquipnea con sudoración al comer, soplo, hepatomegalia, cardiomegalia.</li></ul>" }
    ],
    evidencia: ["chiang2005"], pico: [], ateneos: [],
    conexiones: ["neu-chlamydia", "neu-pertussis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "neu-chlamydia", nivel: 2, mapa: "irab", titulo: "Chlamydia trachomatis", corto: "C. trachomatis", tipo: "concepto", causa: "atipica",
    x: 960, y: 370,
    resumen: "Transmitida en el parto. Conjuntivitis en las primeras semanas y neumonitis afebril entre las 2 y 12 semanas, con eosinofilia.",
    teoria: [
      { h: "Diagnóstico", html: "<ul><li>Sospecha clínica: lactante afebril con tos en staccato y taquipnea; conjuntivitis previa.</li><li>PCR o cultivo de aspirado nasofaríngeo.</li><li>Eosinofilia (más de 300–400/mm³) como dato orientador.</li><li><b>Estudiar y tratar a la madre y su pareja</b>: es una infección de transmisión sexual.</li></ul>" },
      { h: "Tratamiento", html: "<ul><li><b>Azitromicina</b> 20 mg/kg/día, una dosis diaria, por 3 días; o <b>eritromicina</b> 50 mg/kg/día en 4 tomas por 14 días.</li><li>Los macrólidos en menores de 6 semanas se asocian con estenosis hipertrófica de píloro: avisar a la familia y vigilar vómitos.</li></ul><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" }
    ],
    diferenciales: [],
    evidencia: ["chiang2005"], pico: [], ateneos: [],
    conexiones: ["neu-afebril"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "neu-mycoplasma", nivel: 1, mapa: "irab", titulo: "Mycoplasma pneumoniae", corto: "Mycoplasma", tipo: "concepto", causa: "atipica",
    x: 1090, y: 250,
    resumen: "Escolares y adolescentes: comienzo gradual, tos seca persistente, cefalea, febrícula, contactos con lo mismo. La amoxicilina no lo cubre.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li>Sobre todo desde los 5 años, aunque en brotes también afecta a preescolares.</li><li>Fiebre moderada, cefalea, malestar, odinofagia y una tos seca que domina y dura semanas.</li><li>Examen pulmonar con más hallazgos que lo esperable por el buen estado («neumonía que camina»).</li><li>Radiografía variable: infiltrados intersticiales o parcheados, a veces consolidación o derrame pequeño.</li><li>Brotes cada 1 a 4 años; hubo uno grande en 2023–2024.</li></ul>" },
      { h: "Fuera del pulmón", html: "<ul><li>Mucositis con poca piel (MIRM/RIME) y eritema multiforme.</li><li>Anemia hemolítica por crioaglutininas.</li><li>Encefalitis y otras complicaciones neurológicas.</li><li>Bronquiolitis obliterante como secuela rara.</li></ul>" },
      { h: "Diagnóstico y tratamiento", html: "<ul><li>PCR en hisopado faríngeo o nasofaríngeo; la serología sirve más en retrospectiva. La PCR puede quedar positiva semanas después (portación).</li><li><b>Azitromicina</b> 10 mg/kg el día 1 y 5 mg/kg los días 2 a 5. Alternativa: claritromicina.</li><li>Resistencia a macrólidos en aumento, sobre todo en Asia. Si no responde, doxiciclina o levofloxacina según la edad e infectología.</li></ul><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" }
    ],
    diferenciales: [
      { dx: "Neumonía neumocócica", nodo: "nac", claves: "<ul><li>Comienzo brusco, fiebre alta, aspecto tóxico, consolidación lobar, neutrofilia.</li></ul>" },
      { dx: "Neumonía viral", nodo: "neu-viral", claves: "<ul><li>Edad menor, contexto epidémico (VSR, influenza), sibilancias más frecuentes.</li></ul>" },
      { dx: "Tos convulsa en el escolar", nodo: "neu-pertussis", claves: "<ul><li>Tos en accesos de más de 2 semanas, vómitos tras la tos, sin hallazgos pulmonares ni infiltrados.</li></ul>" },
      { dx: "Tuberculosis", claves: "<ul><li>Evolución más larga, pérdida de peso, adenopatías hiliares, contacto adulto.</li></ul>" }
    ],
    evidencia: ["rowlands2024", "jain2015", "bradley2011"], pico: [], ateneos: [],
    conexiones: ["ex-mirm", "bo-postinfecciosa", "nac-atb"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "neu-pertussis", nivel: 1, mapa: "irab", titulo: "Tos convulsa (Bordetella pertussis)", corto: "Tos convulsa", tipo: "concepto", causa: "bacteriana",
    x: 1090, y: 370,
    resumen: "En el lactante pequeño puede no tener «gallo»: apneas, cianosis y vómitos después de la tos, con linfocitosis. Es la IRAB más letal del primer trimestre.",
    teoria: [
      { h: "Cómo se presenta", html: "<ul><li><b>Lactante menor de 3 meses:</b> accesos de tos con cianosis, apneas o bradicardia; puede faltar el estridor inspiratorio. Entre accesos se lo ve bien. Sin fiebre.</li><li><b>Niño mayor y adolescente:</b> tos en accesos de más de 2 semanas, gallo inspiratorio, vómitos tras la tos.</li><li>Leucocitosis con <b>linfocitosis</b>: cuanto más alta, más riesgo (hipertensión pulmonar, muerte).</li><li>Contacto con un adulto o hermano con tos prolongada.</li></ul>" },
      { h: "Qué hacer", html: "<ul><li>PCR en aspirado nasofaríngeo.</li><li><b>Azitromicina</b>: 10 mg/kg/día por 5 días en menores de 6 meses; 10 mg/kg el día 1 y 5 mg/kg los días 2 a 5 en mayores.</li><li>Internar a los menores de 3 a 6 meses y a los que tengan apneas o cianosis.</li><li>Notificar; quimioprofilaxis de los contactos cercanos.</li><li>Prevención: vacuna en cada embarazo y esquema completo del lactante.</li></ul><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" }
    ],
    diferenciales: [
      { dx: "Neumonitis afebril del lactante", nodo: "neu-afebril", claves: "<ul><li>Tos en staccato sin apneas, taquipnea, eosinofilia, conjuntivitis previa.</li></ul>" },
      { dx: "Bronquiolitis", nodo: "bronquiolitis", claves: "<ul><li>Taquipnea y rales o sibilancias persistentes, sin intervalos libres entre accesos.</li><li>El VSR también da apneas en el menor de 2 meses.</li></ul>" },
      { dx: "Cuerpo extraño", nodo: "sr-alternativas", claves: "<ul><li>Tos brusca tras atragantamiento en un niño que gatea o camina.</li></ul>" }
    ],
    evidencia: ["kilgore2016"], pico: [], ateneos: [],
    conexiones: ["neu-afebril", "bronquiolitis"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "neu-viral", nivel: 1, mapa: "irab", titulo: "Neumonías virales", corto: "Virales", tipo: "concepto", causa: "viral",
    x: 960, y: 490,
    resumen: "VSR, metapneumovirus, influenza, parainfluenza, adenovirus y SARS-CoV-2: la causa más frecuente de neumonía en menores de 5 años. Cada uno tiene su detalle.",
    teoria: [
      { h: "Virus a conocer", html: "<ul><li><b>VSR:</b> el principal en lactantes; neumonía y bronquiolitis se superponen.</li><li><b>Metapneumovirus:</b> clínica parecida al VSR, a edades algo mayores.</li><li><b>Influenza:</b> fiebre alta, mialgias; riesgo de sobreinfección por S. aureus y neumococo. Oseltamivir en internados, menores de 2 años y grupos de riesgo.</li><li><b>Adenovirus:</b> fiebre alta y prolongada, conjuntivitis, faringitis, PCR alta que simula bacteria. Puede ser grave y dejar <b>bronquiolitis obliterante</b>.</li><li><b>Sarampión:</b> neumonía como principal causa de muerte; exantema y Koplik.</li><li><b>SARS-CoV-2:</b> en general leve en niños.</li></ul>" },
      { h: "Implicancia práctica", html: "<p>Detectar un virus en el hisopado no excluye una bacteria (coinfección), pero un cuadro típicamente viral, con buen estado y sin hipoxemia importante, no necesita antibiótico.</p>" }
    ],
    diferenciales: [
      { dx: "Neumonía bacteriana", nodo: "nac", claves: "<ul><li>Aspecto tóxico, fiebre alta persistente, consolidación lobar o derrame, empeoramiento tras una mejoría inicial (sobreinfección).</li></ul>" },
      { dx: "Sarampión", nodo: "ex-sarampion", claves: "<ul><li>Pródromo catarral con conjuntivitis, Koplik y exantema descendente; vacunación incompleta.</li></ul>" }
    ],
    evidencia: ["jain2015", "perch2019"], pico: [], ateneos: [],
    conexiones: ["vsr", "bo-postinfecciosa", "nac-etiologia"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "neu-inmuno", nivel: 2, mapa: "irab", titulo: "Inmunocomprometidos: Pneumocystis y CMV", corto: "Pneumocystis y CMV", tipo: "concepto", causa: ["otra", "viral"],
    x: 1090, y: 490,
    resumen: "Hipoxemia desproporcionada a la radiografía en un lactante expuesto al VIH o un niño inmunodeprimido: pensar en Pneumocystis jirovecii.",
    teoria: [
      { h: "Pneumocystis jirovecii", html: "<ul><li>Lactantes de 3 a 6 meses expuestos al VIH o con VIH sin profilaxis, inmunodeficiencias primarias, oncológicos, trasplantados, corticoides prolongados.</li><li>Taquipnea e <b>hipoxemia marcada</b> con pocos hallazgos auscultatorios; LDH alta.</li><li>Infiltrado intersticial bilateral («vidrio esmerilado») o radiografía casi normal al inicio.</li><li>Diagnóstico: PCR o tinción en lavado broncoalveolar o esputo inducido.</li><li>Tratamiento: <b>trimetoprima-sulfametoxazol</b> en dosis altas por 21 días; corticoides si hay hipoxemia (en VIH). Profilaxis en los grupos de riesgo.</li></ul>" },
      { h: "CMV", html: "<p>Neumonitis en trasplantados, inmunodeficiencias y prematuros con infección perinatal. Ganciclovir según infectología.</p><p class=\"nota\">Verificar dosis con el vademécum institucional.</p>" }
    ],
    diferenciales: [],
    evidencia: ["perch2019"], pico: [], ateneos: [],
    conexiones: ["neu-afebril"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  {
    id: "neu-aspirativa", nivel: 2, mapa: "irab", titulo: "Neumonitis por aspiración e hidrocarburos", corto: "Aspiración e hidrocarburos", tipo: "concepto", causa: "otra",
    x: 1025, y: 575,
    resumen: "Química, no infecciosa al comienzo. Hidrocarburos: síntomas en las primeras 6 horas; no inducir el vómito ni dar antibiótico o corticoide de rutina.",
    teoria: [
      { h: "Hidrocarburos", html: "<ul><li>Kerosene, nafta, aceites de lámparas, solventes: los de baja viscosidad se aspiran con facilidad.</li><li>Tos, atoro o vómitos tras la ingesta; taquipnea, quejido y fiebre en las horas siguientes.</li><li>La radiografía puede ser normal al inicio: repetirla o reevaluar a las <b>6 horas</b>. Si a las 6 horas está asintomático y la placa es normal, puede irse.</li><li><b>No inducir el vómito</b> ni hacer lavado gástrico. Sin antibióticos ni corticoides profilácticos.</li></ul>" },
      { h: "Aspiración crónica o recurrente", html: "<ul><li>Niños con encefalopatía, trastornos deglutorios, reflujo importante o fístula traqueoesofágica.</li><li>Infiltrados en segmentos declive (posteriores de los lóbulos superiores, inferiores; el derecho con más frecuencia).</li><li>Si se sobreinfecta, cubrir la flora oral (amoxicilina-clavulánico).</li><li>Evaluación de la deglución.</li></ul>" }
    ],
    diferenciales: [
      { dx: "Cuerpo extraño", nodo: "sr-alternativas", claves: "<ul><li>Atragantamiento con un objeto o alimento sólido, hallazgos unilaterales, atrapamiento aéreo.</li></ul>" },
      { dx: "Neumonía bacteriana", nodo: "nac", claves: "<ul><li>Sin antecedente de ingesta ni de trastorno deglutorio; fiebre y foco desde el inicio.</li></ul>" }
    ],
    evidencia: ["tormoehlen2014"], pico: [], ateneos: [],
    conexiones: ["neu-que"],
    revision: { estado: "borrador", revisor: null, fecha: null }
  },
  /*hs-nodos*/
  {"id": "h-martinez1988", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Martinez 1988 · Pulmón chico antes del virus", "corto": "Martinez 1988", "etiqueta": "Pulmón chico antes del virus", "anio": 1988, "hilo": "hn", "estado": "matizado", "original": "Diminished lung function as a predisposing factor for wheezing respiratory illness in infants.", "fuente": "N Engl J Med 1988", "x": 273, "y": 546, "resumen": "En Tucson se midió la función pulmonar de recién nacidos antes de cualquier infección: los que tenían las vías aéreas más estrechas sibilaron más en el primer año.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Invirtió la pregunta. Se pensaba que la infección dañaba el pulmón; este estudio mostró que muchas veces el pulmón ya era más chico antes del virus. La sibilancia del lactante podía ser una cuestión de calibre de la vía aérea y no de asma.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente como mecanismo de las sibilancias transitorias: vías aéreas pequeñas, tabaquismo materno, prematurez. Explica por qué muchos lactantes que sibilan mejoran al crecer.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p><a href=\"#h-belgrave2018\">Belgrave 2018</a> mostró que la mayoría de los lactantes con función baja no sigue con función baja en la infancia: la vía aérea chica del lactante no es un destino fijo.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> No se sabía si las sibilancias con los virus se debían al virus, al niño o a ambos.</p><p><b>Pregunta.</b> ¿La función pulmonar medida al nacer, antes de cualquier infección, predice las sibilancias del primer año?</p><p><b>Métodos.</b> 124 recién nacidos de Tucson con función pulmonar medida antes de cualquier enfermedad respiratoria baja, seguidos durante el primer año.</p><p><b>Resultados.</b> Los que estaban en el tercio inferior de conductancia tuvieron 3,7 veces más riesgo de sibilancias (límite de significación). En varones con el índice de conductancia más bajo el riesgo fue 10 veces mayor; en niñas con volumen pulmonar bajo, 16 veces mayor.</p><p><b>Conclusiones.</b> La función pulmonar disminuida predispone al primer episodio de sibilancias.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["martinez1988"], "pico": [], "ateneos": [], "dialogo": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-martinez1995", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Martinez 1995 · Tucson: 3 patrones", "corto": "Martinez 1995", "etiqueta": "Tucson: 3 patrones", "anio": 1995, "hilo": "hn", "estado": "vigente", "original": "Asthma and wheezing in the first six years of life. The Group Health Medical Associates.", "fuente": "N Engl J Med 1995", "x": 381, "y": 600, "resumen": "El artículo fundacional de la cohorte de Tucson: no todo lactante que sibila tiene asma. Describió sibilancias transitorias tempranas, persistentes y de inicio tardío.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Separó a los lactantes que sibilan en grupos con pronóstico distinto. Los transitorios (20 %) tenían vía aérea chica desde antes y madres fumadoras, sin alergia; los persistentes (14 %) tenían madre con asma, IgE alta y función normal al nacer que empeoraba a los 6 años. Fue el origen de la idea de fenotipos.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente como mensaje central: la mayoría de los lactantes que sibilan no tendrá asma, y una minoría sí. Ese mensaje organiza la conversación con la familia.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Los fenotipos se definen mirando hacia atrás, a los 6 años: no sirven para decidir en el consultorio. <a href=\"#h-henderson2008\">Henderson 2008</a> encontró más patrones con otro método y <a href=\"#h-castro2000\">Castro-Rodríguez 2000</a> intentó llevarlo a la práctica con un índice predictivo.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Muchos lactantes sibilan con los virus, pero no se sabía cuántos tendrían asma.</p><p><b>Pregunta.</b> ¿Qué factores de la infancia distinguen a los lactantes cuyas sibilancias desaparecen de los que siguen sibilando a los 6 años?</p><p><b>Métodos.</b> Cohorte de 1246 recién nacidos en Tucson (1980 a 1984); 826 con datos a los 3 y 6 años. IgE en cordón y a los 9 meses, función pulmonar antes de cualquier infección, cuestionarios; a los 6 años, IgE, espirometría y pruebas cutáneas.</p><p><b>Resultados.</b> 51,5 % nunca sibiló; 19,9 % sibiló antes de los 3 y no a los 6 (transitorio); 15 % empezó después de los 3 (tardío); 13,7 % sibiló antes y después (persistente). Los transitorios tenían función pulmonar baja desde el nacimiento, sin alergia. Los persistentes tenían madre con asma, IgE alta y función normal al nacer que caía a los 6.</p><p><b>Conclusiones.</b> La mayoría de los lactantes que sibilan tiene un cuadro transitorio por vía aérea pequeña; una minoría tiene predisposición al asma.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["martinez1995"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-martinez1988", "rel": "apoya", "nota": "Usa la función pulmonar previa a toda infección para explicar el patrón transitorio."}], "conexiones": ["h-martinez1988"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-stein1999", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Stein 1999 · VSR y sibilancias hasta los 11", "corto": "Stein 1999", "etiqueta": "VSR y sibilancias hasta los 11", "anio": 1999, "hilo": "vi", "estado": "matizado", "original": "Respiratory syncytial virus in early life and risk of wheeze and allergy by age 13 years.", "fuente": "Lancet 1999", "x": 442, "y": 340, "resumen": "En la cohorte de Tucson, el VSR temprano aumentó las sibilancias hasta los 11 años, pero el efecto se apagó a los 13 y no se asoció con alergia.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Separó el VSR del camino alérgico: las sibilancias después del VSR serían por un efecto sobre la vía aérea y no por sensibilización. También mostró que el efecto se va con la edad.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: después de una bronquiolitis por VSR, muchos niños sibilan varios años y la mayoría mejora. Es la base del pronóstico que se le da a la familia.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p><a href=\"#h-sigurs2005\">Sigurs 2005</a>, con lactantes internados por VSR grave, sí encontró más alergia y asma a los 13 años: la gravedad y la población cambian la respuesta. <a href=\"#h-jackson2008\">Jackson 2008</a> mostró después que el rinovirus predice el asma con más fuerza que el VSR.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> No estaba claro si la bronquiolitis por VSR causaba asma, alergia o ninguna de las dos.</p><p><b>Pregunta.</b> ¿La infección respiratoria baja por VSR antes de los 3 años aumenta las sibilancias y la atopia hasta los 13 años?</p><p><b>Métodos.</b> Cohorte de nacimiento de Tucson. Las infecciones respiratorias bajas se confirmaron por médicos con estudio viral. Seguimiento hasta los 13 años con síntomas, función pulmonar, pruebas cutáneas e IgE.</p><p><b>Resultados.</b> El VSR se asoció con sibilancias infrecuentes (OR 3,2) y frecuentes (OR 4,3) a los 6 años. El riesgo bajó con la edad y no fue significativo a los 13. No hubo asociación con atopia. El VEF₁ fue más bajo, pero se igualó después del broncodilatador.</p><p><b>Conclusiones.</b> El VSR temprano es un factor de riesgo independiente de sibilancias hasta los 11 años, no a los 13, y no se explica por alergia.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["stein1999"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-martinez1995", "rel": "apoya", "nota": "Usa la misma cohorte de Tucson para mirar qué virus había detrás de las sibilancias tempranas."}], "conexiones": ["h-martinez1995"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-camp2000", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "CAMP 2000 · CI: controla, no cura", "corto": "CAMP 2000", "etiqueta": "CI: controla, no cura", "anio": 2000, "hilo": "ma", "estado": "vigente", "original": "Long-term effects of budesonide or nedocromil in children with asthma.", "fuente": "N Engl J Med 2000", "x": 470, "y": 850, "resumen": "Ensayo CAMP: en escolares con asma, la budesonida durante 4 a 6 años controló mucho mejor el asma pero no cambió la función pulmonar a largo plazo.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Fue la gran prueba de la idea de que tratar temprano la inflamación preservaría la función pulmonar. El corticoide inhalado fue claramente mejor para el control, pero no modificó el curso de la función pulmonar.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: el corticoide inhalado es la base del control del asma, y su efecto dura mientras se usa. El efecto sobre la talla es chico y temprano (un seguimiento posterior mostró que una parte persiste en la adultez).</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Planteó la pregunta siguiente: si en el escolar ya es tarde, ¿y en el preescolar? <a href=\"#h-guilbert2006\">Guilbert 2006</a> dio la misma respuesta.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Se recomendaban antiinflamatorios en el asma infantil, pero se sabía poco de su efecto a largo plazo.</p><p><b>Pregunta.</b> ¿La budesonida o el nedocromil durante años mejoran la función pulmonar de niños con asma leve a moderada?</p><p><b>Métodos.</b> 1041 niños de 5 a 12 años asignados a budesonida 200 µg dos veces por día, nedocromil o placebo durante 4 a 6 años, todos con salbutamol a demanda.</p><p><b>Resultados.</b> Sin diferencias en el VEF₁ posbroncodilatador. Con budesonida: menos hiperreactividad, menos internaciones (2,5 frente a 4,4 por 100 personas-año), menos consultas urgentes, menos prednisona. Talla 1,1 cm menor, sobre todo en el primer año.</p><p><b>Conclusiones.</b> La budesonida no es mejor que placebo para la función pulmonar, pero da mejor control del asma.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["camp2000"], "pico": [], "ateneos": [], "dialogo": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-castro2000", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Castro-Rodríguez 2000 · El IPA", "corto": "Castro-Rodríguez 2000", "etiqueta": "El IPA", "anio": 2000, "hilo": "pr", "estado": "matizado", "original": "A clinical index to define risk of asthma in young children with recurrent wheezing.", "fuente": "Am J Respir Crit Care Med 2000", "x": 470, "y": 698, "resumen": "El Índice Predictivo de Asma, armado con la cohorte de Tucson: sibilancias frecuentes antes de los 3 años más un criterio mayor o dos menores.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Llevó los fenotipos de Tucson al consultorio con datos simples: antecedentes de asma en los padres, eccema, rinitis, eosinofilia y sibilancias sin resfrío. Su fortaleza era descartar: más del 95 % de los niños con índice estricto negativo no tuvo asma activa en la edad escolar.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Sigue siendo la herramienta más usada y se enseña en las guías. Es útil para conversar el pronóstico y, sobre todo, para tranquilizar cuando es negativo.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Su capacidad para confirmar es moderada: cerca de un cuarto de los positivos no tuvo asma. <a href=\"#h-smit2015\">Smit 2015</a> mostró que ningún índice predice bien en las dos direcciones. Además, fue usado como criterio de inclusión en los ensayos de tratamiento (<a href=\"#h-guilbert2004\">Guilbert 2004</a>, <a href=\"#h-zeiger2011\">Zeiger 2011</a>), no como guía para elegir tratamiento en un niño.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> La mayoría del asma empieza en los primeros años, y hacía falta identificar temprano a los niños de alto riesgo.</p><p><b>Pregunta.</b> ¿Se puede predecir el asma escolar con datos clínicos simples de los primeros 3 años?</p><p><b>Métodos.</b> Datos de la cohorte de Tucson. Índice estricto: sibilancias frecuentes en los primeros 3 años más 1 criterio mayor (asma en los padres o eccema) o 2 menores (eosinofilia, sibilancias sin resfríos, rinitis alérgica). Índice laxo: cualquier sibilancia más los mismos criterios.</p><p><b>Resultados.</b> Con índice laxo positivo, el riesgo de asma activa de 6 a 13 años fue 2,6 a 5,5 veces mayor; con el estricto, 4,3 a 9,8 veces. Tuvo asma el 59 % de los laxos positivos y el 76 % de los estrictos positivos. Más del 95 % de los estrictos negativos nunca tuvo asma activa.</p><p><b>Conclusiones.</b> El asma escolar puede predecirse con razonable precisión con parámetros clínicos simples.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["castro2000"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-martinez1995", "rel": "apoya", "nota": "Convierte los fenotipos de Tucson en un índice que se puede usar antes de los 3 años."}], "conexiones": ["h-martinez1995"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-oommen2003", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Oommen 2003 · Prednisolona por los padres", "corto": "Oommen 2003", "etiqueta": "Prednisolona por los padres", "anio": 2003, "hilo": "cr", "estado": "vigente", "original": "Efficacy of a short course of parent-initiated oral prednisolone for viral wheeze in children aged 1-5 years: randomised controlled trial.", "fuente": "Lancet 2003", "x": 594, "y": 1110, "resumen": "La prednisolona iniciada por los padres al comienzo de un episodio de sibilancias virales no mejoró los síntomas ni evitó internaciones en niños de 1 a 5 años.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Puso a prueba una práctica muy difundida: dar a los padres corticoide oral para que lo inicien en casa. No sirvió, ni siquiera en los niños con marcadores de inflamación eosinofílica.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: no se recomienda dejar corticoide oral en casa para que los padres lo inicien en el preescolar con sibilancias virales.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>La pregunta se trasladó al hospital, con <a href=\"#h-panickar2009\">Panickar 2009</a>.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Se recomendaba que los padres iniciaran prednisolona oral ante los primeros signos de sibilancias virales, con evidencia contradictoria.</p><p><b>Pregunta.</b> ¿Un curso corto de prednisolona iniciado por los padres mejora los episodios de sibilancias virales en niños de 1 a 5 años?</p><p><b>Métodos.</b> 217 niños internados previamente por sibilancias virales, estratificados por marcadores de eosinófilos, asignados a prednisolona 20 mg por día durante 5 días o placebo para el siguiente episodio.</p><p><b>Resultados.</b> 120 niños tuvieron otro episodio con datos. Sin diferencias en síntomas diurnos o nocturnos ni en internaciones, en ningún estrato.</p><p><b>Conclusiones.</b> No hay beneficio claro de la prednisolona iniciada por los padres.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["oommen2003"], "pico": [], "ateneos": [], "dialogo": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-sears2003", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Sears 2003 · Dunedin: hasta los 26", "corto": "Sears 2003", "etiqueta": "Dunedin: hasta los 26", "anio": 2003, "hilo": "hn", "estado": "vigente", "original": "A longitudinal, population-based, cohort study of childhood asthma followed to adulthood.", "fuente": "N Engl J Med 2003", "x": 594, "y": 546, "resumen": "Cohorte de Dunedin, Nueva Zelanda, seguida de los 9 a los 26 años: más de 1 de cada 4 niños con sibilancias las mantuvo o recayó en la adultez.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Llevó la historia natural hasta la adultez en una cohorte no seleccionada. La remisión en la adolescencia muchas veces es transitoria, y lo que pasa en la infancia ya marca el pronóstico adulto.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: los ácaros, la hiperreactividad, fumar y el inicio temprano predicen persistencia y recaída. Hay que advertir que el asma que remite en la adolescencia puede volver.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p><a href=\"#h-mcgeachie2016\">McGeachie 2016</a> mostró además que una parte de los niños con asma persistente no alcanza la función pulmonar máxima y tiene riesgo de obstrucción fija.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> El pronóstico del asma infantil en la adultez se conocía por cohortes de alto riesgo, no poblacionales.</p><p><b>Pregunta.</b> ¿Qué factores predicen que el asma infantil persista o recaiga en la adultez?</p><p><b>Métodos.</b> Cohorte de todos los nacidos en Dunedin entre 1972 y 1973, evaluados repetidamente de los 9 a los 26 años con cuestionarios, espirometría, provocación bronquial y pruebas alérgicas.</p><p><b>Resultados.</b> El 51 % refirió sibilancias en más de una evaluación. 14,5 % con sibilancias persistentes, 27,4 % con remisión, 12,4 % con recaída. Ácaros (OR 2,4), hiperreactividad (OR 3), sexo femenino, fumar y el inicio temprano predijeron persistencia o recaída. La función pulmonar fue más baja en los persistentes.</p><p><b>Conclusiones.</b> El pronóstico del asma adulta parece definirse sobre todo en la infancia temprana.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["sears2003"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-martinez1995", "rel": "confirma", "nota": "Extiende a la adultez lo que Tucson vio a los 6 años: el pronóstico se define temprano."}], "conexiones": ["h-martinez1995"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-wainwright2003", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Wainwright 2003 · Adrenalina nebulizada", "corto": "Wainwright 2003", "etiqueta": "Adrenalina nebulizada", "anio": 2003, "hilo": "br", "estado": "vigente", "original": "A multicenter, randomized, double-blind, controlled trial of nebulized epinephrine in infants with acute bronchiolitis.", "fuente": "N Engl J Med 2003", "x": 594, "y": 134, "resumen": "Primer ensayo grande que probó un broncodilatador en lactantes internados con bronquiolitis y midió resultados que importan, no solo puntajes de un rato.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Hasta entonces, la mayoría de los estudios con broncodilatadores en bronquiolitis eran chicos y medían cambios en puntajes clínicos a los 30 a 60 minutos. Este ensayo multicéntrico australiano preguntó otra cosa: si la adrenalina cambiaba lo que vive la familia, es decir, cuánto dura la internación. La respuesta fue que no.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Sigue vigente: no hay que indicar adrenalina de rutina en el lactante internado con bronquiolitis. También quedó la lección de método: medir días de internación o necesidad de oxígeno, no solo el puntaje inmediato.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>La pregunta se reabrió en la guardia: <a href=\"#h-plint2009\">Plint 2009</a> probó la adrenalina combinada con dexametasona para evitar internaciones. Esa señal no se confirmó y <a href=\"#h-ralston2014\">AAP 2014</a> terminó desaconsejando la adrenalina.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> La bronquiolitis se trata sobre todo con medidas de sostén y el papel de los broncodilatadores era discutido.</p><p><b>Pregunta.</b> ¿La adrenalina nebulizada acorta la internación de lactantes hospitalizados por bronquiolitis?</p><p><b>Métodos.</b> Ensayo doble ciego en 4 hospitales de Queensland. 194 lactantes recibieron tres nebulizaciones de adrenalina al 1 % o de solución fisiológica, cada 4 horas, desde el ingreso.</p><p><b>Resultados.</b> No hubo diferencias en la duración de la internación ni en el tiempo hasta estar listos para el alta. En los más graves (con oxígeno e hidratación endovenosa), el grupo adrenalina tardó más en estar listo para el alta. La adrenalina subió la frecuencia cardíaca. La necesidad de oxígeno al ingreso fue lo que mejor predijo la duración de la internación.</p><p><b>Conclusiones.</b> La adrenalina nebulizada no aporta beneficios en el lactante internado con bronquiolitis.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["wainwright2003"], "pico": [], "ateneos": [], "dialogo": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-guilbert2004", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Guilbert 2004 · IPA modificado (PEAK)", "corto": "Guilbert 2004", "etiqueta": "IPA modificado (PEAK)", "anio": 2004, "hilo": "pr", "estado": "vigente", "original": "Atopic characteristics of children with recurrent wheezing at high risk for the development of childhood asthma.", "fuente": "J Allergy Clin Immunol 2004", "x": 634, "y": 698, "resumen": "Describe a los niños que entraron al ensayo PEAK con el IPA modificado, que agrega la sensibilización a aeroalérgenos como criterio mayor.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Introdujo el IPA modificado: la sensibilización a aeroalérgenos pasa a ser criterio mayor, y la alergia alimentaria, criterio menor. Mostró que el 61 % de estos niños de alto riesgo ya estaba sensibilizado.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: el IPA modificado es el que se usa en ensayos y guías. Anticipó que la sensibilización a aeroalérgenos sería la llave para elegir tratamiento.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Sirvió para seleccionar pacientes de ensayos; la respuesta individual al corticoide inhalado se predijo mejor después, con <a href=\"#h-fitzpatrick2016\">Fitzpatrick 2016</a>.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Pocos estudios habían caracterizado la alergia en preescolares con sibilancias frecuentes y alto riesgo de asma.</p><p><b>Pregunta.</b> ¿Qué perfil alérgico tienen los preescolares con sibilancias frecuentes y IPA modificado positivo?</p><p><b>Métodos.</b> 285 niños incluidos en el estudio PEAK por IPA modificado positivo, evaluados con cuestionarios y pruebas cutáneas.</p><p><b>Resultados.</b> El 60,7 % estaba sensibilizado a alimentos o aeroalérgenos. Los varones se sensibilizaban más a aeroalérgenos y tenían más eosinofilia (4 % o más) e IgE total alta.</p><p><b>Conclusiones.</b> La sensibilización a aeroalérgenos sería importante en el comienzo del asma; la cohorte es adecuada para probar si el corticoide inhalado temprano lo previene.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["guilbert2004"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-castro2000", "rel": "apoya", "nota": "Modifica el IPA y suma la sensibilización a aeroalérgenos como criterio mayor."}], "conexiones": ["h-castro2000"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-bisgaard2005", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Bisgaard 2005 · PREVIA: montelukast", "corto": "Bisgaard 2005", "etiqueta": "PREVIA: montelukast", "anio": 2005, "hilo": "ma", "estado": "superado", "original": "Montelukast reduces asthma exacerbations in 2- to 5-year-old children with intermittent asthma.", "fuente": "Am J Respir Crit Care Med 2005", "x": 676, "y": 850, "resumen": "Ensayo PREVIA: montelukast diario durante un año redujo un 32 % las crisis desencadenadas por virus en niños de 2 a 5 años con asma intermitente.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Ofreció una opción oral, sin corticoide, para el preescolar que sibila solo con los virus. Fue la base para que la ERS en 2008 recomendara montelukast en el episódico viral.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Queda como opción posible en algunos niños, siempre como prueba con revisión. GINA lo ubica como alternativa, no como primera opción.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>La revisión Cochrane <a href=\"#h-brodlie2015\">Brodlie 2015</a> no encontró que el montelukast redujera las crisis que necesitan corticoide oral en el episódico viral. <a href=\"#h-kaiser2016\">Kaiser 2016</a> mostró que el corticoide inhalado diario fue mejor. Además, se sumaron alertas por efectos neuropsiquiátricos.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Muchos preescolares tienen crisis con los virus y pocos síntomas entre episodios.</p><p><b>Pregunta.</b> ¿El montelukast diario previene las crisis desencadenadas por virus en niños de 2 a 5 años con asma intermitente?</p><p><b>Métodos.</b> Ensayo doble ciego, multicéntrico, de 12 meses. 549 niños con crisis asociadas a infecciones y síntomas mínimos entre episodios recibieron montelukast 4 o 5 mg o placebo.</p><p><b>Resultados.</b> Crisis por año: 1,60 con montelukast frente a 2,34 con placebo (32 % menos). Demoró la primera crisis unos 2 meses y redujo los cursos de corticoide inhalado.</p><p><b>Conclusiones.</b> El montelukast redujo las crisis en preescolares con asma intermitente.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["bisgaard2005"], "pico": [], "ateneos": [], "dialogo": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-sigurs2005", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Sigurs 2005 · VSR grave: asma a los 13", "corto": "Sigurs 2005", "etiqueta": "VSR grave: asma a los 13", "anio": 2005, "hilo": "vi", "estado": "matizado", "original": "Severe respiratory syncytial virus bronchiolitis in infancy and asthma and allergy at age 13.", "fuente": "Am J Respir Crit Care Med 2005", "x": 676, "y": 340, "resumen": "Cohorte sueca: los lactantes internados por bronquiolitis por VSR tenían a los 13 años mucho más asma y alergia que sus controles.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Mostró que el VSR grave, el que obliga a internar, se asocia con asma alérgica persistente en la adolescencia. Contradijo en parte a Tucson: acá sí había más alergia.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente como asociación: la bronquiolitis grave marca a un grupo con más riesgo de asma.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Una cohorte observacional no puede separar causa de marcador: ¿el VSR daña la vía aérea, o se internan los que ya tenían una vía aérea vulnerable? <a href=\"#h-blanken2013\">Blanken 2013</a> y <a href=\"#h-scheltema2018\">Scheltema 2018</a> lo probaron con un ensayo, y <a href=\"#h-kusel2007\">Kusel 2007</a> mostró que el riesgo depende de la sensibilización temprana.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Las cohortes poblacionales, como la de Tucson, incluían sobre todo infecciones leves.</p><p><b>Pregunta.</b> ¿La bronquiolitis por VSR que requiere internación se asocia con asma y alergia a los 13 años?</p><p><b>Métodos.</b> 47 niños internados por bronquiolitis por VSR en la infancia y 93 controles apareados, seguidos de forma prospectiva. A los 13 años: cuestionario, pruebas cutáneas, IgE y espirometría con prueba de aire seco y broncodilatador.</p><p><b>Resultados.</b> Asma o sibilancias recurrentes en el último año: 43 % frente a 8 %. Rinoconjuntivitis alérgica: 39 % frente a 15 %. Más sensibilización (50 % frente a 28 % en pruebas cutáneas). Leve obstrucción y algo más de reactividad bronquial.</p><p><b>Conclusiones.</b> La bronquiolitis por VSR grave es un factor de riesgo de asma alérgica en la adolescencia temprana.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["sigurs2005"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-stein1999", "rel": "matiza", "nota": "Con VSR grave e internado, encuentra lo que Tucson no: más alergia y asma a los 13."}], "conexiones": ["h-stein1999"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-bisgaard2006", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Bisgaard 2006 · PAC: CI intermitente", "corto": "Bisgaard 2006", "etiqueta": "PAC: CI intermitente", "anio": 2006, "hilo": "ma", "estado": "matizado", "original": "Intermittent inhaled corticosteroids in infants with episodic wheezing.", "fuente": "N Engl J Med 2006", "x": 716, "y": 904, "resumen": "Estudio PAC de Copenhague: budesonida inhalada en cursos de 2 semanas con cada episodio, desde el primer año de vida, no evitó la progresión a sibilancias persistentes ni acortó los episodios.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Probó la hipótesis de tratar cada episodio desde el inicio de la vida para frenar la progresión al asma. Fue negativo en todo: progresión, síntomas y duración de los episodios.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente para el lactante: el corticoide inhalado en dosis moderadas, intermitente, no sirve en las sibilancias episódicas del primer año ni previene el asma.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p><a href=\"#h-ducharme2009\">Ducharme 2009</a> mostró que en preescolares mayores con crisis virales moderadas a graves, dosis altas iniciadas con el resfrío sí reducen el corticoide oral. La población y la dosis cambian la respuesta.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Se pensaba que el asma está precedida por episodios de sibilancias tempranos y que tratar esos episodios podría demorar la progresión.</p><p><b>Pregunta.</b> ¿La budesonida inhalada durante cada episodio de sibilancias en los primeros 3 años previene la progresión a sibilancias persistentes?</p><p><b>Métodos.</b> Ensayo doble ciego en un centro, durante 3 años. 294 lactantes recibieron budesonida 400 µg por día o placebo durante 2 semanas tras cada episodio de 3 días de sibilancias. Resultado principal: días libres de síntomas.</p><p><b>Resultados.</b> Días libres de síntomas: 83 % frente a 82 %. Sibilancias persistentes: 24 % frente a 21 %. Episodios de 10 días en ambos grupos. Sin efectos sobre talla ni densidad ósea.</p><p><b>Conclusiones.</b> El corticoide inhalado intermitente no previene la progresión ni ayuda durante los episodios.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["bisgaard2006"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-guilbert2006", "rel": "confirma", "nota": "Publicado junto con PEAK: tampoco el esquema intermitente cambia la historia natural."}], "conexiones": ["h-guilbert2006"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-guilbert2006", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Guilbert 2006 · PEAK: no previene", "corto": "Guilbert 2006", "etiqueta": "PEAK: no previene", "anio": 2006, "hilo": "ma", "estado": "vigente", "original": "Long-term inhaled corticosteroids in preschool children at high risk for asthma.", "fuente": "N Engl J Med 2006", "x": 716, "y": 958, "resumen": "Ensayo PEAK: dos años de fluticasona en preescolares con IPA positivo controlaron los síntomas mientras se usó, pero no cambiaron el asma un año después de suspenderla.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Respondió la gran pregunta de la época: tratar temprano al preescolar de alto riesgo ¿previene el asma? No. El corticoide inhalado controla, pero no modifica la historia natural.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente y central para el ateneo: el corticoide inhalado se indica para controlar síntomas y prevenir crisis, no para prevenir el asma futura. Hay que explicárselo así a la familia.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>La pregunta pasó de si previene a quién se beneficia mientras lo usa: <a href=\"#h-zeiger2011\">Zeiger 2011</a> comparó esquemas y <a href=\"#h-fitzpatrick2016\">Fitzpatrick 2016</a> identificó a quiénes responden.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> No se sabía si el corticoide inhalado podía modificar el desarrollo del asma en preescolares de alto riesgo.</p><p><b>Pregunta.</b> ¿Dos años de corticoide inhalado en preescolares con IPA positivo cambian los síntomas y la función pulmonar después de suspenderlo?</p><p><b>Métodos.</b> 285 niños de 2 a 3 años con IPA modificado positivo recibieron fluticasona 88 µg dos veces por día o placebo durante 2 años y luego se observaron 1 año sin medicación. Resultado principal: días libres de episodios en el año de observación.</p><p><b>Resultados.</b> En el año sin tratamiento no hubo diferencias en días libres, crisis ni función pulmonar. Durante el tratamiento, la fluticasona aumentó los días libres y redujo las crisis. La talla fue 1,1 cm menor a los 24 meses y 0,7 cm menor al final.</p><p><b>Conclusiones.</b> El corticoide inhalado no modifica el desarrollo del asma una vez suspendido.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["guilbert2006"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-guilbert2004", "rel": "apoya", "nota": "Usa la cohorte seleccionada con el IPA modificado."}, {"con": "h-camp2000", "rel": "confirma", "nota": "Igual que en el escolar: controla mientras se usa, no cambia la historia."}], "conexiones": ["h-guilbert2004", "h-camp2000"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-corneli2007", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Corneli 2007 · Dexametasona en guardia", "corto": "Corneli 2007", "etiqueta": "Dexametasona en guardia", "anio": 2007, "hilo": "br", "estado": "vigente", "original": "A multicenter, randomized, controlled trial of dexamethasone for bronchiolitis.", "fuente": "N Engl J Med 2007", "x": 758, "y": 134, "resumen": "El ensayo más grande de corticoides en bronquiolitis: una dosis de dexametasona en la guardia no evitó internaciones.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Muchos pediatras usaban corticoides en la bronquiolitis por analogía con el asma, con estudios chicos y contradictorios. Este ensayo de la red PECARN, en 20 guardias de Estados Unidos, tuvo el tamaño suficiente para responder la pregunta en lactantes con bronquiolitis moderada a grave.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: los corticoides no están indicados en la bronquiolitis típica. Separó con claridad la bronquiolitis del lactante de la crisis asmática.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p><a href=\"#h-plint2009\">Plint 2009</a> sugirió que la dexametasona en dosis más altas y por más días, sumada a adrenalina, podría servir. Esa combinación no se adoptó: <a href=\"#h-ralston2014\">AAP 2014</a> recomienda no usar corticoides.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Los corticoides se usaban mucho en la bronquiolitis, pero la evidencia de su beneficio era escasa.</p><p><b>Pregunta.</b> ¿Una dosis de dexametasona oral en la guardia reduce las internaciones por bronquiolitis moderada a grave?</p><p><b>Métodos.</b> Ensayo doble ciego en 20 guardias, durante 3 temporadas. 600 lactantes de 2 a 12 meses con un primer episodio de sibilancias y bronquiolitis moderada a grave recibieron dexametasona 1 mg/kg o placebo. Resultado principal: internación tras 4 horas de observación.</p><p><b>Resultados.</b> Se internó el 39,7 % con dexametasona y el 41,0 % con placebo. Ambos grupos mejoraron igual en 4 horas y no hubo diferencias en los resultados posteriores.</p><p><b>Conclusiones.</b> Una dosis de dexametasona no cambia las internaciones ni la evolución en la bronquiolitis moderada a grave.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["corneli2007"], "pico": [], "ateneos": [], "dialogo": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-kusel2007", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Kusel 2007 · Virus + atopia temprana", "corto": "Kusel 2007", "etiqueta": "Virus + atopia temprana", "anio": 2007, "hilo": "vi", "estado": "vigente", "original": "Early-life respiratory viral infections, atopic sensitization, and risk of subsequent development of persistent asthma.", "fuente": "J Allergy Clin Immunol 2007", "x": 758, "y": 394, "resumen": "Cohorte de Perth: el virus temprano aumenta el riesgo de asma solo si el niño se sensibiliza a alérgenos antes de los 2 años. Dos golpes en la misma ventana.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Unió los dos caminos que se veían por separado, el viral y el alérgico. El riesgo máximo aparece cuando la infección baja y la sensibilización ocurren juntas en una ventana corta de la infancia.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente y central: explica por qué la sensibilización alérgica es la variable que más pesa en los índices predictivos y en la respuesta al corticoide inhalado.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Fue una cohorte de alto riesgo y chica; la interacción se confirmó con otros diseños, como <a href=\"#h-jackson2008\">Jackson 2008</a>.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Las infecciones respiratorias bajas graves y la sensibilización eran factores de riesgo de asma conocidos por separado.</p><p><b>Pregunta.</b> ¿Cómo interactúan las infecciones virales tempranas y la sensibilización alérgica en el riesgo de asma persistente?</p><p><b>Métodos.</b> 198 niños con alto riesgo atópico seguidos desde el nacimiento hasta los 5 años. Se registraron todas las infecciones respiratorias del primer año con aspirado nasofaríngeo para virus. Atopia evaluada a los 6 meses, 2 y 5 años.</p><p><b>Resultados.</b> 815 episodios; el 33 % fueron infecciones bajas. Virus en el 69 %, sobre todo rinovirus (48 %) y VSR (11 %). Las infecciones bajas con sibilancias o fiebre se asociaron con sibilancias a los 5 años (OR 3,4 a 4,1), pero solo en los sensibilizados antes de los 2 años.</p><p><b>Conclusiones.</b> Virus y atopia interactúan en la infancia; juntos en una ventana estrecha dan el máximo riesgo de asma.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["kusel2007"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-stein1999", "rel": "matiza", "nota": "Muestra que el riesgo viral depende de la sensibilización temprana, que Tucson no había mirado así."}, {"con": "h-sigurs2005", "rel": "matiza", "nota": "Da una explicación a la alergia que Sigurs encontró: el virus pesa más en el que ya se está sensibilizando."}], "conexiones": ["h-stein1999", "h-sigurs2005"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-brand2008", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Brand 2008 · ERS: episódico vs. múltiple", "corto": "Brand 2008", "etiqueta": "ERS: episódico vs. múltiple", "anio": 2008, "hilo": "pr", "estado": "superado", "original": "Definition, assessment and treatment of wheezing disorders in preschool children: an evidence-based approach.", "fuente": "Eur Respir J 2008", "x": 798, "y": 698, "resumen": "Grupo de trabajo de la ERS: propuso clasificar al preescolar que sibila por el patrón actual, episódico viral o por desencadenantes múltiples, y tratar según ese patrón.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Cambió el eje: en lugar de clasificar por la edad de inicio y el desenlace (como Tucson, que solo se sabe mirando atrás), clasificó por lo que se ve hoy. Episódico viral: sibila con los resfríos y está bien entre episodios. Múltiples desencadenantes: sibila también con ejercicio, risa, alérgenos o entre episodios. Propuso montelukast para el episódico y corticoide inhalado para el múltiple.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Quedan vigentes las medidas generales: salbutamol con aerocámara para el alivio, evitar el humo, educar a los padres, y tratar cualquier controlador como una prueba que se suspende si no sirve.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>La propia ERS lo revisó en <a href=\"#h-brand2014\">Brand 2014</a>: los patrones cambian con el tiempo. La recomendación de montelukast para el episódico no se sostuvo (<a href=\"#h-brodlie2015\">Brodlie 2015</a>). En 2024, <a href=\"#h-makrinioti2024\">Makrinioti 2024</a> concluyó que estos fenotipos no reflejan la patología de la vía aérea.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> No había acuerdo en cómo definir los distintos tipos de sibilancias del preescolar.</p><p><b>Pregunta.</b> ¿Cómo definir, evaluar y tratar las sibilancias del preescolar con la evidencia disponible?</p><p><b>Métodos.</b> Grupo de trabajo de expertos de la ERS que revisó la evidencia publicada.</p><p><b>Resultados.</b> Propuso dos términos: sibilancias episódicas virales y por desencadenantes múltiples. Estudios solo si hay dudas. Salbutamol con aerocámara. Corticoide inhalado para múltiples desencadenantes y montelukast para el episódico. Por el solapamiento, aceptó probar cualquiera de los dos y suspender si no hay beneficio.</p><p><b>Conclusiones.</b> Una clasificación clínica práctica, con la advertencia de que faltaban ensayos con pacientes bien definidos.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["brand2008"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-martinez1995", "rel": "apoya", "nota": "Cambia la clasificación retrospectiva de Tucson por una basada en el patrón actual."}, {"con": "h-bisgaard2005", "rel": "apoya", "nota": "Toma PREVIA como base para indicar montelukast en el episódico viral."}], "conexiones": ["h-martinez1995", "h-bisgaard2005"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-ducharme2008", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Ducharme 2008 · PRAM: medir la crisis", "corto": "Ducharme 2008", "etiqueta": "PRAM: medir la crisis", "anio": 2008, "hilo": "cr", "estado": "vigente", "original": "The Pediatric Respiratory Assessment Measure: a valid clinical score for assessing acute asthma severity from toddlers to teenagers.", "fuente": "J Pediatr 2008", "x": 798, "y": 1110, "resumen": "Validó el puntaje PRAM para medir la gravedad de la crisis de asma de los 2 a los 17 años: confiable, sensible al cambio y asociado con la internación.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Dio un idioma común para medir la crisis en niños pequeños, que no pueden hacer espirometría. Los ensayos de crisis empezaron a usarlo como resultado.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: el PRAM se usa en guardias y en el mapa (Cap. 12 de GINA) para clasificar la gravedad y decidir.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Es un puntaje clínico; no reemplaza el juicio sobre la saturación, el aspecto y la respuesta al tratamiento.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Hacía falta un puntaje clínico válido para la crisis de asma en niños de todas las edades.</p><p><b>Pregunta.</b> ¿El PRAM es válido, confiable y sensible al cambio en niños de 2 a 17 años con crisis de asma?</p><p><b>Métodos.</b> Cohorte prospectiva con más de 100 enfermeros y médicos que registraron el PRAM en el triage, tras el broncodilatador y al alta.</p><p><b>Resultados.</b> Se registró en el 81 % (782 niños). Se asoció con la internación (r 0,4 a 0,5), detectó el cambio tras el broncodilatador y tuvo buena consistencia y concordancia entre evaluadores en todas las edades.</p><p><b>Conclusiones.</b> El PRAM es un buen puntaje para evaluar la gravedad y la respuesta al tratamiento.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["ducharme2008"], "pico": [], "ateneos": [], "dialogo": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-henderson2008", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Henderson 2008 · ALSPAC: 6 patrones", "corto": "Henderson 2008", "etiqueta": "ALSPAC: 6 patrones", "anio": 2008, "hilo": "hn", "estado": "vigente", "original": "Associations of wheezing phenotypes in the first 6 years of life with atopy, lung function and airway responsiveness in mid-childhood.", "fuente": "Thorax 2008", "x": 798, "y": 546, "resumen": "Cohorte británica ALSPAC con más de 6000 niños: un método estadístico encontró seis patrones de sibilancias, y los de inicio después de los 18 meses fueron los más alérgicos.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Reemplazó los grupos definidos por el investigador (antes o después de los 3 años) por grupos que surgen de los datos (análisis de clases latentes). Apareció un fenotipo nuevo, el de inicio intermedio, el más asociado con atopia e hiperreactividad.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: el momento de inicio importa, y el niño que empieza a sibilar después del año y medio tiene más probabilidad de asma alérgica.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Los fenotipos dependen del método y de la cohorte; no se traducen fácilmente en una decisión individual. Ver <a href=\"#h-makrinioti2024\">Makrinioti 2024</a>.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Los patrones de sibilancias podrían indicar causas y pronósticos distintos.</p><p><b>Pregunta.</b> ¿Qué patrones de sibilancias de 0 a 7 años existen y cómo se asocian con atopia, función pulmonar e hiperreactividad?</p><p><b>Métodos.</b> 6265 niños de la cohorte ALSPAC con datos de sibilancias en 7 momentos hasta los 7 años. Análisis de clases latentes. A los 7 a 9 años: atopia, espirometría y metacolina.</p><p><b>Resultados.</b> Seis fenotipos. El de inicio intermedio (18 meses) tuvo la asociación más fuerte con atopia (OR 8,4) e hiperreactividad; el de inicio tardío (después de 42 meses) también. Los tempranos transitorios y prolongados no se asociaron con atopia.</p><p><b>Conclusiones.</b> Los fenotipos más alérgicos comienzan después de los 18 meses, lo que orienta sobre el momento de las exposiciones.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["henderson2008"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-martinez1995", "rel": "matiza", "nota": "Con un método basado en datos, encuentra seis patrones y uno nuevo, el intermedio."}], "conexiones": ["h-martinez1995"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-jackson2008", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Jackson 2008 · COAST: el rinovirus", "corto": "Jackson 2008", "etiqueta": "COAST: el rinovirus", "anio": 2008, "hilo": "vi", "estado": "vigente", "original": "Wheezing rhinovirus illnesses in early life predict asthma development in high-risk children.", "fuente": "Am J Respir Crit Care Med 2008", "x": 798, "y": 448, "resumen": "Cohorte COAST: las sibilancias por rinovirus en los primeros 3 años predijeron el asma a los 6 años mucho más que las del VSR.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Movió el foco del VSR al rinovirus. Con PCR multiplex se identificó el virus en el 90 % de los episodios, y el rinovirus resultó el mejor predictor de asma: casi 9 de cada 10 que sibilaron con rinovirus en el tercer año tenían asma a los 6.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: las sibilancias con rinovirus, sobre todo después del primer año, marcan al niño con más riesgo de asma. Es parte del razonamiento clínico ante un preescolar con sibilancias recurrentes.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>No resolvió si el rinovirus causa asma o revela a los que ya tienen predisposición. <a href=\"#h-bizzintino2011\">Bizzintino 2011</a> identificó al rinovirus C como el más agresivo.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Las sibilancias virales suelen preceder al asma, pero no se sabía si importaba qué virus las causaba.</p><p><b>Pregunta.</b> ¿Qué virus en los episodios de sibilancias de los primeros años predice más el asma a los 6 años?</p><p><b>Métodos.</b> 259 niños de alto riesgo seguidos desde el nacimiento hasta los 6 años en Wisconsin. Lavado nasal con cultivo y PCR multiplex en cada episodio de sibilancias.</p><p><b>Resultados.</b> Se identificó virus en el 90 % de los episodios. Sibilancias antes de los 3 años con VSR: OR 2,6 de asma a los 6; con rinovirus: OR 9,8. En el tercer año, el rinovirus (OR 25,6) pesó más que la sensibilización (OR 3,4). 26 de 30 niños que sibilaron con rinovirus en el tercer año tenían asma a los 6.</p><p><b>Conclusiones.</b> Entre las sibilancias virales tempranas, las del rinovirus son las que más predicen el asma.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["jackson2008"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-stein1999", "rel": "supera", "nota": "Con mejores técnicas virales, el rinovirus desplaza al VSR como predictor de asma."}, {"con": "h-kusel2007", "rel": "confirma", "nota": "Coincide en que virus y sensibilización temprana suman riesgo."}], "conexiones": ["h-stein1999", "h-kusel2007"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-castro2009", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Castro-Rodríguez 2009 · Metaanálisis: CI sí sirve", "corto": "Castro-Rodríguez 2009", "etiqueta": "Metaanálisis: CI sí sirve", "anio": 2009, "hilo": "ma", "estado": "vigente", "original": "Efficacy of inhaled corticosteroids in infants and preschoolers with recurrent wheezing and asthma: a systematic review with meta-analysis.", "fuente": "Pediatrics 2009", "x": 840, "y": 850, "resumen": "Metaanálisis de 29 ensayos: en lactantes y preescolares, el corticoide inhalado reduce casi a la mitad las crisis mientras se usa.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Después de los ensayos negativos sobre prevención, puso las cosas en su lugar: el corticoide inhalado sí sirve en el preescolar con sibilancias recurrentes, como tratamiento de control.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: sustenta el corticoide inhalado como controlador en el preescolar con sibilancias recurrentes frecuentes o con síntomas entre crisis.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Mostró un efecto mayor en los que tenían diagnóstico de asma que en los que solo sibilaban; la pregunta de quién responde la retomó <a href=\"#h-fitzpatrick2016\">Fitzpatrick 2016</a>.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Los ensayos en preescolares tenían resultados variables.</p><p><b>Pregunta.</b> ¿El corticoide inhalado reduce las crisis en lactantes y preescolares con sibilancias recurrentes o asma?</p><p><b>Métodos.</b> Revisión sistemática de ensayos de 1996 a 2008, con al menos 4 semanas de corticoide inhalado frente a placebo.</p><p><b>Resultados.</b> 29 ensayos, 3592 niños. Crisis: 18,0 % con corticoide inhalado frente a 32,1 % con placebo. Efecto mayor en asma que en sibilancias, sin diferencias por edad, atopia, fármaco o dispositivo. Menos abandonos por crisis y menos salbutamol.</p><p><b>Conclusiones.</b> El corticoide inhalado mejora síntomas y función pulmonar y reduce las crisis en preescolares.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["castro2009"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-camp2000", "rel": "confirma", "nota": "Lleva al preescolar el beneficio de control que CAMP vio en el escolar."}, {"con": "h-guilbert2006", "rel": "matiza", "nota": "Aunque no previene, el corticoide inhalado sí reduce las crisis mientras se usa."}], "conexiones": ["h-camp2000", "h-guilbert2006"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-ducharme2009", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Ducharme 2009 · CI en dosis alta con el resfrío", "corto": "Ducharme 2009", "etiqueta": "CI en dosis alta con el resfrío", "anio": 2009, "hilo": "ma", "estado": "vigente", "original": "Preemptive use of high-dose fluticasone for virus-induced wheezing in young children.", "fuente": "N Engl J Med 2009", "x": 840, "y": 1012, "resumen": "Fluticasona en dosis alta iniciada con el resfrío redujo a la mitad el uso de corticoide oral en preescolares con sibilancias virales moderadas a graves, con menor ganancia de talla y peso.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Rescató el esquema intermitente para un grupo distinto del de Bisgaard: preescolares con crisis virales moderadas a graves y dosis altas. Funcionó, pero con un costo en el crecimiento.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente con cautela: GINA acepta el corticoide inhalado intermitente en el preescolar con sibilancias virales sin síntomas entre episodios. Los autores advirtieron no adoptarlo hasta conocer los efectos a largo plazo, por el riesgo de sobreuso.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p><a href=\"#h-zeiger2011\">Zeiger 2011</a> probó una dosis más baja (budesonida 1 mg dos veces por día) con resultados similares al tratamiento diario, y <a href=\"#h-kaiser2016\">Kaiser 2016</a> confirmó el efecto en conjunto.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Las sibilancias virales son frecuentes en el preescolar y el tratamiento óptimo no estaba claro.</p><p><b>Pregunta.</b> ¿La fluticasona en dosis alta iniciada con el resfrío reduce la gravedad de las sibilancias virales recurrentes?</p><p><b>Métodos.</b> 129 niños de 1 a 6 años recibieron fluticasona 750 µg dos veces por día o placebo desde el inicio de cada resfrío y hasta 10 días, durante 6 a 12 meses. Resultado principal: uso de corticoide oral de rescate.</p><p><b>Resultados.</b> Corticoide oral en el 8 % de los resfríos con fluticasona frente al 18 % con placebo (OR 0,49). Menor ganancia de talla y peso. Sin diferencias en cortisol basal ni densidad ósea.</p><p><b>Conclusiones.</b> Reduce el corticoide oral, pero no debería adoptarse hasta aclarar los efectos a largo plazo.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["ducharme2009"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-bisgaard2006", "rel": "matiza", "nota": "En preescolares con crisis más graves y dosis más altas, el esquema intermitente sí funciona."}], "conexiones": ["h-bisgaard2006"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-panickar2009", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Panickar 2009 · Prednisolona en el hospital", "corto": "Panickar 2009", "etiqueta": "Prednisolona en el hospital", "anio": 2009, "hilo": "cr", "estado": "matizado", "original": "Oral prednisolone for preschool children with acute virus-induced wheezing.", "fuente": "N Engl J Med 2009", "x": 840, "y": 1164, "resumen": "En 700 preescolares que llegaban al hospital con sibilancias virales leves a moderadas, la prednisolona oral no acortó la internación frente a placebo.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Fue el ensayo más grande hasta entonces y sacudió una práctica universal. En el preescolar con sibilancias virales leves a moderadas, el corticoide oral no mostró beneficio.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente su mensaje principal: no dar corticoide oral de rutina en la crisis leve a moderada del preescolar con sibilancias virales.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p><a href=\"#h-foster2018\">Foster 2018</a> encontró una reducción modesta de la estadía en la guardia, y <a href=\"#h-lee2024\">Lee 2024</a>, con datos individuales, una reducción de unas 3 horas, mayor en quienes ya tenían sibilancias o asma. El beneficio existe, pero es chico y concentrado.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> El corticoide oral se usaba mucho en preescolares con sibilancias virales en el hospital, con evidencia contradictoria.</p><p><b>Pregunta.</b> ¿Un curso de 5 días de prednisolona oral acorta la internación en preescolares con sibilancias virales?</p><p><b>Métodos.</b> Ensayo doble ciego en 3 hospitales de Inglaterra. 700 niños de 10 a 60 meses recibieron prednisolona (10 o 20 mg por día) o placebo durante 5 días. Resultado principal: duración de la internación; también el puntaje PRAM.</p><p><b>Resultados.</b> Internación de 13,9 horas con placebo y 11,0 con prednisolona, sin diferencia significativa. Tampoco en PRAM, salbutamol, síntomas a 7 días ni efectos adversos.</p><p><b>Conclusiones.</b> En la crisis leve a moderada del preescolar, la prednisolona no fue superior al placebo.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["panickar2009"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-oommen2003", "rel": "confirma", "nota": "En el hospital, igual que en casa, la prednisolona no muestra beneficio."}, {"con": "h-ducharme2008", "rel": "apoya", "nota": "Usa el PRAM como resultado secundario."}], "conexiones": ["h-oommen2003", "h-ducharme2008"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-plint2009", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Plint 2009 · Adrenalina + dexametasona", "corto": "Plint 2009", "etiqueta": "Adrenalina + dexametasona", "anio": 2009, "hilo": "br", "estado": "superado", "original": "Epinephrine and dexamethasone in children with bronchiolitis.", "fuente": "N Engl J Med 2009", "x": 840, "y": 188, "resumen": "Ensayo factorial en guardias canadienses: solo la combinación de adrenalina con dexametasona redujo las internaciones a 7 días, y la diferencia dejó de ser significativa al ajustar por comparaciones múltiples.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Propuso que los dos fármacos que fallaban por separado podían actuar en sinergia. El diseño de 4 grupos permitió ver cada fármaco solo y la combinación con un mismo protocolo.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Queda como ejemplo de cómo leer un hallazgo secundario: un efecto en un subgrupo de un diseño factorial que no resiste el ajuste es una hipótesis, no una indicación.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>La combinación no se confirmó en otros ensayos y <a href=\"#h-ralston2014\">AAP 2014</a> no la recomienda. En la práctica actual no se usa.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> La adrenalina (<a href=\"#h-wainwright2003\">Wainwright 2003</a>) y la dexametasona (<a href=\"#h-corneli2007\">Corneli 2007</a>) por separado no habían mostrado beneficios claros.</p><p><b>Pregunta.</b> ¿Combinar adrenalina nebulizada con dexametasona oral reduce las internaciones de lactantes con bronquiolitis que consultan en la guardia?</p><p><b>Métodos.</b> Ensayo doble ciego, multicéntrico, con 800 lactantes de 6 semanas a 12 meses asignados a 4 grupos: adrenalina más dexametasona (1 mg/kg y luego 0,6 mg/kg durante 5 días), adrenalina sola, dexametasona sola o placebo doble. Resultado principal: internación hasta el día 7.</p><p><b>Resultados.</b> Se internó el 17,1 % con la combinación, el 23,7 % con adrenalina, el 25,6 % con dexametasona y el 26,4 % con placebo. Solo la combinación fue distinta del placebo sin ajustar (RR 0,65), pero dejó de ser significativa al ajustar por comparaciones múltiples (p = 0,07).</p><p><b>Conclusiones.</b> Los autores plantearon que la combinación podría reducir internaciones. Hoy se lee como una hipótesis no confirmada.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["plint2009"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-wainwright2003", "rel": "matiza", "nota": "Reabre la adrenalina, ahora combinada y en la guardia en lugar de en la sala."}, {"con": "h-corneli2007", "rel": "matiza", "nota": "Prueba la dexametasona en dosis más altas, por más días y junto con adrenalina."}], "conexiones": ["h-wainwright2003", "h-corneli2007"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-bizzintino2011", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Bizzintino 2011 · Rinovirus C", "corto": "Bizzintino 2011", "etiqueta": "Rinovirus C", "anio": 2011, "hilo": "vi", "estado": "vigente", "original": "Association between human rhinovirus C and severity of acute asthma in children.", "fuente": "Eur Respir J 2011", "x": 915, "y": 340, "resumen": "En niños de 2 a 16 años con crisis asmática en la guardia, el rinovirus C estaba en el 59 % y se asoció con crisis más graves.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>El rinovirus C se había descubierto poco antes. Este estudio mostró que no era un virus más: causaba la mayoría de las crisis que llegaban al hospital y las más graves.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: el rinovirus, y sobre todo el C, es el principal desencadenante de las crisis de asma en la infancia. Después se identificó su receptor (CDHR3), asociado con riesgo genético de asma.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Su papel como causa del asma, más allá de la crisis, sigue sin probarse.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Se había descubierto un grupo nuevo de rinovirus, el C, posiblemente más patógeno.</p><p><b>Pregunta.</b> ¿El rinovirus C está presente en las crisis asmáticas de los niños y las hace más graves?</p><p><b>Métodos.</b> 128 niños de 2 a 16 años con crisis asmática reclutados en una guardia de Perth. Gravedad clínica y aspirado nasal para virus y tipificación de rinovirus.</p><p><b>Resultados.</b> Rinovirus en el 87,5 %. El C estuvo en el 59 % y se asoció con puntajes de gravedad más altos que los rinovirus A o B y que el resto de los niños.</p><p><b>Conclusiones.</b> El rinovirus C causa la mayoría de las crisis que llegan al hospital y crisis más graves.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["bizzintino2011"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-jackson2008", "rel": "apoya", "nota": "Precisa qué rinovirus pesa más: el grupo C."}], "conexiones": ["h-jackson2008"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-zeiger2011", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Zeiger 2011 · MIST: diario = intermitente", "corto": "Zeiger 2011", "etiqueta": "MIST: diario = intermitente", "anio": 2011, "hilo": "ma", "estado": "vigente", "original": "Daily or intermittent budesonide in preschool children with recurrent wheezing.", "fuente": "N Engl J Med 2011", "x": 915, "y": 904, "resumen": "Ensayo MIST: en preescolares con IPA positivo y crisis previas, la budesonida intermitente en dosis alta fue tan eficaz como la diaria en dosis baja, con menos exposición total al fármaco.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Comparó directamente las dos estrategias que competían. En preescolares con pocos síntomas entre crisis, el esquema intermitente alcanzó lo mismo con un tercio menos de corticoide.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: sustenta la opción del corticoide inhalado intermitente en el preescolar con sibilancias virales y pocos síntomas entre episodios.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>El esquema intermitente requiere una familia que reconozca el inicio del resfrío; en niños con síntomas frecuentes entre episodios, el diario sigue siendo preferible (<a href=\"#h-kaiser2016\">Kaiser 2016</a>).</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> El corticoide inhalado diario se recomendaba para preescolares de riesgo, pero preocupaban la adherencia y la talla.</p><p><b>Pregunta.</b> ¿La budesonida diaria en dosis baja es mejor que la intermitente en dosis alta para prevenir crisis?</p><p><b>Métodos.</b> 278 niños de 12 a 53 meses con IPA modificado positivo, sibilancias recurrentes, al menos una crisis en el año previo y poca afectación entre crisis. Budesonida intermitente (1 mg dos veces por día durante 7 días con cada infección) o diaria (0,5 mg por la noche), con placebos cruzados.</p><p><b>Resultados.</b> Crisis con corticoide oral por año: 0,97 con el diario y 0,95 con el intermitente. Sin diferencias en otros resultados ni efectos adversos. El intermitente expuso a 104 mg menos de budesonida en el año.</p><p><b>Conclusiones.</b> El esquema diario no fue superior al intermitente y expuso a más fármaco.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["zeiger2011"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-guilbert2006", "rel": "apoya", "nota": "Usa la misma población definida por el IPA modificado, ahora para comparar estrategias."}, {"con": "h-ducharme2009", "rel": "confirma", "nota": "Confirma que el esquema intermitente sirve, con dosis menores."}], "conexiones": ["h-guilbert2006", "h-ducharme2009"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-blanken2013", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Blanken 2013 · MAKI: ¿el VSR causa?", "corto": "Blanken 2013", "etiqueta": "MAKI: ¿el VSR causa?", "anio": 2013, "hilo": "vi", "estado": "vigente", "original": "Respiratory syncytial virus and recurrent wheeze in healthy preterm infants.", "fuente": "N Engl J Med 2013", "x": 988, "y": 394, "resumen": "Ensayo MAKI: prevenir el VSR con palivizumab en prematuros sanos redujo un 61 % los días con sibilancias del primer año. Fue el primer argumento experimental de que el VSR causa sibilancias.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Respondió con un ensayo la pregunta que las cohortes no podían: si se previene el VSR, ¿hay menos sibilancias? Sí, y el efecto se mantuvo después de terminar el tratamiento. Eso implica al VSR como causa, no solo como marcador.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente para el primer año: el VSR es un mecanismo importante de las sibilancias recurrentes del lactante.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>El seguimiento a 6 años, <a href=\"#h-scheltema2018\">Scheltema 2018</a>, no mostró efecto sobre el asma diagnosticada por médicos ni la función pulmonar.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> El VSR se asocia con sibilancias recurrentes, pero las cohortes no pueden decir si es causa o la primera señal de una vía aérea vulnerable.</p><p><b>Pregunta.</b> ¿Prevenir el VSR con palivizumab en prematuros sanos reduce las sibilancias del primer año?</p><p><b>Métodos.</b> Ensayo doble ciego con 429 prematuros sanos de 33 a 35 semanas que recibieron palivizumab mensual o placebo durante la temporada. Resultado principal: días con sibilancias informados por los padres en el primer año.</p><p><b>Resultados.</b> Días con sibilancias: 1,8 % con palivizumab frente a 4,5 % con placebo (reducción relativa de 61 %). Sibilancias recurrentes: 11 % frente a 21 %.</p><p><b>Conclusiones.</b> El VSR es un mecanismo importante de sibilancias recurrentes en el primer año.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["blanken2013"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-stein1999", "rel": "apoya", "nota": "Pasa de la asociación al ensayo: prevenir el VSR reduce las sibilancias."}, {"con": "h-sigurs2005", "rel": "matiza", "nota": "Muestra que el VSR causa sibilancias, pero queda por ver si causa asma."}], "conexiones": ["h-stein1999", "h-sigurs2005"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-brand2014", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Brand 2014 · ERS: los patrones cambian", "corto": "Brand 2014", "etiqueta": "ERS: los patrones cambian", "anio": 2014, "hilo": "pr", "estado": "matizado", "original": "Classification and pharmacological treatment of preschool wheezing: changes since 2008.", "fuente": "Eur Respir J 2014", "x": 1024, "y": 698, "resumen": "Actualización del grupo de la ERS: la distinción entre episódico viral y desencadenantes múltiples no es estable; cualquier controlador es una prueba terapéutica y el corticoide oral se reserva para internados graves.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Es la ciencia corrigiéndose a sí misma: los mismos autores reconocieron que los patrones cambian con el tiempo y con el tratamiento. Ampliaron el corticoide inhalado al episódico con crisis frecuentes o graves y restringieron el corticoide oral.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: todo controlador en el preescolar es una prueba con fecha de control; si no sirve, se suspende. Tener en cuenta la evolución favorable antes de indicar tratamientos largos. El corticoide oral no va en las crisis leves a moderadas.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p><a href=\"#h-makrinioti2024\">Makrinioti 2024</a> dio el paso siguiente: dejar los fenotipos clínicos y buscar rasgos tratables. El corticoide oral se matizó con <a href=\"#h-foster2018\">Foster 2018</a> y <a href=\"#h-lee2024\">Lee 2024</a>.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Desde 2008 había aparecido mucha evidencia nueva.</p><p><b>Pregunta.</b> ¿Qué cambia en la clasificación y el tratamiento de las sibilancias del preescolar desde 2008?</p><p><b>Métodos.</b> Consenso internacional que revisó la evidencia nueva.</p><p><b>Resultados.</b> Los patrones varían con el tiempo y el tratamiento. Corticoide inhalado de primera línea en múltiples desencadenantes y considerarlo en el episódico frecuente o grave. Controlador como prueba con seguimiento cercano. Corticoide oral no indicado en crisis leves a moderadas.</p><p><b>Conclusiones.</b> Una clasificación más flexible y un tratamiento entendido como prueba.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["brand2014"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-brand2008", "rel": "supera", "nota": "Los mismos autores reconocen que los dos patrones no son estables."}, {"con": "h-panickar2009", "rel": "confirma", "nota": "Toma su resultado para no indicar corticoide oral en crisis leves a moderadas."}], "conexiones": ["h-brand2008", "h-panickar2009"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-ralston2014", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "AAP 2014 · Guía: menos es más", "corto": "AAP 2014", "etiqueta": "Guía: menos es más", "anio": 2014, "hilo": "br", "estado": "vigente", "original": "Clinical practice guideline: the diagnosis, management, and prevention of bronchiolitis.", "fuente": "Pediatrics 2014", "x": 1024, "y": 134, "resumen": "Guía de la Academia Americana de Pediatría: diagnóstico clínico, no salbutamol, no adrenalina, no corticoides, no radiografía de rutina, y aceptar saturación de 90 % o más.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Juntó una década de ensayos negativos y los convirtió en recomendaciones de no hacer. Fue más allá que la versión de 2006: desaconsejó también probar salbutamol y bajó el umbral de saturación aceptable a 90 %.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Sigue siendo la base del manejo: diagnóstico clínico, sostén (hidratación, oxígeno si hace falta), y evitar estudios y fármacos que no cambian la evolución.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>El umbral de 90 % se apoyaba más en consenso que en ensayos: <a href=\"#h-cunningham2015\">Cunningham 2015</a> aportó la evidencia que faltaba. La guía no se pronunciaba sobre la cánula de alto flujo, que se definió después con <a href=\"#h-paris2018\">Franklin 2018</a>.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> La guía de 2006 había dejado espacio para probar broncodilatadores y la práctica seguía siendo muy variable.</p><p><b>Pregunta.</b> ¿Qué deben hacer y qué no los pediatras ante un lactante de 1 a 23 meses con bronquiolitis?</p><p><b>Métodos.</b> Revisión de la evidencia por un comité de la AAP, con nivel de evidencia y fuerza de recomendación para cada enunciado.</p><p><b>Resultados.</b> Recomienda diagnóstico clínico; no salbutamol, no adrenalina, no corticoides sistémicos, no radiografía ni análisis de rutina, no antibióticos sin infección bacteriana; solución salina hipertónica solo en internados; permite no dar oxígeno con saturación de 90 % o más; palivizumab restringido a grupos de alto riesgo.</p><p><b>Conclusiones.</b> En la bronquiolitis típica, la mejor medicina es el sostén y evitar lo innecesario.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["ralston2014"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-wainwright2003", "rel": "confirma", "nota": "Toma su resultado como base para desaconsejar la adrenalina."}, {"con": "h-corneli2007", "rel": "confirma", "nota": "Desaconseja corticoides con este ensayo como evidencia central."}, {"con": "h-plint2009", "rel": "supera", "nota": "No adopta la combinación adrenalina más dexametasona."}], "conexiones": ["h-wainwright2003", "h-corneli2007", "h-plint2009"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-schuh2014", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Schuh 2014 · El número del oxímetro", "corto": "Schuh 2014", "etiqueta": "El número del oxímetro", "anio": 2014, "hilo": "br", "estado": "vigente", "original": "Effect of oximetry on hospitalization in bronchiolitis: a randomized clinical trial.", "fuente": "JAMA 2014", "x": 1024, "y": 188, "resumen": "Ensayo ingenioso en Toronto: mostrar en el oxímetro 3 puntos más que el valor real redujo las internaciones por bronquiolitis del 41 % al 25 %.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Mostró que el número del oxímetro, por sí solo, empuja la decisión de internar. Muchas internaciones se debían a una cifra y no al estado clínico del lactante.</p>"}, {"h": "Qué sigue vigente", "html": "<p>La saturación no debería ser el único criterio para internar a un lactante con bronquiolitis.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>No probó si los lactantes con valores más bajos evolucionaban igual de bien a largo plazo; eso lo respondió <a href=\"#h-cunningham2015\">Cunningham 2015</a> en internados.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Con el uso rutinario del oxímetro aumentaron las internaciones por bronquiolitis.</p><p><b>Pregunta.</b> ¿Si el oxímetro muestra una saturación artificialmente 3 puntos más alta, se internan menos lactantes?</p><p><b>Métodos.</b> Ensayo doble ciego en una guardia pediátrica. 213 lactantes de 4 semanas a 12 meses con bronquiolitis leve a moderada y saturación real de 88 % o más fueron monitoreados con oxímetros que mostraban el valor real o el valor más 3 puntos.</p><p><b>Resultados.</b> Se internó (o recibió más de 6 horas de atención) el 41 % con valores reales y el 25 % con valores alterados. No hubo diferencias en consultas no programadas ni en otros resultados secundarios.</p><p><b>Conclusiones.</b> La saturación no debería ser el único factor en la decisión de internar.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["schuh2014"], "pico": [], "ateneos": [], "dialogo": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-bacharier2015", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Bacharier 2015 · Azitromicina temprana", "corto": "Bacharier 2015", "etiqueta": "Azitromicina temprana", "anio": 2015, "hilo": "cr", "estado": "matizado", "original": "Early Administration of Azithromycin and Prevention of Severe Lower Respiratory Tract Illnesses in Preschool Children With a History of Such Illnesses: A Randomized Clinical Trial.", "fuente": "JAMA 2015", "x": 1061, "y": 1110, "resumen": "En preescolares con infecciones respiratorias bajas graves recurrentes, la azitromicina iniciada temprano en cada resfrío redujo el paso a una infección grave.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Abrió un camino distinto de los corticoides: si en la vía aérea del preescolar hay bacterias además de virus, o inflamación que responde a macrólidos, la azitromicina temprana podría cortar la progresión.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente como hallazgo, pero no como indicación de rutina: GINA no la recomienda por el riesgo de resistencia bacteriana.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Falta información sobre la resistencia con uso repetido y sobre qué niños se benefician.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Muchos preescolares tienen episodios graves recurrentes; además de los virus, las bacterias podrían contribuir.</p><p><b>Pregunta.</b> ¿La azitromicina iniciada temprano en cada infección respiratoria evita la progresión a una infección baja grave?</p><p><b>Métodos.</b> Ensayo doble ciego en 9 centros de la red AsthmaNet. 607 niños de 12 a 71 meses con infecciones bajas graves recurrentes recibieron azitromicina 12 mg/kg por día durante 5 días o placebo al inicio de cada infección, durante 12 a 18 meses.</p><p><b>Resultados.</b> Hubo 92 infecciones bajas graves (35 con azitromicina y 57 con placebo). La azitromicina redujo el riesgo de progresión (HR 0,64). Pocos organismos resistentes y pocos efectos adversos.</p><p><b>Conclusiones.</b> La azitromicina temprana reduce las infecciones bajas graves; falta información sobre resistencia.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["bacharier2015"], "pico": [], "ateneos": [], "dialogo": [], "conexiones": [], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-brodlie2015", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Brodlie 2015 · Cochrane: montelukast no", "corto": "Brodlie 2015", "etiqueta": "Cochrane: montelukast no", "anio": 2015, "hilo": "ma", "estado": "vigente", "original": "Leukotriene receptor antagonists as maintenance and intermittent therapy for episodic viral wheeze in children.", "fuente": "Cochrane Database Syst Rev 2015", "x": 1061, "y": 850, "resumen": "Revisión Cochrane: en el preescolar con sibilancias episódicas virales, el montelukast diario o intermitente no redujo las crisis que necesitan corticoide oral.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Juntó los ensayos posteriores a PREVIA, incluido el WAIT. Ni el montelukast diario ni el intermitente redujeron los episodios que requieren corticoide oral en el episódico viral.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: el montelukast no es una buena primera opción en el episódico viral. Si se usa, como prueba con revisión estricta y atención a los efectos neuropsiquiátricos.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Deja abierta la posibilidad de que algún subgrupo responda, según el mecanismo de cada niño.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> El montelukast se había propuesto para las sibilancias episódicas virales.</p><p><b>Pregunta.</b> ¿El montelukast diario o intermitente reduce las crisis que necesitan corticoide oral en preescolares con sibilancias episódicas virales?</p><p><b>Métodos.</b> Revisión sistemática Cochrane de ensayos aleatorizados en niños de 1 a 6 años.</p><p><b>Resultados.</b> 5 estudios, 3741 niños, todos con montelukast oral. Diario: sin reducción de episodios con corticoide oral (OR 1,20). Intermitente: tampoco (OR 0,77). Una pequeña reducción de consultas no programadas en un estudio.</p><p><b>Conclusiones.</b> No hay evidencia de beneficio del montelukast en el episódico viral; usarlo con cautela.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["brodlie2015"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-bisgaard2005", "rel": "supera", "nota": "El beneficio de PREVIA no se sostiene al juntar los ensayos que siguieron."}], "conexiones": ["h-bisgaard2005"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-cunningham2015", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Cunningham 2015 · BIDS: 90 % alcanza", "corto": "Cunningham 2015", "etiqueta": "BIDS: 90 % alcanza", "anio": 2015, "hilo": "br", "estado": "vigente", "original": "Oxygen saturation targets in infants with bronchiolitis (BIDS): a double-blind, randomised, equivalence trial.", "fuente": "Lancet 2015", "x": 1061, "y": 242, "resumen": "Ensayo británico con oxímetros modificados: apuntar a una saturación de 90 % o más fue tan seguro y eficaz como apuntar a 94 % o más.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Dio por primera vez evidencia de ensayo al umbral de 90 % que recomendaban la AAP y la OMS. El cegamiento con oxímetros modificados evitó que el equipo reaccionara a la cifra.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: en bronquiolitis se puede aceptar una saturación de 90 % o más en lactantes por lo demás sanos. Es el sustento de los umbrales que usan las guías actuales.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>No se aplica a lactantes con cardiopatía, prematurez extrema o enfermedad pulmonar crónica, que fueron excluidos.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> La AAP recomendaba aceptar saturaciones de 90 % o más, pero ese número no tenía respaldo de ensayos.</p><p><b>Pregunta.</b> ¿Mantener una saturación de 90 % o más es equivalente a mantener 94 % o más en lactantes internados con bronquiolitis?</p><p><b>Métodos.</b> Ensayo de equivalencia doble ciego en 8 hospitales del Reino Unido. 615 lactantes de 6 semanas a 12 meses se monitorearon con oxímetros comunes (oxígeno si < 94 %) o modificados (que mostraban 94 % cuando la saturación real era 90 %). Resultado principal: días hasta resolver la tos.</p><p><b>Resultados.</b> La tos se resolvió en una mediana de 15 días en ambos grupos: los objetivos fueron equivalentes. Los eventos adversos graves no difirieron.</p><p><b>Conclusiones.</b> Un objetivo de 90 % o más es tan seguro y eficaz como uno de 94 % o más.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["cunningham2015"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-ralston2014", "rel": "confirma", "nota": "Aporta el ensayo que respalda el umbral de 90 % de la guía."}, {"con": "h-schuh2014", "rel": "confirma", "nota": "Lleva al internado lo que Schuh vio en la guardia: perseguir la cifra no mejora la evolución."}], "conexiones": ["h-ralston2014", "h-schuh2014"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-smit2015", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Smit 2015 · Los índices no alcanzan", "corto": "Smit 2015", "etiqueta": "Los índices no alcanzan", "anio": 2015, "hilo": "pr", "estado": "vigente", "original": "Childhood asthma prediction models: a systematic review.", "fuente": "Lancet Respir Med 2015", "x": 1061, "y": 752, "resumen": "Revisión sistemática de los modelos para predecir asma escolar en preescolares con síntomas: ninguno predice bien en las dos direcciones a la vez.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Ordenó la proliferación de índices después del IPA. Mostró que el problema no es elegir el mejor índice, sino que hay un grupo grande de preescolares en el que el pronóstico es incierto.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: hay que comunicar el pronóstico como probabilidad y no como sentencia. Una revisión posterior (Kothalawala 2020) llegó a la misma conclusión con 26 modelos.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>El foco se fue moviendo de predecir quién tendrá asma a identificar quién responde a cada tratamiento (<a href=\"#h-fitzpatrick2016\">Fitzpatrick 2016</a>, <a href=\"#h-makrinioti2024\">Makrinioti 2024</a>).</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Identificar temprano a los niños en riesgo es importante, pero la utilidad práctica de los modelos no estaba clara.</p><p><b>Pregunta.</b> ¿Qué tan bien predicen el asma escolar los modelos para preescolares con síntomas?</p><p><b>Métodos.</b> Revisión sistemática de modelos desarrollados en niños de 4 años o menos con síntomas, con asma evaluada entre los 6 y los 12 años.</p><p><b>Resultados.</b> 12 modelos en 4 tipos de cohortes. 4 usaban solo datos clínicos (historia familiar, alergias, gravedad de síntomas); 8 agregaban estudios, sobre todo IgE específica. Ninguno se destacó a la vez para confirmar y para descartar.</p><p><b>Conclusiones.</b> Hay una gran proporción de preescolares con sibilancias en la que es difícil predecir el asma.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["smit2015"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-castro2000", "rel": "matiza", "nota": "Muestra que el IPA y sus sucesores confirman o descartan, pero no ambas cosas."}], "conexiones": ["h-castro2000"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-fitzpatrick2016", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Fitzpatrick 2016 · INFANT: ¿quién responde?", "corto": "Fitzpatrick 2016", "etiqueta": "INFANT: ¿quién responde?", "anio": 2016, "hilo": "ma", "estado": "vigente", "original": "Individualized therapy for persistent asthma in young children.", "fuente": "J Allergy Clin Immunol 2016", "x": 1097, "y": 904, "resumen": "Ensayo INFANT: cada niño probó tres tratamientos; respondió mejor al corticoide inhalado diario el que estaba sensibilizado a aeroalérgenos y tenía 300 eosinófilos/µL o más.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Cambió la pregunta de qué tratamiento es mejor en promedio a qué tratamiento es mejor para este niño. Con un diseño cruzado, mostró que el 74 % respondía distinto a cada opción y que dos biomarcadores simples predecían la respuesta al corticoide inhalado diario.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: la sensibilización a aeroalérgenos y los eosinófilos de 300/µL o más predicen la respuesta al corticoide inhalado en el preescolar. Es el origen de los rasgos tratables en esta edad.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Falta validarlo de forma prospectiva y no responde qué hacer con los niños sin alergia ni eosinofilia, como señala <a href=\"#h-makrinioti2024\">Makrinioti 2024</a>.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Los preescolares con asma son heterogéneos y quizás responden distinto a cada controlador.</p><p><b>Pregunta.</b> ¿Hay respuestas diferentes a corticoide inhalado diario, montelukast diario y corticoide inhalado con salbutamol a demanda, y qué las predice?</p><p><b>Métodos.</b> Ensayo doble ciego, cruzado, con 300 niños de 12 a 59 meses que necesitaban un controlador. Cada uno pasó por las tres estrategias. Se analizó si la sensibilización, las crisis previas o el sexo predecían la mejor respuesta.</p><p><b>Resultados.</b> El 74 % tuvo respuesta diferencial. La mejor respuesta fue más probable con el corticoide inhalado diario y la predijo la sensibilización a aeroalérgenos. Con sensibilización y eosinófilos de 300/µL o más, el corticoide diario dio más días de control y menos crisis.</p><p><b>Conclusiones.</b> La sensibilización y los eosinófilos ayudan a elegir tratamiento en el preescolar.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["fitzpatrick2016"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-castro2009", "rel": "matiza", "nota": "No todos responden igual: los biomarcadores identifican a quién le sirve el corticoide inhalado."}, {"con": "h-guilbert2004", "rel": "apoya", "nota": "La sensibilización a aeroalérgenos, ya presente en PEAK, resulta la clave de la respuesta."}], "conexiones": ["h-castro2009", "h-guilbert2004"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-kaiser2016", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Kaiser 2016 · Metaanálisis: diario e intermitente", "corto": "Kaiser 2016", "etiqueta": "Metaanálisis: diario e intermitente", "anio": 2016, "hilo": "ma", "estado": "vigente", "original": "Preventing Exacerbations in Preschoolers With Recurrent Wheeze: A Meta-analysis.", "fuente": "Pediatrics 2016", "x": 1097, "y": 958, "resumen": "Metaanálisis: el corticoide inhalado diario previene crisis en el preescolar con asma persistente y el intermitente en dosis alta, en el que sibila con los virus.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Ordenó las estrategias según el tipo de niño. Corticoide diario en el persistente (NNT 11) y mejor que el montelukast; corticoide intermitente en dosis alta en el que sibila con los virus (NNT 6).</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: es la base de las dos opciones de GINA para el menor de 5 años.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Agrupa por fenotipo clínico; <a href=\"#h-fitzpatrick2016\">Fitzpatrick 2016</a> mostró que los biomarcadores predicen mejor quién responde.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> No estaba definido cómo prevenir mejor las crisis graves del preescolar con sibilancias recurrentes.</p><p><b>Pregunta.</b> ¿Qué estrategia previene más las crisis que necesitan corticoide sistémico: corticoide inhalado diario, intermitente o montelukast?</p><p><b>Métodos.</b> Metaanálisis de ensayos aleatorizados en menores de 6 años con asma o sibilancias recurrentes.</p><p><b>Resultados.</b> 22 estudios, 4550 niños. Corticoide inhalado diario frente a placebo: RR 0,70 (NNT 9); en el persistente, RR 0,56 y mejor que montelukast. Intermitente en dosis alta en el viral: RR 0,65 (NNT 6).</p><p><b>Conclusiones.</b> Evidencia sólida para el corticoide inhalado diario en el persistente y el intermitente en el viral.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["kaiser2016"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-castro2009", "rel": "confirma", "nota": "Confirma el beneficio del corticoide inhalado diario con más ensayos."}, {"con": "h-ducharme2009", "rel": "confirma", "nota": "Confirma el esquema intermitente en el preescolar con sibilancias virales."}, {"con": "h-bisgaard2005", "rel": "supera", "nota": "El corticoide inhalado diario supera al montelukast."}], "conexiones": ["h-castro2009", "h-ducharme2009", "h-bisgaard2005"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-mcgeachie2016", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "McGeachie 2016 · CAMP: crecimiento pulmonar", "corto": "McGeachie 2016", "etiqueta": "CAMP: crecimiento pulmonar", "anio": 2016, "hilo": "hn", "estado": "vigente", "original": "Patterns of Growth and Decline in Lung Function in Persistent Childhood Asthma.", "fuente": "N Engl J Med 2016", "x": 1097, "y": 546, "resumen": "Los niños del ensayo CAMP seguidos hasta los 26 años: tres de cada cuatro con asma persistente tuvieron un crecimiento pulmonar anormal, y el 11 % llegó a la adultez con obstrucción fija.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Conectó el asma infantil con la EPOC del adulto. Algunos niños no llegan a la función pulmonar máxima esperada y empiezan la adultez con menos reserva.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: la función pulmonar baja en la infancia es el principal predictor de un mal recorrido. Justifica medir la función pulmonar en el seguimiento.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>El corticoide inhalado del ensayo original no cambió estos recorridos, lo que coincide con <a href=\"#h-camp2000\">CAMP 2000</a> y <a href=\"#h-guilbert2006\">Guilbert 2006</a>.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Seguir la función pulmonar en el tiempo podría mostrar un vínculo entre el asma infantil y la obstrucción crónica adulta.</p><p><b>Pregunta.</b> ¿Qué patrones de crecimiento y declinación del VEF₁ tienen los niños con asma persistente hasta la adultez temprana?</p><p><b>Métodos.</b> 684 participantes del ensayo CAMP con espirometrías desde la infancia hasta los 26 años. Clasificación en 4 patrones frente a valores normales de población sin asma.</p><p><b>Resultados.</b> 25 % normal; 26 % crecimiento reducido y declinación temprana; 23 % solo crecimiento reducido; 26 % crecimiento normal con declinación temprana. Predictores: VEF₁ inicial bajo, poca respuesta al broncodilatador, hiperreactividad y sexo masculino. A los 26 años, el 11 % tenía obstrucción compatible con EPOC.</p><p><b>Conclusiones.</b> La función pulmonar baja en la infancia y el sexo masculino predicen recorridos anormales, con riesgo de obstrucción fija temprana.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["mcgeachie2016"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-camp2000", "rel": "apoya", "nota": "Sigue a la misma cohorte del ensayo hasta los 26 años."}, {"con": "h-sears2003", "rel": "confirma", "nota": "Confirma que lo que pasa en la infancia marca la función del adulto."}], "conexiones": ["h-camp2000", "h-sears2003"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-stokholm2016", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Stokholm 2016 · Azitromicina en el episodio", "corto": "Stokholm 2016", "etiqueta": "Azitromicina en el episodio", "anio": 2016, "hilo": "cr", "estado": "matizado", "original": "Azithromycin for episodes with asthma-like symptoms in young children aged 1-3 years: a randomised, double-blind, placebo-controlled trial.", "fuente": "Lancet Respir Med 2016", "x": 1097, "y": 1164, "resumen": "En niños de 1 a 3 años de la cohorte COPSAC, la azitromicina acortó un 63 % los episodios de síntomas tipo asma, más si se empezaba antes del sexto día.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Confirmó desde otro diseño que el macrólido acorta los episodios del niño pequeño, en una cohorte donde ya se sabía que las bacterias de la vía aérea se asocian con estas crisis.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente como evidencia, no como indicación de rutina. Muestra que el preescolar que sibila no es solo un problema viral.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>No midió resistencia bacteriana. Aún no se sabe si el efecto es antibacteriano o antiinflamatorio.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> En niños pequeños, bacterias y virus se asocian igual con los episodios de síntomas tipo asma.</p><p><b>Pregunta.</b> ¿La azitromicina acorta los episodios de síntomas tipo asma en niños de 1 a 3 años?</p><p><b>Métodos.</b> Ensayo doble ciego en la cohorte COPSAC2010. Cada episodio de al menos 3 días se asignó a azitromicina 10 mg/kg por día durante 3 días o placebo. Se excluyeron signos de neumonía.</p><p><b>Resultados.</b> 158 episodios en 72 niños. Duración después del tratamiento: 3,4 días con azitromicina frente a 7,7 con placebo (63 % menos). 83 % menos si se empezaba antes del día 6. Efectos adversos similares.</p><p><b>Conclusiones.</b> La azitromicina acortó los episodios; falta entender el mecanismo.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["stokholm2016"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-bacharier2015", "rel": "confirma", "nota": "Con otro diseño, el macrólido también acorta los episodios del preescolar."}], "conexiones": ["h-bacharier2015"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-belgrave2018", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Belgrave 2018 · Trayectorias de VEF₁", "corto": "Belgrave 2018", "etiqueta": "Trayectorias de VEF₁", "anio": 2018, "hilo": "hn", "estado": "vigente", "original": "Lung function trajectories from pre-school age to adulthood and their associations with early life factors: a retrospective analysis of three population-based birth cohort studies.", "fuente": "Lancet Respir Med 2018", "x": 1170, "y": 600, "resumen": "Con tres cohortes de nacimiento, describió cuatro trayectorias de función pulmonar. La más baja se asoció con crisis graves de sibilancias, sensibilización temprana y tabaco.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Mostró que las trayectorias de función pulmonar se fijan en la infancia y señaló factores modificables: humo de tabaco, crisis graves y sensibilización temprana.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: evitar el humo y las crisis graves podría proteger la función pulmonar adulta. Es un argumento para controlar bien al preescolar con crisis graves.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Matiza <a href=\"#h-martinez1988\">Martinez 1988</a>: la mayoría de los lactantes con función baja no continúa en la trayectoria baja.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> La función pulmonar máxima en la adultez temprana determina el riesgo de EPOC y mortalidad.</p><p><b>Pregunta.</b> ¿Hay trayectorias distintas de función pulmonar en la infancia, se extienden a la adultez y qué factores tempranos las predicen?</p><p><b>Métodos.</b> Dos cohortes (MAAS y ALSPAC) con espirometrías repetidas de los 5 a los 24 años y una tercera (PIAF) con función pulmonar desde el mes de vida. Modelos de perfiles latentes y un puntaje genético.</p><p><b>Resultados.</b> Cuatro trayectorias: alta, normal, debajo del promedio y persistentemente baja (5 %). La baja se asoció con sibilancias y asma persistentes. La genética no explicó las trayectorias. La mayoría de los lactantes con función baja no siguió baja. Factores asociados: sibilancias recurrentes con crisis graves, sensibilización temprana y humo de tabaco.</p><p><b>Conclusiones.</b> Reducir el humo, la sensibilización temprana y las crisis graves podría evitar una función pulmonar baja en la adultez.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["belgrave2018"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-martinez1988", "rel": "matiza", "nota": "La vía aérea chica del lactante muchas veces no persiste."}, {"con": "h-mcgeachie2016", "rel": "confirma", "nota": "En población general, también hay un grupo que nunca alcanza la función esperada."}], "conexiones": ["h-martinez1988", "h-mcgeachie2016"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-foster2018", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Foster 2018 · Prednisolona en la guardia", "corto": "Foster 2018", "etiqueta": "Prednisolona en la guardia", "anio": 2018, "hilo": "cr", "estado": "vigente", "original": "Oral prednisolone in preschool children with virus-associated wheeze: a prospective, randomised, double-blind, placebo-controlled trial.", "fuente": "Lancet Respir Med 2018", "x": 1170, "y": 1218, "resumen": "En la guardia de Perth, la prednisolona 1 mg/kg durante 3 días acortó la estadía en preescolares con sibilancias virales (370 frente a 540 minutos).", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Reabrió la discusión que Panickar parecía haber cerrado. En preescolares de 2 a 6 años en la guardia, la prednisolona redujo la estadía de manera significativa.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: el corticoide oral tiene un efecto modesto en la crisis del preescolar que llega a la guardia; su lugar depende de la gravedad y del antecedente de sibilancias.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Para conciliar los ensayos hizo falta juntarlos: <a href=\"#h-lee2024\">Lee 2024</a>.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> La evidencia sobre corticoides en las crisis de sibilancias del preescolar era inconclusa.</p><p><b>Pregunta.</b> ¿La prednisolona oral reduce la estadía en preescolares con sibilancias virales en la guardia?</p><p><b>Métodos.</b> Ensayo doble ciego de no inferioridad en una guardia pediátrica de Perth. 624 niños de 24 a 72 meses recibieron prednisolona 1 mg/kg por día durante 3 días o placebo. Resultado: tiempo hasta estar en condiciones de alta. Se hizo después un análisis de superioridad.</p><p><b>Resultados.</b> Estadía mediana: 540 minutos con placebo y 370 con prednisolona. El placebo fue inferior; en el análisis de superioridad posterior, la prednisolona redujo la estadía (razón 0,79). Sin eventos adversos graves.</p><p><b>Conclusiones.</b> La prednisolona redujo la estadía y fue bien tolerada.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["foster2018"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-panickar2009", "rel": "matiza", "nota": "Con niños algo mayores y en la guardia, encuentra un beneficio modesto."}], "conexiones": ["h-panickar2009"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-paris2018", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Franklin 2018 · PARIS: alto flujo", "corto": "Franklin 2018", "etiqueta": "PARIS: alto flujo", "anio": 2018, "hilo": "br", "estado": "vigente", "original": "A Randomized Trial of High-Flow Oxygen Therapy in Infants with Bronchiolitis.", "fuente": "N Engl J Med 2018", "x": 1170, "y": 134, "resumen": "Ensayo PARIS en Australia y Nueva Zelanda: la cánula nasal de alto flujo redujo a la mitad la escalada de tratamiento en lactantes con bronquiolitis e hipoxemia fuera de terapia intensiva, sin acortar la internación.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>La cánula de alto flujo se había difundido sin evidencia sólida. Este ensayo grande, en salas generales, mostró que reduce el fracaso del tratamiento y el pase a cuidados más intensivos.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: el alto flujo es útil cuando el oxígeno estándar no alcanza, y sirve como rescate. No acorta la internación ni la duración del oxígeno.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Abrió la discusión sobre si empezarlo de entrada o reservarlo como rescate: el 61 % de los que fallaron con oxígeno estándar respondió al alto flujo de rescate.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> El uso de cánula nasal de alto flujo había crecido mucho, con poca evidencia fuera de terapia intensiva.</p><p><b>Pregunta.</b> ¿El alto flujo, comparado con el oxígeno estándar, reduce la escalada de tratamiento en lactantes con bronquiolitis que necesitan oxígeno?</p><p><b>Métodos.</b> Ensayo multicéntrico con 1472 lactantes menores de 12 meses con bronquiolitis y necesidad de oxígeno, fuera de terapia intensiva. Grupo alto flujo frente a oxígeno estándar con rescate de alto flujo si fallaba. Fracaso: 3 de 4 criterios (taquicardia, taquipnea, hipoxemia, alerta clínica).</p><p><b>Resultados.</b> Escaló el 12 % con alto flujo y el 23 % con oxígeno estándar (diferencia de 11 puntos). No hubo diferencias en días de internación ni de oxígeno. El 61 % de los que fallaron con oxígeno estándar respondió al alto flujo de rescate.</p><p><b>Conclusiones.</b> El alto flujo reduce el fracaso del tratamiento fuera de terapia intensiva.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["paris2018"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-cunningham2015", "rel": "apoya", "nota": "Con el umbral de oxígeno ya definido, la pregunta pasa a cómo darlo cuando no alcanza."}], "conexiones": ["h-cunningham2015"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-scheltema2018", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Scheltema 2018 · MAKI a los 6 años", "corto": "Scheltema 2018", "etiqueta": "MAKI a los 6 años", "anio": 2018, "hilo": "vi", "estado": "vigente", "original": "Respiratory syncytial virus prevention and asthma in healthy preterm infants: a randomised controlled trial.", "fuente": "Lancet Respir Med 2018", "x": 1170, "y": 340, "resumen": "Seguimiento de MAKI a los 6 años: prevenir el VSR en el primer año redujo las sibilancias leves que informaban los padres, pero no el asma diagnosticada ni la función pulmonar.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Mostró que el efecto del VSR sobre las sibilancias del lactante no se traduce, al menos en prematuros, en menos asma diagnosticada a la edad escolar.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: no se puede prometer que prevenir el VSR evite el asma. GINA cita este resultado al hablar de prevención.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p><a href=\"#h-rosas2023\">Rosas-Salazar 2023</a>, en lactantes de término de la población general, encontró una asociación entre no tener VSR en el primer año y menos asma a los 5. La pregunta sigue abierta.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> <a href=\"#h-blanken2013\">Blanken 2013</a> había mostrado menos sibilancias en el primer año con palivizumab.</p><p><b>Pregunta.</b> ¿Prevenir el VSR en el primer año reduce el asma y mejora la función pulmonar a los 6 años?</p><p><b>Métodos.</b> Seguimiento ciego para el evaluador de los 429 prematuros de MAKI hasta los 6 años (92 % completó). Resultados principales: asma actual informada por los padres y VEF₀,₅.</p><p><b>Resultados.</b> Asma informada por padres: 14,1 % frente a 24,0 %, por menos sibilancias infrecuentes. Función pulmonar igual. Asma diagnosticada por médicos: 10,3 % frente a 9,9 %.</p><p><b>Conclusiones.</b> Prevenir el VSR no tuvo un efecto importante sobre el asma ni la función pulmonar a los 6 años.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["scheltema2018"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-blanken2013", "rel": "matiza", "nota": "El efecto del primer año no llega al asma diagnosticada ni a la función pulmonar a los 6."}], "conexiones": ["h-blanken2013"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-gaillard2021", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Gaillard 2021 · ERS: diagnóstico objetivo", "corto": "Gaillard 2021", "etiqueta": "ERS: diagnóstico objetivo", "anio": 2021, "hilo": "pr", "estado": "vigente", "original": "European Respiratory Society clinical practice guidelines for the diagnosis of asthma in children aged 5-16 years.", "fuente": "Eur Respir J 2021", "x": 1271, "y": 698, "resumen": "Guía de la ERS para el diagnóstico de asma de 5 a 16 años: espirometría, prueba broncodilatadora y FeNO como primera línea; no diagnosticar solo por la historia.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Llevó la discusión del pronóstico al diagnóstico. Desde los 5 años ya no alcanza con la historia: hay que demostrar la obstrucción variable o la inflamación con pruebas.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: evita el sobrediagnóstico y el subdiagnóstico en el escolar. Para el ateneo, marca el límite: el IPA es para el preescolar; en el escolar se confirma con pruebas.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>No aplica al menor de 5 años, donde las pruebas son difíciles. Ahí sigue el desafío que plantea <a href=\"#h-makrinioti2024\">Makrinioti 2024</a>.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> No hay una prueba de referencia para el asma infantil; el sobrediagnóstico y el subdiagnóstico son frecuentes.</p><p><b>Pregunta.</b> ¿Qué pruebas usar para diagnosticar asma en niños de 5 a 16 años?</p><p><b>Métodos.</b> Grupo de trabajo de la ERS con 9 preguntas PICO, revisiones sistemáticas y método GRADE.</p><p><b>Resultados.</b> Propuso un algoritmo con puntos de corte basados en la mejor evidencia disponible.</p><p><b>Conclusiones.</b> Espirometría, prueba broncodilatadora y FeNO como primera línea. No diagnosticar asma solo por la historia ni por una sola prueba anormal.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["gaillard2021"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-castro2000", "rel": "matiza", "nota": "Del riesgo al diagnóstico: en el escolar el asma se confirma con pruebas, no con la historia."}], "conexiones": ["h-castro2000"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-melody2022", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Hammitt 2022 · MELODY: nirsevimab", "corto": "Hammitt 2022", "etiqueta": "MELODY: nirsevimab", "anio": 2022, "hilo": "br", "estado": "vigente", "original": "Nirsevimab for Prevention of RSV in Healthy Late-Preterm and Term Infants.", "fuente": "N Engl J Med 2022", "x": 1302, "y": 134, "resumen": "Ensayo MELODY: una sola dosis de nirsevimab antes de la temporada redujo un 74,5 % las infecciones respiratorias bajas por VSR con consulta médica en lactantes sanos de término y prematuros tardíos.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Llevó la prevención del VSR de un grupo chico de alto riesgo (palivizumab mensual) a todos los lactantes, con una única inyección. Cambió la bronquiolitis de un problema solo de tratamiento a uno de prevención.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente y en expansión: el nirsevimab y la vacuna materna son hoy la estrategia principal contra la bronquiolitis por VSR.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Queda abierta la gran pregunta: si prevenir el VSR en todos los lactantes reduce el asma infantil, como sugiere <a href=\"#h-rosas2023\">Rosas-Salazar 2023</a>. El ensayo no estaba diseñado para eso.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> El VSR es la principal causa de bronquiolitis e internación en lactantes, y el palivizumab solo se usaba en grupos de alto riesgo.</p><p><b>Pregunta.</b> ¿Una dosis de nirsevimab protege a lactantes sanos de 35 semanas o más de la infección respiratoria baja por VSR?</p><p><b>Métodos.</b> Ensayo aleatorizado 2:1 con 1490 lactantes de 35 semanas o más. Una inyección de nirsevimab o placebo antes de la temporada. Resultado principal: infección respiratoria baja por VSR con consulta médica en 150 días.</p><p><b>Resultados.</b> Infección con consulta: 1,2 % con nirsevimab frente a 5,0 % con placebo (eficacia 74,5 %). Internación: 0,6 % frente a 1,6 % (eficacia 62 %, no significativa en este ensayo). Eventos adversos graves similares.</p><p><b>Conclusiones.</b> Una sola dosis protege a los lactantes sanos durante la temporada de VSR.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["melody2022"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-blanken2013", "rel": "apoya", "nota": "Pasa de prevenir el VSR en prematuros con palivizumab mensual a todos los lactantes con una dosis."}], "conexiones": ["h-blanken2013"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-rosas2023", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Rosas-Salazar 2023 · INSPIRE: VSR y asma", "corto": "Rosas-Salazar 2023", "etiqueta": "INSPIRE: VSR y asma", "anio": 2023, "hilo": "vi", "estado": "vigente", "original": "Respiratory syncytial virus infection during infancy and asthma during childhood in the USA (INSPIRE): a population-based, prospective birth cohort study.", "fuente": "Lancet 2023", "x": 1332, "y": 340, "resumen": "Cohorte INSPIRE: entre lactantes sanos de término, no infectarse con VSR en el primer año se asoció con un 26 % menos de asma a los 5 años.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Buscó la infección por VSR de forma activa, incluida la leve, con serología, en una cohorte poblacional de término. Así reabrió la hipótesis causal que MAKI había dejado en duda.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Vigente: sostiene la hipótesis de que prevenir el VSR podría prevenir parte del asma infantil.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Es observacional; los propios autores dicen que la causalidad solo se probará con intervenciones como <a href=\"#h-melody2022\">Hammitt 2022</a> y la vacuna materna, seguidas hasta la edad escolar.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> El VSR grave se asocia con sibilancias, pero no estaba claro si cualquier infección por VSR en el primer año aumenta el asma.</p><p><b>Pregunta.</b> ¿La infección por VSR en el primer año se asocia con asma a los 5 años en niños sanos de término?</p><p><b>Métodos.</b> Cohorte de nacimiento de Tennessee con 1946 lactantes sanos de término. Vigilancia activa y pasiva con PCR y serología para saber quién se infectó con VSR. Seguimiento hasta los 5 años, ajustado por factores de confusión.</p><p><b>Resultados.</b> El 54 % se infectó con VSR en el primer año. Asma a los 5 años: 16 % sin VSR frente a 21 % con VSR (RR ajustado 0,74). Fracción prevenible estimada: 15 %.</p><p><b>Conclusiones.</b> No infectarse con VSR en el primer año se asocia con menos asma; hacen falta intervenciones para probar causalidad.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["rosas2023"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-scheltema2018", "rel": "matiza", "nota": "En término y población general, vuelve a encontrar una asociación entre VSR y asma."}, {"con": "h-melody2022", "rel": "apoya", "nota": "Plantea que las nuevas formas de prevenir el VSR son la manera de probar la causalidad."}], "conexiones": ["h-scheltema2018", "h-melody2022"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-lee2024", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Lee 2024 · Metaanálisis individual", "corto": "Lee 2024", "etiqueta": "Metaanálisis individual", "anio": 2024, "hilo": "cr", "estado": "vigente", "original": "Efficacy of oral corticosteroids for acute preschool wheeze: a systematic review and individual participant data meta-analysis of randomised clinical trials.", "fuente": "Lancet Respir Med 2024", "x": 1363, "y": 1110, "resumen": "Metaanálisis con datos individuales de 7 ensayos: el corticoide oral mejora el puntaje de sibilancias a las 4 horas y acorta la internación unas 3 horas, más en quienes ya tenían sibilancias o asma.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Usó datos individuales para conciliar ensayos contradictorios. El efecto existe, es chico en promedio y mayor en el que ya tiene historia de sibilancias o asma: un rasgo que orienta.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Es la síntesis actual: reservar el corticoide oral para las crisis más graves o para los niños con antecedentes, en lugar de darlo a todos o a ninguno.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>No resuelve el beneficio en la crisis leve del primer episodio, donde sigue siendo dudoso.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> El corticoide oral se usa mucho en las crisis del preescolar, con evidencia contradictoria.</p><p><b>Pregunta.</b> ¿El corticoide oral mejora la crisis de sibilancias del preescolar, y en quiénes?</p><p><b>Métodos.</b> Revisión sistemática con metaanálisis de datos individuales de ensayos frente a placebo en niños de 12 a 71 meses.</p><p><b>Resultados.</b> 7 ensayos, 1728 niños. Mejor puntaje de sibilancias a las 4 horas, no a las 12. Internación 3,2 horas más corta; 4,5 horas en quienes tenían antecedentes de sibilancias o asma. Posible aumento de vómitos.</p><p><b>Conclusiones.</b> El corticoide oral reduce la gravedad a las 4 horas y la internación; el beneficio es más relevante con antecedentes.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["lee2024"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-foster2018", "rel": "confirma", "nota": "Al juntar los datos, el beneficio sobre la estadía se mantiene."}, {"con": "h-panickar2009", "rel": "matiza", "nota": "Muestra un beneficio pequeño, concentrado en quienes ya tenían sibilancias o asma."}], "conexiones": ["h-foster2018", "h-panickar2009"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  {"id": "h-makrinioti2024", "nivel": 1, "mapa": "historia", "tipo": "articulo", "titulo": "Makrinioti 2024 · ERS: rasgos tratables", "corto": "Makrinioti 2024", "etiqueta": "ERS: rasgos tratables", "anio": 2024, "hilo": "pr", "estado": "vigente", "original": "European Respiratory Society statement on preschool wheezing disorders: updated definitions, knowledge gaps and proposed future research directions.", "fuente": "Eur Respir J 2024", "x": 1363, "y": 752, "resumen": "Declaración de la ERS de 2024: los fenotipos episódico y múltiple no reflejan la patología ni predicen la respuesta al tratamiento; propone buscar rasgos tratables como eosinófilos y sensibilización.", "teoria": [{"h": "Qué aportó en su momento", "html": "<p>Cierra un ciclo de 30 años. Después de Tucson, el IPA y la clasificación de 2008, propone tratar según mecanismos medibles: inflamación tipo 2 (eosinófilos, sensibilización a aeroalérgenos), función pulmonar e infección de la vía aérea. Unifica la definición: de 0 a menos de 6 años, más de un episodio y al menos uno confirmado por un profesional.</p>"}, {"h": "Qué sigue vigente", "html": "<p>Es la propuesta actual. Explica por qué GINA habla hoy de probar el corticoide inhalado y revisar la respuesta, y por qué se miran los eosinófilos y la sensibilización.</p>"}, {"h": "Qué se superó o se matizó", "html": "<p>Los propios autores aclaran que los rasgos tratables todavía necesitan validación prospectiva, sobre todo en los niños sin alergia ni eosinofilia, que son muchos.</p>"}, {"h": "El estudio", "html": "<p><b>Introducción.</b> Desde 2008 y 2014 se acumuló evidencia de que los fenotipos clínicos no ayudaban a elegir tratamiento.</p><p><b>Pregunta.</b> ¿Cómo definir hoy las sibilancias del preescolar y qué falta investigar?</p><p><b>Métodos.</b> Grupo de trabajo de la ERS que revisó la literatura posterior a 2008.</p><p><b>Resultados.</b> Definición: edad de 0 a menos de 6 años, sibilancias confirmadas al menos una vez y más de un episodio. Los fenotipos clínicos solos ya no son apropiados. Rasgos tratables: eosinófilos y sensibilización (respuesta al corticoide inhalado), función pulmonar e infección. Faltan resultados informados por los cuidadores, planes de acción y criterios de derivación.</p><p><b>Conclusiones.</b> Pasar de fenotipos clínicos a rasgos tratables, con validación prospectiva pendiente.</p><div class=\"nota\">Resumen propio a partir del resumen publicado en PubMed. Verificar los números con el texto completo.</div>"}], "evidencia": ["makrinioti2024"], "pico": [], "ateneos": [], "dialogo": [{"con": "h-brand2014", "rel": "supera", "nota": "Deja los fenotipos clínicos y propone rasgos tratables."}, {"con": "h-fitzpatrick2016", "rel": "apoya", "nota": "Toma eosinófilos y sensibilización como marcadores de respuesta al corticoide inhalado."}, {"con": "h-henderson2008", "rel": "matiza", "nota": "Los fenotipos estadísticos tampoco alcanzan para decidir el tratamiento."}], "conexiones": ["h-brand2014", "h-fitzpatrick2016", "h-henderson2008"], "revision": {"estado": "borrador", "revisor": null, "fecha": null}},
  /*/hs-nodos*/
];
