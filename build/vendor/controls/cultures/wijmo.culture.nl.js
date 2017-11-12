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
 * Wijmo culture file: nl (Dutch)
 */
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'nl',
            displayName: 'Dutch',
            numberFormat: {
                '.': ',',
                ',': '.',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: '€', pattern: ['$ -n', '$ n'] }
            },
            calendar: {
                '/': '-',
                ':': ':',
                firstDay: 1,
                days: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
                daysAbbr: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
                months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
                monthsAbbr: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['n.Chr.'],
                patterns: {
                    d: 'd-M-yyyy', D: 'dddd d MMMM yyyy',
                    f: 'dddd d MMMM yyyy HH:mm', F: 'dddd d MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'd-M-yyyy HH:mm', G: 'd-M-yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} geselecteerde artikelen',
            selectAll: 'Alles selecteren'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} items)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Oplopend',
            descending: '\u2193 Aflopend',
            apply: 'Toepassen',
            clear: 'Wissen',
            conditions: 'Filteren op voorwaarde',
            values: 'Filteren op waarde',
            // value filter
            search: 'Zoeken',
            selectAll: 'Alles selecteren',
            null: '(niets)',
            // condition filter
            header: 'Toon objecten waar de waarde',
            and: 'En',
            or: 'Of',
            stringOperators: [
                { name: '(niet ingesteld)', op: null },
                { name: 'Gelijk aan', op: 0 },
                { name: 'Niet gelijk aan', op: 1 },
                { name: 'Begint met', op: 6 },
                { name: 'Eindigt op', op: 7 },
                { name: 'Bevat', op: 8 },
                { name: 'Bevat niet', op: 9 }
            ],
            numberOperators: [
                { name: '(niet ingesteld)', op: null },
                { name: 'Gelijk aan', op: 0 },
                { name: 'Niet gelijk aan', op: 1 },
                { name: 'Is groter dan', op: 2 },
                { name: 'Is groter dan of gelijk aan', op: 3 },
                { name: 'Is kleiner dan', op: 4 },
                { name: 'Is kleiner dan of gelijk aan', op: 5 }
            ],
            dateOperators: [
                { name: '(niet ingesteld)', op: null },
                { name: 'Gelijk aan', op: 0 },
                { name: 'is voor', op: 4 },
                { name: 'is na', op: 2 }
            ],
            booleanOperators: [
                { name: '(niet ingesteld)', op: null },
                { name: 'Gelijk aan', op: 0 },
                { name: 'Niet gelijk aan', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Veldinstellingen:',
                header: 'Veldnamenbestand:',
                summary: 'Samenvatting:',
                showAs: 'Toon als:',
                weighBy: 'Wegen door:',
                sort: 'Sorteervolgorde:',
                filter: 'Filter:',
                format: 'Opmaak:',
                sample: 'Voorbeeld:',
                edit: 'Bewerken…',
                clear: 'Wissen',
                ok: 'OK',
                cancel: 'Annuleren',
                none: '(geen)',
                sorts: {
                    asc: 'Oplopend',
                    desc: 'Aflopend'
                },
                aggs: {
                    sum: 'Som',
                    cnt: 'Aantal',
                    avg: 'Gemiddelde',
                    max: 'Max',
                    min: 'Min',
                    rng: 'Bereik',
                    std: 'Stdev',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Eerste',
                    last: 'Laatste'
                },
                calcs: {
                    noCalc: 'Geen berekening',
                    dRow: 'Verschil met vorige rij',
                    dRowPct: '% Verschil met de vorige rij',
                    dCol: 'Verschil met vorige kolom',
                    dColPct: '% Verschil met de vorige kolom',
                    dPctGrand: '% van totaal',
                    dPctRow: '% van totale rij',
                    dPctCol: '% van kolom totale',
                    dRunTot: 'Lopend totaal',
                    dRunTotPct: '% lopend totaal'
                },
                formats: {
                    n0: 'Geheel getal (n0)',
                    n2: 'Float (n2)',
                    c: 'Munt (c)',
                    p0: 'Percentage (p0)',
                    p2: 'Percentage (p2)',
                    n2c: 'Duizenden (n2)',
                    n2cc: 'Miljoenen (n2,,)',
                    n2ccc: 'Miljarden (n2,,,)',
                    d: 'Datum (d)',
                    MMMMddyyyy: 'Jaar van de dagen van de maand (dd MMMM, jjjj)',
                    dMyy: 'Dag maand jaar (d/M/JJ)',
                    ddMyy: 'Dag maand jaar (dd/M/JJ)',
                    dMyyyy: 'Dag maand jaar (dd/M/jjjj)',
                    MMMyyyy: 'Maand jaar (MMM jjjj)',
                    MMMMyyyy: 'Maand jaar (MMMM jjjj)',
                    yyyyQq: 'Kwartaal van het jaar (yyyy "Q"q)',
                    FYEEEEQU: 'Kwartaal van het fiscale jaar (EEEE "Q" U "FY")'
                }
            },
            PivotEngine: {
                grandTotal: 'Eindtotaal',
                subTotal: 'Subtotaal'
            },
            PivotPanel: {
                fields: 'Kies de velden toe te voegen aan verslag:',
                drag: 'Velden slepen tussen onderstaande gebieden:',
                filters: 'Filters',
                cols: 'Kolommen',
                rows: 'Rijen',
                vals: 'Waarden',
                defer: 'Uitstellen van Updates',
                update: 'Bijwerken'
            },
            _ListContextMenu: {
                up: 'Omhoog',
                down: 'Omlaag',
                first: 'Naar begin verplaatsen',
                last: 'Naar einde verplaatsen',
                filter: 'Naar rapportfilter verplaatsen',
                rows: 'Naar rijlabels verplaatsen',
                cols: 'Naar kolomlabels verplaatsen',
                vals: 'Naar waarden verplaatsen',
                remove: 'Veld verwijderen',
                edit: 'Veldinstellingen…',
                detail: 'Details weergeven…'
            },
            PivotChart: {
                by: 'op',
                and: 'en'
            },
            DetailDialog: {
                header: 'Detail bekijken:',
                ok: 'OK',
                items: '{cnt:n0} items',
                item: '{cnt} object',
                row: 'Rij',
                col: 'Kolom'
            }
        },
        Viewer: {
            cancel: 'Annuleren',
            ok: 'OK',
            bottom: 'Bodem:',
            top: 'Vanaf bovenkant:',
            right: 'Rechts:',
            left: 'Links:',
            margins: 'Marges (inches)',
            orientation: 'Schermstand:',
            paperKind: 'Papier soort:',
            pageSetup: 'Pagina-instelling',
            landscape: 'Liggend',
            portrait: 'Staand',
            pageNumber: 'Paginanummer',
            zoomFactor: 'Zoomfactor',
            paginated: 'Afdrukweergave',
            print: 'Afdrukken',
            search: 'Zoeken',
            matchCase: 'Identieke hoofdletters/kleine letters',
            wholeWord: 'Alleen zoeken naar heel woord',
            searchResults: 'Zoekresultaten',
            previousPage: 'Vorige pagina',
            nextPage: 'Volgende pagina',
            firstPage: 'Eerste pagina',
            lastPage: 'Laatste pagina',
            backwardHistory: 'Terug',
            forwardHistory: 'Vooruit',
            pageCount: 'Aantal pagina\'s',
            selectTool: 'Selecteer gereedschap',
            moveTool: 'Verplaatsgereedschap',
            continuousMode: 'Continu weergave van de pagina',
            singleMode: 'Eén pagina weergeven',
            wholePage: 'Fit hele pagina',
            pageWidth: 'Binnen paginabreedte past',
            zoomOut: 'Uitzoomen',
            zoomIn: 'Inzoomen',
            rubberbandTool: 'Zoom per selectie',
            magnifierTool: 'Vergrootglas',
            rotatePage: 'Draai pagina',
            rotateDocument: 'Document draaien',
            exports: 'Exporteren',
            fullScreen: 'Volledig scherm',
            exitFullScreen: 'Volledig scherm afsluiten',
            hamburgerMenu: 'Extra',
            showSearchBar: 'Zoekbalk weergeven',
            viewMenu: 'Indelingsopties',
            searchOptions: 'Zoekopties',
            matchCaseMenuItem: 'Identieke hoofdletters/kleine letters',
            wholeWordMenuItem: 'Heel woord',
            thumbnails: 'Paginaminiaturen',
            outlines: 'Documentstructuur',
            loading: 'Bezig met laden…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML-Word',
            xlsxExportName: 'Open XML-Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Webarchiefbestand (MHTML)',
            htmlExportName: 'HTML-document',
            rtfExportName: 'RTF-document',
            metafileExportName: 'Gecomprimeerde metabestanden',
            csvExportName: 'CSV',
            tiffExportName: 'TIFF-afbeeldingen',
            bmpExportName: 'BMP-afbeeldingen',
            emfExportName: 'Enhanced metabestand',
            gifExportName: 'GIF-afbeeldingen',
            jpgExportName: 'JPEG-afbeeldingen',
            jpegExportName: 'JPEG-afbeeldingen',
            pngExportName: 'PNG-afbeeldingen',
            abstractMethodException: 'Dit is een abstracte methode, gelieve uit te voeren.',
            cannotRenderPageNoViewPage: 'Niet worden weergegeven zonder brondocument en weergavepagina.',
            cannotRenderPageNoDoc: 'Niet worden weergegeven zonder brondocument en weergavepagina.',
            exportFormat: 'Exportindeling:',
            exportOptionTitle: 'Exportopties',
            documentRestrictionsGroup: 'Document beperkingen',
            passwordSecurityGroup: 'Wachtwoordbeveiliging',
            outputRangeGroup: 'Uitvoerbereik',
            documentInfoGroup: 'Info over document',
            generalGroup: 'Algemeen',
            docInfoTitle: 'Titel',
            docInfoAuthor: 'Auteur',
            docInfoManager: 'Manager',
            docInfoOperator: 'Operator',
            docInfoCompany: 'Bedrijf',
            docInfoSubject: 'Houder',
            docInfoComment: 'Opmerking',
            docInfoCreator: 'Auteur',
            docInfoProducer: 'Producer',
            docInfoCreationTime: 'Aanmaaktijd',
            docInfoRevisionTime: 'Tijd voor herziening',
            docInfoKeywords: 'Trefwoorden',
            embedFonts: 'TrueType-lettertypen insluiten',
            pdfACompatible: 'PDF/A-compatibel (niveau 2B)',
            useCompression: 'Compressie gebruiken',
            useOutlines: 'Overzichten genereren',
            allowCopyContent: 'Inhoud kopiëren of extractie toestaan',
            allowEditAnnotations: 'Aantekening bewerken toestaan',
            allowEditContent: 'Inhoud bewerken toestaan',
            allowPrint: 'Afdrukken toestaan',
            ownerPassword: 'Wachtwoord voor machtigingen (eigenaar):',
            userPassword: 'Wachtwoord voor document openen (gebruiker):',
            encryptionType: 'Coderingsniveau instellen:',
            paged: 'In wisselbestand',
            showNavigator: 'Navigator weergeven',
            navigatorPosition: 'Navigatorpositie',
            singleFile: 'Single bestand',
            tolerance: 'Tolerantie bij het opsporen van tekst grenzen (punten):',
            pictureLayer: 'Gebruik aparte foto laag',
            metafileType: 'Metafile Type:',
            monochrome: 'Monochroom',
            resolution: 'Resolutie:',
            outputRange: 'Paginabereik:',
            outputRangeInverted: 'Omgekeerd',
            showZoomBar: 'Zoombalk',
            searchPrev: 'Zoek in afgelopen',
            searchNext: 'Zoekt de processor vervolgens',
            checkMark: '\u2713',
            exportOk: 'Exporteren…',
            cannotSearch: 'Zoeken vereist dat een documentbron wordt opgegeven.',
            parameters: 'Parameters',
            requiringParameters: 'Voer parameters.',
            nullParameterError: 'Waarde kan niet null zijn.',
            invalidParameterError: 'Ongeldige invoer.',
            parameterNoneItemsSelected: '(geen)',
            parameterAllItemsSelected: '(alle)',
            parameterSelectAllItemText: '(Selecteer alles)',
            selectParameterValue: '(waarde selecteren)',
            apply: 'Toepassen',
            errorOccured: 'Er is een fout opgetreden.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

