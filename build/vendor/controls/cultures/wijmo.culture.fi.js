﻿/*
    *
    * Wijmo Library 5.20172.359
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
/*
 * Wijmo culture file: fi (Finnish)
 */
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'fi',
            displayName: 'Finnish',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'],
                daysAbbr: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
                months: ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'],
                monthsAbbr: ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'],
                am: ['ap.', 'a'],
                pm: ['ip.', 'i'],
                eras: ['jKr.'],
                patterns: {
                    d: 'd.M.yyyy', D: 'd. MMMM yyyy',
                    f: 'd. MMMM yyyy H:mm', F: 'd. MMMM yyyy H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'd"." MMMM', M: 'd"." MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'd.M.yyyy H:mm', G: 'd.M.yyyy H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} kohdetta valittu',
            selectAll: 'Valitse kaikki'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} tuotteet)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Nouseva',
            descending: '\u2193 Laskeva',
            apply: 'Käytä',
            clear: 'Tyhjennä',
            conditions: 'Suodata kunnon mukaan',
            values: 'Suodata arvon mukaan',
            // value filter
            search: 'Haku',
            selectAll: 'Valitse kaikki',
            null: '(ei mitään)',
            // condition filter
            header: 'Näytä kohteet, joissa arvo',
            and: 'Ja',
            or: 'Tai',
            stringOperators: [
                { name: '(ei asetettu)', op: null },
                { name: 'On yhtä kuin', op: 0 },
                { name: 'On eri suuri kuin', op: 1 },
                { name: 'Alkaa merkillä', op: 6 },
                { name: 'Päättyy merkkiin', op: 7 },
                { name: 'Sisältää', op: 8 },
                { name: 'Ei sisällä', op: 9 }
            ],
            numberOperators: [
                { name: '(ei asetettu)', op: null },
                { name: 'On yhtä kuin', op: 0 },
                { name: 'On eri suuri kuin', op: 1 },
                { name: 'On suurempi kuin', op: 2 },
                { name: 'On suurempi tai yhtä suuri kuin', op: 3 },
                { name: 'On pienempi kuin', op: 4 },
                { name: 'On pienempi tai yhtä suuri kuin', op: 5 }
            ],
            dateOperators: [
                { name: '(ei asetettu)', op: null },
                { name: 'On yhtä kuin', op: 0 },
                { name: 'on ennen', op: 4 },
                { name: 'on jälkeen', op: 2 }
            ],
            booleanOperators: [
                { name: '(ei asetettu)', op: null },
                { name: 'On yhtä kuin', op: 0 },
                { name: 'On eri suuri kuin', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Asetukset:',
                header: 'Otsikkolähde:',
                summary: 'Yhteenveto:',
                showAs: 'Näytä muodossa:',
                weighBy: 'Painavat:',
                sort: 'Lajittelu:',
                filter: 'Suodatus:',
                format: 'Muotoilu:',
                sample: 'Näyte:',
                edit: 'Muokkaa…',
                clear: 'Tyhjennä',
                ok: 'OK',
                cancel: 'Peruuta',
                none: '(ei mitään)',
                sorts: {
                    asc: 'Nouseva',
                    desc: 'Laskeva'
                },
                aggs: {
                    sum: 'Summa',
                    cnt: 'Määrä',
                    avg: 'Keskiarvo',
                    max: 'Maks.',
                    min: 'Min',
                    rng: 'Alue',
                    std: 'Keskihajonta',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Ensimmäinen',
                    last: 'Viimeinen'
                },
                calcs: {
                    noCalc: 'Ei laskentaa',
                    dRow: 'Ero edellisen krs',
                    dRowPct: '% Ero edellisen krs',
                    dCol: 'Eroa edelliseen sarakkeeseen',
                    dColPct: '% Ero edelliseen sarakkeeseen',
                    dPctGrand: 'prosenttia kokonaissummasta',
                    dPctRow: 'prosenttia rivin kokonaissumman',
                    dPctCol: 'prosenttia sarakkeesta yhteensä',
                    dRunTot: 'Juokseva summa',
                    dRunTotPct: '% summa'
                },
                formats: {
                    n0: 'Kokonaisluku (n0)',
                    n2: 'Desimaalin (n2)',
                    c: 'Valuutta (c)',
                    p0: 'Prosenttiosuus (p0)',
                    p2: 'Prosenttiosuus (p2)',
                    n2c: 'Tuhansia (n2,)',
                    n2cc: 'Miljoonia (n2,,)',
                    n2ccc: 'Miljardeja (n2,,,)',
                    d: 'Päivämäärä (d)',
                    MMMMddyyyy: 'Kuukausi päivä vuosi (MMMM dd, yyyy)',
                    dMyy: 'Päivä kuukausi vuosi (d/M/yy)',
                    ddMyy: 'Päivä kuukausi vuosi (dd/M/yy)',
                    dMyyyy: 'Päivä kuukausi vuosi (dd/M/yyyy)',
                    MMMyyyy: 'Kuukausi vuosi (MMM yyyy)',
                    MMMMyyyy: 'Kuukausi vuosi (MMMM yyyy)',
                    yyyyQq: 'Vuoden neljänneksellä (yyyy "Q"q)',
                    FYEEEEQU: 'Tilikauden neljännes ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Kokonaissumma',
                subTotal: 'Välisumma'
            },
            PivotPanel: {
                fields: 'Valitse raporttiin lisättävät kentät:',
                drag: 'Vedä kenttiä alla olevien alueiden välillä:',
                filters: 'Suodattimet',
                cols: 'Sarakkeet',
                rows: 'Rivit',
                vals: 'arvoa',
                defer: 'Lykätä päivitykset',
                update: 'Päivitä'
            },
            _ListContextMenu: {
                up: 'Siirrä ylös',
                down: 'Siirrä alas',
                first: 'Siirrä alkuun',
                last: 'Siirrä loppuun',
                filter: 'Siirrä raporttisuodattimeen',
                rows: 'Siirrä riviotsikoihin',
                cols: 'Siirrä sarakeotsikoihin',
                vals: 'Siirrä arvoihin',
                remove: 'Poista kenttä',
                edit: 'Kentän asetukset…',
                detail: 'Näytä tiedot…'
            },
            PivotChart: {
                by: 'by',
                and: '–'
            },
            DetailDialog: {
                header: 'Yksityiskohtaisessa näkymässä:',
                ok: 'OK',
                items: '{cnt:n0}-kohteet',
                item: '{cnt} kohdetta',
                row: 'Rivi',
                col: 'Sarake'
            }
        },
        Viewer: {
            cancel: 'Peruuta',
            ok: 'OK',
            bottom: 'Alhaalla:',
            top: 'Ylhäällä:',
            right: 'Oikealla:',
            left: 'Vasemmalla:',
            margins: 'Reunukset (tuumina)',
            orientation: 'Suunta:',
            paperKind: 'Paperin tyyppi:',
            pageSetup: 'Sivun asetukset',
            landscape: 'Vaaka',
            portrait: 'Pysty',
            pageNumber: 'Sivunumero',
            zoomFactor: 'Zoomauskerroin',
            paginated: 'Tulostusasettelu',
            print: 'Tulostaminen',
            search: 'Haku',
            matchCase: 'Sama kirjainkoko',
            wholeWord: 'Koko sana',
            searchResults: 'Hakutulokset',
            previousPage: 'Edellinen sivu',
            nextPage: 'Seuraava sivu',
            firstPage: 'Ensimmäinen sivu',
            lastPage: 'Viimeinen sivu',
            backwardHistory: 'Taaksepäin',
            forwardHistory: 'Seuraava',
            pageCount: 'Sivumäärä',
            selectTool: 'Valitse työkalu',
            moveTool: 'Siirtotyökalu',
            continuousMode: 'Jatkuva sivunäkymässä',
            singleMode: 'Yhden sivun näkymä',
            wholePage: 'Sovita koko sivu',
            pageWidth: 'Sovita sivun leveys',
            zoomOut: 'Loitonna',
            zoomIn: 'Lähennä',
            rubberbandTool: 'Zoomaa valinta',
            magnifierTool: 'suurennuslasi',
            rotatePage: 'Kierrä sivua',
            rotateDocument: 'Kierrä asiakirjaa',
            exports: 'Vie',
            fullScreen: 'Koko näyttö',
            exitFullScreen: 'Poistu koko näytön tilasta',
            hamburgerMenu: 'Työkalut',
            showSearchBar: 'Näytä etsintäpalkki',
            viewMenu: 'Asetteluasetukset',
            searchOptions: 'Hakuasetukset',
            matchCaseMenuItem: 'Sama kirjainkoko',
            wholeWordMenuItem: 'Koko sana',
            thumbnails: 'Sivujen pikkukuvia',
            outlines: 'asiakirjan rakenneruutu',
            loading: 'Ladataan…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML sana',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Web-arkisto (MHTML)',
            htmlExportName: 'HTML-asiakirja',
            rtfExportName: 'RTF-asiakirja',
            metafileExportName: 'Pakattu metatiedostojen',
            csvExportName: 'CSV',
            tiffExportName: 'TIFF-kuvien',
            bmpExportName: 'BMP kuvia',
            emfExportName: 'Laajennettu metatiedosto',
            gifExportName: 'GIF-kuvia',
            jpgExportName: 'JPEG-kuvat',
            jpegExportName: 'JPEG-kuvat',
            pngExportName: 'PNG-kuvia',
            abstractMethodException: 'Tämä on abstrakti menetelmä, toteuta se.',
            cannotRenderPageNoViewPage: 'Ei voi tehdä ilman asiakirjan lähde ja katso sivu.',
            cannotRenderPageNoDoc: 'Ei voi tehdä ilman asiakirjan lähde ja katso sivu.',
            exportFormat: 'Vientimuoto:',
            exportOptionTitle: 'Viennin asetukset',
            documentRestrictionsGroup: 'Asiakirjan rajoitukset',
            passwordSecurityGroup: 'Salasanasuojaus',
            outputRangeGroup: 'Tulostusalueen',
            documentInfoGroup: 'Asiakirjan tiedot',
            generalGroup: 'Yleiset',
            docInfoTitle: 'Otsikko',
            docInfoAuthor: 'Tekijä',
            docInfoManager: 'Vastuuhenkilö',
            docInfoOperator: 'Operaattori',
            docInfoCompany: 'Yritys',
            docInfoSubject: 'Hakija',
            docInfoComment: 'Kommentoi',
            docInfoCreator: 'Tekijä',
            docInfoProducer: 'Tuottaja',
            docInfoCreationTime: 'Luontiaika',
            docInfoRevisionTime: 'Tarkistaminen aikaa',
            docInfoKeywords: 'Avainsanat',
            embedFonts: 'Upota TrueType-fontit',
            pdfACompatible: 'PDF/A-yhteensopiva (tason 2B)',
            useCompression: 'Käytä pakkausta',
            useOutlines: 'Luo ääriviivat',
            allowCopyContent: 'Sisällön kopioiminen tai louhinta',
            allowEditAnnotations: 'Huomautus muokkausta',
            allowEditContent: 'Sisällön muokkaamisen salliminen',
            allowPrint: 'Salli tulostus',
            ownerPassword: 'Käyttöoikeudet (omistaja) salasana:',
            userPassword: 'Asiakirja Avaa (käyttäjän) salasana:',
            encryptionType: 'Salaustaso:',
            paged: 'Sivutettu',
            showNavigator: 'Näytä etsintä',
            navigatorPosition: 'Navigatorin sijainti',
            singleFile: 'Yhteen tiedostoon',
            tolerance: 'Toleranssi, jos se havaitsee tekstin rajat (pistettä):',
            pictureLayer: 'Käytä erillistä kuvakerros',
            metafileType: 'Metafile tyyppi:',
            monochrome: 'Yksivärinen',
            resolution: 'Tarkkuus:',
            outputRange: 'Sivualue:',
            outputRangeInverted: 'Käänteinen',
            showZoomBar: 'Zoom pylväs',
            searchPrev: 'Etsi edellinen',
            searchNext: 'Etsi seuraava',
            checkMark: '\u2713',
            exportOk: 'Vie…',
            cannotSearch: 'Haku edellyttää dokumentin lähteen määrittämistä.',
            parameters: 'parameters',
            requiringParameters: 'Anna parametrit.',
            nullParameterError: 'Arvo ei voi olla null.',
            invalidParameterError: 'Virheellinen syöte.',
            parameterNoneItemsSelected: '(ei mitään)',
            parameterAllItemsSelected: '(kaikki)',
            parameterSelectAllItemText: '(Valitse kaikki)',
            selectParameterValue: '(Valitse arvo)',
            apply: 'Käytä',
            errorOccured: 'Järjestelmässä on ilmennyt virhe.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

