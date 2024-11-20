export const getFlagUrl = (countryCode: string): string => {
  const countryFlags: { [key: string]: string } = {
    AF: "https://flagcdn.com/w320/af.png", // Afeganistão
    AL: "https://flagcdn.com/w320/al.png", // Albânia
    DZ: "https://flagcdn.com/w320/dz.png", // Argélia
    AS: "https://flagcdn.com/w320/as.png", // Samoa Americana
    AD: "https://flagcdn.com/w320/ad.png", // Andorra
    AO: "https://flagcdn.com/w320/ao.png", // Angola
    AR: "https://flagcdn.com/w320/ar.png", // Argentina
    AM: "https://flagcdn.com/w320/am.png", // Armênia
    AU: "https://flagcdn.com/w320/au.png", // Austrália
    AT: "https://flagcdn.com/w320/at.png", // Áustria
    AZ: "https://flagcdn.com/w320/az.png", // Azerbaijão
    BS: "https://flagcdn.com/w320/bs.png", // Bahamas
    BH: "https://flagcdn.com/w320/bh.png", // Bahrein
    BD: "https://flagcdn.com/w320/bd.png", // Bangladesh
    BB: "https://flagcdn.com/w320/bb.png", // Barbados
    BY: "https://flagcdn.com/w320/by.png", // Bielorrússia
    BE: "https://flagcdn.com/w320/be.png", // Bélgica
    BZ: "https://flagcdn.com/w320/bz.png", // Belize
    BJ: "https://flagcdn.com/w320/bj.png", // Benim
    BT: "https://flagcdn.com/w320/bt.png", // Butão
    BO: "https://flagcdn.com/w320/bo.png", // Bolívia
    BA: "https://flagcdn.com/w320/ba.png", // Bósnia e Herzegovina
    BW: "https://flagcdn.com/w320/bw.png", // Botsuana
    BR: "https://flagcdn.com/w320/br.png", // Brasil
    BN: "https://flagcdn.com/w320/bn.png", // Brunei
    BG: "https://flagcdn.com/w320/bg.png", // Bulgária
    BF: "https://flagcdn.com/w320/bf.png", // Burkina Faso
    BI: "https://flagcdn.com/w320/bi.png", // Burundi
    KH: "https://flagcdn.com/w320/kh.png", // Camboja
    CM: "https://flagcdn.com/w320/cm.png", // Camarões
    CA: "https://flagcdn.com/w320/ca.png", // Canadá
    CV: "https://flagcdn.com/w320/cv.png", // Cabo Verde
    KY: "https://flagcdn.com/w320/ky.png", // Ilhas Caimão
    CF: "https://flagcdn.com/w320/cf.png", // República Centro-Africana
    TD: "https://flagcdn.com/w320/td.png", // Chade
    CL: "https://flagcdn.com/w320/cl.png", // Chile
    CN: "https://flagcdn.com/w320/cn.png", // China
    CO: "https://flagcdn.com/w320/co.png", // Colômbia
    KM: "https://flagcdn.com/w320/km.png", // Comores
    CG: "https://flagcdn.com/w320/cg.png", // Congo
    CD: "https://flagcdn.com/w320/cd.png", // República Democrática do Congo
    CR: "https://flagcdn.com/w320/cr.png", // Costa Rica
    CI: "https://flagcdn.com/w320/ci.png", // Costa do Marfim
    HR: "https://flagcdn.com/w320/hr.png", // Croácia
    CU: "https://flagcdn.com/w320/cu.png", // Cuba
    CY: "https://flagcdn.com/w320/cy.png", // Chipre
    CZ: "https://flagcdn.com/w320/cz.png", // República Tcheca
    DK: "https://flagcdn.com/w320/dk.png", // Dinamarca
    DJ: "https://flagcdn.com/w320/dj.png", // Djibuti
    DM: "https://flagcdn.com/w320/dm.png", // Dominica
    DO: "https://flagcdn.com/w320/do.png", // República Dominicana
    EC: "https://flagcdn.com/w320/ec.png", // Equador
    EG: "https://flagcdn.com/w320/eg.png", // Egito
    SV: "https://flagcdn.com/w320/sv.png", // El Salvador
    GQ: "https://flagcdn.com/w320/gq.png", // Guiné Equatorial
    ER: "https://flagcdn.com/w320/er.png", // Eritreia
    EE: "https://flagcdn.com/w320/ee.png", // Estônia
    ET: "https://flagcdn.com/w320/et.png", // Etiópia
    FJ: "https://flagcdn.com/w320/fj.png", // Fiji
    FI: "https://flagcdn.com/w320/fi.png", // Finlândia
    FR: "https://flagcdn.com/w320/fr.png", // França
    GA: "https://flagcdn.com/w320/ga.png", // Gabão
    GM: "https://flagcdn.com/w320/gm.png", // Gâmbia
    GE: "https://flagcdn.com/w320/ge.png", // Geórgia
    DE: "https://flagcdn.com/w320/de.png", // Alemanha
    GH: "https://flagcdn.com/w320/gh.png", // Gana
    GR: "https://flagcdn.com/w320/gr.png", // Grécia
    GD: "https://flagcdn.com/w320/gd.png", // Granada
    GT: "https://flagcdn.com/w320/gt.png", // Guatemala
    GN: "https://flagcdn.com/w320/gn.png", // Guiné
    GW: "https://flagcdn.com/w320/gw.png", // Guiné-Bissau
    GY: "https://flagcdn.com/w320/gy.png", // Guiana
    HT: "https://flagcdn.com/w320/ht.png", // Haiti
    HN: "https://flagcdn.com/w320/hn.png", // Honduras
    HU: "https://flagcdn.com/w320/hu.png", // Hungria
    IS: "https://flagcdn.com/w320/is.png", // Islândia
    IN: "https://flagcdn.com/w320/in.png", // Índia
    ID: "https://flagcdn.com/w320/id.png", // Indonésia
    IR: "https://flagcdn.com/w320/ir.png", // Irã
    IQ: "https://flagcdn.com/w320/iq.png", // Iraque
    IE: "https://flagcdn.com/w320/ie.png", // Irlanda
    IL: "https://flagcdn.com/w320/il.png", // Israel
    IT: "https://flagcdn.com/w320/it.png", // Itália
    JM: "https://flagcdn.com/w320/jm.png", // Jamaica
    JP: "https://flagcdn.com/w320/jp.png", // Japão
    JO: "https://flagcdn.com/w320/jo.png", // Jordânia
    KZ: "https://flagcdn.com/w320/kz.png", // Cazaquistão
    KE: "https://flagcdn.com/w320/ke.png", // Quênia
    KG: "https://flagcdn.com/w320/kg.png", // Quirguistão
    KI: "https://flagcdn.com/w320/ki.png", // Kiribati
    KW: "https://flagcdn.com/w320/kw.png", // Kuwait
    LA: "https://flagcdn.com/w320/la.png", // Laos
    LB: "https://flagcdn.com/w320/lb.png", // Líbano
    LS: "https://flagcdn.com/w320/ls.png", // Lesoto
    LR: "https://flagcdn.com/w320/lr.png", // Libéria
    LY: "https://flagcdn.com/w320/ly.png", // Líbia
    LT: "https://flagcdn.com/w320/lt.png", // Lituânia
    LU: "https://flagcdn.com/w320/lu.png", // Luxemburgo
    MO: "https://flagcdn.com/w320/mo.png", // Macau
    MK: "https://flagcdn.com/w320/mk.png", // Macedônia do Norte
    MG: "https://flagcdn.com/w320/mg.png", // Madagascar
    MW: "https://flagcdn.com/w320/mw.png", // Maláui
    MY: "https://flagcdn.com/w320/my.png", // Malásia
    MV: "https://flagcdn.com/w320/mv.png", // Maldivas
    ML: "https://flagcdn.com/w320/ml.png", // Mali
    MT: "https://flagcdn.com/w320/mt.png", // Malta
    MH: "https://flagcdn.com/w320/mh.png", // Ilhas Marshall
    MQ: "https://flagcdn.com/w320/mq.png", // Martinica
    MR: "https://flagcdn.com/w320/mr.png", // Mauritânia
    MU: "https://flagcdn.com/w320/mu.png", // Maurício
    YT: "https://flagcdn.com/w320/yt.png", // Mayotte
    MX: "https://flagcdn.com/w320/mx.png", // México
    FM: "https://flagcdn.com/w320/fm.png", // Micronésia
    MD: "https://flagcdn.com/w320/md.png", // Moldávia
    MC: "https://flagcdn.com/w320/mc.png", // Mônaco
    MN: "https://flagcdn.com/w320/mn.png", // Mongólia
    ME: "https://flagcdn.com/w320/me.png", // Montenegro
    MS: "https://flagcdn.com/w320/ms.png", // Montserrat
    MA: "https://flagcdn.com/w320/ma.png", // Marrocos
    MZ: "https://flagcdn.com/w320/mz.png", // Moçambique
    MM: "https://flagcdn.com/w320/mm.png", // Myanmar
    NA: "https://flagcdn.com/w320/na.png", // Namíbia
    NR: "https://flagcdn.com/w320/nr.png", // Nauru
    NP: "https://flagcdn.com/w320/np.png", // Nepal
    NL: "https://flagcdn.com/w320/nl.png", // Países Baixos
    NC: "https://flagcdn.com/w320/nc.png", // Nova Caledônia
    NZ: "https://flagcdn.com/w320/nz.png", // Nova Zelândia
    NI: "https://flagcdn.com/w320/ni.png", // Nicarágua
    NE: "https://flagcdn.com/w320/ne.png", // Níger
    NG: "https://flagcdn.com/w320/ng.png", // Nigéria
    NU: "https://flagcdn.com/w320/nu.png", // Niue
    KP: "https://flagcdn.com/w320/kp.png", // Coreia do Norte
    NO: "https://flagcdn.com/w320/no.png", // Noruega
    OM: "https://flagcdn.com/w320/om.png", // Omã
    PK: "https://flagcdn.com/w320/pk.png", // Paquistão
    PW: "https://flagcdn.com/w320/pw.png", // Palau
    PA: "https://flagcdn.com/w320/pa.png", // Panamá
    PG: "https://flagcdn.com/w320/pg.png", // Papua Nova Guiné
    PY: "https://flagcdn.com/w320/py.png", // Paraguai
    PE: "https://flagcdn.com/w320/pe.png", // Peru
    PH: "https://flagcdn.com/w320/ph.png", // Filipinas
    PN: "https://flagcdn.com/w320/pn.png", // Pitcairn
    PL: "https://flagcdn.com/w320/pl.png", // Polônia
    PT: "https://flagcdn.com/w320/pt.png", // Portugal
    PR: "https://flagcdn.com/w320/pr.png", // Porto Rico
    QA: "https://flagcdn.com/w320/qa.png", // Catar
    RO: "https://flagcdn.com/w320/ro.png", // Romênia
    RU: "https://flagcdn.com/w320/ru.png", // Rússia
    RW: "https://flagcdn.com/w320/rw.png", // Ruanda
    RE: "https://flagcdn.com/w320/re.png", // Reunião
    BL: "https://flagcdn.com/w320/bl.png", // São Bartolomeu
    SH: "https://flagcdn.com/w320/sh.png", // Santa Helena
    KN: "https://flagcdn.com/w320/kn.png", // São Cristóvão e Nevis
    LC: "https://flagcdn.com/w320/lc.png", // Santa Lúcia
    MF: "https://flagcdn.com/w320/mf.png", // São Martinho
    PM: "https://flagcdn.com/w320/pm.png", // São Pedro e Miquelão
    VC: "https://flagcdn.com/w320/vc.png", // São Vicente e Granadinas
    WS: "https://flagcdn.com/w320/ws.png", // Samoa
    SM: "https://flagcdn.com/w320/sm.png", // San Marino
    ST: "https://flagcdn.com/w320/st.png", // São Tomé e Príncipe
    SA: "https://flagcdn.com/w320/sa.png", // Arábia Saudita
    SN: "https://flagcdn.com/w320/sn.png", // Senegal
    RS: "https://flagcdn.com/w320/rs.png", // Sérvia
    SC: "https://flagcdn.com/w320/sc.png", // Seicheles
    SL: "https://flagcdn.com/w320/sl.png", // Serra Leoa
    SG: "https://flagcdn.com/w320/sg.png", // Cingapura
    SX: "https://flagcdn.com/w320/sx.png", // Sint Maarten
    SK: "https://flagcdn.com/w320/sk.png", // Eslováquia
    SI: "https://flagcdn.com/w320/si.png", // Eslovênia
    SB: "https://flagcdn.com/w320/sb.png", // Ilhas Salomão
    SO: "https://flagcdn.com/w320/so.png", // Somália
    ZA: "https://flagcdn.com/w320/za.png", // África do Sul
    GS: "https://flagcdn.com/w320/gs.png", // Geórgia do Sul e Ilhas Sandwich do Sul
    KR: "https://flagcdn.com/w320/kr.png", // Coreia do Sul
    ES: "https://flagcdn.com/w320/es.png", // Espanha
    LK: "https://flagcdn.com/w320/lk.png", // Sri Lanka
    SD: "https://flagcdn.com/w320/sd.png", // Sudão
    SR: "https://flagcdn.com/w320/sr.png", // Suriname
    SJ: "https://flagcdn.com/w320/sj.png", // Svalbard e Jan Mayen
    SE: "https://flagcdn.com/w320/se.png", // Suécia
    CH: "https://flagcdn.com/w320/ch.png", // Suíça
    SY: "https://flagcdn.com/w320/sy.png", // Síria
    TW: "https://flagcdn.com/w320/tw.png", // Taiwan
    TJ: "https://flagcdn.com/w320/tj.png", // Tajiquistão
    TZ: "https://flagcdn.com/w320/tz.png", // Tanzânia
    TH: "https://flagcdn.com/w320/th.png", // Tailândia
    TL: "https://flagcdn.com/w320/tl.png", // Timor-Leste
    TG: "https://flagcdn.com/w320/tg.png", // Togo
    TK: "https://flagcdn.com/w320/tk.png", // Tokelau
    TO: "https://flagcdn.com/w320/to.png", // Tonga
    TT: "https://flagcdn.com/w320/tt.png", // Trinidad e Tobago
    TN: "https://flagcdn.com/w320/tn.png", // Tunísia
    TR: "https://flagcdn.com/w320/tr.png", // Turquia
    TM: "https://flagcdn.com/w320/tm.png", // Turquemenistão
    TC: "https://flagcdn.com/w320/tc.png", // Ilhas Turcas e Caicos
    TV: "https://flagcdn.com/w320/tv.png", // Tuvalu
    UG: "https://flagcdn.com/w320/ug.png", // Uganda
    UA: "https://flagcdn.com/w320/ua.png", // Ucrânia
    AE: "https://flagcdn.com/w320/ae.png", // Emirados Árabes Unidos
    GB: "https://flagcdn.com/w320/gb.png", // Reino Unido
    US: "https://flagcdn.com/w320/us.png", // Estados Unidos
    UY: "https://flagcdn.com/w320/uy.png", // Uruguai
    UZ: "https://flagcdn.com/w320/uz.png", // Uzbequistão
    VU: "https://flagcdn.com/w320/vu.png", // Vanuatu
    VE: "https://flagcdn.com/w320/ve.png", // Venezuela
    VN: "https://flagcdn.com/w320/vn.png", // Vietnã
    WF: "https://flagcdn.com/w320/wf.png", // Wallis e Futuna
    EH: "https://flagcdn.com/w320/eh.png", // Saara Ocidental
    YE: "https://flagcdn.com/w320/ye.png", // Iémen
    ZM: "https://flagcdn.com/w320/zm.png", // Zâmbia
    ZW: "https://flagcdn.com/w320/zw.png", // Zimbábue
  };
  return countryFlags[countryCode] || "https://flagcdn.com/w320/unknown.png"; // Bandeira desconhecida caso o código não seja encontrado
};
