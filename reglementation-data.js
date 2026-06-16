/* ============================================================
   SOURCE UNIQUE — Module « Réglementation »
   Alimente : interface stagiaire, console enseignant, export papier.
   Modifier ICI = tout est mis à jour partout.
   inerWeb Édu — F. Henninot · Conforme F-Gas III & arrêté 21/11/2025
   ============================================================ */
window.MODULE = {
  id: "reglementation",
  titre: "Réglementation des fluides frigorigènes",
  sousTitre: "Réforme F-Gas III — Habilitation (arrêté du 21 novembre 2025)",
  niveau: "Tronc commun · cible A1 (BAC PRO MFER)",

  sections: [
    {
      id: "pourquoi",
      titre: "1 — Pourquoi réglemente-t-on les fluides ?",
      eleve: [
        "Les HFC sont de puissants <b>gaz à effet de serre</b>.",
        "Le <b>GWP</b> mesure l'impact climatique (CO₂ = 1).",
        "Une fuite = rejet équivalent en CO₂ (1 kg de R-404A ≈ 3 922 kg de CO₂)."
      ],
      prof: [
        "Poser le problème climatique : les HFC réchauffent des milliers de fois plus que le CO₂.",
        "Faire deviner : « 1 kg de R-404A qui fuit = combien de kg de CO₂ ? » → ≈ 4 tonnes.",
        "Lien métier : limiter les fuites = enjeu économique (fluides chers) ET réglementaire."
      ],
      gwp: [["CO₂ (R-744)","1"],["R-32","675"],["R-134a","1 430"],["R-410A","2 088"],["R-404A","3 922"]]
    },
    {
      id: "phasedown",
      titre: "2 — F-Gas III & le phase-down",
      eleve: [
        "<b>F-Gas III</b> = règlement (UE) 2024/573, applicable depuis le 11 mars 2024.",
        "<b>Phase-down</b> : réduction des quotas de HFC, objectif −79 % d'ici 2030 (base 2015).",
        "Conséquence : on passe aux fluides à bas GWP (R-32, R-290, R-744, HFO)."
      ],
      prof: [
        "Montrer la logique des quotas (2015 → 2030).",
        "Conséquence terrain : HFC chers et rares → récupération soignée + fluides alternatifs.",
        "Transition vers l'inflammabilité (A2L/A3) = sécurité renforcée (lien module sécurité)."
      ]
    },
    {
      id: "habilitations",
      titre: "3 — Capacité, aptitude & les 7 catégories",
      eleve: [
        "<b>Capacité</b> = l'<b>entreprise</b> (acheter/détenir/manipuler) — validité <b>5 ans</b>.",
        "<b>Aptitude</b> = la <b>personne</b> (intervenir) — validité <b>7 ans</b> (nouveauté).",
        "Les deux sont obligatoires et indépendantes.",
        "Nouveau régime : <b>7 catégories par type de fluide</b>."
      ],
      prof: [
        "Insister : capacité ≠ aptitude. Sans aptitude, interdiction de manipuler, même si l'entreprise a la capacité.",
        "Nouveauté 2025 : classement par TYPE de fluide (pression CO₂, toxicité NH₃, inflammabilité HC).",
        "Calendrier : régime seul applicable au 1ᵉʳ janvier 2027 ; mise à niveau des anciens avant le 12 mars 2029.",
        "BAC PRO MFER → A1. Correspondances : I→A1, II→A2, III→D, IV→E."
      ],
      categories: [
        ["A1","Tous équipements (fluorés/HC), sans limite de charge","I"],
        ["A2","Charge < 3 kg (< 6 kg si hermétique)","II"],
        ["B","CO₂ (R-744)","—"],
        ["C","Ammoniac (R-717)","—"],
        ["D","Récupération seule (HFC/HFO, < 3 kg)","III"],
        ["E","Contrôle d'étanchéité seul","IV"],
        ["V","Véhicules (clim auto) — hors périmètre","—"]
      ]
    },
    {
      id: "tracabilite",
      titre: "4 — La traçabilité",
      eleve: [
        "Fiche d'intervention <b>CERFA 15497*04</b> à chaque manipulation.",
        "<b>Registre</b> des mouvements de fluide, conservé <b>5 ans</b>.",
        "<b>Dégazage interdit</b> : récupération obligatoire et complète."
      ],
      prof: [
        "Le CERFA fera l'objet d'un module dédié (pesée bouteille, charge récupérée, tCO₂e).",
        "Réutilisation du fluide seulement après recyclage / régénération.",
        "Contrôles d'étanchéité : fréquence selon la charge en tCO₂e."
      ]
    }
  ],

  qcm: [
    { situ:false, q:"Validité de la nouvelle attestation d'aptitude :",
      c:["À vie","5 ans","7 ans","10 ans"], a:2,
      e:"7 ans (grande nouveauté). Avant : à vie. Remise à niveau obligatoire avant l'échéance." },
    { situ:true, q:"Ton patron te dit : « J'ai l'attestation de capacité de la boîte, tu peux manipuler le R-32. » Tu réponds :",
      c:["OK, je sors la station de récup","La capacité c'est l'entreprise ; il ME faut l'aptitude (A1/A2)","Pas grave, on est en transitoire","Je récupère d'abord, on régularise après"], a:1,
      e:"Aptitude = la personne. Capacité = l'entreprise. L'une ne remplace jamais l'autre." },
    { situ:true, q:"Tu interviens sur une centrale de supermarché chargée à 18 kg de R-454C. Catégorie minimum ?",
      c:["A1 (tous équipements)","A2 (< 3 kg)","D (récupération seule)","E (étanchéité seule)"], a:0,
      e:"18 kg dépasse les 3 kg de la A2 ; centrale = tous équipements → A1 (le R-454C est un HFO)." },
    { situ:false, q:"Nombre de catégories d'aptitude dans le nouveau régime :",
      c:["4","5","7","10"], a:2, e:"7 : A1, A2, B, C, D, E, V." },
    { situ:false, q:"L'ancienne catégorie III correspond à quelle nouvelle catégorie ?",
      c:["A1","A2","D (récupération)","E (étanchéité)"], a:2,
      e:"III → D (récupération seule, HFC/HFO < 3 kg)." },
    { situ:true, q:"Un collègue a une attestation cat. II de 2015. Date butoir pour sa mise à niveau ?",
      c:["Aucune, c'est à vie","31 décembre 2026","12 mars 2029","Quand le patron demande"], a:2,
      e:"12 mars 2029 pour les anciens titulaires (I→IV), sinon examen complet à repasser." },
    { situ:false, q:"Durée de conservation du registre d'intervention :",
      c:["1 an","3 ans","5 ans","10 ans"], a:2, e:"5 ans minimum (traçabilité)." }
  ]
};
