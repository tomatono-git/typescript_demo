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
 * Wijmo culture file: hu (Hungarian)
 */
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'hu',
            displayName: 'Hungarian',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: 'Ft', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '. ',
                ':': ':',
                firstDay: 1,
                days: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
                daysAbbr: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                months: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
                monthsAbbr: ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'],
                am: ['de.', 'de.'],
                pm: ['du.', 'du.'],
                eras: ['i. sz.'],
                patterns: {
                    d: 'yyyy. MM. dd.', D: 'yyyy. MMMM d., dddd',
                    f: 'yyyy. MMMM d., dddd H:mm', F: 'yyyy. MMMM d., dddd H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'MMMM d.', M: 'MMMM d.',
                    y: 'yyyy. MMMM', Y: 'yyyy. MMMM',
                    g: 'yyyy. MM. dd. H:mm', G: 'yyyy. MM. dd. H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} kiválasztott tételek',
            selectAll: 'Az összes kiválasztása'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} elemek)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Növekvő',
            descending: '\u2193 Csökkenő',
            apply: 'Alkalmaz',
            clear: 'Törlés',
            conditions: 'Szűrés feltétel szerint',
            values: 'Szűrés érték szerint',
            // value filter
            search: 'Keresés',
            selectAll: 'Az összes kiválasztása',
            null: '(semmi)',
            // condition filter
            header: 'Olyan elemek megjelenítése, ahol az érték',
            and: 'És',
            or: 'vagy',
            stringOperators: [
                { name: '(nincs megadva)', op: null },
                { name: 'egyenlő', op: 0 },
                { name: 'Nem egyenlő', op: 1 },
                { name: 'Ezzel kezdődik', op: 6 },
                { name: 'Ezzel végződik', op: 7 },
                { name: 'Tartalmazza a következőt', op: 8 },
                { name: 'Nem tartalmazza a következőt', op: 9 }
            ],
            numberOperators: [
                { name: '(nincs megadva)', op: null },
                { name: 'egyenlő', op: 0 },
                { name: 'Nem egyenlő', op: 1 },
                { name: 'Nagyobb, mint', op: 2 },
                { name: 'Nagyobb vagy egyenlő', op: 3 },
                { name: 'Kisebb, mint', op: 4 },
                { name: 'Kisebb vagy egyenlő', op: 5 }
            ],
            dateOperators: [
                { name: '(nincs megadva)', op: null },
                { name: 'egyenlő', op: 0 },
                { name: 'Korábbi', op: 4 },
                { name: 'Későbbi', op: 2 }
            ],
            booleanOperators: [
                { name: '(nincs megadva)', op: null },
                { name: 'egyenlő', op: 0 },
                { name: 'Nem egyenlő', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Értékmező-beállítások:',
                header: 'Táblafej:',
                summary: 'Összegzés:',
                showAs: 'Mutat, mint:',
                weighBy: 'Mérjük meg a:',
                sort: 'Rendezés:',
                filter: 'Szűrő:',
                format: 'Formátum:',
                sample: 'Minta:',
                edit: 'Szerkesztése…',
                clear: 'Törlés',
                ok: 'OK',
                cancel: 'Mégse',
                none: '(semmi)',
                sorts: {
                    asc: 'Növekvő',
                    desc: 'Csökkenő'
                },
                aggs: {
                    sum: 'Összeg',
                    cnt: 'Darabszám',
                    avg: 'Átlag',
                    max: 'Max',
                    min: 'Min',
                    rng: 'Tartomány',
                    std: 'Szórás',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Első',
                    last: 'Utolsó'
                },
                calcs: {
                    noCalc: 'Nincs számítás',
                    dRow: 'Különbség az előző sor',
                    dRowPct: 'Különbség az előző sor %',
                    dCol: 'Különbség az előző oszlop',
                    dColPct: 'Különbség az előző oszlop %',
                    dPctGrand: 'végösszeg százaléka',
                    dPctRow: '%-a teljes sor',
                    dPctCol: '%-a teljes oszlop',
                    dRunTot: 'Göngyölített összeg',
                    dRunTotPct: '%-os teljes'
                },
                formats: {
                    n0: 'Egész szám (n0)',
                    n2: 'Decimális (n2)',
                    c: 'Pénznem (c)',
                    p0: 'Százalék (p0)',
                    p2: 'Százalék (p2)',
                    n2c: 'Több ezer (n2,)',
                    n2cc: 'Több millió (n2,,)',
                    n2ccc: 'Milliárd (n2,,,)',
                    d: 'Dátum (d)',
                    MMMMddyyyy: 'Év hónap nap (MMMM dd, yyyy)',
                    dMyy: 'Év hónap nap (d/M/yy)',
                    ddMyy: 'Év hónap nap (dd/M/yy)',
                    dMyyyy: 'Év hónap nap (dd/M/yyyy)',
                    MMMyyyy: 'Év hónap (MMM yyyy)',
                    MMMMyyyy: 'Év hónap (MMMM yyyy)',
                    yyyyQq: 'Évben negyed (yyyy"Q" q)',
                    FYEEEEQU: 'Pénzügyi év negyed ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Végösszeg',
                subTotal: 'Részösszeg'
            },
            PivotPanel: {
                fields: 'Mezők felvétele a jelentés kiválasztása:',
                drag: 'Húzza a mezőket a lenti területek közé:',
                filters: 'Szűrők',
                cols: 'Oszlopok',
                rows: 'Sorok',
                vals: 'érték lesz.',
                defer: 'Elhalasztja a frissítések',
                update: 'Frissítés'
            },
            _ListContextMenu: {
                up: 'Feljebb',
                down: 'Lejjebb',
                first: 'Elejére',
                last: 'Ugrás végére',
                filter: 'Áthelyezés a jelentésszűrőhöz',
                rows: 'Áthelyezés a sorcímkékhez',
                cols: 'Áthelyezés az oszlopcímkékhez',
                vals: 'Áthelyezés az értékekhez',
                remove: 'Mező eltávolítása',
                edit: 'Mezőbeállítások…',
                detail: 'Részletek megjelenítése…'
            },
            PivotChart: {
                by: 'az',
                and: 'és'
            },
            DetailDialog: {
                header: 'Részlet nézet:',
                ok: 'OK',
                items: '{cnt:n0} elem',
                item: 'cikk {cnt}',
                row: 'Sor',
                col: 'Oszlop'
            }
        },
        Viewer: {
            cancel: 'Mégse',
            ok: 'OK',
            bottom: 'Alsó:',
            top: 'Felső:',
            right: 'Jobb:',
            left: 'Bal:',
            margins: 'Margók (hüvelyk)',
            orientation: 'Tájolás:',
            paperKind: 'Papír-fajta:',
            pageSetup: 'Oldalbeállítás',
            landscape: 'Fekvő',
            portrait: 'Álló',
            pageNumber: 'Oldalszám',
            zoomFactor: 'Zoom tényező',
            paginated: 'Nyomtatási elrendezés',
            print: 'Nyomtatás',
            search: 'Keresés',
            matchCase: 'Kis- és nagybetűk megkülönböztetése',
            wholeWord: 'Csak teljes szavak',
            searchResults: 'Keresés eredménye',
            previousPage: 'Előző oldal',
            nextPage: 'Következő oldal',
            firstPage: 'Első oldal',
            lastPage: 'Utolsó oldal',
            backwardHistory: 'Vissza',
            forwardHistory: 'Előre',
            pageCount: 'Oldalak száma',
            selectTool: 'Válassza ki az eszköz',
            moveTool: 'Lépés eszköz',
            continuousMode: 'Folyamatos lap nézetben',
            singleMode: 'Egyetlen lap nézetben',
            wholePage: 'Az egész Oldalhoz igazítás',
            pageWidth: 'Oldal szélességének megfelelően',
            zoomOut: 'Kicsinyítés',
            zoomIn: 'Nagyítás',
            rubberbandTool: 'Nagyítás a kiválasztással',
            magnifierTool: 'nagyító',
            rotatePage: 'Oldal elforgatása',
            rotateDocument: 'Dokumentum elforgatása',
            exports: 'Exportálás',
            fullScreen: 'Teljes képernyő',
            exitFullScreen: 'Kilépés a teljes képernyős módból',
            hamburgerMenu: 'Eszközök',
            showSearchBar: 'Keresősáv megjelenítése',
            viewMenu: 'Elrendezési beállítások',
            searchOptions: 'Keresési beállítások',
            matchCaseMenuItem: 'Kis- és nagybetűk megkülönböztetése',
            wholeWordMenuItem: 'Ez a teljes szó',
            thumbnails: 'Az oldalbélyegképek',
            outlines: 'Dokumentumtérkép',
            loading: 'Betöltése…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML Word',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Webarchívum (MHTML)',
            htmlExportName: 'HTML-dokumentum',
            rtfExportName: 'RTF-dokumentum',
            metafileExportName: 'Tömörített metafájlok',
            csvExportName: 'CSV',
            tiffExportName: 'TIFF-képek',
            bmpExportName: 'BMP-képek',
            emfExportName: 'Bővített metafájl',
            gifExportName: 'GIF képek',
            jpgExportName: 'JPEG-képek',
            jpegExportName: 'JPEG-képek',
            pngExportName: 'PNG képek',
            abstractMethodException: 'Ez egy absztrakt metódus, kérjük végrehajtása érdekében.',
            cannotRenderPageNoViewPage: 'Nem tétele, oldal nélkül dokumentum forrás és kilátás oldal.',
            cannotRenderPageNoDoc: 'Nem tétele, oldal nélkül dokumentum forrás és kilátás oldal.',
            exportFormat: 'Exportálási formátum:',
            exportOptionTitle: 'Exportálási beállítások',
            documentRestrictionsGroup: 'Dokumentum korlátozások',
            passwordSecurityGroup: 'Jelszóbiztonság',
            outputRangeGroup: 'Kimeneti tartomány',
            documentInfoGroup: 'Dokumentumra vonatkozó információk',
            generalGroup: 'Általános',
            docInfoTitle: 'Title',
            docInfoAuthor: 'Szerző',
            docInfoManager: 'Felettes',
            docInfoOperator: 'Operátor',
            docInfoCompany: 'Cég',
            docInfoSubject: 'Tulajdonos',
            docInfoComment: 'Hozzászólás',
            docInfoCreator: 'Létrehozó',
            docInfoProducer: 'Producer',
            docInfoCreationTime: 'Létrehozás ideje',
            docInfoRevisionTime: 'Felülvizsgálatának ideje',
            docInfoKeywords: 'Kulcsszavak',
            embedFonts: 'TrueType betűtípusok beágyazása',
            pdfACompatible: 'PDF/A kompatibilis (2B. szint)',
            useCompression: 'Tömörítéssel',
            useOutlines: 'Létre körvonalai',
            allowCopyContent: 'Lehetővé teszi a tartalom másolását vagy kitermelése',
            allowEditAnnotations: 'Jegyzet szerkesztésének engedélyezése',
            allowEditContent: 'Tartalom szerkesztésének engedélyezése',
            allowPrint: 'Lehetővé teszi a nyomtatást',
            ownerPassword: 'Engedélyek (tulajdonos) jelszó:',
            userPassword: 'Dokumentum megnyitása (felhasználó) jelszavát:',
            encryptionType: 'Titkosítási szint:',
            paged: 'Lapozható',
            showNavigator: 'Navigator Térkép',
            navigatorPosition: 'Navigátor pozíció',
            singleFile: 'Egyetlen fájl',
            tolerance: 'Tolerancia észlelésekor szöveges határait (pont):',
            pictureLayer: 'Használata külön képet réteg',
            metafileType: 'Metafájl típus:',
            monochrome: 'Monokróm',
            resolution: 'Felbontás:',
            outputRange: 'Oldaltartomány:',
            outputRangeInverted: 'Fordított',
            showZoomBar: 'Berreg büfé',
            searchPrev: 'Keresés az előző',
            searchNext: 'Keresés a következő',
            checkMark: '\u2713',
            exportOk: 'Exportálás…',
            cannotSearch: 'A kereséshez dokumentumforrás szükséges.',
            parameters: 'Parameters',
            requiringParameters: 'Kérjük bemeneti paramétereket.',
            nullParameterError: 'Az érték nem lehet null.',
            invalidParameterError: 'Hibás belépési.',
            parameterNoneItemsSelected: '(semmi)',
            parameterAllItemsSelected: '(összes)',
            parameterSelectAllItemText: '(Mindegyik kiválasztása)',
            selectParameterValue: '(válassza ki az értéket)',
            apply: 'Alkalmaz',
            errorOccured: 'Hiba történt.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

