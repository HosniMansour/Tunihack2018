let id = require('pow-mongodb-fixtures').createObjectId;

const finances = exports.finances = {
    finance1: {
        _id: id(),
        year: 2018,
        montant:'35 851 000 000',
        recette_t_1 : "24 603 200 000",
        recette_t_2 : "10 431 000 000",
        recette_f : "816 800 000",
        parti1:
            {
                Rem_publiques:"14 751 000 000",
                moyens_des_services:"1 150 000 000",
                interventions_publiques:"5 636 000 000",
                depenses_de_gestion:"404 200 000"
            },
        parti2:{
            dette_publique:"2 787 000 000"
        },
        parti3:{
            investissements:"2 713 845 000",
            financement_public:"1 632 574 000",
            depenses_developpement:"128 420 000",
            developpement_ressources_ex:"646 161 000"
        },
        Projets:[
            {destination:"communs",montant:"239 727 000"},
            {destination:"Ariana",montant:"448 000"},
            {destination:"Ben Arous",montant:"343 000"},
            {destination:"Manouba",montant:"1 005 000"},
            {destination:"Nabeul",montant:"362 000"},
            {destination:"Zaghouan",montant:"405 000"},
            {destination:"Bizerte",montant:"964 000"},
            {destination:"Béja",montant:"1 027 000"},
            {destination:"Jendouba",montant:"5 743 000"},
            {destination:"Le Kef",montant:"2 616 000"},
            {destination:"Siliana",montant:"1 426 000"},
            {destination:"Kairouan",montant:"13 187 000"},
            {destination:"Kasserine",montant:"228 004 000"},
            {destination:"Sidi Bouzid",montant:"3 616 000"},
            {destination:"Sousse",montant:"376 000"},
            {destination:"Monastir",montant:"94 000"},
            {destination:"Mahdia",montant:"2 485 000"},
            {destination:"Sfax",montant:"1 595 000"},
            {destination:"Gafsa",montant:"2 588 000"},
            {destination:"Tozeur",montant:"24 285 000"},
            {destination:"Kébili",montant:"11 787 000"},
            {destination:"Gabes",montant:"3 217 000"},
            {destination:"Médenine",montant:"2 469 000"},
            {destination:"Tataouine",montant:"15 759 000"}
        ]
    },
    finance2: {
        _id: id(),
        year: 2017,
        montant:'32 200 000 000 ',
        recette_t_1 : "22 351 700 000",
        recette_t_2 : "8 960 000 000",
        recette_f : "888 300 000",
    },
    finance3: {
        _id: id(),
        year: 2016,
        montant:'29 150 000 000',
        recette_t_1 : "21 383 200 000",
        recette_t_2 : "6 974 000 000",
        recette_f : "792 800 000",
    },
    finance4: {
        _id: id(),
        year: 2015,
        montant:'28 900 000 000 ',
        recette_t_1 : "20 329 200 000",
        recette_t_2 : "7 616 000 000 ",
        recette_f : "954 800 000",
    },
    finance5: {
        _id: id(),
        year: 2014,
        montant:'28 025 000 000 ',
        recette_t_1 : "19 020 200 000",
        recette_t_2 : "8 052 000 000",
        recette_f : "952 800 000",
    },
    finance6: {
        _id: id(),
        year: 2013,
        montant:'26 692 000 000',
        recette_t_1 : "17 990 200 000",
        recette_t_2 : "7 542 000 000",
        recette_f : "1 159 800 000",
    },
    finance7: {
        _id: id(),
        year: 2012,
        montant:'22 810 000 000',
        recette_t_1 : "14 888 900 000",
        recette_t_2 : "7 001 000 000",
        recette_f : "920 100 000",
    },
    finance8: {
        _id: id(),
        year: 2011,
        montant:'14 346 800 000',
        recette_t_1 : "3 872 000 000",
        recette_t_2 : "3 872 000 000  ",
        recette_f : "848 200 000",
    },
    finance9: {
        _id: id(),
        year: 2010,
        montant:'18 235 000 000',
        recette_t_1 : "12 845 500 000",
        recette_t_2 : "4 402 000 000",
        recette_f : "987 500 000",
    },finance10: {
        _id: id(),
        year: 2009,
        montant:'17 106 000 000',
        recette_t_1 : "12 401 200 000",
        recette_t_2 : "4 066 000 000",
        recette_f : "638 800 000",
    },finance11: {
        _id: id(),
        year: 2008,
        montant:'15 242 000 000',
        recette_t_1 : "10 871 700 000",
        recette_t_2 : "3 768 000 000 ",
        recette_f : "602 300 000",
    },finance12: {
        _id: id(),
        year: 2007,
        montant:'14 360 000 000',
        recette_t_1 : "9 671 500 000",
        recette_t_2 : "4 134 000 000",
        recette_f : "554 500 000",
    },finance13: {
        _id: id(),
        year: 2006,
        montant:'13 552 000 000',
        recette_t_1 : "8 988 000 000",
        recette_t_2 : "4 049 000 000",
        recette_f : "515 000 000",
    },
    finance14: {
        _id: id(),
        year: 2005,
        montant:'12 990 000 000',
        recette_t_1 : "8 396 000 000",
        recette_t_2 : "4 083 000 000 ",
        recette_f : "511 000 000",
    },
    finance15: {
        _id: id(),
        year: 2004,
        montant:'12 730 000 000',
        recette_t_1 : "7 807 000 000",
        recette_t_2 : "4 433 000 000",
        recette_f : "490 000 000",
    },
    finance16: {
        _id: id(),
        year: 2003,
        montant:'11 410 000 000 ',
        recette_t_1 : "7 430 000 000",
        recette_t_2 : "3 541 000 000 ",
        recette_f : "439 000 000",
    },
    finance17: {
        _id: id(),
        year: 2002,
        montant:'11 533 000 000 ',
        recette_t_1 : "7 003 000 000",
        recette_t_2 : "4 092 000 000 ",
        recette_f : "438 000 000",
    },
    finance18: {
        _id: id(),
        year: 2001,
        montant:'10 820 000 000 ',
        recette_t_1 : "6 406 000 000",
        recette_t_2 : "4 001 000 000 ",
        recette_f : "413 000 000",
    },
    finance19: {
        _id: id(),
        year: 2000,
        montant:'10 510 000 000',
        recette_t_1 : "5 892 000 000",
        recette_t_2 : "4 212 000 000",
        recette_f : "406 000 000",
    }
};
