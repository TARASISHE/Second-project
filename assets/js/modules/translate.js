const langArr = {
    "en_1": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_2": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_3": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_4": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_5": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_6": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_7": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_8": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_9": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },

    "en_10": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_11": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_12": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_13": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_14": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_15": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },

    "en_16": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_17": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_18": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_19": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_20": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_21": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_22": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_23": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_24": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_25": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_26": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_27": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_28": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_29": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_30": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_31": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_32": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_33": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_34": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_35": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_36": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_37": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_38": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_39": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_40": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_41": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_42": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_43": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },

    "en_44": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_45": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_46": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_47": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_48": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
    "en_49": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },

    "en_50": {
        "укр": "Про Компанію",
        "eng": "About Company"
    },
}
const uaBtn = document.getElementById("UA");
const enBtn = document.getElementById("EN");
const uaLang = document.querySelector('.ualanguage');
const enLang = document.querySelector('.menu__moblinkhid');
const menuSublang = document.querySelector('.menu__sub-lang');


menuSublang.addEventListener("click", (e) => {
    console.log(e.target);
    const lang = e.target.closest('LI').getAttribute('data-lang');
    changeLang(lang)
});

/*if (uaBtn) {
    uaBtn.addEventListener("click", (e) => {
        e.preventDefault();
        uaLang.classList.remove("_close");
        enLang.classList.remove("_open");
        langListener('укр');
    });
}

if (enBtn) {
    enBtn.addEventListener("click", (e) => {
        e.preventDefault();
        uaLang.classList.add("_close");
        enLang.classList.add("_open");
        langListener('eng');
    });
}*/

const langListener = (lang) => {
    //const lang = e.target.closest('LI').getAttribute('data-lang');
    changeLang(lang);
}

function changeLang(lang) {
    let chooseDefi = Object.keys(langArr);
    chooseDefi.forEach(langKey => {
        let elemForTrans = document.querySelectorAll(`[lang-key="${langKey}"]`);
        for (let element of elemForTrans) {
            element.textContent = langArr[langKey][lang];
        }
    });
}

//